/* ============================================================
   SkillRun - "Programmer" series (V2)
   Python missions run on the built-in subset interpreter
   (python-eval.js). Each challenge test is a JS function that
   checks the learner's Python via PythonEval.call / expr / logs.
   ============================================================ */

registerMissions([
  {
    id: "hello-python",
    num: 30,
    title: "Hello, Python",
    tagline: "Your first lines of Python.",
    skill: "Python Basics",
    xp: 150,
    type: "python",
    icon: '<path d="M12 2a5 5 0 0 1 5 5v3a5 5 0 0 1-5 5h-2a5 5 0 0 0-5 5 5 5 0 0 0 5 5h2a5 5 0 0 0 5-5"/><path d="M10 2a5 5 0 0 0-5 5v3a5 5 0 0 0 5 5h2"/>',
    meta: { kind: "normal", series: "programmer", order: 1 },
    briefing: {
      objective: "Write functions that greet people in Python.",
      body: "Python is famous for being readable. You define functions with 'def', return values with 'return', and text lives in strings you can combine and repeat."
    },
    challenges: [
      {
        id: "ch1",
        title: "Greet by name",
        instructions: "Write greet(name) that returns 'Hello, ' + name.",
        learning: "In Python, + joins strings just like it adds numbers.",
        example: "def greet(name):\n    return 'Hello, ' + name",
        starter: "def greet(name):\n    # return 'Hello, ' + name\n    pass",
        test: "function t() {\n  if (!PythonEval.hasFunction('greet')) return { passed: false, message: 'Define the function greet(name).' };\n  if (PythonEval.call('greet', ['Ada']) !== 'Hello, Ada') return { passed: false, message: \"greet('Ada') should be 'Hello, Ada'.\" };\n  return { passed: true, message: 'Python says hello!' };\n}",
        hints: ["Use 'def greet(name):'", "return 'Hello, ' + name"],
        solution: "def greet(name):\n    return 'Hello, ' + name"
      },
      {
        id: "ch2",
        title: "Shout it out",
        instructions: "Write shout(msg) that returns msg.upper() + '!'.",
        learning: "Strings have methods like .upper() that return a new string.",
        example: "def shout(msg):\n    return msg.upper() + '!'",
        starter: "def shout(msg):\n    # return msg.upper() + '!'\n    pass",
        test: "function t() {\n  if (PythonEval.call('shout', ['hi']) !== 'HI!') return { passed: false, message: \"shout('hi') should be 'HI!'.\" };\n  return { passed: true, message: 'Loud and clear!' };\n}",
        hints: ["Call .upper() on the string.", "Add '!' with +."],
        solution: "def shout(msg):\n    return msg.upper() + '!'"
      },
      {
        id: "ch3",
        title: "Repeat after me",
        instructions: "Write repeat(msg, n) that returns msg repeated n times.",
        learning: "Multiplying a string by a number repeats it: 'ab' * 3 is 'ababab'.",
        example: "def repeat(msg, n):\n    return msg * n",
        starter: "def repeat(msg, n):\n    # return msg * n\n    pass",
        test: "function t() {\n  if (PythonEval.call('repeat', ['yo', 3]) !== 'yoyoyo') return { passed: false, message: \"repeat('yo', 3) should be 'yoyoyo'.\" };\n  if (PythonEval.call('repeat', ['a', 1]) !== 'a') return { passed: false, message: 'repeat 1 time should keep it.' };\n  return { passed: true, message: 'Repeat works!' };\n}",
        hints: ["String * number repeats it.", "One line: return msg * n"],
        solution: "def repeat(msg, n):\n    return msg * n"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write say_hello() that prints 'Hello, SkillRun!' using print().",
      starter: "def say_hello():\n    # print('Hello, SkillRun!')\n    pass\nsay_hello()",
      test: "function t() {\n  var logs = PythonEval.logs();\n  if (logs.indexOf('Hello, SkillRun!') === -1) return { passed: false, message: 'You should print exactly \"Hello, SkillRun!\".' };\n  return { passed: true, message: 'You printed your first Python message!' };\n}",
      hints: ["print('Hello, SkillRun!')", "That is the whole program."],
      solution: "def say_hello():\n    print('Hello, SkillRun!')\n\nsay_hello()",
      unlock: "Python Basics"
    },
    unlock: "Python Basics"
  },

  {
    id: "python-variables",
    num: 31,
    title: "Variables",
    tagline: "Store, change and reuse values.",
    skill: "Python Basics",
    xp: 150,
    type: "python",
    icon: '<path d="M4 7h16M4 12h16M4 17h10"/>',
    meta: { kind: "normal", series: "programmer", order: 2 },
    briefing: {
      objective: "Store values in variables and compute with them.",
      body: "Variables are names for values. Python figures out the type for you - strings, numbers, booleans. Compute once, reuse everywhere."
    },
    challenges: [
      {
        id: "ch1",
        title: "Half of a number",
        instructions: "Write half(n) that stores n / 2 in a variable called result and returns it.",
        learning: "result = n / 2 assigns to a variable you can return.",
        example: "def half(n):\n    result = n / 2\n    return result",
        starter: "def half(n):\n    # result = n / 2\n    pass",
        test: "function t() {\n  if (PythonEval.call('half', [10]) !== 5) return { passed: false, message: 'half(10) should be 5.' };\n  if (PythonEval.call('half', [7]) !== 3.5) return { passed: false, message: 'half(7) should be 3.5.' };\n  return { passed: true, message: 'Variables at work!' };\n}",
        hints: ["result = n / 2", "return result"],
        solution: "def half(n):\n    result = n / 2\n    return result"
      },
      {
        id: "ch2",
        title: "Add with a variable",
        instructions: "Write add(a, b) that stores a + b in total and returns total.",
        learning: "Using an intermediate variable keeps code readable.",
        example: "def add(a, b):\n    total = a + b\n    return total",
        starter: "def add(a, b):\n    # total = a + b\n    pass",
        test: "function t() {\n  if (PythonEval.call('add', [2, 3]) !== 5) return { passed: false, message: 'add(2,3) should be 5.' };\n  if (PythonEval.call('add', [0, 0]) !== 0) return { passed: false, message: 'add(0,0) should be 0.' };\n  return { passed: true, message: 'Totals add up!' };\n}",
        hints: ["total = a + b", "return total"],
        solution: "def add(a, b):\n    total = a + b\n    return total"
      },
      {
        id: "ch3",
        title: "Hours to minutes",
        instructions: "Write minutes(hours) that returns hours * 60.",
        learning: "Multiplication converts units: hours to minutes.",
        example: "def minutes(hours):\n    return hours * 60",
        starter: "def minutes(hours):\n    # return hours * 60\n    pass",
        test: "function t() {\n  if (PythonEval.call('minutes', [2]) !== 120) return { passed: false, message: 'minutes(2) should be 120.' };\n  if (PythonEval.call('minutes', [1]) !== 60) return { passed: false, message: 'minutes(1) should be 60.' };\n  return { passed: true, message: 'Unit conversion done!' };\n}",
        hints: ["hours * 60", "One line."],
        solution: "def minutes(hours):\n    return hours * 60"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write discount(price) that returns the price after a 10% discount (price * 0.9).",
      starter: "def discount(price):\n    # return price * 0.9\n    pass",
      test: "function t() {\n  if (PythonEval.call('discount', [100]) !== 90) return { passed: false, message: 'discount(100) should be 90.' };\n  if (PythonEval.call('discount', [50]) !== 45) return { passed: false, message: 'discount(50) should be 45.' };\n  return { passed: true, message: 'Bargain hunting unlocked!' };\n}",
      hints: ["price * 0.9", "That is all."],
      solution: "def discount(price):\n    return price * 0.9",
      unlock: "Python Basics"
    },
    unlock: "Python Basics"
  },

  {
    id: "python-conditions",
    num: 32,
    title: "Conditions",
    tagline: "Make your code decide.",
    skill: "Python Logic",
    xp: 170,
    type: "python",
    icon: '<path d="M3 7l6 5-6 5V7z"/><path d="M12 7l6 5-6 5V7z"/>',
    meta: { kind: "normal", series: "programmer", order: 3 },
    briefing: {
      objective: "Branch with if / elif / else.",
      body: "Programs choose paths. 'if' runs code when a condition is true, 'elif' adds more checks, and 'else' catches everything left over."
    },
    challenges: [
      {
        id: "ch1",
        title: "Can they drive?",
        instructions: "Write can_drive(age) that returns True when age is 18 or older, else False.",
        learning: ">= means 'greater than or equal to'. Returning True/False is Python's way of answering yes/no.",
        example: "def can_drive(age):\n    if age >= 18:\n        return True\n    return False",
        starter: "def can_drive(age):\n    # if age >= 18: return True\n    pass",
        test: "function t() {\n  if (PythonEval.call('can_drive', [18]) !== true) return { passed: false, message: '18 is old enough.' };\n  if (PythonEval.call('can_drive', [17]) !== false) return { passed: false, message: '17 is not.' };\n  return { passed: true, message: 'Decision made!' };\n}",
        hints: ["if age >= 18: return True", "then return False"],
        solution: "def can_drive(age):\n    if age >= 18:\n        return True\n    return False"
      },
      {
        id: "ch2",
        title: "Letter grades",
        instructions: "Write grade(score) that returns 'A' for 90+, 'B' for 80+, 'C' for 70+, else 'F'.",
        learning: "elif chains several checks in order.",
        example: "def grade(score):\n    if score >= 90:\n        return 'A'\n    elif score >= 80:\n        return 'B'\n    elif score >= 70:\n        return 'C'\n    else:\n        return 'F'",
        starter: "def grade(score):\n    # four branches\n    pass",
        test: "function t() {\n  if (PythonEval.call('grade', [95]) !== 'A') return { passed: false, message: '95 -> A.' };\n  if (PythonEval.call('grade', [82]) !== 'B') return { passed: false, message: '82 -> B.' };\n  if (PythonEval.call('grade', [75]) !== 'C') return { passed: false, message: '75 -> C.' };\n  if (PythonEval.call('grade', [40]) !== 'F') return { passed: false, message: '40 -> F.' };\n  return { passed: true, message: 'Grades are fair!' };\n}",
        hints: ["Check 90, 80, 70 in that order.", "else handles the rest."],
        solution: "def grade(score):\n    if score >= 90:\n        return 'A'\n    elif score >= 80:\n        return 'B'\n    elif score >= 70:\n        return 'C'\n    else:\n        return 'F'"
      },
      {
        id: "ch3",
        title: "Positive, negative or zero",
        instructions: "Write sign(n) that returns 'pos', 'neg', or 'zero'.",
        learning: "The three-way branch: if, elif, else.",
        example: "def sign(n):\n    if n > 0:\n        return 'pos'\n    elif n < 0:\n        return 'neg'\n    else:\n        return 'zero'",
        starter: "def sign(n):\n    # three branches\n    pass",
        test: "function t() {\n  if (PythonEval.call('sign', [5]) !== 'pos') return { passed: false, message: '5 -> pos.' };\n  if (PythonEval.call('sign', [-5]) !== 'neg') return { passed: false, message: '-5 -> neg.' };\n  if (PythonEval.call('sign', [0]) !== 'zero') return { passed: false, message: '0 -> zero.' };\n  return { passed: true, message: 'Triple branch works!' };\n}",
        hints: ["n > 0 first, then n < 0.", "else covers zero."],
        solution: "def sign(n):\n    if n > 0:\n        return 'pos'\n    elif n < 0:\n        return 'neg'\n    else:\n        return 'zero'"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write weekend(day) that returns True when day is 'Sat' or 'Sun', else False. Use 'in' with a list.",
      starter: "def weekend(day):\n    # return day in ['Sat', 'Sun']\n    pass",
      test: "function t() {\n  if (PythonEval.call('weekend', ['Sat']) !== true) return { passed: false, message: 'Saturday is a weekend.' };\n  if (PythonEval.call('weekend', ['Mon']) !== false) return { passed: false, message: 'Monday is not.' };\n  return { passed: true, message: 'Weekend logic ready!' };\n}",
      hints: ["'in' checks membership.", "return day in ['Sat', 'Sun']"],
      solution: "def weekend(day):\n    return day in ['Sat', 'Sun']",
      unlock: "Python Logic"
    },
    unlock: "Python Logic"
  },

  {
    id: "python-loops",
    num: 33,
    title: "Loops",
    tagline: "Repeat work without repeating yourself.",
    skill: "Python Logic",
    xp: 190,
    type: "python",
    icon: '<path d="M21 12a9 9 0 1 1-9-9"/><path d="M21 3v6h-6"/>',
    meta: { kind: "normal", series: "programmer", order: 4 },
    briefing: {
      objective: "Loop with while and for, using range().",
      body: "Loops run code again and again. 'while' repeats until a condition turns false; 'for' walks over each item in a range or a list."
    },
    challenges: [
      {
        id: "ch1",
        title: "Count down to zero",
        instructions: "Write count_down(n) that uses a while loop to add n down to 1 and returns the total.",
        learning: "A while loop keeps going as long as its condition is true. Track your running total in a variable.",
        example: "def count_down(n):\n    total = 0\n    while n > 0:\n        total = total + n\n        n = n - 1\n    return total",
        starter: "def count_down(n):\n    total = 0\n    # while n > 0:\n    #   add n, then n = n - 1\n    return total",
        test: "function t() {\n  if (PythonEval.call('count_down', [4]) !== 10) return { passed: false, message: '4+3+2+1 = 10.' };\n  if (PythonEval.call('count_down', [1]) !== 1) return { passed: false, message: '1 stays 1.' };\n  return { passed: true, message: 'While loop mastered!' };\n}",
        hints: ["while n > 0:", "total = total + n then n = n - 1"],
        solution: "def count_down(n):\n    total = 0\n    while n > 0:\n        total = total + n\n        n = n - 1\n    return total"
      },
      {
        id: "ch2",
        title: "Total a range",
        instructions: "Write total_range(n) that adds every number from 0 up to (but not including) n using a for loop.",
        learning: "range(n) yields 0, 1, 2, ... n-1. for i in range(n) runs the body once per number.",
        example: "def total_range(n):\n    total = 0\n    for i in range(n):\n        total = total + i\n    return total",
        starter: "def total_range(n):\n    total = 0\n    # for i in range(n): add i\n    return total",
        test: "function t() {\n  if (PythonEval.call('total_range', [5]) !== 10) return { passed: false, message: '0+1+2+3+4 = 10.' };\n  if (PythonEval.call('total_range', [1]) !== 0) return { passed: false, message: 'Only 0 in range(1).' };\n  return { passed: true, message: 'For + range works!' };\n}",
        hints: ["for i in range(n):", "total = total + i"],
        solution: "def total_range(n):\n    total = 0\n    for i in range(n):\n        total = total + i\n    return total"
      },
      {
        id: "ch3",
        title: "Collect evens",
        instructions: "Write evens(n) that returns a list of even numbers from 0 to n (inclusive), built with a for loop and .append().",
        learning: "Start with an empty list and .append() each value you want to keep.",
        example: "def evens(n):\n    out = []\n    for i in range(n + 1):\n        if i % 2 == 0:\n            out.append(i)\n    return out",
        starter: "def evens(n):\n    out = []\n    # loop, check i % 2 == 0, append\n    return out",
        test: "function t() {\n  var e = PythonEval.call('evens', [6]);\n  if (JSON.stringify(e) !== JSON.stringify([0, 2, 4, 6])) return { passed: false, message: 'evens(6) should be [0, 2, 4, 6].' };\n  return { passed: true, message: 'You built a list in a loop!' };\n}",
        hints: ["Loop over range(n + 1).", "i % 2 == 0 means even.", "out.append(i)"],
        solution: "def evens(n):\n    out = []\n    for i in range(n + 1):\n        if i % 2 == 0:\n            out.append(i)\n    return out"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write factorial(n) that returns n! = 1 * 2 * ... * n using a while loop. factorial(5) is 120.",
      starter: "def factorial(n):\n    result = 1\n    # multiply result by every number from 1 to n\n    return result",
      test: "function t() {\n  if (PythonEval.call('factorial', [5]) !== 120) return { passed: false, message: '5! = 120.' };\n  if (PythonEval.call('factorial', [3]) !== 6) return { passed: false, message: '3! = 6.' };\n  return { passed: true, message: 'Factorials mastered!' };\n}",
      hints: ["Start result = 1.", "while n > 1: result = result * n; n = n - 1"],
      solution: "def factorial(n):\n    result = 1\n    while n > 1:\n        result = result * n\n        n = n - 1\n    return result",
      unlock: "Python Logic"
    },
    unlock: "Python Logic"
  },

  {
    id: "python-lists",
    num: 34,
    title: "Lists",
    tagline: "Store collections of things.",
    skill: "Python Data",
    xp: 180,
    type: "python",
    icon: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    meta: { kind: "normal", series: "programmer", order: 5 },
    briefing: {
      objective: "Create, index and combine lists.",
      body: "Lists hold many values in order. Get items with numbers, loop over them, and use built-ins like sum() and max() to summarize them."
    },
    challenges: [
      {
        id: "ch1",
        title: "First item",
        instructions: "Write first(nums) that returns the first item of a list.",
        learning: "List indexes start at 0: nums[0] is the first item.",
        example: "def first(nums):\n    return nums[0]",
        starter: "def first(nums):\n    # return nums[0]\n    pass",
        test: "function t() {\n  if (PythonEval.call('first', [[7, 8, 9]]) !== 7) return { passed: false, message: 'First of [7,8,9] is 7.' };\n  return { passed: true, message: 'Indexing works!' };\n}",
        hints: ["nums[0]", "Indexes start at zero."],
        solution: "def first(nums):\n    return nums[0]"
      },
      {
        id: "ch2",
        title: "Add one to each",
        instructions: "Write add_one(nums) that returns a NEW list with every number increased by 1.",
        learning: "Loop over a list and .append() the transformed value to a new list.",
        example: "def add_one(nums):\n    out = []\n    for n in nums:\n        out.append(n + 1)\n    return out",
        starter: "def add_one(nums):\n    out = []\n    # for n in nums: append n + 1\n    return out",
        test: "function t() {\n  var r = PythonEval.call('add_one', [[1, 2, 3]]);\n  if (JSON.stringify(r) !== JSON.stringify([2, 3, 4])) return { passed: false, message: 'add_one([1,2,3]) should be [2,3,4].' };\n  return { passed: true, message: 'Transformed the whole list!' };\n}",
        hints: ["Loop with for n in nums.", "out.append(n + 1)"],
        solution: "def add_one(nums):\n    out = []\n    for n in nums:\n        out.append(n + 1)\n    return out"
      },
      {
        id: "ch3",
        title: "Sum it up",
        instructions: "Write list_sum(nums) that returns the total using the built-in sum().",
        learning: "sum(list) adds every number in the list.",
        example: "def list_sum(nums):\n    return sum(nums)",
        starter: "def list_sum(nums):\n    # return sum(nums)\n    pass",
        test: "function t() {\n  if (PythonEval.call('list_sum', [[1, 2, 3, 4]]) !== 10) return { passed: false, message: 'sum([1,2,3,4]) is 10.' };\n  if (PythonEval.call('list_sum', [[]]) !== 0) return { passed: false, message: 'Empty list sums to 0.' };\n  return { passed: true, message: 'Built-ins make life easy!' };\n}",
        hints: ["sum(nums)", "Built-in, no loop needed."],
        solution: "def list_sum(nums):\n    return sum(nums)"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write stats(nums) that returns the biggest value using max(nums).",
      starter: "def stats(nums):\n    # return max(nums)\n    pass",
      test: "function t() {\n  if (PythonEval.call('stats', [[3, 9, 2]]) !== 9) return { passed: false, message: 'max([3,9,2]) is 9.' };\n  return { passed: true, message: 'Found the biggest!' };\n}",
      hints: ["max(nums)", "One line."],
      solution: "def stats(nums):\n    return max(nums)",
      unlock: "Python Data"
    },
    unlock: "Python Data"
  },

  {
    id: "python-strings",
    num: 35,
    title: "Strings",
    tagline: "Slice, clean and count text.",
    skill: "Python Data",
    xp: 180,
    type: "python",
    icon: '<path d="M4 7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M4 7v4M20 7v4M8 2v4M16 2v4"/>',
    meta: { kind: "normal", series: "programmer", order: 6 },
    briefing: {
      objective: "Clean, split and count text with string methods.",
      body: "Text arrives messy. String methods clean it: .strip() trims spaces, .lower() normalizes case, .split() chops into words."
    },
    challenges: [
      {
        id: "ch1",
        title: "Cheer them on",
        instructions: "Write cheer(name) that returns name.upper() + '!'.",
        learning: ".upper() returns an all-caps copy of the string.",
        example: "def cheer(name):\n    return name.upper() + '!'",
        starter: "def cheer(name):\n    # return name.upper() + '!'\n    pass",
        test: "function t() {\n  if (PythonEval.call('cheer', ['sam']) !== 'SAM!') return { passed: false, message: \"cheer('sam') should be 'SAM!'.\" };\n  return { passed: true, message: 'Cheerleader unlocked!' };\n}",
        hints: ["name.upper()", "Then add '!'."],
        solution: "def cheer(name):\n    return name.upper() + '!'"
      },
      {
        id: "ch2",
        title: "Clean a username",
        instructions: "Write clean(text) that returns text.strip().lower().",
        learning: ".strip() removes surrounding spaces; .lower() makes it lowercase. Chain them.",
        example: "def clean(text):\n    return text.strip().lower()",
        starter: "def clean(text):\n    # return text.strip().lower()\n    pass",
        test: "function t() {\n  if (PythonEval.call('clean', ['  SAM  ']) !== 'sam') return { passed: false, message: \"clean('  SAM  ') should be 'sam'.\" };\n  return { passed: true, message: 'Usernames are tidy now!' };\n}",
        hints: [".strip() then .lower()", "Chain them together."],
        solution: "def clean(text):\n    return text.strip().lower()"
      },
      {
        id: "ch3",
        title: "Count words",
        instructions: "Write word_count(sentence) that returns the number of words using len(sentence.split()).",
        learning: ".split() with no argument splits on whitespace, giving a list of words.",
        example: "def word_count(sentence):\n    return len(sentence.split())",
        starter: "def word_count(sentence):\n    # return len(sentence.split())\n    pass",
        test: "function t() {\n  if (PythonEval.call('word_count', ['the quick fox']) !== 3) return { passed: false, message: 'Three words.' };\n  if (PythonEval.call('word_count', ['one']) !== 1) return { passed: false, message: 'One word.' };\n  return { passed: true, message: 'Word counter works!' };\n}",
        hints: ["sentence.split() makes a list of words.", "len() counts them."],
        solution: "def word_count(sentence):\n    return len(sentence.split())"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write mask(word) that returns the first letter followed by stars for the rest: mask('hello') -> 'h****'.",
      starter: "def mask(word):\n    # first letter + '*' * (len(word) - 1)\n    pass",
      test: "function t() {\n  if (PythonEval.call('mask', ['hello']) !== 'h****') return { passed: false, message: \"mask('hello') should be 'h****'.\" };\n  if (PythonEval.call('mask', ['a']) !== 'a') return { passed: false, message: 'One-letter word stays.' };\n  return { passed: true, message: 'Secrets are safe!' };\n}",
      hints: ["word[0] is the first letter.", "'*' * n repeats stars.", "len(word) - 1 stars."],
      solution: "def mask(word):\n    return word[0] + '*' * (len(word) - 1)",
      unlock: "Python Data"
    },
    unlock: "Python Data"
  },

  {
    id: "python-dicts",
    num: 36,
    title: "Dictionaries",
    tagline: "Look things up by name, not number.",
    skill: "Python Data",
    xp: 190,
    type: "python",
    icon: '<path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M8 10h8M8 14h5"/>',
    meta: { kind: "normal", series: "programmer", order: 7 },
    briefing: {
      objective: "Store and read key-value pairs in dictionaries.",
      body: "Dictionaries map keys to values: {'name': 'Ada', 'age': 36}. Read with brackets or .get(), write by assigning, and check with 'in'."
    },
    challenges: [
      {
        id: "ch1",
        title: "Build a person",
        instructions: "Write make_person(name, age) that returns {'name': name, 'age': age}.",
        learning: "A dictionary literal uses { } with key: value pairs.",
        example: "def make_person(name, age):\n    return {'name': name, 'age': age}",
        starter: "def make_person(name, age):\n    # return {'name': name, 'age': age}\n    pass",
        test: "function t() {\n  var p = PythonEval.call('make_person', ['Ada', 36]);\n  if (!p || p.name !== 'Ada' || p.age !== 36) return { passed: false, message: 'Should return a person dict with name and age.' };\n  return { passed: true, message: 'Dictionary created!' };\n}",
        hints: ["Dictionary literal with two pairs."],
        solution: "def make_person(name, age):\n    return {'name': name, 'age': age}"
      },
      {
        id: "ch2",
        title: "Read a value",
        instructions: "Write get_age(person) that returns person['age'].",
        learning: "Brackets read a value by its key.",
        example: "def get_age(person):\n    return person['age']",
        starter: "def get_age(person):\n    # return person['age']\n    pass",
        test: "function t() {\n  if (PythonEval.call('get_age', [{'age': 30}]) !== 30) return { passed: false, message: 'age should be 30.' };\n  return { passed: true, message: 'Lookup works!' };\n}",
        hints: ["person['age']", "Bracket access by key."],
        solution: "def get_age(person):\n    return person['age']"
      },
      {
        id: "ch3",
        title: "Add a field",
        instructions: "Write add_email(person, email) that sets person['email'] = email and returns person.",
        learning: "Assign to a new key to add it to the dictionary.",
        example: "def add_email(person, email):\n    person['email'] = email\n    return person",
        starter: "def add_email(person, email):\n    # person['email'] = email\n    return person",
        test: "function t() {\n  var p = PythonEval.call('add_email', [{'name': 'Ada'}, 'a@b.io']);\n  if (!p || p.email !== 'a@b.io') return { passed: false, message: 'Should add the email key.' };\n  return { passed: true, message: 'Field added!' };\n}",
        hints: ["person['email'] = email", "Return person."],
        solution: "def add_email(person, email):\n    person['email'] = email\n    return person"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write favorites() that returns {'color': 'green', 'language': 'Python'}.",
      starter: "def favorites():\n    # return the dict\n    pass",
      test: "function t() {\n  var f = PythonEval.call('favorites', []);\n  if (!f || f.color !== 'green' || f.language !== 'Python') return { passed: false, message: 'Should return the favorites dict.' };\n  return { passed: true, message: 'Favorites stored!' };\n}",
      hints: ["Return a dict literal.", "Two keys: color and language."],
      solution: "def favorites():\n    return {'color': 'green', 'language': 'Python'}",
      unlock: "Python Data"
    },
    unlock: "Python Data"
  },

  {
    id: "python-functions",
    num: 37,
    title: "Functions",
    tagline: "Return values and pass functions around.",
    skill: "Python Functions",
    xp: 210,
    type: "python",
    icon: '<path d="M4 17l4-4 4 4 4-8 4 8"/>',
    meta: { kind: "normal", series: "programmer", order: 8 },
    briefing: {
      objective: "Build functions that make and call other functions.",
      body: "Functions are values too. A function can return another function (a factory), or take a function as input (higher-order). This is where programs get powerful."
    },
    challenges: [
      {
        id: "ch1",
        title: "Make an adder",
        instructions: "Write make_adder(n) that returns a function which adds n to its argument.",
        learning: "The inner function remembers n from the outer function - a closure.",
        example: "def make_adder(n):\n    def add(x):\n        return x + n\n    return add",
        starter: "def make_adder(n):\n    # define inner add(x), return it\n    pass",
        test: "function t() {\n  if (PythonEval.exec('add5 = make_adder(5)').error) return { passed: false, message: 'make_adder(5) should return a function.' };\n  if (PythonEval.expr('add5(3)') !== 8) return { passed: false, message: 'add5(3) should be 8.' };\n  return { passed: true, message: 'Closures work!' };\n}",
        hints: ["Define add(x) inside.", "return add without calling it."],
        solution: "def make_adder(n):\n    def add(x):\n        return x + n\n    return add"
      },
      {
        id: "ch2",
        title: "Apply twice",
        instructions: "Write apply_twice(f, x) that returns f(f(x)).",
        learning: "Pass a function f as an argument and call it with parentheses.",
        example: "def apply_twice(f, x):\n    return f(f(x))",
        starter: "def apply_twice(f, x):\n    # return f(f(x))\n    pass",
        test: "function t() {\n  if (PythonEval.exec('def dbl(n):\\n    return n * 2').error) return { passed: false, message: 'Could not define dbl.' };\n  if (PythonEval.expr('apply_twice(dbl, 3)') !== 12) return { passed: false, message: 'Double twice: 3 -> 6 -> 12.' };\n  return { passed: true, message: 'Higher-order functions work!' };\n}",
        hints: ["f(f(x))", "Call f once, then again."],
        solution: "def apply_twice(f, x):\n    return f(f(x))"
      },
      {
        id: "ch3",
        title: "Compose",
        instructions: "Write compose(f, g, x) that returns f(g(x)) - apply g first, then f.",
        learning: "Composition chains functions: g runs first, its result feeds f.",
        example: "def compose(f, g, x):\n    return f(g(x))",
        starter: "def compose(f, g, x):\n    # return f(g(x))\n    pass",
        test: "function t() {\n  if (PythonEval.exec('def dbl(n):\\n    return n * 2\\ndef add3(n):\\n    return n + 3').error) return { passed: false, message: 'Could not define helpers.' };\n  if (PythonEval.expr('compose(dbl, add3, 5)') !== 16) return { passed: false, message: 'add3 first (8), then dbl (16).' };\n  return { passed: true, message: 'Function composition works!' };\n}",
        hints: ["g runs first.", "f(g(x))"],
        solution: "def compose(f, g, x):\n    return f(g(x))"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write make_greeter(language) that returns a function greeting a name. Use a dict {'en': 'Hello', 'es': 'Hola'} and return greeter(word) that gives '<word>, <name>'.",
      starter: "def make_greeter(language):\n    words = {'en': 'Hello', 'es': 'Hola'}\n    # return inner function using words[language]\n    pass",
      test: "function t() {\n  if (PythonEval.exec('hi = make_greeter(\"en\")\\nhola = make_greeter(\"es\")').error) return { passed: false, message: 'make_greeter should return functions.' };\n  if (PythonEval.expr('hi(\"Ada\")') !== 'Hello, Ada') return { passed: false, message: 'English: \"Hello, Ada\".' };\n  if (PythonEval.expr('hola(\"Ada\")') !== 'Hola, Ada') return { passed: false, message: 'Spanish: \"Hola, Ada\".' };\n  return { passed: true, message: 'Language factories built!' };\n}",
      hints: ["Inner def greeter(name):", "return words[language] + ', ' + name", "return greeter"],
      solution: "def make_greeter(language):\n    words = {'en': 'Hello', 'es': 'Hola'}\n    def greeter(name):\n        return words[language] + ', ' + name\n    return greeter",
      unlock: "Python Functions"
    },
    unlock: "Python Functions"
  },

  {
    id: "python-boss",
    num: 38,
    title: "Word Frequency",
    tagline: "The boss. Analyze text like a real program.",
    skill: "Python Functions",
    xp: 320,
    type: "python",
    icon: '<path d="M20 6L9 17l-5-5"/>',
    meta: { kind: "boss", series: "programmer", order: 9, focusLock: true, hintCap: 1 },
    briefing: {
      objective: "Count words, find the most frequent, and summarize text.",
      body: "This is the boss of the Programmer path. Build a mini text analyzer: split text into words, count how often each appears in a dictionary, and summarize totals. Minimal hints. Focus. Ship it."
    },
    challenges: [
      {
        id: "ch1",
        title: "Count words",
        instructions: "Write count_words(text) that returns a dictionary mapping each word to how many times it appears. Split on whitespace; treat 'The' and 'the' as different.",
        learning: "Loop over text.split(), and for each word bump its count in a dict: if w in d: d[w] += 1 else: d[w] = 1.",
        example: "def count_words(text):\n    counts = {}\n    for w in text.split():\n        if w in counts:\n            counts[w] = counts[w] + 1\n        else:\n            counts[w] = 1\n    return counts",
        starter: "def count_words(text):\n    counts = {}\n    # loop over text.split(), count each word\n    return counts",
        test: "function t() {\n  var c = PythonEval.call('count_words', ['the cat and the dog']);\n  if (!c || c['the'] !== 2) return { passed: false, message: \"'the' should appear 2 times.\" };\n  if (!c || c['cat'] !== 1) return { passed: false, message: \"'cat' should appear 1 time.\" };\n  return { passed: true, message: 'Word counts computed!' };\n}",
        hints: [
          "Loop with for w in text.split().",
          "if w in counts, add 1; else set to 1."
        ],
        solution: "def count_words(text):\n    counts = {}\n    for w in text.split():\n        if w in counts:\n            counts[w] = counts[w] + 1\n        else:\n            counts[w] = 1\n    return counts"
      },
      {
        id: "ch2",
        title: "Most frequent word",
        instructions: "Write most_frequent(counts) that returns the word with the highest count.",
        learning: "Loop over the dictionary keys, track the word with the biggest value.",
        example: "def most_frequent(counts):\n    best = None\n    best_count = 0\n    for w in counts:\n        if counts[w] > best_count:\n            best = w\n            best_count = counts[w]\n    return best",
        starter: "def most_frequent(counts):\n    best = None\n    best_count = 0\n    # for w in counts: track the largest\n    return best",
        test: "function t() {\n  if (PythonEval.call('most_frequent', [{'a': 1, 'b': 3, 'c': 2}]) !== 'b') return { passed: false, message: \"'b' has the highest count.\" };\n  return { passed: true, message: 'Top word found!' };\n}",
        hints: [
          "Iterate for w in counts.",
          "Track the largest counts[w]."
        ],
        solution: "def most_frequent(counts):\n    best = None\n    best_count = 0\n    for w in counts:\n        if counts[w] > best_count:\n            best = w\n            best_count = counts[w]\n    return best"
      }
    ],
    build: {
      title: "The Final Analysis",
      prompt: "Write analyze(text) that returns a dictionary with three keys: 'words' (total words), 'unique' (distinct words), and 'top' (most frequent word).",
      starter: "def count_words(text):\n    counts = {}\n    # count each word from text.split()\n    return counts\n\ndef most_frequent(counts):\n    # return the word with the highest count\n    return None\n\ndef analyze(text):\n    counts = count_words(text)\n    return {'words': len(text.split()), 'unique': len(counts), 'top': most_frequent(counts)}",
      test: "function t() {\n  var a = PythonEval.call('analyze', ['the cat and the dog the cat']);\n  if (!a || a.words !== 7) return { passed: false, message: 'Total words should be 7.' };\n  if (!a || a.unique !== 4) return { passed: false, message: 'Distinct words should be 4 (the, cat, and, dog).' };\n  if (!a || a.top !== 'the') return { passed: false, message: \"Most frequent word should be 'the'.\" };\n  return { passed: true, message: 'MISSION COMPLETE. You built a real text analyzer!' };\n}",
      hints: [
        "counts = count_words(text)",
        "words = len(text.split()), unique = len(counts)",
        "top = most_frequent(counts)"
      ],
      solution: "def count_words(text):\n    counts = {}\n    for w in text.split():\n        if w in counts:\n            counts[w] = counts[w] + 1\n        else:\n            counts[w] = 1\n    return counts\n\ndef most_frequent(counts):\n    best = None\n    best_count = 0\n    for w in counts:\n        if counts[w] > best_count:\n            best = w\n            best_count = counts[w]\n    return best\n\ndef analyze(text):\n    counts = count_words(text)\n    return {'words': len(text.split()), 'unique': len(counts), 'top': most_frequent(counts)}",
      unlock: "Python Master"
    },
    unlock: "Python Master"
  }
]);