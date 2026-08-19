/* ============================================================
   SkillRun - Practice categories, items & achievements (V2)
   Extends the global PRACTICE object to 10 categories and
   replaces ACHIEVEMENTS with a full trophy set + checks.
   ============================================================ */

var PRACTICE_CATS = [
  { key: "speed",       title: "Speed Run",          icon: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M5 3 2 6M22 6l-3-3M6 2l-4 4M18 2l4 4M2 13h2M20 13h2"/>', desc: "Fast, tiny challenges against the clock.", accent: "yellow" },
  { key: "fix",         title: "Debug",              icon: '<rect x="8" y="6" width="8" height="14" rx="4"/><path d="M19 7l-3 3M5 7l3 3M12 3v3M2 13h2M20 13h2M8 21v-2M16 21v-2M8 6V4M16 6V4"/>', desc: "Broken code, your job to repair.",         accent: "red" },
  { key: "recall",      title: "Recall",             icon: '<path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z"/>', desc: "Revisit skills from earlier missions.",     accent: "purple" },
  { key: "build",       title: "Build",              icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>', desc: "Build something from a blank slate.",       accent: "green" },
  { key: "remix",       title: "Remix",              icon: '<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>', desc: "Take working code and change it.",          accent: "cyan" },
  { key: "precision",   title: "Precision",          icon: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>', desc: "Exact outputs, edge cases and all.",        accent: "pink" },
  { key: "reverse",     title: "Reverse Engineer",   icon: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>', desc: "Figure out what code does and rebuild it.", accent: "orange" },
  { key: "puzzle",      title: "Puzzle",             icon: '<path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>', desc: "Tricky logic in small packages.",           accent: "yellow" },
  { key: "architecture",title: "Architecture",       icon: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>', desc: "Design the shape of a program.",            accent: "purple" },
  { key: "realworld",   title: "Real World",         icon: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>', desc: "Build things that exist in the wild.",      accent: "green" }
];

/* new practice items across the 10 categories */
(function () {
  function item(cat, id, title, tagline, prompt, starter, test, solution, xp, extra) {
    var it = { id: id, kind: cat, title: title, tagline: tagline, type: "js", prompt: prompt, starter: starter, test: test, solution: solution, xp: xp, pathId: "web" };
    if (extra) { for (var k in extra) { it[k] = extra[k]; } }
    if (!extra || !extra.type) {
      if (it.pathId === "programming") { it.type = "python"; }
      else if (it.pathId === "electronics") { it.type = "circuit"; }
    }
    (PRACTICE[cat] = PRACTICE[cat] || []).push(it);
  }

  /* speed - timed runs */
  item("speed", "speed-timed-1", "Countdown 30s", "Return true fast - no time to think.",
    "Write isPositive(n) that returns true when n > 0.",
    "function isPositive(n) {\n  return false;\n}",
    "function t() {\n  if (!isPositive(5)) return { passed: false, message: 'isPositive(5) should be true.' };\n  if (isPositive(-2)) return { passed: false, message: 'isPositive(-2) should be false.' };\n  if (isPositive(0)) return { passed: false, message: '0 is not positive.' };\n  return { passed: true, message: 'Fast! +12 XP' };\n}",
    "function isPositive(n) {\n  return n > 0;\n}", 12, { timed: 30 });

  item("speed", "speed-timed-2", "Split in 60s", "One minute to split a sentence.",
    "Write firstWord(s) that returns the first word of a sentence.",
    "function firstWord(s) {\n  return \"\";\n}",
    "function t() {\n  if (firstWord('hello world') !== 'hello') return { passed: false, message: 'firstWord(\"hello world\") should be \"hello\".' };\n  if (firstWord('SkillRun rocks') !== 'SkillRun') return { passed: false, message: 'firstWord(\"SkillRun rocks\") should be \"SkillRun\".' };\n  return { passed: true, message: 'On the clock and on point! +15 XP' };\n}",
    "function firstWord(s) {\n  return s.split(' ')[0];\n}", 15, { timed: 60 });

  /* fix */
  item("fix", "fix-4", "Fix the Return", "The logic is right, the return is wrong.",
    "triple(3) should return 9. Fix the code.",
    "function triple(n) {\n  var out = n * 3;\n}",
    "function t() {\n  if (triple(3) !== 9) return { passed: false, message: 'triple(3) should return 9.' };\n  if (triple(0) !== 0) return { passed: false, message: 'triple(0) should return 0.' };\n  return { passed: true, message: 'Fixed! +15 XP' };\n}",
    "function triple(n) {\n  return n * 3;\n}", 15);

  /* recall - spaced practice on earlier skills */
  item("recall", "recall-1", "Remember Headings", "Recall mission 1: build a page heading.",
    "Write makeHeading(text) that returns an <h1> element with the given text (use document.createElement).",
    "function makeHeading(text) {\n  return null;\n}",
    "function t() {\n  var el = makeHeading('Hello');\n  if (!el || el.tagName !== 'H1') return { passed: false, message: 'Return an <h1> element.' };\n  if (el.textContent !== 'Hello') return { passed: false, message: 'The heading should contain the text.' };\n  return { passed: true, message: 'You remembered HTML! +15 XP' };\n}",
    "function makeHeading(text) {\n  var el = document.createElement('h1');\n  el.textContent = text;\n  return el;\n}", 15);

  item("recall", "recall-2", "Remember Arrays", "Recall mission 7: arrays and storage.",
    "Write appendAndCount(list, item) that adds item and returns the new length.",
    "function appendAndCount(list, item) {\n  return 0;\n}",
    "function t() {\n  var a = [];\n  if (appendAndCount(a, 'x') !== 1) return { passed: false, message: 'Appending to an empty list gives length 1.' };\n  if (a[0] !== 'x') return { passed: false, message: 'The item should be added to the list.' };\n  return { passed: true, message: 'Storage skills intact! +15 XP' };\n}",
    "function appendAndCount(list, item) {\n  list.push(item);\n  return list.length;\n}", 15);

  /* build */
  item("build", "build-4", "Build a Counter", "Count characters, not vowels this time.",
    "Write countChar(word, c) that returns how many times the character c appears in word. Example: countChar('banana', 'a') -> 3",
    "function countChar(word, c) {\n  // count occurrences\n  return 0;\n}",
    "function t() {\n  if (countChar('banana', 'a') !== 3) return { passed: false, message: 'countChar(\"banana\", \"a\") should be 3.' };\n  if (countChar('banana', 'n') !== 2) return { passed: false, message: 'countChar(\"banana\", \"n\") should be 2.' };\n  if (countChar('abc', 'z') !== 0) return { passed: false, message: 'Missing chars count 0.' };\n  return { passed: true, message: 'Built from scratch! +20 XP' };\n}",
    "function countChar(word, c) {\n  var n = 0;\n  for (var i = 0; i < word.length; i++) { if (word[i] === c) n++; }\n  return n;\n}", 20);

  /* remix */
  item("remix", "remix-1", "Remix: Arrow Style", "Working code, new style. Convert to a one-line arrow function.",
    "Rewrite add(a, b) as a single-line arrow function (const add = (a, b) => ...).",
    "function add(a, b) {\n  return a + b;\n}",
    "function t() {\n  if (add(2, 3) !== 5) return { passed: false, message: 'add(2,3) should still return 5.' };\n  if (!/=>/.test(add.toString())) return { passed: false, message: 'Use an arrow function (=>).' };\n  return { passed: true, message: 'Remixed to modern JS! +15 XP' };\n}",
    "const add = (a, b) => a + b;", 15);

  item("remix", "remix-2", "Remix: Rename It", "Make the code clearer with better names.",
    "keep(things) returns a copy without the first item. Rename it to dropFirst and keep it working.",
    "function keep(things) {\n  return things.slice(1);\n}",
    "function t() {\n  if (typeof dropFirst !== 'function') return { passed: false, message: 'Define a function named dropFirst.' };\n  var out = dropFirst(['a', 'b', 'c']);\n  if (out.length !== 2 || out[0] !== 'b') return { passed: false, message: 'dropFirst should drop the first item.' };\n  return { passed: true, message: 'Clear names, clean code! +15 XP' };\n}",
    "function dropFirst(things) {\n  return things.slice(1);\n}", 15);

  /* precision */
  item("precision", "precision-1", "Exact to the Letter", "Exact output, case and spaces matter.",
    "Write shout(s) that returns the text uppercased with a trailing '!'. Example: shout('go') -> 'GO!'",
    "function shout(s) {\n  return \"\";\n}",
    "function t() {\n  if (shout('go') !== 'GO!') return { passed: false, message: 'shout(\"go\") should be \"GO!\" exactly.' };\n  if (shout('') !== '!') return { passed: false, message: 'shout(\"\") should be \"!\".' };\n  return { passed: true, message: 'Precision printing! +18 XP' };\n}",
    "function shout(s) {\n  return s.toUpperCase() + '!';\n}", 18);

  item("precision", "precision-2", "Edge Cases", "Empty arrays, single items, all of it.",
    "Write lastItem(list) that returns the last item, or null when empty.",
    "function lastItem(list) {\n  return null;\n}",
    "function t() {\n  if (lastItem([7]) !== 7) return { passed: false, message: 'lastItem([7]) should be 7.' };\n  if (lastItem([1, 2, 3]) !== 3) return { passed: false, message: 'lastItem([1,2,3]) should be 3.' };\n  if (lastItem([]) !== null) return { passed: false, message: 'Empty list returns null.' };\n  return { passed: true, message: 'All edge cases covered! +18 XP' };\n}",
    "function lastItem(list) {\n  return list.length ? list[list.length - 1] : null;\n}", 18);

  /* reverse */
  item("reverse", "reverse-1", "Reverse It", "You see the output, you write the input.",
    "We know mystery('abc') returns 'cba'. Write reverse(word) to make that true.",
    "function reverse(word) {\n  return word;\n}",
    "function t() {\n  if (reverse('abc') !== 'cba') return { passed: false, message: 'reverse(\"abc\") should be \"cba\".' };\n  if (reverse('racecar') !== 'racecar') return { passed: false, message: 'reverse(\"racecar\") should be \"racecar\".' };\n  if (reverse('') !== '') return { passed: false, message: 'reverse(\"\") should be \"\".' };\n  return { passed: true, message: 'Reverse engineered! +20 XP' };\n}",
    "function reverse(word) {\n  var out = '';\n  for (var i = word.length - 1; i >= 0; i--) { out += word[i]; }\n  return out;\n}", 20);

  item("reverse", "reverse-2", "Undo the Mix", "A function scrambles things. Rebuild the original order.",
    "The output of decode(['a','b','c']) is 'a-b-c'. Write decode(list) to join items with a dash.",
    "function decode(list) {\n  return \"\";\n}",
    "function t() {\n  if (decode(['a','b','c']) !== 'a-b-c') return { passed: false, message: 'decode should join with dashes.' };\n  if (decode(['x']) !== 'x') return { passed: false, message: 'Single item has no dashes.' };\n  return { passed: true, message: 'Pattern decoded! +20 XP' };\n}",
    "function decode(list) {\n  return list.join('-');\n}", 20);

  /* puzzle */
  item("puzzle", "puzzle-1", "FizzBuzz Lite", "The classic, half-sized.",
    "Write fizzbuzz(n) that returns 'fizz' when n is divisible by 3, 'buzz' when by 5, 'fizzbuzz' when both, else the number as a string.",
    "function fizzbuzz(n) {\n  return \"\";\n}",
    "function t() {\n  if (fizzbuzz(3) !== 'fizz') return { passed: false, message: '3 -> \"fizz\".' };\n  if (fizzbuzz(5) !== 'buzz') return { passed: false, message: '5 -> \"buzz\".' };\n  if (fizzbuzz(15) !== 'fizzbuzz') return { passed: false, message: '15 -> \"fizzbuzz\".' };\n  if (fizzbuzz(7) !== '7') return { passed: false, message: '7 -> \"7\".' };\n  return { passed: true, message: 'Puzzle solved! +25 XP' };\n}",
    "function fizzbuzz(n) {\n  if (n % 15 === 0) return 'fizzbuzz';\n  if (n % 3 === 0) return 'fizz';\n  if (n % 5 === 0) return 'buzz';\n  return String(n);\n}", 25);

  item("puzzle", "puzzle-2", "Nested Loop", "Two loops, one total.",
    "Write pairs(n) that returns how many pairs (i, j) exist with i < j and i + j <= n. Example: pairs(3) -> 2 ((1,2),(1,3)? no - (1,2))",
    "function pairs(n) {\n  var count = 0;\n  // count i<j with i+j<=n\n  return count;\n}",
    "function t() {\n  if (pairs(3) !== 1) return { passed: false, message: 'pairs(3) should be 1: only (1,2).' };\n  if (pairs(4) !== 2) return { passed: false, message: 'pairs(4) should be 2: (1,2) and (1,3).' };\n  if (pairs(1) !== 0) return { passed: false, message: 'pairs(1) should be 0.' };\n  return { passed: true, message: 'Nested logic nailed! +25 XP' };\n}",
    "function pairs(n) {\n  var count = 0;\n  for (var i = 1; i < n; i++) {\n    for (var j = i + 1; j <= n; j++) {\n      if (i + j <= n) count++;\n    }\n  }\n  return count;\n}", 25);

  /* architecture */
  item("architecture", "arch-1", "Design a Registry", "Design the data shape before coding.",
    "Write createRegistry() that returns an object with add(name, value) and get(name). New names default value to 0.",
    "function createRegistry() {\n  // return { add, get }\n  return null;\n}",
    "function t() {\n  var r = createRegistry();\n  if (!r || typeof r.add !== 'function' || typeof r.get !== 'function') return { passed: false, message: 'Return an object with add and get methods.' };\n  r.add('score', 5);\n  if (r.get('score') !== 5) return { passed: false, message: 'get should return the stored value.' };\n  if (r.get('missing') !== 0) return { passed: false, message: 'Unknown names default to 0.' };\n  return { passed: true, message: 'Clean architecture! +25 XP' };\n}",
    "function createRegistry() {\n  var store = {};\n  return {\n    add: function (name, value) { store[name] = value; },\n    get: function (name) { return name in store ? store[name] : 0; }\n  };\n}", 25);

  item("architecture", "arch-2", "Plan a Queue", "First in, first out. Design it.",
    "Write createQueue() returning { add(item), next() } where next removes and returns the first item, or null when empty.",
    "function createQueue() {\n  // FIFO queue\n  return null;\n}",
    "function t() {\n  var q = createQueue();\n  q.add('a'); q.add('b');\n  if (q.next() !== 'a') return { passed: false, message: 'next() returns the first added item.' };\n  if (q.next() !== 'b') return { passed: false, message: 'next() returns items in order.' };\n  if (q.next() !== null) return { passed: false, message: 'Empty queue returns null.' };\n  return { passed: true, message: 'FIFO built right! +25 XP' };\n}",
    "function createQueue() {\n  var items = [];\n  return {\n    add: function (item) { items.push(item); },\n    next: function () { return items.length ? items.shift() : null; }\n  };\n}", 25);

  /* real world */
  item("realworld", "rw-1", "Slugify", "Turn a page title into a URL slug.",
    "Write slugify(title) that lowercases, replaces spaces with dashes and removes punctuation. Example: slugify('My Cool Page!') -> 'my-cool-page'",
    "function slugify(title) {\n  return \"\";\n}",
    "function t() {\n  if (slugify('My Cool Page!') !== 'my-cool-page') return { passed: false, message: 'slugify(\"My Cool Page!\") should be \"my-cool-page\".' };\n  if (slugify('Hello, World') !== 'hello-world') return { passed: false, message: 'Punctuation should be removed.' };\n  if (slugify('a b') !== 'a-b') return { passed: false, message: 'Spaces become dashes.' };\n  return { passed: true, message: 'SEO-ready URLs! +25 XP' };\n}",
    "function slugify(title) {\n  return title.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\\s+/g, '-');\n}", 25);

  item("realworld", "rw-2", "Format the Price", "Real apps format money.",
    "Write formatPrice(cents) that returns a dollar string like \"$12.50\". Example: formatPrice(1250) -> \"$12.50\"",
    "function formatPrice(cents) {\n  return \"\";\n}",
    "function t() {\n  if (formatPrice(1250) !== '$12.50') return { passed: false, message: 'formatPrice(1250) should be \"$12.50\".' };\n  if (formatPrice(500) !== '$5.00') return { passed: false, message: 'formatPrice(500) should be \"$5.00\".' };\n  if (formatPrice(0) !== '$0.00') return { passed: false, message: 'formatPrice(0) should be \"$0.00\".' };\n  return { passed: true, message: 'Money formatted like a real app! +25 XP' };\n}",
    "function formatPrice(cents) {\n  return '$' + (cents / 100).toFixed(2);\n}", 25);

  /* ---- Programming course (Python) ---- */
  item("speed", "py-speed-1", "Print in 30s", "Fast Python - return it quick.",
    "Write say_hi() that returns 'hi'.",
    "def say_hi():\n    # return 'hi'\n    pass",
    "function t() {\n  if (!PythonEval.hasFunction('say_hi')) return { passed: false, message: 'Define say_hi().' };\n  if (PythonEval.call('say_hi', []) !== 'hi') return { passed: false, message: 'say_hi() should return \"hi\".' };\n  return { passed: true, message: 'Fast Python! +12 XP' };\n}",
    "def say_hi():\n    return 'hi'", 12, { timed: 30, pathId: "programming" });

  item("fix", "py-fix-1", "Fix the Indent", "Python is picky about indentation.",
    "is_even(4) should return True. Fix the indentation.",
    "def is_even(n):\nif n % 2 == 0:\n    return True\nreturn False",
    "function t() {\n  if (PythonEval.call('is_even', [4]) !== true) return { passed: false, message: 'is_even(4) should be True.' };\n  if (PythonEval.call('is_even', [3]) !== false) return { passed: false, message: 'is_even(3) should be False.' };\n  return { passed: true, message: 'Indentation fixed! +15 XP' };\n}",
    "def is_even(n):\n    if n % 2 == 0:\n        return True\n    return False", 15, { pathId: "programming" });

  item("recall", "py-recall-1", "Remember Variables", "Recall variables from the Programmer path.",
    "Write half(n) that stores n / 2 in a variable called result and returns it.",
    "def half(n):\n    # result = n / 2\n    pass",
    "function t() {\n  if (PythonEval.call('half', [10]) !== 5) return { passed: false, message: 'half(10) should be 5.' };\n  if (PythonEval.call('half', [7]) !== 3.5) return { passed: false, message: 'half(7) should be 3.5.' };\n  return { passed: true, message: 'Variables remembered! +15 XP' };\n}",
    "def half(n):\n    result = n / 2\n    return result", 15, { pathId: "programming" });

  item("build", "py-build-1", "Build a Sum", "Add up a whole list from scratch.",
    "Write total(nums) that returns the sum of a list. Example: total([1, 2, 3]) -> 6",
    "def total(nums):\n    # return the sum\n    pass",
    "function t() {\n  if (PythonEval.call('total', [[1, 2, 3]]) !== 6) return { passed: false, message: 'total([1, 2, 3]) should be 6.' };\n  if (PythonEval.call('total', [[]]) !== 0) return { passed: false, message: 'An empty list sums to 0.' };\n  return { passed: true, message: 'Built from scratch! +20 XP' };\n}",
    "def total(nums):\n    return sum(nums)", 20, { pathId: "programming" });

  item("remix", "py-remix-1", "Rename to snake_case", "Python style uses snake_case names.",
    "getTotal(nums) works, but Python convention is snake_case. Rename it to get_total.",
    "def getTotal(nums):\n    return sum(nums)",
    "function t() {\n  if (!PythonEval.hasFunction('get_total')) return { passed: false, message: 'Define a function named get_total.' };\n  if (PythonEval.call('get_total', [[1, 2]]) !== 3) return { passed: false, message: 'get_total([1, 2]) should be 3.' };\n  return { passed: true, message: 'Clean Python style! +15 XP' };\n}",
    "def get_total(nums):\n    return sum(nums)", 15, { pathId: "programming" });

  item("precision", "py-precision-1", "Exact Reply", "Exact string, punctuation and all.",
    "Write greet(name) that returns 'Hello, ' + name + '!' exactly. Example: greet('Ada') -> 'Hello, Ada!'",
    "def greet(name):\n    # return 'Hello, ' + name + '!'\n    pass",
    "function t() {\n  if (PythonEval.call('greet', ['Ada']) !== 'Hello, Ada!') return { passed: false, message: 'greet(\"Ada\") should be \"Hello, Ada!\".' };\n  if (PythonEval.call('greet', ['Bob']) !== 'Hello, Bob!') return { passed: false, message: 'greet(\"Bob\") should be \"Hello, Bob!\".' };\n  return { passed: true, message: 'Exact output! +18 XP' };\n}",
    "def greet(name):\n    return 'Hello, ' + name + '!'", 18, { pathId: "programming" });

  item("reverse", "py-reverse-1", "Decode the Output", "You see the output, you write the function.",
    "first('SkillRun') returns 'S'. Write first(word) that returns the first character.",
    "def first(word):\n    # return the first char\n    pass",
    "function t() {\n  if (PythonEval.call('first', ['SkillRun']) !== 'S') return { passed: false, message: 'first(\"SkillRun\") should be \"S\".' };\n  if (PythonEval.call('first', ['abc']) !== 'a') return { passed: false, message: 'first(\"abc\") should be \"a\".' };\n  return { passed: true, message: 'Pattern decoded! +20 XP' };\n}",
    "def first(word):\n    return word[0]", 20, { pathId: "programming" });

  item("puzzle", "py-puzzle-1", "Even Sum", "Add only the even numbers.",
    "Write sum_even(nums) that sums only the even numbers. Example: sum_even([1, 2, 3, 4]) -> 6",
    "def sum_even(nums):\n    # sum only the evens\n    pass",
    "function t() {\n  if (PythonEval.call('sum_even', [[1, 2, 3, 4]]) !== 6) return { passed: false, message: 'sum_even([1, 2, 3, 4]) should be 6.' };\n  if (PythonEval.call('sum_even', [[1, 3]]) !== 0) return { passed: false, message: 'No even numbers means 0.' };\n  return { passed: true, message: 'Puzzle solved! +25 XP' };\n}",
    "def sum_even(nums):\n    total = 0\n    for n in nums:\n        if n % 2 == 0:\n            total += n\n    return total", 25, { pathId: "programming" });

  item("architecture", "py-arch-1", "Plan a Countdown", "Design a sequence before you write it.",
    "Write countdown(n) that returns a list from n down to 0. Example: countdown(2) -> [2, 1, 0]",
    "def countdown(n):\n    # build the list from n down to 0\n    pass",
    "function t() {\n  var out = PythonEval.call('countdown', [2]);\n  if (!Array.isArray(out) || out.join(',') !== '2,1,0') return { passed: false, message: 'countdown(2) should be [2, 1, 0].' };\n  var out2 = PythonEval.call('countdown', [0]);\n  if (!Array.isArray(out2) || out2.join(',') !== '0') return { passed: false, message: 'countdown(0) should be [0].' };\n  return { passed: true, message: 'Sequence planned! +25 XP' };\n}",
    "def countdown(n):\n    out = []\n    while n >= 0:\n        out.append(n)\n        n -= 1\n    return out", 25, { pathId: "programming" });

  item("realworld", "py-realworld-1", "Clean a Slug", "Real Python scripts format text.",
    "Write slugify(title) that lowercases and replaces spaces with dashes. Example: slugify('My Cool Page') -> 'my-cool-page'",
    "def slugify(title):\n    # lowercase and swap spaces for dashes\n    pass",
    "function t() {\n  if (PythonEval.call('slugify', ['My Cool Page']) !== 'my-cool-page') return { passed: false, message: 'slugify(\"My Cool Page\") should be \"my-cool-page\".' };\n  if (PythonEval.call('slugify', ['a b c']) !== 'a-b-c') return { passed: false, message: 'Every space becomes a dash.' };\n  return { passed: true, message: 'Real-world Python! +25 XP' };\n}",
    "def slugify(title):\n    return title.lower().replace(' ', '-')", 25, { pathId: "programming" });

  /* ---- Electronics course (Circuit) ---- */
  item("speed", "el-speed-1", "Light Up Fast", "Power an LED against the clock.",
    "Create the circuit, power d13 and attach a red LED to it, then step.",
    "setPin(C, 'd13', 5);\nled(C, 'd13', 'red');\nstep(C);",
    "function t() {\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  if (Circuit.voltage(C, 'd13') !== 5) return { passed: false, message: 'd13 should be at 5V.' };\n  if (!Circuit.isLit(C, 0)) return { passed: false, message: 'The LED on d13 should be lit.' };\n  return { passed: true, message: 'Fast circuit! +12 XP' };\n}",
    "setPin(C, 'd13', 5);\nled(C, 'd13', 'red');\nstep(C);", 12, { timed: 30, pathId: "electronics" });

  item("fix", "el-fix-1", "Fix the Wiring", "Power is on the wrong pin.",
    "The LED on d13 never lights. Power is going to d5 instead. Fix the wiring so d13 is powered and the LED lights.",
    "setPin(C, 'd5', 5);\nled(C, 'd13', 'red');\nstep(C);",
    "function t() {\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  if (Circuit.voltage(C, 'd13') !== 5) return { passed: false, message: 'd13 should be at 5V.' };\n  if (!Circuit.isLit(C, 0)) return { passed: false, message: 'The LED on d13 should be lit.' };\n  return { passed: true, message: 'Wiring fixed! +15 XP' };\n}",
    "setPin(C, 'd13', 5);\nled(C, 'd13', 'red');\nstep(C);", 15, { pathId: "electronics" });

  item("recall", "el-recall-1", "Remember Pins", "Recall pin control from the Circuit Runner.",
    "Set pin d9 to 5V and step the circuit.",
    "// set d9 to 5V\nstep(C);",
    "function t() {\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  if (Circuit.voltage(C, 'd9') !== 5) return { passed: false, message: 'd9 should be at 5V.' };\n  return { passed: true, message: 'Pins remembered! +15 XP' };\n}",
    "setPin(C, 'd9', 5);\nstep(C);", 15, { pathId: "electronics" });

  item("build", "el-build-1", "Build a Dual Light", "Two LEDs, one build.",
    "Add a red LED on d10 and a green LED on d11, power both, and step so both light up.",
    "// red LED on d10, green LED on d11, power both\nstep(C);",
    "function t() {\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  if (C.leds.length < 2) return { passed: false, message: 'Add two LEDs.' };\n  if (!Circuit.isLit(C, 0)) return { passed: false, message: 'The red LED on d10 should be lit.' };\n  if (!Circuit.isLit(C, 1)) return { passed: false, message: 'The green LED on d11 should be lit.' };\n  return { passed: true, message: 'Both LEDs glowing! +20 XP' };\n}",
    "led(C, 'd10', 'red');\nled(C, 'd11', 'green');\nsetPin(C, 'd10', 5);\nsetPin(C, 'd11', 5);\nstep(C);", 20, { pathId: "electronics" });

  item("precision", "el-precision-1", "Exact Power", "The right voltage and a safe resistor.",
    "Light the LED on d8 with exactly 5V and a 220-ohm resistor (safe limit is 330 ohms).",
    "led(C, 'd8', 'green');\nstep(C);",
    "function t() {\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  if (Circuit.voltage(C, 'd8') !== 5) return { passed: false, message: 'd8 should be at 5V.' };\n  if (!C.resistors.length) return { passed: false, message: 'Add a resistor to protect the LED.' };\n  if (C.resistors[0].ohms > 330) return { passed: false, message: 'The resistor must be 330 ohms or less.' };\n  if (!Circuit.isLit(C, 0)) return { passed: false, message: 'The LED should be lit.' };\n  return { passed: true, message: 'Precise power delivery! +18 XP' };\n}",
    "led(C, 'd8', 'green');\nresistor(C, 'd8', 220);\nsetPin(C, 'd8', 5);\nstep(C);", 18, { pathId: "electronics" });

  item("reverse", "el-reverse-1", "Recreate the Circuit", "A working circuit lights the LED on d7.",
    "The LED on d7 lights in the working version. Recreate it: add the LED, power d7 and step.",
    "// add the LED on d7, then power it\nled(C, 'd7', 'red');\nstep(C);",
    "function t() {\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  if (!C.leds.length) return { passed: false, message: 'Add an LED on d7.' };\n  if (Circuit.voltage(C, 'd7') !== 5) return { passed: false, message: 'd7 should be at 5V.' };\n  if (!Circuit.isLit(C, 0)) return { passed: false, message: 'The LED on d7 should be lit.' };\n  return { passed: true, message: 'Circuit recreated! +20 XP' };\n}",
    "led(C, 'd7', 'red');\nsetPin(C, 'd7', 5);\nstep(C);", 20, { pathId: "electronics" });

  item("puzzle", "el-puzzle-1", "Two LEDs", "One on, one off. Get it right.",
    "Light the green LED on d2 but keep the red LED on d3 off.",
    "led(C, 'd2', 'green');\nled(C, 'd3', 'red');\nstep(C);",
    "function t() {\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  if (!Circuit.isLit(C, 0)) return { passed: false, message: 'The green LED on d2 should be lit.' };\n  if (Circuit.isLit(C, 1)) return { passed: false, message: 'The red LED on d3 should stay off.' };\n  return { passed: true, message: 'Puzzle solved! +25 XP' };\n}",
    "led(C, 'd2', 'green');\nled(C, 'd3', 'red');\nsetPin(C, 'd2', 5);\nstep(C);", 25, { pathId: "electronics" });

  item("architecture", "el-arch-1", "Design a Switch", "A button that controls the light.",
    "Design a switch: add a button on d4 and an LED on d4. Press the button and step so the LED lights.",
    "// button on d4, LED on d4\nstep(C);",
    "function t() {\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  if (!C.buttons.length) return { passed: false, message: 'Add a button.' };\n  if (!C.leds.length) return { passed: false, message: 'Add an LED.' };\n  Circuit.press(C, 0, true);\n  Circuit.step(C);\n  if (!Circuit.isLit(C, 0)) return { passed: false, message: 'Pressing the button should light the LED.' };\n  return { passed: true, message: 'Switch designed! +25 XP' };\n}",
    "button(C, 'd4');\nled(C, 'd4', 'green');\npress(C, 0, true);\nstep(C);", 25, { pathId: "electronics" });

  item("realworld", "el-realworld-1", "Night Light", "Simulate a light sensor with a button.",
    "A night light: the LED on d3 should light when the light sensor (a button on d3) is pressed. Build it and step.",
    "led(C, 'd3', 'yellow');\nstep(C);",
    "function t() {\n  var C = window.__C;\n  if (!C) return { passed: false, message: 'No circuit was built.' };\n  Circuit.press(C, 0, true);\n  Circuit.step(C);\n  if (!Circuit.isLit(C, 0)) return { passed: false, message: 'Pressing the sensor should light the LED on d3.' };\n  return { passed: true, message: 'Night light works! +25 XP' };\n}",
    "led(C, 'd3', 'yellow');\nbutton(C, 'd3');\npress(C, 0, true);\nstep(C);", 25, { pathId: "electronics" });

  /* mystery - prompt hidden */
  item("mystery", "mystery-1", "Mystery Run", "The task is hidden. Figure it out from the test.",
    "Read the Check button and discover what to build. The tests tell you everything.",
    "function mystery(n) {\n  return 0;\n}",
    "function t() {\n  if (mystery(2) !== 4) return { passed: false, message: 'mystery(2) should be 4.' };\n  if (mystery(5) !== 10) return { passed: false, message: 'mystery(5) should be 10.' };\n  if (mystery(-1) !== -2) return { passed: false, message: 'mystery(-1) should be -2.' };\n  return { passed: true, message: 'Mystery solved! +30 XP' };\n}",
    "function mystery(n) {\n  return n * 2;\n}", 30, { mystery: true });
})();

/* ---------------- Daily / weekly / mystery picks ---------------- */

function allPracticeItems() {
  var out = [];
  for (var key in PRACTICE) {
    for (var i = 0; i < PRACTICE[key].length; i++) { out.push(PRACTICE[key][i]); }
  }
  return out;
}

function dayNumber() {
  var d = new Date();
  return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
}

function weekNumber() {
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 1);
  var days = Math.floor((now - start) / 86400000);
  return Math.floor(days / 7);
}

function dailyPracticeItem() {
  var items = allPracticeItems();
  return items[dayNumber() % items.length];
}

function weeklyPracticeItem() {
  var items = allPracticeItems();
  return items[weekNumber() % items.length];
}

/* ---------------- Achievements ---------------- */

/* Groups: Getting Started / Development / Tools / Challenges /
   Streak / Mastery. Achievements span all three courses. */

var ACHIEVEMENTS = [
  /* Getting Started */
  { id: "welcome",        title: "Welcome to SkillRun",    group: "Getting Started", rarity: "common",   desc: "Finish onboarding and start your journey." },
  { id: "first-run",      title: "First Run",              group: "Getting Started", rarity: "common",   desc: "Complete your first challenge." },
  { id: "first-build",    title: "First Build",            group: "Getting Started", rarity: "common",   desc: "Complete your first Build Challenge." },
  { id: "first-project",  title: "First Project",          group: "Getting Started", rarity: "rare",     desc: "Complete your first project." },
  { id: "first-mastery",  title: "First Mastery",          group: "Getting Started", rarity: "rare",     desc: "Reach 100% mastery on one skill." },

  /* Development (across all three courses) */
  { id: "html-explorer",  title: "HTML Explorer",          group: "Development", rarity: "common",       desc: "Complete every HTML mission." },
  { id: "css-crafter",    title: "CSS Crafter",            group: "Development", rarity: "common",       desc: "Complete every CSS mission." },
  { id: "js-runner",      title: "JavaScript Runner",      group: "Development", rarity: "common",       desc: "Complete every JavaScript mission." },
  { id: "vercel-deployer",title: "Vercel Deployer",        group: "Development", rarity: "rare",         desc: "Complete the Vercel deploy mission." },
  { id: "py-starter",     title: "Python Starter",         group: "Development", rarity: "common",       desc: "Complete your first Python mission." },
  { id: "py-master",      title: "Python Master",          group: "Development", rarity: "epic",         desc: "Complete every Programmer series mission." },
  { id: "circuit-starter",title: "Circuit Starter",        group: "Development", rarity: "common",       desc: "Complete your first Electronics mission." },
  { id: "robot-builder",  title: "Robot Builder",          group: "Development", rarity: "epic",         desc: "Beat the Robot Builder boss." },

  /* Tools */
  { id: "git-init",       title: "Version Control",        group: "Tools", rarity: "common",             desc: "Complete the git-init mission." },
  { id: "github-push",    title: "GitHub Ship",            group: "Tools", rarity: "common",             desc: "Complete the github-push mission." },
  { id: "push-live",      title: "Ship It",                group: "Tools", rarity: "rare",               desc: "Complete the Vercel deploy mission." },
  { id: "search-console", title: "Found on Google",        group: "Tools", rarity: "rare",               desc: "Complete the Search Console mission." },
  { id: "analytics",      title: "Data Driven",            group: "Tools", rarity: "rare",               desc: "Complete the Analytics mission." },
  { id: "lighthouse",     title: "Lighthouse Keeper",      group: "Tools", rarity: "rare",               desc: "Complete the Lighthouse mission." },

  /* Challenges */
  { id: "clean-run",      title: "No-Hint Run",            group: "Challenges", rarity: "common",        desc: "Finish a mission with no hints and no solution." },
  { id: "clean-5",        title: "No-Hint Master",         group: "Challenges", rarity: "rare",          desc: "Finish 5 missions with no hints and no solution." },
  { id: "perfect-run",    title: "Perfect Run",            group: "Challenges", rarity: "epic",          desc: "Finish 10 missions with no hints and no solution." },
  { id: "debugger",       title: "Debugger",               group: "Challenges", rarity: "common",        desc: "Complete a Debug practice." },
  { id: "fix-5",          title: "Bug Squasher",           group: "Challenges", rarity: "rare",          desc: "Complete 5 Debug practices." },
  { id: "speed-5",        title: "Speed Demon",            group: "Challenges", rarity: "rare",          desc: "Complete 5 Speed Runs." },
  { id: "build-5",        title: "Master Builder",         group: "Challenges", rarity: "rare",          desc: "Complete 5 Build practices." },
  { id: "bosses",         title: "Boss Slayer",            group: "Challenges", rarity: "epic",          desc: "Beat a boss mission." },
  { id: "mystery-solved", title: "Detective",              group: "Challenges", rarity: "rare",          desc: "Solve a Mystery Run." },
  { id: "daily-3",        title: "Daily Runner",           group: "Challenges", rarity: "rare",          desc: "Finish 3 Daily Runs." },

  /* Streak */
  { id: "streak-7",       title: "Week Warrior",           group: "Streak", rarity: "common",            desc: "7 day streak." },
  { id: "streak-30",      title: "Unstoppable",            group: "Streak", rarity: "epic",              desc: "30 day streak." },
  { id: "streak-100",     title: "Centurion",              group: "Streak", rarity: "legendary",         desc: "100 day streak." },

  /* Mastery */
  { id: "challenges-25",  title: "Challenge Hound",        group: "Mastery", rarity: "common",           desc: "Complete 25 challenge parts." },
  { id: "challenges-100", title: "Century of Challenges",  group: "Mastery", rarity: "rare",             desc: "Complete 100 challenge parts." },
  { id: "challenges-500", title: "Challenge Legend",       group: "Mastery", rarity: "legendary",        desc: "Complete 500 challenge parts." },
  { id: "series-complete",title: "Series Finisher",        group: "Mastery", rarity: "epic",             desc: "Complete an entire series." },
  { id: "course-master",  title: "Course Master",          group: "Mastery", rarity: "legendary",        desc: "Reach 100% on an entire course." },
  { id: "skills-10",      title: "Skill Collector",        group: "Mastery", rarity: "common",           desc: "Unlock 10 skills." },
  { id: "skills-20",      title: "Skill Hoarder",          group: "Mastery", rarity: "rare",             desc: "Unlock 20 skills." },
  { id: "mastery-50",     title: "Half Master",            group: "Mastery", rarity: "rare",             desc: "Reach 50% overall mastery." }
];

var ACHIEVEMENT_GROUPS = ["Getting Started", "Development", "Tools", "Challenges", "Streak", "Mastery"];

function countChallengesDone(p) {
  var n = 0;
  for (var k in p.doneChallenges) { n += (p.doneChallenges[k] || []).length; }
  n += (p.doneBuilds || []).length;
  return n;
}

function skillAllDone(p, skillName) {
  var total = 0, done = 0;
  for (var i = 0; i < MISSIONS.length; i++) {
    if (MISSIONS[i].skill !== skillName) { continue; }
    total++;
    if (p.doneMissions.indexOf(MISSIONS[i].id) !== -1) { done++; }
  }
  return total > 0 && done === total;
}

function seriesAllDone(p, seriesId) {
  var ids = seriesMissions(seriesId);
  if (!ids.length) { return false; }
  for (var i = 0; i < ids.length; i++) { if (p.doneMissions.indexOf(ids[i]) === -1) { return false; } }
  return true;
}

function anySeriesDone(p) {
  for (var i = 0; i < SERIES.length; i++) {
    if (seriesAllDone(p, SERIES[i].id)) { return true; }
  }
  return false;
}

function anyCourseComplete(p) {
  for (var i = 0; i < PATHS.length; i++) {
    if (courseProgress(p, PATHS[i].id).pct === 100) { return true; }
  }
  return false;
}

var ACHIEVEMENT_CHECKS = {
  "welcome": function (p) { return !!p.onboarded; },
  "first-run": function (p) {
    for (var k in p.doneChallenges) { if (p.doneChallenges[k] && p.doneChallenges[k].length) { return true; } }
    return false;
  },
  "first-build": function (p) { return (p.doneBuilds && p.doneBuilds.length > 0); },
  "first-project": function (p) { return (p.doneProjects && p.doneProjects.length > 0); },
  "first-mastery": function (p) {
    for (var i = 0; i < SKILL_ORDER.length; i++) { if (masteryOf(p, SKILL_ORDER[i]) === 100) { return true; } }
    for (var j = 0; j < MISSIONS.length; j++) { if (skillAllDone(p, MISSIONS[j].skill)) { return true; } }
    return false;
  },

  "html-explorer": function (p) { return skillAllDone(p, "HTML"); },
  "css-crafter": function (p) { return skillAllDone(p, "CSS"); },
  "js-runner": function (p) { return skillAllDone(p, "JavaScript"); },
  "vercel-deployer": function (p) { return p.doneMissions.indexOf("vercel-deploy") !== -1; },
  "py-starter": function (p) {
    var ids = seriesMissions("programmer");
    for (var i = 0; i < ids.length; i++) { if (p.doneMissions.indexOf(ids[i]) !== -1) { return true; } }
    return false;
  },
  "py-master": function (p) { return seriesAllDone(p, "programmer"); },
  "circuit-starter": function (p) {
    var ids = seriesMissions("circuit-runner");
    for (var i = 0; i < ids.length; i++) { if (p.doneMissions.indexOf(ids[i]) !== -1) { return true; } }
    return false;
  },
  "robot-builder": function (p) { return p.doneMissions.indexOf("robot-boss") !== -1; },

  "git-init": function (p) { return p.doneMissions.indexOf("git-init") !== -1; },
  "github-push": function (p) { return p.doneMissions.indexOf("github-push") !== -1; },
  "push-live": function (p) { return p.doneMissions.indexOf("vercel-deploy") !== -1; },
  "search-console": function (p) { return p.doneMissions.indexOf("search-console") !== -1; },
  "analytics": function (p) { return p.doneMissions.indexOf("analytics") !== -1; },
  "lighthouse": function (p) { return p.doneMissions.indexOf("lighthouse") !== -1; },

  "clean-run": function (p) { return !!(p.cleanMissions && p.cleanMissions.length); },
  "clean-5": function (p) { return !!(p.cleanMissions && p.cleanMissions.length >= 5); },
  "perfect-run": function (p) { return !!(p.cleanMissions && p.cleanMissions.length >= 10); },
  "debugger": function (p) {
    for (var i = 0; i < p.donePractice.length; i++) {
      var it = findPracticeById(p.donePractice[i]);
      if (it && it.kind === "fix") { return true; }
    }
    return false;
  },
  "fix-5": function (p) { return countPracticeKind(p, "fix") >= 5; },
  "speed-5": function (p) { return countPracticeKind(p, "speed") >= 5; },
  "build-5": function (p) { return countPracticeKind(p, "build") >= 5; },
  "bosses": function (p) { return p.doneMissions.indexOf("final-run") !== -1 || p.doneMissions.indexOf("ship-it-boss") !== -1 || p.doneMissions.indexOf("python-boss") !== -1 || p.doneMissions.indexOf("circuit-boss") !== -1 || p.doneMissions.indexOf("robot-boss") !== -1; },
  "mystery-solved": function (p) { return !!(p.mysteryDone && p.mysteryDone >= 1); },
  "daily-3": function (p) { return !!(p.dailyDone && p.dailyDone >= 3); },

  "streak-7": function (p) { return p.streak.count >= 7; },
  "streak-30": function (p) { return p.streak.count >= 30; },
  "streak-100": function (p) { return p.streak.count >= 100; },

  "challenges-25": function (p) { return countChallengesDone(p) >= 25; },
  "challenges-100": function (p) { return countChallengesDone(p) >= 100; },
  "challenges-500": function (p) { return countChallengesDone(p) >= 500; },
  "series-complete": function (p) { return anySeriesDone(p); },
  "course-master": function (p) { return anyCourseComplete(p); },
  "skills-10": function (p) { return p.skills.length >= 10; },
  "skills-20": function (p) { return p.skills.length >= 20; },
  "mastery-50": function (p) { return overallMastery(p) >= 50; }
};

function findPracticeById(id) {
  var items = allPracticeItems();
  for (var i = 0; i < items.length; i++) { if (items[i].id === id) { return items[i]; } }
  return null;
}

function countPracticeKind(p, kind) {
  var n = 0;
  for (var i = 0; i < p.donePractice.length; i++) {
    var it = findPracticeById(p.donePractice[i]);
    if (it && it.kind === kind) { n++; }
  }
  return n;
}

function evalAchievements(p) {
  var newly = [];
  for (var i = 0; i < ACHIEVEMENTS.length; i++) {
    var ach = ACHIEVEMENTS[i];
    if (p.achievements.indexOf(ach.id) !== -1) { continue; }
    var check = ACHIEVEMENT_CHECKS[ach.id];
    if (check && check(p)) { newly.push(ach.id); }
  }
  return newly;
}