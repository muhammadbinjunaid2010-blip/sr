/* ============================================================
   SkillRun - Circuit simulator + SVG renderer (V2)
   A tiny virtual electronics kit for the "Circuit Runner" path.
   Model: named pins carry a voltage (0 or 5), wires connect pins,
   LEDs/resistors/buttons attach to pins. step() recomputes what
   is lit. CircuitSVG.render() draws the circuit as inline SVG so
   learners SEE their builds light up.

   API (learner-facing, via global Circuit):
     create(), setPin(c, pin, v), connect(c, a, b),
     led(c, pin, color), resistor(c, pin, ohms), button(c, pin),
     press(c, id, bool), step(c), voltage(c, pin),
     isLit(c, id), lit(c), log(c, msg), logs(c)
     bandValue(color), resistorOhms(bands), dividerOut(vIn, r1, r2)
   ============================================================ */

var Circuit = (function () {

  var COLORS = { black: 0, brown: 1, red: 2, orange: 3, yellow: 4, green: 5, blue: 6, violet: 7, grey: 8, white: 9 };

  function create() {
    var c = {
      pins: { "5v": 5, "gnd": 0 },
      wires: [],
      leds: [],
      resistors: [],
      buttons: [],
      notes: []
    };
    var d;
    for (d = 2; d <= 13; d++) { c.pins["d" + d] = 0; }
    for (var a = 0; a <= 5; a++) { c.pins["a" + a] = 0; }
    return c;
  }

  function hasPin(c, pin) { return Object.prototype.hasOwnProperty.call(c.pins, pin); }

  function setPin(c, pin, v) {
    if (!hasPin(c, pin)) { throw new Error("No pin '" + pin + "' (use 5v, gnd, d2-d13 or a0-a5)"); }
    c.pins[pin] = v === true ? 5 : v;
    return c;
  }

  function connect(c, a, b) {
    if (!hasPin(c, a) || !hasPin(c, b)) { throw new Error("connect: unknown pin '" + (hasPin(c, a) ? b : a) + "'"); }
    if (a === b) { throw new Error("connect: cannot wire a pin to itself"); }
    var shared = Math.max(c.pins[a], c.pins[b]);
    c.pins[a] = shared;
    c.pins[b] = shared;
    c.wires.push({ a: a, b: b });
    return c;
  }

  function led(c, pin, color) {
    if (!hasPin(c, pin)) { throw new Error("led: unknown pin '" + pin + "'"); }
    c.leds.push({ id: c.leds.length, pin: pin, color: color || "red", on: false });
    return c;
  }

  function resistor(c, pin, ohms) {
    if (!hasPin(c, pin)) { throw new Error("resistor: unknown pin '" + pin + "'"); }
    c.resistors.push({ id: c.resistors.length, pin: pin, ohms: ohms });
    return c;
  }

  function button(c, pin) {
    if (!hasPin(c, pin)) { throw new Error("button: unknown pin '" + pin + "'"); }
    c.buttons.push({ id: c.buttons.length, pin: pin, pressed: false });
    return c;
  }

  function press(c, id, bool) {
    var b = c.buttons[id];
    if (!b) { throw new Error("press: no button " + id); }
    b.pressed = !!bool;
    return c;
  }

  function resistorFor(c, pin) {
    for (var i = 0; i < c.resistors.length; i++) {
      if (c.resistors[i].pin === pin) { return c.resistors[i]; }
    }
    return null;
  }

  function step(c) {
    for (var i = 0; i < c.buttons.length; i++) {
      var b = c.buttons[i];
      c.pins[b.pin] = b.pressed ? 5 : 0;
    }
    for (var l = 0; l < c.leds.length; l++) {
      var e = c.leds[l];
      var r = resistorFor(c, e.pin);
      var safe = !r || r.ohms <= 330;
      e.on = c.pins[e.pin] > 0 && safe;
    }
    return c;
  }

  function voltage(c, pin) {
    if (!hasPin(c, pin)) { throw new Error("voltage: unknown pin '" + pin + "'"); }
    return c.pins[pin];
  }

  function isLit(c, id) {
    var e = c.leds[id];
    if (!e) { throw new Error("isLit: no LED " + id); }
    return !!e.on;
  }

  function lit(c) {
    return c.leds.filter(function (l) { return l.on; }).map(function (l) { return l.id; });
  }

  function log(c, msg) { c.notes.push(String(msg)); return c; }
  function logs(c) { return c.notes.slice(); }

  function bandValue(color) {
    if (!(color in COLORS)) { throw new Error("Unknown band color '" + color + "'"); }
    return COLORS[color];
  }

  function resistorOhms(bands) {
    if (bands.length !== 3) { throw new Error("Give 3 bands: value, value, multiplier"); }
    var two = bandValue(bands[0]) * 10 + bandValue(bands[1]);
    return two * Math.pow(10, bandValue(bands[2]));
  }

  function dividerOut(vIn, r1, r2) { return vIn * r2 / (r1 + r2); }

  return {
    create: create,
    setPin: setPin,
    connect: connect,
    led: led,
    resistor: resistor,
    button: button,
    press: press,
    step: step,
    voltage: voltage,
    isLit: isLit,
    lit: lit,
    log: log,
    logs: logs,
    bandValue: bandValue,
    resistorOhms: resistorOhms,
    dividerOut: dividerOut
  };
})();

/* ============================================================
   SVG renderer — draws the circuit dark-theme friendly.
   ============================================================ */

var CircuitSVG = (function () {

  var D_X = 120;                 // digital pin x
  var A_X = 245;                 // analog pin x
  var PIN_Y = [];                // pin -> {x, y}

  function pinXY(name) {
    if (PIN_Y[name]) { return PIN_Y[name]; }
    var y;
    if (name === "5v") { y = 24; }
    else if (name === "gnd") { y = 54; }
    else if (/^d\d+$/.test(name)) { y = 16 + parseInt(name.slice(1), 10) * 13; }
    else if (/^a\d+$/.test(name)) { y = 16 + parseInt(name.slice(1), 10) * 13; }
    else { y = 16; }
    var x = /^d/.test(name) ? D_X : (/^a/.test(name) ? A_X : 16);
    PIN_Y[name] = { x: x, y: y };
    return PIN_Y[name];
  }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function ledColor(name) {
    var map = { red: "#ff5d5d", green: "#30d05c", yellow: "#ffd166", blue: "#4da3ff", white: "#e8e8e8" };
    return map[name] || map.red;
  }

  function render(c) {
    var out = [];
    out.push('<svg class="circuit-svg" viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg">');

    out.push('<rect x="2" y="2" width="316" height="206" rx="10" fill="#10151d" stroke="#2a3441"/>');

    out.push('<text x="10" y="14" fill="#5c6b7a" font-size="8" font-family="monospace">POWER</text>');
    out.push('<text x="118" y="14" fill="#5c6b7a" font-size="8" font-family="monospace">DIGITAL</text>');
    out.push('<text x="243" y="14" fill="#5c6b7a" font-size="8" font-family="monospace">ANALOG</text>');

    // power rails
    var r5 = pinXY("5v"), rg = pinXY("gnd");
    out.push('<circle cx="' + r5.x + '" cy="' + r5.y + '" r="5" fill="#ffd166"/>');
    out.push('<text x="' + (r5.x + 9) + '" y="' + (r5.y + 3) + '" fill="#ffd166" font-size="8" font-family="monospace">5V</text>');
    out.push('<circle cx="' + rg.x + '" cy="' + rg.y + '" r="5" fill="#5c6b7a"/>');
    out.push('<text x="' + (rg.x + 9) + '" y="' + (rg.y + 3) + '" fill="#5c6b7a" font-size="8" font-family="monospace">GND</text>');

    // wires
    for (var w = 0; w < c.wires.length; w++) {
      var wa = pinXY(c.wires[w].a), wb = pinXY(c.wires[w].b);
      var hot = c.pins[c.wires[w].a] > 0 || c.pins[c.wires[w].b] > 0;
      var col = hot ? "#37c2ff" : "#6b7c8c";
      out.push('<line x1="' + wa.x + '" y1="' + wa.y + '" x2="' + wb.x + '" y2="' + wb.y + '" stroke="' + col + '" stroke-width="1.6"/>');
    }

    // resistors (zigzag)
    for (var r = 0; r < c.resistors.length; r++) {
      var res = c.resistors[r];
      var p = pinXY(res.pin);
      var x0 = p.x + 18, y0 = p.y, x1 = p.x + 48;
      var mid = (y0 + (y0 + 10)) / 2;
      out.push('<polyline points="' + x0 + ',' + y0 + ' ' + (x0 + 8) + ',' + (mid - 3) + ' ' + (x0 + 16) + ',' + (mid + 3) + ' ' + (x0 + 24) + ',' + (mid - 3) + ' ' + (x0 + 32) + ',' + (mid + 3) + ' ' + x1 + ',' + y0 + '" fill="none" stroke="#f28b82" stroke-width="1.6"/>');
      out.push('<text x="' + (x0 + 12) + '" y="' + (y0 - 5) + '" fill="#f28b82" font-size="7" font-family="monospace">' + res.ohms + '&#8486;</text>');
    }

    // buttons
    for (var b = 0; b < c.buttons.length; b++) {
      var btn = c.buttons[b];
      var bp = pinXY(btn.pin);
      var bx = bp.x + 30, by = bp.y - 5;
      var col2 = btn.pressed ? "#ffd166" : "#4a5561";
      out.push('<rect x="' + bx + '" y="' + by + '" width="16" height="10" rx="2" fill="' + col2 + '" stroke="#e8e8e8" stroke-width="1"/>');
      out.push('<text x="' + bx + '" y="' + (by + 16) + '" fill="#8b98a5" font-size="7" font-family="monospace">' + (btn.pressed ? "ON" : "btn") + '</text>');
    }

    // LEDs
    for (var l = 0; l < c.leds.length; l++) {
      var e = c.leds[l];
      var p2 = pinXY(e.pin);
      var lx = p2.x + 55, ly = p2.y;
      var fill = ledColor(e.color);
      if (e.on) {
        out.push('<circle cx="' + lx + '" cy="' + ly + '" r="9" fill="' + fill + '" opacity="0.25"/>');
      }
      out.push('<circle cx="' + lx + '" cy="' + ly + '" r="5" fill="' + (e.on ? fill : "#2c3440") + '" stroke="' + fill + '" stroke-width="1"/>');
      if (e.on) {
        out.push('<text x="' + (lx - 7) + '" y="' + (ly + 14) + '" fill="' + fill + '" font-size="7" font-family="monospace">ON</text>');
      }
    }

    // pin labels
    for (var k in c.pins) {
      var pc = pinXY(k);
      if (/^d\d+$/.test(k) || /^a\d+$/.test(k)) {
        var litV = c.pins[k] > 0;
        out.push('<text x="' + (pc.x - 4) + '" y="' + (pc.y + 3) + '" text-anchor="end" fill="' + (litV ? "#37c2ff" : "#5c6b7a") + '" font-size="8" font-family="monospace">' + esc(k) + '</text>');
        out.push('<circle cx="' + pc.x + '" cy="' + pc.y + '" r="3" fill="' + (litV ? "#37c2ff" : "#2c3440") + '"/>');
      }
    }

    out.push('</svg>');
    return out.join("");
  }

  return { render: render, pinXY: pinXY };
})();