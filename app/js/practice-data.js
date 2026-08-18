/* ============================================================
   SkillRun - Practice categories, items & achievements (V2)
   Extends the global PRACTICE object to 10 categories and
   replaces ACHIEVEMENTS with a full trophy set + checks.
   ============================================================ */

var PRACTICE_CATS = [
  { key: "speed",       title: "Speed Run",          emoji: "⚡", desc: "Fast, tiny challenges against the clock.", accent: "yellow" },
  { key: "fix",         title: "Debug",              emoji: "🐞", desc: "Broken code, your job to repair.",         accent: "red" },
  { key: "recall",      title: "Recall",             emoji: "🧠", desc: "Revisit skills from earlier missions.",     accent: "purple" },
  { key: "build",       title: "Build",              emoji: "🔨", desc: "Build something from a blank slate.",       accent: "green" },
  { key: "remix",       title: "Remix",              emoji: "🔄", desc: "Take working code and change it.",          accent: "cyan" },
  { key: "precision",   title: "Precision",          emoji: "🎯", desc: "Exact outputs, edge cases and all.",        accent: "pink" },
  { key: "reverse",     title: "Reverse Engineer",   emoji: "🔍", desc: "Figure out what code does and rebuild it.", accent: "orange" },
  { key: "puzzle",      title: "Puzzle",             emoji: "🧩", desc: "Tricky logic in small packages.",           accent: "yellow" },
  { key: "architecture",title: "Architecture",       emoji: "🏗️", desc: "Design the shape of a program.",           accent: "purple" },
  { key: "realworld",   title: "Real World",         emoji: "🌎", desc: "Build things that exist in the wild.",      accent: "green" }
];

/* new practice items across the 10 categories */
(function () {
  function item(cat, id, title, tagline, prompt, starter, test, solution, xp, extra) {
    var it = { id: id, kind: cat, title: title, tagline: tagline, type: "js", prompt: prompt, starter: starter, test: test, solution: solution, xp: xp };
    if (extra) { for (var k in extra) { it[k] = extra[k]; } }
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

var ACHIEVEMENTS = [
  { id: "first-run",   title: "First Run",        emoji: "🏁", group: "First Steps",   desc: "Complete your first challenge." },
  { id: "builder",     title: "Builder",          emoji: "🔨", group: "First Steps",   desc: "Complete your first Build Challenge." },
  { id: "debugger",    title: "Debugger",         emoji: "🐞", group: "First Steps",   desc: "Complete a Fix the Code practice." },
  { id: "project-1",   title: "Project Kicker",   emoji: "🛠️", group: "First Steps",   desc: "Complete your first project." },
  { id: "first-mastery",title: "Mastered It",     emoji: "🎓", group: "First Steps",   desc: "Reach 100% mastery on one skill." },

  { id: "clean-run",   title: "Clean Run",        emoji: "💎", group: "Skill & Mastery", desc: "Finish a mission with no hints and no solution." },
  { id: "clean-5",     title: "Pure Skill",       emoji: "💠", group: "Skill & Mastery", desc: "Finish 5 missions with no hints and no solution." },
  { id: "skills-5",    title: "Skill Collector",  emoji: "🧰", group: "Skill & Mastery", desc: "Unlock 5 skills." },
  { id: "skills-10",   title: "Skill Hoarder",    emoji: "🧲", group: "Skill & Mastery", desc: "Unlock 10 skills." },
  { id: "skills-20",   title: "Skill Legend",     emoji: "🌟", group: "Skill & Mastery", desc: "Unlock 20 skills." },
  { id: "mastery-50",  title: "Half Master",      emoji: "🏅", group: "Skill & Mastery", desc: "Reach 50% overall mastery." },
  { id: "mastery-100", title: "Grand Master",     emoji: "👑", group: "Skill & Mastery", desc: "Reach 100% overall mastery." },

  { id: "web-runner",  title: "Web Runner",       emoji: "🚀", group: "Practical Developer", desc: "Complete all 10 Web Runner missions." },
  { id: "git-init",    title: "Version Control",  emoji: "🗂️", group: "Practical Developer", desc: "Complete the git-init mission." },
  { id: "push-live",   title: "Ship It",          emoji: "📦", group: "Practical Developer", desc: "Deploy with Vercel (complete the deploy mission)." },
  { id: "seo-ready",   title: "Found on Google",  emoji: "🔎", group: "Practical Developer", desc: "Complete the SEO mission." },
  { id: "lighthouse",  title: "Lighthouse Keeper",emoji: "💡", group: "Practical Developer", desc: "Complete the Lighthouse mission." },
  { id: "own-domain",  title: "Home Sweet Domain",emoji: "🏠", group: "Practical Developer", desc: "Complete the custom domain mission." },
  { id: "internet-master", title: "Internet Master", emoji: "🌍", group: "Practical Developer", desc: "Beat the From Code to Internet boss." },

  { id: "streak-3",    title: "On a Roll",        emoji: "🔥", group: "Speed & Streak", desc: "3 day streak." },
  { id: "streak-7",    title: "Week Warrior",     emoji: "⚡", group: "Speed & Streak", desc: "7 day streak." },
  { id: "streak-30",   title: "Unstoppable",      emoji: "♾️", group: "Speed & Streak", desc: "30 day streak." },
  { id: "speed-5",     title: "Speed Demon",      emoji: "⏱️", group: "Speed & Streak", desc: "Complete 5 Speed Runs." },
  { id: "fix-5",       title: "Bug Squasher",     emoji: "🪲", group: "Speed & Streak", desc: "Complete 5 Debug practices." },
  { id: "build-5",     title: "Master Builder",   emoji: "🏗️", group: "Speed & Streak", desc: "Complete 5 Build practices." },
  { id: "daily-3",     title: "Daily Runner",     emoji: "📅", group: "Speed & Streak", desc: "Finish 3 Daily Runs." },
  { id: "mystery-solved", title: "Detective",     emoji: "🕵️", group: "Speed & Streak", desc: "Solve a Mystery Run." },

  { id: "py-first",    title: "Hello, Python",    emoji: "🐍", group: "Programming",   desc: "Complete your first Python mission." },
  { id: "py-master",   title: "Python Master",    emoji: "🐉", group: "Programming",   desc: "Complete all Programmer series missions." },

  { id: "circuit-first", title: "Circuit Starter",emoji: "⚡", group: "Electronics",    desc: "Complete your first Electronics mission." },
  { id: "robot-builder", title: "Robot Builder",  emoji: "🤖", group: "Electronics",    desc: "Beat the Robot Builder boss." }
];

var ACHIEVEMENT_CHECKS = {
  "first-run": function (p) {
    for (var k in p.doneChallenges) { if (p.doneChallenges[k] && p.doneChallenges[k].length) { return true; } }
    return false;
  },
  "builder": function (p) { return p.doneBuilds.length > 0; },
  "debugger": function (p) {
    for (var i = 0; i < p.donePractice.length; i++) {
      var it = findPracticeById(p.donePractice[i]);
      if (it && it.kind === "fix") { return true; }
    }
    return false;
  },
  "project-1": function (p) { return p.doneProjects.length > 0; },
  "first-mastery": function (p) {
    for (var i = 0; i < SKILL_ORDER.length; i++) { if (masteryOf(p, SKILL_ORDER[i]) === 100) { return true; } }
    return false;
  },

  "clean-run": function (p) { return !!(p.cleanMissions && p.cleanMissions.length); },
  "clean-5": function (p) { return !!(p.cleanMissions && p.cleanMissions.length >= 5); },
  "skills-5": function (p) { return p.skills.length >= 5; },
  "skills-10": function (p) { return p.skills.length >= 10; },
  "skills-20": function (p) { return p.skills.length >= 20; },
  "mastery-50": function (p) { return overallMastery(p) >= 50; },
  "mastery-100": function (p) { return overallMastery(p) >= 100; },

  "web-runner": function (p) {
    var ids = seriesMissions("web-runner");
    for (var i = 0; i < ids.length; i++) { if (p.doneMissions.indexOf(ids[i]) === -1) { return false; } }
    return true;
  },
  "git-init": function (p) { return p.doneMissions.indexOf("git-init") !== -1; },
  "push-live": function (p) { return p.doneMissions.indexOf("vercel-deploy") !== -1; },
  "seo-ready": function (p) { return p.doneMissions.indexOf("seo-basics") !== -1; },
  "lighthouse": function (p) { return p.doneMissions.indexOf("lighthouse") !== -1; },
  "own-domain": function (p) { return p.doneMissions.indexOf("domain-dns") !== -1; },
  "internet-master": function (p) { return p.doneMissions.indexOf("ship-it-boss") !== -1; },

  "streak-3": function (p) { return p.streak.count >= 3; },
  "streak-7": function (p) { return p.streak.count >= 7; },
  "streak-30": function (p) { return p.streak.count >= 30; },
  "speed-5": function (p) { return countPracticeKind(p, "speed") >= 5; },
  "fix-5": function (p) { return countPracticeKind(p, "fix") >= 5; },
  "build-5": function (p) { return countPracticeKind(p, "build") >= 5; },
  "daily-3": function (p) { return !!(p.dailyDone && p.dailyDone >= 3); },
  "mystery-solved": function (p) { return !!(p.mysteryDone && p.mysteryDone >= 1); },

  "py-first": function (p) {
    var ids = seriesMissions("programmer");
    for (var i = 0; i < ids.length; i++) { if (p.doneMissions.indexOf(ids[i]) !== -1) { return true; } }
    return false;
  },
  "py-master": function (p) {
    var ids = seriesMissions("programmer");
    for (var i = 0; i < ids.length; i++) { if (p.doneMissions.indexOf(ids[i]) === -1) { return false; } }
    return true;
  },

  "circuit-first": function (p) {
    var ids = seriesMissions("circuit-runner");
    for (var i = 0; i < ids.length; i++) { if (p.doneMissions.indexOf(ids[i]) !== -1) { return true; } }
    return false;
  },
  "robot-builder": function (p) { return p.doneMissions.indexOf("robot-boss") !== -1; }
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