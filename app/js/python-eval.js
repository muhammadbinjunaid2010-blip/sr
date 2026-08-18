/* ============================================================
   SkillRun - Python subset evaluator (V2)
   A small, safe interpreter for the "Programmer" path.
   Supports: def/return, if/elif/else, while, for-in over
   range/list/string/dict, lists, dicts, strings + methods,
   arithmetic, comparisons, and/or/not, in, builtins
   (print, len, range, abs, min, max, sum, round, str, int,
   list, sorted).
   API:
     PythonEval.run(code)        -> { error, logs }
     PythonEval.call(name, args) -> JS value (user function)
     PythonEval.expr(code)       -> JS value (expression)
   ============================================================ */

var PythonEval = (function () {

  var MAX_STEPS = 10000000;

  /* ================= Value wrappers ================= */

  function PyDict() { this.map = {}; }
  function PyRange(start, stop, step) { this.start = start; this.stop = stop; this.step = step; }
  function PyFunc(name, params, body, env) { this.name = name; this.params = params; this.body = body; this.env = env; }

  function truthy(v) {
    if (v === null) { return false; }
    if (v === false) { return false; }
    if (v === true) { return true; }
    if (typeof v === "number") { return v !== 0 && !isNaN(v); }
    if (typeof v === "string") { return v.length > 0; }
    if (Array.isArray(v)) { return v.length > 0; }
    if (v instanceof PyDict) { return Object.keys(v.map).length > 0; }
    if (v instanceof PyRange) { return v.start !== v.stop; }
    return true;
  }

  function strLike(v) {
    if (v === null) { return "None"; }
    if (v === true) { return "True"; }
    if (v === false) { return "False"; }
    if (typeof v === "string") { return v; }
    if (typeof v === "number") { return String(v); }
    return repr(v);
  }

  function repr(v) {
    if (v === null) { return "None"; }
    if (v === true) { return "True"; }
    if (v === false) { return "False"; }
    if (typeof v === "string") { return "'" + v.replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'"; }
    if (typeof v === "number") { return String(v); }
    if (Array.isArray(v)) { return "[" + v.map(repr).join(", ") + "]"; }
    if (v instanceof PyDict) {
      var parts = [];
      for (var k in v.map) { parts.push(repr(v.map[k].key) + ": " + repr(v.map[k].val)); }
      return "{" + parts.join(", ") + "}";
    }
    if (v instanceof PyRange) { return "range(" + v.start + ", " + v.stop + ")"; }
    return "<function " + v.name + ">";
  }

  function toJS(v) {
    if (Array.isArray(v)) { return v.map(toJS); }
    if (v instanceof PyDict) {
      var out = {};
      for (var k in v.map) { out[v.map[k].key] = toJS(v.map[k].val); }
      return out;
    }
    if (v instanceof PyRange) { return rangeToList(v); }
    if (v instanceof PyFunc) { return v.name; }
    return v;
  }

  function fromJS(v) {
    if (Array.isArray(v)) { return v.map(fromJS); }
    if (v && typeof v === "object") {
      var d = new PyDict();
      for (var k in v) { d.set(k, fromJS(v[k])); }
      return d;
    }
    return v;
  }

  function rangeToList(r) {
    var out = [];
    if (r.step > 0) { for (var i = r.start; i < r.stop; i += r.step) { out.push(i); } }
    else { for (var j = r.start; j > r.stop; j += r.step) { out.push(j); } }
    return out;
  }

  /* ================= Environment ================= */

  function Env(parent) { this.vars = {}; this.parent = parent || null; }

  Env.prototype.get = function (name) {
    var e = this;
    while (e) { if (name in e.vars) { return e.vars[name]; } e = e.parent; }
    throw new Error("NameError: name '" + name + "' is not defined");
  };
  Env.prototype.set = function (name, v) {
    var e = this;
    while (e) { if (name in e.vars) { e.vars[name] = v; return; } e = e.parent; }
    this.vars[name] = v;
  };
  Env.prototype.has = function (name) {
    var e = this;
    while (e) { if (name in e.vars) { return true; } e = e.parent; }
    return false;
  };

  /* ================= Lexer ================= */

  function tokenize(code) {
    var tokens = [];
    var indentStack = [0];
    var lines = code.replace(/\r\n?/g, "\n").split("\n");

    function countIndent(line) {
      var n = 0;
      for (var i = 0; i < line.length; i++) {
        if (line[i] === " ") { n++; }
        else if (line[i] === "\t") { n = Math.ceil((n + 1) / 4) * 4; }
        else { break; }
      }
      return n;
    }

    for (var li = 0; li < lines.length; li++) {
      var raw = lines[li];
      var trimmed = raw.replace(/^[ \t]+/, "");
      var noComment = trimmed.split("#")[0];
      if (noComment.trim() === "") { continue; }

      var indent = countIndent(raw);
      if (indent > indentStack[indentStack.length - 1]) {
        tokens.push({ t: "INDENT" });
        indentStack.push(indent);
      } else if (indent < indentStack[indentStack.length - 1]) {
        while (indent < indentStack[indentStack.length - 1]) { indentStack.pop(); tokens.push({ t: "DEDENT" }); }
        if (indent !== indentStack[indentStack.length - 1]) { throw new Error("IndentationError: inconsistent indentation"); }
      }

      var line = noComment;
      var i = 0;
      var first = true;
      while (i < line.length) {
        var c = line[i];
        if (c === " " || c === "\t") { i++; continue; }
        if (first && tokens.length && tokens[tokens.length - 1].t !== "INDENT" && tokens[tokens.length - 1].t !== "DEDENT" && tokens[tokens.length - 1].t !== "NEWLINE") {
          tokens.push({ t: "NEWLINE" });
        }
        first = false;

        if (c === '"' || c === "'") {
          var quote = c;
          var s = "";
          i++;
          var closed = false;
          while (i < line.length) {
            var ch = line[i];
            if (ch === "\\") {
              var nx = line[i + 1];
              if (nx === "n") { s += "\n"; }
              else if (nx === "t") { s += "\t"; }
              else if (nx === "\\") { s += "\\"; }
              else if (nx === "'" || nx === '"') { s += nx; }
              else { s += nx; }
              i += 2;
              continue;
            }
            if (ch === quote) { closed = true; i++; break; }
            s += ch;
            i++;
          }
          if (!closed) { throw new Error("SyntaxError: unterminated string"); }
          tokens.push({ t: "STRING", v: s });
          continue;
        }

        if (/[0-9]/.test(c)) {
          var num = "";
          while (i < line.length && /[0-9.]/.test(line[i])) { num += line[i]; i++; }
          tokens.push({ t: "NUMBER", v: parseFloat(num) });
          continue;
        }

        if (/[A-Za-z_]/.test(c)) {
          var id = "";
          while (i < line.length && /[A-Za-z0-9_]/.test(line[i])) { id += line[i]; i++; }
          tokens.push({ t: "NAME", v: id });
          continue;
        }

        var two = line.substr(i, 2);
        if (two === "==" || two === "!=" || two === "<=" || two === ">=" || two === "//" || two === "**" || two === "+=" || two === "-=" || two === "*=" || two === "/=" || two === "not" || two === "in") {
          if (two === "not" || two === "in") { tokens.push({ t: "NAME", v: two }); }
          else { tokens.push({ t: "OP", v: two }); }
          i += 2;
          continue;
        }

        if ("()[]{}:,.+-*/%<>=!".indexOf(c) !== -1) {
          tokens.push({ t: "OP", v: c });
          i++;
          continue;
        }

        throw new Error("SyntaxError: unexpected character '" + c + "'");
      }
    }

    while (indentStack.length > 1) { indentStack.pop(); tokens.push({ t: "DEDENT" }); }
    tokens.push({ t: "NEWLINE" });
    tokens.push({ t: "EOF" });
    return tokens;
  }

  /* ================= Parser ================= */

  function Parser(tokens) {
    this.toks = tokens;
    this.pos = 0;
  }
  Parser.prototype.peek = function () { return this.toks[this.pos]; };
  Parser.prototype.next = function () { return this.toks[this.pos++]; };
  Parser.prototype.eat = function (v) {
    var t = this.next();
    if (t.v !== v && t.t !== v) { throw new Error("SyntaxError: expected '" + v + "' but got '" + (t.v || t.t) + "'"); }
    return t;
  };
  Parser.prototype.isOp = function (v) {
    var t = this.peek();
    return t.t === "OP" && t.v === v;
  };
  Parser.prototype.isName = function (v) {
    var t = this.peek();
    return t.t === "NAME" && t.v === v;
  };

  Parser.prototype.parseProgram = function () {
    var body = [];
    while (this.peek().t !== "EOF") {
      while (this.peek().t === "NEWLINE") { this.next(); }
      if (this.peek().t === "EOF") { break; }
      body.push(this.parseStatement());
    }
    return { type: "program", body: body };
  };

  Parser.prototype.parseStatement = function () {
    var t = this.peek();
    if (t.t === "NAME") {
      if (t.v === "def") { return this.parseFunctionDef(); }
      if (t.v === "if") { return this.parseIf(); }
      if (t.v === "while") { return this.parseWhile(); }
      if (t.v === "for") { return this.parseFor(); }
      if (t.v === "return") { this.next(); var r = this.peek().t === "NEWLINE" ? null : this.parseExpr(); return { type: "return", value: r }; }
      if (t.v === "pass") { this.next(); return { type: "pass" }; }
      if (t.v === "break") { this.next(); return { type: "break" }; }
      if (t.v === "continue") { this.next(); return { type: "continue" }; }
    }
    return this.parseAssignOrExpr();
  };

  Parser.prototype.parseFunctionDef = function () {
    this.eat("def");
    var name = this.eat("NAME").v;
    this.eat("(");
    var params = [];
    if (!this.isOp(")")) {
      params.push(this.eat("NAME").v);
      while (this.isOp(",")) { this.next(); if (!this.isOp(")")) { params.push(this.eat("NAME").v); } }
    }
    this.eat(")");
    this.eat(":");
    var body = this.parseBlock();
    return { type: "func", name: name, params: params, body: body };
  };

  Parser.prototype.parseIf = function () {
    this.eat("if");
    var test = this.parseExpr();
    this.eat(":");
    var body = this.parseBlock();
    var node = { type: "if", test: test, body: body, orelse: null };
    var cur = node;
    while (this.isName("elif") || this.isName("else")) {
      if (this.isName("elif")) {
        this.next();
        var t2 = this.parseExpr();
        this.eat(":");
        var b2 = this.parseBlock();
        var el = { type: "if", test: t2, body: b2, orelse: null };
        cur.orelse = el;
        cur = el;
      } else {
        this.next();
        this.eat(":");
        var b3 = this.parseBlock();
        cur.orelse = { type: "block", body: b3 };
        break;
      }
    }
    return node;
  };

  Parser.prototype.parseWhile = function () {
    this.eat("while");
    var test = this.parseExpr();
    this.eat(":");
    var body = this.parseBlock();
    return { type: "while", test: test, body: body };
  };

  Parser.prototype.parseFor = function () {
    this.eat("for");
    var target = this.parseAtom();
    if (this.isName("in")) { this.next(); }
    else { throw new Error("SyntaxError: expected 'in' but got '" + (this.peek().v || this.peek().t) + "'"); }
    var iter = this.parseExpr();
    this.eat(":");
    var body = this.parseBlock();
    return { type: "for", target: target, iter: iter, body: body };
  };

  Parser.prototype.parseBlock = function () {
    if (this.peek().t === "NEWLINE") { this.next(); }
    var t = this.next();
    if (t.t !== "INDENT") { throw new Error("SyntaxError: expected an indented block"); }
    var body = [];
    while (this.peek().t !== "DEDENT" && this.peek().t !== "EOF") {
      while (this.peek().t === "NEWLINE") { this.next(); }
      if (this.peek().t === "DEDENT") { break; }
      body.push(this.parseStatement());
    }
    if (this.peek().t === "DEDENT") { this.next(); }
    return body;
  };

  Parser.prototype.parseAssignOrExpr = function () {
    var target = this.parseExpr();
    if (this.isOp("=") || this.isOp("+=") || this.isOp("-=") || this.isOp("*=") || this.isOp("/=")) {
      var op = this.next().v;
      var value = this.parseExpr();
      return { type: "assign", target: target, op: op, value: value };
    }
    return { type: "expr", expr: target };
  };

  Parser.prototype.parseExpr = function () { return this.parseOr(); };

  Parser.prototype.parseOr = function () {
    var left = this.parseAnd();
    var values = [left];
    while (this.isName("or")) {
      this.next();
      values.push(this.parseAnd());
    }
    if (values.length === 1) { return left; }
    return { type: "boolop", op: "or", values: values };
  };

  Parser.prototype.parseAnd = function () {
    var left = this.parseNot();
    var values = [left];
    while (this.isName("and")) {
      this.next();
      values.push(this.parseNot());
    }
    if (values.length === 1) { return left; }
    return { type: "boolop", op: "and", values: values };
  };

  Parser.prototype.parseNot = function () {
    if (this.isName("not")) {
      this.next();
      return { type: "unop", op: "not", operand: this.parseNot() };
    }
    return this.parseCompare();
  };

  Parser.prototype.parseCompare = function () {
    var left = this.parseAdditive();
    var ops = [];
    var comps = [];
    while (true) {
      var t = this.peek();
      var op = null;
      if (t.t === "OP" && ["==", "!=", "<", ">", "<=", ">="].indexOf(t.v) !== -1) { op = t.v; this.next(); }
      else if (t.t === "NAME" && t.v === "in") { op = "in"; this.next(); }
      else if (t.t === "NAME" && t.v === "not" && this.toks[this.pos + 1] && this.toks[this.pos + 1].t === "NAME" && this.toks[this.pos + 1].v === "in") {
        op = "not in"; this.next(); this.next();
      } else { break; }
      ops.push(op);
      comps.push(this.parseAdditive());
    }
    if (ops.length === 0) { return left; }
    return { type: "compare", left: left, ops: ops, comparators: comps };
  };

  Parser.prototype.parseAdditive = function () {
    var left = this.parseMultiplicative();
    while (true) {
      if (this.isOp("+") || this.isOp("-")) {
        var op = this.next().v;
        var right = this.parseMultiplicative();
        left = { type: "binop", op: op, left: left, right: right };
      } else { break; }
    }
    return left;
  };

  Parser.prototype.parseMultiplicative = function () {
    var left = this.parseUnary();
    while (true) {
      if (this.isOp("*") || this.isOp("/") || this.isOp("//") || this.isOp("%")) {
        var op = this.next().v;
        var right = this.parseUnary();
        left = { type: "binop", op: op, left: left, right: right };
      } else { break; }
    }
    return left;
  };

  Parser.prototype.parseUnary = function () {
    if (this.isOp("-")) { this.next(); return { type: "unop", op: "-", operand: this.parseUnary() }; }
    if (this.isOp("+")) { this.next(); return this.parseUnary(); }
    return this.parsePower();
  };

  Parser.prototype.parsePower = function () {
    var base = this.parsePostfix();
    if (this.isOp("**")) {
      this.next();
      var exp = this.parseUnary();
      return { type: "binop", op: "**", left: base, right: exp };
    }
    return base;
  };

  Parser.prototype.parsePostfix = function () {
    var node = this.parseAtom();
    while (true) {
      if (this.isOp("(")) {
        this.next();
        var args = [];
        if (!this.isOp(")")) {
          args.push(this.parseExpr());
          while (this.isOp(",")) { this.next(); if (!this.isOp(")")) { args.push(this.parseExpr()); } }
        }
        this.eat(")");
        node = { type: "call", func: node, args: args };
      } else if (this.isOp("[")) {
        this.next();
        var hasColon = false;
        var parts = [];
        while (!this.isOp("]")) {
          if (this.isOp(":")) { parts.push(null); this.next(); if (this.isOp("]")) { hasColon = true; break; } continue; }
          parts.push(this.parseExpr());
          if (this.isOp(":")) { hasColon = true; this.next(); if (this.isOp("]")) { parts.push(null); } }
        }
        this.eat("]");
        if (hasColon) {
          node = { type: "slice", obj: node, lower: parts[0] || null, upper: parts[1] || null };
        } else {
          node = { type: "subscr", obj: node, index: parts[0] };
        }
      } else if (this.isOp(".")) {
        this.next();
        var attr = this.eat("NAME").v;
        node = { type: "attr", obj: node, attr: attr };
      } else { break; }
    }
    return node;
  };

  Parser.prototype.parseAtom = function () {
    var t = this.peek();
    if (t.t === "NUMBER") { this.next(); return { type: "num", value: t.v }; }
    if (t.t === "STRING") { this.next(); return { type: "str", value: t.v }; }
    if (t.t === "NAME") {
      this.next();
      if (t.v === "True") { return { type: "bool", value: true }; }
      if (t.v === "False") { return { type: "bool", value: false }; }
      if (t.v === "None") { return { type: "none" }; }
      return { type: "name", id: t.v };
    }
    if (this.isOp("(")) {
      this.next();
      var e = this.parseExpr();
      this.eat(")");
      return e;
    }
    if (this.isOp("[")) {
      this.next();
      var items = [];
      if (!this.isOp("]")) {
        items.push(this.parseExpr());
        while (this.isOp(",")) { this.next(); if (!this.isOp("]")) { items.push(this.parseExpr()); } }
      }
      this.eat("]");
      return { type: "list", elements: items };
    }
    if (this.isOp("{")) {
      this.next();
      var keys = [], vals = [];
      if (!this.isOp("}")) {
        keys.push(this.parseExpr());
        this.eat(":");
        vals.push(this.parseExpr());
        while (this.isOp(",")) { this.next(); if (this.isOp("}")) { break; } keys.push(this.parseExpr()); this.eat(":"); vals.push(this.parseExpr()); }
      }
      this.eat("}");
      return { type: "dict", keys: keys, values: vals };
    }
    throw new Error("SyntaxError: unexpected token '" + (t.v || t.t) + "'");
  };

  function parse(code) {
    var toks = tokenize(code);
    var p = new Parser(toks);
    var prog = p.parseProgram();
    return prog;
  }

  /* ================= Interpreter ================= */

  var steps = 0;
  var logs = [];

  function reset(counter) { steps = 0; if (counter !== false) { logs = []; } }

  function checkSteps() {
    steps++;
    if (steps > MAX_STEPS) { throw new Error("RuntimeError: too many steps - did your loop run forever?"); }
  }

  function evalNode(node, env) {
    checkSteps();
    switch (node.type) {
      case "program": {
        var r = null;
        for (var i = 0; i < node.body.length; i++) { r = exec(node.body[i], env); }
        return r;
      }
      case "num": return node.value;
      case "str": return node.value;
      case "bool": return node.value;
      case "none": return null;
      case "list": {
        var arr = [];
        for (var a = 0; a < node.elements.length; a++) { arr.push(evalNode(node.elements[a], env)); }
        return arr;
      }
      case "dict": {
        var d = new PyDict();
        for (var k = 0; k < node.keys.length; k++) {
          var key = evalNode(node.keys[k], env);
          var val = evalNode(node.values[k], env);
          d.set(key, val);
        }
        return d;
      }
      case "name": return env.get(node.id);
      case "binop": {
        var l = evalNode(node.left, env);
        if (node.op === "and" && !truthy(l)) { return l; }
        if (node.op === "or" && truthy(l)) { return l; }
        var r = evalNode(node.right, env);
        return applyBinop(node.op, l, r);
      }
      case "unop": {
        var o = evalNode(node.operand, env);
        if (node.op === "not") { return !truthy(o); }
        if (node.op === "-") { return -num(o); }
        if (node.op === "+") { return num(o); }
        return null;
      }
      case "boolop": {
        var res = evalNode(node.values[0], env);
        if (node.op === "and") {
          for (var i = 1; i < node.values.length; i++) { res = evalNode(node.values[i], env); if (!truthy(res)) { break; } }
        } else {
          for (var j = 1; j < node.values.length; j++) { if (truthy(res)) { break; } res = evalNode(node.values[j], env); }
        }
        return res;
      }
      case "compare": {
        var left = evalNode(node.left, env);
        for (var c = 0; c < node.ops.length; c++) {
          var right = evalNode(node.comparators[c], env);
          if (!applyCompare(node.ops[c], left, right)) { return false; }
          left = right;
        }
        return true;
      }
      case "call": return callValue(evalNode(node.func, env), node.args, env);
      case "attr": {
        var obj = evalNode(node.obj, env);
        return getAttr(obj, node.attr);
      }
      case "subscr": {
        var o = evalNode(node.obj, env);
        var idx = evalNode(node.index, env);
        return getItem(o, idx);
      }
      case "slice": {
        var so = evalNode(node.obj, env);
        var lower = node.lower ? evalNode(node.lower, env) : 0;
        var upper = node.upper ? evalNode(node.upper, env) : null;
        return sliceValue(so, lower, upper);
      }
      default:
        throw new Error("RuntimeError: unknown node " + node.type);
    }
  }

  function num(v) {
    if (typeof v === "number") { return v; }
    return Number(v);
  }

  function applyBinop(op, l, r) {
    switch (op) {
      case "+":
        if (typeof l === "string" || typeof r === "string") { return String(l) + String(r); }
        if (Array.isArray(l) && Array.isArray(r)) { return l.concat(r); }
        return num(l) + num(r);
      case "-": return num(l) - num(r);
      case "*": {
        if (typeof l === "string" && typeof r === "number") { return l.repeat(r); }
        if (typeof l === "number" && typeof r === "string") { return r.repeat(l); }
        return num(l) * num(r);
      }
      case "/": return num(l) / num(r);
      case "//": return Math.floor(num(l) / num(r));
      case "%": return num(l) % num(r);
      case "**": return Math.pow(num(l), num(r));
      default: throw new Error("RuntimeError: unknown operator " + op);
    }
  }

  function applyCompare(op, l, r) {
    switch (op) {
      case "==": return eq(l, r);
      case "!=": return !eq(l, r);
      case "<": return num(l) < num(r);
      case ">": return num(l) > num(r);
      case "<=": return num(l) <= num(r);
      case ">=": return num(l) >= num(r);
      case "in": return contains(r, l);
      case "not in": return !contains(r, l);
      default: return false;
    }
  }

  function eq(a, b) {
    if (a === b) { return true; }
    if (a === null || b === null) { return false; }
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) { return false; }
      for (var i = 0; i < a.length; i++) { if (!eq(a[i], b[i])) { return false; } }
      return true;
    }
    if (a instanceof PyDict && b instanceof PyDict) {
      var ka = Object.keys(a.map), kb = Object.keys(b.map);
      if (ka.length !== kb.length) { return false; }
      for (var k = 0; k < ka.length; k++) { if (!eq(a.map[ka[k]].val, b.map[ka[k]] && b.map[ka[k]].val)) { return false; } }
      return true;
    }
    return false;
  }

  function contains(container, item) {
    if (Array.isArray(container)) { return container.some(function (x) { return eq(x, item); }); }
    if (typeof container === "string") { return container.indexOf(String(item)) !== -1; }
    if (container instanceof PyDict) { return container.has(item); }
    if (container instanceof PyRange) { return rangeToList(container).indexOf(num(item)) !== -1; }
    return false;
  }

  function getItem(o, idx) {
    if (typeof o === "string" || Array.isArray(o)) {
      var i = num(idx);
      if (i < 0) { i += o.length; }
      if (i < 0 || i >= o.length) { throw new Error("IndexError: index out of range"); }
      return o[i];
    }
    if (o instanceof PyDict) { return o.get(idx); }
    throw new Error("TypeError: not subscriptable");
  }

  function sliceValue(o, lower, upper) {
    var len = o.length;
    var lo = lower === null ? 0 : num(lower);
    var hi = upper === null ? len : num(upper);
    if (lo < 0) { lo += len; }
    if (hi < 0) { hi += len; }
    lo = Math.max(0, Math.min(lo, len));
    hi = Math.max(0, Math.min(hi, len));
    if (typeof o === "string") { return o.substring(lo, hi); }
    return o.slice(lo, hi);
  }

  function getAttr(obj, attr) {
    if (typeof obj === "string") { return strMethod(obj, attr); }
    if (Array.isArray(obj)) { return listMethod(obj, attr); }
    if (obj instanceof PyDict) { return dictMethod(obj, attr); }
    if (obj instanceof PyRange) {
      if (attr === "start") { return obj.start; }
      if (attr === "stop") { return obj.stop; }
      if (attr === "step") { return obj.step; }
    }
    throw new Error("AttributeError: no attribute '" + attr + "'");
  }

  function strMethod(s, attr) {
    var f = function () { throw new Error("TypeError: " + attr + " is not callable"); };
    if (attr === "lower") { f = function () { return s.toLowerCase(); }; }
    if (attr === "upper") { f = function () { return s.toUpperCase(); }; }
    if (attr === "strip") { f = function () { return s.replace(/^\s+|\s+$/g, ""); }; }
    if (attr === "split") { f = function (sep) { return sep === undefined ? s.split(/\s+/) : s.split(String(sep)); }; }
    if (attr === "replace") { f = function (a, b) { return s.split(String(a)).join(String(b)); }; }
    if (attr === "startswith") { f = function (p) { return s.indexOf(String(p)) === 0; }; }
    if (attr === "endswith") { f = function (p) { return s.indexOf(String(p)) === s.length - String(p).length; }; }
    if (attr === "count") { f = function (p) { var sub = String(p), n = 0, pos = 0; while ((pos = s.indexOf(sub, pos)) !== -1) { n++; pos += sub.length; } return n; }; }
    if (attr === "find") { f = function (p) { return s.indexOf(String(p)); }; }
    if (attr === "join") { f = function (arr) { return arr.map(function (x) { return String(x); }).join(s); }; }
    f.__bound = true;
    return f;
  }

  function listMethod(arr, attr) {
    var f = function () { throw new Error("TypeError: " + attr + " is not callable"); };
    if (attr === "append") { f = function (x) { arr.push(x); }; }
    if (attr === "count") { f = function (x) { return arr.filter(function (v) { return eq(v, x); }).length; }; }
    if (attr === "index") { f = function (x) { var i = arr.findIndex(function (v) { return eq(v, x); }); if (i === -1) { throw new Error("ValueError: not in list"); } return i; }; }
    if (attr === "sort") { f = function () { arr.sort(function (a, b) { return num(a) - num(b); }); }; }
    f.__bound = true;
    return f;
  }

  function dictMethod(d, attr) {
    var f = function () { throw new Error("TypeError: " + attr + " is not callable"); };
    if (attr === "get") { f = function (k, def) { return d.has(k) ? d.get(k) : (def === undefined ? null : def); }; }
    if (attr === "keys") { f = function () { return Object.keys(d.map).map(function (k) { return d.map[k].key; }); }; }
    if (attr === "values") { f = function () { return Object.keys(d.map).map(function (k) { return d.map[k].val; }); }; }
    if (attr === "items") { f = function () { return Object.keys(d.map).map(function (k) { return [k, d.map[k].val]; }); }; }
    f.__bound = true;
    return f;
  }

  function callValue(func, args, env) {
    if (typeof func === "function" && func.__bound) {
      return func.apply(null, args.map(function (a) { return evalNode(a, env); }));
    }
    if (func instanceof PyFunc) {
      var calleeEnv = new Env(func.env);
      for (var i = 0; i < func.params.length; i++) { calleeEnv.vars[func.params[i]] = args[i] ? evalNode(args[i], env) : null; }
      var ret = { fired: false, value: null };
      execBlock(func.body, calleeEnv, ret);
      return ret.value;
    }
    var name = func && func.name ? func.name : "";
    if (typeof func === "string") { name = func; }
    if (typeof func === "function") {
      return func.apply(null, args.map(function (a) { return evalNode(a, env); }));
    }
    throw new Error("TypeError: '" + strLike(func) + "' is not callable");
  }

  function exec(stmt, env) {
    checkSteps();
    switch (stmt.type) {
      case "func":
        env.vars[stmt.name] = new PyFunc(stmt.name, stmt.params, stmt.body, env);
        return null;
      case "return":
        return { _return: stmt.value ? evalNode(stmt.value, env) : null };
      case "pass":
        return null;
      case "break":
        return { _break: true };
      case "continue":
        return { _continue: true };
      case "expr":
        return evalNode(stmt.expr, env);
      case "assign":
        return execAssign(stmt, env);
      case "if": {
        if (truthy(evalNode(stmt.test, env))) { return execBlock(stmt.body, env); }
        var cur = stmt.orelse;
        while (cur) {
          if (cur.type === "if") {
            if (truthy(evalNode(cur.test, env))) { return execBlock(cur.body, env); }
            cur = cur.orelse;
          } else {
            return execBlock(cur.body, env);
          }
        }
        return null;
      }
      case "while": {
        var guard = 0;
        while (truthy(evalNode(stmt.test, env))) {
          if (guard++ > MAX_STEPS / 10) { throw new Error("RuntimeError: too many steps - did your loop run forever?"); }
          var res = execBlock(stmt.body, env);
          if (res && res._break) { break; }
        }
        return null;
      }
      case "for": {
        var it = evalNode(stmt.iter, env);
        var items = [];
        if (Array.isArray(it)) { items = it; }
        else if (it instanceof PyRange) { items = rangeToList(it); }
        else if (typeof it === "string") { items = it.split(""); }
        else if (it instanceof PyDict) { items = Object.keys(it.map).map(function (k) { return it.map[k].key; }); }
        else { throw new Error("TypeError: not iterable"); }
        for (var i = 0; i < items.length; i++) {
          var tEnv = new Env(env);
          if (stmt.target.type === "name") { tEnv.vars[stmt.target.id] = items[i]; }
          else { tEnv.vars["__it"] = items[i]; }
          var res2 = execBlock(stmt.body, tEnv);
          if (res2 && res2._break) { break; }
        }
        return null;
      }
      default:
        throw new Error("RuntimeError: unknown statement " + stmt.type);
    }
  }

  function execBlock(body, env, ret) {
    for (var i = 0; i < body.length; i++) {
      var r = exec(body[i], env);
      if (r && Object.prototype.hasOwnProperty.call(r, "_return")) {
        if (ret) { ret.fired = true; ret.value = r._return; }
        return r;
      }
      if (r && (r._break || r._continue)) { return r; }
    }
    return null;
  }

  function execAssign(stmt, env) {
    var value = evalNode(stmt.value, env);
    if (stmt.target.type === "name") {
      if (stmt.op === "+=") { value = applyBinop("+", env.get(stmt.target.id), value); }
      else if (stmt.op === "-=") { value = applyBinop("-", env.get(stmt.target.id), value); }
      else if (stmt.op === "*=") { value = applyBinop("*", env.get(stmt.target.id), value); }
      else if (stmt.op === "/=") { value = applyBinop("/", env.get(stmt.target.id), value); }
      env.set(stmt.target.id, value);
      return value;
    }
    if (stmt.target.type === "subscr") {
      var obj = evalNode(stmt.target.obj, env);
      var idx = evalNode(stmt.target.index, env);
      if (Array.isArray(obj)) {
        var i = num(idx); if (i < 0) { i += obj.length; }
        obj[i] = value;
      } else if (obj instanceof PyDict) {
        obj.set(idx, value);
      }
      return value;
    }
    throw new Error("SyntaxError: invalid assignment target");
  }

  /* PyDict implementation with string-ified keys */

  PyDict.prototype.keyId = function (k) { return typeof k === "string" ? "s:" + k : "n:" + String(k); };
  PyDict.prototype.set = function (k, v) { this.map[this.keyId(k)] = { key: k, val: v }; };
  PyDict.prototype.get = function (k) { var e = this.map[this.keyId(k)]; return e ? e.val : null; };
  PyDict.prototype.has = function (k) { return this.keyId(k) in this.map; };

  /* ================= Builtins ================= */

  var builtins = {
    print: function () {
      var parts = [];
      for (var i = 0; i < arguments.length; i++) { parts.push(strLike(arguments[i])); }
      logs.push(parts.join(" "));
      return null;
    },
    len: function (x) {
      if (Array.isArray(x) || typeof x === "string") { return x.length; }
      if (x instanceof PyDict) { return Object.keys(x.map).length; }
      if (x instanceof PyRange) { return Math.max(0, Math.ceil((x.stop - x.start) / x.step)); }
      throw new Error("TypeError: object has no len()");
    },
    range: function (a, b, c) {
      if (b === undefined) { return new PyRange(0, a, 1); }
      return new PyRange(a, b, c === undefined ? 1 : c);
    },
    abs: function (n) { return Math.abs(num(n)); },
    min: function () {
      var args = Array.prototype.slice.call(arguments);
      if (args.length === 1 && Array.isArray(args[0])) { args = args[0]; }
      if (!args.length) { throw new Error("ValueError: min() arg is an empty sequence"); }
      var m = args[0];
      for (var i = 1; i < args.length; i++) { if (num(args[i]) < num(m)) { m = args[i]; } }
      return m;
    },
    max: function () {
      var args = Array.prototype.slice.call(arguments);
      if (args.length === 1 && Array.isArray(args[0])) { args = args[0]; }
      if (!args.length) { throw new Error("ValueError: max() arg is an empty sequence"); }
      var m = args[0];
      for (var i = 1; i < args.length; i++) { if (num(args[i]) > num(m)) { m = args[i]; } }
      return m;
    },
    sum: function (x) {
      var arr = Array.isArray(x) ? x : rangeToList(x);
      return arr.reduce(function (a, b) { return num(a) + num(b); }, 0);
    },
    round: function (n) { return Math.round(num(n)); },
    str: function (x) { return strLike(x); },
    int: function (x) { return parseInt(x, 10); },
    list: function (x) {
      if (Array.isArray(x)) { return x.slice(); }
      if (x instanceof PyRange) { return rangeToList(x); }
      if (typeof x === "string") { return x.split(""); }
      if (x instanceof PyDict) { return Object.keys(x.map); }
      return [x];
    },
    sorted: function (x) {
      var arr = Array.isArray(x) ? x.slice() : rangeToList(x);
      arr.sort(function (a, b) { return num(a) - num(b); });
      return arr;
    }
  };

  /* ================= Public API ================= */

  var globalEnv = null;

  function ensureBuiltins(env) {
    for (var k in builtins) { env.vars[k] = builtins[k]; }
  }

  return {
    run: function (code) {
      logs = [];
      globalEnv = new Env();
      ensureBuiltins(globalEnv);
      try {
        var prog = parse(code);
        evalNode(prog, globalEnv);
        return { error: null, logs: logs.slice() };
      } catch (e) {
        return { error: String(e.message || e), logs: logs.slice() };
      }
    },
    call: function (name, args) {
      if (!globalEnv || !globalEnv.has(name)) { throw new Error("NameError: '" + name + "' is not defined yet"); }
      var fn = globalEnv.get(name);
      if (!(fn instanceof PyFunc)) { throw new Error("TypeError: '" + name + "' is not a function"); }
      var argVals = (args || []).map(fromJS);
      var calleeEnv = new Env(fn.env);
      for (var i = 0; i < fn.params.length; i++) { calleeEnv.vars[fn.params[i]] = argVals[i] !== undefined ? argVals[i] : null; }
      var ret = { fired: false, value: null };
      execBlock(fn.body, calleeEnv, ret);
      return toJS(ret.value);
    },
    expr: function (code) {
      if (!globalEnv) { return null; }
      try {
        var prog = parse(code);
        return toJS(evalNode(prog, globalEnv));
      } catch (e) {
        throw new Error(String(e.message || e));
      }
    },
    exec: function (code) {
      if (!globalEnv) { globalEnv = new Env(); ensureBuiltins(globalEnv); }
      try {
        var prog = parse(code);
        evalNode(prog, globalEnv);
        return { error: null };
      } catch (e) {
        return { error: String(e.message || e) };
      }
    },
    hasFunction: function (name) { return !!(globalEnv && globalEnv.has(name)); },
    logs: function () { return logs.slice(); },
    formatValue: function (v) { return strLike(v); }
  };
})();