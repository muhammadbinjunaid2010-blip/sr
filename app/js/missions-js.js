/* ============================================================
   SkillRun - JavaScript mission data (missions 5-10)
   JS missions are evaluated by running the learner's function
   through a test harness instead of inspecting the DOM.
   ============================================================ */

MISSIONS.push(
  {
    id: "make-it-interactive",
    num: 5,
    title: "Make It Interactive",
    tagline: "JavaScript: variables, conditions and functions.",
    skill: "JavaScript",
    xp: 150,
    type: "js",
    icon: '<path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 5l-2 14"/>',
    briefing: {
      objective: "Write your first JavaScript that reacts and decides.",
      body: "HTML and CSS decide how a page looks. JavaScript decides what it DOES. It is the brain of the page. In this mission you will write variables to store data, conditions to make decisions, and functions to package reusable code."
    },
    challenges: [
      {
        id: "ch1",
        title: "Store data in a variable",
        instructions: "Complete the function so it returns a greeting that uses the name variable.",
        learning: "A variable stores a value so you can reuse it. In modern JS: const name = 'Sara';. You can join text with the + operator or template literals using backticks: `Hello ${name}`.",
        example: "const name = 'Sara';\nreturn `Hello ${name}!`;",
        starter: "function greet(name) {\n  // build a message like: Hello Sara!\n  return \"\";\n}",
        test: "function testGreet() {\n  var out = greet('Sara');\n  if (typeof out !== 'string' || out.indexOf('Sara') === -1) return { passed: false, message: 'The function should return a string containing the name.' };\n  if (out.toLowerCase().indexOf('hello') === -1) return { passed: false, message: 'Start your greeting with \"Hello\".' };\n  return { passed: true, message: 'Your greeting function works!' };\n}",
        hints: [
          "Use a template literal: `Hello ${name}!`",
          "Or string concatenation: 'Hello ' + name + '!'",
          "Replace the return \"\"; with your greeting."
        ],
        solution: "function greet(name) {\n  return `Hello ${name}!`;\n}"
      },
      {
        id: "ch2",
        title: "Make a decision with if",
        instructions: "Complete canDrive so it returns \"yes\" if the age is 18 or more, otherwise \"no\".",
        learning: "An if statement runs code only when a condition is true. Use else for the other case. Comparison operators: >= (greater or equal), === (equal).",
        example: "if (age >= 18) {\n  return 'yes';\n} else {\n  return 'no';\n}",
        starter: "function canDrive(age) {\n  // return \"yes\" if age >= 18, else \"no\"\n  return \"\";\n}",
        test: "function testDrive() {\n  if (canDrive(20) !== 'yes') return { passed: false, message: 'canDrive(20) should return \"yes\".' };\n  if (canDrive(18) !== 'yes') return { passed: false, message: 'canDrive(18) should return \"yes\" (18 counts).' };\n  if (canDrive(15) !== 'no') return { passed: false, message: 'canDrive(15) should return \"no\".' };\n  return { passed: true, message: 'Your if/else logic is solid!' };\n}",
        hints: [
          "Compare with: if (age >= 18) { ... } else { ... }",
          "Return 'yes' and 'no' as strings.",
          "Remember: 18 or more counts as yes."
        ],
        solution: "function canDrive(age) {\n  if (age >= 18) {\n    return 'yes';\n  } else {\n    return 'no';\n  }\n}"
      },
      {
        id: "ch3",
        title: "Package code in a function",
        instructions: "Complete doubleIt so it returns any number multiplied by 2.",
        learning: "A function is reusable code. It takes input (parameters), does work, and hands back a result with return. Calling doubleIt(5) should give 10.",
        example: "function doubleIt(n) {\n  return n * 2;\n}",
        starter: "function doubleIt(n) {\n  // return n doubled\n  return 0;\n}",
        test: "function testDouble() {\n  if (doubleIt(5) !== 10) return { passed: false, message: 'doubleIt(5) should return 10.' };\n  if (doubleIt(0) !== 0) return { passed: false, message: 'doubleIt(0) should return 0.' };\n  if (doubleIt(-3) !== -6) return { passed: false, message: 'doubleIt(-3) should return -6.' };\n  return { passed: true, message: 'Your function doubles correctly!' };\n}",
        hints: [
          "Multiplication uses the * symbol.",
          "return n * 2;",
          "That's the whole function body you need."
        ],
        solution: "function doubleIt(n) {\n  return n * 2;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write a function maxOf that returns the larger of two numbers.\n\n\u2022 maxOf(3, 9) -> 9\n\u2022 maxOf(7, 2) -> 7\n\u2022 maxOf(5, 5) -> 5",
      starter: "function maxOf(a, b) {\n  // return the bigger number\n  return 0;\n}",
      test: "function testMax() {\n  if (maxOf(3, 9) !== 9) return { passed: false, message: 'maxOf(3, 9) should return 9.' };\n  if (maxOf(7, 2) !== 7) return { passed: false, message: 'maxOf(7, 2) should return 7.' };\n  if (maxOf(5, 5) !== 5) return { passed: false, message: 'maxOf(5, 5) should return 5.' };\n  if (maxOf(-1, -5) !== -1) return { passed: false, message: 'maxOf(-1, -5) should return -1.' };\n  return { passed: true, message: 'Your max function handles it all!' };\n}",
      hints: [
        "Use an if statement: if (a > b) return a;",
        "Otherwise return b.",
        "Equal values fall through to return b (which equals a anyway)."
      ],
      solution: "function maxOf(a, b) {\n  if (a > b) {\n    return a;\n  }\n  return b;\n}",
      unlock: "JavaScript Foundations"
    },
    unlock: "JavaScript Foundations"
  },

  {
    id: "build-a-game",
    num: 6,
    title: "Build a Game",
    tagline: "Logic, conditions and events.",
    skill: "JavaScript",
    xp: 170,
    type: "js",
    icon: '<path d="M12 2l2.4 4.9L20 8.2l-4 3.9.9 5.6-4.9-2.6-4.9 2.6.9-5.6-4-3.9 5.6-1.3z"/>',
    briefing: {
      objective: "Build game logic: randomness, comparisons and loops.",
      body: "Games are logic machines. They pick random numbers, compare values, repeat actions and react to the player. This mission teaches you those building blocks so you can make things like guessing games and quiz apps."
    },
    challenges: [
      {
        id: "ch1",
        title: "Roll a random number",
        instructions: "Complete rollDice to return a random integer from 1 to 6.",
        learning: "Math.random() gives a decimal between 0 and 1. Multiply by the range, then Math.floor() rounds down. Add 1 so the lowest value is 1.",
        example: "return Math.floor(Math.random() * 6) + 1;",
        starter: "function rollDice() {\n  // return a random integer 1..6\n  return 0;\n}",
        test: "function testDice() {\n  for (var i = 0; i < 100; i++) {\n    var r = rollDice();\n    if (typeof r !== 'number' || r < 1 || r > 6) return { passed: false, message: 'rollDice() should return a whole number between 1 and 6.' };\n  }\n  return { passed: true, message: 'Your dice rolls like a champ!' };\n}",
        hints: [
          "Math.random() returns something like 0.42.",
          "Math.floor(Math.random() * 6) gives 0..5.",
          "Add 1: Math.floor(Math.random() * 6) + 1"
        ],
        solution: "function rollDice() {\n  return Math.floor(Math.random() * 6) + 1;\n}"
      },
      {
        id: "ch2",
        title: "Check a guess",
        instructions: "Complete isCorrect so it returns true when the guess equals the secret number.",
        learning: "=== checks if two values are equal. Functions can return true or false (booleans).",
        example: "return guess === secret;",
        starter: "function isCorrect(guess, secret) {\n  // return true when guess equals secret\n  return false;\n}",
        test: "function testGuess() {\n  if (!isCorrect(7, 7)) return { passed: false, message: 'isCorrect(7, 7) should return true.' };\n  if (isCorrect(3, 7)) return { passed: false, message: 'isCorrect(3, 7) should return false.' };\n  if (isCorrect('7', 7)) return { passed: false, message: 'Use === so types must match too.' };\n  return { passed: true, message: 'Your comparison logic works!' };\n}",
      hints: [
        "Equality test uses three equals signs: ===.",
        "Just return guess === secret;",
        "No if statement needed here."
      ],
      solution: "function isCorrect(guess, secret) {\n  return guess === secret;\n}"
      },
      {
        id: "ch3",
        title: "Count up with a loop",
        instructions: "Complete countUp so it returns a string of numbers from 1 to n, joined by spaces. Example: countUp(4) -> \"1 2 3 4\".",
        learning: "A for loop repeats code. for (var i = 1; i <= n; i++) runs with i = 1, 2, 3... until i passes n. Build strings with += .",
        example: "var out = '';\nfor (var i = 1; i <= n; i++) {\n  out += i + ' ';\n}\nreturn out.trim();",
        starter: "function countUp(n) {\n  // return \"1 2 3 ... n\"\n  return \"\";\n}",
        test: "function testCount() {\n  if (countUp(1) !== '1') return { passed: false, message: 'countUp(1) should return \"1\".' };\n  if (countUp(4) !== '1 2 3 4') return { passed: false, message: 'countUp(4) should return \"1 2 3 4\".' };\n  if (countUp(0) !== '') return { passed: false, message: 'countUp(0) should return an empty string.' };\n  return { passed: true, message: 'Loops mastered!' };\n}",
      hints: [
        "Start an empty string: var out = '';",
        "Loop from 1 to n, adding each i plus a space.",
        "Trim the final space with .trim()."
      ],
      solution: "function countUp(n) {\n  var out = '';\n  for (var i = 1; i <= n; i++) {\n    out += i + ' ';\n  }\n  return out.trim();\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write a function sumUp that returns the total of 1 + 2 + 3 + ... + n.\n\n\u2022 sumUp(4) -> 10\n\u2022 sumUp(10) -> 55\n\u2022 sumUp(0) -> 0",
      starter: "function sumUp(n) {\n  // return the total from 1 to n\n  return 0;\n}",
      test: "function testSum() {\n  if (sumUp(4) !== 10) return { passed: false, message: 'sumUp(4) should return 10.' };\n  if (sumUp(10) !== 55) return { passed: false, message: 'sumUp(10) should return 55.' };\n  if (sumUp(1) !== 1) return { passed: false, message: 'sumUp(1) should return 1.' };\n  if (sumUp(0) !== 0) return { passed: false, message: 'sumUp(0) should return 0.' };\n  return { passed: true, message: 'You built a loop that adds up!' };\n}",
      hints: [
        "Start a total at 0.",
        "Loop from 1 to n adding each i.",
        "Return the total after the loop."
      ],
      solution: "function sumUp(n) {\n  var total = 0;\n  for (var i = 1; i <= n; i++) {\n    total += i;\n  }\n  return total;\n}",
      unlock: "JavaScript Logic"
    },
    unlock: "JavaScript Logic"
  },

  {
    id: "store-something",
    num: 7,
    title: "Store Something",
    tagline: "Save data in the browser with localStorage.",
    skill: "APIs",
    xp: 160,
    type: "js",
    icon: '<path d="M6 2h12l2 4v16H4V6z"/><path d="M4 6h16M9 11h6M9 16h6"/>',
    briefing: {
      objective: "Make data survive page reloads.",
      body: "Apps are useful when they remember things. localStorage lets a page save data on the visitor's device. This mission covers saving, reading and removing stored data."
    },
    challenges: [
      {
        id: "ch1",
        title: "Save and load",
        instructions: "Write two functions. saveName(name) stores it under key \"name\". loadName() returns the stored name.",
        learning: "localStorage.setItem(key, value) saves a string. localStorage.getItem(key) reads it back.",
        example: "function saveName(name) {\n  localStorage.setItem('name', name);\n}\nfunction loadName() {\n  return localStorage.getItem('name');\n}",
        starter: "function saveName(name) {\n  // store it under the key \"name\"\n}\nfunction loadName() {\n  // return the stored name\n  return null;\n}",
        test: "function testStore() {\n  saveName('Ali');\n  if (localStorage.getItem('name') !== 'Ali') return { passed: false, message: 'saveName should use localStorage.setItem with key \"name\".' };\n  if (loadName() !== 'Ali') return { passed: false, message: 'loadName should return localStorage.getItem(\"name\").' };\n  localStorage.removeItem('name');\n  return { passed: true, message: 'Your data persists now!' };\n}",
      hints: [
        "Save: localStorage.setItem('name', name)",
        "Load: localStorage.getItem('name')",
        "Both functions are one line each."
      ],
      solution: "function saveName(name) {\n  localStorage.setItem('name', name);\n}\nfunction loadName() {\n  return localStorage.getItem('name');\n}"
      },
      {
        id: "ch2",
        title: "Store more than strings",
        instructions: "Write saveList(list) that saves an array of strings using JSON.stringify, and loadList() that returns the array using JSON.parse.",
        learning: "localStorage only stores strings. To save an array or object, convert it with JSON.stringify(). Read it back with JSON.parse().",
        example: "function saveList(list) {\n  localStorage.setItem('list', JSON.stringify(list));\n}\nfunction loadList() {\n  var raw = localStorage.getItem('list');\n  return raw ? JSON.parse(raw) : [];\n}",
        starter: "function saveList(list) {\n  // use JSON.stringify\n}\nfunction loadList() {\n  // use JSON.parse\n  return [];\n}",
        test: "function testList() {\n  saveList(['a', 'b', 'c']);\n  var out = loadList();\n  if (!Array.isArray(out) || out.length !== 3) return { passed: false, message: 'loadList should return the array you saved.' };\n  if (out[0] !== 'a') return { passed: false, message: 'The array items should be preserved.' };\n  localStorage.removeItem('list');\n  return { passed: true, message: 'Arrays survive reloads now!' };\n}",
      hints: [
        "JSON.stringify(list) turns the array into text.",
        "JSON.parse(raw) turns it back.",
        "Guard against empty storage: raw ? JSON.parse(raw) : []"
      ],
      solution: "function saveList(list) {\n  localStorage.setItem('list', JSON.stringify(list));\n}\nfunction loadList() {\n  var raw = localStorage.getItem('list');\n  return raw ? JSON.parse(raw) : [];\n}"
      },
      {
        id: "ch3",
        title: "Add and remove",
        instructions: "Write addItem(list, item) that pushes item into the array and returns the new array (you may modify the input array).",
        learning: "Arrays have methods: push() adds to the end, splice() removes, indexOf() finds a position.",
        example: "function addItem(list, item) {\n  list.push(item);\n  return list;\n}",
        starter: "function addItem(list, item) {\n  // add item to the end and return the array\n  return list;\n}",
        test: "function testAdd() {\n  var arr = ['x'];\n  var out = addItem(arr, 'y');\n  if (out.length !== 2 || out[1] !== 'y') return { passed: false, message: 'addItem should add the item to the end.' };\n  if (out !== arr) return { passed: false, message: 'Return the same array (or one containing the item).' };\n  return { passed: true, message: 'Your array grows correctly!' };\n}",
      hints: [
        "Array.push(item) adds to the end.",
        "Return the array after pushing.",
        "You don't need a new array."
      ],
      solution: "function addItem(list, item) {\n  list.push(item);\n  return list;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write saveScore(name, score) that stores the player name and score under keys \"scoreName\" and \"scoreValue\". Return the saved score from loadScore().",
      starter: "function saveScore(name, score) {\n  // store name and score\n}\nfunction loadScore() {\n  // return the stored score number\n  return null;\n}",
      test: "function testScore() {\n  saveScore('Leena', 42);\n  if (localStorage.getItem('scoreName') !== 'Leena') return { passed: false, message: 'Store the name under key \"scoreName\".' };\n  if (loadScore() !== 42) return { passed: false, message: 'loadScore should return the score as a number (42).' };\n  localStorage.removeItem('scoreName');\n  localStorage.removeItem('scoreValue');\n  return { passed: true, message: 'High scores saved and loaded!' };\n}",
      hints: [
        "Store name: localStorage.setItem('scoreName', name)",
        "Store score: localStorage.setItem('scoreValue', score)",
        "When loading, convert to a number with Number(...) or +."
      ],
      solution: "function saveScore(name, score) {\n  localStorage.setItem('scoreName', name);\n  localStorage.setItem('scoreValue', score);\n}\nfunction loadScore() {\n  return Number(localStorage.getItem('scoreValue'));\n}",
      unlock: "Data & Storage"
    },
    unlock: "Data & Storage"
  },

  {
    id: "talk-to-the-internet",
    num: 8,
    title: "Talk to the Internet",
    tagline: "APIs and fetching real data.",
    skill: "APIs",
    xp: 180,
    type: "js",
    icon: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    briefing: {
      objective: "Fetch data from the internet.",
      body: "APIs are doors to data. A weather app, a news feed, a game leaderboard \u2014 they all fetch data from the internet using fetch(). This mission gets you calling real endpoints and working with the data they return."
    },
    challenges: [
      {
        id: "ch1",
        title: "Start a fetch",
        instructions: "Complete fetchMessage so it returns a fetch() call to the URL. (Just return the fetch promise.)",
        learning: "fetch(url) returns a Promise that eventually resolves with the response. You chain .then() to handle it.",
        example: "function fetchMessage(url) {\n  return fetch(url);\n}",
        starter: "function fetchMessage(url) {\n  // return fetch(url)\n  return null;\n}",
        test: "function testFetch() {\n  var called = false;\n  var orig = window.fetch;\n  window.fetch = function (u) { called = true; return Promise.resolve({ ok: true }); };\n  try {\n    fetchMessage('https://example.com');\n  } finally {\n    window.fetch = orig;\n  }\n  if (!called) return { passed: false, message: 'fetchMessage should call fetch with the URL.' };\n  return { passed: true, message: 'Your fetch is live!' };\n}",
      hints: [
        "fetch(url) is the built-in function.",
        "Return the result of fetch(url).",
        "One line: return fetch(url);"
      ],
      solution: "function fetchMessage(url) {\n  return fetch(url);\n}"
      },
      {
        id: "ch2",
        title: "Read a response",
        instructions: "Complete responseText so it returns a function that, given a response object, calls response.text() and returns it. You may define an inner function or arrow.",
        learning: "The response object from fetch has methods to read the body: response.text() for text, response.json() for parsed JSON. Both return promises.",
        example: "function responseText() {\n  return function (response) {\n    return response.text();\n  };\n}",
        starter: "function responseText() {\n  // return a function that calls response.text()\n  return null;\n}",
        test: "function testResp() {\n  var fn = responseText();\n  if (typeof fn !== 'function') return { passed: false, message: 'responseText should return a function.' };\n  var called = false;\n  var res = { text: function () { called = true; return Promise.resolve('hi'); } };\n  var out = fn(res);\n  if (!called) return { passed: false, message: 'The returned function should call response.text().' };\n  return { passed: true, message: 'You can read response bodies now!' };\n}",
      hints: [
        "Return an inner function that takes response.",
        "Inside it, call response.text().",
        "Example: return function (r) { return r.text(); };"
      ],
      solution: "function responseText() {\n  return function (response) {\n    return response.text();\n  };\n}"
      },
      {
        id: "ch3",
        title: "Extract JSON data",
        instructions: "Complete getCount so it calls data.count from a JSON object and returns it.",
        learning: "JSON is JavaScript data: { \"count\": 7 }. After parsing, access values with dot notation: data.count.",
        example: "function getCount(data) {\n  return data.count;\n}",
        starter: "function getCount(data) {\n  // return the value of data.count\n  return 0;\n}",
        test: "function testCount() {\n  if (getCount({ count: 7 }) !== 7) return { passed: false, message: 'getCount({count: 7}) should return 7.' };\n  if (getCount({ count: 0 }) !== 0) return { passed: false, message: 'getCount({count: 0}) should return 0.' };\n  if (getCount({ other: 1 }) !== undefined) return { passed: false, message: 'It should read data.count specifically.' };\n  return { passed: true, message: 'You can read JSON data!' };\n}",
      hints: [
        "Dot notation: data.count",
        "That is the whole function body.",
        "return data.count;"
      ],
      solution: "function getCount(data) {\n  return data.count;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write parseUsers(json) that takes a JSON array of users and returns an array of their names.\n\nExample: parseUsers([{name:\"Ali\"},{name:\"Sara\"}]) -> [\"Ali\",\"Sara\"]",
      starter: "function parseUsers(json) {\n  // map each user to their name\n  return [];\n}",
      test: "function testUsers() {\n  var out = parseUsers([{ name: 'Ali' }, { name: 'Sara' }]);\n  if (!Array.isArray(out) || out.length !== 2) return { passed: false, message: 'Should return an array of 2 names.' };\n  if (out[0] !== 'Ali' || out[1] !== 'Sara') return { passed: false, message: 'Names should match the input users.' };\n  if (parseUsers([]).length !== 0) return { passed: false, message: 'Empty input should give an empty array.' };\n  return { passed: true, message: 'You transformed real JSON data!' };\n}",
      hints: [
        "Array.map() builds a new array from each item.",
        "json.map(function (u) { return u.name; })",
        "That's the whole solution."
      ],
      solution: "function parseUsers(json) {\n  return json.map(function (u) { return u.name; });\n}",
      unlock: "APIs & Fetch"
    },
    unlock: "APIs & Fetch"
  },

  {
    id: "build-an-application",
    num: 9,
    title: "Build an Application",
    tagline: "Combine HTML, CSS and JavaScript.",
    skill: "Full Stack",
    xp: 200,
    type: "js",
    icon: '<rect x="2" y="2" width="20" height="14" rx="2"/><path d="M8 22h8M12 16v6"/>',
    briefing: {
      objective: "Bring it all together into a working app.",
      body: "A real app is HTML + CSS + JavaScript working together. HTML builds the skeleton, CSS dresses it, JavaScript brings it to life. This mission is a mini final project: you will build the logic layer of a simple app and watch the pieces click."
    },
    challenges: [
      {
        id: "ch1",
        title: "Model the data",
        instructions: "Complete makeTodo(text) so it returns an object like { text: text, done: false }.",
        learning: "An object groups related data. Write objects with { key: value }. Functions can return them.",
        example: "function makeTodo(text) {\n  return { text: text, done: false };\n}",
        starter: "function makeTodo(text) {\n  // return an object with the text and done: false\n  return null;\n}",
        test: "function testTodo() {\n  var t = makeTodo('learn');\n  if (!t || typeof t !== 'object') return { passed: false, message: 'Should return an object.' };\n  if (t.text !== 'learn') return { passed: false, message: 'The object should store text: the input text.' };\n  if (t.done !== false) return { passed: false, message: 'The object should have done: false.' };\n  return { passed: true, message: 'Your data model is solid!' };\n}",
      hints: [
        "An object literal: { text: text, done: false }",
        "Keys are the names, values hold the data.",
        "Return it directly."
      ],
      solution: "function makeTodo(text) {\n  return { text: text, done: false };\n}"
      },
      {
        id: "ch2",
        title: "Toggle a state",
        instructions: "Complete toggleDone(todo) so it flips todo.done between true and false and returns the todo.",
        learning: "Booleans can be flipped with the ! operator: done = !done turns true into false and false into true.",
        example: "function toggleDone(todo) {\n  todo.done = !todo.done;\n  return todo;\n}",
        starter: "function toggleDone(todo) {\n  // flip todo.done and return todo\n  return todo;\n}",
        test: "function testToggle() {\n  var t = { text: 'x', done: false };\n  var t1 = toggleDone(t);\n  if (t1.done !== true) return { passed: false, message: 'toggleDone should turn done from false to true.' };\n  toggleDone(t);\n  if (t.done !== false) return { passed: false, message: 'toggleDone should turn done back from true to false.' };\n  return { passed: true, message: 'State toggling works!' };\n}",
      hints: [
        "The ! operator flips a boolean.",
        "todo.done = !todo.done;",
        "Return todo afterwards."
      ],
      solution: "function toggleDone(todo) {\n  todo.done = !todo.done;\n  return todo;\n}"
      },
      {
        id: "ch3",
        title: "Filter the list",
        instructions: "Complete activeCount(list) so it returns how many todos have done === false.",
        learning: "list.filter(fn) keeps items where the function returns true. list.length counts them.",
        example: "return list.filter(function (t) { return t.done === false; }).length;",
        starter: "function activeCount(list) {\n  // count todos where done is false\n  return 0;\n}",
        test: "function testActive() {\n  if (activeCount([]) !== 0) return { passed: false, message: 'Empty list gives 0.' };\n  if (activeCount([{ done: false }, { done: true }, { done: false }]) !== 2) return { passed: false, message: 'Should count only the todos where done is false.' };\n  if (activeCount([{ done: true }]) !== 0) return { passed: false, message: 'All-done list gives 0.' };\n  return { passed: true, message: 'Filtering works!' };\n}",
      hints: [
        "filter keeps items matching your condition.",
        "Count with .length.",
        "Combine them on one line."
      ],
      solution: "function activeCount(list) {\n  return list.filter(function (t) { return t.done === false; }).length;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write completeProject(todos) that marks every todo done and returns how many were changed.\n\n\u2022 Input: an array of todo objects\n\u2022 Set each todo.done to true\n\u2022 Return the number of todos that were NOT done before",
      starter: "function completeProject(todos) {\n  // mark all done, return how many changed\n  return 0;\n}",
      test: "function testProject() {\n  var list = [{ done: false }, { done: false }, { done: true }];\n  var changed = completeProject(list);\n  if (changed !== 2) return { passed: false, message: 'Should return the number that were previously not done (2).' };\n  for (var i = 0; i < list.length; i++) {\n    if (list[i].done !== true) return { passed: false, message: 'Every todo should now be done: true.' };\n  }\n  if (completeProject([]) !== 0) return { passed: false, message: 'Empty input returns 0.' };\n  return { passed: true, message: 'You shipped a working application!' };\n}",
      hints: [
        "Loop over the list with for.",
        "Count how many were done === false before setting them true.",
        "After the loop, return the count."
      ],
      solution: "function completeProject(todos) {\n  var changed = 0;\n  for (var i = 0; i < todos.length; i++) {\n    if (todos[i].done === false) {\n      todos[i].done = true;\n      changed++;\n    }\n  }\n  return changed;\n}",
      unlock: "Full Stack"
    },
    unlock: "Full Stack"
  },

  {
    id: "final-run",
    num: 10,
    title: "Final Run",
    tagline: "Your biggest build yet \u2014 minimal help.",
    skill: "Full Stack",
    xp: 250,
    type: "js",
    icon: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',
    briefing: {
      objective: "Complete an entire app flow with almost no hints.",
      body: "This is your final mission. Every skill you learned is tested. The challenges describe what to build \u2014 the code is all yours. Trust the process: this is exactly how developers work in the real world."
    },
    challenges: [
      {
        id: "ch1",
        title: "Build the data layer",
        instructions: "Write loadTodos() that reads the JSON stored under key \"todos\" and returns it as an array. Return [] when nothing is stored.",
        learning: "Combine the storage skills from mission 7: read with getItem, decode with JSON.parse, and guard against empty storage.",
        example: "function loadTodos() {\n  var raw = localStorage.getItem('todos');\n  return raw ? JSON.parse(raw) : [];\n}",
        starter: "function loadTodos() {\n  // return stored todos or []\n  return null;\n}",
        test: "function testLoad() {\n  localStorage.setItem('todos', JSON.stringify([{ text: 'a' }]));\n  var out = loadTodos();\n  if (!Array.isArray(out) || out.length !== 1 || out[0].text !== 'a') return { passed: false, message: 'Should load the stored JSON array.' };\n  localStorage.removeItem('todos');\n  var empty = loadTodos();\n  if (!Array.isArray(empty) || empty.length !== 0) return { passed: false, message: 'With nothing stored it should return [].' };\n  return { passed: true, message: 'Data layer complete!' };\n}",
      hints: [
        "localStorage.getItem('todos') reads it.",
        "JSON.parse decodes it.",
        "Return [] when raw is null."
      ],
      solution: "function loadTodos() {\n  var raw = localStorage.getItem('todos');\n  return raw ? JSON.parse(raw) : [];\n}"
      },
      {
        id: "ch2",
        title: "Build the logic layer",
        instructions: "Write addTodo(todos, text) that pushes { text: text, done: false } and saves the whole array back under key \"todos\", then returns the array.",
        learning: "Combine mission 7 and 9: build the object, push it, then persist with setItem + JSON.stringify.",
        example: "function addTodo(todos, text) {\n  todos.push({ text: text, done: false });\n  localStorage.setItem('todos', JSON.stringify(todos));\n  return todos;\n}",
        starter: "function addTodo(todos, text) {\n  // add, save, and return the array\n  return todos;\n}",
        test: "function testAdd() {\n  var arr = [];\n  var out = addTodo(arr, 'ship it');\n  if (out.length !== 1 || out[0].text !== 'ship it' || out[0].done !== false) return { passed: false, message: 'addTodo should add an object with the text and done: false.' };\n  var stored = localStorage.getItem('todos');\n  if (!stored) return { passed: false, message: 'addTodo should persist the array with setItem.' };\n  var decoded = JSON.parse(stored);\n  if (decoded.length !== 1) return { passed: false, message: 'The stored JSON should contain the todo.' };\n  localStorage.removeItem('todos');\n  return { passed: true, message: 'Logic layer complete!' };\n}",
      hints: [
        "Build the object: { text: text, done: false }",
        "push it, then setItem with JSON.stringify(todos).",
        "Return todos."
      ],
      solution: "function addTodo(todos, text) {\n  todos.push({ text: text, done: false });\n  localStorage.setItem('todos', JSON.stringify(todos));\n  return todos;\n}"
      },
      {
        id: "ch3",
        title: "Build the UI logic",
        instructions: "Write renderTodos(todos) that returns an HTML string where each todo becomes an <li> with its text. Example: renderTodos([{text:\"a\"}]) -> a string containing \"<li>a</li>\".",
        learning: "UI logic turns data into HTML. Map each item to a string and join them. This is the exact pattern used to build interfaces.",
        example: "return todos.map(function (t) { return '<li>' + t.text + '</li>'; }).join('');",
        starter: "function renderTodos(todos) {\n  // return one <li> per todo\n  return \"\";\n}",
        test: "function testRender() {\n  var html = renderTodos([{ text: 'a' }, { text: 'b' }]);\n  if (html.indexOf('<li>a</li>') === -1 || html.indexOf('<li>b</li>') === -1) return { passed: false, message: 'Each todo should become an <li> with its text.' };\n  if (renderTodos([]) !== '') return { passed: false, message: 'Empty list returns an empty string.' };\n  return { passed: true, message: 'UI logic complete!' };\n}",
      hints: [
        "map each todo to '<li>' + t.text + '</li>'.",
        "Join the results with ''.",
        "That's it."
      ],
      solution: "function renderTodos(todos) {\n  return todos.map(function (t) { return '<li>' + t.text + '</li>'; }).join('');\n}"
      }
    ],
    build: {
      title: "The Final Run",
      prompt: "Write the final app flow: loadTodos(), addTodo(todos, text), removeTodo(todos, index) and stats(todos).\n\nremoveTodo removes the item at the given index and returns the array.\nstats returns the number of completed todos.\n\n\u2022 All data persists under key \"todos\"\n\u2022 removeTodo([{done:true},{done:false}], 1) -> [{done:true}]\n\u2022 stats counts done === true",
      starter: "function loadTodos() {\n  var raw = localStorage.getItem('todos');\n  return raw ? JSON.parse(raw) : [];\n}\nfunction addTodo(todos, text) {\n  todos.push({ text: text, done: false });\n  localStorage.setItem('todos', JSON.stringify(todos));\n  return todos;\n}\nfunction removeTodo(todos, index) {\n  // remove item at index and return array\n  return todos;\n}\nfunction stats(todos) {\n  // return number of completed todos\n  return 0;\n}",
      test: "function testFinal() {\n  var arr = [{ done: true }, { done: false }, { done: true }];\n  var removed = removeTodo(arr, 1);\n  if (removed.length !== 2 || removed[1].done !== true) return { passed: false, message: 'removeTodo should remove the item at the index.' };\n  var s = stats(arr);\n  if (s !== 2) return { passed: false, message: 'stats should count the done todos (2).' };\n  localStorage.setItem('todos', JSON.stringify([{ text: 'x' }]));\n  var loaded = loadTodos();\n  if (!Array.isArray(loaded) || loaded.length !== 1) return { passed: false, message: 'loadTodos should load the persisted data.' };\n  localStorage.removeItem('todos');\n  return { passed: true, message: 'MISSION COMPLETE. You just built a full application.' };\n}",
      hints: [
        "removeTodo: use todos.splice(index, 1) then return todos.",
        "stats: filter for done === true and count.",
        "You already wrote loadTodos and addTodo correctly."
      ],
      solution: "function loadTodos() {\n  var raw = localStorage.getItem('todos');\n  return raw ? JSON.parse(raw) : [];\n}\nfunction addTodo(todos, text) {\n  todos.push({ text: text, done: false });\n  localStorage.setItem('todos', JSON.stringify(todos));\n  return todos;\n}\nfunction removeTodo(todos, index) {\n  todos.splice(index, 1);\n  return todos;\n}\nfunction stats(todos) {\n  return todos.filter(function (t) { return t.done === true; }).length;\n}",
      unlock: "Web Runner"
    },
    unlock: "Web Runner"
  }
);

/* ============================================================
   Practice challenges: quick runs that give XP but do not
   unlock missions. Categories:
     speed   - 5-Minute Run
     fix     - Fix the Code
     build   - Build Challenge
   ============================================================ */

var PRACTICE = {
  speed: [
    {
      id: "speed-1",
      kind: "speed",
      title: "Speedy Greeting",
      tagline: "Make a greeting in 30 seconds.",
      type: "js",
      prompt: "Write greet(name) that returns \"Hi \" + name.",
      starter: "function greet(name) {\n  return \"\";\n}",
      test: "function t() {\n  if (greet('Aya') !== 'Hi Aya') return { passed: false, message: 'greet(\"Aya\") should return \"Hi Aya\".' };\n  return { passed: true, message: 'Fast! Plus 10 XP.' };\n}",
      solution: "function greet(name) {\n  return 'Hi ' + name;\n}",
      xp: 10
    },
    {
      id: "speed-2",
      kind: "speed",
      title: "Add Two",
      tagline: "Add two numbers fast.",
      type: "js",
      prompt: "Write add(a, b) that returns a + b.",
      starter: "function add(a, b) {\n  return 0;\n}",
      test: "function t() {\n  if (add(2, 3) !== 5) return { passed: false, message: 'add(2, 3) should return 5.' };\n  return { passed: true, message: 'Plus 10 XP!' };\n}",
      solution: "function add(a, b) {\n  return a + b;\n}",
      xp: 10
    },
    {
      id: "speed-3",
      kind: "speed",
      title: "Is it Even?",
      tagline: "Check parity quickly.",
      type: "js",
      prompt: "Write isEven(n) that returns true when n is even.",
      starter: "function isEven(n) {\n  return false;\n}",
      test: "function t() {\n  if (!isEven(4)) return { passed: false, message: 'isEven(4) should return true.' };\n  if (isEven(3)) return { passed: false, message: 'isEven(3) should return false.' };\n  return { passed: true, message: 'Plus 10 XP!' };\n}",
      solution: "function isEven(n) {\n  return n % 2 === 0;\n}",
      xp: 10
    },
    {
      id: "speed-4",
      kind: "speed",
      title: "First Letter",
      tagline: "Extract the first character.",
      type: "js",
      prompt: "Write firstLetter(word) that returns the first character using word[0].",
      starter: "function firstLetter(word) {\n  return \"\";\n}",
      test: "function t() {\n  if (firstLetter('SkillRun') !== 'S') return { passed: false, message: 'firstLetter(\"SkillRun\") should return \"S\".' };\n  return { passed: true, message: 'Plus 10 XP!' };\n}",
      solution: "function firstLetter(word) {\n  return word[0];\n}",
      xp: 10
    }
  ],
  fix: [
    {
      id: "fix-1",
      kind: "fix",
      title: "Fix the Typos",
      tagline: "This code is broken. Find and fix it.",
      type: "js",
      prompt: "makeFull should return \"First Last\", but it has bugs. Fix the code.",
      starter: "function makeFull(first, last) {\n  return first = last;\n}",
      test: "function t() {\n  if (makeFull('Ali', 'Khan') !== 'Ali Khan') return { passed: false, message: 'makeFull(\"Ali\", \"Khan\") should return \"Ali Khan\".' };\n  return { passed: true, message: 'Fixed! Plus 15 XP.' };\n}",
      solution: "function makeFull(first, last) {\n  return first + ' ' + last;\n}",
      xp: 15
    },
    {
      id: "fix-2",
      kind: "fix",
      title: "Fix the Comparison",
      tagline: "Something is off with the logic.",
      type: "js",
      prompt: "isAdult should return true when age is 18 or more. Fix the code.",
      starter: "function isAdult(age) {\n  if (age = 18) { return true; }\n  return false;\n}",
      test: "function t() {\n  if (!isAdult(18)) return { passed: false, message: 'isAdult(18) should return true.' };\n  if (!isAdult(25)) return { passed: false, message: 'isAdult(25) should return true.' };\n  if (isAdult(15)) return { passed: false, message: 'isAdult(15) should return false.' };\n  return { passed: true, message: 'Fixed! Plus 15 XP.' };\n}",
      solution: "function isAdult(age) {\n  if (age >= 18) { return true; }\n  return false;\n}",
      xp: 15
    },
    {
      id: "fix-3",
      kind: "fix",
      title: "Fix the Loop",
      tagline: "The loop never runs. Why?",
      type: "js",
      prompt: "sumTo(5) should return 15. Fix the loop condition.",
      starter: "function sumTo(n) {\n  var total = 0;\n  for (var i = 1; i < n; i++) {\n    total += i;\n  }\n  return total;\n}",
      test: "function t() {\n  if (sumTo(5) !== 15) return { passed: false, message: 'sumTo(5) should return 15.' };\n  return { passed: true, message: 'Fixed! Plus 15 XP.' };\n}",
      solution: "function sumTo(n) {\n  var total = 0;\n  for (var i = 1; i <= n; i++) {\n    total += i;\n  }\n  return total;\n}",
      xp: 15
    }
  ],
  build: [
    {
      id: "build-1",
      kind: "build",
      title: "Build a Counter",
      tagline: "Count the vowels in a word.",
      type: "js",
      prompt: "Write countVowels(word) that returns how many a, e, i, o, u the word has. Example: countVowels(\"skillrun\") -> 2",
      starter: "function countVowels(word) {\n  // count the vowels\n  return 0;\n}",
      test: "function t() {\n  if (countVowels('skillrun') !== 2) return { passed: false, message: 'countVowels(\"skillrun\") should return 2.' };\n  if (countVowels('aeiou') !== 5) return { passed: false, message: 'countVowels(\"aeiou\") should return 5.' };\n  if (countVowels('') !== 0) return { passed: false, message: 'Empty word returns 0.' };\n  return { passed: true, message: 'Plus 20 XP!' };\n}",
      hints: [
        "Loop over each character with for.",
        "Check if the character is a vowel.",
        "Count matches and return the total."
      ],
      solution: "function countVowels(word) {\n  var count = 0;\n  for (var i = 0; i < word.length; i++) {\n    if ('aeiou'.indexOf(word[i]) !== -1) count++;\n  }\n  return count;\n}",
      xp: 20
    },
    {
      id: "build-2",
      kind: "build",
      title: "Build a Flipper",
      tagline: "Reverse a string from scratch.",
      type: "js",
      prompt: "Write reverse(word) that returns the word backwards. Example: reverse(\"run\") -> \"nur\"",
      starter: "function reverse(word) {\n  // return word backwards\n  return word;\n}",
      test: "function t() {\n  if (reverse('run') !== 'nur') return { passed: false, message: 'reverse(\"run\") should return \"nur\".' };\n  if (reverse('a') !== 'a') return { passed: false, message: 'reverse(\"a\") should return \"a\".' };\n  return { passed: true, message: 'Plus 20 XP!' };\n}",
      hints: [
        "Build a new string one character at a time.",
        "Loop from the last character backwards.",
        "Concatenate each character to the result."
      ],
      solution: "function reverse(word) {\n  var out = '';\n  for (var i = word.length - 1; i >= 0; i--) {\n    out += word[i];\n  }\n  return out;\n}",
      xp: 20
    },
    {
      id: "build-3",
      kind: "build",
      title: "Build a Max Finder",
      tagline: "Find the largest number in a list.",
      type: "js",
      prompt: "Write findMax(numbers) that returns the largest number. Example: findMax([3, 9, 2]) -> 9",
      starter: "function findMax(numbers) {\n  // return the biggest number\n  return 0;\n}",
      test: "function t() {\n  if (findMax([3, 9, 2]) !== 9) return { passed: false, message: 'findMax([3, 9, 2]) should return 9.' };\n  if (findMax([-5, -2]) !== -2) return { passed: false, message: 'findMax([-5, -2]) should return -2.' };\n  if (findMax([7]) !== 7) return { passed: false, message: 'findMax([7]) should return 7.' };\n  return { passed: true, message: 'Plus 20 XP!' };\n}",
      hints: [
        "Start with the first number as your biggest.",
        "Loop and replace it when you find a bigger one.",
        "Return the biggest after the loop."
      ],
      solution: "function findMax(numbers) {\n  var biggest = numbers[0];\n  for (var i = 1; i < numbers.length; i++) {\n    if (numbers[i] > biggest) biggest = numbers[i];\n  }\n  return biggest;\n}",
      xp: 20
    }
  ]
};

/* ============================================================
   Projects: combine skills. Locked until required skills done.
   ============================================================ */

var PROJECTS = [
  {
    id: "personal-site",
    title: "Personal Website",
    icon: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>',
    pathId: "web",
    desc: "A complete about-you page with headings, a styled look and a link.",
    skills: ["HTML Foundations", "CSS Foundations"],
    xp: 150,
    kind: "project",
    type: "html",
    starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>About Me</title>\n</head>\n<body>\n\n</body>\n</html>",
    check: "(function(){\n  try {\n    if (!document.querySelector('h1') || !document.querySelector('h1').textContent.trim()) return { passed: false, message: 'Add an <h1> heading.' };\n    if (!document.querySelector('p') || !document.querySelector('p').textContent.trim()) return { passed: false, message: 'Add a <p> paragraph.' };\n    if (!document.querySelector('img') || !document.querySelector('img').getAttribute('alt')) return { passed: false, message: 'Add an <img> with an alt attribute.' };\n    if (!document.querySelector('a') || !document.querySelector('a').getAttribute('href')) return { passed: false, message: 'Add an <a> link with an href.' };\n    var color = window.getComputedStyle(document.querySelector('h1')).color.match(/\\d+/g);\n    if (!color || !(color[1] > 150)) return { passed: false, message: 'Style the h1 green (#30d05c) with CSS.' };\n    return { passed: true, message: 'Your personal website is live!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
    hints: [
      "Include: an h1, a paragraph, an image with alt, and a link.",
      "Add a <style> block that colors the h1 green (#30d05c).",
      "Image: <img src=\"https://placehold.co/200\" alt=\"me\">  Link: <a href=\"https://skillrun.com\">SkillRun</a>"
    ],
    solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>About Me</title>\n  <style>\n    h1 { color: #30d05c; }\n    body { font-family: sans-serif; }\n  </style>\n</head>\n<body>\n  <h1>About Me</h1>\n  <p>I build things with code.</p>\n  <img src=\"https://placehold.co/200\" alt=\"me\">\n  <a href=\"https://skillrun.com\">SkillRun</a>\n</body>\n</html>"
  },
  {
    id: "todo-app",
    title: "Todo App",
    icon: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    pathId: "web",
    desc: "A working todo list with add, done and save. Your first app!",
    skills: ["JavaScript Foundations", "Data & Storage"],
    xp: 200,
    kind: "project",
    type: "js",
    starter: "function loadTodos() {\n  var raw = localStorage.getItem('todos');\n  return raw ? JSON.parse(raw) : [];\n}\nfunction saveTodos(list) {\n  localStorage.setItem('todos', JSON.stringify(list));\n}\nfunction addTodo(list, text) {\n  // add { text, done:false }, save, and return the list\n  return list;\n}\nfunction completeTodo(list, index) {\n  // mark done true at index, save, and return the list\n  return list;\n}",
    test: "function t() {\n  var list = [];\n  var added = addTodo(list, 'learn');\n  if (added.length !== 1 || added[0].text !== 'learn' || added[0].done !== false) return { passed: false, message: 'addTodo should add { text, done:false }.' };\n  var stored = localStorage.getItem('todos');\n  if (!stored) return { passed: false, message: 'addTodo should save with localStorage.' };\n  var doneList = completeTodo(list, 0);\n  if (doneList[0].done !== true) return { passed: false, message: 'completeTodo should set done to true.' };\n  var reloaded = loadTodos();\n  if (reloaded.length !== 1) return { passed: false, message: 'loadTodos should read what was saved.' };\n  localStorage.removeItem('todos');\n  return { passed: true, message: 'Your todo app logic works!' };\n}",
    hints: [
      "addTodo: push { text: text, done: false }, call saveTodos, return the list.",
      "completeTodo: set list[index].done = true, call saveTodos, return the list.",
      "saveTodos just does localStorage.setItem."
    ],
    solution: "function loadTodos() {\n  var raw = localStorage.getItem('todos');\n  return raw ? JSON.parse(raw) : [];\n}\nfunction saveTodos(list) {\n  localStorage.setItem('todos', JSON.stringify(list));\n}\nfunction addTodo(list, text) {\n  list.push({ text: text, done: false });\n  saveTodos(list);\n  return list;\n}\nfunction completeTodo(list, index) {\n  list[index].done = true;\n  saveTodos(list);\n  return list;\n}"
  },
  {
    id: "quiz-app",
    title: "Quiz App",
    icon: '<circle cx="12" cy="12" r="10"/><path d="M12 11v4M12 7h.01"/>',
    pathId: "web",
    desc: "A quiz that checks answers, scores you and shows results.",
    skills: ["JavaScript Logic", "JavaScript Foundations"],
    xp: 200,
    kind: "project",
    type: "js",
    starter: "var quiz = [\n  { q: 'What is 2 + 2?', answer: '4' },\n  { q: 'What color is grass?', answer: 'green' }\n];\nfunction checkAnswers(answers) {\n  // answers is an array of user strings.\n  // Return how many match the quiz answer (case-insensitive).\n  return 0;\n}\nfunction scorePercent(answers) {\n  // Return the percentage (0-100) of correct answers.\n  return 0;\n}",
    test: "function t() {\n  var a = checkAnswers(['4', 'Green']);\n  if (a !== 2) return { passed: false, message: 'checkAnswers should count both correct answers (2).' };\n  var b = checkAnswers(['4', 'blue']);\n  if (b !== 1) return { passed: false, message: 'checkAnswers with one wrong should give 1.' };\n  var c = checkAnswers(['wrong', 'wrong']);\n  if (c !== 0) return { passed: false, message: 'All wrong gives 0.' };\n  if (scorePercent(['4', 'green']) !== 100) return { passed: false, message: 'scorePercent with all right gives 100.' };\n  if (scorePercent(['4', 'blue']) !== 50) return { passed: false, message: 'scorePercent with one right gives 50.' };\n  return { passed: true, message: 'Your quiz scores perfectly!' };\n}",
    hints: [
      "Compare case-insensitively: user.toLowerCase() === quiz[i].answer.toLowerCase().",
      "checkAnswers: loop, count matches, return the count.",
      "scorePercent: Math.round((correct / answers.length) * 100)."
    ],
    solution: "var quiz = [\n  { q: 'What is 2 + 2?', answer: '4' },\n  { q: 'What color is grass?', answer: 'green' }\n];\nfunction checkAnswers(answers) {\n  var correct = 0;\n  for (var i = 0; i < quiz.length; i++) {\n    if (String(answers[i]).toLowerCase() === quiz[i].answer.toLowerCase()) correct++;\n  }\n  return correct;\n}\nfunction scorePercent(answers) {\n  return Math.round((checkAnswers(answers) / quiz.length) * 100);\n}"
  },
  {
    id: "text-analyzer",
    title: "Text Analyzer",
    icon: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>',
    pathId: "programming",
    desc: "A small Python program that analyzes a block of text.",
    skills: ["Python Basics", "Python Data"],
    xp: 200,
    kind: "project",
    type: "python",
    starter: "def word_count(text):\n    # return the number of words in text\n    return 0\n\ndef letter_count(text):\n    # return the number of letters (a-z) ignoring spaces\n    return 0\n\ndef shout(text):\n    # return the text in uppercase with an exclamation mark\n    return text",
    test: "function t() {\n  if (PythonEval.call('word_count', ['the quick brown fox']) !== 4) return { passed: false, message: 'word_count should count 4 words.' };\n  if (PythonEval.call('letter_count', ['ab cd']) !== 4) return { passed: false, message: 'letter_count should ignore spaces.' };\n  if (PythonEval.call('shout', ['hello']) !== 'HELLO!') return { passed: false, message: 'shout should uppercase and add !.' };\n  return { passed: true, message: 'Your text analyzer works!' };\n}",
    hints: [
      "word_count: text.split(' ') has one entry per word.",
      "letter_count: loop the characters and count only a-z (use: ch.lower() in 'abcdefghijklmnopqrstuvwxyz').",
      "shout: text.upper() + '!'"
    ],
    solution: "def word_count(text):\n    return len(text.split())\n\ndef letter_count(text):\n    n = 0\n    for ch in text:\n        if ch.lower() in 'abcdefghijklmnopqrstuvwxyz':\n            n += 1\n    return n\n\ndef shout(text):\n    return text.upper() + '!'"
  },
  {
    id: "ohm-decoder",
    title: "Ohm Decoder",
    icon: '<path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/>',
    pathId: "electronics",
    desc: "Decode resistor color bands into real ohm values.",
    skills: ["Circuits", "Voltage & Ohm"],
    xp: 200,
    kind: "project",
    type: "circuit",
    starter: "// Use Circuit.bandValue and Circuit.resistorOhms\n// to decode resistor color bands.\nfunction decode(bands) {\n  // bands: [color1, color2, multiplier]\n  return 0;\n}\nsetPin(C, 'a0', 5);\nled(C, 'a0', 'red');",
    test: "function t() {\n  var one = decode(['red', 'red', 'red']);\n  if (one !== 2200) return { passed: false, message: 'red red red should be 2200 ohms.' };\n  var two = decode(['brown', 'black', 'red']);\n  if (two !== 1000) return { passed: false, message: 'brown black red should be 1000 ohms.' };\n  var C = window.__C;\n  if (!C || !Circuit.isLit(C, 0)) return { passed: false, message: 'The demo LED should be lit.' };\n  return { passed: true, message: 'Your Ohm decoder works!' };\n}",
    hints: [
      "Circuit.resistorOhms(bands) computes value x multiplier for you.",
      "Circuit.bandValue(color) maps a color to its digit.",
      "red=2, brown=1, black=0 -> 22 x 100 = 2200 ohms."
    ],
    solution: "function decode(bands) {\n  return Circuit.resistorOhms(bands);\n}\nsetPin(C, 'a0', 5);\nled(C, 'a0', 'red');"
  }
];

/* ============================================================
   Achievements: unlocked by actions, shown in Profile.
   ============================================================ */

var ACHIEVEMENTS = [
  { id: "first-run", title: "First Run", desc: "Complete your first challenge." },
  { id: "builder", title: "Builder", desc: "Complete your first Build Challenge." },
  { id: "debugger", title: "Debugger", desc: "Complete a Fix the Code practice." },
  { id: "web-runner", title: "Web Runner", desc: "Complete all 10 missions." }
];

var START_POINTS = [
  {
    id: "new",
    title: "I'm completely new",
    desc: "Never written code before. We start from zero.",
    startMission: 0
  },
  {
    id: "little",
    title: "I know a little",
    desc: "I've seen some code. Skip the very basics.",
    startMission: 1
  },
  {
    id: "coder",
    title: "I already code",
    desc: "I'm comfortable coding. Give me the real stuff.",
    startMission: 3
  }
];

var XP_PER_LEVEL = 100;
var MISSIONS_PER_LEVEL = 2;
