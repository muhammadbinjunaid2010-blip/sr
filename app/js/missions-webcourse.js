/* ============================================================
   SkillRun - WEB DEVELOPMENT COURSE (V3)
   Preview-first learning method:
   "Look at the target." -> "How was it made?" -> "Now you build one."
   Series 1 - Your First Webpage
   ============================================================ */

registerMissions([
  {
    id: "web-blank-page",
    num: 1,
    title: "The Blank Page",
    tagline: "Start from nothing and make a page say something.",
    skill: "HTML",
    xp: 100,
    type: "html",
    icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/>',
    meta: { kind: "normal", series: "w1-webpage", order: 1 },
    briefing: {
      objective: "Build the HTML tree, then make a blank page say something.",
      body: "Open a browser and you see a blank white page. That page can become anything — but first it needs a skeleton. Every webpage is built on one tree: html wraps everything, head holds invisible info, body holds everything you see. Your first mission: build that tree, then make the page speak."
    },
    challenges: [
      {
        id: "ch1",
        title: "The HTML tree",
        instructions: "The page starts empty. Press Shift + 1 and SkillRun inserts the whole skeleton for you. Then look at it: html opens first, then head (open and close), then body, then html closes at the very end. Read the tree before you press Check.",
        learning: "Every webpage is one tree. <html> is the trunk — it wraps the whole document. Inside it live two branches: <head> holds invisible information like the page title, and <body> holds everything visible on the page. Opening tag first, closing tag (with a /) last:\n\n<html>\n├── <head> ... </head>\n└── <body> ... </body>\n</html>",
        example: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n\n</body>\n</html>",
        starter: "",
        check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '').toLowerCase();\n    if (src.indexOf('<!doctype html>') === -1) return { passed: false, message: 'Start with the doctype. Press Shift + 1 to insert the skeleton.' };\n    if (src.indexOf('<html') === -1) return { passed: false, message: 'Open the tree with <html>.' };\n    if (src.indexOf('<head>') === -1) return { passed: false, message: 'Add <head> for the invisible info.' };\n    if (src.indexOf('</head>') === -1) return { passed: false, message: 'Close the head with </head>.' };\n    if (src.indexOf('<body>') === -1) return { passed: false, message: 'Add <body> for everything visible.' };\n    if (src.indexOf('</body>') === -1) return { passed: false, message: 'Close the body with </body>.' };\n    if (src.indexOf('</html>') === -1) return { passed: false, message: 'Close the whole tree with </html>.' };\n    return { passed: true, message: 'The tree is complete: html > head + body.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Press Shift + 1 to insert the whole skeleton.",
          "html opens first and closes last.",
          "head has no visible content — body holds what you see."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Make it say something",
        target: "<p>Hi, this is my page.</p>",
        instructions: "The tree is standing. Now make the page say something: put any words inside the <body> — inside the body, between its tags. One line is enough: your name, a hello, anything.",
        learning: "Whatever you type between <body> and </body> is what the browser shows. That's why it's called body — it's the visible content of the page. The head stays invisible; the body is the page you see.",
        example: "<body>\n  Hello, world.\n</body>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n\n</body>\n</html>",
        check: "(function(){\n  try {\n    var body = document.body;\n    if (!body) return { passed: false, message: 'The page needs a <body> tag.' };\n    if (!body.textContent.trim()) return { passed: false, message: 'Your body is still empty. Write something between <body> and </body>.' };\n    return { passed: true, message: 'Your page says something now!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Type a sentence between <body> and </body>.",
          "The browser shows exactly the text you write there.",
          "Try: <body>Hi, this is my first page.</body>"
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  Hi, this is my first page.\n</body>\n</html>"
      }
    ],
    build: {
      title: "Your first words",
      prompt: "Rebuild the tree yourself, then make the blank page greet you. Inside <body>, write two lines: your name, and one thing you want to learn.",
      target: "<p>Muhammad</p><p>I want to learn to build websites.</p>",
      starter: "",
      check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '').toLowerCase();\n    if (src.indexOf('<!doctype html>') === -1 || src.indexOf('<html>') === -1 || src.indexOf('<head>') === -1 || src.indexOf('<body>') === -1 || src.indexOf('</html>') === -1) return { passed: false, message: 'Start with the full tree: doctype, html, head, body, and every closing tag.' };\n    var t = document.body.textContent.trim();\n    if (!t) return { passed: false, message: 'Write something inside <body>.' };\n    var lines = t.split(/\\n+/).filter(function (l) { return l.trim().length; });\n    if (lines.length < 2) return { passed: false, message: 'Write two lines: your name, and something you want to learn.' };\n    return { passed: true, message: 'The tree is yours and the page speaks. Mission 1 done!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "Press Shift + 1 for the skeleton, then add your words.",
        "Put your name on the first line.",
        "Any honest sentence about learning works."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  Muhammad\n  I want to learn to build websites.\n</body>\n</html>",
      unlock: "HTML Foundations"
    },
    unlock: "HTML Foundations"
  },

  {
    id: "web-first-heading",
    num: 2,
    title: "Your First Heading",
    tagline: "Give your page a big, real title.",
    skill: "HTML",
    xp: 110,
    type: "html",
    icon: '<path d="M3 12h18M3 6h18M3 18h18"/>',
    meta: { kind: "normal", series: "w1-webpage", order: 2 },
    briefing: {
      objective: "Create a heading and understand what a tag is made of.",
      body: "Look at this preview: a big line says \"Hi, my name is Muhammad\". How do you think it was made? It wasn't magic — it was one HTML element called a heading. This mission shows you exactly what a heading is made of, then you build your own."
    },
    challenges: [
      {
        id: "ch1",
        title: "The heading tag",
        target: "<h1>Hi, my name is Muhammad</h1>",
        instructions: "Make the preview show a big heading that says \"Hi, my name is Muhammad\". Use the h1 tag.",
        learning: "This is an HTML heading — the h1 element. It is made of three parts:\n\n<h1>                opening tag\nHi, my name is...   content\n</h1>               closing tag\n\nAn opening tag tells the browser where an element starts. A closing tag (with the /) tells it where the element ends. What's between them is the content.",
        example: "<h1>Hi, my name is Muhammad</h1>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n\n</body>\n</html>",
        check: "(function(){\n  try {\n    var h1 = document.querySelector('h1');\n    if (!h1) return { passed: false, message: 'Add an <h1> tag inside the body.' };\n    if (!h1.textContent.trim()) return { passed: false, message: 'The heading needs content between its tags.' };\n    return { passed: true, message: 'A real heading! Opening tag + content + closing tag.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "A heading looks like <h1>words</h1>.",
          "Opening tag before, closing tag (with /) after.",
          "Try: <h1>Hi, my name is Muhammad</h1>"
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hi, my name is Muhammad</h1>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Your own heading",
        target: "<h1>Your Name</h1>",
        instructions: "Now build one without copying: replace the heading so it says YOUR name. Same structure, your own content.",
        learning: "The structure is always the same — <h1>, content, </h1>. Only the content changes. That's the whole trick of HTML: learn a structure once, use it a thousand times.",
        example: "<h1>Your Name</h1>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n\n</body>\n</html>",
        check: "(function(){\n  try {\n    var h1 = document.querySelector('h1');\n    if (!h1) return { passed: false, message: 'Add an <h1> heading.' };\n    var text = h1.textContent.trim();\n    if (!text) return { passed: false, message: 'The heading needs your name inside it.' };\n    if (text.toLowerCase().indexOf('muhammad') !== -1) return { passed: false, message: 'That is the example text. Write YOUR name instead.' };\n    return { passed: true, message: 'Your own heading — the structure is now yours.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Same shape, different words.",
          "Write your own name between <h1> and </h1>.",
          "Everyone's page starts with their own name."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Your Name</h1>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Two headings, one page",
      prompt: "Add a main heading with your name AND a smaller sub-heading for a section you care about (like a hobby). h1 is the biggest, h2 is the next one down.",
      target: "<h1>Your Name</h1><h2>My Hobbies</h2>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n\n</body>\n</html>",
      check: "(function(){\n  try {\n    var h1 = document.querySelector('h1');\n    if (!h1 || !h1.textContent.trim()) return { passed: false, message: 'Add an <h1> heading with text.' };\n    var h2 = document.querySelector('h2');\n    if (!h2 || !h2.textContent.trim()) return { passed: false, message: 'Add an <h2> sub-heading with text.' };\n    if (h1.textContent.trim().toLowerCase().indexOf('muhammad') !== -1) return { passed: false, message: 'Write your own name in the h1.' };\n    return { passed: true, message: 'A heading and a sub-heading. The hierarchy makes sense!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "h1 first, h2 second — size tells the story.",
        "Pick any section: 'My Hobbies', 'About Me'.",
        "Try: <h2>My Hobbies</h2>"
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Your Name</h1>\n  <h2>My Hobbies</h2>\n</body>\n</html>",
      unlock: "HTML Foundations"
    },
    unlock: "HTML Foundations"
  },

  {
    id: "web-say-something",
    num: 3,
    title: "Say Something",
    tagline: "Add paragraphs below your heading.",
    skill: "HTML",
    xp: 110,
    type: "html",
    icon: '<path d="M4 6h16M4 12h16M4 18h10"/>',
    meta: { kind: "normal", series: "w1-webpage", order: 3 },
    briefing: {
      objective: "Write a real message on your page with paragraphs.",
      body: "A website with only a heading says almost nothing. Real pages are made of paragraphs. Look at the target: a heading on top, then sentences underneath. Each sentence lives in a paragraph tag — and paragraphs are how the whole web is written."
    },
    challenges: [
      {
        id: "ch1",
        title: "Add a paragraph",
        target: "<h1>Hi, my name is Muhammad</h1><p>I am learning to build websites.</p>",
        instructions: "Below the heading, add one paragraph that says \"I am learning to build websites.\" Use the p tag.",
        learning: "<p>I am learning to build websites.</p>\n\nLike the heading, a paragraph is made of an opening tag <p>, content, and a closing tag </p>. p stands for paragraph. A page can have as many paragraphs as it needs.",
        example: "<p>I am learning to build websites.</p>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hi, my name is Muhammad</h1>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var p = document.querySelector('p');\n    if (!p) return { passed: false, message: 'Add a <p> paragraph below the heading.' };\n    if (!p.textContent.trim()) return { passed: false, message: 'Write something inside the paragraph.' };\n    var h1 = document.querySelector('h1');\n    if (!h1) return { passed: false, message: 'Keep your <h1> heading too.' };\n    return { passed: true, message: 'A heading and a paragraph — that is a real sentence on a real page.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "A paragraph is <p>content</p>.",
          "Put it right after your closing </h1> tag.",
          "Try: <p>I am learning to build websites.</p>"
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hi, my name is Muhammad</h1>\n  <p>I am learning to build websites.</p>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Say more — on your own",
        target: "<h1>Hi, my name is Muhammad</h1><p>I am learning to build websites.</p><p>My goal is to build real websites.</p>",
        instructions: "Add a SECOND paragraph explaining something you are actually learning. No example this time — your own words.",
        learning: "You already know everything you need: <p> and </p>, content in between. The only way to make a skill real is to use it on something true about you.",
        example: "",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hi, my name is Muhammad</h1>\n  <p>I am learning to build websites.</p>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var ps = document.querySelectorAll('p');\n    if (ps.length < 2) return { passed: false, message: 'You need two paragraphs now.' };\n    for (var i = 0; i < ps.length; i++) { if (!ps[i].textContent.trim()) return { passed: false, message: 'Every paragraph needs text.' }; }\n    return { passed: true, message: 'Two paragraphs of your own. This is writing, not copying.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Copy your first paragraph and change the words.",
          "Tell the truth about what you are learning.",
          "Something like: 'My goal is to build real websites.'"
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hi, my name is Muhammad</h1>\n  <p>I am learning to build websites.</p>\n  <p>My goal is to build real websites.</p>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Your introduction",
      prompt: "Build an introduction page from scratch: one h1 heading and at least two paragraphs. Make the paragraphs about you.",
      target: "<h1>Your Name</h1><p>I am learning to build websites.</p><p>My goal is to build real websites.</p>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n\n</body>\n</html>",
      check: "(function(){\n  try {\n    var h1 = document.querySelector('h1');\n    if (!h1 || !h1.textContent.trim()) return { passed: false, message: 'Add an <h1> heading with your name.' };\n    var ps = document.querySelectorAll('p');\n    if (ps.length < 2) return { passed: false, message: 'Add at least two <p> paragraphs.' };\n    for (var i = 0; i < ps.length; i++) { if (!ps[i].textContent.trim()) return { passed: false, message: 'Every paragraph needs text.' }; }\n    return { passed: true, message: 'An introduction page you actually wrote. Excellent.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "Start with <h1>Your Name</h1>.",
        "Two paragraphs, each with real text.",
        "The structure is already familiar — build it."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Your Name</h1>\n  <p>I am learning to build websites.</p>\n  <p>My goal is to build real websites.</p>\n</body>\n</html>",
      unlock: "HTML Foundations"
    },
    unlock: "HTML Foundations"
  },

  {
    id: "web-build-first-page",
    num: 4,
    title: "Build Your First Page",
    tagline: "Everything on your own.",
    skill: "HTML",
    xp: 120,
    type: "html",
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h5"/>',
    meta: { kind: "normal", series: "w1-webpage", order: 4 },
    briefing: {
      objective: "Create a complete page with no step-by-step instructions.",
      body: "Now it's just you and the blank page. You know three things: a heading, paragraphs, and the skeleton that holds them. Combine them into one real page. No instructions, no examples — the preview will tell you if you got it."
    },
    challenges: [
      {
        id: "ch1",
        title: "The complete page",
        target: "<h1>Hi, my name is Muhammad</h1><p>I am learning web development.</p><p>My goal is to build real websites.</p>",
        instructions: "Build this page independently: one main heading and two paragraphs. You decide the heading level, you write the words, you make it work.",
        learning: "This is the apply step. Copying teaches you shapes; building teaches you skills. You have everything you need: <h1> for the heading, <p> for each paragraph. Put them all inside <body>.",
        example: "",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n\n</body>\n</html>",
        check: "(function(){\n  try {\n    var h1 = document.querySelector('h1');\n    if (!h1 || !h1.textContent.trim()) return { passed: false, message: 'Start with a main <h1> heading.' };\n    var ps = document.querySelectorAll('p');\n    if (ps.length < 2) return { passed: false, message: 'You need at least two <p> paragraphs.' };\n    for (var i = 0; i < ps.length; i++) { if (!ps[i].textContent.trim()) return { passed: false, message: 'Every paragraph needs text.' }; }\n    var total = document.body.textContent.trim();\n    if (total.split(/\\n+/).filter(function (l) { return l.trim().length; }).length < 3) return { passed: false, message: 'Your page should say at least three things.' };\n    return { passed: true, message: 'You built a full page by yourself. This is the whole job.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "One h1, then two paragraphs below it.",
          "The heading should read like a title.",
          "Finish each line with its closing tag."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hi, my name is Muhammad</h1>\n  <p>I am learning web development.</p>\n  <p>My goal is to build real websites.</p>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Make it yours",
      prompt: "Same mission, your own page: a main heading and at least two paragraphs about a goal you actually have.",
      target: "<h1>Your Name</h1><p>I am learning web development.</p><p>My goal is to build real websites.</p>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n\n</body>\n</html>",
      check: "(function(){\n  try {\n    var h1 = document.querySelector('h1');\n    if (!h1 || !h1.textContent.trim()) return { passed: false, message: 'Add a main <h1> heading.' };\n    var ps = document.querySelectorAll('p');\n    if (ps.length < 2) return { passed: false, message: 'Add at least two <p> paragraphs.' };\n    for (var i = 0; i < ps.length; i++) { if (!ps[i].textContent.trim()) return { passed: false, message: 'Every paragraph needs text.' }; }\n    return { passed: true, message: 'First page complete — and it is yours.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "Change the words, keep the structure.",
        "Write a goal you actually mean.",
        "Two paragraphs is enough."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Your Name</h1>\n  <p>I am learning web development.</p>\n  <p>My goal is to build real websites.</p>\n</body>\n</html>",
      unlock: "HTML Foundations"
    },
    unlock: "HTML Foundations"
  },

  {
    id: "web-first-website-boss",
    num: 5,
    title: "Your First Website",
    tagline: "The boss: your first complete website.",
    skill: "HTML",
    xp: 200,
    type: "html",
    icon: '<path d="M3 11l9-8 9 8M5 9v11h14V9"/>',
    meta: { kind: "boss", series: "w1-webpage", order: 5, focusLock: true, hintCap: 1 },
    briefing: {
      objective: "Build a personal introduction website. No step-by-step.",
      body: "This is your first Boss Mission. No steps, no walkthrough. Build a personal introduction page with: one main heading, at least two paragraphs, and valid HTML structure. The preview is your only teacher. When it passes, you have built a real website."
    },
    challenges: [
      {
        id: "ch1",
        title: "Valid structure",
        target: "<h1>Your Name</h1><p>I am learning web development.</p><p>My goal is to build real websites.</p>",
        instructions: "Give your page a proper skeleton: a doctype, an html tag, a head with a title, and a body. Then put your heading and paragraphs inside the body.",
        learning: "Every real webpage shares the same skeleton: <!DOCTYPE html> tells the browser it's HTML5, <html> wraps everything, <head> holds invisible info like the page title, and <body> holds everything visible.",
        example: "",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n\n</body>\n</html>",
        check: "(function(){\n  try {\n    var body = document.body;\n    if (!body || !body.textContent.trim()) return { passed: false, message: 'Your body needs content.' };\n    var h1 = document.querySelector('h1');\n    if (!h1 || !h1.textContent.trim()) return { passed: false, message: 'The page needs a main heading.' };\n    return { passed: true, message: 'Structure in place. Now the boss move — the full page.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Skeleton: doctype, html, head, body.",
          "Visible content only goes in body.",
          "One hint only — the boss gives nothing else."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Your Name</h1>\n  <p>I am learning web development.</p>\n  <p>My goal is to build real websites.</p>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Build your first website",
      prompt: "Build a personal introduction website with:\n\n\u2022 one main heading\n\u2022 at least two paragraphs\n\u2022 valid HTML structure\n\nMake the content genuinely yours.",
      target: "<h1>Your Name</h1><p>I am learning web development.</p><p>My goal is to build real websites.</p>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n\n</body>\n</html>",
      check: "(function(){\n  try {\n    var h1 = document.querySelector('h1');\n    if (!h1 || !h1.textContent.trim()) return { passed: false, message: 'One main heading is required.' };\n    var ps = document.querySelectorAll('p');\n    if (ps.length < 2) return { passed: false, message: 'At least two paragraphs are required.' };\n    for (var i = 0; i < ps.length; i++) { if (!ps[i].textContent.trim()) return { passed: false, message: 'Every paragraph needs text.' }; }\n    return { passed: true, message: 'BOSS DOWN. You just built your first complete website.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "You already know everything this needs.",
        "Heading, two paragraphs, real words."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Your Name</h1>\n  <p>I am learning web development.</p>\n  <p>My goal is to build real websites.</p>\n</body>\n</html>",
      unlock: "HTML Foundations"
    },
    unlock: "HTML Foundations"
  }
]);