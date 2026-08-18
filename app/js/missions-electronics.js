/* ============================================================
   SkillRun - "Circuit Runner" series (V2)
   Electronics missions for the built-in Circuit simulator.
   Learners write a top-level SCRIPT using a ready circuit C
   (Circuit.create() is done for them). Run renders the board
   as SVG; Check inspects window.__C.
   ============================================================ */

registerMissions([
  {
    id: "circuit-power",
    num: 39,
    title: "Circuit Power",
    tagline: "Give pins power with the built-in circuit simulator.",
    skill: "Electronics",
    xp: 160,
    type: "circuit",
    icon: '<path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>',
    meta: { kind: "normal", series: "circuit-runner", order: 1 },
    briefing: {
      objective: "Learn the pin model: set voltages and wire rails to pins.",
      body: "A circuit is a map of pins. Each pin holds a voltage: 0 (ground) or 5 (5V). The 5v rail is always on, the gnd rail is always off. You power pins with setPin(C, pin, 5) and spread power with connect(C, a, b). Every challenge here builds one circuit — press Run to watch it light up on the board."
    },
    challenges: [
      {
        id: "ch1",
        title: "Power a pin",
        instructions: "Write a script that powers pin d2 by calling setPin(C, 'd2', 5).",
        learning: "setPin(C, 'd2', 5) sets the voltage of pin d2 to 5. C is your ready-made circuit — never declare it yourself.",
        example: "setPin(C, 'd2', 5);",
        starter: "// C is already created for you\nsetPin(C, 'd2', 5);",
        test: "function t() {\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  if (Circuit.voltage(C, 'd2') !== 5) return { passed: false, message: 'Pin d2 should be at 5V.' };\n  return { passed: true, message: 'd2 is powered!' };\n}",
        hints: [
          "Use setPin(C, 'd2', 5).",
          "C is already created for you.",
          "That is the whole script."
        ],
        solution: "setPin(C, 'd2', 5);"
      },
      {
        id: "ch2",
        title: "Wire the 5V rail",
        instructions: "Write a script that connects the 5v rail to pin d3.",
        learning: "connect(C, a, b) adds a wire between two pins. Power flows both ways, so d3 becomes 5V.",
        example: "connect(C, '5v', 'd3');",
        starter: "// wire the 5v rail to d3\nconnect(C, '5v', 'd3');",
        test: "function t() {\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  if (C.wires.length < 1) return { passed: false, message: 'Add at least one wire.' };\n  if (Circuit.voltage(C, 'd3') !== 5) return { passed: false, message: 'd3 should carry 5V through the wire.' };\n  return { passed: true, message: 'Power flows through the wire!' };\n}",
        hints: [
          "connect(C, '5v', 'd3')",
          "Check it with: voltage(C, 'd3')"
        ],
        solution: "connect(C, '5v', 'd3');"
      },
      {
        id: "ch3",
        title: "Ground a pin",
        instructions: "Write a script that sets pin d4 to 0V (ground).",
        learning: "Voltage 0 means ground. setPin(C, 'd4', 0) keeps the pin off.",
        example: "setPin(C, 'd4', 0);",
        starter: "// ground pin d4\nsetPin(C, 'd4', 0);",
        test: "function t() {\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  if (Circuit.voltage(C, 'd4') !== 0) return { passed: false, message: 'Pin d4 should be at 0V.' };\n  return { passed: true, message: 'd4 is grounded.' };\n}",
        hints: [
          "setPin(C, 'd4', 0)"
        ],
        solution: "setPin(C, 'd4', 0);"
      },
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write a script that powers d5, then wires d5 to the analog pin a0. Press Run to see the power spread on the board.",
      starter: "// power d5, then spread it to a0\nsetPin(C, 'd5', 5);\nconnect(C, 'd5', 'a0');",
      test: "function t() {\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  if (Circuit.voltage(C, 'd5') !== 5) return { passed: false, message: 'd5 should be powered.' };\n  if (Circuit.voltage(C, 'a0') !== 5) return { passed: false, message: 'a0 should carry 5V through the wire.' };\n  return { passed: true, message: 'Power spreads across your circuit!' };\n}",
      hints: [
        "setPin(C, 'd5', 5)",
        "connect(C, 'd5', 'a0')"
      ],
      solution: "setPin(C, 'd5', 5);\nconnect(C, 'd5', 'a0');",
      unlock: "Circuits"
    }
  },

  {
    id: "circuit-led",
    num: 40,
    title: "Light It Up",
    tagline: "Add LEDs and watch them glow on the board.",
    skill: "Electronics",
    xp: 160,
    type: "circuit",
    icon: '<path d="M12 2a6 6 0 00-6 6c0 3 2 4 2 4h8s2-1 2-4a6 6 0 00-6-6z"/><path d="M10 19h4"/>',
    meta: { kind: "normal", series: "circuit-runner", order: 2 },
    briefing: {
      objective: "Attach LEDs, give them power and learn what makes them glow.",
      body: "led(C, pin, color) attaches an LED to a pin. It only lights when that pin has power (5V) — a lit LED is the classic 'Hello world' of electronics."
    },
    challenges: [
      {
        id: "ch1",
        title: "First glow",
        instructions: "Write a script that powers d3 and attaches a red LED to it.",
        learning: "setPin(C, 'd3', 5) then led(C, 'd3', 'red'). step() runs in the background to recompute what is lit.",
        example: "setPin(C, 'd3', 5);\nled(C, 'd3', 'red');",
        starter: "// power d3 and attach a red LED\nsetPin(C, 'd3', 5);\nled(C, 'd3', 'red');",
        test: "function t() {\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  if (C.leds.length < 1) return { passed: false, message: 'Attach an LED.' };\n  if (!Circuit.isLit(C, 0)) return { passed: false, message: 'The LED should be ON (powered pin).' };\n  return { passed: true, message: 'Your LED is glowing!' };\n}",
        hints: [
          "Power the pin first: setPin(C, 'd3', 5)",
          "Then attach the LED: led(C, 'd3', 'red')"
        ],
        solution: "setPin(C, 'd3', 5);\nled(C, 'd3', 'red');"
      },
      {
        id: "ch2",
        title: "No power, no glow",
        instructions: "Write a script that attaches a green LED to d3 WITHOUT powering the pin.",
        learning: "An LED with no power stays dark. This is the very first thing to debug in electronics.",
        example: "led(C, 'd3', 'green');",
        starter: "// attach a green LED but give it NO power\nled(C, 'd3', 'green');",
        test: "function t() {\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  if (C.leds.length < 1) return { passed: false, message: 'Attach an LED.' };\n  if (Circuit.isLit(C, 0)) return { passed: false, message: 'The LED should be OFF — its pin has no power.' };\n  return { passed: true, message: 'Dark LED confirmed: no power = no light.' };\n}",
        hints: [
          "Just led(C, 'd3', 'green') and nothing else."
        ],
        solution: "led(C, 'd3', 'green');"
      },
      {
        id: "ch3",
        title: "Choose your color",
        instructions: "Write a script that powers d4 and attaches a BLUE LED to it.",
        learning: "Colors are strings: 'red', 'green', 'yellow', 'blue', 'white'. The board draws them with real glow.",
        example: "setPin(C, 'd4', 5);\nled(C, 'd4', 'blue');",
        starter: "// power d4 with a blue LED\nsetPin(C, 'd4', 5);\nled(C, 'd4', 'blue');",
        test: "function t() {\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  if (!C.leds[0] || C.leds[0].color !== 'blue') return { passed: false, message: 'Attach a blue LED to d4.' };\n  if (!Circuit.isLit(C, 0)) return { passed: false, message: 'The blue LED should be ON.' };\n  return { passed: true, message: 'Blue LED glowing!' };\n}",
        hints: [
          "led(C, 'd4', 'blue')"
        ],
        solution: "setPin(C, 'd4', 5);\nled(C, 'd4', 'blue');"
      },
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write a script that powers d5 and d6, then attach a yellow LED to d5 and a green LED to d6. Both must light up.",
      starter: "// two powered LEDs\nsetPin(C, 'd5', 5);\nsetPin(C, 'd6', 5);\nled(C, 'd5', 'yellow');\nled(C, 'd6', 'green');",
      test: "function t() {\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  if (C.leds.length < 2) return { passed: false, message: 'Attach two LEDs.' };\n  if (!Circuit.isLit(C, 0)) return { passed: false, message: 'The yellow LED on d5 should be ON.' };\n  if (!Circuit.isLit(C, 1)) return { passed: false, message: 'The green LED on d6 should be ON.' };\n  return { passed: true, message: 'Two lights, one board. Nice!' };\n}",
      hints: [
        "Power d5 and d6, then add both LEDs.",
        "Check with isLit(C, 0) and isLit(C, 1)."
      ],
      solution: "setPin(C, 'd5', 5);\nsetPin(C, 'd6', 5);\nled(C, 'd5', 'yellow');\nled(C, 'd6', 'green');"
    }
  },

  {
    id: "circuit-resistor",
    num: 41,
    title: "Resistance Is Useful",
    tagline: "Limit current with resistors and decode color bands.",
    skill: "Electronics",
    xp: 170,
    type: "circuit",
    icon: '<path d="M4 12h3l2-4 2 8 2-8 2 8 2-4h3"/>',
    meta: { kind: "normal", series: "circuit-runner", order: 3 },
    briefing: {
      objective: "Protect LEDs with resistors and read resistor color codes.",
      body: "An LED without a current limit burns out. A resistor of 330 ohms or less lets it glow safely; too much resistance blocks the light entirely. Resistors use color bands: black 0, brown 1, red 2, orange 3, yellow 4, green 5, blue 6, violet 7, grey 8, white 9."
    },
    challenges: [
      {
        id: "ch1",
        title: "Safe 220",
        instructions: "Write a script that powers d7, adds a 220 ohm resistor and a red LED to it. A 220 ohm resistor still lets the LED light.",
        learning: "resistor(C, pin, ohms) attaches a resistor in series with the LED on that pin. Safe = 330 ohms or less.",
        example: "setPin(C, 'd7', 5);\nresistor(C, 'd7', 220);\nled(C, 'd7', 'red');",
        starter: "// powered pin + safe resistor + LED\nsetPin(C, 'd7', 5);\nresistor(C, 'd7', 220);\nled(C, 'd7', 'red');",
        test: "function t() {\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  if (C.resistors.length < 1 || C.resistors[0].ohms !== 220) return { passed: false, message: 'Add a 220 ohm resistor to d7.' };\n  if (!Circuit.isLit(C, 0)) return { passed: false, message: 'The LED should still light through 220 ohms.' };\n  return { passed: true, message: 'Safe current, happy LED!' };\n}",
        hints: [
          "resistor(C, 'd7', 220)",
          "220 <= 330 so the LED stays lit."
        ],
        solution: "setPin(C, 'd7', 5);\nresistor(C, 'd7', 220);\nled(C, 'd7', 'red');"
      },
      {
        id: "ch2",
        title: "Too much resistance",
        instructions: "Write a script that powers d7, adds a 1000 ohm resistor and a red LED to it. The LED must stay OFF.",
        learning: "1000 ohms blocks too much current for the LED — it stays dark even with power. This is why reading resistor values matters.",
        example: "setPin(C, 'd7', 5);\nresistor(C, 'd7', 1000);\nled(C, 'd7', 'red');",
        starter: "// too much resistance\nsetPin(C, 'd7', 5);\nresistor(C, 'd7', 1000);\nled(C, 'd7', 'red');",
        test: "function t() {\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  if (C.resistors.length < 1 || C.resistors[0].ohms !== 1000) return { passed: false, message: 'Add a 1000 ohm resistor to d7.' };\n  if (Circuit.isLit(C, 0)) return { passed: false, message: '1000 ohms should block the LED.' };\n  return { passed: true, message: 'Blocked — too much resistance!' };\n}",
        hints: [
          "Same as before but with 1000 ohms."
        ],
        solution: "setPin(C, 'd7', 5);\nresistor(C, 'd7', 1000);\nled(C, 'd7', 'red');"
      },
      {
        id: "ch3",
        title: "Read the bands",
        instructions: "Write a script that decodes the color bands red-red-brown (220 ohms) with resistorOhms(['red','red','brown']) and uses it to light an LED on d8.",
        learning: "resistorOhms(bands) computes value: first two bands are digits, third is the multiplier. red-red-brown = 22 x 10 = 220.",
        example: "setPin(C, 'd8', 5);\nresistor(C, 'd8', resistorOhms(['red', 'red', 'brown']));\nled(C, 'd8', 'red');",
        starter: "// decode the bands and use them\nsetPin(C, 'd8', 5);\nresistor(C, 'd8', resistorOhms(['red', 'red', 'brown']));\nled(C, 'd8', 'red');",
        test: "function t() {\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  if (C.resistors.length < 1 || C.resistors[0].ohms !== 220) return { passed: false, message: 'red-red-brown should decode to 220 ohms.' };\n  if (!Circuit.isLit(C, 0)) return { passed: false, message: 'The LED should light through 220 ohms.' };\n  return { passed: true, message: 'Bands decoded: 220 ohms!' };\n}",
        hints: [
          "resistorOhms(['red', 'red', 'brown']) === 220",
          "220 ohms keeps the LED lit."
        ],
        solution: "setPin(C, 'd8', 5);\nresistor(C, 'd8', resistorOhms(['red', 'red', 'brown']));\nled(C, 'd8', 'red');"
      },
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Power d9 and add a red LED protected by exactly the resistor coded orange-white-brown (390 ohms). Use resistorOhms to decode it.",
      starter: "// orange-white-brown = 39 x 10 = 390\nsetPin(C, 'd9', 5);\nresistor(C, 'd9', resistorOhms(['orange', 'white', 'brown']));\nled(C, 'd9', 'red');",
      test: "function t() {\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  if (C.resistors.length < 1 || C.resistors[0].ohms !== 390) return { passed: false, message: 'orange-white-brown should decode to 390 ohms.' };\n  if (C.leds.length < 1) return { passed: false, message: 'Attach a red LED to d9.' };\n  return { passed: true, message: 'Resistor color codes: mastered!' };\n}",
      hints: [
        "orange=3, white=9, brown=x10 → 39 x 10 = 390",
        "390 > 330, so this LED stays OFF — that is correct here."
      ],
      solution: "setPin(C, 'd9', 5);\nresistor(C, 'd9', resistorOhms(['orange', 'white', 'brown']));\nled(C, 'd9', 'red');",
      unlock: "Voltage & Ohm"
    }
  },

  {
    id: "circuit-button",
    num: 42,
    title: "Push the Button",
    tagline: "Switches that control your circuit like a real controller.",
    skill: "Electronics",
    xp: 170,
    type: "circuit",
    icon: '<rect x="6" y="9" width="12" height="6" rx="2"/><path d="M9 9V6h6v3M12 15v3"/>',
    meta: { kind: "normal", series: "circuit-runner", order: 4 },
    briefing: {
      objective: "Add buttons, press them, and use them to drive an LED.",
      body: "button(C, pin) attaches a push-button to a pin. press(C, id, true) closes it — the pin goes to 5V. press(C, id, false) opens it — the pin drops back to 0V. That single switch is how you control almost every physical project."
    },
    challenges: [
      {
        id: "ch1",
        title: "Add a button",
        instructions: "Write a script that attaches a button to pin d9.",
        learning: "button(C, 'd9') adds a button. Its id is 0 (the first button on the board).",
        example: "button(C, 'd9');",
        starter: "// add a button on d9\nbutton(C, 'd9');",
        test: "function t() {\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  if (C.buttons.length < 1) return { passed: false, message: 'Add a button.' };\n  if (C.buttons[0].pressed) return { passed: false, message: 'A fresh button starts released.' };\n  return { passed: true, message: 'Button on the board!' };\n}",
        hints: [
          "button(C, 'd9')",
          "Buttons start released (pressed: false)."
        ],
        solution: "button(C, 'd9');"
      },
      {
        id: "ch2",
        title: "Press it",
        instructions: "Write a script that attaches a button to d9 and presses it.",
        learning: "press(C, 0, true) closes the first button. When closed, its pin is pulled to 5V.",
        example: "button(C, 'd9');\npress(C, 0, true);",
        starter: "// button + press\nbutton(C, 'd9');\npress(C, 0, true);",
        test: "function t() {\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  if (C.buttons.length < 1 || !C.buttons[0].pressed) return { passed: false, message: 'The button should be pressed.' };\n  if (Circuit.voltage(C, 'd9') !== 5) return { passed: false, message: 'A pressed button should drive d9 to 5V.' };\n  return { passed: true, message: 'Button closed — d9 is live!' };\n}",
        hints: [
          "button(C, 'd9') then press(C, 0, true)"
        ],
        solution: "button(C, 'd9');\npress(C, 0, true);"
      },
      {
        id: "ch3",
        title: "Release it",
        instructions: "Write a script that attaches a button to d9, presses it, then releases it.",
        learning: "press(C, 0, false) opens the button. Its pin falls back to 0V — circuits remember nothing on their own.",
        example: "button(C, 'd9');\npress(C, 0, true);\npress(C, 0, false);",
        starter: "// press, then release\nbutton(C, 'd9');\npress(C, 0, true);\npress(C, 0, false);",
        test: "function t() {\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  if (C.buttons.length < 1 || C.buttons[0].pressed) return { passed: false, message: 'The button should be released at the end.' };\n  if (Circuit.voltage(C, 'd9') !== 0) return { passed: false, message: 'A released button should drop d9 to 0V.' };\n  return { passed: true, message: 'Released — d9 is back to 0V.' };\n}",
        hints: [
          "Press it true, then press it false."
        ],
        solution: "button(C, 'd9');\npress(C, 0, true);\npress(C, 0, false);"
      },
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Build a button-controlled LED on d9: attach the button, press it, and power an LED through it. Then in the test, releasing the button turns the LED off.",
      starter: "// button-controlled LED\nbutton(C, 'd9');\npress(C, 0, true);\nled(C, 'd9', 'red');",
      test: "function t() {\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  if (!Circuit.isLit(C, 0)) return { passed: false, message: 'Pressed button should light the LED.' };\n  Circuit.press(C, 0, false);\n  Circuit.step(C);\n  if (Circuit.isLit(C, 0)) return { passed: false, message: 'Releasing the button should turn the LED off.' };\n  return { passed: true, message: 'A real button switch. Power to the people!' };\n}",
      hints: [
        "button on d9, press it true, LED on d9.",
        "isLit(C, 0) checks the LED."
      ],
      solution: "button(C, 'd9');\npress(C, 0, true);\nled(C, 'd9', 'red');"
    }
  },

  {
    id: "circuit-voltages",
    num: 43,
    title: "Voltage Math",
    tagline: "Series, parallel and the math that keeps LEDs alive.",
    skill: "Electronics",
    xp: 180,
    type: "js",
    icon: '<path d="M12 3v18M12 3l-4 4M12 3l4 4"/>',
    meta: { kind: "normal", series: "circuit-runner", order: 5 },
    briefing: {
      objective: "Calculate resistance and pick the right resistor for a 5V project.",
      body: "Resistors add up in series: R1 + R2. In parallel they divide: 1 / (1/R1 + 1/R2). And the resistor that limits an LED: (supply - LED drop) / current. These three formulas are 90% of beginner circuit math."
    },
    challenges: [
      {
        id: "ch1",
        title: "Series sum",
        instructions: "Write seriesResistance(rs) that returns the sum of an array of resistor values.",
        learning: "In series, current crosses every resistor, so resistance adds: 100 + 220 + 330 = 650.",
        example: "function seriesResistance(rs) {\n  var total = 0;\n  for (var i = 0; i < rs.length; i++) { total += rs[i]; }\n  return total;\n}",
        starter: "function seriesResistance(rs) {\n  // sum all the resistors\n  return 0;\n}",
        test: "function t() {\n  if (seriesResistance([100, 220, 330]) !== 650) return { passed: false, message: '100 + 220 + 330 should be 650.' };\n  if (seriesResistance([]) !== 0) return { passed: false, message: 'An empty chain sums to 0.' };\n  return { passed: true, message: 'Series resistance adds up!' };\n}",
        hints: [
          "Loop and add, or use reduce.",
          "Sum of [100, 220, 330] is 650."
        ],
        solution: "function seriesResistance(rs) {\n  var total = 0;\n  for (var i = 0; i < rs.length; i++) { total += rs[i]; }\n  return total;\n}"
      },
      {
        id: "ch2",
        title: "Parallel split",
        instructions: "Write parallelResistance(r1, r2) that returns 1 / (1/r1 + 1/r2).",
        learning: "Parallel resistors share the path, so total resistance drops: two 100 ohm resistors in parallel give 50.",
        example: "function parallelResistance(r1, r2) {\n  return 1 / (1 / r1 + 1 / r2);\n}",
        starter: "function parallelResistance(r1, r2) {\n  // 1 / (1/r1 + 1/r2)\n  return 0;\n}",
        test: "function t() {\n  if (Math.abs(parallelResistance(100, 100) - 50) > 0.001) return { passed: false, message: '100 and 100 in parallel is 50.' };\n  if (Math.abs(parallelResistance(1000, 1000) - 500) > 0.001) return { passed: false, message: '1000 and 1000 in parallel is 500.' };\n  return { passed: true, message: 'Parallel paths share the load!' };\n}",
        hints: [
          "1 / (1 / r1 + 1 / r2)",
          "Two equal resistors halve the total."
        ],
        solution: "function parallelResistance(r1, r2) {\n  return 1 / (1 / r1 + 1 / r2);\n}"
      },
      {
        id: "ch3",
        title: "Pick the resistor",
        instructions: "Write ledResistor(vIn, ledV, mA) that returns the ohms: (vIn - ledV) * 1000 / mA.",
        learning: "Ohm's law for LED safety: (supply - LED drop) / current. A 5V supply, 2V LED, 20mA → (5-2)*1000/20 = 150 ohms.",
        example: "function ledResistor(vIn, ledV, mA) {\n  return (vIn - ledV) * 1000 / mA;\n}",
        starter: "function ledResistor(vIn, ledV, mA) {\n  // (vIn - ledV) * 1000 / mA\n  return 0;\n}",
        test: "function t() {\n  if (ledResistor(5, 2, 20) !== 150) return { passed: false, message: '(5-2)*1000/20 should be 150.' };\n  if (ledResistor(9, 3, 20) !== 300) return { passed: false, message: '(9-3)*1000/20 should be 300.' };\n  return { passed: true, message: 'You can pick any resistor from spec!' };\n}",
        hints: [
          "(vIn - ledV) * 1000 / mA",
          "5V, 2V, 20mA → 150 ohms."
        ],
        solution: "function ledResistor(vIn, ledV, mA) {\n  return (vIn - ledV) * 1000 / mA;\n}"
      },
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write safeCurrent(vIn, ohms) that returns the current in milliamps: vIn / ohms * 1000. Then confirm 5V across 220 ohms is about 22.7 mA.",
      starter: "function safeCurrent(vIn, ohms) {\n  // vIn / ohms * 1000 (milliamps)\n  return 0;\n}",
      test: "function t() {\n  var c = safeCurrent(5, 220);\n  if (Math.abs(c - 22.72) > 0.5) return { passed: false, message: '5V / 220 = ~22.7 mA.' };\n  return { passed: true, message: 'Ohm math locked in!' };\n}",
      hints: [
        "vIn / ohms * 1000",
        "5 / 220 * 1000 ≈ 22.7"
      ],
      solution: "function safeCurrent(vIn, ohms) {\n  return vIn / ohms * 1000;\n}",
      unlock: "Voltage & Ohm"
    }
  },

  {
    id: "circuit-blink",
    num: 44,
    title: "Blink Patterns",
    tagline: "Timing is everything. Blink like a real Arduino.",
    skill: "Electronics",
    xp: 180,
    type: "circuit",
    icon: '<path d="M12 8a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4z"/><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/>',
    meta: { kind: "normal", series: "circuit-runner", order: 6 },
    briefing: {
      objective: "Control WHEN things turn on using the modulo trick.",
      body: "Blinking is just math. If a period is 4 ticks, a pin is ON for tick % 4 < 2 and OFF for tick % 4 >= 2. The same pattern runs traffic lights, countdowns and dashboards."
    },
    challenges: [
      {
        id: "ch1",
        title: "On and off",
        instructions: "Define blinkState(tick, period) that returns true when the tick is in the first half of its period, then power d11 and add a red LED.",
        learning: "blinkState(tick, period) = (tick % period) < (period / 2). It is the heartbeat of every blinking circuit.",
        example: "function blinkState(tick, period) {\n  return (tick % period) < (period / 2);\n}\nsetPin(C, 'd11', 5);\nled(C, 'd11', 'red');",
        starter: "// blink math: (tick % period) < (period / 2)\nfunction blinkState(tick, period) {\n  return false;\n}\nsetPin(C, 'd11', 5);\nled(C, 'd11', 'red');",
        test: "function t() {\n  if (blinkState(0, 4) !== true) return { passed: false, message: 'tick 0 of 4 should be ON.' };\n  if (blinkState(2, 4) !== false) return { passed: false, message: 'tick 2 of 4 should be OFF.' };\n  var C = window.__C;\n  if (!C || !Circuit.isLit(C, 0)) return { passed: false, message: 'The demo LED should be lit.' };\n  return { passed: true, message: 'Blink cycle understood!' };\n}",
        hints: [
          "(tick % period) < (period / 2)",
          "tick 0 -> 0 % 4 = 0 < 2 -> ON"
        ],
        solution: "function blinkState(tick, period) {\n  return (tick % period) < (period / 2);\n}\nsetPin(C, 'd11', 5);\nled(C, 'd11', 'red');"
      },
      {
        id: "ch2",
        title: "Traffic light",
        instructions: "Define trafficColor(t) that returns 'red' for ticks 0-2, 'yellow' for tick 3 and 'green' for ticks 4-5 (period of 6). Then power d11 with a green LED.",
        learning: "Use the modulo to cycle through phases: t % 6. Bigger projects reuse this same idea for every timer.",
        example: "function trafficColor(t) {\n  var s = t % 6;\n  if (s < 3) { return 'red'; }\n  if (s < 4) { return 'yellow'; }\n  return 'green';\n}\nsetPin(C, 'd11', 5);\nled(C, 'd11', 'green');",
        starter: "// phases of 6: red, red, red, yellow, green, green\nfunction trafficColor(t) {\n  return 'red';\n}\nsetPin(C, 'd11', 5);\nled(C, 'd11', 'green');",
        test: "function t() {\n  if (trafficColor(1) !== 'red') return { passed: false, message: 'Tick 1 should be red.' };\n  if (trafficColor(3) !== 'yellow') return { passed: false, message: 'Tick 3 should be yellow.' };\n  if (trafficColor(5) !== 'green') return { passed: false, message: 'Tick 5 should be green.' };\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  return { passed: true, message: 'Traffic logic green-lit!' };\n}",
        hints: [
          "s = t % 6; red < 3, yellow < 4, else green.",
          "tick 5 % 6 = 5 -> green."
        ],
        solution: "function trafficColor(t) {\n  var s = t % 6;\n  if (s < 3) { return 'red'; }\n  if (s < 4) { return 'yellow'; }\n  return 'green';\n}\nsetPin(C, 'd11', 5);\nled(C, 'd11', 'green');"
      },
      {
        id: "ch3",
        title: "Blink factory",
        instructions: "Define makeBlinker(period) that returns a function (tick) => blinkState(tick, period). Use it to check tick 0 of period 6, and light a green LED on d12 if it is ON.",
        learning: "Returning a function from a function is how you build a blinker factory — one period config, many blinking pins.",
        example: "function makeBlinker(period) {\n  return function (tick) {\n    return (tick % period) < (period / 2);\n  };\n}\nvar on = makeBlinker(6)(0);\nif (on) { setPin(C, 'd12', 5); }\nled(C, 'd12', 'green');",
        starter: "// a blinker factory\nfunction makeBlinker(period) {\n  return function (tick) {\n    return false;\n  };\n}\nvar on = makeBlinker(6)(0);\nif (on) { setPin(C, 'd12', 5); }\nled(C, 'd12', 'green');",
        test: "function t() {\n  var b = makeBlinker(6);\n  if (b(0) !== true) return { passed: false, message: 'Period 6, tick 0 -> ON.' };\n  if (b(4) !== false) return { passed: false, message: 'Period 6, tick 4 -> OFF.' };\n  var C = window.__C;\n  if (!C || !Circuit.isLit(C, 0)) return { passed: false, message: 'The demo LED should be lit.' };\n  return { passed: true, message: 'Blinker factory works!' };\n}",
        hints: [
          "Return a closure that uses (tick % period) < (period / 2).",
          "makeBlinker(6)(0) -> true."
        ],
        solution: "function makeBlinker(period) {\n  return function (tick) {\n    return (tick % period) < (period / 2);\n  };\n}\nvar on = makeBlinker(6)(0);\nif (on) { setPin(C, 'd12', 5); }\nled(C, 'd12', 'green');"
      },
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Define blinkOn(tick, period) with the modulo rule, and use it to light a blue LED on d13 at tick 0 of period 4.",
      starter: "// define blinkOn, then light the demo\nfunction blinkOn(tick, period) {\n  return false;\n}\nif (blinkOn(0, 4)) { setPin(C, 'd13', 5); }\nled(C, 'd13', 'blue');",
      test: "function t() {\n  if (blinkOn(0, 4) !== true) return { passed: false, message: 'blinkOn(0, 4) should be true.' };\n  if (blinkOn(2, 4) !== false) return { passed: false, message: 'blinkOn(2, 4) should be false.' };\n  var C = window.__C;\n  if (!C || !Circuit.isLit(C, 0)) return { passed: false, message: 'The demo LED should be lit at tick 0.' };\n  return { passed: true, message: 'Blink patterns mastered!' };\n}",
      hints: [
        "blinkOn = (tick % period) < (period / 2)",
        "tick 0 of 4 is ON, tick 2 is OFF."
      ],
      solution: "function blinkOn(tick, period) {\n  return (tick % period) < (period / 2);\n}\nif (blinkOn(0, 4)) { setPin(C, 'd13', 5); }\nled(C, 'd13', 'blue');"
    }
  },

  {
    id: "circuit-sensors",
    num: 45,
    title: "Sense the World",
    tagline: "Read analog values, map ranges and detect darkness.",
    skill: "Electronics",
    xp: 190,
    type: "circuit",
    icon: '<path d="M7 3v2M17 3v2M7 3h10M4 5h16M5 5l-2 16M19 5l2 16M7 9h2M7 13h2M7 17h2M12 9h2M12 13h2M12 17h2M17 9h2M17 13h2M17 17h2"/>',
    meta: { kind: "normal", series: "circuit-runner", order: 7 },
    briefing: {
      objective: "Sensors give you numbers. Learn to map, scale and threshold them.",
      body: "A light sensor returns a raw reading. You map it to a usable range, then decide with a threshold: 'too dark, turn the light on'. That is the whole story of smart devices."
    },
    challenges: [
      {
        id: "ch1",
        title: "Map a range",
        instructions: "Define mapRange(v, inMin, inMax, outMin, outMax) that maps v from one range to another, then power a0 with a red LED.",
        learning: "mapRange(5, 0, 10, 0, 100) = outMin + (v - inMin) * (outMax - outMin) / (inMax - inMin) = 50.",
        example: "function mapRange(v, inMin, inMax, outMin, outMax) {\n  return outMin + (v - inMin) * (outMax - outMin) / (inMax - inMin);\n}\nsetPin(C, 'a0', 5);\nled(C, 'a0', 'red');",
        starter: "// linear map between ranges\nfunction mapRange(v, inMin, inMax, outMin, outMax) {\n  return 0;\n}\nsetPin(C, 'a0', 5);\nled(C, 'a0', 'red');",
        test: "function t() {\n  if (mapRange(5, 0, 10, 0, 100) !== 50) return { passed: false, message: '5 in 0-10 maps to 50 in 0-100.' };\n  if (mapRange(2, 0, 4, 0, 255) !== 127.5) return { passed: false, message: '2 in 0-4 maps to 127.5 in 0-255.' };\n  var C = window.__C;\n  if (!C || !Circuit.isLit(C, 0)) return { passed: false, message: 'The demo LED should be lit.' };\n  return { passed: true, message: 'Ranges mapped cleanly!' };\n}",
        hints: [
          "outMin + (v - inMin) * (outMax - outMin) / (inMax - inMin)"
        ],
        solution: "function mapRange(v, inMin, inMax, outMin, outMax) {\n  return outMin + (v - inMin) * (outMax - outMin) / (inMax - inMin);\n}\nsetPin(C, 'a0', 5);\nled(C, 'a0', 'red');"
      },
      {
        id: "ch2",
        title: "Brightness percent",
        instructions: "Define lightPercent(reading, maxRead) that clamps reading / maxRead * 100 to 0-100. Then power a1 with a green LED.",
        learning: "Clamp with Math.max(0, Math.min(100, ...)) so a sensor can never report more than 100%.",
        example: "function lightPercent(reading, maxRead) {\n  return Math.max(0, Math.min(100, Math.round(reading / maxRead * 100)));\n}\nsetPin(C, 'a1', 5);\nled(C, 'a1', 'green');",
        starter: "// percent, clamped to 0-100\nfunction lightPercent(reading, maxRead) {\n  return 0;\n}\nsetPin(C, 'a1', 5);\nled(C, 'a1', 'green');",
        test: "function t() {\n  if (lightPercent(50, 100) !== 50) return { passed: false, message: '50/100 is 50%.' };\n  if (lightPercent(0, 100) !== 0) return { passed: false, message: '0 should clamp to 0%.' };\n  if (lightPercent(150, 100) !== 100) return { passed: false, message: '150 should clamp to 100%.' };\n  var C = window.__C;\n  if (!C || !Circuit.isLit(C, 0)) return { passed: false, message: 'The demo LED should be lit.' };\n  return { passed: true, message: 'Sensors scaled and clamped!' };\n}",
        hints: [
          "Math.round(reading / maxRead * 100)",
          "Clamp: Math.max(0, Math.min(100, x))"
        ],
        solution: "function lightPercent(reading, maxRead) {\n  return Math.max(0, Math.min(100, Math.round(reading / maxRead * 100)));\n}\nsetPin(C, 'a1', 5);\nled(C, 'a1', 'green');"
      },
      {
        id: "ch3",
        title: "Too dark?",
        instructions: "Define isDark(reading, threshold) that returns true when reading is BELOW the threshold. Use it with reading 200 to power a2 and light a red LED.",
        learning: "Thresholds are the simplest decision your circuit can make: below = dark = on.",
        example: "function isDark(reading, threshold) {\n  return reading < threshold;\n}\nvar dark = isDark(200, 500);\nif (dark) { setPin(C, 'a2', 5); }\nled(C, 'a2', 'red');",
        starter: "// dark means reading below threshold\nfunction isDark(reading, threshold) {\n  return false;\n}\nvar dark = isDark(200, 500);\nif (dark) { setPin(C, 'a2', 5); }\nled(C, 'a2', 'red');",
        test: "function t() {\n  if (isDark(200, 500) !== true) return { passed: false, message: '200 below 500 is dark.' };\n  if (isDark(800, 500) !== false) return { passed: false, message: '800 above 500 is bright.' };\n  var C = window.__C;\n  if (!C || !Circuit.isLit(C, 0)) return { passed: false, message: 'Reading 200 is dark, so the LED should be on.' };\n  return { passed: true, message: 'The night sense works!' };\n}",
        hints: [
          "reading < threshold",
          "200 < 500 is true -> power a2."
        ],
        solution: "function isDark(reading, threshold) {\n  return reading < threshold;\n}\nvar dark = isDark(200, 500);\nif (dark) { setPin(C, 'a2', 5); }\nled(C, 'a2', 'red');"
      },
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Define isDark, and use reading 900 (bright!) so the LED on a3 stays OFF. Bright day, no light needed.",
      starter: "// bright day -> keep the LED off\nfunction isDark(reading, threshold) {\n  return false;\n}\nvar dark = isDark(900, 500);\nif (dark) { setPin(C, 'a3', 5); }\nled(C, 'a3', 'green');",
      test: "function t() {\n  if (isDark(900, 500) !== false) return { passed: false, message: '900 above 500 is bright.' };\n  var C = window.__C;\n  if (!C || Circuit.isLit(C, 0)) return { passed: false, message: 'Bright day: the LED should be OFF.' };\n  return { passed: true, message: 'Smart day/night logic complete!' };\n}",
      hints: [
        "isDark(900, 500) -> false",
        "So the LED must never get power."
      ],
      solution: "function isDark(reading, threshold) {\n  return reading < threshold;\n}\nvar dark = isDark(900, 500);\nif (dark) { setPin(C, 'a3', 5); }\nled(C, 'a3', 'green');",
      unlock: "Sensors"
    }
  },

  {
    id: "circuit-build",
    num: 46,
    title: "Assemble It",
    tagline: "Functions that build whole circuits from a single call.",
    skill: "Electronics",
    xp: 200,
    type: "circuit",
    icon: '<path d="M4 7h16M4 12h16M4 17h16"/><path d="M9 7V4h6v3M9 17v3h6v-3"/>',
    meta: { kind: "normal", series: "circuit-runner", order: 8 },
    briefing: {
      objective: "Wrap your builds in functions so one call makes a full circuit.",
      body: "Real projects wrap circuit-building in functions. This mission does exactly that: nightLight(dark), autoLight(reading, threshold) and a toggle that combines a sensor with a manual override."
    },
    challenges: [
      {
        id: "ch1",
        title: "Night light",
        instructions: "Define nightLight(dark) that creates a circuit, powers d7 only when dark, attaches a red LED, steps it and returns the circuit. Then light the demo d7 too.",
        learning: "Circuit.create(), setPin, led, step, return — a function that returns a full, tested circuit.",
        example: "function nightLight(dark) {\n  var c = Circuit.create();\n  if (dark) { Circuit.setPin(c, 'd7', 5); }\n  Circuit.led(c, 'd7', 'red');\n  Circuit.step(c);\n  return c;\n}\nsetPin(C, 'd7', 5);\nled(C, 'd7', 'red');",
        starter: "// one call = one night light\nfunction nightLight(dark) {\n  var c = Circuit.create();\n  // power d7 only when dark\n  Circuit.led(c, 'd7', 'red');\n  Circuit.step(c);\n  return c;\n}\nsetPin(C, 'd7', 5);\nled(C, 'd7', 'red');",
        test: "function t() {\n  var on = nightLight(true);\n  if (!Circuit.isLit(on, 0)) return { passed: false, message: 'Dark night light should be ON.' };\n  var off = nightLight(false);\n  if (Circuit.isLit(off, 0)) return { passed: false, message: 'Daytime night light should be OFF.' };\n  var C = window.__C;\n  if (!C || !Circuit.isLit(C, 0)) return { passed: false, message: 'The demo LED should be lit.' };\n  return { passed: true, message: 'One call builds a night light!' };\n}",
        hints: [
          "if (dark) Circuit.setPin(c, 'd7', 5)",
          "Always Circuit.step(c) before returning."
        ],
        solution: "function nightLight(dark) {\n  var c = Circuit.create();\n  if (dark) { Circuit.setPin(c, 'd7', 5); }\n  Circuit.led(c, 'd7', 'red');\n  Circuit.step(c);\n  return c;\n}\nsetPin(C, 'd7', 5);\nled(C, 'd7', 'red');"
      },
      {
        id: "ch2",
        title: "Day light",
        instructions: "Define dayLight(dark) that powers d8 only when NOT dark, with a green LED. Return the circuit. Then light the demo d8.",
        learning: "The inverse condition: !dark. Two functions, opposite behaviour — same skeleton.",
        example: "function dayLight(dark) {\n  var c = Circuit.create();\n  if (!dark) { Circuit.setPin(c, 'd8', 5); }\n  Circuit.led(c, 'd8', 'green');\n  Circuit.step(c);\n  return c;\n}\nsetPin(C, 'd8', 5);\nled(C, 'd8', 'green');",
        starter: "// the opposite of a night light\nfunction dayLight(dark) {\n  var c = Circuit.create();\n  // power d8 only when NOT dark\n  Circuit.led(c, 'd8', 'green');\n  Circuit.step(c);\n  return c;\n}\nsetPin(C, 'd8', 5);\nled(C, 'd8', 'green');",
        test: "function t() {\n  var on = dayLight(false);\n  if (!Circuit.isLit(on, 0)) return { passed: false, message: 'Bright day light should be ON.' };\n  var off = dayLight(true);\n  if (Circuit.isLit(off, 0)) return { passed: false, message: 'Dark day light should be OFF.' };\n  var C = window.__C;\n  if (!C || !Circuit.isLit(C, 0)) return { passed: false, message: 'The demo LED should be lit.' };\n  return { passed: true, message: 'Opposite logic works!' };\n}",
        hints: [
          "if (!dark) Circuit.setPin(c, 'd8', 5)",
          "Green LED for the day light."
        ],
        solution: "function dayLight(dark) {\n  var c = Circuit.create();\n  if (!dark) { Circuit.setPin(c, 'd8', 5); }\n  Circuit.led(c, 'd8', 'green');\n  Circuit.step(c);\n  return c;\n}\nsetPin(C, 'd8', 5);\nled(C, 'd8', 'green');"
      },
      {
        id: "ch3",
        title: "Auto light",
        instructions: "Define autoLight(reading, threshold) that uses isDark(reading, threshold) to power d9 (red LED when dark, green otherwise). Return the circuit. Then light the demo d9.",
        learning: "Combine helpers: read, decide, and choose the LED color from the same decision.",
        example: "function autoLight(reading, threshold) {\n  var dark = reading < threshold;\n  var c = Circuit.create();\n  if (dark) { Circuit.setPin(c, 'd9', 5); }\n  Circuit.led(c, 'd9', dark ? 'red' : 'green');\n  Circuit.step(c);\n  return c;\n}\nsetPin(C, 'd9', 5);\nled(C, 'd9', 'red');",
        starter: "// decide once, use it twice\nfunction autoLight(reading, threshold) {\n  var dark = reading < threshold;\n  var c = Circuit.create();\n  // power + color both from the same decision\n  Circuit.led(c, 'd9', dark ? 'red' : 'green');\n  Circuit.step(c);\n  return c;\n}\nsetPin(C, 'd9', 5);\nled(C, 'd9', 'red');",
        test: "function t() {\n  var d = autoLight(100, 500);\n  if (!Circuit.isLit(d, 0)) return { passed: false, message: 'Reading 100 is dark -> red LED ON.' };\n  if (d.leds[0].color !== 'red') return { passed: false, message: 'Dark should use a red LED.' };\n  var b = autoLight(900, 500);\n  if (Circuit.isLit(b, 0)) return { passed: false, message: 'Reading 900 is bright -> green LED OFF.' };\n  if (b.leds[0].color !== 'green') return { passed: false, message: 'Bright should use a green LED.' };\n  var C = window.__C;\n  if (!C || !Circuit.isLit(C, 0)) return { passed: false, message: 'The demo LED should be lit.' };\n  return { passed: true, message: 'Auto lighting with color feedback!' };\n}",
        hints: [
          "var dark = reading < threshold",
          "Power when dark; color from dark ? 'red' : 'green'."
        ],
        solution: "function autoLight(reading, threshold) {\n  var dark = reading < threshold;\n  var c = Circuit.create();\n  if (dark) { Circuit.setPin(c, 'd9', 5); }\n  Circuit.led(c, 'd9', dark ? 'red' : 'green');\n  Circuit.step(c);\n  return c;\n}\nsetPin(C, 'd9', 5);\nled(C, 'd9', 'red');"
      },
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Define nightLightToggle(dark, buttonPressed) that turns the light ON when the button is pressed OR it is dark. Return the circuit. Then light the demo d10.",
      starter: "// sensor + manual override\nfunction nightLightToggle(dark, buttonPressed) {\n  var on = buttonPressed || dark;\n  var c = Circuit.create();\n  if (on) { Circuit.setPin(c, 'd10', 5); }\n  Circuit.led(c, 'd10', 'red');\n  Circuit.step(c);\n  return c;\n}\nsetPin(C, 'd10', 5);\nled(C, 'd10', 'red');",
      test: "function t() {\n  var a = nightLightToggle(true, false);\n  if (!Circuit.isLit(a, 0)) return { passed: false, message: 'Dark + no button -> ON.' };\n  var b = nightLightToggle(false, true);\n  if (!Circuit.isLit(b, 0)) return { passed: false, message: 'Button pressed -> ON.' };\n  var c = nightLightToggle(false, false);\n  if (Circuit.isLit(c, 0)) return { passed: false, message: 'Bright + no button -> OFF.' };\n  var C = window.__C;\n  if (!C || !Circuit.isLit(C, 0)) return { passed: false, message: 'The demo LED should be lit.' };\n  return { passed: true, message: 'Sensor + override combined!' };\n}",
      hints: [
        "var on = buttonPressed || dark",
        "Power d10 when on."
      ],
      solution: "function nightLightToggle(dark, buttonPressed) {\n  var on = buttonPressed || dark;\n  var c = Circuit.create();\n  if (on) { Circuit.setPin(c, 'd10', 5); }\n  Circuit.led(c, 'd10', 'red');\n  Circuit.step(c);\n  return c;\n}\nsetPin(C, 'd10', 5);\nled(C, 'd10', 'red');"
    }
  },

  {
    id: "circuit-boss",
    num: 47,
    title: "The Circuit Boss",
    tagline: "The final boss of the Electronics path: build a smart night light.",
    skill: "Electronics",
    xp: 300,
    type: "circuit",
    icon: '<path d="M12 3a9 9 0 109 9h-9V3z"/><path d="M12 12l6-6M12 12h9"/>',
    meta: { kind: "boss", series: "circuit-runner", order: 9, focusLock: true, hintCap: 1 },
    briefing: {
      objective: "Every skill you learned, in one build: sensors, logic, resistors and LEDs.",
      body: "Build smartNightLight(dark, hasMotion): the green LED turns ON when it is dark OR motion is detected, and OFF otherwise. Protect it with a 220 ohm resistor. You are wiring real electronics logic now — take your time, think it through, and press Check when the board looks right."
    },
    challenges: [
      {
        id: "ch1",
        title: "The decision",
        instructions: "Define shouldLight(dark, hasMotion) that returns true when it is dark OR motion is detected. Then power the demo d11 with a green LED.",
        learning: "One boolean: dark || hasMotion. Every part of the night light hangs off this single decision.",
        example: "function shouldLight(dark, hasMotion) {\n  return dark || hasMotion;\n}\nsetPin(C, 'd11', 5);\nled(C, 'd11', 'green');",
        starter: "// one boolean to rule them all\nfunction shouldLight(dark, hasMotion) {\n  return false;\n}\nsetPin(C, 'd11', 5);\nled(C, 'd11', 'green');",
        test: "function t() {\n  if (shouldLight(true, false) !== true) return { passed: false, message: 'Dark -> on.' };\n  if (shouldLight(false, true) !== true) return { passed: false, message: 'Motion -> on.' };\n  if (shouldLight(false, false) !== false) return { passed: false, message: 'Bright + no motion -> off.' };\n  var C = window.__C;\n  if (!C || !Circuit.isLit(C, 0)) return { passed: false, message: 'The demo LED should be lit.' };\n  return { passed: true, message: 'Decision logic locked. Now build it for real.' };\n}",
        hints: [
          "dark || hasMotion",
          "Three cases: dark, motion, neither."
        ],
        solution: "function shouldLight(dark, hasMotion) {\n  return dark || hasMotion;\n}\nsetPin(C, 'd11', 5);\nled(C, 'd11', 'green');"
      }
    ],
    build: {
      title: "The Boss Build",
      prompt: "Define smartNightLight(dark, hasMotion) that creates a circuit, powers d11 when dark OR motion, protects the LED with a 220 ohm resistor, attaches exactly one green LED, steps the circuit and returns it. Then light the demo d11 the same way.",
      starter: "// dark OR motion -> light ON\nfunction smartNightLight(dark, hasMotion) {\n  var on = dark || hasMotion;\n  var c = Circuit.create();\n  // power d11 when on\n  // protect with a 220 ohm resistor\n  // attach one green LED\n  Circuit.step(c);\n  return c;\n}\n// light the demo board the same way\nsetPin(C, 'd11', 5);\nled(C, 'd11', 'green');",
      test: "function t() {\n  var c1 = smartNightLight(true, false);\n  if (!Circuit.isLit(c1, 0)) return { passed: false, message: 'Dark + no motion -> light ON.' };\n  var c2 = smartNightLight(false, true);\n  if (!Circuit.isLit(c2, 0)) return { passed: false, message: 'Motion detected -> light ON.' };\n  var c3 = smartNightLight(false, false);\n  if (Circuit.isLit(c3, 0)) return { passed: false, message: 'Bright + no motion -> light OFF.' };\n  if (!c1.resistors || c1.resistors.length !== 1 || c1.resistors[0].ohms > 330) return { passed: false, message: 'Protect the LED with one resistor of 330 ohms or less.' };\n  if (!c1.leds || c1.leds.length !== 1) return { passed: false, message: 'Exactly one LED.' };\n  if (c1.leds[0].color !== 'green') return { passed: false, message: 'The night light should be green.' };\n  var C = window.__C;\n  if (!C || !Circuit.isLit(C, 0)) return { passed: false, message: 'The demo board should show the light on.' };\n  return { passed: true, message: 'MISSION COMPLETE. Your smart night light is live!' };\n}",
      hints: [
        "on = dark || hasMotion",
        "Power d11 when on, add resistor(C, 'd11', 220), then led(C, 'd11', 'green').",
        "Circuit.step(c) before returning c."
      ],
      solution: "function smartNightLight(dark, hasMotion) {\n  var on = dark || hasMotion;\n  var c = Circuit.create();\n  if (on) { Circuit.setPin(c, 'd11', 5); }\n  Circuit.resistor(c, 'd11', 220);\n  Circuit.led(c, 'd11', 'green');\n  Circuit.step(c);\n  return c;\n}\nsetPin(C, 'd11', 5);\nled(C, 'd11', 'green');",
      unlock: "Circuits Master"
    }
  }
]);