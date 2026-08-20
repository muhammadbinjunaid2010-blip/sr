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

/* ============================================================
   SERIES 2 - HTML TOOLBOX
   Lists, links, images, void elements, formatting, tables,
   semantics and metadata. Ends with the Profile boss.
   ============================================================ */
registerMissions([
  {
    id: "web-lists",
    num: 6,
    title: "Lists",
    tagline: "Bullet-point your world with ul and li.",
    skill: "HTML",
    xp: 110,
    type: "html",
    icon: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    meta: { kind: "normal", series: "w2-toolbox", order: 1 },
    briefing: {
      objective: "Create bullet-point lists with ul and li.",
      body: "Websites are full of lists — skills, steps, features, menus. Look at the target: a little list of skills with bullets. That is an unordered list. It's two tags working together: ul wraps the whole list, li wraps each item."
    },
    challenges: [
      {
        id: "ch1",
        title: "My skills",
        target: "<p>My Skills</p><ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>",
        instructions: "Build the target: a heading \"My Skills\" and an unordered list with three items: HTML, CSS, JavaScript. Use ul for the list and li for each item.",
        learning: "ul means unordered list — the browser adds bullets. li means list item — each one is a row. They work as a pair:\n\n<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>\n\nTree: UL opens, three LI inside, UL closes.",
        example: "<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>My Skills</h1>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var ul = document.querySelector('ul');\n    if (!ul) return { passed: false, message: 'Add a <ul> unordered list.' };\n    var lis = ul.querySelectorAll('li');\n    if (lis.length < 3) return { passed: false, message: 'Add three <li> items inside the list.' };\n    for (var i = 0; i < lis.length; i++) { if (!lis[i].textContent.trim()) return { passed: false, message: 'Every list item needs text.' }; }\n    var h1 = document.querySelector('h1');\n    if (!h1) return { passed: false, message: 'Keep the heading.' };\n    return { passed: true, message: 'ul > li x3 — a real bullet list!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "<ul> wraps the whole list.",
          "Each item is one <li>item</li>.",
          "Three items: HTML, CSS, JavaScript."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>My Skills</h1>\n  <ul>\n    <li>HTML</li>\n    <li>CSS</li>\n    <li>JavaScript</li>\n  </ul>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Add your own",
        target: "<ul><li>HTML</li><li>CSS</li><li>JavaScript</li><li>Git</li></ul>",
        instructions: "Add a fourth item of your own to the list — anything you want to learn.",
        learning: "A list is never finished. Adding an item is just one more <li> before the closing </ul>.",
        example: "",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>My Skills</h1>\n  <ul>\n    <li>HTML</li>\n    <li>CSS</li>\n    <li>JavaScript</li>\n  </ul>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var lis = document.querySelectorAll('li');\n    if (lis.length < 4) return { passed: false, message: 'Add a fourth <li> item.' };\n    for (var i = 0; i < lis.length; i++) { if (!lis[i].textContent.trim()) return { passed: false, message: 'Every list item needs text.' }; }\n    return { passed: true, message: 'A list you extended on your own.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "One more <li> before </ul>.",
          "Pick a real skill you want.",
          "Like: <li>Git</li>"
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>My Skills</h1>\n  <ul>\n    <li>HTML</li>\n    <li>CSS</li>\n    <li>JavaScript</li>\n    <li>Git</li>\n  </ul>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Your skills list",
      prompt: "Build a page with a heading and a bullet list of three things you are learning. Your own content.",
      target: "<h1>Things I am learning</h1><ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var h1 = document.querySelector('h1');\n    if (!h1 || !h1.textContent.trim()) return { passed: false, message: 'Add a heading.' };\n    var lis = document.querySelectorAll('li');\n    if (lis.length < 3) return { passed: false, message: 'Add at least three list items.' };\n    return { passed: true, message: 'Bullets mastered!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "h1 for the heading, ul > li for the items.",
        "Three items minimum.",
        "Make it true about you."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Things I am learning</h1>\n  <ul>\n    <li>HTML</li>\n    <li>CSS</li>\n    <li>JavaScript</li>\n  </ul>\n</body>\n</html>",
      unlock: "HTML Foundations"
    },
    unlock: "HTML Foundations"
  },

  {
    id: "web-ordered-lists",
    num: 7,
    title: "Ordered Lists",
    tagline: "Numbered steps with ol.",
    skill: "HTML",
    xp: 110,
    type: "html",
    icon: '<path d="M9 6h12M9 12h12M9 18h12M4 6l1-1v3M4 12l1-1M4 13l1 1-1 1M4 18l1-1v3"/>',
    meta: { kind: "normal", series: "w2-toolbox", order: 2 },
    briefing: {
      objective: "Create numbered lists with ol.",
      body: "When order matters, bullets aren't enough. A numbered list — 1. Learn, 2. Practice, 3. Build — says this happens in this order. That's an ordered list, and it's one letter different from ul."
    },
    challenges: [
      {
        id: "ch1",
        title: "How I learn",
        target: "<p>How I learn</p><ol><li>Learn</li><li>Practice</li><li>Build</li></ol>",
        instructions: "Build the target: a paragraph \"How I learn\" and an ordered list with three steps: Learn, Practice, Build. Use ol instead of ul.",
        learning: "ol means ordered list. The browser adds the numbers for you — 1, 2, 3 — so you never count by hand. The items are still <li>. Only the wrapper changes from ul to ol.",
        example: "<ol>\n  <li>Learn</li>\n  <li>Practice</li>\n</ol>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>How I learn</h1>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var ol = document.querySelector('ol');\n    if (!ol) return { passed: false, message: 'Add an <ol> ordered list.' };\n    var lis = ol.querySelectorAll('li');\n    if (lis.length < 3) return { passed: false, message: 'Add three steps as <li> items.' };\n    return { passed: true, message: 'ol numbers the steps automatically.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Swap <ul> for <ol>.",
          "Same <li> items inside.",
          "The browser adds the numbers."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>How I learn</h1>\n  <ol>\n    <li>Learn</li>\n    <li>Practice</li>\n    <li>Build</li>\n  </ol>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Your recipe",
      prompt: "Build a numbered list of the steps to make your favourite simple thing — a tea, a sandwich, or how you study. At least three steps.",
      target: "<h1>How to make tea</h1><ol><li>Boil water</li><li>Add tea</li><li>Enjoy</li></ol>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var ol = document.querySelector('ol');\n    if (!ol) return { passed: false, message: 'Add an ordered list.' };\n    if (ol.querySelectorAll('li').length < 3) return { passed: false, message: 'At least three numbered steps.' };\n    return { passed: true, message: 'Steps that count themselves.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "ol > li for each step.",
        "Three or more steps.",
        "Keep the order meaningful."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>How to make tea</h1>\n  <ol>\n    <li>Boil water</li>\n    <li>Add tea</li>\n    <li>Enjoy</li>\n  </ol>\n</body>\n</html>",
      unlock: "HTML Foundations"
    },
    unlock: "HTML Foundations"
  },

  {
    id: "web-links",
    num: 8,
    title: "Links",
    tagline: "Take people somewhere with the a tag.",
    skill: "HTML",
    xp: 120,
    type: "html",
    icon: '<path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>',
    meta: { kind: "normal", series: "w2-toolbox", order: 3 },
    briefing: {
      objective: "Create clickable links with the a tag.",
      body: "The web is made of links. Clicking one takes you to another page. In the target, \"Visit my website\" looks like a link — and it is. The magic lives in a tag with a href attribute that holds the destination."
    },
    challenges: [
      {
        id: "ch1",
        title: "Visit my website",
        target: "<p>Check this out: <a href=\"https://example.com\">Visit my website</a></p>",
        instructions: "Create a link. The text people see is \"Visit my website\", and clicking it should open https://example.com.",
        learning: "<a href=\"https://example.com\">Visit my website</a>\n\na is the link tag. href is an attribute — extra information on the tag — and it holds the destination. Between the opening and closing a tags sits the link text people actually see.",
        example: "<a href=\"https://example.com\">Visit my website</a>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <p>Check this out:</p>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var a = document.querySelector('a');\n    if (!a) return { passed: false, message: 'Add an <a> link tag.' };\n    if (!a.getAttribute('href')) return { passed: false, message: 'Give the link a href attribute with the destination.' };\n    if (!a.textContent.trim()) return { passed: false, message: 'Add the link text people see.' };\n    return { passed: true, message: 'A real link — text plus href.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "<a href=\"...\">text</a>",
          "href holds the destination.",
          "Text between the tags is what people see."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <p>Check this out: <a href=\"https://example.com\">Visit my website</a></p>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Your favourite site",
        target: "<p>My favourite website: <a href=\"https://www.wikipedia.org\">wikipedia.org</a></p>",
        instructions: "Create a link to your favourite website. Your words, your destination.",
        learning: "Attributes are how tags carry instructions. href is just the first one you've met — the whole web runs on them.",
        example: "",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <p>My favourite website:</p>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var a = document.querySelector('a');\n    if (!a) return { passed: false, message: 'Add a link.' };\n    if (!a.getAttribute('href') || a.getAttribute('href') === 'https://example.com') return { passed: false, message: 'Use a destination of your own — any real website.' };\n    if (!a.textContent.trim()) return { passed: false, message: 'Add the link text.' };\n    return { passed: true, message: 'Your link, your destination.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Pick a real site you use.",
          "href=\"https://...\"",
          "Label it with its name."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <p>My favourite website: <a href=\"https://www.wikipedia.org\">wikipedia.org</a></p>\n</body>\n</html>"
      }
    ],
    build: {
      title: "A page with a way out",
      prompt: "Build a small page: a heading, one paragraph, and a link to anywhere you like.",
      target: "<h1>My corner of the web</h1><p>I spend too much time here:</p><p><a href=\"https://example.com\">my favourite site</a></p>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var h1 = document.querySelector('h1');\n    if (!h1) return { passed: false, message: 'Add a heading.' };\n    var a = document.querySelector('a');\n    if (!a || !a.getAttribute('href')) return { passed: false, message: 'Add a link with a href.' };\n    return { passed: true, message: 'Links unlocked!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "h1 + p + a href.",
        "The link needs both text and href.",
        "Anything you like."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>My corner of the web</h1>\n  <p>I spend too much time here:</p>\n  <p><a href=\"https://example.com\">my favourite site</a></p>\n</body>\n</html>",
      unlock: "HTML Foundations"
    },
    unlock: "HTML Foundations"
  },

  {
    id: "web-images",
    num: 9,
    title: "Images",
    tagline: "Add pictures with the void img tag.",
    skill: "HTML",
    xp: 120,
    type: "html",
    icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5-5 5M21 21H3l6-6"/>',
    meta: { kind: "normal", series: "w2-toolbox", order: 4 },
    briefing: {
      objective: "Add images with img and understand void elements.",
      body: "A page of text is a page of text. Add an image and it becomes a website. The img tag looks different from everything you've met so far — it has no closing tag. That's a void element, and img is the one you'll use the most."
    },
    challenges: [
      {
        id: "ch1",
        title: "Show an image",
        target: "<img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='90'%3E%3Crect width='140' height='90' fill='%234f8ff7'/%3E%3Ctext x='70' y='52' font-size='18' text-anchor='middle' fill='white'%3Eimage%3C/text%3E%3C/svg%3E\" alt=\"A blue picture\">",
        instructions: "Add an image to your page. Give it a src (the source of the picture) and an alt (a short description).",
        learning: "<img src=\"image.jpg\" alt=\"A description\">\n\nimg shows a picture. src is the source — where the image lives. alt is a text description for people who can't see the image and for search engines. And notice: img has NO closing tag. It stands alone — a void element.",
        example: "<img src=\"image.jpg\" alt=\"A cat\">",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>My Gallery</h1>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var img = document.querySelector('img');\n    if (!img) return { passed: false, message: 'Add an <img> tag.' };\n    if (!img.getAttribute('src')) return { passed: false, message: 'Give the image a src attribute.' };\n    if (!img.getAttribute('alt')) return { passed: false, message: 'Give the image an alt description.' };\n    return { passed: true, message: 'img with src + alt — and no closing tag needed.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "<img src=\"...\" alt=\"...\">",
          "src is the picture's location.",
          "alt is a short description."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>My Gallery</h1>\n  <img src=\"image.jpg\" alt=\"A cat\">\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Your own picture",
        target: "<img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='90'%3E%3Crect width='140' height='90' fill='%234f8ff7'/%3E%3Ctext x='70' y='52' font-size='18' text-anchor='middle' fill='white'%3Eimage%3C/text%3E%3C/svg%3E\" alt=\"Your description\">",
        instructions: "Add a second image — any source you like — and write an alt description in your own words.",
        learning: "Always give every image an alt. It's not decoration: it's how the image is understood by screen readers and search engines.",
        example: "",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>My Gallery</h1>\n  <img src=\"image.jpg\" alt=\"A cat\">\n</body>\n</html>",
        check: "(function(){\n  try {\n    var imgs = document.querySelectorAll('img');\n    if (imgs.length < 2) return { passed: false, message: 'Add a second <img> tag.' };\n    for (var i = 0; i < imgs.length; i++) { if (!imgs[i].getAttribute('alt')) return { passed: false, message: 'Every image needs an alt description.' }; }\n    return { passed: true, message: 'Two images, each described with alt.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Add another img below the first.",
          "Different src, your own alt.",
          "Void elements don't close."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>My Gallery</h1>\n  <img src=\"image.jpg\" alt=\"A cat\">\n  <img src=\"photo.jpg\" alt=\"A view from my window\">\n</body>\n</html>"
      }
    ],
    build: {
      title: "My gallery",
      prompt: "Build a page with a heading and at least two images, each with its own alt description.",
      target: "<h1>My Gallery</h1><img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='90'%3E%3Crect width='140' height='90' fill='%234f8ff7'/%3E%3C/svg%3E\" alt=\"A blue picture\"><img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='90'%3E%3Crect width='140' height='90' fill='%23e5e7eb'/%3E%3C/svg%3E\" alt=\"A grey picture\">",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var imgs = document.querySelectorAll('img');\n    if (imgs.length < 2) return { passed: false, message: 'Add at least two images.' };\n    for (var i = 0; i < imgs.length; i++) { if (!imgs[i].getAttribute('alt')) return { passed: false, message: 'Every image needs alt.' }; }\n    return { passed: true, message: 'A gallery — images mastered!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "Two img tags, each with src and alt.",
        "Use any src you like.",
        "Remember: no closing tags."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>My Gallery</h1>\n  <img src=\"image.jpg\" alt=\"A cat\">\n  <img src=\"photo.jpg\" alt=\"A view\">\n</body>\n</html>",
      unlock: "HTML Foundations"
    },
    unlock: "HTML Foundations"
  },

  {
    id: "web-void-elements",
    num: 10,
    title: "Void Elements",
    tagline: "Some tags stand alone.",
    skill: "HTML",
    xp: 110,
    type: "html",
    icon: '<path d="M8 4h8M8 12h8M8 20h8M3 4h.01M3 12h.01M3 20h.01"/>',
    meta: { kind: "normal", series: "w2-toolbox", order: 5 },
    briefing: {
      objective: "Understand void elements — tags with no closing tag.",
      body: "Until now, every tag you met came in a pair: opening and closing. Some tags don't. They're called void elements — they stand alone. br, img, input, hr, meta and link never get a closing tag. This mission makes that rule stick."
    },
    challenges: [
      {
        id: "ch1",
        title: "Break a line",
        target: "<p>Hello<br>World</p>",
        instructions: "Make the target: the word \"World\" on its own line, under \"Hello\". Use the br tag to break the line.",
        learning: "Hello<br>World\n\nbr is a line break — a void element. It forces the next text onto a new line. And it never gets a closing tag. There is no </br>. It just breaks the line and stands alone.",
        example: "Hello<br>World",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <p>Hello\nWorld</p>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var brs = document.querySelectorAll('br');\n    if (brs.length === 0) return { passed: false, message: 'Add a <br> to break the line.' };\n    return { passed: true, message: 'br broke the line — and needed no closing tag.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "br means break.",
          "Put <br> between the two words.",
          "No closing tag — it stands alone."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <p>Hello<br>World</p>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Spot the void",
        target: "<p>Line one</p><p>Line two</p>",
        instructions: "No example this time. Add a <hr> between two paragraphs — a horizontal rule that draws a line across the page.",
        learning: "hr is another void element — a horizontal rule, the line that separates sections. Like br and img, it has no closing tag. The rule: if a tag can't wrap content, it doesn't close.",
        example: "<hr>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <p>Line one</p>\n  <p>Line two</p>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var hr = document.querySelector('hr');\n    if (!hr) return { passed: false, message: 'Add a <hr> between the paragraphs.' };\n    return { passed: true, message: 'hr separates the sections — a void element.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "hr = horizontal rule.",
          "One <hr> between the two <p> tags.",
          "No closing tag."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <p>Line one</p>\n  <hr>\n  <p>Line two</p>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Void hunt",
      prompt: "Build a page with a heading, two paragraphs separated by a horizontal rule, and an image below them. Use at least three different void elements.",
      target: "<h1>Void City</h1><p>Above the line.</p><hr><p>Below the line.</p><img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='70'%3E%3Crect width='120' height='70' fill='%234f8ff7'/%3E%3C/svg%3E\" alt=\"A picture\">",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var voids = document.querySelectorAll('br, hr, img');\n    if (voids.length < 3) return { passed: false, message: 'Use at least three void elements (br, hr, img, input...).' };\n    var hr = document.querySelector('hr');\n    if (!hr) return { passed: false, message: 'Include a <hr>.' };\n    var img = document.querySelector('img');\n    if (!img || !img.getAttribute('alt')) return { passed: false, message: 'Include an <img> with alt.' };\n    return { passed: true, message: 'Void elements — you can spot them anywhere now.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "br, hr, img are all void.",
        "Every img needs alt.",
        "Combine at least three."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Void City</h1>\n  <p>Above the line.</p>\n  <hr>\n  <p>Below the line.<br>An extra line.</p>\n  <img src=\"image.jpg\" alt=\"A picture\">\n</body>\n</html>",
      unlock: "HTML Foundations"
    },
    unlock: "HTML Foundations"
  },

  {
    id: "web-formatting",
    num: 11,
    title: "Text Formatting",
    tagline: "Bold, italic, important, struck.",
    skill: "HTML",
    xp: 120,
    type: "html",
    icon: '<path d="M4 20l6-16h4l6 16M6 12h12"/>',
    meta: { kind: "normal", series: "w2-toolbox", order: 6 },
    briefing: {
      objective: "Style words inside a sentence with formatting tags.",
      body: "Formatting tags change how words look and — more importantly — what they mean. Look at the target: one word is bold, one is italic, one is important, one is struck through. Each is its own little tag."
    },
    challenges: [
      {
        id: "ch1",
        title: "Important and emphasized",
        target: "<p>This is <strong>important</strong> and this is <em>emphasized</em>.</p>",
        instructions: "Make the target: the word \"important\" should be strongly emphasized, and \"emphasized\" should be emphasized in italics. Use strong and em.",
        learning: "<strong>important</strong> — strong means strong importance; browsers show it bold.\n<em>emphasized</em> — em means emphasis; browsers show it italic.\n\nstrong is NOT a style — it's a meaning. The browser decides how to show it.",
        example: "<p>This is <strong>important</strong>.</p>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <p>This is important and this is emphasized.</p>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var strong = document.querySelector('strong');\n    if (!strong || !strong.textContent.trim()) return { passed: false, message: 'Wrap \"important\" in <strong> tags.' };\n    var em = document.querySelector('em');\n    if (!em || !em.textContent.trim()) return { passed: false, message: 'Wrap \"emphasized\" in <em> tags.' };\n    return { passed: true, message: 'strong for importance, em for emphasis.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "<strong>important</strong>",
          "<em>emphasized</em>",
          "Both wrap just the word."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <p>This is <strong>important</strong> and this is <em>emphasized</em>.</p>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Bold, italic, struck",
        target: "<p><b>Bold</b> and <i>italic</i> and <s>deleted</s>.</p>",
        instructions: "Make the target: \"Bold\" in b, \"italic\" in i, and \"deleted\" in s (struck through).",
        learning: "<b> — stylistic bold, no extra meaning.\n<i> — alternate voice, often italic.\n<s> — content that's no longer accurate; the browser strikes it through.\n\nQuick map: b = bold, i = italic, strong = strong importance, em = emphasis, s = strikethrough.",
        example: "<b>Bold</b>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <p>Bold and italic and deleted.</p>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var b = document.querySelector('b');\n    if (!b) return { passed: false, message: 'Wrap \"Bold\" in <b> tags.' };\n    var i = document.querySelector('i');\n    if (!i) return { passed: false, message: 'Wrap \"italic\" in <i> tags.' };\n    var s = document.querySelector('s');\n    if (!s) return { passed: false, message: 'Wrap \"deleted\" in <s> tags.' };\n    return { passed: true, message: 'b, i and s — the styling trio.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "<b>Bold</b>",
          "<i>italic</i>",
          "<s>deleted</s>"
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <p><b>Bold</b> and <i>italic</i> and <s>deleted</s>.</p>\n</body>\n</html>"
      }
    ],
    build: {
      title: "A meaningful sentence",
      prompt: "Write one sentence that uses at least four formatting tags: strong, em, and any two of b, i, s. Make it a real sentence about your page.",
      target: "<p>This is <strong>strong</strong>, <em>em</em>, <b>b</b> and <s>s</s>.</p>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var count = document.querySelectorAll('strong, em, b, i, s').length;\n    if (count < 4) return { passed: false, message: 'Use at least four formatting tags in one sentence.' };\n    var strong = document.querySelector('strong');\n    var em = document.querySelector('em');\n    if (!strong || !em) return { passed: false, message: 'Must include strong and em.' };\n    return { passed: true, message: 'Formatting mastered — meaning, not just style.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "Pick 4 tags from strong, em, b, i, s.",
        "Write a real sentence.",
        "strong and em are required."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <p>This page is <strong>important</strong> to me and <em>truly</em> <b>mine</b> — <s>copying</s> is over.</p>\n</body>\n</html>",
      unlock: "HTML Foundations"
    },
    unlock: "HTML Foundations"
  },

  {
    id: "web-sup-sub",
    num: 12,
    title: "Superscript & Subscript",
    tagline: "x² and H₂O the proper way.",
    skill: "HTML",
    xp: 110,
    type: "html",
    icon: '<path d="M4 20V4M4 4h6M4 8h4M4 12h2M14 4l6 8M20 4l-6 8"/>',
    meta: { kind: "normal", series: "w2-toolbox", order: 7 },
    briefing: {
      objective: "Write superscripts and subscripts with sup and sub.",
      body: "Math and chemistry look wrong when the 2 in x² or the 2 in H₂O sits on the same line as the letters. Look at the targets: the 2 is raised in E = mc² and lowered in H₂O. Two tiny tags do this: sup and sub."
    },
    challenges: [
      {
        id: "ch1",
        title: "E = mc²",
        target: "<p>E = mc<sup>2</sup></p>",
        instructions: "Write the famous equation E = mc² with the 2 raised as a superscript.",
        learning: "E = mc<sup>2</sup>\n\nsup means superscript — text raised above the line, like exponents in math.",
        example: "E = mc<sup>2</sup>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <p>E = mc2</p>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var sup = document.querySelector('sup');\n    if (!sup) return { passed: false, message: 'Wrap the 2 in <sup> tags.' };\n    if (!sup.textContent.trim()) return { passed: false, message: 'The superscript needs content (the 2).' };\n    return { passed: true, message: 'mc² — the exponent is raised!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "<sup>2</sup>",
          "Raised text above the line.",
          "Put it right after the c."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <p>E = mc<sup>2</sup></p>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "H₂O",
        target: "<p>H<sub>2</sub>O</p>",
        instructions: "Write water — H₂O — with the 2 lowered as a subscript.",
        learning: "H<sub>2</sub>O\n\nsub means subscript — text lowered below the line, like numbers in chemical formulas.",
        example: "H<sub>2</sub>O",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <p>H2O</p>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var sub = document.querySelector('sub');\n    if (!sub) return { passed: false, message: 'Wrap the 2 in <sub> tags.' };\n    if (!sub.textContent.trim()) return { passed: false, message: 'The subscript needs content (the 2).' };\n    return { passed: true, message: 'H₂O — the subscript is lowered!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "<sub>2</sub>",
          "Lowered text below the line.",
          "Put it right after the H."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <p>H<sub>2</sub>O</p>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Formula wall",
      prompt: "Build a page that shows BOTH formulas correctly: E = mc² and H₂O, each in its own paragraph.",
      target: "<p>E = mc<sup>2</sup></p><p>H<sub>2</sub>O</p>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var sup = document.querySelector('sup');\n    var sub = document.querySelector('sub');\n    if (!sup || !sub) return { passed: false, message: 'Use both <sup> and <sub>.' };\n    return { passed: true, message: 'Math and chemistry done properly!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "One paragraph with sup, one with sub.",
        "E = mc<sup>2</sup> and H<sub>2</sub>O.",
        "Both tags on the same page."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <p>E = mc<sup>2</sup></p>\n  <p>H<sub>2</sub>O</p>\n</body>\n</html>",
      unlock: "HTML Foundations"
    },
    unlock: "HTML Foundations"
  },

  {
    id: "web-line-breaks",
    num: 13,
    title: "Line Breaks",
    tagline: "Multi-line addresses and hr dividers.",
    skill: "HTML",
    xp: 110,
    type: "html",
    icon: '<path d="M6 4v6M6 10h8v6M6 16h4M6 4l4 0M16 8v4M16 12h2"/>',
    meta: { kind: "normal", series: "w2-toolbox", order: 8 },
    briefing: {
      objective: "Use br for line breaks and hr for dividers.",
      body: "An address always spans two or three lines: your name, your street, your city. That's exactly what br is for — breaking a line wherever you choose. This mission is about making text break where YOU want it to break."
    },
    challenges: [
      {
        id: "ch1",
        title: "An address",
        target: "<p>House 12, Street 5<br>Lahore, Pakistan</p>",
        instructions: "Make the target: a two-line address where the city starts on a new line. Use br.",
        learning: "An address is one paragraph broken into lines with <br>:\n\n<p>House 12, Street 5<br>Lahore, Pakistan</p>\n\nbr is a void element — a line break with no closing tag.",
        example: "<p>First line<br>Second line</p>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <p>House 12, Street 5\nLahore, Pakistan</p>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var brs = document.querySelectorAll('br');\n    if (brs.length === 0) return { passed: false, message: 'Add a <br> between the two lines.' };\n    return { passed: true, message: 'Two-line address with a clean break.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "br = break.",
          "One <br> where the line should split.",
          "Void element — no closing tag."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <p>House 12, Street 5<br>Lahore, Pakistan</p>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Contact card",
      prompt: "Build a contact card: your name as a heading, a two-line address (with br), and a horizontal rule separating the card from the rest.",
      target: "<h1>My Address</h1><p>House 12, Street 5<br>Lahore, Pakistan</p><hr><p>Email me anytime.</p>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var brs = document.querySelectorAll('br');\n    if (brs.length === 0) return { passed: false, message: 'Use <br> for the two-line address.' };\n    var hr = document.querySelector('hr');\n    if (!hr) return { passed: false, message: 'Add a <hr> divider.' };\n    return { passed: true, message: 'Breaks and dividers — text flows your way.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "h1 + two-line address with br.",
        "One hr separator.",
        "Anything after the hr is fine."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>My Address</h1>\n  <p>House 12, Street 5<br>Lahore, Pakistan</p>\n  <hr>\n  <p>Email me anytime.</p>\n</body>\n</html>",
      unlock: "HTML Foundations"
    },
    unlock: "HTML Foundations"
  },

  {
    id: "web-tables",
    num: 14,
    title: "Tables",
    tagline: "Rows and columns with table, tr, th, td.",
    skill: "HTML",
    xp: 140,
    type: "html",
    icon: '<path d="M3 5h18v14H3z"/><path d="M3 9h18M3 14h18M9 5v14"/>',
    meta: { kind: "normal", series: "w2-toolbox", order: 9 },
    briefing: {
      objective: "Build a table with table, tr, th and td.",
      body: "Lists are one column; tables are many. Look at the target: Name, Skill, Level — a grid of rows and columns. A table is made of four tags: table wraps it, tr is each row, th is a header cell, td is a data cell."
    },
    challenges: [
      {
        id: "ch1",
        title: "A skills table",
        target: "<table><tr><th>Name</th><th>Skill</th><th>Level</th></tr><tr><td>Ali</td><td>HTML</td><td>Beginner</td></tr></table>",
        instructions: "Build the target table: one header row (th cells: Name, Skill, Level) and one data row (td cells: Ali, HTML, Beginner).",
        learning: "<table>\n  <tr><th>Name</th><th>Skill</th></tr>\n  <tr><td>Ali</td><td>HTML</td></tr>\n</table>\n\ntable wraps the grid. tr = table row (one line). th = header cell (bold, top row). td = data cell (normal).\n\nTree: TABLE > TR > TH / TD.",
        example: "<table>\n  <tr>\n    <th>Name</th><th>Skill</th>\n  </tr>\n  <tr>\n    <td>Ali</td><td>HTML</td>\n  </tr>\n</table>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>My Skills</h1>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var table = document.querySelector('table');\n    if (!table) return { passed: false, message: 'Add a <table>.' };\n    var trs = table.querySelectorAll('tr');\n    if (trs.length < 2) return { passed: false, message: 'Add at least two rows: one header (th), one data (td).' };\n    var ths = table.querySelectorAll('th');\n    var tds = table.querySelectorAll('td');\n    if (ths.length < 2) return { passed: false, message: 'The header row needs <th> cells.' };\n    if (tds.length < 2) return { passed: false, message: 'The data row needs <td> cells.' };\n    return { passed: true, message: 'table > tr > th + td — a real grid!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "table wraps everything.",
          "Each row is a <tr>.",
          "Header cells are <th>, data cells are <td>."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>My Skills</h1>\n  <table>\n    <tr><th>Name</th><th>Skill</th><th>Level</th></tr>\n    <tr><td>Ali</td><td>HTML</td><td>Beginner</td></tr>\n  </table>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Add your row",
        target: "<table><tr><th>Name</th><th>Skill</th><th>Level</th></tr><tr><td>Ali</td><td>HTML</td><td>Beginner</td></tr><tr><td>You</td><td>CSS</td><td>Learning</td></tr></table>",
        instructions: "Add a second data row to the table — your own name, skill and level.",
        learning: "Adding a row is adding one more <tr> with the same number of <td> cells as the others. Tables stay clean when every row has the same column count.",
        example: "",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>My Skills</h1>\n  <table>\n    <tr><th>Name</th><th>Skill</th><th>Level</th></tr>\n    <tr><td>Ali</td><td>HTML</td><td>Beginner</td></tr>\n  </table>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var tds = document.querySelectorAll('td');\n    if (tds.length < 3) return { passed: false, message: 'Add a second row with three <td> cells.' };\n    return { passed: true, message: 'A second row — the table grows.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Copy the first data row.",
          "Same number of cells (3).",
          "Change the words to yours."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>My Skills</h1>\n  <table>\n    <tr><th>Name</th><th>Skill</th><th>Level</th></tr>\n    <tr><td>Ali</td><td>HTML</td><td>Beginner</td></tr>\n    <tr><td>You</td><td>CSS</td><td>Learning</td></tr>\n  </table>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Your own table",
      prompt: "Build a table that compares things you care about — skills, foods, games, whatever — with a header row and at least two data rows.",
      target: "<table><tr><th>Skill</th><th>Level</th></tr><tr><td>HTML</td><td>Learning</td></tr><tr><td>CSS</td><td>Learning</td></tr></table>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var trs = document.querySelectorAll('tr');\n    if (trs.length < 3) return { passed: false, message: 'One header row + at least two data rows.' };\n    var ths = document.querySelectorAll('th');\n    if (ths.length === 0) return { passed: false, message: 'Start with a <th> header row.' };\n    var tds = document.querySelectorAll('td');\n    if (tds.length < 4) return { passed: false, message: 'Fill in the data rows with <td> cells.' };\n    return { passed: true, message: 'Tables conquered!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "table > tr(header with th) + 2 rows of td.",
        "All rows have the same column count.",
        "Pick your own data."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Skills</h1>\n  <table>\n    <tr><th>Skill</th><th>Level</th></tr>\n    <tr><td>HTML</td><td>Learning</td></tr>\n    <tr><td>CSS</td><td>Learning</td></tr>\n  </table>\n</body>\n</html>",
      unlock: "HTML Foundations"
    },
    unlock: "HTML Foundations"
  },

  {
    id: "web-semantics",
    num: 15,
    title: "Semantic Structure",
    tagline: "Give your page meaning with header, nav, main and footer.",
    skill: "HTML",
    xp: 140,
    type: "html",
    icon: '<path d="M4 4h16v16H4z"/><path d="M4 9h16M4 14h10M4 19h16"/>',
    meta: { kind: "normal", series: "w2-toolbox", order: 10 },
    briefing: {
      objective: "Structure a page meaningfully with semantic tags.",
      body: "A heading and paragraphs work, but a real page has parts: a header on top, navigation, the main content, a footer below. Semantic tags say what each part IS. Look at the target — a page split into meaningful regions."
    },
    challenges: [
      {
        id: "ch1",
        title: "The big three",
        target: "<header>My Site</header><main><p>Hello!</p></main><footer>Made by me</footer>",
        instructions: "Build the target: a header at the top, main content in the middle, and a footer at the bottom.",
        learning: "<header> — the top band, usually the site name.\n<main> — the important content of this page.\n<footer> — the bottom band, often copyright or contact.\n\nThey work exactly like div, but they tell you (and search engines) what each region is.",
        example: "<header>\n  My Site\n</header>\n<main>\n  <p>Hello!</p>\n</main>\n<footer>\n  Made by me\n</footer>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var header = document.querySelector('header');\n    if (!header || !header.textContent.trim()) return { passed: false, message: 'Add a <header> with content.' };\n    var main = document.querySelector('main');\n    if (!main || !main.textContent.trim()) return { passed: false, message: 'Add a <main> region.' };\n    var footer = document.querySelector('footer');\n    if (!footer || !footer.textContent.trim()) return { passed: false, message: 'Add a <footer>.' };\n    return { passed: true, message: 'header + main + footer — a page with parts.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "header, main, footer.",
          "Each holds its own content.",
          "main is where the real content goes."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <header>My Site</header>\n  <main>\n    <p>Hello!</p>\n  </main>\n  <footer>Made by me</footer>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Navigation and sections",
        target: "<header>My Site</header><nav><a href=\"#\">Home</a></nav><main><section><h1>About</h1></section><article><p>My story.</p></article></main><footer>Footer</footer>",
        instructions: "Add a nav with a link, and inside main add a section with a heading and an article with a paragraph.",
        learning: "<nav> — navigation links.\n<section> — a themed group inside a page.\n<article> — a self-contained piece of content.\n\nThe browser doesn't force anything. Semantics are for humans and search engines: they make the structure readable.",
        example: "<nav><a href=\"#\">Home</a></nav>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <header>My Site</header>\n  <main>\n  </main>\n  <footer>Made by me</footer>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var nav = document.querySelector('nav');\n    if (!nav) return { passed: false, message: 'Add a <nav> with a link.' };\n    var section = document.querySelector('section');\n    if (!section) return { passed: false, message: 'Add a <section> inside main.' };\n    var article = document.querySelector('article');\n    if (!article) return { passed: false, message: 'Add an <article> with content.' };\n    return { passed: true, message: 'nav, section, article — a structured page.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "nav inside body, near the top.",
          "section and article live inside main.",
          "article holds one complete piece."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <header>My Site</header>\n  <nav><a href=\"#\">Home</a></nav>\n  <main>\n    <section><h1>About</h1></section>\n    <article><p>My story.</p></article>\n  </main>\n  <footer>Made by me</footer>\n</body>\n</html>"
      }
    ],
    build: {
      title: "A structured page",
      prompt: "Build a full page: header, nav with one link, main containing a section and an article, and a footer. Meaningful content in every region.",
      target: "<header>My Site</header><nav><a href=\"#\">Home</a></nav><main><section><h1>About Me</h1></section><article><p>I build things.</p></article></main><footer>© 2026</footer>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    if (!document.querySelector('header')) return { passed: false, message: 'Need a <header>.' };\n    if (!document.querySelector('nav')) return { passed: false, message: 'Need a <nav>.' };\n    if (!document.querySelector('main')) return { passed: false, message: 'Need a <main>.' };\n    if (!document.querySelector('section')) return { passed: false, message: 'Need a <section>.' };\n    if (!document.querySelector('article')) return { passed: false, message: 'Need an <article>.' };\n    if (!document.querySelector('footer')) return { passed: false, message: 'Need a <footer>.' };\n    return { passed: true, message: 'A complete semantic skeleton!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "header, nav, main, footer.",
        "section + article inside main.",
        "Every region has real content."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <header>My Site</header>\n  <nav><a href=\"#\">Home</a></nav>\n  <main>\n    <section><h1>About Me</h1></section>\n    <article><p>I build things.</p></article>\n  </main>\n  <footer>© 2026</footer>\n</body>\n</html>",
      unlock: "HTML Foundations"
    },
    unlock: "HTML Foundations"
  },

  {
    id: "web-metadata",
    num: 16,
    title: "HTML Metadata",
    tagline: "The invisible head that powers the web.",
    skill: "HTML",
    xp: 130,
    type: "html",
    icon: '<path d="M3 5h18v14H3z"/><path d="M7 9h.01M10 9h.01M7 13h6M7 16h3"/>',
    meta: { kind: "normal", series: "w2-toolbox", order: 11 },
    briefing: {
      objective: "Write the head: title, meta and link.",
      body: "The body is the visible page. The head is the part nobody sees — but everyone feels. The tab title, the description search engines show, the little icon in the tab, and how the page fits your phone: all of it lives in the head. This is where SEO is born."
    },
    challenges: [
      {
        id: "ch1",
        title: "The page title",
        target: "A tab that reads: My Awesome Page",
        instructions: "Put a title inside the head: \"My Awesome Page\". This is the text shown in the browser tab.",
        learning: "<head>\n  <title>My Awesome Page</title>\n</head>\n\ntitle sets the tab text and the headline search engines use. It's the name of your page to the whole internet.",
        example: "<head>\n  <title>My Awesome Page</title>\n</head>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Hello</h1>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '').toLowerCase();\n    if (src.indexOf('<title>') === -1 || src.indexOf('</title>') === -1) return { passed: false, message: 'Add a <title>...</title> inside the head.' };\n    if (src.indexOf('my awesome page') === -1) return { passed: false, message: 'The title should say \"My Awesome Page\".' };\n    return { passed: true, message: 'The tab now has a name.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "<title> lives inside <head>.",
          "It closes like normal tags.",
          "Write \"My Awesome Page\"."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Awesome Page</title>\n</head>\n<body>\n  <h1>Hello</h1>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Viewport & description",
        target: "A phone-friendly page with a description",
        instructions: "Add two meta tags to the head: one named viewport that says width=device-width, initial-scale=1, and one named description with your own sentence.",
        learning: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<meta name=\"description\" content=\"A short description of the page\">\n\nviewport makes the page scale correctly on phones — without it, mobile sites look zoomed out. description is the snippet search engines show under your link.",
        example: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Awesome Page</title>\n</head>\n<body>\n  <h1>Hello</h1>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '').toLowerCase();\n    if (src.indexOf('name=\"viewport\"') === -1) return { passed: false, message: 'Add <meta name=\"viewport\"> for phones.' };\n    if (src.indexOf('width=device-width') === -1) return { passed: false, message: 'The viewport needs width=device-width.' };\n    if (src.indexOf('name=\"description\"') === -1) return { passed: false, message: 'Add <meta name=\"description\">.' };\n    return { passed: true, message: 'A phone-ready head with a description.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Both metas live inside <head>.",
          "viewport fixes mobile scaling.",
          "description is the search snippet."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Awesome Page</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <meta name=\"description\" content=\"A page about my learning journey.\">\n</head>\n<body>\n  <h1>Hello</h1>\n</body>\n</html>"
      }
    ],
    build: {
      title: "A complete head",
      prompt: "Build a full head: title, viewport meta, description meta, and a favicon link (link with rel=\"icon\" pointing to any href).",
      target: "A head with title, viewport, description and icon",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Hello</h1>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '').toLowerCase();\n    if (src.indexOf('<title>') === -1) return { passed: false, message: 'Add a <title>.' };\n    if (src.indexOf('name=\"viewport\"') === -1) return { passed: false, message: 'Add the viewport meta.' };\n    if (src.indexOf('name=\"description\"') === -1) return { passed: false, message: 'Add the description meta.' };\n    if (src.indexOf('rel=\"icon\"') === -1 && src.indexOf(\"rel='icon'\") === -1) return { passed: false, message: 'Add a favicon: <link rel=\"icon\" href=\"...\">.' };\n    return { passed: true, message: 'The head is production-ready — this is how real pages start.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "title + viewport + description + favicon link.",
        "Favicon: <link rel=\"icon\" href=\"icon.png\">",
        "All inside <head>."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Awesome Page</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <meta name=\"description\" content=\"A page about my learning journey.\">\n  <link rel=\"icon\" href=\"icon.png\">\n</head>\n<body>\n  <h1>Hello</h1>\n</body>\n</html>",
      unlock: "HTML Foundations"
    },
    unlock: "HTML Foundations"
  },

  {
    id: "web-profile-boss",
    num: 17,
    title: "Build a Profile",
    tagline: "The boss: every HTML tool at once.",
    skill: "HTML",
    xp: 220,
    type: "html",
    icon: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
    meta: { kind: "boss", series: "w2-toolbox", order: 12, focusLock: true, hintCap: 1 },
    briefing: {
      objective: "Build a complete profile page using everything you learned.",
      body: "The boss of the toolbox. Build a profile page that uses: a heading, paragraphs, a list, an image, a link, text formatting, and semantic structure. No step-by-step. Make it feel like a real person's page — yours."
    },
    challenges: [
      {
        id: "ch1",
        title: "Profile parts",
        target: "<header><h1>Your Name</h1></header><main><p>About me: <strong>builder</strong>.</p><img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90'%3E%3Ccircle cx='45' cy='45' r='42' fill='%234f8ff7'/%3E%3C/svg%3E\" alt=\"My picture\"><h2>Skills</h2><ul><li>HTML</li><li>CSS</li></ul><p>Find me at <a href=\"#\">my page</a></p></main>",
        instructions: "Build the profile skeleton: a header with your name, a main section with a paragraph about you, an image of you (any src), a list of two skills, and a link.",
        learning: "Combine what you know: header, h1, p, img with alt, h2, ul > li, a with href. This is composition — taking small tags and building something bigger than any of them.",
        example: "",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Profile</title>\n</head>\n<body>\n</body>\n</html>",
        check: "(function(){\n  try {\n    if (!document.querySelector('header') || !document.querySelector('main')) return { passed: false, message: 'Use <header> and <main>.' };\n    var h1 = document.querySelector('h1');\n    if (!h1 || !h1.textContent.trim()) return { passed: false, message: 'Your name as an <h1>.' };\n    var img = document.querySelector('img');\n    if (!img || !img.getAttribute('alt')) return { passed: false, message: 'An <img> with alt.' };\n    if (document.querySelectorAll('li').length < 2) return { passed: false, message: 'A <ul> with at least two skills.' };\n    var a = document.querySelector('a');\n    if (!a || !a.getAttribute('href')) return { passed: false, message: 'A link with href.' };\n    var strong = document.querySelector('strong');\n    var em = document.querySelector('em');\n    if (!strong && !em) return { passed: false, message: 'Use at least one formatting tag (strong or em).' };\n    return { passed: true, message: 'Every tool is in the page.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Check every requirement one at a time.",
          "header, main, h1, img+alt, ul, a, strong/em.",
          "One hint only — this is the boss."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Profile</title>\n</head>\n<body>\n  <header><h1>Your Name</h1></header>\n  <main>\n    <p>About me: <strong>builder</strong>.</p>\n    <img src=\"photo.jpg\" alt=\"My picture\">\n    <h2>Skills</h2>\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n    </ul>\n    <p>Find me at <a href=\"#\">my page</a></p>\n  </main>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Your full profile",
      prompt: "Complete the profile boss: header, nav, main (with section and article), an image, a list, a link, formatting, and a footer. Make every word about you.",
      target: "A complete, structured profile page about you",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Profile</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var need = { header: 'header', nav: 'nav', main: 'main', footer: 'footer', section: 'section', article: 'article' };\n    for (var k in need) { if (!document.querySelector(need[k])) return { passed: false, message: 'Missing <' + need[k] + '>.' }; }\n    if (document.querySelectorAll('li').length < 3) return { passed: false, message: 'A list with at least three items.' };\n    if (!document.querySelector('img') || !document.querySelector('img').getAttribute('alt')) return { passed: false, message: 'An image with alt.' };\n    if (!document.querySelector('a')) return { passed: false, message: 'A link.' };\n    if (!document.querySelector('strong') && !document.querySelector('em')) return { passed: false, message: 'A formatting tag.' };\n    if (!document.querySelector('h1')) return { passed: false, message: 'A main heading.' };\n    return { passed: true, message: 'BOSS DOWN — a complete profile built from small tools.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "Structure: header, nav, main(section+article), footer.",
        "Don't forget img+alt, list, link, formatting.",
        "Make it real — this page is yours."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Profile</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n<body>\n  <header><h1>Your Name</h1></header>\n  <nav><a href=\"#\">Home</a></nav>\n  <main>\n    <section><h2>About</h2><img src=\"photo.jpg\" alt=\"My picture\"><p>I am <strong>learning</strong> to build websites.</p></section>\n    <article><h2>My Skills</h2><ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul></article>\n  </main>\n  <footer><p>Find me at <a href=\"#\">my page</a></p></footer>\n</body>\n</html>",
      unlock: "HTML Foundations"
    },
    unlock: "HTML Foundations"
  }
]);

/* ============================================================
   SERIES 3 - FORMS
   Labels, inputs, buttons, selects and a real contact page.
   ============================================================ */
registerMissions([
  {
    id: "web-labels",
    num: 18,
    title: "Labels",
    tagline: "Name every field before you make it.",
    skill: "HTML",
    xp: 110,
    type: "html",
    icon: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    meta: { kind: "normal", series: "w3-forms", order: 1 },
    briefing: {
      objective: "Label form fields with the label tag.",
      body: "A form asks questions. But a blank box tells you nothing about what to type in it. That's the label's job — the small piece of text that names a field. Look at the target: \"Your name\" sits above a box. That text is a label, and it's a tag of its own."
    },
    challenges: [
      {
        id: "ch1",
        title: "Name this field",
        target: "<label>Your name</label><input type=\"text\" placeholder=\"Type here\">",
        instructions: "Give the input a label. The text should read \"Your name\".",
        learning: "<label>Your name</label>\n<input type=\"text\">\n\nlabel is the tag that names a field. It wraps the text people read before they type. Every good form starts with a label, then the box that matches it.",
        example: "<label>Your name</label>\n<input type=\"text\">",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Sign up</h1>\n  <input type=\"text\">\n</body>\n</html>",
        check: "(function(){\n  try {\n    var label = document.querySelector('label');\n    if (!label) return { passed: false, message: 'Add a <label> for the field.' };\n    if (!label.textContent.trim()) return { passed: false, message: 'Give the label some text — like \"Your name\".' };\n    var input = document.querySelector('input');\n    if (!input) return { passed: false, message: 'Keep the <input> box.' };\n    return { passed: true, message: 'A field with a name!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "<label>Your name</label>",
          "The label comes before the input.",
          "Labels make forms understandable."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Sign up</h1>\n  <label>Your name</label>\n  <input type=\"text\">\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Label the email",
        target: "<label>Your name</label><input type=\"text\" placeholder=\"Type here\"><label>Email</label><input type=\"text\" placeholder=\"Type here\">",
        instructions: "Add a second label — \"Email\" — above a second input box.",
        learning: "Every box gets its own label. Label says what it is, input is where the answer goes. Two fields, two labels — a form is a list of labelled boxes.",
        example: "",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Sign up</h1>\n  <label>Your name</label>\n  <input type=\"text\">\n</body>\n</html>",
        check: "(function(){\n  try {\n    var labels = document.querySelectorAll('label');\n    if (labels.length < 2) return { passed: false, message: 'Add a second <label>.' };\n    for (var i = 0; i < labels.length; i++) { if (!labels[i].textContent.trim()) return { passed: false, message: 'Every label needs text.' }; }\n    var inputs = document.querySelectorAll('input');\n    if (inputs.length < 2) return { passed: false, message: 'Add a second <input> to match.' };\n    return { passed: true, message: 'Two fields, two labels.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "One more label: Email.",
          "One more input box below it.",
          "Label first, box second."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Sign up</h1>\n  <label>Your name</label>\n  <input type=\"text\">\n  <label>Email</label>\n  <input type=\"text\">\n</body>\n</html>"
      }
    ],
    build: {
      title: "Your own form start",
      prompt: "Build the start of a form: a heading, two labels and two input boxes. Any fields you like — name and email, or username and password.",
      target: "<h1>Join us</h1><label>Name</label><input type=\"text\" placeholder=\"Type here\"><label>Email</label><input type=\"text\" placeholder=\"Type here\">",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var labels = document.querySelectorAll('label');\n    if (labels.length < 2) return { passed: false, message: 'Add at least two <label> tags.' };\n    var inputs = document.querySelectorAll('input');\n    if (inputs.length < 2) return { passed: false, message: 'Add at least two <input> boxes.' };\n    for (var i = 0; i < labels.length; i++) { if (!labels[i].textContent.trim()) return { passed: false, message: 'Every label needs text.' }; }\n    return { passed: true, message: 'Labels and inputs — a form is born!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "h1 + two label/input pairs.",
        "Every input gets its own label.",
        "Your words, your fields."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Join us</h1>\n  <label>Name</label>\n  <input type=\"text\">\n  <label>Email</label>\n  <input type=\"text\">\n</body>\n</html>",
      unlock: "HTML Foundations"
    },
    unlock: "HTML Foundations"
  },

  {
    id: "web-inputs",
    num: 19,
    title: "Inputs",
    tagline: "The boxes where answers go.",
    skill: "HTML",
    xp: 120,
    type: "html",
    icon: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M7 14h4"/>',
    meta: { kind: "normal", series: "w3-forms", order: 2 },
    briefing: {
      objective: "Create input boxes and choose their type.",
      body: "Labels ask the question; inputs collect the answer. An input is a void element — no closing tag — and its type attribute decides what kind of box it is: text, email, password. Look at the target: two boxes, and each knows what it's for."
    },
    challenges: [
      {
        id: "ch1",
        title: "A box to type in",
        target: "<label>Your name</label><input type=\"text\" placeholder=\"Your name\">",
        instructions: "Add an input box under the label. Give it a placeholder — the grey hint text that disappears when you type.",
        learning: "<input type=\"text\" placeholder=\"Your name\">\n\ninput is the box where people type. type=\"text\" is the plain kind. placeholder is the grey hint inside the empty box. And input is a void element — it stands alone, no closing tag.",
        example: "<input type=\"text\" placeholder=\"Your name\">",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Contact</h1>\n  <label>Your name</label>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var input = document.querySelector('input');\n    if (!input) return { passed: false, message: 'Add an <input> box.' };\n    if (!input.getAttribute('placeholder')) return { passed: false, message: 'Give the input a placeholder — the grey hint text.' };\n    return { passed: true, message: 'An input with a placeholder.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "<input type=\"text\" placeholder=\"...\">",
          "placeholder is the grey hint.",
          "No closing tag."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Contact</h1>\n  <label>Your name</label>\n  <input type=\"text\" placeholder=\"Your name\">\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "An email box",
        target: "<label>Email</label><input type=\"email\" placeholder=\"you@example.com\">",
        instructions: "Add a second input, but this time with type=\"email\" so the browser checks it's a real email address.",
        learning: "type changes the box's behaviour. type=\"email\" still looks like a box, but the browser knows it should hold an email — it can even validate it. Choosing the right type is your first step toward forms that check themselves.",
        example: "<input type=\"email\" placeholder=\"you@example.com\">",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Contact</h1>\n  <label>Your name</label>\n  <input type=\"text\" placeholder=\"Your name\">\n</body>\n</html>",
        check: "(function(){\n  try {\n    var inputs = document.querySelectorAll('input');\n    if (inputs.length < 2) return { passed: false, message: 'Add a second <input>.' };\n    var hasEmail = false;\n    for (var i = 0; i < inputs.length; i++) { if (inputs[i].getAttribute('type') === 'email') { hasEmail = true; } }\n    if (!hasEmail) return { passed: false, message: 'Give one input type=\"email\".' };\n    return { passed: true, message: 'Two inputs — one knows that one is an email.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Add a second input.",
          "type=\"email\" makes it an email box.",
          "A placeholder like you@example.com."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Contact</h1>\n  <label>Your name</label>\n  <input type=\"text\" placeholder=\"Your name\">\n  <label>Email</label>\n  <input type=\"email\" placeholder=\"you@example.com\">\n</body>\n</html>"
      }
    ],
    build: {
      title: "Name, email, message",
      prompt: "Build the three essential fields of any form: a name input, an email input, and a textarea for a longer message. Each with a label and a placeholder.",
      target: "<label>Name</label><input type=\"text\" placeholder=\"Your name\"><label>Email</label><input type=\"email\" placeholder=\"you@example.com\"><label>Message</label><textarea rows=\"3\"></textarea>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var inputs = document.querySelectorAll('input');\n    if (inputs.length < 2) return { passed: false, message: 'Add at least two <input> boxes.' };\n    var hasEmail = false;\n    for (var i = 0; i < inputs.length; i++) { if (inputs[i].getAttribute('type') === 'email') { hasEmail = true; } }\n    if (!hasEmail) return { passed: false, message: 'Include an email input (type=\"email\").' };\n    var ta = document.querySelector('textarea');\n    if (!ta) return { passed: false, message: 'Add a <textarea> for the longer message.' };\n    return { passed: true, message: 'Name, email and message — a real form core.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "text input, email input, textarea.",
        "textarea handles long text.",
        "Placeholders guide the typist."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <label>Name</label>\n  <input type=\"text\" placeholder=\"Your name\">\n  <label>Email</label>\n  <input type=\"email\" placeholder=\"you@example.com\">\n  <label>Message</label>\n  <textarea rows=\"3\"></textarea>\n</body>\n</html>",
      unlock: "HTML Foundations"
    },
    unlock: "HTML Foundations"
  },

  {
    id: "web-buttons",
    num: 20,
    title: "Buttons",
    tagline: "The thing people actually press.",
    skill: "HTML",
    xp: 120,
    type: "html",
    icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v3M17 4v3"/>',
    meta: { kind: "normal", series: "w3-forms", order: 3 },
    briefing: {
      objective: "Add buttons and give them a type.",
      body: "A form without a button is a question nobody can answer. The button is what people press to send. In the target, \"Send message\" sits at the end of the form. It's a button tag, and its type decides what happens when it's pressed."
    },
    challenges: [
      {
        id: "ch1",
        title: "Send message",
        target: "<button>Send message</button>",
        instructions: "Add a button that says \"Send message\".",
        learning: "<button>Send message</button>\n\nbutton is a pair of tags, and the text between them is what people see on the button. A button with no text is just an empty rectangle nobody understands — always label it.",
        example: "<button>Send message</button>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <label>Your name</label>\n  <input type=\"text\">\n</body>\n</html>",
        check: "(function(){\n  try {\n    var btn = document.querySelector('button');\n    if (!btn) return { passed: false, message: 'Add a <button> tag.' };\n    if (!btn.textContent.trim()) return { passed: false, message: 'Give the button text people can read.' };\n    return { passed: true, message: 'A clickable button with a label.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "<button>Send message</button>",
          "The text lives between the tags.",
          "Every button needs a label."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <label>Your name</label>\n  <input type=\"text\">\n  <button>Send message</button>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "The submit type",
        target: "<button type=\"submit\">Send</button>",
        instructions: "Add a second button with type=\"submit\" — the one that actually submits a form.",
        learning: "button has a type attribute too. type=\"submit\" tells the browser this button sends the form. type=\"button\" just clicks. In a real form, the submit button is what delivers the answers.",
        example: "<button type=\"submit\">Send</button>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <button>Cancel</button>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var btns = document.querySelectorAll('button');\n    if (btns.length < 2) return { passed: false, message: 'Add a second <button>.' };\n    var hasSubmit = false;\n    for (var i = 0; i < btns.length; i++) { if (btns[i].getAttribute('type') === 'submit') { hasSubmit = true; } }\n    if (!hasSubmit) return { passed: false, message: 'Give one button type=\"submit\".' };\n    return { passed: true, message: 'A cancel button and a submit button.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Keep the first button.",
          "Add <button type=\"submit\">Send</button>.",
          "type decides what the button does."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <button>Cancel</button>\n  <button type=\"submit\">Send</button>\n</body>\n</html>"
      }
    ],
    build: {
      title: "A form that can act",
      prompt: "Build a small form: a label, an input, and a submit button. Your field, your button text.",
      target: "<label>Your message</label><input type=\"text\"><button type=\"submit\">Send</button>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var btn = document.querySelector('button');\n    if (!btn || !btn.textContent.trim()) return { passed: false, message: 'Add a button with text.' };\n    var input = document.querySelector('input');\n    if (!input) return { passed: false, message: 'Keep an input the button works with.' };\n    return { passed: true, message: 'A button ready to send a field.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "label + input + button.",
        "Give the button clear text.",
        "type=\"submit\" makes it the sender."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <label>Your message</label>\n  <input type=\"text\">\n  <button type=\"submit\">Send</button>\n</body>\n</html>",
      unlock: "HTML Foundations"
    },
    unlock: "HTML Foundations"
  },

  {
    id: "web-select",
    num: 21,
    title: "Select & Options",
    tagline: "Drop-downs that limit the choices.",
    skill: "HTML",
    xp: 110,
    type: "html",
    icon: '<path d="M3 6h13l4 4v11H3z"/><path d="M3 10h17"/>',
    meta: { kind: "normal", series: "w3-forms", order: 4 },
    briefing: {
      objective: "Build drop-down menus with select and option.",
      body: "Sometimes you don't want people typing a free answer — you want them to pick from a list. That's a drop-down. In the target, \"Country\" opens a list of choices. The dropdown is a select tag, and every choice inside it is an option."
    },
    challenges: [
      {
        id: "ch1",
        title: "Pick a country",
        target: "<label>Country</label><select><option>Morocco</option><option>Egypt</option><option>Brazil</option></select>",
        instructions: "Build the drop-down: a label \"Country\" and a select with three options: Morocco, Egypt, Brazil.",
        learning: "<select>\n  <option>Morocco</option>\n  <option>Egypt</option>\n  <option>Brazil</option>\n</select>\n\nselect wraps the whole dropdown. Each option is one choice inside it. The browser turns that list into a menu the visitor clicks open.",
        example: "<select>\n  <option>One</option>\n  <option>Two</option>\n</select>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Sign up</h1>\n  <label>Country</label>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var sel = document.querySelector('select');\n    if (!sel) return { passed: false, message: 'Add a <select> drop-down.' };\n    var opts = sel.querySelectorAll('option');\n    if (opts.length < 3) return { passed: false, message: 'Add at least three <option> choices.' };\n    for (var i = 0; i < opts.length; i++) { if (!opts[i].textContent.trim()) return { passed: false, message: 'Every option needs text.' }; }\n    return { passed: true, message: 'A drop-down with three real choices.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "select wraps the dropdown.",
          "Each choice is one <option>.",
          "Three options: Morocco, Egypt, Brazil."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Sign up</h1>\n  <label>Country</label>\n  <select>\n    <option>Morocco</option>\n    <option>Egypt</option>\n    <option>Brazil</option>\n  </select>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Add your own option",
        target: "<select><option>Beginner</option><option>Intermediate</option><option>Advanced</option><option>Expert</option></select>",
        instructions: "Extend the drop-down with a fourth option of your own — any level you like.",
        learning: "A drop-down is just a list. Growing it is one more <option> before </select>. The more choices you offer, the easier it is for people to answer quickly.",
        example: "",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <label>Level</label>\n  <select>\n    <option>Beginner</option>\n    <option>Intermediate</option>\n    <option>Advanced</option>\n  </select>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var sel = document.querySelector('select');\n    if (!sel) return { passed: false, message: 'Keep the <select>.' };\n    var opts = sel.querySelectorAll('option');\n    if (opts.length < 4) return { passed: false, message: 'Add a fourth <option>.' };\n    for (var i = 0; i < opts.length; i++) { if (!opts[i].textContent.trim()) return { passed: false, message: 'Every option needs text.' }; }\n    return { passed: true, message: 'A drop-down you extended on your own.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "One more <option> before </select>.",
          "Pick a level you care about.",
          "Like <option>Expert</option>"
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <label>Level</label>\n  <select>\n    <option>Beginner</option>\n    <option>Intermediate</option>\n    <option>Advanced</option>\n    <option>Expert</option>\n  </select>\n</body>\n</html>"
      }
    ],
    build: {
      title: "A form field with choices",
      prompt: "Build a small form: a label, an input, and a drop-down with at least three options. Any topic you like.",
      target: "<label>Your name</label><input type=\"text\"><label>How did you hear about us?</label><select><option>Social media</option><option>Friend</option><option>Search engine</option></select>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var sel = document.querySelector('select');\n    if (!sel) return { passed: false, message: 'Add a <select>.' };\n    var opts = sel.querySelectorAll('option');\n    if (opts.length < 3) return { passed: false, message: 'Add at least three options.' };\n    var input = document.querySelector('input');\n    if (!input) return { passed: false, message: 'Add an <input> next to it.' };\n    return { passed: true, message: 'A field where people pick instead of type.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "input + select with 3+ options.",
        "Every option needs text.",
        "Your topic, your choices."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <label>Your name</label>\n  <input type=\"text\">\n  <label>How did you hear about us?</label>\n  <select>\n    <option>Social media</option>\n    <option>Friend</option>\n    <option>Search engine</option>\n  </select>\n</body>\n</html>",
      unlock: "HTML Foundations"
    },
    unlock: "HTML Foundations"
  },

  {
    id: "web-build-form",
    num: 22,
    title: "Build a Form",
    tagline: "Bring the pieces together in a form tag.",
    skill: "HTML",
    xp: 130,
    type: "html",
    icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 13h8"/>',
    meta: { kind: "normal", series: "w3-forms", order: 5 },
    briefing: {
      objective: "Wrap all the pieces in a single form tag.",
      body: "You have labels, inputs, selects, buttons. Now they need a home. Everything you send lives inside one form tag — it's the container that tells the browser: this whole group is a single submission. Look at the target: every field sits inside one bordered form."
    },
    challenges: [
      {
        id: "ch1",
        title: "Wrap it",
        target: "<form><label>Your name</label><input type=\"text\" placeholder=\"Your name\"></form>",
        instructions: "Wrap the label and input inside a single <form> tag — open the form before them and close it after.",
        learning: "<form>\n  <label>Your name</label>\n  <input type=\"text\">\n</form>\n\nform is the container for a whole group of fields. Everything between the form tags is one submission. Forms can live anywhere on a page — this is where your fields finally belong together.",
        example: "<form>\n  <label>Your name</label>\n  <input type=\"text\">\n</form>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Contact me</h1>\n  <label>Your name</label>\n  <input type=\"text\" placeholder=\"Your name\">\n</body>\n</html>",
        check: "(function(){\n  try {\n    var form = document.querySelector('form');\n    if (!form) return { passed: false, message: 'Wrap everything in a <form> tag.' };\n    var label = form.querySelector('label');\n    var input = form.querySelector('input');\n    if (!label || !input) return { passed: false, message: 'The form needs a label and an input inside.' };\n    return { passed: true, message: 'A form container with a field inside.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "<form> opens, </form> closes.",
          "label and input go inside.",
          "The h1 stays outside."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Contact me</h1>\n  <form>\n    <label>Your name</label>\n    <input type=\"text\" placeholder=\"Your name\">\n  </form>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "The send button",
        target: "<form><label>Your name</label><input type=\"text\" placeholder=\"Your name\"><button type=\"submit\">Send</button></form>",
        instructions: "Add a submit button inside the form, right after the input.",
        learning: "The submit button belongs inside the form — that's what makes it submit. When someone presses it, the browser takes the whole form and sends it.",
        example: "",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Contact me</h1>\n  <form>\n    <label>Your name</label>\n    <input type=\"text\" placeholder=\"Your name\">\n  </form>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var form = document.querySelector('form');\n    if (!form) return { passed: false, message: 'Keep the <form>.' };\n    var btn = form.querySelector('button');\n    if (!btn) return { passed: false, message: 'Add a button inside the form.' };\n    var label = form.querySelector('label');\n    var input = form.querySelector('input');\n    if (!label || !input) return { passed: false, message: 'Keep the label and input inside too.' };\n    return { passed: true, message: 'Label, input and button — all inside the form.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Add <button type=\"submit\">Send</button>.",
          "It goes inside the form.",
          "Inside = after the input, before </form>."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Contact me</h1>\n  <form>\n    <label>Your name</label>\n    <input type=\"text\" placeholder=\"Your name\">\n    <button type=\"submit\">Send</button>\n  </form>\n</body>\n</html>"
      }
    ],
    build: {
      title: "A complete form",
      prompt: "Build a complete form: labels, a name input, an email input, a drop-down, a textarea for the message, and a submit button — all inside one form tag.",
      target: "<form><label>Name</label><input type=\"text\" placeholder=\"Your name\"><label>Email</label><input type=\"email\" placeholder=\"you@example.com\"><label>Topic</label><select><option>Question</option><option>Feedback</option></select><label>Message</label><textarea rows=\"3\"></textarea><button type=\"submit\">Send message</button></form>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Contact</h1>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var form = document.querySelector('form');\n    if (!form) return { passed: false, message: 'Wrap the form in a <form> tag.' };\n    if (form.querySelectorAll('label').length < 2) return { passed: false, message: 'Add at least two labels.' };\n    if (form.querySelectorAll('input').length < 2) return { passed: false, message: 'Add at least two inputs.' };\n    if (!form.querySelector('select')) return { passed: false, message: 'Add a select drop-down.' };\n    if (!form.querySelector('textarea')) return { passed: false, message: 'Add a textarea.' };\n    if (!form.querySelector('button')) return { passed: false, message: 'Add a submit button.' };\n    return { passed: true, message: 'A full form: labels, inputs, select, textarea, button.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "Two labels, two inputs, select, textarea, button.",
        "Everything inside <form>...</form>.",
        "Email input uses type=\"email\"."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Contact</h1>\n  <form>\n    <label>Name</label>\n    <input type=\"text\" placeholder=\"Your name\">\n    <label>Email</label>\n    <input type=\"email\" placeholder=\"you@example.com\">\n    <label>Topic</label>\n    <select>\n      <option>Question</option>\n      <option>Feedback</option>\n    </select>\n    <label>Message</label>\n    <textarea rows=\"3\"></textarea>\n    <button type=\"submit\">Send message</button>\n  </form>\n</body>\n</html>",
      unlock: "HTML Foundations"
    },
    unlock: "HTML Foundations"
  },

  {
    id: "web-contact-boss",
    num: 23,
    title: "Contact Page",
    tagline: "The boss: a real contact page people can use.",
    skill: "HTML",
    xp: 150,
    type: "html",
    icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 13h8"/>',
    meta: { kind: "boss", series: "w3-forms", order: 6, focusLock: true, hintCap: 1 },
    briefing: {
      objective: "Build a complete, working contact page from scratch.",
      body: "The boss of the Forms series. Build a contact page that a real visitor could use: a heading, a form with a name field, an email field, a topic drop-down, a message area, and a send button. No step-by-step. Make it feel like it belongs on a real website."
    },
    challenges: [
      {
        id: "ch1",
        title: "The contact form",
        target: "<h1>Get in touch</h1><form><label>Name</label><input type=\"text\" placeholder=\"Your name\"><label>Email</label><input type=\"email\" placeholder=\"you@example.com\"><label>Topic</label><select><option>Question</option><option>Feedback</option></select><label>Message</label><textarea rows=\"4\"></textarea><button type=\"submit\">Send message</button></form>",
        instructions: "Build the complete contact form: a heading, and inside one form tag — a name input, an email input, a drop-down, a textarea, and a submit button. Everything labelled.",
        learning: "This is the real thing — every field labelled, every input the right type, all inside one form. A contact page is just this: a heading, a form, and a button that sends it.",
        example: "",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var form = document.querySelector('form');\n    if (!form) return { passed: false, message: 'Build a <form> for the contact page.' };\n    if (form.querySelectorAll('label').length < 2) return { passed: false, message: 'At least two labels.' };\n    if (form.querySelectorAll('input').length < 2) return { passed: false, message: 'At least two inputs.' };\n    if (!form.querySelector('select')) return { passed: false, message: 'A select drop-down.' };\n    if (!form.querySelector('textarea')) return { passed: false, message: 'A textarea for the message.' };\n    var btn = form.querySelector('button');\n    if (!btn || !btn.textContent.trim()) return { passed: false, message: 'A button with text.' };\n    if (!document.querySelector('h1')) return { passed: false, message: 'A heading for the page.' };\n    return { passed: true, message: 'The contact form is complete!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "One hint only — this is the boss.",
          "Label every field, wrap it all in <form>, finish with a submit button."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Get in touch</h1>\n  <form>\n    <label>Name</label>\n    <input type=\"text\" placeholder=\"Your name\">\n    <label>Email</label>\n    <input type=\"email\" placeholder=\"you@example.com\">\n    <label>Topic</label>\n    <select>\n      <option>Question</option>\n      <option>Feedback</option>\n    </select>\n    <label>Message</label>\n    <textarea rows=\"4\"></textarea>\n    <button type=\"submit\">Send message</button>\n  </form>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Your contact page",
      prompt: "Build your own contact page from scratch. It must include: a heading, a form with at least two labels, at least two inputs (one must be an email), a textarea, and a submit button. Everything about your site, your words.",
      target: "A complete, usable contact page",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Contact</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var form = document.querySelector('form');\n    if (!form) return { passed: false, message: 'A <form> must exist.' };\n    if (form.querySelectorAll('label').length < 2) return { passed: false, message: 'At least two labels.' };\n    if (form.querySelectorAll('input').length < 2) return { passed: false, message: 'At least two inputs.' };\n    var hasEmail = false;\n    var inputs = form.querySelectorAll('input');\n    for (var i = 0; i < inputs.length; i++) { if (inputs[i].getAttribute('type') === 'email') { hasEmail = true; } }\n    if (!hasEmail) return { passed: false, message: 'Include an email input.' };\n    if (!form.querySelector('textarea')) return { passed: false, message: 'A textarea for the message.' };\n    var btn = form.querySelector('button');\n    if (!btn || !btn.textContent.trim()) return { passed: false, message: 'A submit button with text.' };\n    if (!document.querySelector('h1')) return { passed: false, message: 'A heading for the page.' };\n    return { passed: true, message: 'BOSS DOWN — a real contact page!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "Label every field, choose the right input types.",
        "One email input, a textarea, a submit button.",
        "Make it real — this page could ship."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Contact</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n<body>\n  <h1>Contact</h1>\n  <form>\n    <label>Name</label>\n    <input type=\"text\" placeholder=\"Your name\">\n    <label>Email</label>\n    <input type=\"email\" placeholder=\"you@example.com\">\n    <label>Message</label>\n    <textarea rows=\"4\"></textarea>\n    <button type=\"submit\">Send message</button>\n  </form>\n</body>\n</html>",
      unlock: "HTML Foundations"
    },
    unlock: "HTML Foundations"
  }
]);

/* ============================================================
   SERIES 4 - CSS
   Style tag, inline, external, colors, text, borders,
   spacing, box model, flexbox, responsive. Ends with the
   Rebuild a Design boss.
   ============================================================ */
registerMissions([
  {
    id: "web-style-tag",
    num: 24,
    title: "The Style Tag",
    tagline: "Your first CSS: rules that change how things look.",
    skill: "CSS",
    xp: 110,
    type: "html",
    icon: '<circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"/><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor"/><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor"/><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
    meta: { kind: "normal", series: "w4-css", order: 1 },
    briefing: {
      objective: "Write your first CSS rule inside a style tag.",
      body: "HTML decides what a page says. CSS decides how it looks. In the target, the heading is green — that green came from a style rule. CSS lives in a style tag, and a rule is simple: pick what to style (a selector), then say how to change it."
    },
    challenges: [
      {
        id: "ch1",
        title: "Green heading",
        target: "<h1 style=\"color: rgb(48, 208, 92)\">Hello, CSS!</h1>",
        instructions: "Make the h1 heading green (#30d05c). Add a style tag in the head and write a rule that targets h1.",
        learning: "<style>\n  h1 { color: #30d05c; }\n</style>\n\nA CSS rule has two parts. The selector (h1) says which elements to style. The declaration (color: #30d05c;) says how — color is the property, the value is the green. Rules go inside a style tag, which lives in the head.",
        example: "<style>\n  h1 { color: #30d05c; }\n</style>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Styled</title>\n</head>\n<body>\n  <h1>Hello, CSS!</h1>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var h1 = document.querySelector('h1');\n    if (!h1) return { passed: false, message: 'Keep your <h1> heading.' };\n    var color = window.getComputedStyle(h1).color || '';\n    var rgb = color.match(/\\d+/g);\n    if (!rgb) return { passed: false, message: 'Could not read the heading color.' };\n    var isGreen = Number(rgb[1]) > 150 && Number(rgb[0]) < 130;\n    if (!isGreen) return { passed: false, message: 'Set the h1 color to green (#30d05c).' };\n    return { passed: true, message: 'Your first CSS rule! The heading is green.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Add <style> ... </style> in the head.",
          "h1 { color: #30d05c; }",
          "selector { property: value; }"
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Styled</title>\n  <style>\n    h1 { color: #30d05c; }\n  </style>\n</head>\n<body>\n  <h1>Hello, CSS!</h1>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Style the paragraph",
        target: "<h1>Hello, CSS!</h1><p style=\"color: rgb(31, 111, 235)\">Paragraph text.</p>",
        instructions: "Add a second rule that makes the paragraph blue (#1f6feb). Keep the green heading.",
        learning: "One style tag can hold many rules. Add a second rule: p { color: #1f6feb; }. Each rule starts with its own selector. CSS grows by adding rules, not by repeating style tags.",
        example: "p { color: #1f6feb; }",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Styled</title>\n  <style>\n    h1 { color: #30d05c; }\n  </style>\n</head>\n<body>\n  <h1>Hello, CSS!</h1>\n  <p>Paragraph text.</p>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var p = document.querySelector('p');\n    if (!p) return { passed: false, message: 'Keep a <p> paragraph.' };\n    var color = window.getComputedStyle(p).color || '';\n    var rgb = color.match(/\\d+/g);\n    if (!rgb) return { passed: false, message: 'Could not read the paragraph color.' };\n    var isBlue = Number(rgb[2]) > 150 && Number(rgb[0]) < 120;\n    if (!isBlue) return { passed: false, message: 'Set the paragraph color to blue (#1f6feb).' };\n    var h1 = document.querySelector('h1');\n    var hc = h1 ? (window.getComputedStyle(h1).color || '').match(/\\d+/g) : null;\n    if (!hc || Number(hc[1]) < 150) return { passed: false, message: 'Keep the h1 green too.' };\n    return { passed: true, message: 'Two rules, one style tag — colors everywhere!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Add p { color: #1f6feb; }",
          "Keep the h1 rule.",
          "Multiple rules in one style tag."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Styled</title>\n  <style>\n    h1 { color: #30d05c; }\n    p { color: #1f6feb; }\n  </style>\n</head>\n<body>\n  <h1>Hello, CSS!</h1>\n  <p>Paragraph text.</p>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Your first styled page",
      prompt: "Build a page with a heading, a paragraph, and a style tag that makes the heading green and the paragraph blue.",
      target: "<h1>My first CSS page</h1><p>Styled with a style tag.</p>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Styled</title>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var h1 = document.querySelector('h1');\n    if (!h1) return { passed: false, message: 'Add a heading.' };\n    var hc = (window.getComputedStyle(h1).color || '').match(/\\d+/g);\n    if (!hc || Number(hc[1]) < 150) return { passed: false, message: 'Make the h1 green (#30d05c).' };\n    var p = document.querySelector('p');\n    if (!p) return { passed: false, message: 'Add a paragraph.' };\n    var pc = (window.getComputedStyle(p).color || '').match(/\\d+/g);\n    if (!pc || Number(pc[2]) < 150) return { passed: false, message: 'Make the paragraph blue (#1f6feb).' };\n    return { passed: true, message: 'A styled page — the style tag is yours!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "One style tag, two rules.",
        "h1 green, p blue.",
        "Selector { property: value; }"
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Styled</title>\n  <style>\n    h1 { color: #30d05c; }\n    p { color: #1f6feb; }\n  </style>\n</head>\n<body>\n  <h1>My first CSS page</h1>\n  <p>Styled with a style tag.</p>\n</body>\n</html>",
      unlock: "CSS Foundations"
    },
    unlock: "CSS Foundations"
  },

  {
    id: "web-inline-css",
    num: 25,
    title: "Inline CSS",
    tagline: "Styling right on the tag itself.",
    skill: "CSS",
    xp: 110,
    type: "html",
    icon: '<path d="M4 7h16M4 12h16M4 17h16"/><circle cx="16" cy="12" r="3" fill="currentColor"/>',
    meta: { kind: "normal", series: "w4-css", order: 2 },
    briefing: {
      objective: "Style a single element with the style attribute.",
      body: "The style tag styles every matching element at once. But CSS can also live right on a tag, as a style attribute. Look at the target: the word \"Special\" is pink while the rest is normal. That pink came from the tag itself — inline CSS."
    },
    challenges: [
      {
        id: "ch1",
        title: "One pink word",
        target: "<p>This is <strong style=\"color: rgb(225, 48, 108)\">Special</strong> text.</p>",
        instructions: "Make the strong tag pink (#e1306c) using an inline style attribute — no style tag at all.",
        learning: "<strong style=\"color: #e1306c\">Special</strong>\n\nThe style attribute holds CSS right on the element: style=\"property: value;\". It only affects that one element — no selector needed. Inline CSS is quick, but you will soon see why separate rules are better for real sites.",
        example: "<p style=\"color: #e1306c\">Pink text</p>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Inline</title>\n</head>\n<body>\n  <p>This is <strong>Special</strong> text.</p>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var strong = document.querySelector('strong');\n    if (!strong) return { passed: false, message: 'Keep the <strong> tag.' };\n    var inline = strong.getAttribute('style') || '';\n    if (inline.indexOf('color') === -1) return { passed: false, message: 'Use a style attribute with color on the strong tag.' };\n    var color = window.getComputedStyle(strong).color || '';\n    var rgb = color.match(/\\d+/g);\n    if (!rgb || Number(rgb[0]) < 200) return { passed: false, message: 'Make it pink (#e1306c).' };\n    return { passed: true, message: 'Inline CSS — one element, one style.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Add style=\"color: #e1306c\" to the strong tag.",
          "No selector, no style tag.",
          "The attribute holds the rule."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Inline</title>\n</head>\n<body>\n  <p>This is <strong style=\"color: #e1306c\">Special</strong> text.</p>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Inline background",
        target: "<p style=\"background-color: rgb(255, 224, 178)\">Highlighted note</p>",
        instructions: "Give a paragraph a light background color (#ffe0b2) using an inline style attribute.",
        learning: "Inline CSS can set any property. background-color fills the area behind the text. On a single tag it is perfect for one-off tweaks.",
        example: "<p style=\"background-color: #ffe0b2\">Highlighted</p>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Inline</title>\n</head>\n<body>\n  <p>Highlighted note</p>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var p = document.querySelector('p');\n    if (!p) return { passed: false, message: 'Keep the paragraph.' };\n    var inline = p.getAttribute('style') || '';\n    if (inline.indexOf('background') === -1) return { passed: false, message: 'Use a style attribute with background-color.' };\n    var bg = window.getComputedStyle(p).backgroundColor || '';\n    var rgb = bg.match(/\\d+/g);\n    if (!rgb || Number(rgb[2]) < 160 || Number(rgb[0]) < 200) return { passed: false, message: 'Use a light background like #ffe0b2.' };\n    return { passed: true, message: 'A highlighted note — inline and done.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "style=\"background-color: #ffe0b2\"",
          "background-color fills behind the text.",
          "Property: value; inside the attribute."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Inline</title>\n</head>\n<body>\n  <p style=\"background-color: #ffe0b2\">Highlighted note</p>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Special text",
      prompt: "Build a sentence where one word is pink via inline CSS and one paragraph has a light background via inline CSS.",
      target: "<p>My <strong>favourite</strong> note.</p>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Inline</title>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var strong = document.querySelector('strong');\n    if (!strong || !(strong.getAttribute('style') || '').match(/color/)) return { passed: false, message: 'A <strong> with inline color.' };\n    var sc = (window.getComputedStyle(strong).color || '').match(/\\d+/g);\n    if (!sc || Number(sc[0]) < 200) return { passed: false, message: 'Make the strong tag pink.' };\n    var ps = document.querySelectorAll('p');\n    var found = false;\n    for (var i = 0; i < ps.length; i++) {\n      var st = ps[i].getAttribute('style') || '';\n      if (st.indexOf('background') !== -1) { found = true; break; }\n    }\n    if (!found) return { passed: false, message: 'A <p> with inline background-color.' };\n    return { passed: true, message: 'Inline CSS mastered — quick style right on the tag!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "Strong gets color, paragraph gets background.",
        "Both use the style attribute.",
        "No style tag needed."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Inline</title>\n</head>\n<body>\n  <p>My <strong style=\"color: #e1306c\">favourite</strong> note.</p>\n  <p style=\"background-color: #ffe0b2\">Inline CSS is handy for one-off tweaks.</p>\n</body>\n</html>",
      unlock: "CSS Foundations"
    },
    unlock: "CSS Foundations"
  },

  {
    id: "web-external-css",
    num: 26,
    title: "External CSS",
    tagline: "Move your styles into their own file.",
    skill: "CSS",
    xp: 120,
    type: "html",
    icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 14h10"/>',
    meta: { kind: "normal", series: "w4-css", order: 3 },
    briefing: {
      objective: "Link an external stylesheet with the link tag.",
      body: "Inline CSS is quick but messy. Style tags keep things together but stay in one page. Real sites keep their CSS in a separate file and pull it in with one link tag. Look at the target — the page looks styled, but the styles live in a file called style.css. Your job: connect the two."
    },
    challenges: [
      {
        id: "ch1",
        title: "Link a stylesheet",
        target: "<h1>Linked styles</h1>",
        instructions: "Add a link tag in the head that loads a stylesheet called style.css.",
        learning: "<link rel=\"stylesheet\" href=\"style.css\">\n\nlink is a void element that pulls in other files. rel=\"stylesheet\" says this is CSS, href points to the file. One line in the head, and every rule in style.css applies to this page. This is how every real website loads its styles.",
        example: "<link rel=\"stylesheet\" href=\"style.css\">",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>External</title>\n</head>\n<body>\n  <h1>Linked styles</h1>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '');\n    if (!/<link/i.test(src)) return { passed: false, message: 'Add a <link> tag in the head.' };\n    if (!/rel=\"stylesheet\"/i.test(src)) return { passed: false, message: 'Use rel=\"stylesheet\" on the link.' };\n    if (!/href=/i.test(src)) return { passed: false, message: 'Give the link an href pointing to the file.' };\n    return { passed: true, message: 'The page is now wired to its stylesheet.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "link goes in the head.",
          "rel=\"stylesheet\" href=\"style.css\"",
          "One line loads the whole file."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>External</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Linked styles</h1>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Use a class",
        target: "<h1 class=\"title\">Linked styles</h1>",
        instructions: "Give the h1 a class attribute called \"title\". Classes let a stylesheet target specific elements.",
        learning: "<h1 class=\"title\">\n\nA class is a name you give an element. The stylesheet targets it with .title { ... }. The dot before the name means \"class\". Linking a file only works if your HTML has the hooks the file expects.",
        example: "<h1 class=\"title\">Hello</h1>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>External</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Linked styles</h1>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var h1 = document.querySelector('h1');\n    if (!h1) return { passed: false, message: 'Keep the heading.' };\n    var cls = h1.getAttribute('class') || '';\n    if (!cls) return { passed: false, message: 'Give the h1 a class attribute.' };\n    if (!/title/.test(cls)) return { passed: false, message: 'Use the class name \"title\".' };\n    return { passed: true, message: 'A class hook the stylesheet can target.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "class=\"title\" on the h1.",
          "The file targets .title with a dot.",
          "Class names are your choice."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>External</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1 class=\"title\">Linked styles</h1>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Wired and ready",
      prompt: "Build a page with a linked stylesheet (style.css) and at least two elements that carry class names for it to style.",
      target: "<h1 class=\"title\">My site</h1><p class=\"lead\">Intro text</p>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>External</title>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '');\n    if (!/<link/i.test(src) || !/rel=\"stylesheet\"/i.test(src)) return { passed: false, message: 'Add the link tag with rel=\"stylesheet\".' };\n    var h1 = document.querySelector('h1');\n    if (!h1 || !(h1.getAttribute('class') || '').trim()) return { passed: false, message: 'A heading with a class.' };\n    var p = document.querySelector('p');\n    if (!p || !(p.getAttribute('class') || '').trim()) return { passed: false, message: 'A paragraph with a class.' };\n    return { passed: true, message: 'External CSS — structure and hooks ready!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "One link tag in the head.",
        "h1 and p each get a class.",
        "This is how real sites load styles."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>External</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1 class=\"title\">My site</h1>\n  <p class=\"lead\">Intro text</p>\n</body>\n</html>",
      unlock: "CSS Foundations"
    },
    unlock: "CSS Foundations"
  },

  {
    id: "web-colors",
    num: 27,
    title: "Colors",
    tagline: "Pick colors for text and backgrounds.",
    skill: "CSS",
    xp: 110,
    type: "html",
    icon: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4" fill="currentColor"/>',
    meta: { kind: "normal", series: "w4-css", order: 4 },
    briefing: {
      objective: "Control colors with color and background-color.",
      body: "Color is the fastest way to make a page feel alive. Two properties do most of the work: color for text, background-color for the space behind. Look at the target: light text on a dark page. That contrast is pure CSS."
    },
    challenges: [
      {
        id: "ch1",
        title: "Dark background",
        target: "<p>Hello on a dark page</p>",
        instructions: "Give the whole page a dark background (#0f172a) using a rule on the body.",
        learning: "body { background-color: #0f172a; }\n\nbody covers the whole page, so a rule on body colors everything. background-color fills the space behind an element. Colors are written as hex codes like #0f172a — a dark blue-grey.",
        example: "body { background-color: #0f172a; }",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Colors</title>\n  <style>\n  </style>\n</head>\n<body>\n  <h1>Colors</h1>\n  <p>Hello on a dark page</p>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var bg = window.getComputedStyle(document.body).backgroundColor || '';\n    var rgb = bg.match(/\\d+/g);\n    if (!rgb) return { passed: false, message: 'Set a background-color on body.' };\n    var isDark = Number(rgb[0]) < 60 && Number(rgb[1]) < 80 && Number(rgb[2]) < 100;\n    if (!isDark) return { passed: false, message: 'Use a dark background like #0f172a.' };\n    return { passed: true, message: 'Dark background — the page has a mood now.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Rule on body.",
          "background-color: #0f172a;",
          "Dark = low numbers."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Colors</title>\n  <style>\n    body { background-color: #0f172a; }\n  </style>\n</head>\n<body>\n  <h1>Colors</h1>\n  <p>Hello on a dark page</p>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Light text",
        target: "<h1>Colors</h1>",
        instructions: "Make the heading text white (#f8fafc) so it stands out against the dark background.",
        learning: "h1 { color: #f8fafc; }\n\ncolor changes the text, not the background. On a dark page you want light text — that contrast is what makes a page readable. color and background-color always work as a pair.",
        example: "h1 { color: #f8fafc; }",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Colors</title>\n  <style>\n    body { background-color: #0f172a; }\n  </style>\n</head>\n<body>\n  <h1>Colors</h1>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var h1 = document.querySelector('h1');\n    if (!h1) return { passed: false, message: 'Keep the heading.' };\n    var color = window.getComputedStyle(h1).color || '';\n    var rgb = color.match(/\\d+/g);\n    if (!rgb || !(Number(rgb[0]) > 220 && Number(rgb[1]) > 220 && Number(rgb[2]) > 220)) return { passed: false, message: 'Make the heading text light (#f8fafc).' };\n    return { passed: true, message: 'Light on dark — perfect contrast.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "color, not background-color.",
          "h1 { color: #f8fafc; }",
          "Light text on dark background."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Colors</title>\n  <style>\n    body { background-color: #0f172a; }\n    h1 { color: #f8fafc; }\n  </style>\n</head>\n<body>\n  <h1>Colors</h1>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Your color scheme",
      prompt: "Build a page with a dark background and at least two elements with light text colors of your choice.",
      target: "<h1>My color scheme</h1><p>Light text on dark.</p>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Colors</title>\n  <style>\n  </style>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var bg = window.getComputedStyle(document.body).backgroundColor || '';\n    var rgb = bg.match(/\\d+/g);\n    if (!rgb || Number(rgb[0]) > 60) return { passed: false, message: 'Use a dark body background.' };\n    var els = document.querySelectorAll('h1, p');\n    if (els.length < 2) return { passed: false, message: 'Add at least two elements (heading and paragraph).' };\n    for (var i = 0; i < els.length; i++) {\n      var c = (window.getComputedStyle(els[i]).color || '').match(/\\d+/g);\n      if (!c || Number(c[0]) < 200) return { passed: false, message: 'Every element needs light text.' };\n    }\n    return { passed: true, message: 'A readable color scheme — dark base, light text!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "Dark body background.",
        "Light color on heading and paragraph.",
        "Pick your own hex values."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Colors</title>\n  <style>\n    body { background-color: #0f172a; }\n    h1 { color: #f8fafc; }\n    p { color: #cbd5e1; }\n  </style>\n</head>\n<body>\n  <h1>My color scheme</h1>\n  <p>Light text on dark.</p>\n</body>\n</html>",
      unlock: "CSS Foundations"
    },
    unlock: "CSS Foundations"
  },

  {
    id: "web-text",
    num: 28,
    title: "Text",
    tagline: "Size, align and choose fonts.",
    skill: "CSS",
    xp: 110,
    type: "html",
    icon: '<path d="M4 20h16M6 20V8a6 6 0 0 1 12 0v12"/>',
    meta: { kind: "normal", series: "w4-css", order: 5 },
    briefing: {
      objective: "Control text size, alignment and font.",
      body: "Words carry the message; how they look decides whether people read them. font-size controls the size, text-align moves text left or center, font-family changes the typeface. Look at the target: a big centered heading over normal paragraphs."
    },
    challenges: [
      {
        id: "ch1",
        title: "Center the heading",
        target: "<h1>Welcome</h1>",
        instructions: "Center the heading horizontally with text-align.",
        learning: "h1 { text-align: center; }\n\ntext-align moves text inside its container. center puts it in the middle of the page. The default is left. Centering headings is one of the quickest ways to make a page look designed.",
        example: "h1 { text-align: center; }",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Text</title>\n  <style>\n  </style>\n</head>\n<body>\n  <h1>Welcome</h1>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var h1 = document.querySelector('h1');\n    if (!h1) return { passed: false, message: 'Keep the heading.' };\n    var align = window.getComputedStyle(h1).textAlign || '';\n    if (align !== 'center') return { passed: false, message: 'Set text-align: center on the h1.' };\n    return { passed: true, message: 'Centered heading — instant polish.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "text-align: center;",
          "It moves text inside its box.",
          "Apply it to the h1."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Text</title>\n  <style>\n    h1 { text-align: center; }\n  </style>\n</head>\n<body>\n  <h1>Welcome</h1>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Bigger heading",
        target: "<h1>Welcome</h1>",
        instructions: "Make the heading bigger — font-size of 40px.",
        learning: "h1 { font-size: 40px; }\n\nfont-size sets the text size in pixels. Bigger headings create a clear hierarchy: the most important thing on the page looks the most important.",
        example: "h1 { font-size: 40px; }",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Text</title>\n  <style>\n    h1 { text-align: center; }\n  </style>\n</head>\n<body>\n  <h1>Welcome</h1>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var h1 = document.querySelector('h1');\n    if (!h1) return { passed: false, message: 'Keep the heading.' };\n    var size = parseFloat(window.getComputedStyle(h1).fontSize || '0');\n    if (size < 36) return { passed: false, message: 'Set the h1 font-size to at least 36px (use 40px).' };\n    return { passed: true, message: 'A big, clear heading — size matters!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "font-size: 40px;",
          "40px is big and bold.",
          "Add it to the h1 rule."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Text</title>\n  <style>\n    h1 { text-align: center; font-size: 40px; }\n  </style>\n</head>\n<body>\n  <h1>Welcome</h1>\n</body>\n</html>"
      }
    ],
    build: {
      title: "A readable heading",
      prompt: "Build a page with a heading that is centered, large (40px), and a paragraph of normal text below it.",
      target: "<h1>Welcome</h1><p>Normal paragraph text.</p>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Text</title>\n  <style>\n  </style>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var h1 = document.querySelector('h1');\n    if (!h1) return { passed: false, message: 'Add a heading.' };\n    if ((window.getComputedStyle(h1).textAlign || '') !== 'center') return { passed: false, message: 'Center the heading.' };\n    if (parseFloat(window.getComputedStyle(h1).fontSize || '0') < 36) return { passed: false, message: 'Make the heading 40px.' };\n    if (!document.querySelector('p')) return { passed: false, message: 'Add a normal paragraph.' };\n    return { passed: true, message: 'Text styling unlocked — size and alignment!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "h1 centered and 40px.",
        "Keep a plain paragraph.",
        "Two properties in the h1 rule."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Text</title>\n  <style>\n    h1 { text-align: center; font-size: 40px; }\n  </style>\n</head>\n<body>\n  <h1>Welcome</h1>\n  <p>Normal paragraph text.</p>\n</body>\n</html>",
      unlock: "CSS Foundations"
    },
    unlock: "CSS Foundations"
  },

  {
    id: "web-borders",
    num: 29,
    title: "Borders",
    tagline: "Draw lines around your elements.",
    skill: "CSS",
    xp: 110,
    type: "html",
    icon: '<rect x="3" y="3" width="18" height="18" rx="4"/>',
    meta: { kind: "normal", series: "w4-css", order: 6 },
    briefing: {
      objective: "Add borders and rounded corners.",
      body: "A border draws a line around an element — it frames content, separates cards, draws attention. The target shows a box with a thin green outline and soft rounded corners. Two properties make that: border and border-radius."
    },
    challenges: [
      {
        id: "ch1",
        title: "Green frame",
        target: "<div>Framed box</div>",
        instructions: "Give the div a border: 2px solid, green (#30d05c).",
        learning: ".box { border: 2px solid #30d05c; }\n\nborder is a shorthand. It sets width (2px), style (solid), and color in one line. The order always goes width, style, color. A border frames the element on all four sides.",
        example: ".box { border: 2px solid #30d05c; }",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Borders</title>\n  <style>\n    .box { padding: 20px; }\n  </style>\n</head>\n<body>\n  <div class=\"box\">Framed box</div>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var box = document.querySelector('.box');\n    if (!box) return { passed: false, message: 'Keep a div with class=\"box\".' };\n    var style = window.getComputedStyle(box);\n    if (!style.borderTopWidth || parseFloat(style.borderTopWidth) < 1) return { passed: false, message: 'Add a border (e.g. 2px solid green).' };\n    var bc = (style.borderTopColor || '').match(/\\d+/g);\n    if (!bc || Number(bc[1]) < 150) return { passed: false, message: 'Use a green border (#30d05c).' };\n    return { passed: true, message: 'A green frame around your box.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "border: 2px solid #30d05c;",
          "width, style, color — in that order.",
          "Add it to the .box rule."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Borders</title>\n  <style>\n    .box { padding: 20px; border: 2px solid #30d05c; }\n  </style>\n</head>\n<body>\n  <div class=\"box\">Framed box</div>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Rounded corners",
        target: "<div>Framed box</div>",
        instructions: "Round the corners of the box with border-radius of 12px.",
        learning: "border-radius: 12px;\n\nborder-radius curves the corners of the box. 12px is a soft, friendly curve. Combined with a border, it turns a plain rectangle into a card.",
        example: ".box { border-radius: 12px; }",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Borders</title>\n  <style>\n    .box { padding: 20px; border: 2px solid #30d05c; }\n  </style>\n</head>\n<body>\n  <div class=\"box\">Framed box</div>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var box = document.querySelector('.box');\n    if (!box) return { passed: false, message: 'Keep the box.' };\n    var radius = parseFloat(window.getComputedStyle(box).borderRadius || '0');\n    if (radius < 10) return { passed: false, message: 'Set border-radius to at least 10px (use 12px).' };\n    return { passed: true, message: 'Soft corners — it is a card now.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "border-radius: 12px;",
          "Bigger number = rounder corner.",
          "Add it to the .box rule."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Borders</title>\n  <style>\n    .box { padding: 20px; border: 2px solid #30d05c; border-radius: 12px; }\n  </style>\n</head>\n<body>\n  <div class=\"box\">Framed box</div>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Your card",
      prompt: "Build a card: a div with padding, a 2px solid green border, and rounded corners (border-radius 12px). Add a heading inside it.",
      target: "A framed, rounded card with a heading",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Borders</title>\n  <style>\n  </style>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var box = document.querySelector('.box');\n    if (!box) return { passed: false, message: 'A div with class=\"box\".' };\n    if (parseFloat(window.getComputedStyle(box).borderTopWidth || '0') < 1) return { passed: false, message: 'Give the box a border.' };\n    if (parseFloat(window.getComputedStyle(box).borderRadius || '0') < 10) return { passed: false, message: 'Round the corners with border-radius.' };\n    if (!box.querySelector('h1') && !box.querySelector('h2')) return { passed: false, message: 'A heading inside the card.' };\n    return { passed: true, message: 'A framed, rounded card — borders unlocked!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "One .box with border + border-radius.",
        "Put a heading inside it.",
        "padding keeps text off the edge."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Borders</title>\n  <style>\n    .box { padding: 20px; border: 2px solid #30d05c; border-radius: 12px; }\n  </style>\n</head>\n<body>\n  <div class=\"box\"><h2>My card</h2><p>Framed and rounded.</p></div>\n</body>\n</html>",
      unlock: "CSS Foundations"
    },
    unlock: "CSS Foundations"
  },

  {
    id: "web-spacing",
    num: 30,
    title: "Spacing",
    tagline: "Breathing room with padding and margin.",
    skill: "CSS",
    xp: 110,
    type: "html",
    icon: '<path d="M12 3v18M3 12h18"/>',
    meta: { kind: "normal", series: "w4-css", order: 7 },
    briefing: {
      objective: "Control space inside and around elements.",
      body: "Cramped pages feel broken; spaced pages feel designed. Two properties control space. padding is space inside an element, between its content and its edge. margin is space outside the element, between it and its neighbours. Look at the target: text sits comfortably inside the card because of padding, and the card sits apart from the heading because of margin."
    },
    challenges: [
      {
        id: "ch1",
        title: "Padding inside",
        target: "<div>Box with padding</div>",
        instructions: "Give the box padding of 24px so the text is not glued to the edge.",
        learning: ".box { padding: 24px; }\n\npadding is the space between an element's content and its border. padding: 24px adds it on all four sides. Text that touches the edge looks broken; a little padding fixes it instantly.",
        example: ".box { padding: 24px; }",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Spacing</title>\n  <style>\n    .box { border: 2px solid #30d05c; }\n  </style>\n</head>\n<body>\n  <div class=\"box\">Box with padding</div>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var box = document.querySelector('.box');\n    if (!box) return { passed: false, message: 'Keep the box.' };\n    var pad = parseFloat(window.getComputedStyle(box).paddingTop || '0');\n    if (pad < 20) return { passed: false, message: 'Add padding of 24px to the box.' };\n    return { passed: true, message: 'Breathing room inside the box.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "padding: 24px;",
          "Inside the element.",
          "Add it to the .box rule."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Spacing</title>\n  <style>\n    .box { border: 2px solid #30d05c; padding: 24px; }\n  </style>\n</head>\n<body>\n  <div class=\"box\">Box with padding</div>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Margin outside",
        target: "<h1>Title</h1><div>Box</div>",
        instructions: "Push the box down away from the heading using margin-top of 16px.",
        learning: ".box { margin-top: 16px; }\n\nmargin is space outside the element. margin-top pushes the element away from whatever is above it. padding and margin together give you full control of the space around content.",
        example: ".box { margin-top: 16px; }",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Spacing</title>\n  <style>\n    .box { border: 2px solid #30d05c; padding: 24px; }\n  </style>\n</head>\n<body>\n  <h1>Title</h1>\n  <div class=\"box\">Box</div>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var box = document.querySelector('.box');\n    if (!box) return { passed: false, message: 'Keep the box.' };\n    var mt = parseFloat(window.getComputedStyle(box).marginTop || '0');\n    if (mt < 12) return { passed: false, message: 'Add margin-top of 16px to push the box down.' };\n    return { passed: true, message: 'Space between the title and the box.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "margin-top: 16px;",
          "Outside the element.",
          "It pushes the box away from the heading."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Spacing</title>\n  <style>\n    .box { border: 2px solid #30d05c; padding: 24px; margin-top: 16px; }\n  </style>\n</head>\n<body>\n  <h1>Title</h1>\n  <div class=\"box\">Box</div>\n</body>\n</html>"
      }
    ],
    build: {
      title: "A comfortable card",
      prompt: "Build a heading and a card with padding (24px) and a margin pushing it away from the heading.",
      target: "<h1>Title</h1><div>Card with space</div>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Spacing</title>\n  <style>\n  </style>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var box = document.querySelector('.box');\n    if (!box) return { passed: false, message: 'A div with class=\"box\".' };\n    if (parseFloat(window.getComputedStyle(box).paddingTop || '0') < 20) return { passed: false, message: 'Padding of 24px inside the box.' };\n    if (parseFloat(window.getComputedStyle(box).marginTop || '0') < 12) return { passed: false, message: 'Margin-top of 16px.' };\n    if (!document.querySelector('h1')) return { passed: false, message: 'A heading above the box.' };\n    return { passed: true, message: 'Comfortable spacing — inside and out!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "padding inside, margin outside.",
        "24px padding, 16px margin-top.",
        "h1 above the box."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Spacing</title>\n  <style>\n    .box { padding: 24px; margin-top: 16px; border: 2px solid #30d05c; }\n  </style>\n</head>\n<body>\n  <h1>Title</h1>\n  <div class=\"box\">Card with space</div>\n</body>\n</html>",
      unlock: "CSS Foundations"
    },
    unlock: "CSS Foundations"
  },

  {
    id: "web-box-model",
    num: 31,
    title: "The Box Model",
    tagline: "Every element is a box. Know its parts.",
    skill: "CSS",
    xp: 130,
    type: "html",
    icon: '<rect x="3" y="3" width="18" height="18"/><rect x="7" y="7" width="10" height="10" fill="currentColor"/>',
    meta: { kind: "normal", series: "w4-css", order: 8 },
    briefing: {
      objective: "Understand the box model: content, padding, border, margin.",
      body: "Every element on a page is a box, and the box has four layers. The content sits in the middle. padding wraps the content, border wraps the padding, margin wraps the border and separates the box from its neighbours. The target shows a card where every layer is doing its job."
    },
    challenges: [
      {
        id: "ch1",
        title: "Build the layers",
        target: "<div>Content</div>",
        instructions: "Give the box: a width of 240px, padding of 16px, a border, and margin — all four layers of the box model.",
        learning: ".box {\n  width: 240px;\n  padding: 16px;\n  border: 2px solid #30d05c;\n  margin: 12px;\n}\n\nThe box model in order: content (the text) → padding (space around it) → border (the frame) → margin (space outside). Getting comfortable with these four layers is the foundation of every CSS layout you will ever write.",
        example: ".box { width: 240px; padding: 16px; border: 2px solid #30d05c; margin: 12px; }",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Box Model</title>\n  <style>\n    .box { }\n  </style>\n</head>\n<body>\n  <div class=\"box\">Content</div>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var box = document.querySelector('.box');\n    if (!box) return { passed: false, message: 'Keep the box.' };\n    var style = window.getComputedStyle(box);\n    if (parseFloat(style.width || '0') < 230) return { passed: false, message: 'Give the box a width of 240px.' };\n    if (parseFloat(style.paddingTop || '0') < 12) return { passed: false, message: 'Add padding of 16px.' };\n    if (parseFloat(style.borderTopWidth || '0') < 1) return { passed: false, message: 'Add a border.' };\n    if (parseFloat(style.marginTop || '0') < 8) return { passed: false, message: 'Add a margin of 12px.' };\n    return { passed: true, message: 'All four layers of the box model present!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "content, padding, border, margin.",
          "width 240px, padding 16px, border 2px, margin 12px.",
          "The box model is the whole box."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Box Model</title>\n  <style>\n    .box { width: 240px; padding: 16px; border: 2px solid #30d05c; margin: 12px; }\n  </style>\n</head>\n<body>\n  <div class=\"box\">Content</div>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Center the box",
        target: "<div>Centered card</div>",
        instructions: "Center the box horizontally with margin: 0 auto — the classic trick for centring a block.",
        learning: ".box { margin: 0 auto; }\n\nmargin: 0 auto means 0 on top and bottom, auto on left and right. auto tells the browser to split the leftover space equally, which pushes the box to the centre. It only works on elements with a set width.",
        example: ".box { margin: 0 auto; }",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Box Model</title>\n  <style>\n    .box { width: 240px; padding: 16px; border: 2px solid #30d05c; }\n  </style>\n</head>\n<body>\n  <div class=\"box\">Centered card</div>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var box = document.querySelector('.box');\n    if (!box) return { passed: false, message: 'Keep the box.' };\n    var ml = window.getComputedStyle(box).marginLeft || '';\n    var mr = window.getComputedStyle(box).marginRight || '';\n    if (!/auto/i.test(ml) || !/auto/i.test(mr)) return { passed: false, message: 'Use margin: 0 auto to centre the box.' };\n    var rect = box.getBoundingClientRect();\n    var viewport = document.documentElement.clientWidth;\n    if (Math.abs((viewport - rect.width) / 2 - rect.left) > 20) return { passed: false, message: 'The box should sit in the middle of the page.' };\n    return { passed: true, message: 'Centred! margin: 0 auto — the classic.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "margin: 0 auto;",
          "Needs a set width to work.",
          "auto splits the leftover space."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Box Model</title>\n  <style>\n    .box { width: 240px; padding: 16px; border: 2px solid #30d05c; margin: 0 auto; }\n  </style>\n</head>\n<body>\n  <div class=\"box\">Centered card</div>\n</body>\n</html>"
      }
    ],
    build: {
      title: "A centered card",
      prompt: "Build a centered card: width 240px, padding, a border, rounded corners, and margin: 0 auto. Put a heading inside.",
      target: "A centred card with a heading",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Box Model</title>\n  <style>\n  </style>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var box = document.querySelector('.box');\n    if (!box) return { passed: false, message: 'A div with class=\"box\".' };\n    var ml = window.getComputedStyle(box).marginLeft || '';\n    if (!/auto/i.test(ml)) return { passed: false, message: 'Centre it with margin: 0 auto.' };\n    if (parseFloat(window.getComputedStyle(box).borderTopWidth || '0') < 1) return { passed: false, message: 'Give the card a border.' };\n    if (parseFloat(window.getComputedStyle(box).borderRadius || '0') < 8) return { passed: false, message: 'Round the corners.' };\n    if (!box.querySelector('h2') && !box.querySelector('h1')) return { passed: false, message: 'A heading inside the card.' };\n    return { passed: true, message: 'The box model mastered — a centred, framed card!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "width, padding, border, radius.",
        "margin: 0 auto to centre.",
        "h2 inside the card."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Box Model</title>\n  <style>\n    .box { width: 240px; padding: 16px; border: 2px solid #30d05c; border-radius: 12px; margin: 0 auto; }\n  </style>\n</head>\n<body>\n  <div class=\"box\"><h2>My card</h2><p>Every element is a box.</p></div>\n</body>\n</html>",
      unlock: "CSS Foundations"
    },
    unlock: "CSS Foundations"
  },

  {
    id: "web-flexbox",
    num: 32,
    title: "Flexbox",
    tagline: "Put elements side by side.",
    skill: "CSS",
    xp: 130,
    type: "html",
    icon: '<rect x="3" y="5" width="6" height="14" rx="1"/><rect x="11" y="5" width="6" height="14" rx="1"/><rect x="19" y="5" width="2" height="14"/>',
    meta: { kind: "normal", series: "w4-css", order: 9 },
    briefing: {
      objective: "Lay elements in a row with flexbox.",
      body: "By default, block elements stack vertically. But real layouts — nav bars, cards in a grid, buttons in a row — put things side by side. The tool for that is flexbox. Put display: flex on a container, and its children line up in a row. The target shows three boxes in a line."
    },
    challenges: [
      {
        id: "ch1",
        title: "A row of boxes",
        target: "Three boxes side by side",
        instructions: "Make the three boxes sit side by side in a single row. Add display: flex to their container.",
        learning: ".row { display: flex; }\n\ndisplay: flex turns a container into a flex container. Its direct children (the boxes) automatically line up horizontally instead of stacking. Flexbox is the modern way to build almost every layout.",
        example: ".row { display: flex; }",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Flexbox</title>\n  <style>\n    .row { }\n    .box { width: 100px; padding: 16px; border: 2px solid #30d05c; }\n  </style>\n</head>\n<body>\n  <div class=\"row\">\n    <div class=\"box\">A</div>\n    <div class=\"box\">B</div>\n    <div class=\"box\">C</div>\n  </div>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var row = document.querySelector('.row');\n    if (!row) return { passed: false, message: 'Keep the .row container.' };\n    if (window.getComputedStyle(row).display !== 'flex') return { passed: false, message: 'Add display: flex to the .row rule.' };\n    var boxes = row.querySelectorAll('.box');\n    if (boxes.length < 3) return { passed: false, message: 'Keep three .box children.' };\n    var a = boxes[0].getBoundingClientRect();\n    var b = boxes[2].getBoundingClientRect();\n    if (Math.abs(a.top - b.top) > 20) return { passed: false, message: 'All three boxes should be on the same row.' };\n    return { passed: true, message: 'Flexbox — three boxes, one row!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "display: flex on .row.",
          "Children line up horizontally.",
          "One property does it."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Flexbox</title>\n  <style>\n    .row { display: flex; }\n    .box { width: 100px; padding: 16px; border: 2px solid #30d05c; }\n  </style>\n</head>\n<body>\n  <div class=\"row\">\n    <div class=\"box\">A</div>\n    <div class=\"box\">B</div>\n    <div class=\"box\">C</div>\n  </div>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Spread them out",
        target: "Three boxes spread across the row",
        instructions: "Spread the boxes so there is space between them: add justify-content: space-between to the row.",
        learning: ".row { justify-content: space-between; }\n\njustify-content controls how children are spaced along the row. space-between pushes the first to the left and the last to the right, and splits the leftover space between the rest. This is how nav bars push a logo to one side and a menu to the other.",
        example: ".row { display: flex; justify-content: space-between; }",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Flexbox</title>\n  <style>\n    .row { display: flex; }\n    .box { width: 100px; padding: 16px; border: 2px solid #30d05c; }\n  </style>\n</head>\n<body>\n  <div class=\"row\">\n    <div class=\"box\">A</div>\n    <div class=\"box\">B</div>\n    <div class=\"box\">C</div>\n  </div>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var row = document.querySelector('.row');\n    if (!row) return { passed: false, message: 'Keep the .row container.' };\n    if (window.getComputedStyle(row).justifyContent !== 'space-between') return { passed: false, message: 'Add justify-content: space-between to the .row rule.' };\n    var boxes = row.querySelectorAll('.box');\n    if (boxes.length < 2) return { passed: false, message: 'Keep at least two boxes.' };\n    var a = boxes[0].getBoundingClientRect();\n    var b = boxes[boxes.length - 1].getBoundingClientRect();\n    var rowRect = row.getBoundingClientRect();\n    if (Math.abs(a.left - rowRect.left) > 5) return { passed: false, message: 'The first box should touch the left edge.' };\n    if (Math.abs(b.right - rowRect.right) > 5) return { passed: false, message: 'The last box should touch the right edge.' };\n    return { passed: true, message: 'Space-between — a perfect spread!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "justify-content: space-between;",
          "First left, last right, rest in between.",
          "That is how nav bars work."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Flexbox</title>\n  <style>\n    .row { display: flex; justify-content: space-between; }\n    .box { width: 100px; padding: 16px; border: 2px solid #30d05c; }\n  </style>\n</head>\n<body>\n  <div class=\"row\">\n    <div class=\"box\">A</div>\n    <div class=\"box\">B</div>\n    <div class=\"box\">C</div>\n  </div>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Your nav bar",
      prompt: "Build a nav bar: a .nav container that is flex with space-between, a title on the left, and a menu on the right. Give them a border and padding so it looks like a bar.",
      target: "A nav bar with title left, menu right",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Flexbox</title>\n  <style>\n  </style>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var nav = document.querySelector('.nav');\n    if (!nav) return { passed: false, message: 'A container with class=\"nav\".' };\n    var style = window.getComputedStyle(nav);\n    if (style.display !== 'flex') return { passed: false, message: 'Make .nav display: flex.' };\n    if (style.justifyContent !== 'space-between') return { passed: false, message: 'Add justify-content: space-between.' };\n    var title = nav.querySelector('.title');\n    var menu = nav.querySelector('.menu');\n    if (!title || !menu) return { passed: false, message: 'A .title on the left and a .menu on the right.' };\n    if (parseFloat(style.borderTopWidth || '0') < 1 && parseFloat(style.backgroundColor || '0') < 1) return { passed: false, message: 'Give the bar a border or background so it looks like a bar.' };\n    return { passed: true, message: 'A real nav bar built with flexbox!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        ".nav { display: flex; justify-content: space-between; }",
        "title left, menu right.",
        "Add padding and a border."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Flexbox</title>\n  <style>\n    .nav { display: flex; justify-content: space-between; padding: 12px 16px; border: 2px solid #30d05c; }\n  </style>\n</head>\n<body>\n  <div class=\"nav\">\n    <span class=\"title\">SkillRun</span>\n    <span class=\"menu\">Home &middot; Learn &middot; Contact</span>\n  </div>\n</body>\n</html>",
      unlock: "CSS Foundations"
    },
    unlock: "CSS Foundations"
  },

  {
    id: "web-responsive",
    num: 33,
    title: "Responsive",
    tagline: "One layout, every screen size.",
    skill: "CSS",
    xp: 140,
    type: "html",
    icon: '<rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 21h8M12 18v3"/>',
    meta: { kind: "normal", series: "w4-css", order: 10 },
    briefing: {
      objective: "Adapt layouts to small screens with media queries.",
      body: "The same page looks different on a phone than on a desktop. A row of boxes that fits on a screen becomes cramped on a phone. Media queries fix that: CSS rules that only apply under certain conditions, like a narrow screen. The target looks fine wide, but on a phone its boxes stack into a column."
    },
    challenges: [
      {
        id: "ch1",
        title: "Add a media query",
        target: "Boxes that stack on small screens",
        instructions: "Add a media query that targets screens narrower than 600px.",
        learning: "@media (max-width: 600px) {\n  /* rules for small screens */\n}\n\nA media query wraps rules that only apply when the condition is true. (max-width: 600px) means: apply these rules when the screen is 600px or narrower. It is how one page becomes responsive.",
        example: "@media (max-width: 600px) { }",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Responsive</title>\n  <style>\n    .row { display: flex; }\n    .box { width: 100px; padding: 16px; border: 2px solid #30d05c; }\n  </style>\n</head>\n<body>\n  <div class=\"row\">\n    <div class=\"box\">A</div>\n    <div class=\"box\">B</div>\n  </div>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '');\n    if (!/@media/i.test(src)) return { passed: false, message: 'Add an @media query.' };\n    if (!/max-width\\s*:\\s*600/i.test(src) && !/max-width\\s*:\\s*480/i.test(src)) return { passed: false, message: 'Use @media (max-width: 600px).' };\n    return { passed: true, message: 'A media query in place — the page can adapt.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "@media (max-width: 600px) { }",
          "Rules inside only run on small screens.",
          "600px or narrower."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Responsive</title>\n  <style>\n    .row { display: flex; }\n    .box { width: 100px; padding: 16px; border: 2px solid #30d05c; }\n    @media (max-width: 600px) {\n      .row { flex-direction: column; }\n    }\n  </style>\n</head>\n<body>\n  <div class=\"row\">\n    <div class=\"box\">A</div>\n    <div class=\"box\">B</div>\n  </div>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Stack on phones",
        target: "Boxes stacked into a column on small screens",
        instructions: "Inside the media query, make the row stack vertically with flex-direction: column.",
        learning: "@media (max-width: 600px) {\n  .row { flex-direction: column; }\n}\n\nflex-direction: column flips the row into a column — boxes stack top to bottom. Put that inside the media query, and wide screens get a row while phones get a column. That is responsive design.",
        example: "@media (max-width: 600px) {\n  .row { flex-direction: column; }\n}",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Responsive</title>\n  <style>\n    .row { display: flex; }\n    .box { width: 100px; padding: 16px; border: 2px solid #30d05c; }\n  </style>\n</head>\n<body>\n  <div class=\"row\">\n    <div class=\"box\">A</div>\n    <div class=\"box\">B</div>\n  </div>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '');\n    if (!/@media/i.test(src)) return { passed: false, message: 'Keep the @media query.' };\n    if (!/flex-direction\\s*:\\s*column/i.test(src)) return { passed: false, message: 'Inside the query, set .row { flex-direction: column; }.' };\n    return { passed: true, message: 'Phones get a column, wide screens get a row.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "flex-direction: column;",
          "It goes inside the media query.",
          "Stacks the boxes on small screens."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Responsive</title>\n  <style>\n    .row { display: flex; }\n    .box { width: 100px; padding: 16px; border: 2px solid #30d05c; }\n    @media (max-width: 600px) {\n      .row { flex-direction: column; }\n    }\n  </style>\n</head>\n<body>\n  <div class=\"row\">\n    <div class=\"box\">A</div>\n    <div class=\"box\">B</div>\n  </div>\n</body>\n</html>"
      }
    ],
    build: {
      title: "A responsive bar",
      prompt: "Build a responsive nav bar: flex with space-between on wide screens, stacking into a column on screens under 600px.",
      target: "A nav bar that adapts to phone screens",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Responsive</title>\n  <style>\n  </style>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '');\n    if (!/@media/i.test(src)) return { passed: false, message: 'Add a media query.' };\n    if (!/flex-direction\\s*:\\s*column/i.test(src)) return { passed: false, message: 'Stack the bar in the media query.' };\n    var nav = document.querySelector('.nav');\n    if (!nav) return { passed: false, message: 'A container with class=\"nav\".' };\n    if (window.getComputedStyle(nav).display !== 'flex') return { passed: false, message: 'Make .nav display: flex.' };\n    if (!nav.querySelector('.title') || !nav.querySelector('.menu')) return { passed: false, message: 'A .title and a .menu inside.' };\n    return { passed: true, message: 'Responsive design unlocked — one page, every screen!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        ".nav flex with space-between.",
        "Media query stacks it under 600px.",
        "title and menu inside."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Responsive</title>\n  <style>\n    .nav { display: flex; justify-content: space-between; padding: 12px 16px; border: 2px solid #30d05c; }\n    @media (max-width: 600px) {\n      .nav { flex-direction: column; }\n    }\n  </style>\n</head>\n<body>\n  <div class=\"nav\">\n    <span class=\"title\">SkillRun</span>\n    <span class=\"menu\">Home &middot; Learn &middot; Contact</span>\n  </div>\n</body>\n</html>",
      unlock: "CSS Foundations"
    },
    unlock: "CSS Foundations"
  },

  {
    id: "web-design-boss",
    num: 34,
    title: "Rebuild a Design",
    tagline: "The boss: turn a plain page into a designed page.",
    skill: "CSS",
    xp: 160,
    type: "html",
    icon: '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M3 9h18M9 21V9"/>',
    meta: { kind: "boss", series: "w4-css", order: 11, focusLock: true, hintCap: 1 },
    briefing: {
      objective: "Apply everything you learned to redesign a plain page.",
      body: "The boss of the CSS series. You have a plain, unstyled page. Rebuild it into something designed using everything you learned: a style tag, colors, spacing, borders, flexbox, and a media query. No step-by-step. Make it look like a real website."
    },
    challenges: [
      {
        id: "ch1",
        title: "Design the header",
        target: "A designed header: title left, nav right, colored background, white text",
        instructions: "Style the header. Make it a flex bar with the title left and nav right, a dark background, light text, padding, and rounded corners.",
        learning: "This is composition in CSS: choose a background, choose text colors that contrast, lay things out with flex, and give it breathing room with padding. A header is a small page in miniature.",
        example: "",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Design</title>\n  <style>\n    .header { }\n    .nav { }\n  </style>\n</head>\n<body>\n  <div class=\"header\">\n    <span class=\"title\">SkillRun</span>\n    <span class=\"nav\">Home &middot; Learn &middot; Contact</span>\n  </div>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var header = document.querySelector('.header');\n    if (!header) return { passed: false, message: 'Keep the .header container.' };\n    var style = window.getComputedStyle(header);\n    if (style.display !== 'flex') return { passed: false, message: 'Make the header display: flex.' };\n    if (style.justifyContent !== 'space-between') return { passed: false, message: 'Push title left and nav right.' };\n    var bg = (style.backgroundColor || '').match(/\\d+/g);\n    if (!bg || Number(bg[0]) > 80) return { passed: false, message: 'Give the header a dark background.' };\n    var color = (window.getComputedStyle(header.querySelector('.title')).color || '').match(/\\d+/g);\n    if (!color || Number(color[0]) < 200) return { passed: false, message: 'Light text on the dark header.' };\n    if (parseFloat(style.paddingTop || '0') < 10) return { passed: false, message: 'Add padding to the header.' };\n    return { passed: true, message: 'A designed header — flex, contrast, space.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "One hint only — this is the boss.",
          "Header: flex + space-between + dark bg + light text + padding."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Design</title>\n  <style>\n    .header { display: flex; justify-content: space-between; background-color: #0f172a; color: #f8fafc; padding: 14px 20px; border-radius: 10px; }\n    .nav { opacity: 0.85; }\n  </style>\n</head>\n<body>\n  <div class=\"header\">\n    <span class=\"title\">SkillRun</span>\n    <span class=\"nav\">Home &middot; Learn &middot; Contact</span>\n  </div>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Full redesign",
      prompt: "Complete the redesign: a designed header, a card in the middle (border, rounded corners, padding, centered with margin auto), and a media query that stacks the layout under 600px.",
      target: "A fully designed page",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Design</title>\n  <style>\n  </style>\n</head>\n<body>\n  <div class=\"header\">\n    <span class=\"title\">SkillRun</span>\n    <span class=\"nav\">Home &middot; Learn &middot; Contact</span>\n  </div>\n  <div class=\"card\">\n    <h2>Welcome</h2>\n    <p>This page has been redesigned.</p>\n  </div>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var header = document.querySelector('.header');\n    if (!header || window.getComputedStyle(header).display !== 'flex') return { passed: false, message: 'A flex header.' };\n    var card = document.querySelector('.card');\n    if (!card) return { passed: false, message: 'A .card element.' };\n    var cs = window.getComputedStyle(card);\n    if (parseFloat(cs.borderTopWidth || '0') < 1) return { passed: false, message: 'Give the card a border.' };\n    if (parseFloat(cs.borderRadius || '0') < 8) return { passed: false, message: 'Round the card corners.' };\n    if (!/auto/i.test(cs.marginLeft || '')) return { passed: false, message: 'Centre the card with margin auto.' };\n    if (parseFloat(cs.paddingTop || '0') < 12) return { passed: false, message: 'Padding inside the card.' };\n    var src = (window.__SkillRunSource || '');\n    if (!/@media/i.test(src) || !/flex-direction\\s*:\\s*column/i.test(src)) return { passed: false, message: 'A media query that stacks the layout.' };\n    return { passed: true, message: 'BOSS DOWN — a plain page rebuilt into a design!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "Header flex + dark. Card with border, radius, padding, margin auto.",
        "Media query stacks under 600px.",
        "Every tool from the series, in one page."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Design</title>\n  <style>\n    .header { display: flex; justify-content: space-between; background-color: #0f172a; color: #f8fafc; padding: 14px 20px; border-radius: 10px; }\n    .card { max-width: 360px; margin: 32px auto; padding: 24px; border: 2px solid #30d05c; border-radius: 12px; text-align: center; }\n    @media (max-width: 600px) {\n      .header { flex-direction: column; gap: 8px; }\n    }\n  </style>\n</head>\n<body>\n  <div class=\"header\">\n    <span class=\"title\">SkillRun</span>\n    <span class=\"nav\">Home &middot; Learn &middot; Contact</span>\n  </div>\n  <div class=\"card\">\n    <h2>Welcome</h2>\n    <p>This page has been redesigned.</p>\n  </div>\n</body>\n</html>",
      unlock: "CSS Foundations"
    },
    unlock: "CSS Foundations"
  }
]);

registerMissions([
  {
    id: "web-js-script",
    num: 35,
    title: "The Script Tag",
    tagline: "Your first JavaScript that changes the page.",
    skill: "JavaScript",
    xp: 110,
    type: "html",
    icon: '<path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 5l-2 14"/>',
    meta: { kind: "normal", series: "w5-js", order: 1 },
    briefing: {
      objective: "Run JavaScript that writes to the page.",
      body: "HTML and CSS describe a page. JavaScript makes it react. In the target, the words \"Hello from JavaScript!\" were written by a script, not typed into the HTML. A script is a block of code inside a script tag that runs when the page loads — your first step into real interactivity."
    },
    challenges: [
      {
        id: "ch1",
        title: "Write with a script",
        target: "<p id=\"msg\">Hello from JavaScript!</p>",
        instructions: "Add a script tag and make it write \"Hello from JavaScript!\" into the paragraph.",
        learning: "<script>\n  document.getElementById('msg').textContent = 'Hello from JavaScript!';\n</script>\n\nA script tag holds JavaScript. getElementById('msg') finds the paragraph by its id. textContent is the text inside it. Assigning a new value with = replaces that text. Script tags live in the body, usually at the end, and run when the page loads.",
        example: "document.getElementById('msg').textContent = 'Hello from JavaScript!';",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Script</title>\n</head>\n<body>\n  <p id=\"msg\">Static text</p>\n  <script>\n  </script>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '');\n    if (src.indexOf('<script') === -1) return { passed: false, message: 'Add a <script> tag.' };\n    var msg = document.getElementById('msg');\n    if (!msg) return { passed: false, message: 'Keep the paragraph with id=\"msg\".' };\n    var t = msg.textContent || '';\n    if (t.indexOf('Hello from JavaScript!') === -1) return { passed: false, message: 'Your script should write \"Hello from JavaScript!\" into the paragraph.' };\n    return { passed: true, message: 'JavaScript wrote to the page — script tags work!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Add <script> at the end of the body.",
          "getElementById('msg').textContent = 'Hello from JavaScript!';",
          "The = sign stores the new text."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Script</title>\n</head>\n<body>\n  <p id=\"msg\">Static text</p>\n  <script>\n    document.getElementById('msg').textContent = 'Hello from JavaScript!';\n  </script>\n</body>\n</html>"
      }
    ],
    build: {
      title: "A page that writes its heading",
      prompt: "Build a page with an empty heading (id=\"title\") and a script that fills it with a title of your choice.",
      target: "<h1 id=\"title\">Welcome to SkillRun</h1>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Script</title>\n</head>\n<body>\n  <h1 id=\"title\"></h1>\n  <script>\n  </script>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '');\n    if (src.indexOf('<script') === -1) return { passed: false, message: 'Add a script tag.' };\n    var title = document.getElementById('title');\n    if (!title) return { passed: false, message: 'Add a heading with id=\"title\".' };\n    if (!(title.textContent || '').trim()) return { passed: false, message: 'Your script should write the heading text.' };\n    if ((title.textContent || '').indexOf('SkillRun') === -1 && (title.textContent || '').indexOf('Welcome') === -1) return { passed: false, message: 'Make the heading say something (e.g. \"Welcome to SkillRun\").' };\n    return { passed: true, message: 'A page that writes its own heading!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "An empty <h1 id=\"title\"></h1>.",
        "Script fills it with textContent.",
        "Any title works — make it yours."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Script</title>\n</head>\n<body>\n  <h1 id=\"title\"></h1>\n  <script>\n    document.getElementById('title').textContent = 'Welcome to SkillRun';\n  </script>\n</body>\n</html>",
      unlock: "JavaScript Basics"
    },
    unlock: "JavaScript Basics"
  },

  {
    id: "web-js-vars",
    num: 36,
    title: "Variables",
    tagline: "Store values with a name you choose.",
    skill: "JavaScript",
    xp: 120,
    type: "html",
    icon: '<path d="M4 6h16M4 12h16M4 18h7"/>',
    meta: { kind: "normal", series: "w5-js", order: 2 },
    briefing: {
      objective: "Store values in variables and use them on the page.",
      body: "Hard-coding text works, but real pages store values in variables — named boxes you can reuse. Look at the target: the word \"SkillRun\" appears because a variable named siteName holds it. Change the variable once and the page updates everywhere it is used."
    },
    challenges: [
      {
        id: "ch1",
        title: "Store a site name",
        target: "<h1 id=\"name\">SkillRun</h1>",
        instructions: "Create a variable called siteName with the value \"SkillRun\", then use it to fill the heading.",
        learning: "var siteName = \"SkillRun\";\ndocument.getElementById('name').textContent = siteName;\n\nvar declares a variable. The name (siteName) is your choice. The = stores a value in it. Then you can use siteName anywhere — the heading shows whatever it holds.",
        example: "var siteName = \"SkillRun\";",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Variables</title>\n</head>\n<body>\n  <h1 id=\"name\"></h1>\n  <script>\n  </script>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '');\n    if (src.indexOf('var siteName') === -1) return { passed: false, message: 'Declare a variable named siteName.' };\n    var name = document.getElementById('name');\n    if (!name) return { passed: false, message: 'Keep the heading with id=\"name\".' };\n    if ((name.textContent || '').indexOf('SkillRun') === -1) return { passed: false, message: 'The heading should show the siteName value.' };\n    return { passed: true, message: 'A variable holding your site name — stored and used!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "var siteName = \"SkillRun\";",
          "Assign it to the heading with textContent.",
          "Use the variable, not the literal text."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Variables</title>\n</head>\n<body>\n  <h1 id=\"name\"></h1>\n  <script>\n    var siteName = \"SkillRun\";\n    document.getElementById('name').textContent = siteName;\n  </script>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Two variables",
        target: "<h1 id=\"name\">SkillRun</h1><p id=\"tagline\">Learn web development the practical way.</p>",
        instructions: "Add a second variable, tagline, and use it to fill the paragraph. Keep siteName for the heading.",
        learning: "var siteName = \"SkillRun\";\nvar tagline = \"Learn web development the practical way.\";\n\nOne script can hold many variables. Each var gets its own name and value. A heading can come from one variable, a paragraph from another. This is how a page becomes data-driven.",
        example: "var tagline = \"Learn web development the practical way.\";",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Variables</title>\n</head>\n<body>\n  <h1 id=\"name\"></h1>\n  <p id=\"tagline\"></p>\n  <script>\n  </script>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '');\n    if (src.indexOf('var siteName') === -1 || src.indexOf('var tagline') === -1) return { passed: false, message: 'Declare siteName and tagline variables.' };\n    var name = document.getElementById('name');\n    var tag = document.getElementById('tagline');\n    if (!name || !tag) return { passed: false, message: 'Keep the heading (id=\"name\") and paragraph (id=\"tagline\").' };\n    if (!(name.textContent || '').trim() || !(tag.textContent || '').trim()) return { passed: false, message: 'Both elements should be filled by your variables.' };\n    return { passed: true, message: 'Two variables powering two elements.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "var tagline = \"...\";",
          "Assign it to the paragraph.",
          "Keep siteName in the heading."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Variables</title>\n</head>\n<body>\n  <h1 id=\"name\"></h1>\n  <p id=\"tagline\"></p>\n  <script>\n    var siteName = \"SkillRun\";\n    var tagline = \"Learn web development the practical way.\";\n    document.getElementById('name').textContent = siteName;\n    document.getElementById('tagline').textContent = tagline;\n  </script>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Your data-driven page",
      prompt: "Build a page with a heading and a paragraph, both filled from your own variables.",
      target: "<h1>My site</h1><p>My tagline</p>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Variables</title>\n</head>\n<body>\n  <h1 id=\"name\"></h1>\n  <p id=\"tagline\"></p>\n  <script>\n  </script>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '');\n    var m = src.match(/var\\s+\\w+/g) || [];\n    if (m.length < 2) return { passed: false, message: 'Declare at least two variables with var.' };\n    var h1 = document.querySelector('h1');\n    var p = document.querySelector('p');\n    if (!h1 || !p) return { passed: false, message: 'Keep a heading and a paragraph.' };\n    if (!(h1.textContent || '').trim() || !(p.textContent || '').trim()) return { passed: false, message: 'Fill the heading and paragraph using your variables.' };\n    return { passed: true, message: 'Variables make your page data-driven!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "Two var declarations.",
        "Heading from one, paragraph from another.",
        "Pick values that describe your site."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Variables</title>\n</head>\n<body>\n  <h1 id=\"name\"></h1>\n  <p id=\"tagline\"></p>\n  <script>\n    var siteName = \"My Site\";\n    var tagline = \"My tagline — built with variables.\";\n    document.getElementById('name').textContent = siteName;\n    document.getElementById('tagline').textContent = tagline;\n  </script>\n</body>\n</html>",
      unlock: "JavaScript Basics"
    },
    unlock: "JavaScript Basics"
  },

  {
    id: "web-js-strings",
    num: 37,
    title: "Strings",
    tagline: "Join pieces of text together.",
    skill: "JavaScript",
    xp: 120,
    type: "html",
    icon: '<path d="M4 20h16M6 20V8a6 6 0 0 1 12 0v12"/>',
    meta: { kind: "normal", series: "w5-js", order: 3 },
    briefing: {
      objective: "Build messages by joining text with +.",
      body: "A string is a piece of text wrapped in quotes — the \"name\" in greeting = \"Hello, \" + name + \"!\". Strings join together with +, the same symbol that adds numbers. Look at the target: \"Hello, Sam!\" was built from three parts: a fixed greeting, a name, and an exclamation mark."
    },
    challenges: [
      {
        id: "ch1",
        title: "Build a greeting",
        target: "<p id=\"greet\">Hello, Sam!</p>",
        instructions: "Store \"Sam\" in a variable, join it with \"Hello, \" and \"!\" using +, and show the result in the paragraph.",
        learning: "var name = \"Sam\";\nvar greeting = \"Hello, \" + name + \"!\";\n\nText in quotes is a string. The + operator joins strings end to end. \"Hello, \" + name + \"!\" becomes \"Hello, Sam!\". Store the joined result in a variable, then put it on the page.",
        example: "var greeting = \"Hello, \" + name + \"!\";",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Strings</title>\n</head>\n<body>\n  <p id=\"greet\"></p>\n  <script>\n  </script>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '');\n    if (src.indexOf('var greeting') === -1) return { passed: false, message: 'Store the result in a variable named greeting.' };\n    if (src.indexOf('+') === -1) return { passed: false, message: 'Join the pieces with the + operator.' };\n    var greet = document.getElementById('greet');\n    if (!greet) return { passed: false, message: 'Keep the paragraph with id=\"greet\".' };\n    if ((greet.textContent || '').indexOf('Hello, Sam!') === -1) return { passed: false, message: 'The greeting should read \"Hello, Sam!\".' };\n    return { passed: true, message: 'Strings joined together — your message is assembled!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "var name = \"Sam\";",
          "var greeting = \"Hello, \" + name + \"!\";",
          "Put greeting into the paragraph."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Strings</title>\n</head>\n<body>\n  <p id=\"greet\"></p>\n  <script>\n    var name = \"Sam\";\n    var greeting = \"Hello, \" + name + \"!\";\n    document.getElementById('greet').textContent = greeting;\n  </script>\n</body>\n</html>"
      }
    ],
    build: {
      title: "A full name",
      prompt: "Build a page that shows a full name by joining a first name and a last name (with a space) using +.",
      target: "<p id=\"fullname\">Ada Lovelace</p>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Strings</title>\n</head>\n<body>\n  <p id=\"fullname\"></p>\n  <script>\n  </script>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '');\n    if (src.indexOf('+') === -1) return { passed: false, message: 'Join strings with +.' };\n    var out = document.getElementById('fullname');\n    if (!out) return { passed: false, message: 'Keep the element with id=\"fullname\".' };\n    var t = (out.textContent || '').trim();\n    if (t.length < 3) return { passed: false, message: 'Show a full name made from joined strings.' };\n    if (t.indexOf(' ') === -1) return { passed: false, message: 'The full name should combine a first and last name with a space.' };\n    return { passed: true, message: 'A full name assembled from parts!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "first + \" \" + last",
        "The space is a string too.",
        "Store it in a variable first."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Strings</title>\n</head>\n<body>\n  <p id=\"fullname\"></p>\n  <script>\n    var first = \"Ada\";\n    var last = \"Lovelace\";\n    var fullname = first + \" \" + last;\n    document.getElementById('fullname').textContent = fullname;\n  </script>\n</body>\n</html>",
      unlock: "JavaScript Basics"
    },
    unlock: "JavaScript Basics"
  },

  {
    id: "web-js-numbers",
    num: 38,
    title: "Numbers",
    tagline: "Do math inside your page.",
    skill: "JavaScript",
    xp: 120,
    type: "html",
    icon: '<path d="M4 17V7l8 7V7M16 7h4M18 7v10"/>',
    meta: { kind: "normal", series: "w5-js", order: 4 },
    briefing: {
      objective: "Add numbers and show the result.",
      body: "JavaScript is a calculator you can put on a page. Numbers are stored in variables, added with +, and the result is displayed as text. Look at the target: \"Total: $25\" came from price (20) plus shipping (5), computed by code, not typed by hand."
    },
    challenges: [
      {
        id: "ch1",
        title: "Total the order",
        target: "<p id=\"total\">Total: $25</p>",
        instructions: "Store price (20) and shipping (5) in variables, add them into a variable called total, and show \"Total: $25\" in the paragraph.",
        learning: "var price = 20;\nvar shipping = 5;\nvar total = price + shipping;\n\nNumbers need no quotes. + adds them like a calculator. Store the sum in a variable, then show it. Build the display text by joining \"Total: $\" with the number using +.",
        example: "var total = price + shipping;",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Numbers</title>\n</head>\n<body>\n  <p id=\"total\"></p>\n  <script>\n  </script>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '');\n    if (src.indexOf('var price') === -1 || src.indexOf('var shipping') === -1) return { passed: false, message: 'Declare price and shipping variables.' };\n    if (src.indexOf('var total') === -1) return { passed: false, message: 'Store the result in a variable named total.' };\n    if (src.indexOf('price + shipping') === -1 && src.indexOf('price+shipping') === -1) return { passed: false, message: 'Add them with price + shipping.' };\n    var out = document.getElementById('total');\n    if (!out) return { passed: false, message: 'Keep the element with id=\"total\".' };\n    if ((out.textContent || '').indexOf('25') === -1) return { passed: false, message: 'The total should read $25 (20 + 5).' };\n    return { passed: true, message: 'Math in JavaScript — the total is computed!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "var price = 20; var shipping = 5;",
          "var total = price + shipping;",
          "Show \"Total: $\" + total."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Numbers</title>\n</head>\n<body>\n  <p id=\"total\"></p>\n  <script>\n    var price = 20;\n    var shipping = 5;\n    var total = price + shipping;\n    document.getElementById('total').textContent = \"Total: $\" + total;\n  </script>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Your own calculation",
      prompt: "Build a page that adds two numbers you choose and shows the result.",
      target: "<p id=\"result\">Result: 42</p>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Numbers</title>\n</head>\n<body>\n  <p id=\"result\"></p>\n  <script>\n  </script>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '');\n    var m = src.match(/var\\s+\\w+/g) || [];\n    if (m.length < 2) return { passed: false, message: 'Declare at least two number variables.' };\n    if (src.indexOf('+') === -1) return { passed: false, message: 'Add them with +.' };\n    var out = document.getElementById('result');\n    if (!out) return { passed: false, message: 'Keep the element with id=\"result\".' };\n    if (!(out.textContent || '').trim()) return { passed: false, message: 'Show the computed result.' };\n    return { passed: true, message: 'Your own calculation, computed by the browser!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "Two number variables.",
        "Add them with +.",
        "Show the result with a label."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Numbers</title>\n</head>\n<body>\n  <p id=\"result\"></p>\n  <script>\n    var first = 30;\n    var second = 12;\n    var result = first + second;\n    document.getElementById('result').textContent = \"Result: \" + result;\n  </script>\n</body>\n</html>",
      unlock: "JavaScript Basics"
    },
    unlock: "JavaScript Basics"
  },

  {
    id: "web-js-click",
    num: 39,
    title: "Buttons",
    tagline: "Make the page react to a click.",
    skill: "JavaScript",
    xp: 130,
    type: "html",
    icon: '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 8v8M8 12h8"/>',
    meta: { kind: "normal", series: "w5-js", order: 5 },
    briefing: {
      objective: "Run JavaScript when a button is clicked.",
      body: "So far scripts run once when the page loads. Real pages react: a button click, a keypress, a hover. The tool is an event — a signal that something happened. onclick runs code when a button is clicked. Look at the target: clicking the button changes the heading to \"Clicked!\"."
    },
    challenges: [
      {
        id: "ch1",
        title: "React to a click",
        target: "<button id=\"btn\">Click me</button><h1 id=\"out\">Not clicked</h1>",
        instructions: "Add a button with an onclick handler that changes the heading's text to \"Clicked!\".",
        learning: "<button id=\"btn\" onclick=\"document.getElementById('out').textContent = 'Clicked!'\">Click me</button>\n\nThe onclick attribute holds JavaScript that runs when the button is clicked. The quotes are important: double quotes wrap the attribute, single quotes wrap the string inside the code. One click, one change.",
        example: "onclick=\"document.getElementById('out').textContent = 'Clicked!'\"",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Buttons</title>\n</head>\n<body>\n  <button id=\"btn\" onclick=\"\">Click me</button>\n  <h1 id=\"out\">Not clicked</h1>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var btn = document.getElementById('btn');\n    if (!btn) return { passed: false, message: 'Add a button with id=\"btn\".' };\n    if (!(btn.getAttribute('onclick') || '')) return { passed: false, message: 'Give the button an onclick handler.' };\n    var h1 = document.getElementById('out');\n    if (!h1) return { passed: false, message: 'Keep the heading with id=\"out\".' };\n    btn.click();\n    if ((h1.textContent || '').indexOf('Clicked!') === -1) return { passed: false, message: 'Clicking the button should change the heading to \"Clicked!\".' };\n    return { passed: true, message: 'Clicking works — the page reacts!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "onclick=\"...\" on the button.",
          "Inside: getElementById('out').textContent = 'Clicked!'",
          "Double quotes outside, single quotes inside."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Buttons</title>\n</head>\n<body>\n  <button id=\"btn\" onclick=\"document.getElementById('out').textContent = 'Clicked!'\">Click me</button>\n  <h1 id=\"out\">Not clicked</h1>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Your click reaction",
      prompt: "Build a button that changes a paragraph's text when clicked.",
      target: "<button>Go</button><p>Changed!</p>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Buttons</title>\n</head>\n<body>\n  <button id=\"btn\" onclick=\"\">Go</button>\n  <p id=\"out\">Ready</p>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var btn = document.getElementById('btn');\n    var out = document.getElementById('out');\n    if (!btn || !out) return { passed: false, message: 'Keep the button (id=\"btn\") and the paragraph (id=\"out\").' };\n    if (!(btn.getAttribute('onclick') || '')) return { passed: false, message: 'Give the button an onclick handler.' };\n    var before = out.textContent || '';\n    btn.click();\n    var after = out.textContent || '';\n    if (before === after) return { passed: false, message: 'Clicking should change the paragraph text.' };\n    if ((after || '').indexOf('Changed!') === -1) return { passed: false, message: 'The paragraph should read \"Changed!\" after the click.' };\n    return { passed: true, message: 'Buttons and clicks — your page reacts on demand!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "onclick sets the paragraph text.",
        "Use id=\"out\" and id=\"btn\".",
        "One click, one change."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Buttons</title>\n</head>\n<body>\n  <button id=\"btn\" onclick=\"document.getElementById('out').textContent = 'Changed!'\">Go</button>\n  <p id=\"out\">Ready</p>\n</body>\n</html>",
      unlock: "JavaScript Basics"
    },
    unlock: "JavaScript Basics"
  },

  {
    id: "web-js-input",
    num: 40,
    title: "Read Input",
    tagline: "Read what the user types.",
    skill: "JavaScript",
    xp: 140,
    type: "html",
    icon: '<path d="M4 6h16M4 12h16M4 18h10"/><circle cx="18" cy="16" r="3"/>',
    meta: { kind: "normal", series: "w5-js", order: 6 },
    briefing: {
      objective: "Read an input box and react to it.",
      body: "An input box is an open door for the user's data. JavaScript reads what they type with the .value property. Look at the target: type a name, click Greet, and the page answers with a greeting built from that name. The page is talking to its visitor."
    },
    challenges: [
      {
        id: "ch1",
        title: "Greet the visitor",
        target: "<input placeholder=\"Your name\"><button>Greet</button><p id=\"out\">Hello, Alex!</p>",
        instructions: "Add an input (id=\"name\"), a button, and an output paragraph. When the button is clicked, read the input's .value and show \"Hello, \" + name + \"!\".",
        learning: "<button onclick=\"var n = document.getElementById('name').value; document.getElementById('out').textContent = 'Hello, ' + n + '!';\">Greet</button>\n\n.value reads what the user typed into the input. Store it in a variable, join it into a greeting with +, and put the result on the page. The page now responds to its visitor.",
        example: "var n = document.getElementById('name').value;",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Input</title>\n</head>\n<body>\n  <input id=\"name\" placeholder=\"Your name\">\n  <button id=\"btn\" onclick=\"\">Greet</button>\n  <p id=\"out\"></p>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '');\n    if (src.indexOf('.value') === -1) return { passed: false, message: 'Read the input with the .value property.' };\n    var input = document.getElementById('name');\n    var btn = document.getElementById('btn');\n    var out = document.getElementById('out');\n    if (!input || !btn || !out) return { passed: false, message: 'Keep the input (id=\"name\"), button (id=\"btn\") and output (id=\"out\").' };\n    input.value = 'Alex';\n    btn.click();\n    if ((out.textContent || '').indexOf('Hello, Alex!') === -1) return { passed: false, message: 'Clicking after typing should show \"Hello, Alex!\".' };\n    return { passed: true, message: 'The page reads the input and reacts!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "input.value gives the typed text.",
          "Build the greeting with +.",
          "Do it inside onclick."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Input</title>\n</head>\n<body>\n  <input id=\"name\" placeholder=\"Your name\">\n  <button id=\"btn\" onclick=\"var n = document.getElementById('name').value; document.getElementById('out').textContent = 'Hello, ' + n + '!';\">Greet</button>\n  <p id=\"out\"></p>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Two inputs, one message",
      prompt: "Build a page with two inputs (first name and last name). Clicking a button shows the full name in a paragraph.",
      target: "<input placeholder=\"First\"><input placeholder=\"Last\"><button>Join</button><p>Ada Lovelace</p>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Input</title>\n</head>\n<body>\n  <input id=\"first\" placeholder=\"First\">\n  <input id=\"last\" placeholder=\"Last\">\n  <button id=\"btn\" onclick=\"\">Join</button>\n  <p id=\"out\"></p>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '');\n    if (src.indexOf('.value') === -1) return { passed: false, message: 'Read the inputs with .value.' };\n    var first = document.getElementById('first');\n    var last = document.getElementById('last');\n    var btn = document.getElementById('btn');\n    var out = document.getElementById('out');\n    if (!first || !last || !btn || !out) return { passed: false, message: 'Keep the two inputs, button and output.' };\n    first.value = 'Ada';\n    last.value = 'Lovelace';\n    btn.click();\n    var t = out.textContent || '';\n    if (t.indexOf('Ada') === -1 || t.indexOf('Lovelace') === -1) return { passed: false, message: 'The output should join the two names.' };\n    if (t.indexOf(' ') === -1) return { passed: false, message: 'Put a space between the names.' };\n    return { passed: true, message: 'Two inputs, one joined message — forms are alive!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "Read both inputs with .value.",
        "Join: first + \" \" + last.",
        "Show it in the output paragraph."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Input</title>\n</head>\n<body>\n  <input id=\"first\" placeholder=\"First\">\n  <input id=\"last\" placeholder=\"Last\">\n  <button id=\"btn\" onclick=\"var f = document.getElementById('first').value; var l = document.getElementById('last').value; document.getElementById('out').textContent = f + ' ' + l;\">Join</button>\n  <p id=\"out\"></p>\n</body>\n</html>",
      unlock: "JavaScript Basics"
    },
    unlock: "JavaScript Basics"
  },

  {
    id: "web-js-dom",
    num: 41,
    title: "The DOM",
    tagline: "Create and grow the page itself.",
    skill: "JavaScript",
    xp: 140,
    type: "html",
    icon: '<path d="M4 5h16M4 12h16M4 19h10"/>',
    meta: { kind: "normal", series: "w5-js", order: 7 },
    briefing: {
      objective: "Change the page and add new elements with JavaScript.",
      body: "The DOM is the browser's picture of your page — every tag is an object JavaScript can reach. You have already changed text with textContent. Now go further: grab elements by id, and create brand-new ones with createElement, adding them to the page with appendChild. The target shows a list that grows every time you click."
    },
    challenges: [
      {
        id: "ch1",
        title: "Change an element",
        target: "<h1 id=\"title\">Changed by JS</h1>",
        instructions: "Use getElementById and textContent to change the heading to \"Changed by JS\".",
        learning: "var title = document.getElementById('title');\ntitle.textContent = 'Changed by JS';\n\nGrab an element once into a variable, then use it. This two-step habit — get the element, then act on it — is the core of DOM work. You already did it inside onclick; now do it in a script.",
        example: "var title = document.getElementById('title');",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>DOM</title>\n</head>\n<body>\n  <h1 id=\"title\">Original</h1>\n  <script>\n  </script>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '');\n    if (src.indexOf('getElementById') === -1) return { passed: false, message: 'Find the element with getElementById.' };\n    var title = document.getElementById('title');\n    if (!title) return { passed: false, message: 'Keep the heading with id=\"title\".' };\n    if ((title.textContent || '').indexOf('Changed by JS') === -1) return { passed: false, message: 'The heading should read \"Changed by JS\".' };\n    return { passed: true, message: 'You grabbed the element and changed it — the DOM is yours!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "var title = document.getElementById('title');",
          "title.textContent = 'Changed by JS';",
          "Get it once, then act."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>DOM</title>\n</head>\n<body>\n  <h1 id=\"title\">Original</h1>\n  <script>\n    var title = document.getElementById('title');\n    title.textContent = 'Changed by JS';\n  </script>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Grow a list",
        target: "<button>Add item</button><ul id=\"list\"><li>First</li><li>Second</li></ul>",
        instructions: "Each click of the button should create a new list item with document.createElement and add it with appendChild.",
        learning: "function addItem() {\n  var li = document.createElement('li');\n  li.textContent = 'New item';\n  document.getElementById('list').appendChild(li);\n}\n\ncreateElement makes a brand-new tag in memory. Set its text, then appendChild attaches it to the page inside the list. A function wraps the steps so onclick can call it by name.",
        example: "var li = document.createElement('li');",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>DOM</title>\n</head>\n<body>\n  <button id=\"add\" onclick=\"addItem()\">Add item</button>\n  <ul id=\"list\">\n    <li>First</li>\n  </ul>\n  <script>\n    function addItem() {\n    }\n  </script>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '');\n    if (src.indexOf('createElement') === -1) return { passed: false, message: 'Create new items with document.createElement.' };\n    if (src.indexOf('appendChild') === -1) return { passed: false, message: 'Add them with appendChild.' };\n    var btn = document.getElementById('add');\n    var list = document.getElementById('list');\n    if (!btn || !list) return { passed: false, message: 'Keep the button (id=\"add\") and the list (id=\"list\").' };\n    var before = list.children.length;\n    btn.click();\n    btn.click();\n    if (list.children.length !== before + 2) return { passed: false, message: 'Each click should add a new list item.' };\n    return { passed: true, message: 'The DOM is growing — items are being created!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "createElement('li') makes a new item.",
          "Set its text, then appendChild it.",
          "Wrap it in a function called addItem."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>DOM</title>\n</head>\n<body>\n  <button id=\"add\" onclick=\"addItem()\">Add item</button>\n  <ul id=\"list\">\n    <li>First</li>\n  </ul>\n  <script>\n    function addItem() {\n      var li = document.createElement('li');\n      li.textContent = 'New item';\n      document.getElementById('list').appendChild(li);\n    }\n  </script>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Your growing page",
      prompt: "Build a button that adds a new list item every time it is clicked. Use createElement and appendChild.",
      target: "<button>Add</button><ul><li>One</li></ul>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>DOM</title>\n</head>\n<body>\n  <button id=\"add\" onclick=\"addItem()\">Add</button>\n  <ul id=\"list\">\n    <li>One</li>\n  </ul>\n  <script>\n    function addItem() {\n    }\n  </script>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '');\n    if (src.indexOf('createElement') === -1 || src.indexOf('appendChild') === -1) return { passed: false, message: 'Use createElement and appendChild.' };\n    var btn = document.getElementById('add');\n    var list = document.getElementById('list');\n    if (!btn || !list) return { passed: false, message: 'Keep the button (id=\"add\") and the list (id=\"list\").' };\n    var before = list.children.length;\n    btn.click();\n    if (list.children.length !== before + 1) return { passed: false, message: 'Each click should add exactly one item.' };\n    return { passed: true, message: 'A page that builds itself — DOM mastery!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "function addItem() creates one li.",
        "createElement, set text, appendChild.",
        "The onclick already calls addItem."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>DOM</title>\n</head>\n<body>\n  <button id=\"add\" onclick=\"addItem()\">Add</button>\n  <ul id=\"list\">\n    <li>One</li>\n  </ul>\n  <script>\n    function addItem() {\n      var li = document.createElement('li');\n      li.textContent = 'Another one';\n      document.getElementById('list').appendChild(li);\n    }\n  </script>\n</body>\n</html>",
      unlock: "JavaScript Basics"
    },
    unlock: "JavaScript Basics"
  },

  {
    id: "web-js-style",
    num: 42,
    title: "Style from JavaScript",
    tagline: "Change the look of the page from code.",
    skill: "JavaScript",
    xp: 130,
    type: "html",
    icon: '<path d="M4 7h16M4 12h16M4 17h16"/><circle cx="16" cy="12" r="3" fill="currentColor"/>',
    meta: { kind: "normal", series: "w5-js", order: 8 },
    briefing: {
      objective: "Change styles with the style property.",
      body: "CSS styles the page; JavaScript can restyle it live. Every element has a .style object holding its inline CSS. Set el.style.backgroundColor and the color changes instantly. Look at the target: the Dark mode button flips the whole page dark with one click."
    },
    challenges: [
      {
        id: "ch1",
        title: "Dark mode",
        target: "<button>Dark mode</button>",
        instructions: "Make the button turn the page dark: set document.body.style.backgroundColor to a dark color when clicked.",
        learning: "onclick=\"document.body.style.backgroundColor = '#0f172a'\"\n\n.style holds the inline styles of an element. background-color becomes backgroundColor in JavaScript — dashes are removed and the next word is capitalized. The button click sets the body's background directly.",
        example: "document.body.style.backgroundColor = '#0f172a';",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Style</title>\n</head>\n<body>\n  <button id=\"dark\" onclick=\"\">Dark mode</button>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var btn = document.getElementById('dark');\n    if (!btn) return { passed: false, message: 'Add a button with id=\"dark\".' };\n    if (!(btn.getAttribute('onclick') || '')) return { passed: false, message: 'Give the button an onclick handler.' };\n    btn.click();\n    var bg = window.getComputedStyle(document.body).backgroundColor || '';\n    var rgb = bg.match(/\\d+/g);\n    if (!rgb || Number(rgb[0]) > 80) return { passed: false, message: 'Clicking should turn the page dark.' };\n    return { passed: true, message: 'JavaScript is styling the page now!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "document.body.style.backgroundColor = '#0f172a';",
          "background-color becomes backgroundColor.",
          "Put it in the onclick."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Style</title>\n</head>\n<body>\n  <button id=\"dark\" onclick=\"document.body.style.backgroundColor = '#0f172a'\">Dark mode</button>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Recolor the heading",
      prompt: "Build a button that turns a heading green when clicked (style.color).",
      target: "<button>Go green</button><h1>Heading</h1>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Style</title>\n</head>\n<body>\n  <button id=\"go\" onclick=\"\">Go green</button>\n  <h1 id=\"head\">Heading</h1>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var btn = document.getElementById('go');\n    var head = document.getElementById('head');\n    if (!btn || !head) return { passed: false, message: 'Keep the button (id=\"go\") and heading (id=\"head\").' };\n    if (!(btn.getAttribute('onclick') || '')) return { passed: false, message: 'Give the button an onclick handler.' };\n    btn.click();\n    var c = (window.getComputedStyle(head).color || '').match(/\\d+/g);\n    if (!c || Number(c[1]) < 150) return { passed: false, message: 'Clicking should turn the heading green.' };\n    return { passed: true, message: 'Style on demand — the heading is green!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "head.style.color = '#30d05c';",
        "Get the heading by id first.",
        "Do it in onclick."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Style</title>\n</head>\n<body>\n  <button id=\"go\" onclick=\"document.getElementById('head').style.color = '#30d05c'\">Go green</button>\n  <h1 id=\"head\">Heading</h1>\n</body>\n</html>",
      unlock: "JavaScript Basics"
    },
    unlock: "JavaScript Basics"
  },

  {
    id: "web-js-conditions",
    num: 43,
    title: "Conditions",
    tagline: "Make your code decide.",
    skill: "JavaScript",
    xp: 140,
    type: "html",
    icon: '<path d="M6 4h8a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2 2 2 0 0 0 0 4 2 2 0 0 0-2 2v2a2 2 0 0 1-2 2H6z"/>',
    meta: { kind: "normal", series: "w5-js", order: 9 },
    briefing: {
      objective: "Use if / else to give different answers.",
      body: "So far code always does the same thing. Real pages make choices. The if statement asks a question — if the answer is true it runs one block, otherwise (else) it runs another. Look at the target: a number is checked; big numbers get \"Big\", small ones get \"Small\"."
    },
    challenges: [
      {
        id: "ch1",
        title: "Big or small",
        target: "<input placeholder=\"Number\"><button>Check</button><p id=\"out\">Big</p>",
        instructions: "Read a number from the input. If it is greater than 10, show \"Big\"; otherwise show \"Small\".",
        learning: "var n = Number(document.getElementById('num').value);\nif (n > 10) {\n  document.getElementById('out').textContent = 'Big';\n} else {\n  document.getElementById('out').textContent = 'Small';\n}\n\nNumber() turns the typed text into a real number, because .value gives a string. if asks the question; > compares. True runs the first block, false runs the else block. Two possible outcomes, one page.",
        example: "if (n > 10) { ... } else { ... }",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Conditions</title>\n</head>\n<body>\n  <input id=\"num\" placeholder=\"Number\">\n  <button id=\"check\" onclick=\"checkNumber()\">Check</button>\n  <p id=\"out\"></p>\n  <script>\n    function checkNumber() {\n    }\n  </script>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '');\n    if (src.indexOf('if') === -1) return { passed: false, message: 'Use an if / else to decide the message.' };\n    var input = document.getElementById('num');\n    var btn = document.getElementById('check');\n    var out = document.getElementById('out');\n    if (!input || !btn || !out) return { passed: false, message: 'Keep the input (id=\"num\"), button (id=\"check\") and output (id=\"out\").' };\n    input.value = '25';\n    btn.click();\n    if ((out.textContent || '').indexOf('Big') === -1) return { passed: false, message: '25 is big — show \"Big\".' };\n    input.value = '5';\n    btn.click();\n    if ((out.textContent || '').indexOf('Small') === -1) return { passed: false, message: '5 is small — show \"Small\".' };\n    return { passed: true, message: 'Your code decides what to show — conditions work!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Number(input.value) converts the text.",
          "if (n > 10) { Big } else { Small }",
          "Both messages must exist."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Conditions</title>\n</head>\n<body>\n  <input id=\"num\" placeholder=\"Number\">\n  <button id=\"check\" onclick=\"checkNumber()\">Check</button>\n  <p id=\"out\"></p>\n  <script>\n    function checkNumber() {\n      var n = Number(document.getElementById('num').value);\n      if (n > 10) {\n        document.getElementById('out').textContent = 'Big';\n      } else {\n        document.getElementById('out').textContent = 'Small';\n      }\n    }\n  </script>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Your own decision",
      prompt: "Build a checker: type a word, click, and show \"Long\" if it is longer than 5 characters, otherwise \"Short\".",
      target: "<input placeholder=\"Word\"><button>Check</button><p>Long</p>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Conditions</title>\n</head>\n<body>\n  <input id=\"word\" placeholder=\"Word\">\n  <button id=\"check\" onclick=\"checkWord()\">Check</button>\n  <p id=\"out\"></p>\n  <script>\n    function checkWord() {\n    }\n  </script>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var src = (window.__SkillRunSource || '');\n    if (src.indexOf('if') === -1) return { passed: false, message: 'Use an if / else statement.' };\n    var input = document.getElementById('word');\n    var btn = document.getElementById('check');\n    var out = document.getElementById('out');\n    if (!input || !btn || !out) return { passed: false, message: 'Keep the input, button and output.' };\n    input.value = 'abcdef';\n    btn.click();\n    if ((out.textContent || '').indexOf('Long') === -1) return { passed: false, message: 'A 6-character word should show \"Long\".' };\n    input.value = 'ab';\n    btn.click();\n    if ((out.textContent || '').indexOf('Short') === -1) return { passed: false, message: 'A 2-character word should show \"Short\".' };\n    return { passed: true, message: 'if / else mastered — your page makes decisions!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        ".length counts characters.",
        "if (word.length > 5) { Long } else { Short }",
        "Write both messages."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Conditions</title>\n</head>\n<body>\n  <input id=\"word\" placeholder=\"Word\">\n  <button id=\"check\" onclick=\"checkWord()\">Check</button>\n  <p id=\"out\"></p>\n  <script>\n    function checkWord() {\n      var word = document.getElementById('word').value;\n      if (word.length > 5) {\n        document.getElementById('out').textContent = 'Long';\n      } else {\n        document.getElementById('out').textContent = 'Short';\n      }\n    }\n  </script>\n</body>\n</html>",
      unlock: "JavaScript Basics"
    },
    unlock: "JavaScript Basics"
  },

  {
    id: "web-js-boss",
    num: 44,
    title: "Build an Interactive App",
    tagline: "The boss: a counter that adds and subtracts.",
    skill: "JavaScript",
    xp: 170,
    type: "html",
    icon: '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 8v8M8 12h8"/>',
    meta: { kind: "boss", series: "w5-js", order: 10, focusLock: true, hintCap: 1 },
    briefing: {
      objective: "Combine everything: a working counter app.",
      body: "The boss of the JavaScript series. Combine variables, buttons, clicks, the DOM and math into one real app: a counter with a number on the page, a + button that adds 1, and a - button that subtracts 1. Every skill you just learned is in this page."
    },
    challenges: [
      {
        id: "ch1",
        title: "A counter that counts",
        target: "<button>+</button><p id=\"count\">0</p>",
        instructions: "Build a counter: a number on the page and a + button. Each click adds 1 to the number.",
        learning: "This is composition: a variable holds the count, a function reads the element, adds to the variable, and writes the new value back. On every click the cycle repeats: read → change → write.",
        example: "count = count + 1;",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Counter</title>\n</head>\n<body>\n  <button id=\"add\" onclick=\"addOne()\">+</button>\n  <p id=\"count\">0</p>\n  <script>\n    var count = 0;\n    function addOne() {\n    }\n  </script>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var btn = document.getElementById('add');\n    var out = document.getElementById('count');\n    if (!btn || !out) return { passed: false, message: 'Keep the button (id=\"add\") and the counter (id=\"count\").' };\n    var start = parseInt(out.textContent, 10) || 0;\n    btn.click();\n    btn.click();\n    btn.click();\n    var now = parseInt(out.textContent, 10) || 0;\n    if (now !== start + 3) return { passed: false, message: 'Each click should add 1 to the counter.' };\n    return { passed: true, message: 'A working counter — your first interactive app!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "One hint only — this is the boss.",
          "count = count + 1; then put it back on the page."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Counter</title>\n</head>\n<body>\n  <button id=\"add\" onclick=\"addOne()\">+</button>\n  <p id=\"count\">0</p>\n  <script>\n    var count = 0;\n    function addOne() {\n      count = count + 1;\n      document.getElementById('count').textContent = count;\n    }\n  </script>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Full counter",
      prompt: "Extend the counter: add a - button (id=\"minus\") that subtracts 1. The + button and the counter must keep working.",
      target: "<button>-</button><button>+</button><p id=\"count\">1</p>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Counter</title>\n</head>\n<body>\n  <button id=\"minus\" onclick=\"minusOne()\">-</button>\n  <button id=\"add\" onclick=\"addOne()\">+</button>\n  <p id=\"count\">0</p>\n  <script>\n    var count = 0;\n    function addOne() {\n      count = count + 1;\n      document.getElementById('count').textContent = count;\n    }\n    function minusOne() {\n    }\n  </script>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var plus = document.getElementById('add');\n    var minus = document.getElementById('minus');\n    var out = document.getElementById('count');\n    if (!plus || !minus || !out) return { passed: false, message: 'Keep the plus, minus buttons and the counter.' };\n    var start = parseInt(out.textContent, 10) || 0;\n    plus.click();\n    plus.click();\n    minus.click();\n    var now = parseInt(out.textContent, 10) || 0;\n    if (now !== start + 1) return { passed: false, message: 'Two plus clicks and one minus click should net +1.' };\n    return { passed: true, message: 'BOSS DOWN — a full interactive app, built from scratch!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "minusOne subtracts 1 like addOne adds.",
        "Reuse the count variable.",
        "Everything you learned, in one page."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Counter</title>\n</head>\n<body>\n  <button id=\"minus\" onclick=\"minusOne()\">-</button>\n  <button id=\"add\" onclick=\"addOne()\">+</button>\n  <p id=\"count\">0</p>\n  <script>\n    var count = 0;\n    function addOne() {\n      count = count + 1;\n      document.getElementById('count').textContent = count;\n    }\n    function minusOne() {\n      count = count - 1;\n      document.getElementById('count').textContent = count;\n    }\n  </script>\n</body>\n</html>",
      unlock: "JavaScript Basics"
    },
    unlock: "JavaScript Basics"
  }
]);

registerMissions([
  {
    id: "web-data-name",
    num: 45,
    title: "Name Your Data",
    tagline: "Labels that survive the journey to the server.",
    skill: "Web Data",
    xp: 110,
    type: "html",
    icon: '<path d="M4 6h16M4 12h16M4 18h10"/>',
    meta: { kind: "normal", series: "w6-data", order: 1 },
    briefing: {
      objective: "Give every form field a name attribute.",
      body: "A form is a pipeline: fields on your page, data in your inbox. But the server only receives data that has a name. Without a name attribute, a value arrives with no label — useless. Look at the target: each input carries a name, so the server can tell the email from the name."
    },
    challenges: [
      {
        id: "ch1",
        title: "Name one field",
        target: "<label>Your name</label><input name=\"name\" placeholder=\"Type here\">",
        instructions: "Give the input a name attribute. The data needs a name to travel with.",
        learning: "<input name=\"name\">\n\nThe name attribute is the field's identity for the server. When the form is sent, it becomes a pair: name=value. Without a name, the value is dropped — the server simply never sees it.",
        example: "<input name=\"name\" placeholder=\"Type here\">",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Data</title>\n</head>\n<body>\n  <label>Your name</label>\n  <input placeholder=\"Type here\">\n</body>\n</html>",
        check: "(function(){\n  try {\n    var input = document.querySelector('input');\n    if (!input) return { passed: false, message: 'Keep an input field.' };\n    if (!input.getAttribute('name')) return { passed: false, message: 'Give the input a name attribute.' };\n    return { passed: true, message: 'The data has a name — it can be collected now.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Add name=\"name\" to the input.",
          "name = the field's identity.",
          "Without it, the server drops the value."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Data</title>\n</head>\n<body>\n  <label>Your name</label>\n  <input name=\"name\" placeholder=\"Type here\">\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Name every field",
        target: "<label>Your name</label><input name=\"name\"><label>Your email</label><input name=\"email\">",
        instructions: "Add a second input and name both fields — name and email.",
        learning: "Every field that should reach the server needs a name. One form can send many pairs: name=Ada, email=ada@example.com. The server lines them up like a spreadsheet row.",
        example: "<input name=\"email\" type=\"email\">",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Data</title>\n</head>\n<body>\n  <label>Your name</label>\n  <input placeholder=\"Type here\">\n  <label>Your email</label>\n  <input placeholder=\"Email\">\n</body>\n</html>",
        check: "(function(){\n  try {\n    var inputs = document.querySelectorAll('input');\n    if (inputs.length < 2) return { passed: false, message: 'Keep two input fields.' };\n    for (var i = 0; i < inputs.length; i++) { if (!inputs[i].getAttribute('name')) return { passed: false, message: 'Every field needs a name attribute.' }; }\n    return { passed: true, message: 'Every field has a name — the data is labelled.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Two inputs, two names.",
          "name and email.",
          "Server needs name=value pairs."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Data</title>\n</head>\n<body>\n  <label>Your name</label>\n  <input name=\"name\" placeholder=\"Type here\">\n  <label>Your email</label>\n  <input name=\"email\" placeholder=\"Email\">\n</body>\n</html>"
      }
    ],
    build: {
      title: "A named form",
      prompt: "Build a small form with at least three named input fields — every field needs a unique name.",
      target: "<label>Name</label><input name=\"name\"><label>Email</label><input name=\"email\"><label>Message</label><textarea name=\"message\"></textarea>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Data</title>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var inputs = document.querySelectorAll('input, textarea');\n    if (inputs.length < 3) return { passed: false, message: 'Add at least three form fields.' };\n    var names = {};\n    for (var i = 0; i < inputs.length; i++) {\n      var n = inputs[i].getAttribute('name');\n      if (!n) return { passed: false, message: 'Every field needs a name attribute.' };\n      if (names[n]) return { passed: false, message: 'Names must be unique.' };\n      names[n] = true;\n    }\n    return { passed: true, message: 'Three named fields — ready to collect real data!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "Three fields, three unique names.",
        "text and textarea both count.",
        "This is the foundation of every form."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Data</title>\n</head>\n<body>\n  <form>\n    <label>Name</label>\n    <input name=\"name\">\n    <label>Email</label>\n    <input name=\"email\">\n    <label>Message</label>\n    <textarea name=\"message\"></textarea>\n  </form>\n</body>\n</html>",
      unlock: "Data & Forms"
    },
    unlock: "Data & Forms"
  },

  {
    id: "web-data-send",
    num: 46,
    title: "Sending the Form",
    tagline: "Where the form goes and how it gets there.",
    skill: "Web Data",
    xp: 120,
    type: "html",
    icon: '<path d="M3 20l18-8-18-8 5 8-5 8z"/>',
    meta: { kind: "normal", series: "w6-data", order: 2 },
    briefing: {
      objective: "Set the form's action and method.",
      body: "Named fields are the cargo. Now the form needs a route: where to go and how. The action attribute is the destination URL. The method says how the data travels — GET sticks it in the address bar, POST hides it in the request body. Real forms send data with POST."
    },
    challenges: [
      {
        id: "ch1",
        title: "Add action and method",
        target: "<form action=\"https://example.com/save\" method=\"POST\"><input name=\"name\"><button>Send</button></form>",
        instructions: "Give the form an action (the destination URL) and method=\"POST\".",
        learning: "<form action=\"https://example.com/save\" method=\"POST\">\n\naction is where the data goes — a URL the server listens on. method is how it travels. POST sends the data in the request body, safely out of sight. This is the pair that makes a form send.",
        example: "<form action=\"https://example.com/save\" method=\"POST\">",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Send</title>\n</head>\n<body>\n  <form>\n    <input name=\"name\" placeholder=\"Your name\">\n    <button>Send</button>\n  </form>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var form = document.querySelector('form');\n    if (!form) return { passed: false, message: 'Add a form element.' };\n    if (!form.getAttribute('action')) return { passed: false, message: 'Give the form an action attribute (the destination).' };\n    var method = (form.getAttribute('method') || 'get').toLowerCase();\n    if (method !== 'post') return { passed: false, message: 'Use method=\"POST\" to send the data.' };\n    return { passed: true, message: 'The form knows where to go and how to send.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "action=\"...\" on the form.",
          "method=\"POST\".",
          "POST keeps data out of the URL."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Send</title>\n</head>\n<body>\n  <form action=\"https://example.com/save\" method=\"POST\">\n    <input name=\"name\" placeholder=\"Your name\">\n    <button>Send</button>\n  </form>\n</body>\n</html>"
      }
    ],
    build: {
      title: "A sending form",
      prompt: "Build a form with two named fields, an action, and method=\"POST\". It should be ready to send.",
      target: "<form action=\"https://example.com/save\" method=\"POST\"><input name=\"name\"><input name=\"email\"><button>Send</button></form>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Send</title>\n</head>\n<body>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var form = document.querySelector('form');\n    if (!form) return { passed: false, message: 'Add a form element.' };\n    if (!form.getAttribute('action')) return { passed: false, message: 'Give the form an action.' };\n    if ((form.getAttribute('method') || 'get').toLowerCase() !== 'post') return { passed: false, message: 'Use method=\"POST\".' };\n    var inputs = document.querySelectorAll('input');\n    var named = 0;\n    for (var i = 0; i < inputs.length; i++) { if (inputs[i].getAttribute('name')) { named++; } }\n    if (named < 2) return { passed: false, message: 'Add two named fields.' };\n    if (!document.querySelector('button')) return { passed: false, message: 'Add a submit button.' };\n    return { passed: true, message: 'A form with a route — action, method, named data!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "form with action + method=\"POST\".",
        "Two named inputs.",
        "A button to send."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Send</title>\n</head>\n<body>\n  <form action=\"https://example.com/save\" method=\"POST\">\n    <input name=\"name\" placeholder=\"Your name\">\n    <input name=\"email\" placeholder=\"Email\">\n    <button>Send</button>\n  </form>\n</body>\n</html>",
      unlock: "Data & Forms"
    },
    unlock: "Data & Forms"
  },

  {
    id: "web-data-web3forms",
    num: 47,
    title: "Web3Forms",
    tagline: "Send form data to your inbox — no server.",
    skill: "Web Data",
    xp: 140,
    type: "html",
    icon: '<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="16" cy="6" r="3" fill="currentColor"/>',
    meta: { kind: "normal", series: "w6-data", order: 3 },
    briefing: {
      objective: "Wire a form to Web3Forms with an action and access key.",
      body: "You need a server to receive form data — but not your own. Web3Forms is a service that receives the data and emails it to you. The form points its action at api.web3forms.com/submit and proves it is yours with an access key. Two small additions and your form really sends."
    },
    challenges: [
      {
        id: "ch1",
        title: "Point at Web3Forms",
        target: "<form action=\"https://api.web3forms.com/submit\" method=\"POST\"><input name=\"name\"></form>",
        instructions: "Set the form action to https://api.web3forms.com/submit with method=\"POST\".",
        learning: "<form action=\"https://api.web3forms.com/submit\" method=\"POST\">\n\nWeb3Forms is a service that turns form submissions into emails. Its action URL is https://api.web3forms.com/submit. Point your form there, send with POST, and Web3Forms takes over from the server side.",
        example: "<form action=\"https://api.web3forms.com/submit\" method=\"POST\">",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Web3Forms</title>\n</head>\n<body>\n  <form>\n    <input name=\"name\" placeholder=\"Your name\">\n    <button>Send</button>\n  </form>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var form = document.querySelector('form');\n    if (!form) return { passed: false, message: 'Add a form element.' };\n    var action = form.getAttribute('action') || '';\n    if (action.indexOf('api.web3forms.com') === -1) return { passed: false, message: 'Point the action at https://api.web3forms.com/submit.' };\n    var method = (form.getAttribute('method') || 'get').toLowerCase();\n    if (method !== 'post') return { passed: false, message: 'Use method=\"POST\".' };\n    return { passed: true, message: 'Wired to Web3Forms — the form can send email.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "action=\"https://api.web3forms.com/submit\"",
          "method=\"POST\"",
          "One URL replaces a whole server."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Web3Forms</title>\n</head>\n<body>\n  <form action=\"https://api.web3forms.com/submit\" method=\"POST\">\n    <input name=\"name\" placeholder=\"Your name\">\n    <button>Send</button>\n  </form>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "The access key",
        target: "<form action=\"https://api.web3forms.com/submit\" method=\"POST\"><input type=\"hidden\" name=\"access_key\" value=\"YOUR-KEY\"><input name=\"name\"></form>",
        instructions: "Add a hidden input named access_key with your Web3Forms key as its value. This proves the form is yours.",
        learning: "<input type=\"hidden\" name=\"access_key\" value=\"your-key-here\">\n\nThe access key is your Web3Forms identity. type=\"hidden\" keeps it invisible to visitors, but the form still sends it. Web3Forms checks the key and routes the email to your inbox.",
        example: "<input type=\"hidden\" name=\"access_key\" value=\"your-key-here\">",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Web3Forms</title>\n</head>\n<body>\n  <form action=\"https://api.web3forms.com/submit\" method=\"POST\">\n    <input name=\"name\" placeholder=\"Your name\">\n    <button>Send</button>\n  </form>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var key = document.querySelector('input[name=\"access_key\"]');\n    if (!key) return { passed: false, message: 'Add a hidden input named access_key.' };\n    if (key.type !== 'hidden') return { passed: false, message: 'The access key must be a hidden input.' };\n    if (!key.getAttribute('value')) return { passed: false, message: 'Give the access key a value.' };\n    return { passed: true, message: 'The access key is in place — Web3Forms will accept it.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "<input type=\"hidden\" name=\"access_key\" value=\"...\">",
          "Hidden = invisible to visitors.",
          "This is your proof of ownership."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Web3Forms</title>\n</head>\n<body>\n  <form action=\"https://api.web3forms.com/submit\" method=\"POST\">\n    <input type=\"hidden\" name=\"access_key\" value=\"your-key-here\">\n    <input name=\"name\" placeholder=\"Your name\">\n    <button>Send</button>\n  </form>\n</body>\n</html>"
      }
    ],
    build: {
      title: "A form that sends email",
      prompt: "Build a complete Web3Forms form: action, method POST, an access_key hidden input, at least two named fields, and a submit button.",
      target: "<form action=\"https://api.web3forms.com/submit\" method=\"POST\"><input type=\"hidden\" name=\"access_key\" value=\"KEY\"><input name=\"name\"><input name=\"email\"><button>Send</button></form>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Web3Forms</title>\n</head>\n<body>\n  <form>\n  </form>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var form = document.querySelector('form');\n    if (!form) return { passed: false, message: 'Add a form element.' };\n    var action = form.getAttribute('action') || '';\n    if (action.indexOf('api.web3forms.com') === -1) return { passed: false, message: 'Action must point at api.web3forms.com.' };\n    if ((form.getAttribute('method') || 'get').toLowerCase() !== 'post') return { passed: false, message: 'Use method=\"POST\".' };\n    if (!document.querySelector('input[name=\"access_key\"]')) return { passed: false, message: 'Include the access_key hidden input.' };\n    var inputs = document.querySelectorAll('input');\n    var named = 0;\n    for (var i = 0; i < inputs.length; i++) { if (inputs[i].getAttribute('name') && inputs[i].getAttribute('name') !== 'access_key') { named++; } }\n    if (named < 2) return { passed: false, message: 'Add at least two named fields.' };\n    if (!document.querySelector('button') && !document.querySelector('input[type=\"submit\"]')) return { passed: false, message: 'Add a submit button.' };\n    return { passed: true, message: 'A complete Web3Forms form — real emails, real data!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "action + method POST + access_key.",
        "Two named fields.",
        "A button to send."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Web3Forms</title>\n</head>\n<body>\n  <form action=\"https://api.web3forms.com/submit\" method=\"POST\">\n    <input type=\"hidden\" name=\"access_key\" value=\"your-key-here\">\n    <input name=\"name\" placeholder=\"Your name\">\n    <input name=\"email\" placeholder=\"Email\">\n    <button>Send</button>\n  </form>\n</body>\n</html>",
      unlock: "Data & Forms"
    },
    unlock: "Data & Forms"
  },

  {
    id: "web-data-field-types",
    num: 48,
    title: "Field Types",
    tagline: "Pick the right input for the right data.",
    skill: "Web Data",
    xp: 120,
    type: "html",
    icon: '<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="17" cy="6" r="3" fill="currentColor"/>',
    meta: { kind: "normal", series: "w6-data", order: 4 },
    briefing: {
      objective: "Use email, tel and textarea for the right data.",
      body: "An input is smarter than a plain box. type tells the browser what kind of data belongs there. type=\"email\" checks the format on mobile keyboards and desktop alike. type=\"tel\" opens the phone keypad. A textarea is a big box for long messages. The right type makes forms easier and data cleaner."
    },
    challenges: [
      {
        id: "ch1",
        title: "An email field",
        target: "<label>Email</label><input type=\"email\" name=\"email\">",
        instructions: "Add an email input: type=\"email\" with a name.",
        learning: "<input type=\"email\" name=\"email\">\n\ntype is the input's contract. type=\"email\" tells the browser this field holds an email: it validates the format and shows the right keyboard. The browser does the checking before your server ever sees a typo.",
        example: "<input type=\"email\" name=\"email\" placeholder=\"you@example.com\">",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Types</title>\n</head>\n<body>\n  <label>Email</label>\n  <input name=\"email\" placeholder=\"you@example.com\">\n</body>\n</html>",
        check: "(function(){\n  try {\n    var email = document.querySelector('input[type=\"email\"]');\n    if (!email) return { passed: false, message: 'Add an <input type=\"email\">.' };\n    if (!email.getAttribute('name')) return { passed: false, message: 'Name the email field.' };\n    return { passed: true, message: 'Email field — the browser checks the format for you.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "type=\"email\" on the input.",
          "Give it a name.",
          "The browser validates the format."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Types</title>\n</head>\n<body>\n  <label>Email</label>\n  <input type=\"email\" name=\"email\" placeholder=\"you@example.com\">\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Phone and message",
        target: "<label>Phone</label><input type=\"tel\" name=\"phone\"><label>Message</label><textarea name=\"message\"></textarea>",
        instructions: "Add a phone input (type=\"tel\") and a message textarea, both named.",
        learning: "<input type=\"tel\" name=\"phone\">\n<textarea name=\"message\"></textarea>\n\ntype=\"tel\" calls up the number pad on phones. textarea is a multi-line input — the tag has an opening and closing, and the text sits between them. Pick the type that matches the data, and the browser adapts.",
        example: "<input type=\"tel\" name=\"phone\">",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Types</title>\n</head>\n<body>\n  <label>Phone</label>\n  <input name=\"phone\" placeholder=\"Number\">\n  <label>Message</label>\n  <textarea name=\"message\"></textarea>\n</body>\n</html>",
        check: "(function(){\n  try {\n    if (!document.querySelector('input[type=\"tel\"]')) return { passed: false, message: 'Add an <input type=\"tel\"> for the phone.' };\n    if (!document.querySelector('textarea')) return { passed: false, message: 'Add a <textarea> for a longer message.' };\n    return { passed: true, message: 'Right tools for the right data — tel and message.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "type=\"tel\" for the phone.",
          "textarea for the message.",
          "The type matches the data."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Types</title>\n</head>\n<body>\n  <label>Phone</label>\n  <input type=\"tel\" name=\"phone\" placeholder=\"Number\">\n  <label>Message</label>\n  <textarea name=\"message\"></textarea>\n</body>\n</html>"
      }
    ],
    build: {
      title: "A typed form",
      prompt: "Build a form with a text input (name), an email input, a phone input, and a message textarea — all named.",
      target: "<input type=\"text\" name=\"name\"><input type=\"email\" name=\"email\"><input type=\"tel\" name=\"phone\"><textarea name=\"message\"></textarea>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Types</title>\n</head>\n<body>\n  <form>\n  </form>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var fields = document.querySelectorAll('input, textarea');\n    if (fields.length < 4) return { passed: false, message: 'Add four fields: name, email, phone, message.' };\n    for (var i = 0; i < fields.length; i++) { if (!fields[i].getAttribute('name')) return { passed: false, message: 'Every field needs a name.' }; }\n    if (!document.querySelector('input[type=\"email\"]')) return { passed: false, message: 'Email must be type=\"email\".' };\n    if (!document.querySelector('input[type=\"tel\"]')) return { passed: false, message: 'Phone must be type=\"tel\".' };\n    if (!document.querySelector('textarea')) return { passed: false, message: 'Message must be a textarea.' };\n    return { passed: true, message: 'Every field typed right — clean data, easy forms!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "name, email, tel, textarea.",
        "Each type matches its data.",
        "All four need names."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Types</title>\n</head>\n<body>\n  <form>\n    <input type=\"text\" name=\"name\" placeholder=\"Name\">\n    <input type=\"email\" name=\"email\" placeholder=\"Email\">\n    <input type=\"tel\" name=\"phone\" placeholder=\"Phone\">\n    <textarea name=\"message\" placeholder=\"Message\"></textarea>\n  </form>\n</body>\n</html>",
      unlock: "Data & Forms"
    },
    unlock: "Data & Forms"
  },

  {
    id: "web-data-required",
    num: 49,
    title: "Required Fields",
    tagline: "Block the send until the data is there.",
    skill: "Web Data",
    xp: 120,
    type: "html",
    icon: '<path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path d="M9 12l2 2 4-4"/>',
    meta: { kind: "normal", series: "w6-data", order: 5 },
    briefing: {
      objective: "Require fields and set minimum lengths.",
      body: "A form that accepts empty data collects junk. The required attribute makes a field mandatory — the browser refuses to submit until it has a value. minlength sets a floor for text like messages. Validation is the bouncer at the door of your data."
    },
    challenges: [
      {
        id: "ch1",
        title: "Require a field",
        target: "<label>Email</label><input type=\"email\" name=\"email\" required>",
        instructions: "Make the email field required so the form cannot be sent without it.",
        learning: "<input type=\"email\" name=\"email\" required>\n\nrequired is a boolean attribute — its presence alone turns it on. The browser blocks the submit and prompts the visitor. No code needed; the browser is the validator.",
        example: "<input type=\"email\" name=\"email\" required>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Required</title>\n</head>\n<body>\n  <form>\n    <label>Email</label>\n    <input type=\"email\" name=\"email\">\n    <button>Send</button>\n  </form>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var inputs = document.querySelectorAll('input');\n    if (inputs.length < 1) return { passed: false, message: 'Add a form field.' };\n    var any = false;\n    for (var i = 0; i < inputs.length; i++) { if (inputs[i].hasAttribute('required')) { any = true; } }\n    if (!any) return { passed: false, message: 'Mark at least one field with the required attribute.' };\n    return { passed: true, message: 'A required field — the browser blocks empty sends.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Add required to the email input.",
          "Its presence is enough.",
          "Browser blocks empty sends."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Required</title>\n</head>\n<body>\n  <form>\n    <label>Email</label>\n    <input type=\"email\" name=\"email\" required>\n    <button>Send</button>\n  </form>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Require and lengthen",
        target: "<input type=\"email\" name=\"email\" required><textarea name=\"message\" required minlength=\"10\"></textarea>",
        instructions: "Make the email required and give the message both required and a minlength of 10.",
        learning: "<textarea name=\"message\" required minlength=\"10\"></textarea>\n\nrequired forces a value. minlength sets how long it must be — at least 10 characters here. Together they filter out empty and too-short submissions before anything reaches the server.",
        example: "<textarea name=\"message\" required minlength=\"10\"></textarea>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Required</title>\n</head>\n<body>\n  <form>\n    <input type=\"email\" name=\"email\" placeholder=\"Email\">\n    <textarea name=\"message\" placeholder=\"Message\"></textarea>\n    <button>Send</button>\n  </form>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var email = document.querySelector('input[type=\"email\"]');\n    if (!email || !email.hasAttribute('required')) return { passed: false, message: 'Make the email field required.' };\n    var ta = document.querySelector('textarea');\n    if (!ta || !ta.hasAttribute('minlength')) return { passed: false, message: 'Give the message a minlength (e.g. 10).' };\n    return { passed: true, message: 'Validation in place — weak data gets blocked.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "email required.",
          "textarea required + minlength=\"10\".",
          "Two layers of protection."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Required</title>\n</head>\n<body>\n  <form>\n    <input type=\"email\" name=\"email\" placeholder=\"Email\" required>\n    <textarea name=\"message\" placeholder=\"Message\" required minlength=\"10\"></textarea>\n    <button>Send</button>\n  </form>\n</body>\n</html>"
      }
    ],
    build: {
      title: "A guarded form",
      prompt: "Build a form with an email (required) and a message (required, minlength 10). Nothing should be optional.",
      target: "<input type=\"email\" name=\"email\" required><textarea name=\"message\" required minlength=\"10\"></textarea>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Required</title>\n</head>\n<body>\n  <form>\n  </form>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var inputs = document.querySelectorAll('input, textarea');\n    if (inputs.length < 2) return { passed: false, message: 'Add an email and a message field.' };\n    for (var i = 0; i < inputs.length; i++) { if (!inputs[i].hasAttribute('required')) return { passed: false, message: 'Every field should be required.' }; }\n    if (!document.querySelector('textarea[minlength]')) return { passed: false, message: 'The message needs a minlength.' };\n    return { passed: true, message: 'A guarded form — only real submissions get through!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "email + textarea, both required.",
        "minlength on the message.",
        "Nothing optional."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Required</title>\n</head>\n<body>\n  <form>\n    <input type=\"email\" name=\"email\" placeholder=\"Email\" required>\n    <textarea name=\"message\" placeholder=\"Message\" required minlength=\"10\"></textarea>\n    <button>Send</button>\n  </form>\n</body>\n</html>",
      unlock: "Data & Forms"
    },
    unlock: "Data & Forms"
  },

  {
    id: "web-data-submit",
    num: 50,
    title: "After Submit",
    tagline: "Confirm the send with a thank-you.",
    skill: "Web Data",
    xp: 130,
    type: "html",
    icon: '<path d="M4 6h16M4 12h16M4 18h16"/><path d="M20 6L9 17l-5-5"/>',
    meta: { kind: "normal", series: "w6-data", order: 6 },
    briefing: {
      objective: "Show a thank-you when the form is submitted.",
      body: "Sending is half the job. The other half is telling the visitor it worked. A submit event fires when the form is sent. Your onsubmit handler runs at that moment — show a thank-you message, and return false so the page does not actually reload in the sandbox."
    },
    challenges: [
      {
        id: "ch1",
        title: "Say thanks",
        target: "<form onsubmit=\"document.getElementById('thanks').textContent = 'Thanks for reaching out!'; return false;\"><button type=\"submit\">Send</button></form><p id=\"thanks\"></p>",
        instructions: "Add an onsubmit handler to the form that writes \"Thanks for reaching out!\" into the element with id=\"thanks\", then returns false.",
        learning: "<form onsubmit=\"showThanks(); return false;\">\n\nonsubmit runs the moment the form is submitted. showThanks() fills in the message. return false stops the browser from actually navigating — perfect for showing the result inside the page.",
        example: "onsubmit=\"document.getElementById('thanks').textContent = 'Thanks for reaching out!'; return false;\"",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>After</title>\n</head>\n<body>\n  <form onsubmit=\"\">\n    <input name=\"name\" placeholder=\"Your name\">\n    <button type=\"submit\">Send</button>\n  </form>\n  <p id=\"thanks\"></p>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var form = document.querySelector('form');\n    if (!form) return { passed: false, message: 'Add a form element.' };\n    var os = form.getAttribute('onsubmit') || '';\n    if (!os) return { passed: false, message: 'Add an onsubmit handler to the form.' };\n    var btn = document.querySelector('button[type=\"submit\"], input[type=\"submit\"]');\n    if (!btn) return { passed: false, message: 'Add a submit button.' };\n    btn.click();\n    var thanks = document.getElementById('thanks');\n    if (!thanks) return { passed: false, message: 'Keep the element with id=\"thanks\".' };\n    if ((thanks.textContent || '').indexOf('Thanks') === -1) return { passed: false, message: 'Submitting should show a thank-you message.' };\n    return { passed: true, message: 'Submit and confirm — the visitor knows it worked!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "onsubmit on the form tag.",
          "Write into #thanks, then return false.",
          "The click fires the submit event."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>After</title>\n</head>\n<body>\n  <form onsubmit=\"document.getElementById('thanks').textContent = 'Thanks for reaching out!'; return false;\">\n    <input name=\"name\" placeholder=\"Your name\">\n    <button type=\"submit\">Send</button>\n  </form>\n  <p id=\"thanks\"></p>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Send and confirm",
      prompt: "Build a form with a named field, a submit button, and an onsubmit that shows a thank-you message.",
      target: "<form onsubmit=\"...\"><input name=\"email\"><button>Send</button></form><p id=\"thanks\">Thanks!</p>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>After</title>\n</head>\n<body>\n  <form onsubmit=\"\">\n    <input name=\"email\" placeholder=\"Email\">\n    <button type=\"submit\">Send</button>\n  </form>\n  <p id=\"thanks\"></p>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var form = document.querySelector('form');\n    if (!form) return { passed: false, message: 'Add a form element.' };\n    if (!(form.getAttribute('onsubmit') || '')) return { passed: false, message: 'Add an onsubmit handler.' };\n    var btn = document.querySelector('button[type=\"submit\"], input[type=\"submit\"]');\n    if (!btn) return { passed: false, message: 'Add a submit button.' };\n    btn.click();\n    var thanks = document.getElementById('thanks');\n    if (!thanks) return { passed: false, message: 'Keep the element with id=\"thanks\".' };\n    if ((thanks.textContent || '').indexOf('Thanks') === -1) return { passed: false, message: 'Submitting should show a thank-you message.' };\n    return { passed: true, message: 'Send and confirm — the loop is closed!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "onsubmit writes the message.",
        "return false stops the reload.",
        "button type=\"submit\"."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>After</title>\n</head>\n<body>\n  <form onsubmit=\"document.getElementById('thanks').textContent = 'Thanks for subscribing!'; return false;\">\n    <input name=\"email\" placeholder=\"Email\">\n    <button type=\"submit\">Send</button>\n  </form>\n  <p id=\"thanks\"></p>\n</body>\n</html>",
      unlock: "Data & Forms"
    },
    unlock: "Data & Forms"
  },

  {
    id: "web-data-sheets",
    num: 51,
    title: "Google Sheets",
    tagline: "Store submissions straight into a spreadsheet.",
    skill: "Web Data",
    xp: 140,
    type: "html",
    icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/>',
    meta: { kind: "normal", series: "w6-data", order: 7 },
    briefing: {
      objective: "Send form data to a Google Sheet via Apps Script.",
      body: "Web3Forms emails you the data. Google Sheets stores it in a table you can sort, chart and share. Apps Script is the bridge: it exposes a URL your form posts to, and each submission becomes a row. The action points at script.google.com, and your field names line up with the columns."
    },
    challenges: [
      {
        id: "ch1",
        title: "Point at Apps Script",
        target: "<form action=\"https://script.google.com/macros/s/AKfycb_.../exec\" method=\"POST\"><input name=\"name\"></form>",
        instructions: "Set the form action to your Apps Script URL (https://script.google.com/...) with method=\"POST\".",
        learning: "<form action=\"https://script.google.com/macros/s/AKfycb_YourScriptId/exec\" method=\"POST\">\n\nApps Script can publish a small program as a web endpoint. That endpoint URL starts with script.google.com. Point the form's action at it, send with POST, and every submission lands in your spreadsheet.",
        example: "<form action=\"https://script.google.com/macros/s/AKfycb_YourScriptId/exec\" method=\"POST\">",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Sheets</title>\n</head>\n<body>\n  <form>\n    <input name=\"name\" placeholder=\"Your name\">\n    <button>Send</button>\n  </form>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var form = document.querySelector('form');\n    if (!form) return { passed: false, message: 'Add a form element.' };\n    var action = form.getAttribute('action') || '';\n    if (action.indexOf('script.google.com') === -1) return { passed: false, message: 'Point the action at your Apps Script URL (script.google.com).' };\n    var method = (form.getAttribute('method') || 'get').toLowerCase();\n    if (method !== 'post') return { passed: false, message: 'Use method=\"POST\".' };\n    return { passed: true, message: 'Connected to Apps Script — data can reach your sheet.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "action=\"https://script.google.com/...\"",
          "method=\"POST\"",
          "Your script URL goes here."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Sheets</title>\n</head>\n<body>\n  <form action=\"https://script.google.com/macros/s/AKfycb_YourScriptId/exec\" method=\"POST\">\n    <input name=\"name\" placeholder=\"Your name\">\n    <button>Send</button>\n  </form>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Match the columns",
        target: "<input name=\"name\"><input name=\"email\"><input name=\"message\">",
        instructions: "Add fields named name, email and message so each submission lines up with a spreadsheet column.",
        learning: "The sheet stores each submission as a row. The field's name attribute is the column it lands in: a field named email fills the email column. Name your fields after the columns you want in your table.",
        example: "<input name=\"email\" type=\"email\">",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Sheets</title>\n</head>\n<body>\n  <form action=\"https://script.google.com/macros/s/AKfycb_YourScriptId/exec\" method=\"POST\">\n    <input placeholder=\"Your name\">\n    <input type=\"email\" placeholder=\"Email\">\n    <textarea placeholder=\"Message\"></textarea>\n    <button>Send</button>\n  </form>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var inputs = document.querySelectorAll('input');\n    var names = [];\n    for (var i = 0; i < inputs.length; i++) {\n      var n = inputs[i].getAttribute('name');\n      if (n) { names.push(n); }\n    }\n    if (names.length < 2) return { passed: false, message: 'Add at least two named fields.' };\n    if (names.indexOf('name') === -1 || names.indexOf('email') === -1) return { passed: false, message: 'Name fields after your columns (e.g. name, email).' };\n    return { passed: true, message: 'Field names match columns — the sheet will line up.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "name=\"name\", name=\"email\", name=\"message\".",
          "The name is the column.",
          "Columns fill in order."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Sheets</title>\n</head>\n<body>\n  <form action=\"https://script.google.com/macros/s/AKfycb_YourScriptId/exec\" method=\"POST\">\n    <input name=\"name\" placeholder=\"Your name\">\n    <input name=\"email\" type=\"email\" placeholder=\"Email\">\n    <textarea name=\"message\" placeholder=\"Message\"></textarea>\n    <button>Send</button>\n  </form>\n</body>\n</html>"
      }
    ],
    build: {
      title: "A spreadsheet form",
      prompt: "Build a form for your sheet: action to Apps Script, method POST, and three named fields (name, email, message).",
      target: "<form action=\"https://script.google.com/...\" method=\"POST\"><input name=\"name\"><input name=\"email\"><textarea name=\"message\"></textarea></form>",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Sheets</title>\n</head>\n<body>\n  <form>\n  </form>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var form = document.querySelector('form');\n    if (!form) return { passed: false, message: 'Add a form element.' };\n    var action = form.getAttribute('action') || '';\n    if (action.indexOf('script.google.com') === -1) return { passed: false, message: 'Action must point at script.google.com.' };\n    if ((form.getAttribute('method') || 'get').toLowerCase() !== 'post') return { passed: false, message: 'Use method=\"POST\".' };\n    var names = [];\n    var fields = document.querySelectorAll('input, textarea');\n    for (var i = 0; i < fields.length; i++) {\n      var n = fields[i].getAttribute('name');\n      if (n) { names.push(n); }\n    }\n    if (names.length < 3) return { passed: false, message: 'Add three named fields.' };\n    if (names.indexOf('name') === -1 || names.indexOf('email') === -1 || names.indexOf('message') === -1) return { passed: false, message: 'Use the columns: name, email, message.' };\n    return { passed: true, message: 'A spreadsheet-ready form — data lands in rows!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "action + POST to script.google.com.",
        "name, email, message.",
        "One row per submission."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Sheets</title>\n</head>\n<body>\n  <form action=\"https://script.google.com/macros/s/AKfycb_YourScriptId/exec\" method=\"POST\">\n    <input name=\"name\" placeholder=\"Your name\">\n    <input name=\"email\" type=\"email\" placeholder=\"Email\">\n    <textarea name=\"message\" placeholder=\"Message\"></textarea>\n    <button>Send</button>\n  </form>\n</body>\n</html>",
      unlock: "Data & Forms"
    },
    unlock: "Data & Forms"
  },

  {
    id: "web-data-boss",
    num: 52,
    title: "A Form That Sends",
    tagline: "The boss: everything a real form needs.",
    skill: "Web Data",
    xp: 170,
    type: "html",
    icon: '<path d="M4 6h16M4 12h16M4 18h16"/><path d="M20 6L9 17l-5-5"/><circle cx="16" cy="6" r="3" fill="currentColor"/>',
    meta: { kind: "boss", series: "w6-data", order: 8, focusLock: true, hintCap: 1 },
    briefing: {
      objective: "Build a complete form that sends and confirms.",
      body: "The boss of the data series. Build a form that does everything: an action, method POST, an access_key, an email field that is named and required, a message textarea, a submit button, and a thank-you confirmation on submit. Every part from this series, in one form."
    },
    challenges: [
      {
        id: "ch1",
        title: "The sending core",
        target: "<form action=\"https://api.web3forms.com/submit\" method=\"POST\"><input type=\"hidden\" name=\"access_key\" value=\"KEY\"><input type=\"email\" name=\"email\" required><textarea name=\"message\" required></textarea><button>Send</button></form>",
        instructions: "Build the core: a form with action, method POST, named fields, and a required email.",
        learning: "Composition: the action says where, POST says how, names label the data, required blocks empties. Each attribute you added in this series is a small guarantee that the submission is real.",
        example: "",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Data Form</title>\n</head>\n<body>\n  <form>\n  </form>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var form = document.querySelector('form');\n    if (!form) return { passed: false, message: 'Add a form element.' };\n    if (!form.getAttribute('action')) return { passed: false, message: 'Give the form an action destination.' };\n    if ((form.getAttribute('method') || 'get').toLowerCase() !== 'post') return { passed: false, message: 'Use method=\"POST\".' };\n    var inputs = document.querySelectorAll('input, textarea');\n    var named = 0;\n    for (var i = 0; i < inputs.length; i++) { if (inputs[i].getAttribute('name')) { named++; } }\n    if (named < 2) return { passed: false, message: 'Every field needs a name.' };\n    var req = 0;\n    for (var j = 0; j < inputs.length; j++) { if (inputs[j].hasAttribute('required')) { req++; } }\n    if (req < 1) return { passed: false, message: 'Mark a field as required.' };\n    return { passed: true, message: 'A sending core: action, method, names, required.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "One hint only — this is the boss.",
          "action + POST + named fields + a required field."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Data Form</title>\n</head>\n<body>\n  <form action=\"https://api.web3forms.com/submit\" method=\"POST\">\n    <input type=\"hidden\" name=\"access_key\" value=\"your-key-here\">\n    <input type=\"email\" name=\"email\" placeholder=\"Email\" required>\n    <textarea name=\"message\" placeholder=\"Message\" required minlength=\"10\"></textarea>\n    <button type=\"submit\">Send</button>\n  </form>\n</body>\n</html>"
      }
    ],
    build: {
      title: "Full sending form",
      prompt: "Complete the form: Web3Forms action, POST, access_key hidden input, a named required email, a message textarea, a submit button, and an onsubmit that shows a thank-you in an element with id=\"thanks\".",
      target: "A form that sends and confirms",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Data Form</title>\n</head>\n<body>\n  <form onsubmit=\"\">\n  </form>\n  <p id=\"thanks\"></p>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var form = document.querySelector('form');\n    if (!form) return { passed: false, message: 'Add a form element.' };\n    var action = form.getAttribute('action') || '';\n    if (action.indexOf('api.web3forms.com') === -1) return { passed: false, message: 'Action must point at api.web3forms.com.' };\n    if ((form.getAttribute('method') || 'get').toLowerCase() !== 'post') return { passed: false, message: 'Use method=\"POST\".' };\n    if (!document.querySelector('input[name=\"access_key\"]')) return { passed: false, message: 'Include an access_key hidden input.' };\n    var email = document.querySelector('input[type=\"email\"]');\n    if (!email || !email.getAttribute('name') || !email.hasAttribute('required')) return { passed: false, message: 'An email field, named and required.' };\n    if (!document.querySelector('textarea')) return { passed: false, message: 'A message textarea.' };\n    if (!document.querySelector('button[type=\"submit\"], input[type=\"submit\"]')) return { passed: false, message: 'A submit button.' };\n    var thanks = document.getElementById('thanks');\n    if (!thanks) return { passed: false, message: 'An element with id=\"thanks\" for the confirmation.' };\n    var emailField = document.querySelector('input[type=\"email\"]');\n    var msgField = document.querySelector('textarea');\n    if (emailField) { emailField.value = 'ada@example.com'; }\n    if (msgField) { msgField.value = 'A message long enough to pass validation.'; }\n    var btn = document.querySelector('button[type=\"submit\"], input[type=\"submit\"]');\n    btn.click();\n    if ((thanks.textContent || '').indexOf('Thanks') === -1) return { passed: false, message: 'Submitting should show a thank-you message.' };\n    return { passed: true, message: 'BOSS DOWN — a form that really sends data!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "action, POST, access_key, email, textarea, button.",
        "onsubmit shows the thanks and returns false.",
        "Every piece from this series, in one form."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Data Form</title>\n</head>\n<body>\n  <form action=\"https://api.web3forms.com/submit\" method=\"POST\" onsubmit=\"document.getElementById('thanks').textContent = 'Thanks for your message!'; return false;\">\n    <input type=\"hidden\" name=\"access_key\" value=\"your-key-here\">\n    <input type=\"email\" name=\"email\" placeholder=\"Email\" required>\n    <textarea name=\"message\" placeholder=\"Message\" required minlength=\"10\"></textarea>\n    <button type=\"submit\">Send</button>\n  </form>\n  <p id=\"thanks\"></p>\n</body>\n</html>",
      unlock: "Data & Forms"
    },
    unlock: "Data & Forms"
  }
]);

/* ============================================================
   Series 7 - Git & GitHub (w7-git)
   Flow: Computer -> Git -> GitHub -> Repository -> Code Editor -> Branches
   Builds are self-contained: each build starter and solution
   prepends these helpers so the learner's build editor works
   standalone (the app does not carry challenge code forward).
   ============================================================ */

var S7_GIT_HELPERS = [
  "function initRepo() { return { files: {}, staged: {}, commits: [], branches: {}, current: 'main', git: true }; }",
  "function stage(repo, name) { repo.staged[name] = repo.files[name]; return repo; }",
  "function stageAll(repo) { for (var name in repo.files) { repo.staged[name] = repo.files[name]; } return repo; }",
  "function commit(repo, msg) { repo.commits.push({ msg: msg, snapshot: { ...repo.files } }); repo.staged = {}; return repo; }",
  "function createBranch(repo, name) { repo.branches[name] = { ...repo.files }; repo.current = name; return repo; }",
  "function checkout(repo, name) { repo.current = name; if (repo.branches[name]) { repo.files = { ...repo.branches[name] }; } return repo; }",
  "function mergeBranch(repo, from) { if (repo.branches[from]) { repo.files = { ...repo.branches[from] }; } return repo; }",
  "function addRemote(repo, url) { repo.remote = url; return repo; }",
  "function push(repo) { repo.pushed = true; return repo.commits.length; }",
  "function saveVersion(versions, tag, content) { versions[tag] = content; return versions; }",
  "function newestVersion(versions) { var keys = Object.keys(versions); return keys[keys.length - 1]; }",
  "function installCommand(os) { if (os === 'macos') return 'brew install git'; if (os === 'windows') return 'winget install --id Git.Git'; return 'sudo apt install git'; }",
  "function verified(version) { return version.indexOf('git version') === 0; }",
  "function gitVersion(output) { var i = output.indexOf('git version '); if (i === -1) return 'unknown'; return output.substring(i + 'git version '.length).trim(); }",
  "function isRepo(repo) { return repo.git === true; }",
  "function untracked(repo) { var last = repo.commits.length ? repo.commits[repo.commits.length - 1].snapshot : {}; var out = []; for (var name in repo.files) { if (last[name] === undefined) { out.push(name); } } return out; }",
  "function modified(repo) { if (!repo.commits.length) return []; var last = repo.commits[repo.commits.length - 1].snapshot; var out = []; for (var name in repo.files) { if (last[name] !== undefined && last[name] !== repo.files[name]) { out.push(name); } } return out; }",
  "function logMessages(repo) { return repo.commits.map(function (c) { return c.msg; }); }",
  "function editFile(repo, name, content) { repo.files[name] = content; return content; }",
  "function webCommit(repo, msg) { stageAll(repo); commit(repo, msg); return repo; }"
].join('\n') + '\n';

registerMissions([
  {
    id: "web-git-why",
    num: 53,
    title: "Why Git?",
    tagline: "You've broken a file before. Git fixes that forever.",
    skill: "Web",
    xp: 150,
    type: "js",
    icon: '<path d="M4 6h16M4 12h10M4 18h13"/><path d="M18 8l4 4-4 4"/>',
    meta: { kind: "normal", series: "w7-git", order: 1 },
    terminal: [
      "# The old way - save copies by hand",
      "cp index.html index-v1.html",
      "cp index.html index-FINAL.html",
      "cp index.html index-FINAL-v2.html",
      "# Which one is newest? What changed?",
      "# That chaos is exactly what Git fixes."
    ],
    briefing: {
      objective: "Understand why developers invented version control.",
      body: "Before Git, people saved copies with names like index-FINAL-v2.html. The copies pile up, you edit the wrong one, and you can't tell what changed. Git tracks every version of every file and lets you travel back to any moment."
    },
    challenges: [
      {
        id: "ch1",
        title: "Save a version",
        instructions: "Write saveVersion(versions, tag, content) that stores content under tag in versions and returns versions.",
        learning: "A version is just a saved copy with a label. Git stores these automatically for you.",
        example: "function saveVersion(versions, tag, content) {\n  versions[tag] = content;\n  return versions;\n}",
        starter: "function saveVersion(versions, tag, content) {\n  // store content under tag\n  return versions;\n}",
        test: "function testSave() {\n  var v = {};\n  saveVersion(v, 'v1', '<h1>Hello</h1>');\n  if (v['v1'] !== '<h1>Hello</h1>') return { passed: false, message: 'Should store content under the tag.' };\n  return { passed: true, message: 'Version saved!' };\n}",
        hints: [
          "versions[tag] = content stores it.",
          "Return versions.",
          "Two lines."
        ],
        solution: "function saveVersion(versions, tag, content) {\n  versions[tag] = content;\n  return versions;\n}"
      },
      {
        id: "ch2",
        title: "Find the newest",
        instructions: "Write newestVersion(versions) that returns the tag of the most recently saved version (the last key added).",
        learning: "Filenames get messy ('final', 'FINAL2'). Git gives every version a clean, automatic label.",
        example: "function newestVersion(versions) {\n  var keys = Object.keys(versions);\n  return keys[keys.length - 1];\n}",
        starter: "function newestVersion(versions) {\n  // return the last saved tag\n  return '';\n}",
        test: "function testNewest() {\n  var v = { 'v1': 'a' };\n  v['v2'] = 'b';\n  if (newestVersion(v) !== 'v2') return { passed: false, message: 'Should return the last saved tag.' };\n  return { passed: true, message: 'Newest version found!' };\n}",
        hints: [
          "Object.keys(versions) lists tags in order.",
          "The newest is the last one.",
          "Return keys[keys.length - 1]."
        ],
        solution: "function newestVersion(versions) {\n  var keys = Object.keys(versions);\n  return keys[keys.length - 1];\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write brokenEdit() that saves '<h1>Hello</h1>' as 'v1', then '<h1>Hi</h1>' as 'v2', and returns the newest tag.",
      starter: S7_GIT_HELPERS + "function brokenEdit() {\n  // save two versions, return the newest tag\n  return '';\n}",
      test: "function testBuild() {\n  if (brokenEdit() !== 'v2') return { passed: false, message: 'Should save v1 then v2 and return v2.' };\n  return { passed: true, message: 'Now you see why versions matter!' };\n}",
      hints: [
        "Call saveVersion twice.",
        "Then return newestVersion(versions).",
        "The answer is the string 'v2'."
      ],
      solution: S7_GIT_HELPERS + "function brokenEdit() {\n  var v = {};\n  saveVersion(v, 'v1', '<h1>Hello</h1>');\n  saveVersion(v, 'v2', '<h1>Hi</h1>');\n  return newestVersion(v);\n}",
      unlock: "Version Control"
    },
    unlock: "Version Control"
  },

  {
    id: "web-git-install",
    num: 54,
    title: "Install Git",
    tagline: "Git runs on your machine. Install it, then verify it.",
    skill: "Web",
    xp: 160,
    type: "js",
    icon: '<path d="M4 4h16v16H4z"/><path d="M9 9h6M9 12h6M9 15h4"/>',
    meta: { kind: "normal", series: "w7-git", order: 2 },
    terminal: [
      "# macOS",
      "brew install git",
      "# Windows (PowerShell)",
      "winget install --id Git.Git",
      "# Linux (Debian/Ubuntu)",
      "sudo apt install git",
      "# Verify it worked",
      "git --version"
    ],
    briefing: {
      objective: "Install Git on your operating system and verify the installation.",
      body: "Git is a program that runs on your computer. Installing it is different on each operating system. After installing, you verify with git --version - if it prints a version, Git is ready."
    },
    challenges: [
      {
        id: "ch1",
        title: "Pick the command",
        instructions: "Write installCommand(os) that returns the install command for 'macos' (brew install git), 'windows' (winget install --id Git.Git) or 'linux' (sudo apt install git).",
        learning: "Each operating system installs software differently: Homebrew on macOS, winget on Windows, apt on Linux.",
        example: "function installCommand(os) {\n  if (os === 'macos') return 'brew install git';\n  if (os === 'windows') return 'winget install --id Git.Git';\n  return 'sudo apt install git';\n}",
        starter: "function installCommand(os) {\n  // return the right install command\n  return '';\n}",
        test: "function testInstall() {\n  if (installCommand('macos') !== 'brew install git') return { passed: false, message: 'macOS uses brew install git.' };\n  if (installCommand('windows') !== 'winget install --id Git.Git') return { passed: false, message: 'Windows uses winget.' };\n  if (installCommand('linux') !== 'sudo apt install git') return { passed: false, message: 'Linux uses sudo apt install git.' };\n  return { passed: true, message: 'Installer ready!' };\n}",
        hints: [
          "Three if statements, one per OS.",
          "Return the exact command strings from the lesson.",
          "Anything unknown can use the Linux command."
        ],
        solution: "function installCommand(os) {\n  if (os === 'macos') return 'brew install git';\n  if (os === 'windows') return 'winget install --id Git.Git';\n  return 'sudo apt install git';\n}"
      },
      {
        id: "ch2",
        title: "Verify it works",
        instructions: "Write verified(version) that returns true when the version string starts with 'git version'.",
        learning: "git --version prints something like 'git version 2.40.1'. If it prints, Git is installed and working.",
        example: "function verified(version) {\n  return version.indexOf('git version') === 0;\n}",
        starter: "function verified(version) {\n  // return true if version starts with 'git version'\n  return false;\n}",
        test: "function testVerified() {\n  if (!verified('git version 2.40.1')) return { passed: false, message: 'Should accept a real git version output.' };\n  if (verified('command not found')) return { passed: false, message: 'Should reject an error message.' };\n  return { passed: true, message: 'Git is ready to use!' };\n}",
        hints: [
          "Use indexOf on the string.",
          "Check it starts with 'git version'.",
          "The exact prefix is 'git version'."
        ],
        solution: "function verified(version) {\n  return version.indexOf('git version') === 0;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write setup(os) that returns { command: installCommand(os), works: verified('git version 2.40.1') }.",
      starter: S7_GIT_HELPERS + "function setup(os) {\n  // return an object with command and works\n  return null;\n}",
      test: "function testSetup() {\n  var s = setup('linux');\n  if (!s || s.command !== 'sudo apt install git') return { passed: false, message: 'command should be the install command.' };\n  if (s.works !== true) return { passed: false, message: 'works should be true after a valid version check.' };\n  return { passed: true, message: 'Git installed and verified!' };\n}",
      hints: [
        "Call installCommand(os).",
        "verified('git version 2.40.1') is true.",
        "Return an object literal with both."
      ],
      solution: S7_GIT_HELPERS + "function setup(os) {\n  return { command: installCommand(os), works: verified('git version 2.40.1') };\n}",
      unlock: "Version Control"
    },
    unlock: "Version Control"
  },

  {
    id: "web-git-first",
    num: 55,
    title: "Your First Command",
    tagline: "git --version is your hello to the terminal.",
    skill: "Web",
    xp: 160,
    type: "js",
    icon: '<path d="M4 17l6-5-6-5M12 19h8"/>',
    meta: { kind: "normal", series: "w7-git", order: 3 },
    terminal: [
      "git --version",
      "# git version 2.40.1",
      "# 'git' + action = a git command",
      "# '--version' asks git to report its version"
    ],
    briefing: {
      objective: "Run your first git command and read its output.",
      body: "Every git command starts with 'git' followed by an action: git init, git add, git commit. The dash-dash flags like --version change how the command behaves. This mission teaches you to read git output like a terminal."
    },
    challenges: [
      {
        id: "ch1",
        title: "Read the version",
        instructions: "Write gitVersion(output) that returns the version number (the part after 'git version ') from the output string, or 'unknown' if the output does not contain 'git version'.",
        learning: "Terminal output is plain text. Extracting the version means splitting the string at the right spot.",
        example: "function gitVersion(output) {\n  var i = output.indexOf('git version ');\n  if (i === -1) return 'unknown';\n  return output.substring(i + 'git version '.length).trim();\n}",
        starter: "function gitVersion(output) {\n  // return the version number or 'unknown'\n  return '';\n}",
        test: "function testVersion() {\n  if (gitVersion('git version 2.40.1') !== '2.40.1') return { passed: false, message: 'Should extract 2.40.1.' };\n  if (gitVersion('command not found') !== 'unknown') return { passed: false, message: 'Should say unknown without git version.' };\n  return { passed: true, message: 'You can read git output!' };\n}",
        hints: [
          "Find the position of 'git version '.",
          "substring from there to the end.",
          "Return 'unknown' if not found."
        ],
        solution: "function gitVersion(output) {\n  var i = output.indexOf('git version ');\n  if (i === -1) return 'unknown';\n  return output.substring(i + 'git version '.length).trim();\n}"
      },
      {
        id: "ch2",
        title: "Compare versions",
        instructions: "Write isNewer(installed, required) that returns true when the installed version number is NOT older than required. Compare the first number only.",
        learning: "Checking if your Git is up to date means comparing version numbers. The first number is the major version.",
        example: "function isNewer(installed, required) {\n  var a = parseInt(installed.split('.')[0], 10);\n  var b = parseInt(required.split('.')[0], 10);\n  return a >= b;\n}",
        starter: "function isNewer(installed, required) {\n  // compare the first version numbers\n  return false;\n}",
        test: "function testNewer() {\n  if (!isNewer('2.40.1', '2.0.0')) return { passed: false, message: '2.40.1 is newer than 2.0.0.' };\n  if (isNewer('1.9.0', '2.0.0')) return { passed: false, message: '1.9.0 is older than 2.0.0.' };\n  return { passed: true, message: 'Version compare works!' };\n}",
        hints: [
          "split('.') gives the number parts.",
          "parseInt the first part.",
          "Return a >= b."
        ],
        solution: "function isNewer(installed, required) {\n  var a = parseInt(installed.split('.')[0], 10);\n  var b = parseInt(required.split('.')[0], 10);\n  return a >= b;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write ready(output) that returns true when gitVersion(output) is not 'unknown'.",
      starter: S7_GIT_HELPERS + "function ready(output) {\n  // true when a version was printed\n  return false;\n}",
      test: "function testReady() {\n  if (!ready('git version 2.40.1')) return { passed: false, message: 'A git version means git is ready.' };\n  if (ready('no such file')) return { passed: false, message: 'An error means not ready.' };\n  return { passed: true, message: 'Git is ready on your machine!' };\n}",
      hints: [
        "Use gitVersion(output).",
        "Compare it to 'unknown'.",
        "One line: return gitVersion(output) !== 'unknown';"
      ],
      solution: S7_GIT_HELPERS + "function ready(output) {\n  return gitVersion(output) !== 'unknown';\n}",
      unlock: "Version Control"
    },
    unlock: "Version Control"
  },

  {
    id: "web-git-init",
    num: 56,
    title: "Create a Repository",
    tagline: "git init turns a folder into a project Git watches.",
    skill: "Web",
    xp: 170,
    type: "js",
    icon: '<path d="M3 7h18M3 12h18M3 17h18"/><path d="M7 4l-2 2 2 2M17 4l2 2-2 2"/>',
    meta: { kind: "normal", series: "w7-git", order: 4 },
    terminal: [
      "mkdir my-site && cd my-site",
      "git init",
      "# Initialized empty Git repository",
      "ls -a",
      "# .  ..  .git",
      "# the .git folder is Git's memory"
    ],
    briefing: {
      objective: "Create a repository with git init and understand the .git folder.",
      body: "A repository (repo) is a folder Git watches. git init creates a hidden .git folder inside it - that is where Git stores all the versions. Once a folder is a repo, Git starts tracking every change you make."
    },
    challenges: [
      {
        id: "ch1",
        title: "Start a repo",
        instructions: "Write initRepo() that returns { files: {}, staged: {}, commits: [], branches: {}, current: 'main', git: true }.",
        learning: "A repo has files, a staging area, a commit history and branches. current names the active branch.",
        example: "function initRepo() {\n  return { files: {}, staged: {}, commits: [], branches: {}, current: 'main', git: true };\n}",
        starter: "function initRepo() {\n  // return a new empty repo\n  return null;\n}",
        test: "function testInit() {\n  var r = initRepo();\n  if (!r || !r.files || !r.commits || !r.staged || !r.branches) return { passed: false, message: 'Repo needs files, staged, commits and branches.' };\n  if (r.current !== 'main') return { passed: false, message: 'current should be main.' };\n  if (r.git !== true) return { passed: false, message: 'git should be true.' };\n  return { passed: true, message: 'Empty repository created!' };\n}",
        hints: [
          "Return an object literal.",
          "Files, staged and commits start empty.",
          "current: 'main', git: true."
        ],
        solution: "function initRepo() {\n  return { files: {}, staged: {}, commits: [], branches: {}, current: 'main', git: true };\n}"
      },
      {
        id: "ch2",
        title: "Is it a repo?",
        instructions: "Write isRepo(repo) that returns true when repo has a git flag set to true.",
        learning: "git init is what makes a folder a repo. Checking repo.git tells you whether Git is watching it.",
        example: "function isRepo(repo) {\n  return repo.git === true;\n}",
        starter: "function isRepo(repo) {\n  // return true if this is a git repo\n  return false;\n}",
        test: "function testIsRepo() {\n  if (!isRepo({ files: {}, git: true })) return { passed: false, message: 'Should accept a git repo.' };\n  if (isRepo({ files: {} })) return { passed: false, message: 'A plain folder is not a repo.' };\n  return { passed: true, message: 'You can spot a repo!' };\n}",
        hints: [
          "Check repo.git.",
          "Return repo.git === true.",
          "One line."
        ],
        solution: "function isRepo(repo) {\n  return repo.git === true;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write createProject(name) that returns an initialized repo with name set to the given name.",
      starter: S7_GIT_HELPERS + "function createProject(name) {\n  // init a repo and give it a name\n  return null;\n}",
      test: "function testProject() {\n  var r = createProject('my-site');\n  if (!isRepo(r)) return { passed: false, message: 'Should be a real repo.' };\n  if (r.name !== 'my-site') return { passed: false, message: 'Should carry the project name.' };\n  return { passed: true, message: 'Your first repository!' };\n}",
      hints: [
        "Call initRepo().",
        "Set repo.name = name.",
        "Return the repo."
      ],
      solution: S7_GIT_HELPERS + "function createProject(name) {\n  var r = initRepo();\n  r.name = name;\n  return r;\n}",
      unlock: "Version Control"
    },
    unlock: "Version Control"
  },

  {
    id: "web-git-status",
    num: 57,
    title: "Check Your Project",
    tagline: "git status tells you what Git sees.",
    skill: "Web",
    xp: 170,
    type: "js",
    icon: '<path d="M4 6h16M4 12h16M4 18h10"/><circle cx="19" cy="18" r="2"/>',
    meta: { kind: "normal", series: "w7-git", order: 5 },
    terminal: [
      "git status",
      "# On branch main",
      "# Untracked files:",
      "#   index.html",
      "# No commits yet",
      "# git status = the dashboard of your repo"
    ],
    briefing: {
      objective: "Use git status to see untracked and changed files.",
      body: "git status is the dashboard of your repository. Untracked files are brand new - Git has never seen them. Modified files changed since your last commit. Running git status before every commit is a habit of professional developers."
    },
    challenges: [
      {
        id: "ch1",
        title: "Find untracked files",
        instructions: "Write untracked(repo) that returns an array of file names that are NOT in the last commit's snapshot (or all files if there are no commits).",
        learning: "Untracked means 'Git has never saved this file'. If there are no commits yet, every file is untracked.",
        example: "function untracked(repo) {\n  var last = repo.commits.length ? repo.commits[repo.commits.length - 1].snapshot : {};\n  var out = [];\n  for (var name in repo.files) {\n    if (last[name] === undefined) { out.push(name); }\n  }\n  return out;\n}",
        starter: "function untracked(repo) {\n  // return names of files git has never saved\n  return [];\n}",
        test: "function testUntracked() {\n  var r = { files: {}, staged: {}, commits: [], branches: {}, current: 'main', git: true };\n  r.files['index.html'] = '<h1>Hi</h1>';\n  r.files['app.js'] = 'console.log(1)';\n  if (untracked(r).length !== 2) return { passed: false, message: 'Both files are untracked with no commits.' };\n  r.commits.push({ msg: 'c1', snapshot: { 'index.html': '<h1>Hi</h1>', 'app.js': 'console.log(1)' } });\n  r.files['new.txt'] = 'x';\n  var u = untracked(r);\n  if (u.length !== 1 || u[0] !== 'new.txt') return { passed: false, message: 'Only new.txt is untracked after a commit.' };\n  return { passed: true, message: 'Untracked files found!' };\n}",
        hints: [
          "Last snapshot: repo.commits[len-1].snapshot.",
          "Loop over repo.files.",
          "A file is untracked if the snapshot has no entry for it."
        ],
        solution: "function untracked(repo) {\n  var last = repo.commits.length ? repo.commits[repo.commits.length - 1].snapshot : {};\n  var out = [];\n  for (var name in repo.files) {\n    if (last[name] === undefined) { out.push(name); }\n  }\n  return out;\n}"
      },
      {
        id: "ch2",
        title: "Find modified files",
        instructions: "Write modified(repo) that returns an array of file names whose content changed since the last commit (present in the snapshot but different now).",
        learning: "Modified means Git knows the file but its content changed. Git compares your working files with the last snapshot.",
        example: "function modified(repo) {\n  if (!repo.commits.length) return [];\n  var last = repo.commits[repo.commits.length - 1].snapshot;\n  var out = [];\n  for (var name in repo.files) {\n    if (last[name] !== undefined && last[name] !== repo.files[name]) { out.push(name); }\n  }\n  return out;\n}",
        starter: "function modified(repo) {\n  // return names of files that changed since the last commit\n  return [];\n}",
        test: "function testModified() {\n  var r = { files: {}, staged: {}, commits: [], branches: {}, current: 'main', git: true };\n  r.files['a.txt'] = 'v1';\n  r.commits.push({ msg: 'c1', snapshot: { 'a.txt': 'v1' } });\n  if (modified(r).length !== 0) return { passed: false, message: 'Nothing modified after commit.' };\n  r.files['a.txt'] = 'v2';\n  var m = modified(r);\n  if (m.length !== 1 || m[0] !== 'a.txt') return { passed: false, message: 'a.txt changed, should be modified.' };\n  return { passed: true, message: 'Changes detected!' };\n}",
        hints: [
          "No commits means nothing modified.",
          "Compare last[name] with repo.files[name].",
          "Only files present in the snapshot count."
        ],
        solution: "function modified(repo) {\n  if (!repo.commits.length) return [];\n  var last = repo.commits[repo.commits.length - 1].snapshot;\n  var out = [];\n  for (var name in repo.files) {\n    if (last[name] !== undefined && last[name] !== repo.files[name]) { out.push(name); }\n  }\n  return out;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write statusReport(repo) that returns { untracked: [list], modified: [list] } using your two functions.",
      starter: S7_GIT_HELPERS + "function statusReport(repo) {\n  // return an object with untracked and modified arrays\n  return null;\n}",
      test: "function testReport() {\n  var r = initRepo();\n  r.files['a.txt'] = 'v1';\n  r.commits.push({ msg: 'c1', snapshot: { 'a.txt': 'v1' } });\n  r.files['a.txt'] = 'v2';\n  r.files['b.txt'] = 'new';\n  var s = statusReport(r);\n  if (!s || s.untracked.length !== 1 || s.untracked[0] !== 'b.txt') return { passed: false, message: 'b.txt should be untracked.' };\n  if (s.modified.length !== 1 || s.modified[0] !== 'a.txt') return { passed: false, message: 'a.txt should be modified.' };\n  return { passed: true, message: 'Your status dashboard works!' };\n}",
      hints: [
        "Call untracked(repo) and modified(repo).",
        "Put both arrays in an object.",
        "Return { untracked: ..., modified: ... }."
      ],
      solution: S7_GIT_HELPERS + "function statusReport(repo) {\n  return { untracked: untracked(repo), modified: modified(repo) };\n}",
      unlock: "Version Control"
    },
    unlock: "Version Control"
  },

  {
    id: "web-git-add",
    num: 58,
    title: "Stage Changes",
    tagline: "git add picks the changes your next version includes.",
    skill: "Web",
    xp: 170,
    type: "js",
    icon: '<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="17" cy="6" r="3" fill="currentColor"/><circle cx="14" cy="18" r="3" fill="currentColor"/>',
    meta: { kind: "normal", series: "w7-git", order: 6 },
    terminal: [
      "git add index.html",
      "git add .   # stage everything",
      "git status",
      "# Changes to be committed:",
      "#   new file: index.html",
      "# staging = 'include these in the next commit'"
    ],
    briefing: {
      objective: "Stage files with git add so they can be committed.",
      body: "Staging is the checkout line before a commit. git add index.html tells Git 'include this file in my next version'. git add . stages everything. You commit only what you staged - it is how you group related changes together."
    },
    challenges: [
      {
        id: "ch1",
        title: "Stage a file",
        instructions: "Write stage(repo, name) that copies repo.files[name] into repo.staged and returns repo.",
        learning: "Staging copies a file into the staging area. It does not change the working file - it just marks it as ready for the next commit.",
        example: "function stage(repo, name) {\n  repo.staged[name] = repo.files[name];\n  return repo;\n}",
        starter: "function stage(repo, name) {\n  // copy the file into the staged area\n  return repo;\n}",
        test: "function testStage() {\n  var r = { files: { 'index.html': '<h1>Hi</h1>' }, staged: {}, commits: [], branches: {}, current: 'main', git: true };\n  stage(r, 'index.html');\n  if (r.staged['index.html'] !== '<h1>Hi</h1>') return { passed: false, message: 'Should copy the file into staged.' };\n  return { passed: true, message: 'File staged!' };\n}",
        hints: [
          "repo.staged[name] = repo.files[name].",
          "Return repo.",
          "Two lines."
        ],
        solution: "function stage(repo, name) {\n  repo.staged[name] = repo.files[name];\n  return repo;\n}"
      },
      {
        id: "ch2",
        title: "Stage everything",
        instructions: "Write stageAll(repo) that stages every file in repo.files and returns repo.",
        learning: "git add . is shorthand for 'stage all my files'. Useful when you changed many files and want them all in the next version.",
        example: "function stageAll(repo) {\n  for (var name in repo.files) { repo.staged[name] = repo.files[name]; }\n  return repo;\n}",
        starter: "function stageAll(repo) {\n  // stage every file\n  return repo;\n}",
        test: "function testStageAll() {\n  var r = { files: { 'a.txt': '1', 'b.txt': '2' }, staged: {}, commits: [], branches: {}, current: 'main', git: true };\n  stageAll(r);\n  if (Object.keys(r.staged).length !== 2) return { passed: false, message: 'Should stage both files.' };\n  return { passed: true, message: 'Everything staged!' };\n}",
        hints: [
          "Loop over repo.files.",
          "Stage each name.",
          "Return repo."
        ],
        solution: "function stageAll(repo) {\n  for (var name in repo.files) { repo.staged[name] = repo.files[name]; }\n  return repo;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write stageMenu(repo, names) that stages only the file names in the given array (skip names that are not in repo.files) and returns repo.",
      starter: S7_GIT_HELPERS + "function stageMenu(repo, names) {\n  // stage only the listed files\n  return repo;\n}",
      test: "function testMenu() {\n  var r = initRepo();\n  r.files['a.txt'] = '1';\n  r.files['b.txt'] = '2';\n  r.files['c.txt'] = '3';\n  stageMenu(r, ['a.txt', 'c.txt', 'missing.txt']);\n  var keys = Object.keys(r.staged).sort();\n  if (keys.length !== 2 || keys[0] !== 'a.txt' || keys[1] !== 'c.txt') return { passed: false, message: 'Should stage only a.txt and c.txt.' };\n  return { passed: true, message: 'Selective staging mastered!' };\n}",
      hints: [
        "Loop over the names array.",
        "Check the file exists in repo.files.",
        "Stage it with stage(repo, name)."
      ],
      solution: S7_GIT_HELPERS + "function stageMenu(repo, names) {\n  for (var i = 0; i < names.length; i++) {\n    if (repo.files[names[i]] !== undefined) { stage(repo, names[i]); }\n  }\n  return repo;\n}",
      unlock: "Version Control"
    },
    unlock: "Version Control"
  },

  {
    id: "web-git-commit",
    num: 59,
    title: "Save a Version",
    tagline: "git commit freezes a checkpoint you can return to.",
    skill: "Web",
    xp: 180,
    type: "js",
    icon: '<path d="M12 21a9 9 0 1 0-9-9 9 9 0 0 0 9 9z"/><path d="M12 7v5l3 2"/>',
    meta: { kind: "normal", series: "w7-git", order: 7 },
    terminal: [
      "git add .",
      "git commit -m \"first commit\"",
      "# [main (root-commit) 1a2b3c4] first commit",
      "# commit = a saved checkpoint",
      "# -m is the message describing it"
    ],
    briefing: {
      objective: "Save a version with git commit and understand what a commit is.",
      body: "A commit is a saved checkpoint of your project. It freezes a snapshot of all your staged files, with a message explaining the change. You can always return to any commit - that is the superpower of version control."
    },
    challenges: [
      {
        id: "ch1",
        title: "Make a commit",
        instructions: "Write commit(repo, msg) that pushes { msg: msg, snapshot: { ...repo.files } } into repo.commits, clears repo.staged, and returns repo.",
        learning: "A commit stores a message and a snapshot of the files. Clearing staged means those changes are now saved.",
        example: "function commit(repo, msg) {\n  repo.commits.push({ msg: msg, snapshot: { ...repo.files } });\n  repo.staged = {};\n  return repo;\n}",
        starter: "function commit(repo, msg) {\n  // save a commit and clear staged\n  return repo;\n}",
        test: "function testCommit() {\n  var r = { files: { 'a.txt': 'v1' }, staged: {}, commits: [], branches: {}, current: 'main', git: true };\n  commit(r, 'first');\n  if (r.commits.length !== 1) return { passed: false, message: 'Should add one commit.' };\n  if (r.commits[0].msg !== 'first') return { passed: false, message: 'Should store the message.' };\n  if (r.commits[0].snapshot['a.txt'] !== 'v1') return { passed: false, message: 'Should snapshot the files.' };\n  return { passed: true, message: 'First commit saved!' };\n}",
        hints: [
          "push an object with msg and snapshot.",
          "Copy files with { ...repo.files }.",
          "Clear staged and return repo."
        ],
        solution: "function commit(repo, msg) {\n  repo.commits.push({ msg: msg, snapshot: { ...repo.files } });\n  repo.staged = {};\n  return repo;\n}"
      },
      {
        id: "ch2",
        title: "Count commits",
        instructions: "Write commitCount(repo) that returns how many commits are in the history.",
        learning: "The commit history grows one entry per commit. The count tells you how many checkpoints you have saved.",
        example: "function commitCount(repo) {\n  return repo.commits.length;\n}",
        starter: "function commitCount(repo) {\n  // return the number of commits\n  return 0;\n}",
        test: "function testCount() {\n  var r = { files: {}, staged: {}, commits: [], branches: {}, current: 'main', git: true };\n  if (commitCount(r) !== 0) return { passed: false, message: 'Fresh repo has 0 commits.' };\n  r.commits.push({ msg: 'a', snapshot: {} });\n  r.commits.push({ msg: 'b', snapshot: {} });\n  if (commitCount(r) !== 2) return { passed: false, message: 'Should count 2 commits.' };\n  return { passed: true, message: 'History tracked!' };\n}",
        hints: [
          "repo.commits.length.",
          "One line.",
          "Returns a number."
        ],
        solution: "function commitCount(repo) {\n  return repo.commits.length;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write saveWork(repo) that stages all files and commits with message 'work', returning the repo with exactly one more commit.",
      starter: S7_GIT_HELPERS + "function saveWork(repo) {\n  // stage everything and commit it\n  return repo;\n}",
      test: "function testSaveWork() {\n  var r = initRepo();\n  r.files['a.txt'] = '1';\n  saveWork(r);\n  if (commitCount(r) !== 1) return { passed: false, message: 'Should add exactly one commit.' };\n  if (r.commits[0].msg !== 'work') return { passed: false, message: 'Message should be work.' };\n  if (Object.keys(r.staged).length !== 0) return { passed: false, message: 'Staged should be cleared.' };\n  return { passed: true, message: 'Work saved as a checkpoint!' };\n}",
      hints: [
        "Call stageAll(repo) first.",
        "Then commit(repo, 'work').",
        "Return repo."
      ],
      solution: S7_GIT_HELPERS + "function saveWork(repo) {\n  stageAll(repo);\n  commit(repo, 'work');\n  return repo;\n}",
      unlock: "Version Control"
    },
    unlock: "Version Control"
  },

  {
    id: "web-git-log",
    num: 60,
    title: "See Your History",
    tagline: "git log reads the story of your project.",
    skill: "Web",
    xp: 180,
    type: "js",
    icon: '<path d="M12 8v4l3 3M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>',
    meta: { kind: "normal", series: "w7-git", order: 8 },
    terminal: [
      "git log --oneline",
      "# 1a2b3c4 third commit",
      "# 5f6a7b8 second commit",
      "# 9c0d1e2 first commit",
      "# newest first, like a diary read backwards"
    ],
    briefing: {
      objective: "Read the commit history with git log.",
      body: "git log lists every commit you've made, newest first. Each entry has a hash and a message. Reading the log is how you answer 'what have I done so far?' and how you find the right checkpoint to return to."
    },
    challenges: [
      {
        id: "ch1",
        title: "List the log",
        instructions: "Write logMessages(repo) that returns an array of all commit messages in order (oldest first).",
        learning: "The log is just your commits' messages. Oldest first matches the order commits were made.",
        example: "function logMessages(repo) {\n  return repo.commits.map(function (c) { return c.msg; });\n}",
        starter: "function logMessages(repo) {\n  // return the commit messages\n  return [];\n}",
        test: "function testLog() {\n  var r = { files: {}, staged: {}, commits: [], branches: {}, current: 'main', git: true };\n  r.commits.push({ msg: 'first', snapshot: {} });\n  r.commits.push({ msg: 'second', snapshot: {} });\n  var l = logMessages(r);\n  if (l.length !== 2 || l[0] !== 'first' || l[1] !== 'second') return { passed: false, message: 'Should return messages in order.' };\n  return { passed: true, message: 'History reads clearly!' };\n}",
        hints: [
          "Map over repo.commits.",
          "Return c.msg for each.",
          "Use .map."
        ],
        solution: "function logMessages(repo) {\n  return repo.commits.map(function (c) { return c.msg; });\n}"
      },
      {
        id: "ch2",
        title: "Find the latest",
        instructions: "Write latestMessage(repo) that returns the most recent commit's message, or 'no commits' if empty.",
        learning: "The latest commit is the last entry in the history. It tells you where you left off.",
        example: "function latestMessage(repo) {\n  if (!repo.commits.length) return 'no commits';\n  return repo.commits[repo.commits.length - 1].msg;\n}",
        starter: "function latestMessage(repo) {\n  // return the newest commit message or 'no commits'\n  return '';\n}",
        test: "function testLatest() {\n  var r = { files: {}, staged: {}, commits: [], branches: {}, current: 'main', git: true };\n  if (latestMessage(r) !== 'no commits') return { passed: false, message: 'Empty repo says no commits.' };\n  r.commits.push({ msg: 'a', snapshot: {} });\n  r.commits.push({ msg: 'b', snapshot: {} });\n  if (latestMessage(r) !== 'b') return { passed: false, message: 'Should return the newest message.' };\n  return { passed: true, message: 'Latest commit found!' };\n}",
        hints: [
          "Empty check first.",
          "Return the last element's msg.",
          "index length - 1."
        ],
        solution: "function latestMessage(repo) {\n  if (!repo.commits.length) return 'no commits';\n  return repo.commits[repo.commits.length - 1].msg;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write commitSummary(repo) that returns 'N commits: m1, m2, ...' using logMessages. For example '2 commits: first, second'. Empty repo returns '0 commits'.",
      starter: S7_GIT_HELPERS + "function commitSummary(repo) {\n  // build a summary string from the log\n  return '';\n}",
      test: "function testSummary() {\n  var r = initRepo();\n  if (commitSummary(r) !== '0 commits') return { passed: false, message: 'Empty repo says 0 commits.' };\n  commit(r, 'first');\n  commit(r, 'second');\n  if (commitSummary(r) !== '2 commits: first, second') return { passed: false, message: 'Should summarize the full history.' };\n  return { passed: true, message: 'Your log reads like a pro!' };\n}",
      hints: [
        "Use logMessages(repo).",
        "Join with ', '.",
        "Build 'N commits' + optional ': list'."
      ],
      solution: S7_GIT_HELPERS + "function commitSummary(repo) {\n  var msgs = logMessages(repo);\n  if (!msgs.length) return '0 commits';\n  return msgs.length + ' commits: ' + msgs.join(', ');\n}",
      unlock: "Version Control"
    },
    unlock: "Version Control"
  },

  {
    id: "web-git-github",
    num: 61,
    title: "GitHub",
    tagline: "GitHub hosts your repo online and syncs it everywhere.",
    skill: "Web",
    xp: 180,
    type: "js",
    icon: '<path d="M4 4h16v16H4z"/><circle cx="9" cy="9" r="2"/><path d="M4 16l4-4 4 4 8-8"/>',
    meta: { kind: "normal", series: "w7-git", order: 9 },
    terminal: [
      "# Git = the tool, GitHub = the website",
      "git remote add origin https://github.com/YOU/my-site.git",
      "git push -u origin main",
      "# your commits now live online",
      "git pull origin main",
      "# fetch other people's commits from online"
    ],
    briefing: {
      objective: "Understand Git vs GitHub and connect your repo to a remote.",
      body: "Git is the version control tool on your computer. GitHub is a website that stores copies of your repos online. A remote is that online copy. push uploads your commits, pull downloads others'. GitHub is also where teams review code and share projects."
    },
    challenges: [
      {
        id: "ch1",
        title: "Add a remote",
        instructions: "Write addRemote(repo, url) that sets repo.remote = url and returns repo.",
        learning: "A remote is the online address of your repo. Adding one connects your local project to a copy on GitHub.",
        example: "function addRemote(repo, url) {\n  repo.remote = url;\n  return repo;\n}",
        starter: "function addRemote(repo, url) {\n  // set the remote url\n  return repo;\n}",
        test: "function testRemote() {\n  var r = { files: {}, staged: {}, commits: [], branches: {}, current: 'main', git: true };\n  addRemote(r, 'https://github.com/you/my-site.git');\n  if (r.remote !== 'https://github.com/you/my-site.git') return { passed: false, message: 'Should store the remote url.' };\n  return { passed: true, message: 'Remote connected!' };\n}",
        hints: [
          "repo.remote = url.",
          "Return repo.",
          "Two lines."
        ],
        solution: "function addRemote(repo, url) {\n  repo.remote = url;\n  return repo;\n}"
      },
      {
        id: "ch2",
        title: "Push to GitHub",
        instructions: "Write push(repo) that sets repo.pushed = true and returns the number of commits being uploaded.",
        learning: "push sends your commits to the remote. After a push, the online copy matches your local one.",
        example: "function push(repo) {\n  repo.pushed = true;\n  return repo.commits.length;\n}",
        starter: "function push(repo) {\n  // mark pushed and return commit count\n  return 0;\n}",
        test: "function testPush() {\n  var r = { files: {}, staged: {}, commits: [{ msg: 'a', snapshot: {} }, { msg: 'b', snapshot: {} }], branches: {}, current: 'main', git: true };\n  var n = push(r);\n  if (n !== 2) return { passed: false, message: 'Should return the number of commits.' };\n  if (r.pushed !== true) return { passed: false, message: 'Should mark the repo as pushed.' };\n  return { passed: true, message: 'Pushed to GitHub!' };\n}",
        hints: [
          "Set repo.pushed = true.",
          "Return repo.commits.length.",
          "Two statements."
        ],
        solution: "function push(repo) {\n  repo.pushed = true;\n  return repo.commits.length;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write sync(repo, url) that adds a remote, pushes, then pulls by returning { remote, pushed, commits }.",
      starter: S7_GIT_HELPERS + "function sync(repo, url) {\n  // connect, push, then report the state\n  return null;\n}",
      test: "function testSync() {\n  var r = initRepo();\n  commit(r, 'first');\n  var s = sync(r, 'https://github.com/you/app.git');\n  if (!s || s.remote !== 'https://github.com/you/app.git') return { passed: false, message: 'Should keep the remote url.' };\n  if (s.pushed !== true) return { passed: false, message: 'Should be pushed.' };\n  if (s.commits !== 1) return { passed: false, message: 'Should report 1 commit.' };\n  return { passed: true, message: 'Your code lives online now!' };\n}",
      hints: [
        "addRemote(repo, url).",
        "push(repo) returns the commit count.",
        "Return an object with all three."
      ],
      solution: S7_GIT_HELPERS + "function sync(repo, url) {\n  addRemote(repo, url);\n  var n = push(repo);\n  return { remote: repo.remote, pushed: repo.pushed, commits: n };\n}",
      unlock: "Version Control"
    },
    unlock: "Version Control"
  },

  {
    id: "web-git-editor",
    num: 62,
    title: "The Code Editor",
    tagline: "Open any GitHub repo in a browser editor - just press the dot key.",
    skill: "Web",
    xp: 180,
    type: "js",
    icon: '<path d="M14 4l6 6-3 3-6-6z"/><path d="M5 19l6-6"/><path d="M12 3v2M17 3v2M3 12h2M3 17h2M20 12h2"/>',
    meta: { kind: "normal", series: "w7-git", order: 10 },
    terminal: [
      "# Go to github.com/YOU/my-site",
      "# Press . (dot) on the keyboard",
      "# github.dev opens - an editor in your browser",
      "# Edit a file, then commit it right there",
      "# no need to use your own computer at all"
    ],
    briefing: {
      objective: "Edit and commit code from GitHub's browser editor.",
      body: "GitHub lets you edit files without ever leaving the browser. Pressing the dot key on any repo opens github.dev, a full code editor. You can change a file and commit it right there - the commit goes straight into your history. It is how developers fix things quickly from any device."
    },
    challenges: [
      {
        id: "ch1",
        title: "Edit a file",
        instructions: "Write editFile(repo, name, content) that updates repo.files[name] and returns the new content.",
        learning: "Editing in the browser is still editing the same repo. You change the file's content, then you commit.",
        example: "function editFile(repo, name, content) {\n  repo.files[name] = content;\n  return content;\n}",
        starter: "function editFile(repo, name, content) {\n  // update the file and return the new content\n  return '';\n}",
        test: "function testEdit() {\n  var r = { files: { 'readme.md': 'old' }, staged: {}, commits: [], branches: {}, current: 'main', git: true };\n  editFile(r, 'readme.md', 'new version');\n  if (r.files['readme.md'] !== 'new version') return { passed: false, message: 'Should update the file content.' };\n  return { passed: true, message: 'File edited in the browser!' };\n}",
        hints: [
          "repo.files[name] = content.",
          "Return content.",
          "Two lines."
        ],
        solution: "function editFile(repo, name, content) {\n  repo.files[name] = content;\n  return content;\n}"
      },
      {
        id: "ch2",
        title: "Commit from the browser",
        instructions: "Write webCommit(repo, msg) that commits using only the current files (like GitHub's 'Commit changes' button) and returns repo.",
        learning: "GitHub's editor commits your current files directly. It is the same commit command, triggered by a button in the browser.",
        example: "function webCommit(repo, msg) {\n  for (var name in repo.files) { repo.staged[name] = repo.files[name]; }\n  repo.commits.push({ msg: msg, snapshot: { ...repo.files } });\n  repo.staged = {};\n  return repo;\n}",
        starter: "function webCommit(repo, msg) {\n  // stage everything and commit\n  return repo;\n}",
        test: "function testWebCommit() {\n  var r = { files: { 'a.txt': '1' }, staged: {}, commits: [], branches: {}, current: 'main', git: true };\n  webCommit(r, 'edit from browser');\n  if (r.commits.length !== 1) return { passed: false, message: 'Should create one commit.' };\n  if (r.commits[0].msg !== 'edit from browser') return { passed: false, message: 'Should use the given message.' };\n  return { passed: true, message: 'Committed from the browser!' };\n}",
      hints: [
        "Reuse stageAll and commit.",
        "Message comes from the argument.",
        "Return repo."
      ],
      solution: "function webCommit(repo, msg) {\n  for (var name in repo.files) { repo.staged[name] = repo.files[name]; }\n  repo.commits.push({ msg: msg, snapshot: { ...repo.files } });\n  repo.staged = {};\n  return repo;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write browserFix(repo, file, oldText, newText) that replaces oldText with newText in that file, then commits with message 'fix', and returns the repo with exactly one more commit.",
      starter: S7_GIT_HELPERS + "function browserFix(repo, file, oldText, newText) {\n  // replace text, commit, return repo\n  return repo;\n}",
      test: "function testFix() {\n  var r = initRepo();\n  r.files['app.js'] = 'return oldValue;';\n  browserFix(r, 'app.js', 'oldValue', 'newValue');\n  if (r.files['app.js'].indexOf('newValue') === -1) return { passed: false, message: 'Should replace the old text.' };\n  if (r.commits.length !== 1 || r.commits[0].msg !== 'fix') return { passed: false, message: 'Should commit the fix.' };\n  return { passed: true, message: 'Fixed from anywhere!' };\n}",
      hints: [
        "Use editFile or replace in the file content.",
        "Then webCommit(repo, 'fix').",
        "Return repo."
      ],
      solution: S7_GIT_HELPERS + "function browserFix(repo, file, oldText, newText) {\n  repo.files[file] = repo.files[file].replace(oldText, newText);\n  webCommit(repo, 'fix');\n  return repo;\n}",
      unlock: "Version Control"
    },
    unlock: "Version Control"
  },

  {
    id: "web-git-branches",
    num: 63,
    title: "Branches",
    tagline: "Try new ideas without ever breaking the main version.",
    skill: "Web",
    xp: 190,
    type: "js",
    icon: '<path d="M6 3v12M6 15a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM18 3v8M18 11a4 4 0 0 1 0 8"/>',
    meta: { kind: "normal", series: "w7-git", order: 11 },
    terminal: [
      "git branch feature   # create a branch",
      "git checkout feature # switch to it",
      "# edit files on the feature branch...",
      "git checkout main     # back to the safe line",
      "git merge feature     # bring the work in",
      "# main stays safe the whole time"
    ],
    briefing: {
      objective: "Create branches, switch between them, and merge work.",
      body: "A branch is a separate timeline of your project. You create one to try an idea safely. main is the version that must always work. You work on a feature branch, then merge it into main when it's ready. Branches are how teams build software without breaking things."
    },
    challenges: [
      {
        id: "ch1",
        title: "Create a branch",
        instructions: "Write createBranch(repo, name) that stores repo.branches[name] = { ...repo.files }, sets repo.current = name, and returns repo.",
        learning: "Creating a branch snapshots your files under the branch's name and switches to it. Now you can experiment safely.",
        example: "function createBranch(repo, name) {\n  repo.branches[name] = { ...repo.files };\n  repo.current = name;\n  return repo;\n}",
        starter: "function createBranch(repo, name) {\n  // snapshot files under the branch name\n  return repo;\n}",
        test: "function testCreateBranch() {\n  var r = { files: { 'app.js': 'v1' }, staged: {}, commits: [], branches: {}, current: 'main', git: true };\n  createBranch(r, 'feature');\n  if (!r.branches['feature'] || r.branches['feature']['app.js'] !== 'v1') return { passed: false, message: 'Should snapshot the current files.' };\n  if (r.current !== 'feature') return { passed: false, message: 'Should switch to the new branch.' };\n  return { passed: true, message: 'Branch created!' };\n}",
        hints: [
          "Snapshot with { ...repo.files }.",
          "Store under repo.branches[name].",
          "Set repo.current = name."
        ],
        solution: "function createBranch(repo, name) {\n  repo.branches[name] = { ...repo.files };\n  repo.current = name;\n  return repo;\n}"
      },
      {
        id: "ch2",
        title: "Switch branches",
        instructions: "Write checkout(repo, name) that sets repo.current = name and, if the branch exists, loads its files into repo.files. Returns repo.",
        learning: "Checking out a branch replaces your working files with that branch's version. Your work on the old branch is still saved.",
        example: "function checkout(repo, name) {\n  repo.current = name;\n  if (repo.branches[name]) { repo.files = { ...repo.branches[name] }; }\n  return repo;\n}",
        starter: "function checkout(repo, name) {\n  // switch and load the branch files\n  return repo;\n}",
        test: "function testCheckout() {\n  var r = { files: {}, staged: {}, commits: [], branches: {}, current: 'main', git: true };\n  r.branches['main'] = { 'a.txt': 'main-v' };\n  r.branches['feature'] = { 'a.txt': 'main-v' };\n  r.files['a.txt'] = 'feature-v';\n  checkout(r, 'main');\n  if (r.current !== 'main') return { passed: false, message: 'Should switch to main.' };\n  if (r.files['a.txt'] !== 'main-v') return { passed: false, message: 'Should restore main files.' };\n  return { passed: true, message: 'Checked out main!' };\n}",
      hints: [
        "Set repo.current first.",
        "If the branch exists, copy its files in.",
        "Use { ...repo.branches[name] }."
      ],
      solution: "function checkout(repo, name) {\n  repo.current = name;\n  if (repo.branches[name]) { repo.files = { ...repo.branches[name] }; }\n  return repo;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write mergeBranch(repo, from) that loads repo.branches[from]'s files into repo.files (when the branch exists) and returns repo.",
      starter: S7_GIT_HELPERS + "function mergeBranch(repo, from) {\n  // bring the branch's files into the current ones\n  return repo;\n}",
      test: "function testMerge() {\n  var r = initRepo();\n  r.files['base.txt'] = 'base';\n  createBranch(r, 'main');\n  r.files['feature.txt'] = 'new';\n  createBranch(r, 'feature');\n  checkout(r, 'main');\n  mergeBranch(r, 'feature');\n  if (r.files['feature.txt'] !== 'new') return { passed: false, message: 'Merge should bring feature files over.' };\n  if (r.files['base.txt'] !== 'base') return { passed: false, message: 'Merge should keep main files too.' };\n  return { passed: true, message: 'Feature merged into main!' };\n}",
      hints: [
        "Copy repo.branches[from] into repo.files.",
        "Only if the branch exists.",
        "Use the spread operator."
      ],
      solution: S7_GIT_HELPERS + "function mergeBranch(repo, from) {\n  if (repo.branches[from]) { repo.files = { ...repo.branches[from] }; }\n  return repo;\n}",
      unlock: "Version Control"
    },
    unlock: "Version Control"
  },

  {
    id: "web-git-boss",
    num: 64,
    title: "Repo Boss",
    tagline: "Everything from this series in one complete workflow.",
    skill: "Web",
    xp: 240,
    type: "js",
    icon: '<path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4L2 9.4h7.6z"/>',
    meta: { kind: "boss", series: "w7-git", order: 12, focusLock: true, hintCap: 1 },
    terminal: [
      "git init",
      "git add .",
      "git commit -m \"init\"",
      "git branch feature",
      "git checkout feature",
      "# edit...",
      "git checkout main",
      "git merge feature",
      "git remote add origin https://github.com/YOU/app.git",
      "git push -u origin main"
    ],
    briefing: {
      objective: "Run a full developer workflow: repo, branches, remote and push.",
      body: "This is the boss of the Git series. A real developer does this every day: start a repo, stage and commit, try a feature on a branch, merge it back, then push everything to GitHub. Chain every function you wrote in this series into one workflow."
    },
    challenges: [
      {
        id: "ch1",
        title: "Plan the workflow",
        instructions: "Write workflow() that returns the array ['init', 'add', 'commit', 'branch', 'merge', 'remote', 'push'].",
        learning: "The workflow has an order: start the repo, stage, save, branch, merge, connect to GitHub, push. Same order every time.",
        example: "function workflow() {\n  return ['init', 'add', 'commit', 'branch', 'merge', 'remote', 'push'];\n}",
        starter: "function workflow() {\n  // return the ordered workflow steps\n  return [];\n}",
        test: "function testWorkflow() {\n  var w = workflow();\n  var want = ['init', 'add', 'commit', 'branch', 'merge', 'remote', 'push'];\n  if (!Array.isArray(w) || w.join(',') !== want.join(',')) return { passed: false, message: 'Should list the steps in order.' };\n  return { passed: true, message: 'The plan is set!' };\n}",
        hints: [
          "The exact seven steps are in the terminal box.",
          "Order matters: build first, share last.",
          "Return a literal array."
        ],
        solution: "function workflow() {\n  return ['init', 'add', 'commit', 'branch', 'merge', 'remote', 'push'];\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write fullWorkflow() that: inits a repo, adds 'index.html' = '<h1>App</h1>', commits 'init', creates branch 'feature', edits the file to '<h1>App v2</h1>', checks out main, merges feature, adds a remote, pushes, and returns { repo, pushed }.",
      starter: S7_GIT_HELPERS + "function fullWorkflow() {\n  // repo -> commit -> branch -> merge -> push\n  return null;\n}",
      test: "function testFull() {\n  var r = fullWorkflow();\n  if (!r || !r.repo || r.repo.commits.length < 1) return { passed: false, message: 'Should return a repo with commits.' };\n  if (r.repo.files['index.html'] !== '<h1>App v2</h1>') return { passed: false, message: 'Merged file should be the feature version.' };\n  if (r.repo.current !== 'main') return { passed: false, message: 'Should end on main.' };\n  if (!r.repo.remote || r.repo.remote.indexOf('github.com') === -1) return { passed: false, message: 'Should have a github remote.' };\n  if (r.pushed !== true) return { passed: false, message: 'Should be pushed.' };\n  return { passed: true, message: 'BOSS DOWN - full workflow mastered!' };\n}",
      hints: [
        "Chain initRepo, stageAll, commit, createBranch, editFile, checkout, mergeBranch, addRemote, push.",
        "End on main after the merge.",
        "Return { repo: r, pushed: true }."
      ],
      solution: S7_GIT_HELPERS + "function fullWorkflow() {\n  var r = initRepo();\n  r.files['index.html'] = '<h1>App</h1>';\n  stageAll(r);\n  commit(r, 'init');\n  createBranch(r, 'main');\n  r.files['index.html'] = '<h1>App v2</h1>';\n  createBranch(r, 'feature');\n  checkout(r, 'main');\n  mergeBranch(r, 'feature');\n  addRemote(r, 'https://github.com/YOU/app.git');\n  push(r);\n  return { repo: r, pushed: true };\n}",
      unlock: "Version Control"
    },
    unlock: "Version Control"
  }
]);

/* ============================================================
   Series 8 - Put It Online (w8-online)
   Browser-first: GitHub -> Vercel -> live website. No CLI.
   GitHub changes -> Vercel detects -> website updates.
   Builds are self-contained (prepend helpers).
   ============================================================ */

var S8_DEPLOY_HELPERS = [
  "function host(files) { return { files: files, online: true }; }",
  "function serve(host, name) { return { url: 'https://' + name + '.vercel.app', files: host.files, online: true }; }",
  "function deploy(project) { return { url: 'https://' + project.name + '.vercel.app', status: 'ready', builds: 1 }; }",
  "function redeploy(previous) { return { url: previous.url, status: 'ready', builds: previous.builds + 1 }; }",
  "function linkProject(name, repo) { return { name: name, repo: repo, connected: true, files: {} }; }",
  "function importRepo(project) { project.imported = true; project.files = project.files || {}; project.files['index.html'] = '<h1>Hello</h1>'; return project; }",
  "function pushChange(project, file, content) { project.files[file] = content; return project; }",
  "function previewUrl(name, branch) { return 'https://' + name + '-' + branch + '.vercel.app'; }",
  "function productionUrl(name) { return 'https://' + name + '.vercel.app'; }",
  "function connectDomain(deployment, domain) { deployment.domain = domain; return deployment; }",
  "function isConnected(project) { return project.connected === true; }",
  "function hasFiles(project) { return !!(project.files && project.files['index.html'] !== undefined); }",
  "function isLive(deployment) { return deployment.status === 'ready'; }",
  "function liveUrl(deployment) { return deployment.domain || deployment.url; }"
].join('\n') + '\n';

registerMissions([
  {
    id: "web-deploy-hosting",
    num: 65,
    title: "What Hosting Means",
    tagline: "Your code is on GitHub. Hosting gives it a real address.",
    skill: "Web",
    xp: 160,
    type: "js",
    icon: '<path d="M3 7h18M3 12h18M3 17h18"/><path d="M12 3l2 4-2 4-2-4z"/>',
    meta: { kind: "normal", series: "w8-online", order: 1 },
    briefing: {
      objective: "Understand what hosting does and why your site needs it.",
      body: "Your website is sitting on GitHub right now - but nobody can visit it. Hosting is a computer that stores your files and serves them to anyone with the URL. GitHub is where code lives for developers; hosting is where websites live for the world."
    },
    challenges: [
      {
        id: "ch1",
        title: "Store files online",
        instructions: "Write host(files) that returns { files: files, online: true }.",
        learning: "Hosting takes your files and makes them available online. The online flag means the files can be requested by a browser.",
        example: "function host(files) {\n  return { files: files, online: true };\n}",
        starter: "function host(files) {\n  // return the files with online: true\n  return null;\n}",
        test: "function testHost() {\n  var h = host({ 'index.html': '<h1>Hi</h1>' });\n  if (!h || h.files['index.html'] !== '<h1>Hi</h1>') return { passed: false, message: 'Should keep the files.' };\n  if (h.online !== true) return { passed: false, message: 'Should be online.' };\n  return { passed: true, message: 'Files are online!' };\n}",
        hints: [
          "Return an object with files and online.",
          "online: true.",
          "Two fields total."
        ],
        solution: "function host(files) {\n  return { files: files, online: true };\n}"
      },
      {
        id: "ch2",
        title: "Give it a URL",
        instructions: "Write serve(host, name) that returns { url: 'https://' + name + '.vercel.app', files: host.files, online: true }.",
        learning: "A hosted site gets a URL people can type into a browser. Vercel gives you a free address like your-name.vercel.app.",
        example: "function serve(host, name) {\n  return { url: 'https://' + name + '.vercel.app', files: host.files, online: true };\n}",
        starter: "function serve(host, name) {\n  // build the URL and keep the files\n  return null;\n}",
        test: "function testServe() {\n  var s = serve({ files: { 'index.html': '<h1>Hi</h1>' } }, 'my-site');\n  if (!s || s.url !== 'https://my-site.vercel.app') return { passed: false, message: 'URL should be https://my-site.vercel.app' };\n  if (s.files['index.html'] !== '<h1>Hi</h1>') return { passed: false, message: 'Should keep the files.' };\n  return { passed: true, message: 'Your site has an address!' };\n}",
        hints: [
          "Concatenate 'https://' + name + '.vercel.app'.",
          "Keep the files from host.",
          "online: true."
        ],
        solution: "function serve(host, name) {\n  return { url: 'https://' + name + '.vercel.app', files: host.files, online: true };\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write publish(name, files) that hosts the files, serves them, and returns the served site.",
      starter: S8_DEPLOY_HELPERS + "function publish(name, files) {\n  // host then serve\n  return null;\n}",
      test: "function testPublish() {\n  var s = publish('app', { 'index.html': '<h1>App</h1>' });\n  if (!s || s.url !== 'https://app.vercel.app') return { passed: false, message: 'URL should be https://app.vercel.app' };\n  if (s.online !== true) return { passed: false, message: 'Should be online.' };\n  return { passed: true, message: 'Published to the web!' };\n}",
      hints: [
        "host(files) then serve(result, name).",
        "Return the served site.",
        "Chain the two functions."
      ],
      solution: S8_DEPLOY_HELPERS + "function publish(name, files) {\n  return serve(host(files), name);\n}",
      unlock: "Deployment"
    },
    unlock: "Deployment"
  },

  {
    id: "web-deploy-vercel",
    num: 66,
    title: "What Vercel Does",
    tagline: "Vercel watches your GitHub repo and serves it to the world.",
    skill: "Web",
    xp: 170,
    type: "js",
    icon: '<path d="M4 4h16v16H4z"/><circle cx="9" cy="9" r="2"/><path d="M4 16l4-4 4 4 8-8"/>',
    meta: { kind: "normal", series: "w8-online", order: 2 },
    briefing: {
      objective: "Understand what Vercel is and how it connects to GitHub.",
      body: "Vercel is a hosting platform built for GitHub. You connect your GitHub account, choose a repo, and Vercel serves it. No command line needed - it all happens in the browser at vercel.com. Once connected, Vercel stays in sync with your repo."
    },
    challenges: [
      {
        id: "ch1",
        title: "Connect GitHub",
        instructions: "Write linkProject(name, repo) that returns { name: name, repo: repo, connected: true, files: {} }.",
        learning: "Connecting links your project on Vercel to a repository on GitHub. connected: true means Vercel can read your repo.",
        example: "function linkProject(name, repo) {\n  return { name: name, repo: repo, connected: true, files: {} };\n}",
        starter: "function linkProject(name, repo) {\n  // return a connected project\n  return null;\n}",
        test: "function testConnect() {\n  var p = linkProject('app', 'you/app');\n  if (!p || p.name !== 'app' || p.repo !== 'you/app') return { passed: false, message: 'Should store name and repo.' };\n  if (p.connected !== true) return { passed: false, message: 'Should be connected.' };\n  return { passed: true, message: 'Connected to GitHub!' };\n}",
        hints: [
          "Return an object with the four fields.",
          "connected: true.",
          "files starts empty."
        ],
        solution: "function linkProject(name, repo) {\n  return { name: name, repo: repo, connected: true, files: {} };\n}"
      },
      {
        id: "ch2",
        title: "Is it connected?",
        instructions: "Write isConnected(project) that returns project.connected === true.",
        learning: "Checking the connected flag tells you whether Vercel is watching this repo.",
        example: "function isConnected(project) {\n  return project.connected === true;\n}",
        starter: "function isConnected(project) {\n  // return true if connected\n  return false;\n}",
        test: "function testIsConnected() {\n  if (!isConnected({ connected: true })) return { passed: false, message: 'Connected project -> true.' };\n  if (isConnected({ files: {} })) return { passed: false, message: 'No connected flag -> false.' };\n  return { passed: true, message: 'You can read the connection!' };\n}",
        hints: [
          "Read project.connected.",
          "Compare with === true.",
          "One line."
        ],
        solution: "function isConnected(project) {\n  return project.connected === true;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write startProject(name, repo) that returns a connected project and then proves it with isConnected.",
      starter: S8_DEPLOY_HELPERS + "function startProject(name, repo) {\n  // connect the project and return it\n  return null;\n}",
      test: "function testStart() {\n  var p = startProject('site', 'you/site');\n  if (!isConnected(p)) return { passed: false, message: 'Should be a connected project.' };\n  if (p.name !== 'site' || p.repo !== 'you/site') return { passed: false, message: 'Should keep name and repo.' };\n  return { passed: true, message: 'Vercel is watching your repo!' };\n}",
      hints: [
        "Call linkProject(name, repo).",
        "Return the project.",
        "isConnected is used by the test."
      ],
      solution: S8_DEPLOY_HELPERS + "function startProject(name, repo) {\n  return linkProject(name, repo);\n}",
      unlock: "Deployment"
    },
    unlock: "Deployment"
  },

  {
    id: "web-deploy-import",
    num: 67,
    title: "Import Your Repo",
    tagline: "Point Vercel at your repository and let it pull the code.",
    skill: "Web",
    xp: 170,
    type: "js",
    icon: '<path d="M12 3v12M7 8l5-5 5 5M5 21h14M5 17v4M19 17v4"/>',
    meta: { kind: "normal", series: "w8-online", order: 3 },
    briefing: {
      objective: "Import a repository so Vercel can build and serve it.",
      body: "After connecting your account, you import a repository: you pick it from a list in the browser, and Vercel clones the code. Importing pulls your files out of GitHub and into a deployment Vercel can serve."
    },
    challenges: [
      {
        id: "ch1",
        title: "Import the code",
        instructions: "Write importRepo(project) that sets project.imported = true, adds project.files['index.html'] = '<h1>Hello</h1>' if not present, and returns the project.",
        learning: "Importing clones the repo. For this model, importing loads an index.html into the project's files.",
        example: "function importRepo(project) {\n  project.imported = true;\n  project.files = project.files || {};\n  if (project.files['index.html'] === undefined) { project.files['index.html'] = '<h1>Hello</h1>'; }\n  return project;\n}",
        starter: "function importRepo(project) {\n  // mark imported and load an index.html\n  return project;\n}",
        test: "function testImport() {\n  var p = { name: 'app', files: {} };\n  importRepo(p);\n  if (p.imported !== true) return { passed: false, message: 'Should be marked imported.' };\n  if (p.files['index.html'] !== '<h1>Hello</h1>') return { passed: false, message: 'Should load index.html.' };\n  return { passed: true, message: 'Repo imported!' };\n}",
        hints: [
          "Set project.imported = true.",
          "Add index.html if missing.",
          "Return project."
        ],
        solution: "function importRepo(project) {\n  project.imported = true;\n  project.files = project.files || {};\n  if (project.files['index.html'] === undefined) { project.files['index.html'] = '<h1>Hello</h1>'; }\n  return project;\n}"
      },
      {
        id: "ch2",
        title: "Has the code?",
        instructions: "Write hasFiles(project) that returns true when the project has an index.html file.",
        learning: "A successful import means your files are in the project. Checking for index.html confirms the code arrived.",
        example: "function hasFiles(project) {\n  return !!(project.files && project.files['index.html'] !== undefined);\n}",
        starter: "function hasFiles(project) {\n  // return true if index.html is present\n  return false;\n}",
        test: "function testHasFiles() {\n  if (!hasFiles({ files: { 'index.html': '<h1>Hi</h1>' } })) return { passed: false, message: 'With index.html -> true.' };\n  if (hasFiles({ files: {} })) return { passed: false, message: 'Empty files -> false.' };\n  return { passed: true, message: 'The code is here!' };\n}",
        hints: [
          "Check project.files['index.html'].",
          "Guard against missing files.",
          "Return a boolean."
        ],
        solution: "function hasFiles(project) {\n  return !!(project.files && project.files['index.html'] !== undefined);\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write importProject(name, repo) that connects, imports, and returns the project. It must be connected, imported, and have files.",
      starter: S8_DEPLOY_HELPERS + "function importProject(name, repo) {\n  // connect then import\n  return null;\n}",
      test: "function testImportProject() {\n  var p = importProject('app', 'you/app');\n  if (!isConnected(p)) return { passed: false, message: 'Should be connected.' };\n  if (p.imported !== true) return { passed: false, message: 'Should be imported.' };\n  if (!hasFiles(p)) return { passed: false, message: 'Should have files.' };\n  return { passed: true, message: 'Repo cloned and ready!' };\n}",
      hints: [
        "linkProject(name, repo) then importRepo(project).",
        "Return the project.",
        "Test uses isConnected and hasFiles."
      ],
      solution: S8_DEPLOY_HELPERS + "function importProject(name, repo) {\n  var p = linkProject(name, repo);\n  importRepo(p);\n  return p;\n}",
      unlock: "Deployment"
    },
    unlock: "Deployment"
  },

  {
    id: "web-deploy-live",
    num: 68,
    title: "Deploy & Go Live",
    tagline: "Deploy builds your site and hands you a live URL.",
    skill: "Web",
    xp: 180,
    type: "js",
    icon: '<path d="M5 3l14 9-14 9z"/>',
    meta: { kind: "normal", series: "w8-online", order: 4 },
    briefing: {
      objective: "Deploy your imported repo and open the live website.",
      body: "Deploying tells Vercel to build your site and make it live. You watch the deployment happen in the browser: building... ready. Then Vercel gives you a URL. Every deploy is a numbered build - your first is build 1."
    },
    challenges: [
      {
        id: "ch1",
        title: "Deploy",
        instructions: "Write deploy(project) that returns { url: 'https://' + project.name + '.vercel.app', status: 'ready', builds: 1 }.",
        learning: "A deploy turns your files into a live website. The URL uses your project name, status becomes ready, and builds counts the deploys.",
        example: "function deploy(project) {\n  return { url: 'https://' + project.name + '.vercel.app', status: 'ready', builds: 1 };\n}",
        starter: "function deploy(project) {\n  // return the live deployment\n  return null;\n}",
        test: "function testDeploy() {\n  var d = deploy({ name: 'my-app' });\n  if (!d || d.url !== 'https://my-app.vercel.app') return { passed: false, message: 'URL should be https://my-app.vercel.app' };\n  if (d.status !== 'ready') return { passed: false, message: 'Status should be ready.' };\n  if (d.builds !== 1) return { passed: false, message: 'First deploy = build 1.' };\n  return { passed: true, message: 'Deployed!' };\n}",
        hints: [
          "Build the URL with string concatenation.",
          "status: 'ready', builds: 1.",
          "First deploy counts as build 1."
        ],
        solution: "function deploy(project) {\n  return { url: 'https://' + project.name + '.vercel.app', status: 'ready', builds: 1 };\n}"
      },
      {
        id: "ch2",
        title: "Is it live?",
        instructions: "Write isLive(deployment) that returns true when status is 'ready'.",
        learning: "While Vercel builds, status is 'building'. When the build finishes, it becomes 'ready' and the site is live.",
        example: "function isLive(deployment) {\n  return deployment.status === 'ready';\n}",
        starter: "function isLive(deployment) {\n  // return true when ready\n  return false;\n}",
        test: "function testIsLive() {\n  if (!isLive({ status: 'ready' })) return { passed: false, message: 'ready -> true.' };\n  if (isLive({ status: 'building' })) return { passed: false, message: 'building -> false.' };\n  return { passed: true, message: 'You can tell when it is live!' };\n}",
        hints: [
          "Compare status to 'ready'.",
          "One line.",
          "Return a boolean."
        ],
        solution: "function isLive(deployment) {\n  return deployment.status === 'ready';\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write launch(name, repo) that connects, imports, deploys, and returns the live deployment.",
      starter: S8_DEPLOY_HELPERS + "function launch(name, repo) {\n  // connect -> import -> deploy\n  return null;\n}",
      test: "function testLaunch() {\n  var d = launch('app', 'you/app');\n  if (!d || d.url !== 'https://app.vercel.app') return { passed: false, message: 'URL should be https://app.vercel.app' };\n  if (!isLive(d)) return { passed: false, message: 'Should be live.' };\n  if (d.builds !== 1) return { passed: false, message: 'First deploy = build 1.' };\n  return { passed: true, message: 'Your site is LIVE on the internet!' };\n}",
      hints: [
        "linkProject(name, repo), importRepo, deploy.",
        "deploy needs the project's name.",
        "Return the deployment."
      ],
      solution: S8_DEPLOY_HELPERS + "function launch(name, repo) {\n  var p = linkProject(name, repo);\n  importRepo(p);\n  return deploy(p);\n}",
      unlock: "Deployment"
    },
    unlock: "Deployment"
  },

  {
    id: "web-deploy-redeploy",
    num: 69,
    title: "Auto Redeploy",
    tagline: "Change code on GitHub, watch Vercel rebuild by itself.",
    skill: "Web",
    xp: 180,
    type: "js",
    icon: '<path d="M21 12a9 9 0 1 1-3-6.7M21 3v6h-6"/>',
    meta: { kind: "normal", series: "w8-online", order: 5 },
    briefing: {
      objective: "Understand that GitHub changes trigger automatic redeploys.",
      body: "This is the magic of Vercel: when you push a change to GitHub, Vercel detects it and redeploys automatically. You never run a command. Change code on GitHub, open your site, and the update is already live. Each redeploy is a new build in your history."
    },
    challenges: [
      {
        id: "ch1",
        title: "Push a change",
        instructions: "Write pushChange(project, file, content) that sets project.files[file] = content and returns the project.",
        learning: "Pushing a change means updating a file. In Vercel's browser flow, you edit the file on GitHub and commit - Vercel sees the commit and starts a new deploy.",
        example: "function pushChange(project, file, content) {\n  project.files[file] = content;\n  return project;\n}",
        starter: "function pushChange(project, file, content) {\n  // update the file and return the project\n  return project;\n}",
        test: "function testPush() {\n  var p = { name: 'app', files: { 'index.html': '<h1>v1</h1>' } };\n  pushChange(p, 'index.html', '<h1>v2</h1>');\n  if (p.files['index.html'] !== '<h1>v2</h1>') return { passed: false, message: 'Should update the file.' };\n  return { passed: true, message: 'Change pushed!' };\n}",
        hints: [
          "project.files[file] = content.",
          "Return project.",
          "Two lines."
        ],
        solution: "function pushChange(project, file, content) {\n  project.files[file] = content;\n  return project;\n}"
      },
      {
        id: "ch2",
        title: "Redeploy",
        instructions: "Write redeploy(previous) that returns { url: previous.url, status: 'ready', builds: previous.builds + 1 }.",
        learning: "A redeploy keeps the same URL but bumps the build number. Every change creates a new build in your deployment history.",
        example: "function redeploy(previous) {\n  return { url: previous.url, status: 'ready', builds: previous.builds + 1 };\n}",
        starter: "function redeploy(previous) {\n  // next build, same URL\n  return null;\n}",
        test: "function testRedeploy() {\n  var r = redeploy({ url: 'https://app.vercel.app', status: 'ready', builds: 1 });\n  if (r.builds !== 2) return { passed: false, message: 'Redeploy should bump builds to 2.' };\n  if (r.status !== 'ready') return { passed: false, message: 'Should be ready.' };\n  return { passed: true, message: 'New build shipped!' };\n}",
        hints: [
          "Keep the URL from previous.",
          "status: 'ready'.",
          "builds: previous.builds + 1."
        ],
        solution: "function redeploy(previous) {\n  return { url: previous.url, status: 'ready', builds: previous.builds + 1 };\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write autoRedeploy(project) that deploys, pushes a change to index.html ('<h1>v2</h1>'), redeploys, and returns the final deployment (build 2).",
      starter: S8_DEPLOY_HELPERS + "function autoRedeploy(project) {\n  // deploy -> change -> redeploy\n  return null;\n}",
      test: "function testAuto() {\n  var p = { name: 'app', files: {} };\n  var d = autoRedeploy(p);\n  if (!d || d.builds !== 2) return { passed: false, message: 'Should end on build 2.' };\n  if (!isLive(d)) return { passed: false, message: 'Should be live.' };\n  return { passed: true, message: 'Change detected and redeployed automatically!' };\n}",
      hints: [
        "deploy(project) first.",
        "pushChange(project, 'index.html', '<h1>v2</h1>').",
        "redeploy(first) to get build 2."
      ],
      solution: S8_DEPLOY_HELPERS + "function autoRedeploy(project) {\n  var first = deploy(project);\n  pushChange(project, 'index.html', '<h1>v2</h1>');\n  return redeploy(first);\n}",
      unlock: "Deployment"
    },
    unlock: "Deployment"
  },

  {
    id: "web-deploy-preview",
    num: 70,
    title: "Previews & Production",
    tagline: "Every branch gets a preview. main is your production site.",
    skill: "Web",
    xp: 190,
    type: "js",
    icon: '<path d="M3 5h18v14H3z"/><path d="M3 9h18M7 5v14"/>',
    meta: { kind: "normal", series: "w8-online", order: 6 },
    briefing: {
      objective: "Understand preview deployments, production, and deployment history.",
      body: "Vercel gives every branch its own preview URL so you can test changes before they go live. The production URL - your real website - comes from the main branch. You can visit any old build in your deployment history and even roll back."
    },
    challenges: [
      {
        id: "ch1",
        title: "Preview URL",
        instructions: "Write previewUrl(name, branch) that returns 'https://' + name + '-' + branch + '.vercel.app'.",
        learning: "Each branch gets a preview address. The branch name is added to the URL so you can test features before they reach production.",
        example: "function previewUrl(name, branch) {\n  return 'https://' + name + '-' + branch + '.vercel.app';\n}",
        starter: "function previewUrl(name, branch) {\n  // build the preview URL\n  return '';\n}",
        test: "function testPreview() {\n  if (previewUrl('app', 'feature') !== 'https://app-feature.vercel.app') return { passed: false, message: 'Preview should be https://app-feature.vercel.app' };\n  return { passed: true, message: 'Preview URL ready!' };\n}",
        hints: [
          "Concatenate name + '-' + branch.",
          "Same base as production.",
          "Test shows the exact format."
        ],
        solution: "function previewUrl(name, branch) {\n  return 'https://' + name + '-' + branch + '.vercel.app';\n}"
      },
      {
        id: "ch2",
        title: "Production URL",
        instructions: "Write productionUrl(name) that returns 'https://' + name + '.vercel.app'.",
        learning: "Production is your real website - the one visitors see. It comes from the main branch and never shows the branch name.",
        example: "function productionUrl(name) {\n  return 'https://' + name + '.vercel.app';\n}",
        starter: "function productionUrl(name) {\n  // build the production URL\n  return '';\n}",
        test: "function testProduction() {\n  if (productionUrl('app') !== 'https://app.vercel.app') return { passed: false, message: 'Production should be https://app.vercel.app' };\n  return { passed: true, message: 'Production URL ready!' };\n}",
        hints: [
          "No branch in the URL.",
          "'https://' + name + '.vercel.app'.",
          "One line."
        ],
        solution: "function productionUrl(name) {\n  return 'https://' + name + '.vercel.app';\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write channels(name) that returns { production: productionUrl(name), preview: previewUrl(name, 'feature') }.",
      starter: S8_DEPLOY_HELPERS + "function channels(name) {\n  // production and preview URLs\n  return null;\n}",
      test: "function testChannels() {\n  var c = channels('app');\n  if (!c || c.production !== 'https://app.vercel.app') return { passed: false, message: 'Production URL wrong.' };\n  if (c.preview !== 'https://app-feature.vercel.app') return { passed: false, message: 'Preview URL wrong.' };\n  return { passed: true, message: 'Previews and production separated!' };\n}",
      hints: [
        "Call both helper functions.",
        "Return an object with both.",
        "Use the helpers already provided."
      ],
      solution: S8_DEPLOY_HELPERS + "function channels(name) {\n  return { production: productionUrl(name), preview: previewUrl(name, 'feature') };\n}",
      unlock: "Deployment"
    },
    unlock: "Deployment"
  },

  {
    id: "web-deploy-domain",
    num: 71,
    title: "Custom Domain",
    tagline: "Swap vercel.app for a real address you own.",
    skill: "Web",
    xp: 190,
    type: "js",
    icon: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
    meta: { kind: "normal", series: "w8-online", order: 7 },
    briefing: {
      objective: "Understand custom domains and connect one to your site.",
      body: "your-name.vercel.app works, but a real website has its own address - like yourname.com. You buy a domain, then in Vercel you add it to your project and point it at your deployment. Visitors type yourname.com and see your site."
    },
    challenges: [
      {
        id: "ch1",
        title: "Connect a domain",
        instructions: "Write connectDomain(deployment, domain) that sets deployment.domain = domain and returns the deployment.",
        learning: "Connecting a domain attaches your own address to the deployment. The site keeps its vercel.app URL too.",
        example: "function connectDomain(deployment, domain) {\n  deployment.domain = domain;\n  return deployment;\n}",
        starter: "function connectDomain(deployment, domain) {\n  // attach the domain\n  return deployment;\n}",
        test: "function testDomain() {\n  var d = { url: 'https://app.vercel.app' };\n  connectDomain(d, 'www.app.com');\n  if (d.domain !== 'www.app.com') return { passed: false, message: 'Should store the domain.' };\n  return { passed: true, message: 'Domain connected!' };\n}",
        hints: [
          "deployment.domain = domain.",
          "Return deployment.",
          "Two lines."
        ],
        solution: "function connectDomain(deployment, domain) {\n  deployment.domain = domain;\n  return deployment;\n}"
      },
      {
        id: "ch2",
        title: "Where is it live?",
        instructions: "Write liveUrl(deployment) that returns deployment.domain if set, otherwise deployment.url.",
        learning: "Once a domain is connected, visitors use your custom address. Until then, they use the vercel.app URL.",
        example: "function liveUrl(deployment) {\n  return deployment.domain || deployment.url;\n}",
        starter: "function liveUrl(deployment) {\n  // domain first, url as fallback\n  return '';\n}",
        test: "function testLiveUrl() {\n  if (liveUrl({ domain: 'www.app.com', url: 'https://app.vercel.app' }) !== 'www.app.com') return { passed: false, message: 'Custom domain should win.' };\n  if (liveUrl({ url: 'https://app.vercel.app' }) !== 'https://app.vercel.app') return { passed: false, message: 'Fall back to vercel url.' };\n  return { passed: true, message: 'Your address works!' };\n}",
        hints: [
          "domain first, url fallback.",
          "Use ||.",
          "One line."
        ],
        solution: "function liveUrl(deployment) {\n  return deployment.domain || deployment.url;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write launchSite(name, domain) that deploys a project named name and connects domain, returning { deployment, live } where live is the liveUrl.",
      starter: S8_DEPLOY_HELPERS + "function launchSite(name, domain) {\n  // deploy + connect domain + live url\n  return null;\n}",
      test: "function testLaunchSite() {\n  var s = launchSite('app', 'www.app.com');\n  if (!s || !s.deployment || s.deployment.url !== 'https://app.vercel.app') return { passed: false, message: 'Should deploy the app.' };\n  if (s.deployment.domain !== 'www.app.com') return { passed: false, message: 'Should connect the domain.' };\n  if (s.live !== 'www.app.com') return { passed: false, message: 'live should use the domain.' };\n  return { passed: true, message: 'Your own address is live!' };\n}",
      hints: [
        "deploy({ name: name }).",
        "connectDomain(deployment, domain).",
        "liveUrl(deployment) for the live field."
      ],
      solution: S8_DEPLOY_HELPERS + "function launchSite(name, domain) {\n  var d = deploy({ name: name });\n  connectDomain(d, domain);\n  return { deployment: d, live: liveUrl(d) };\n}",
      unlock: "Deployment"
    },
    unlock: "Deployment"
  },

  {
    id: "web-deploy-boss",
    num: 72,
    title: "Ship Boss",
    tagline: "The whole journey: repo, deploy, redeploy, domain.",
    skill: "Web",
    xp: 240,
    type: "js",
    icon: '<path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4L2 9.4h7.6z"/>',
    meta: { kind: "boss", series: "w8-online", order: 8, focusLock: true, hintCap: 1 },
    briefing: {
      objective: "Ship a real website from GitHub to a custom domain, browser-first.",
      body: "The boss of the online series. Take a repo on GitHub, connect it to Vercel, import it, deploy, change a file and redeploy, then attach a custom domain. All in the browser - no command line. Chain the functions from this whole series."
    },
    challenges: [
      {
        id: "ch1",
        title: "Plan the launch",
        instructions: "Write flow() that returns ['connect', 'import', 'deploy', 'redeploy', 'domain'].",
        learning: "The browser-first flow: connect your account, import the repo, deploy, change and redeploy, then add your domain. Same order every time.",
        example: "function flow() {\n  return ['connect', 'import', 'deploy', 'redeploy', 'domain'];\n}",
        starter: "function flow() {\n  // return the ordered flow steps\n  return [];\n}",
        test: "function testFlow() {\n  var f = flow();\n  var want = ['connect', 'import', 'deploy', 'redeploy', 'domain'];\n  if (!Array.isArray(f) || f.join(',') !== want.join(',')) return { passed: false, message: 'Should list the steps in order.' };\n  return { passed: true, message: 'The plan is set!' };\n}",
        hints: [
          "The five steps are in the briefing.",
          "Order: connect first, domain last.",
          "Return a literal array."
        ],
        solution: "function flow() {\n  return ['connect', 'import', 'deploy', 'redeploy', 'domain'];\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write shipIt(name, repo, domain) that connects, imports, deploys, pushes a change to index.html ('<h1>v2</h1>'), redeploys, connects the domain, and returns { deployment, live }.",
      starter: S8_DEPLOY_HELPERS + "function shipIt(name, repo, domain) {\n  // connect -> import -> deploy -> redeploy -> domain\n  return null;\n}",
      test: "function testShip() {\n  var s = shipIt('app', 'you/app', 'www.app.com');\n  if (!s || !s.deployment || s.deployment.url !== 'https://app.vercel.app') return { passed: false, message: 'Should deploy the app.' };\n  if (s.deployment.builds !== 2) return { passed: false, message: 'Should end on build 2 after a redeploy.' };\n  if (s.deployment.domain !== 'www.app.com') return { passed: false, message: 'Should connect the domain.' };\n  if (s.live !== 'www.app.com') return { passed: false, message: 'live should use the domain.' };\n  return { passed: true, message: 'BOSS DOWN - your site is live at your own domain!' };\n}",
      hints: [
        "linkProject(name, repo), importRepo(p), deploy(p).",
        "pushChange(p, 'index.html', '<h1>v2</h1>') then redeploy(first).",
        "connectDomain(deployment, domain), live = liveUrl(deployment)."
      ],
      solution: S8_DEPLOY_HELPERS + "function shipIt(name, repo, domain) {\n  var p = linkProject(name, repo);\n  importRepo(p);\n  var first = deploy(p);\n  pushChange(p, 'index.html', '<h1>v2</h1>');\n  var d = redeploy(first);\n  connectDomain(d, domain);\n  return { deployment: d, live: liveUrl(d) };\n}",
      unlock: "Deployment"
    },
    unlock: "Deployment"
  }
]);

/* ============================================================
   Series 9 - Get Found (w9-seo)
   Make the deployed website understandable and discoverable
   by search engines. Practical: learner works on the site they
   deployed in Series 8. Browser-first for Search Console steps.
   Builds are self-contained (prepend helpers).
   ============================================================ */

var S9_SEO_HELPERS = [
  "function seoTitle(html) { var m = /<title>([\\s\\S]*?)<\\/title>/.exec(html); return m ? m[1].trim() : ''; }",
  "function seoDesc(html) { var m = /<meta name=\"description\" content=\"([^\"]*)\"/.exec(html); return m ? m[1] : ''; }",
  "function seoTags(html, tag) { var out = [], re = new RegExp('<' + tag + '\\\\b[^>]*>([\\\\s\\\\S]*?)</' + tag + '>', 'g'), m; while ((m = re.exec(html))) { out.push(m[1].replace(/<[^>]+>/g, '').trim()); } return out; }",
  "function seoLinks(html) { var out = [], re = /<a\\b[^>]*href=\"([^\"]*)\"[^>]*>([\\s\\S]*?)<\\/a>/g, m; while ((m = re.exec(html))) { out.push({ href: m[1], text: m[2].replace(/<[^>]+>/g, '').trim() }); } return out; }",
  "function seoImgs(html) { var out = [], re = /<img\\b[^>]*>/g, m; while ((m = re.exec(html))) { var alt = /alt=\"([^\"]*)\"/.exec(m[0]); var src = /src=\"([^\"]*)\"/.exec(m[0]); out.push({ src: src ? src[1] : '', alt: alt ? alt[1] : '' }); } return out; }",
  "function setTitle(html, title) { return html.replace(/<title>[\\s\\S]*?<\\/title>/, '<title>' + title + '</title>'); }",
  "function setDescription(html, desc) { var meta = '<meta name=\"description\" content=\"' + desc + '\">'; if (/<meta name=\"description\"/.test(html)) { return html.replace(/<meta name=\"description\" content=\"[^\"]*\"/, '<meta name=\"description\" content=\"' + desc + '\"'); } return html.replace(/<head>/, '<head>' + meta); }",
  "function sitemapXml(urls) { var out = '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">'; for (var i = 0; i < urls.length; i++) { out += '\\n  <url><loc>' + urls[i] + '</loc></url>'; } return out + '\\n</urlset>'; }"
].join('\n') + '\n';

registerMissions([
  {
    id: "web-seo-google",
    num: 73,
    title: "What Does Google See?",
    tagline: "Look at your live site the way a search engine does.",
    skill: "Web",
    xp: 180,
    type: "js",
    icon: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>',
    meta: { kind: "normal", series: "w9-seo", order: 1 },
    briefing: {
      objective: "See your deployed website the way a search engine sees it.",
      body: "A search engine is a blind reader: it parses the page title, the meta description, headings, links, images and the URL - not the pretty pixels you see. A website exists, a search engine can understand it, then it can index it, and only then can it rank. No one can guarantee ranking, but you can control whether Google can understand your page at all."
    },
    challenges: [
      {
        id: "ch1",
        title: "Extract the meta",
        instructions: "Write extractMeta(html) that returns { title, description } pulled from the page title and meta description.",
        learning: "These are the two fields a search engine reads first. title comes from the <title> tag, description from <meta name=\"description\" content=\"...\">.",
        example: "function extractMeta(html) {\n  var t = /<title>([\\s\\S]*?)<\\/title>/.exec(html);\n  var d = /<meta name=\"description\" content=\"([^\"]*)\"/.exec(html);\n  return { title: t ? t[1].trim() : '', description: d ? d[1] : '' };\n}",
        starter: "function extractMeta(html) {\n  // pull out the title and description\n  return { title: '', description: '' };\n}",
        test: "function t() {\n  var m = extractMeta('<html><head><title>Green Leaf Cafe</title><meta name=\"description\" content=\"Fresh food and coffee in the city center.\"></head><body></body></html>');\n  if (!m || m.title !== 'Green Leaf Cafe') return { passed: false, message: 'Should extract the page title.' };\n  if (m.description !== 'Fresh food and coffee in the city center.') return { passed: false, message: 'Should extract the meta description.' };\n  return { passed: true, message: 'That is the text Google reads first!' };\n}",
        hints: [
          "Use a regex on the <title> tag.",
          "Use a regex on the meta description.",
          "Fall back to empty strings."
        ],
        solution: "function extractMeta(html) {\n  var t = /<title>([\\s\\S]*?)<\\/title>/.exec(html);\n  var d = /<meta name=\"description\" content=\"([^\"]*)\"/.exec(html);\n  return { title: t ? t[1].trim() : '', description: d ? d[1] : '' };\n}"
      },
      {
        id: "ch2",
        title: "Understandable?",
        instructions: "Write understandable(view) that returns true when a page's title and description are meaningful (title at least 3 chars, description at least 10).",
        learning: "A page with no title or an empty description is invisible to search engines. Meaningful metadata is the difference between \"exists\" and \"understandable\".",
        example: "function understandable(view) {\n  return !!((view.title || '').trim().length >= 3 && (view.description || '').trim().length >= 10);\n}",
        starter: "function understandable(view) {\n  // meaningful title AND description?\n  return false;\n}",
        test: "function t() {\n  if (understandable({ title: 'Home', description: '' })) return { passed: false, message: 'Empty description -> not understandable.' };\n  if (understandable({ title: 'Green Leaf Cafe', description: 'Fresh food and coffee in the city center.' })) { return { passed: true, message: 'Google can understand this page!' }; }\n  return { passed: false, message: 'Meaningful title + description should pass.' };\n}",
        hints: [
          "Check title length.",
          "Check description length.",
          "Return a boolean."
        ],
        solution: "function understandable(view) {\n  return !!((view.title || '').trim().length >= 3 && (view.description || '').trim().length >= 10);\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write googleView(url, html) that returns { url, title, description, headings, links, images } for a page using the helpers.",
      starter: S9_SEO_HELPERS + "function googleView(url, html) {\n  // title, description, headings (h1+h2), links, images\n  return null;\n}",
      test: "function t() {\n  var html = '<html><head><title>Green Leaf Cafe</title><meta name=\"description\" content=\"Fresh food and coffee.\"></head><body><h1>Welcome</h1><h2>Our Menu</h2><a href=\"menu.html\">Menu</a><img src=\"cafe.jpg\" alt=\"the cafe\"></body></html>';\n  var v = googleView('https://greenleaf.vercel.app/', html);\n  if (!v || v.url !== 'https://greenleaf.vercel.app/') return { passed: false, message: 'Should keep the URL.' };\n  if (v.title !== 'Green Leaf Cafe' || v.description !== 'Fresh food and coffee.') return { passed: false, message: 'Should extract title and description.' };\n  if (v.headings.indexOf('Welcome') === -1 || v.headings.indexOf('Our Menu') === -1) return { passed: false, message: 'Should collect h1 and h2 headings.' };\n  if (!v.links || v.links[0].href !== 'menu.html') return { passed: false, message: 'Should collect links.' };\n  if (!v.images || v.images[0].alt !== 'the cafe') return { passed: false, message: 'Should collect images with alt text.' };\n  return { passed: true, message: 'You now see the page the way Google does!' };\n}",
      hints: [
        "seoTitle(html) and seoDesc(html).",
        "headings: seoTags(html, 'h1').concat(seoTags(html, 'h2')).",
        "seoLinks(html) and seoImgs(html)."
      ],
      solution: S9_SEO_HELPERS + "function googleView(url, html) {\n  return { url: url, title: seoTitle(html), description: seoDesc(html), headings: seoTags(html, 'h1').concat(seoTags(html, 'h2')), links: seoLinks(html), images: seoImgs(html) };\n}",
      unlock: "SEO Foundations"
    },
    unlock: "SEO Foundations"
  },

  {
    id: "web-seo-title",
    num: 74,
    title: "Page Title",
    tagline: "Every page needs a meaningful <title>.",
    skill: "Web",
    xp: 180,
    type: "js",
    icon: '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M12 9v9"/>',
    meta: { kind: "normal", series: "w9-seo", order: 2 },
    briefing: {
      objective: "Give your page a title people actually want to click.",
      body: "The <title> tag is the big blue headline in Google's results. A title like \"Home\" tells a searcher nothing. A title like \"MO Digital — Web Development\" tells them exactly what the page is. Edit the title below and watch the simulated Google preview update."
    },
    challenges: [
      {
        id: "ch1",
        title: "Set the title",
        instructions: "Write setTitle(html, title) that replaces the <title> content and returns the updated html.",
        learning: "Your title is the first thing a searcher sees. Make it specific and meaningful for that exact page.",
        example: "function setTitle(html, title) {\n  return html.replace(/<title>[\\s\\S]*?<\\/title>/, '<title>' + title + '</title>');\n}",
        starter: "function setTitle(html, title) {\n  // swap the old title for the new one\n  return html;\n}",
        test: "function t() {\n  var out = setTitle('<html><head><title>Home</title></head><body></body></html>', 'MO Digital — Web Development');\n  if (out.indexOf('MO Digital — Web Development') === -1) return { passed: false, message: 'Should set the new title.' };\n  if (out.indexOf('>Home<') !== -1) return { passed: false, message: 'The old generic title should be gone.' };\n  return { passed: true, message: 'Google preview:\\nMO Digital — Web Development\\nhttps://your-site.vercel.app' };\n}",
        hints: [
          "Regex-replace the <title> block.",
          "Keep the tags, swap the content.",
          "'>Home<' should disappear."
        ],
        solution: "function setTitle(html, title) {\n  return html.replace(/<title>[\\s\\S]*?<\\/title>/, '<title>' + title + '</title>');\n}"
      },
      {
        id: "ch2",
        title: "Is it a good title?",
        instructions: "Write goodTitle(title) that returns true when the title is meaningful: at least 10 characters and not a generic word like home, untitled, index or website.",
        learning: "Generic titles get ignored. A good title names the page, the site, or both - and reads like a promise to the reader.",
        example: "function goodTitle(title) {\n  var bad = ['home', 'untitled', 'index', 'new tab', 'website'];\n  var t = (title || '').trim().toLowerCase();\n  return t.length >= 10 && bad.indexOf(t) === -1;\n}",
        starter: "function goodTitle(title) {\n  // meaningful and not generic?\n  return false;\n}",
        test: "function t() {\n  if (goodTitle('Home')) return { passed: false, message: '\"Home\" is too generic.' };\n  if (goodTitle('Untitled')) return { passed: false, message: '\"Untitled\" is a placeholder.' };\n  if (goodTitle('a')) return { passed: false, message: 'Too short.' };\n  if (!goodTitle('MO Digital — Web Development')) return { passed: false, message: 'A real title should pass.' };\n  return { passed: true, message: 'Your title is click-worthy!' };\n}",
        hints: [
          "Check length >= 10.",
          "Blacklist generic words.",
          "Trim and lowercase first."
        ],
        solution: "function goodTitle(title) {\n  var bad = ['home', 'untitled', 'index', 'new tab', 'website'];\n  var t = (title || '').trim().toLowerCase();\n  return t.length >= 10 && bad.indexOf(t) === -1;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write updateTitle(html, title, url) that returns { html: html with the new title, preview: title + '\\n' + url }.",
      starter: S9_SEO_HELPERS + "function updateTitle(html, title, url) {\n  // set the title and build the preview\n  return null;\n}",
      test: "function t() {\n  var r = updateTitle('<html><head><title>Home</title></head></html>', 'Green Leaf Cafe — Fresh Food', 'https://greenleaf.vercel.app');\n  if (!r || r.html.indexOf('Green Leaf Cafe — Fresh Food') === -1) return { passed: false, message: 'Should set the title in the html.' };\n  if (r.preview !== 'Green Leaf Cafe — Fresh Food\\nhttps://greenleaf.vercel.app') return { passed: false, message: 'Preview should be title then URL.' };\n  return { passed: true, message: 'Google preview:\\n' + r.preview };\n}",
      hints: [
        "setTitle(html, title).",
        "preview = title + '\\n' + url.",
        "Return both."
      ],
      solution: S9_SEO_HELPERS + "function updateTitle(html, title, url) {\n  return { html: setTitle(html, title), preview: title + '\\n' + url };\n}",
      unlock: "SEO Foundations"
    },
    unlock: "SEO Foundations"
  },

  {
    id: "web-seo-description",
    num: 75,
    title: "Meta Description",
    tagline: "Write the snippet that earns the click.",
    skill: "Web",
    xp: 180,
    type: "js",
    icon: '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 8h18M7 13h6M7 16h10"/>',
    meta: { kind: "normal", series: "w9-seo", order: 3 },
    briefing: {
      objective: "Write a meta description for your deployed site.",
      body: "The meta description is the gray text under the title in search results. Search engines check three things: it exists, it is meaningful, and it is a reasonable length (about 50-160 characters). Placeholders and lorem ipsum get you nowhere - write what a real visitor needs to know."
    },
    challenges: [
      {
        id: "ch1",
        title: "Add the meta tag",
        instructions: "Write setDescription(html, desc) that adds or updates <meta name=\"description\" content=\"...\"> inside the head.",
        learning: "If no description exists, add it right after <head>. If one exists, update its content.",
        example: "function setDescription(html, desc) {\n  var meta = '<meta name=\"description\" content=\"' + desc + '\">';\n  if (/<meta name=\"description\"/.test(html)) {\n    return html.replace(/<meta name=\"description\" content=\"[^\"]*\"/, '<meta name=\"description\" content=\"' + desc + '\"');\n  }\n  return html.replace(/<head>/, '<head>' + meta);\n}",
        starter: "function setDescription(html, desc) {\n  // add or update the meta description\n  return html;\n}",
        test: "function t() {\n  var out = setDescription('<html><head></head><body></body></html>', 'Fresh food and coffee in the city center.');\n  if (out.indexOf('<meta name=\"description\" content=\"Fresh food and coffee in the city center.\">') === -1) return { passed: false, message: 'Should insert the meta description after <head>.' };\n  var out2 = setDescription('<html><head><meta name=\"description\" content=\"old\"></head></html>', 'New description here.');\n  if (out2.indexOf('content=\"New description here.\"') === -1 || out2.indexOf('content=\"old\"') !== -1) return { passed: false, message: 'Should update an existing description.' };\n  return { passed: true, message: 'Meta description is in place!' };\n}",
        hints: [
          "Insert after <head> if missing.",
          "Replace the content attribute if present.",
          "Keep the same tag name."
        ],
        solution: "function setDescription(html, desc) {\n  var meta = '<meta name=\"description\" content=\"' + desc + '\">';\n  if (/<meta name=\"description\"/.test(html)) {\n    return html.replace(/<meta name=\"description\" content=\"[^\"]*\"/, '<meta name=\"description\" content=\"' + desc + '\"');\n  }\n  return html.replace(/<head>/, '<head>' + meta);\n}"
      },
      {
        id: "ch2",
        title: "Is it worth the click?",
        instructions: "Write validDescription(desc) that returns true when the description is 50-160 characters, not empty, and not a placeholder (no lorem, 'your description', or 'placeholder').",
        learning: "Search engines reward descriptions that summarize the page. Too short and there is nothing to read; too long and it gets cut off.",
        example: "function validDescription(desc) {\n  var d = (desc || '').trim();\n  var low = d.toLowerCase();\n  if (d.length < 50 || d.length > 160) return false;\n  if (low.indexOf('lorem') !== -1 || low.indexOf('your description') !== -1 || low.indexOf('placeholder') !== -1) return false;\n  return true;\n}",
        starter: "function validDescription(desc) {\n  // right length and not a placeholder?\n  return false;\n}",
        test: "function t() {\n  if (validDescription('')) return { passed: false, message: 'Empty description -> invalid.' };\n  if (validDescription('too short')) return { passed: false, message: 'Too short -> invalid.' };\n  if (validDescription('lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor')) return { passed: false, message: 'Placeholder text -> invalid.' };\n  var good = 'Fresh, seasonal food and specialty coffee in the heart of the city. Open daily from 8am.';\n  if (!validDescription(good)) return { passed: false, message: 'A real description should pass.' };\n  return { passed: true, message: 'A snippet worth clicking!' };\n}",
        hints: [
          "Trim first.",
          "Check the length range 50-160.",
          "Reject placeholder words."
        ],
        solution: "function validDescription(desc) {\n  var d = (desc || '').trim();\n  var low = d.toLowerCase();\n  if (d.length < 50 || d.length > 160) return false;\n  if (low.indexOf('lorem') !== -1 || low.indexOf('your description') !== -1 || low.indexOf('placeholder') !== -1) return false;\n  return true;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write describe(html, desc, url) that returns { html: html with the meta description set, preview: desc + '\\n' + url }.",
      starter: S9_SEO_HELPERS + "function describe(html, desc, url) {\n  // set the description and build the preview\n  return null;\n}",
      test: "function t() {\n  var d = 'Fresh, seasonal food and specialty coffee in the heart of the city. Open daily from 8am.';\n  var r = describe('<html><head></head><body></body></html>', d, 'https://greenleaf.vercel.app');\n  if (!r || r.html.indexOf('<meta name=\"description\" content=\"' + d + '\">') === -1) return { passed: false, message: 'Should set the meta description.' };\n  if (r.preview !== d + '\\nhttps://greenleaf.vercel.app') return { passed: false, message: 'Preview should be description then URL.' };\n  return { passed: true, message: 'Google preview:\\n' + r.preview };\n}",
      hints: [
        "setDescription(html, desc).",
        "preview = desc + '\\n' + url.",
        "Return both."
      ],
      solution: S9_SEO_HELPERS + "function describe(html, desc, url) {\n  return { html: setDescription(html, desc), preview: desc + '\\n' + url };\n}",
      unlock: "SEO Foundations"
    },
    unlock: "SEO Foundations"
  },

  {
    id: "web-seo-html",
    num: 76,
    title: "Search-Friendly HTML",
    tagline: "Structure your page so search engines can read it.",
    skill: "Web",
    xp: 190,
    type: "js",
    icon: '<path d="M14 4l6 6-6 6M4 12h4M6 4l-2 8 2 8"/>',
    meta: { kind: "normal", series: "w9-seo", order: 4 },
    briefing: {
      objective: "Improve a badly structured page so search engines can understand it.",
      body: "SEO is not just adding keywords. It is structure: one <h1> per page, a clear heading hierarchy, semantic elements like <header> and <main>, meaningful link text, image alt text, and real content. Here is a messy page - clean it up the way a search engine would want it."
    },
    challenges: [
      {
        id: "ch1",
        title: "Fix the headings",
        instructions: "Write fixHeadings(html) that turns <div class=\"title\"> into <h1> and <div class=\"sub\"> into <h2>.",
        learning: "Headings tell a search engine what your page is about. One <h1>, then <h2> for the main sections. Never fake it with divs.",
        example: "function fixHeadings(html) {\n  html = html.replace(/<div class=\"title\">([\\s\\S]*?)<\\/div>/g, '<h1>$1</h1>');\n  html = html.replace(/<div class=\"sub\">([\\s\\S]*?)<\\/div>/g, '<h2>$1</h2>');\n  return html;\n}",
        starter: "function fixHeadings(html) {\n  // title -> h1, sub -> h2\n  return html;\n}",
        test: "function t() {\n  var out = fixHeadings('<div class=\"title\">Coffee House</div>\\n<div class=\"sub\">Our Story</div>');\n  if (out.indexOf('<h1>Coffee House</h1>') === -1) return { passed: false, message: 'The title div should become an <h1>.' };\n  if (out.indexOf('<h2>Our Story</h2>') === -1) return { passed: false, message: 'The sub div should become an <h2>.' };\n  if (out.indexOf('class=\"title\"') !== -1 || out.indexOf('class=\"sub\"') !== -1) return { passed: false, message: 'No fake heading divs should remain.' };\n  return { passed: true, message: 'A real heading hierarchy!' };\n}",
        hints: [
          "Replace the title div with <h1>.",
          "Replace the sub div with <h2>.",
          "The $1 keeps the inner text."
        ],
        solution: "function fixHeadings(html) {\n  html = html.replace(/<div class=\"title\">([\\s\\S]*?)<\\/div>/g, '<h1>$1</h1>');\n  html = html.replace(/<div class=\"sub\">([\\s\\S]*?)<\\/div>/g, '<h2>$1</h2>');\n  return html;\n}"
      },
      {
        id: "ch2",
        title: "Fix links and images",
        instructions: "Write fixLinksImages(html) that replaces 'click here' links with 'See our full menu' and gives every img an alt attribute.",
        learning: "\"Click here\" tells search engines nothing about the destination. Alt text tells search engines (and screen readers) what an image shows.",
        example: "function fixLinksImages(html) {\n  html = html.replace(/<a[^>]*>click here<\\/a>/g, '<a href=\"menu.html\">See our full menu</a>');\n  html = html.replace(/<img src=\"([^\"]*)\"[^>]*>/g, '<img src=\"$1\" alt=\"A photo from the cafe\">');\n  return html;\n}",
        starter: "function fixLinksImages(html) {\n  // meaningful link text + alt attributes\n  return html;\n}",
        test: "function t() {\n  var out = fixLinksImages('<a href=\"menu.html\">click here</a>\\n<img src=\"cafe.jpg\">');\n  if (out.indexOf('click here') !== -1) return { passed: false, message: '\"click here\" should be replaced with real text.' };\n  if (out.indexOf('See our full menu') === -1) return { passed: false, message: 'Link text should describe the destination.' };\n  if (out.indexOf('alt=\"') === -1) return { passed: false, message: 'The image needs an alt attribute.' };\n  return { passed: true, message: 'Links and images now make sense!' };\n}",
        hints: [
          "Swap 'click here' link text.",
          "Add alt=\"...\" to every img.",
          "Keep the src attribute."
        ],
        solution: "function fixLinksImages(html) {\n  html = html.replace(/<a[^>]*>click here<\\/a>/g, '<a href=\"menu.html\">See our full menu</a>');\n  html = html.replace(/<img src=\"([^\"]*)\"[^>]*>/g, '<img src=\"$1\" alt=\"A photo from the cafe\">');\n  return html;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write fixPage(html) that fixes the headings, the links and images, then wraps the page in <header><nav>, <main> and <footer>.",
      starter: S9_SEO_HELPERS + "function fixPage(html) {\n  // fix headings, links/images, add semantic wrappers\n  return html;\n}",
      test: "function t() {\n  var messy = '<div class=\"title\">Coffee House</div><div class=\"sub\">Our Story</div><a href=\"menu.html\">click here</a><img src=\"cafe.jpg\">';\n  var out = fixPage(messy);\n  if (out.indexOf('<h1>') === -1 || out.indexOf('<h2>') === -1) return { passed: false, message: 'Should fix the heading hierarchy.' };\n  if (out.indexOf('click here') !== -1) return { passed: false, message: 'Should fix the link text.' };\n  if (out.indexOf('<img src=\"cafe.jpg\" alt=\"') === -1) return { passed: false, message: 'Should add alt text.' };\n  if (out.indexOf('<header') === -1 || out.indexOf('<main') === -1 || out.indexOf('<footer') === -1 || out.indexOf('<nav') === -1) return { passed: false, message: 'Should use semantic <header>, <main>, <footer>, <nav>.' };\n  return { passed: true, message: 'A page any search engine would love!' };\n}",
      hints: [
        "Reuse the two fixes from the challenges.",
        "Wrap with <header><nav>...</nav></header><main>...</main><footer>...</footer>.",
        "Keep the whole body inside <main>."
      ],
      solution: S9_SEO_HELPERS + "function fixPage(html) {\n  html = html.replace(/<div class=\"title\">([\\s\\S]*?)<\\/div>/g, '<h1>$1</h1>');\n  html = html.replace(/<div class=\"sub\">([\\s\\S]*?)<\\/div>/g, '<h2>$1</h2>');\n  html = html.replace(/<a[^>]*>click here<\\/a>/g, '<a href=\"menu.html\">See our full menu</a>');\n  html = html.replace(/<img src=\"([^\"]*)\"[^>]*>/g, '<img src=\"$1\" alt=\"A photo from the cafe\">');\n  return '<header><nav><a href=\"index.html\">Home</a></nav></header><main>' + html + '</main><footer><p>© 2026 Coffee House</p></footer>';\n}",
      unlock: "SEO Foundations"
    },
    unlock: "SEO Foundations"
  },

  {
    id: "web-seo-sitemap",
    num: 77,
    title: "Sitemap",
    tagline: "Give crawlers a map of every page on your site.",
    skill: "Web",
    xp: 180,
    type: "js",
    icon: '<path d="M3 6h18M3 12h18M3 18h18"/><circle cx="7" cy="6" r="2"/><circle cx="7" cy="12" r="2"/><circle cx="7" cy="18" r="2"/>',
    meta: { kind: "normal", series: "w9-seo", order: 5 },
    briefing: {
      objective: "Create a sitemap for your deployed site.",
      body: "A sitemap is an XML file that lists every page on your site. It lives at yoursite.com/sitemap.xml and tells search engine crawlers exactly what URLs exist. Yours should contain the expected URLs of your deployed site."
    },
    challenges: [
      {
        id: "ch1",
        title: "Build the XML",
        instructions: "Write sitemapXml(urls) that returns a urlset XML string with one <url><loc> entry per URL.",
        learning: "Each page of your site gets a <loc> entry inside <url>. The urlset wraps them all.",
        example: "function sitemapXml(urls) {\n  var out = '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">';\n  for (var i = 0; i < urls.length; i++) { out += '\\n  <url><loc>' + urls[i] + '</loc></url>'; }\n  return out + '\\n</urlset>';\n}",
        starter: "function sitemapXml(urls) {\n  // wrap each url in a <loc>\n  return '';\n}",
        test: "function t() {\n  var x = sitemapXml(['https://greenleaf.vercel.app/', 'https://greenleaf.vercel.app/menu']);\n  if (x.indexOf('<urlset') === -1) return { passed: false, message: 'Should start with a <urlset> element.' };\n  if (x.indexOf('<loc>https://greenleaf.vercel.app/</loc>') === -1) return { passed: false, message: 'Should include the home URL in a <loc>.' };\n  if (x.indexOf('<loc>https://greenleaf.vercel.app/menu</loc>') === -1) return { passed: false, message: 'Should include every URL.' };\n  return { passed: true, message: 'A real sitemap!' };\n}",
        hints: [
          "Open with <urlset>.",
          "One <url><loc>url</loc></url> per URL.",
          "Close with </urlset>."
        ],
        solution: "function sitemapXml(urls) {\n  var out = '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">';\n  for (var i = 0; i < urls.length; i++) { out += '\\n  <url><loc>' + urls[i] + '</loc></url>'; }\n  return out + '\\n</urlset>';\n}"
      },
      {
        id: "ch2",
        title: "Is it in the map?",
        instructions: "Write hasUrl(xml, url) that returns true when the sitemap contains that URL in a <loc>.",
        learning: "Before submitting a sitemap, check it actually contains the URLs you expect.",
        example: "function hasUrl(xml, url) {\n  return xml.indexOf('<loc>' + url + '</loc>') !== -1;\n}",
        starter: "function hasUrl(xml, url) {\n  // does the sitemap list this URL?\n  return false;\n}",
        test: "function t() {\n  var x = '<urlset><url><loc>https://greenleaf.vercel.app/</loc></url></urlset>';\n  if (!hasUrl(x, 'https://greenleaf.vercel.app/')) return { passed: false, message: 'Should find a URL that is listed.' };\n  if (hasUrl(x, 'https://greenleaf.vercel.app/private')) return { passed: false, message: 'Should not find a URL that is missing.' };\n  return { passed: true, message: 'Your map matches your site!' };\n}",
        hints: [
          "Look for '<loc>' + url + '</loc>'.",
          "Use indexOf.",
          "Return a boolean."
        ],
        solution: "function hasUrl(xml, url) {\n  return xml.indexOf('<loc>' + url + '</loc>') !== -1;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write fullSitemap(urls) that returns { xml: the sitemap for all urls, count: how many urls are listed }.",
      starter: S9_SEO_HELPERS + "function fullSitemap(urls) {\n  // build the sitemap and count the entries\n  return null;\n}",
      test: "function t() {\n  var urls = ['https://greenleaf.vercel.app/', 'https://greenleaf.vercel.app/menu', 'https://greenleaf.vercel.app/about'];\n  var s = fullSitemap(urls);\n  if (!s || s.xml.indexOf('<loc>https://greenleaf.vercel.app/menu</loc>') === -1) return { passed: false, message: 'Should contain every URL.' };\n  if (s.count !== 3) return { passed: false, message: 'count should equal the number of URLs.' };\n  return { passed: true, message: 'Your sitemap is ready at /sitemap.xml!' };\n}",
      hints: [
        "sitemapXml(urls) for the xml.",
        "count = urls.length.",
        "Return an object."
      ],
      solution: S9_SEO_HELPERS + "function fullSitemap(urls) {\n  return { xml: sitemapXml(urls), count: urls.length };\n}",
      unlock: "SEO Foundations"
    },
    unlock: "SEO Foundations"
  },

  {
    id: "web-seo-robots",
    num: 78,
    title: "robots.txt",
    tagline: "Guide the crawlers that visit your site.",
    skill: "Web",
    xp: 180,
    type: "js",
    icon: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="4"/><path d="M8 21l4-4 4 4"/>',
    meta: { kind: "normal", series: "w9-seo", order: 6 },
    briefing: {
      objective: "Create a valid robots.txt for your deployed site.",
      body: "Crawlers are the programs search engines send to read your site. robots.txt tells them where they may and may not go. It lives at yoursite.com/robots.txt. Important: robots.txt is a request, not a security mechanism - anyone can still visit the blocked pages."
    },
    challenges: [
      {
        id: "ch1",
        title: "Allow everything",
        instructions: "Write robotsTxt(site) that returns 'User-agent: *\\nAllow: /\\nSitemap: ' + site + '/sitemap.xml'.",
        learning: "User-agent: * means all crawlers. Allow: / lets them crawl the whole site. The Sitemap line points them at your map.",
        example: "function robotsTxt(site) {\n  return 'User-agent: *\\nAllow: /\\nSitemap: ' + site + '/sitemap.xml';\n}",
        starter: "function robotsTxt(site) {\n  // user-agent, allow, sitemap\n  return '';\n}",
        test: "function t() {\n  var r = robotsTxt('https://greenleaf.vercel.app');\n  if (r.indexOf('User-agent:') === -1) return { passed: false, message: 'Should declare a user-agent.' };\n  if (r.indexOf('Allow: /') === -1) return { passed: false, message: 'Should allow crawling.' };\n  if (r.indexOf('Sitemap: https://greenleaf.vercel.app/sitemap.xml') === -1) return { passed: false, message: 'Should point to the sitemap.' };\n  return { passed: true, message: 'Crawlers now know the rules!' };\n}",
        hints: [
          "Three lines: User-agent, Allow, Sitemap.",
          "Newlines are \\n.",
          "Append '/sitemap.xml' to the site."
        ],
        solution: "function robotsTxt(site) {\n  return 'User-agent: *\\nAllow: /\\nSitemap: ' + site + '/sitemap.xml';\n}"
      },
      {
        id: "ch2",
        title: "Is it valid?",
        instructions: "Write validRobots(text) that returns true when the text has a User-agent line, an Allow or Disallow rule, and a Sitemap line.",
        learning: "A valid robots.txt needs those three parts. And remember: it is a polite request to crawlers, not a way to hide content from people.",
        example: "function validRobots(text) {\n  return /User-agent\\s*:/.test(text) && (/Allow\\s*:/.test(text) || /Disallow\\s*:/.test(text)) && /Sitemap\\s*:/.test(text);\n}",
        starter: "function validRobots(text) {\n  // user-agent + rule + sitemap?\n  return false;\n}",
        test: "function t() {\n  if (!validRobots('User-agent: *\\nAllow: /\\nSitemap: https://x.vercel.app/sitemap.xml')) return { passed: false, message: 'A complete file should be valid.' };\n  if (validRobots('hello world')) return { passed: false, message: 'Garbage is not a robots.txt.' };\n  if (validRobots('User-agent: *\\nAllow: /')) return { passed: false, message: 'Missing Sitemap line -> invalid.' };\n  return { passed: true, message: 'The crawlers will follow these rules.' };\n}",
        hints: [
          "Check User-agent, a rule, and Sitemap.",
          "Use regex with the \\s*: pattern.",
          "Return a boolean."
        ],
        solution: "function validRobots(text) {\n  return /User-agent\\s*:/.test(text) && (/Allow\\s*:/.test(text) || /Disallow\\s*:/.test(text)) && /Sitemap\\s*:/.test(text);\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write crawlerRules(site) that returns robots.txt allowing everything, blocking the /private/ folder, and pointing to the sitemap.",
      starter: S9_SEO_HELPERS + "function crawlerRules(site) {\n  // allow all, block /private/, point to the sitemap\n  return '';\n}",
      test: "function t() {\n  var r = crawlerRules('https://greenleaf.vercel.app');\n  if (r.indexOf('User-agent: *') === -1) return { passed: false, message: 'Should target all crawlers.' };\n  if (r.indexOf('Allow: /') === -1) return { passed: false, message: 'Should allow the public site.' };\n  if (r.indexOf('Disallow: /private/') === -1) return { passed: false, message: 'Should block /private/.' };\n  if (r.indexOf('Sitemap: https://greenleaf.vercel.app/sitemap.xml') === -1) return { passed: false, message: 'Should point to the sitemap.' };\n  return { passed: true, message: 'robots.txt is live. Remember: it is a request, not a lock!' };\n}",
      hints: [
        "User-agent: * on its own line.",
        "Allow: / then Disallow: /private/.",
        "Sitemap line last."
      ],
      solution: S9_SEO_HELPERS + "function crawlerRules(site) {\n  return 'User-agent: *\\nAllow: /\\nDisallow: /private/\\nSitemap: ' + site + '/sitemap.xml';\n}",
      unlock: "SEO Foundations"
    },
    unlock: "SEO Foundations"
  },

  {
    id: "web-seo-console",
    num: 79,
    title: "Google Search Console",
    tagline: "Claim your site so Google will talk to you about it.",
    skill: "Web",
    xp: 190,
    type: "js",
    icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8" cy="8" r="2"/><path d="M3 18l6-6 4 4 8-8"/><path d="M19 13v8M17 18h4"/>',
    meta: { kind: "normal", series: "w9-seo", order: 7 },
    briefing: {
      objective: "Add your deployed site to Google Search Console in a real browser.",
      body: "Search Console is Google's dashboard for your site: it shows which queries bring visitors, whether your pages are indexed, and whether your sitemap is valid. This is browser-first: open search.google.com/search-console in a real browser, add your property, choose a verification method, and verify. SkillRun explains each screen - it will never pretend to do it for you."
    },
    challenges: [
      {
        id: "ch1",
        title: "Add your property",
        instructions: "Write claimProperty(url) that returns { property: url, added: true } after you add it in Search Console.",
        learning: "In Search Console you click 'Add property' and enter your site's URL. That registers your site so Google can report on it.",
        example: "function claimProperty(url) {\n  return { property: url, added: true };\n}",
        starter: "function claimProperty(url) {\n  // record the property you added in Search Console\n  return null;\n}",
        test: "function t() {\n  var p = claimProperty('https://greenleaf.vercel.app');\n  if (!p || p.property !== 'https://greenleaf.vercel.app') return { passed: false, message: 'Should record the property URL.' };\n  if (p.added !== true) return { passed: false, message: 'Should mark it as added.' };\n  return { passed: true, message: 'Property added in Search Console!' };\n}",
        hints: [
          "Return an object with the URL.",
          "added: true.",
          "You do the real click at search.google.com/search-console."
        ],
        solution: "function claimProperty(url) {\n  return { property: url, added: true };\n}"
      },
      {
        id: "ch2",
        title: "Verify ownership",
        instructions: "Write verifyProperty(method) that returns { method, verified: true } only for a real method: html-file, html-tag, dns, google-analytics or tag-manager.",
        learning: "Verification proves you own the site. Real methods: upload an HTML file, add an HTML tag, add a DNS record, use Analytics or Tag Manager.",
        example: "function verifyProperty(method) {\n  var ok = ['html-file', 'html-tag', 'dns', 'google-analytics', 'tag-manager'];\n  return { method: method, verified: ok.indexOf(method) !== -1 };\n}",
        starter: "function verifyProperty(method) {\n  // is this a real verification method?\n  return null;\n}",
        test: "function t() {\n  if (!verifyProperty('dns').verified) return { passed: false, message: 'dns is a real verification method.' };\n  if (verifyProperty('telepathy').verified) return { passed: false, message: 'That is not a real method.' };\n  return { passed: true, message: 'Ownership verified!' };\n}",
        hints: [
          "Whitelist the five real methods.",
          "Compare method against the list.",
          "Return { method, verified }."
        ],
        solution: "function verifyProperty(method) {\n  var ok = ['html-file', 'html-tag', 'dns', 'google-analytics', 'tag-manager'];\n  return { method: method, verified: ok.indexOf(method) !== -1 };\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write onboard(url, method) that returns { property: url, method, verified: true } using a real verification method.",
      starter: S9_SEO_HELPERS + "function onboard(url, method) {\n  // add the property and verify with a real method\n  return null;\n}",
      test: "function t() {\n  var r = onboard('https://greenleaf.vercel.app', 'html-tag');\n  if (!r || r.property !== 'https://greenleaf.vercel.app') return { passed: false, message: 'Should record the property.' };\n  if (r.verified !== true || r.method !== 'html-tag') return { passed: false, message: 'Should verify with a real method.' };\n  var bad = onboard('https://greenleaf.vercel.app', 'magic');\n  if (bad.verified === true) return { passed: false, message: 'magic is not a real method.' };\n  return { passed: true, message: 'Your site is claimed. Now submit your sitemap!' };\n}",
      hints: [
        "Reuse the method whitelist.",
        "verified should only be true for real methods.",
        "Return the property too."
      ],
      solution: S9_SEO_HELPERS + "function onboard(url, method) {\n  var ok = ['html-file', 'html-tag', 'dns', 'google-analytics', 'tag-manager'];\n  return { property: url, method: method, verified: ok.indexOf(method) !== -1 };\n}",
      unlock: "SEO Foundations"
    },
    unlock: "SEO Foundations"
  },

  {
    id: "web-seo-submit",
    num: 80,
    title: "Submit Sitemap",
    tagline: "Tell Google where your sitemap lives.",
    skill: "Web",
    xp: 190,
    type: "js",
    icon: '<path d="M4 5h16M4 5v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5M9 5V3h6v2"/>',
    meta: { kind: "normal", series: "w9-seo", order: 8 },
    briefing: {
      objective: "Submit /sitemap.xml in Search Console and understand what happens next.",
      body: "In Search Console, go to Sitemaps, enter /sitemap.xml and submit it. Then look at the status it reports. Submitting does NOT mean Google indexes your pages immediately - indexing takes time, and Search Console will tell you the real status."
    },
    challenges: [
      {
        id: "ch1",
        title: "Submit it",
        instructions: "Write submitSitemap(property, xml) that returns { property, submitted: true, status: 'Pending' }.",
        learning: "You submit the sitemap path in Search Console. Until Google has crawled and processed it, the status is Pending.",
        example: "function submitSitemap(property, xml) {\n  return { property: property, submitted: true, status: 'Pending' };\n}",
        starter: "function submitSitemap(property, xml) {\n  // record the submission with a Pending status\n  return null;\n}",
        test: "function t() {\n  var r = submitSitemap('https://greenleaf.vercel.app', '<urlset></urlset>');\n  if (!r || r.submitted !== true) return { passed: false, message: 'Should mark it submitted.' };\n  if (r.status !== 'Pending') return { passed: false, message: 'New submissions start as Pending.' };\n  return { passed: true, message: 'Sitemap submitted! It will not be indexed instantly.' };\n}",
        hints: [
          "Return the property and xml.",
          "submitted: true.",
          "status: 'Pending'."
        ],
        solution: "function submitSitemap(property, xml) {\n  return { property: property, submitted: true, status: 'Pending' };\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write trackSubmission(property, xml) that returns { property, submitted: true, status: 'Pending', note } where note explains that submitted is not the same as indexed.",
      starter: S9_SEO_HELPERS + "function trackSubmission(property, xml) {\n  // record the submission and the honest note\n  return null;\n}",
      test: "function t() {\n  var r = trackSubmission('https://greenleaf.vercel.app', '<urlset></urlset>');\n  if (!r || r.submitted !== true || r.status !== 'Pending') return { passed: false, message: 'Should record a Pending submission.' };\n  if (!r.note || r.note.length < 10) return { passed: false, message: 'The note should explain what happens next.' };\n  return { passed: true, message: 'Submitted! Check the Search Console status in a few days.' };\n}",
      hints: [
        "status: 'Pending'.",
        "note should mention waiting / not instant.",
        "Keep the property."
      ],
      solution: S9_SEO_HELPERS + "function trackSubmission(property, xml) {\n  return { property: property, submitted: true, status: 'Pending', note: 'Submitted does not mean indexed. Google has to crawl and process the sitemap first.' };\n}",
      unlock: "SEO Foundations"
    },
    unlock: "SEO Foundations"
  },

  {
    id: "web-seo-boss",
    num: 81,
    title: "Get Found",
    tagline: "The full SEO checklist on your live site.",
    skill: "Web",
    xp: 280,
    type: "js",
    icon: '<path d="M11 4H4v16h16v-7M15 4h5v5M10 14l7-7"/>',
    meta: { kind: "boss", series: "w9-seo", order: 9, focusLock: true, hintCap: 1 },
    briefing: {
      objective: "Complete every item on the Get Found checklist on your actual deployed project.",
      body: "The boss of the SEO series. Work through the checklist on your real deployed site: a meaningful title, a real meta description, semantic HTML, image alt text, a sitemap, a robots.txt, Search Console verified, and your sitemap submitted. SkillRun checks what it can check and asks you to verify the rest for real."
    },
    challenges: [
      {
        id: "ch1",
        title: "Know the checklist",
        instructions: "Write seoSteps() that returns the eight Get Found steps: Title, Meta description, Semantic HTML, Image alt text, Sitemap, robots.txt, Search Console, Sitemap submitted.",
        learning: "SEO is a checklist, not a single tag. Every item matters for Google to understand and index your site.",
        example: "function seoSteps() {\n  return ['Title', 'Meta description', 'Semantic HTML', 'Image alt text', 'Sitemap', 'robots.txt', 'Search Console', 'Sitemap submitted'];\n}",
        starter: "function seoSteps() {\n  // return the eight steps\n  return [];\n}",
        test: "function t() {\n  var want = ['Title', 'Meta description', 'Semantic HTML', 'Image alt text', 'Sitemap', 'robots.txt', 'Search Console', 'Sitemap submitted'];\n  var s = seoSteps();\n  for (var i = 0; i < want.length; i++) { if (s.indexOf(want[i]) === -1) return { passed: false, message: 'Missing step: ' + want[i] }; }\n  return { passed: true, message: 'Eight steps, zero shortcuts.' };\n}",
        hints: [
          "There are exactly eight steps.",
          "Search Console and sitemap come last.",
          "Return them as an array of strings."
        ],
        solution: "function seoSteps() {\n  return ['Title', 'Meta description', 'Semantic HTML', 'Image alt text', 'Sitemap', 'robots.txt', 'Search Console', 'Sitemap submitted'];\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write seoChecklist(details) where details is an object of booleans (title, meta, semantic, alt, sitemap, robots, console, submitted). Return { complete, missing } - complete is true only when every item is true, and missing lists the ones that are not.",
      starter: S9_SEO_HELPERS + "function seoChecklist(details) {\n  // report which items are done and which are missing\n  return null;\n}",
      test: "function t() {\n  var done = seoChecklist({ title: true, meta: true, semantic: true, alt: true, sitemap: true, robots: true, console: true, submitted: true });\n  if (!done || done.complete !== true || (done.missing && done.missing.length !== 0)) return { passed: false, message: 'All eight done should mean complete.' };\n  var partial = seoChecklist({ title: true, meta: true, semantic: false, alt: true, sitemap: true, robots: true, console: false, submitted: false });\n  if (partial.complete === true) return { passed: false, message: 'Missing items should fail completion.' };\n  if (partial.missing.indexOf('Semantic HTML') === -1) return { passed: false, message: 'Should name the missing items.' };\n  return { passed: true, message: 'BOSS DOWN - your site is built to be found!' };\n}",
      hints: [
        "Map each boolean to its checklist name.",
        "complete = no missing items.",
        "missing = the names where the value is false."
      ],
      solution: S9_SEO_HELPERS + "function seoChecklist(d) {\n  var items = [['Title', d.title], ['Meta description', d.meta], ['Semantic HTML', d.semantic], ['Image alt text', d.alt], ['Sitemap', d.sitemap], ['robots.txt', d.robots], ['Search Console', d.console], ['Sitemap submitted', d.submitted]];\n  var missing = [];\n  for (var i = 0; i < items.length; i++) { if (!items[i][1]) { missing.push(items[i][0]); } }\n  return { complete: missing.length === 0, missing: missing };\n}",
      unlock: "SEO Foundations"
    },
    unlock: "SEO Foundations"
  }
]);

/* ============================================================
   Series 10 - Understand Your Visitors (w10-analytics)
   Google Analytics: visitors, sessions, pages, events.
   Browser-first for the real Google steps; SkillRun teaches,
   checks what is technically checkable, and asks the learner
   to verify external actions (e.g. what does real-time show?).
   Builds are self-contained (prepend helpers).
   ============================================================ */

var S10_ANALYTICS_HELPERS = [
  "function gtagScript(id) { return '<script async src=\"https://www.googletagmanager.com/gtag/js?id=' + id + '\"></script>\\n<script>\\n  window.dataLayer = window.dataLayer || [];\\n  function gtag(){dataLayer.push(arguments);}\\n  gtag(\"js\", new Date());\\n  gtag(\"config\", \"' + id + '\");\\n</script>'; }",
  "function addTag(html, id) { return html.replace('</head>', gtagScript(id) + '\\n</head>'); }",
  "function hasTag(html, id) { return html.indexOf('googletagmanager.com/gtag/js?id=' + id) !== -1 && html.indexOf('gtag(\"config\", \"' + id + '\")') !== -1; }",
  "function validGid(id) { return /^G-[A-Z0-9]{6,10}$/.test(id || ''); }",
  "function countGtag(html) { return (html.match(/googletagmanager\\.com\\/gtag\\/js/g) || []).length; }"
].join('\n') + '\n';

registerMissions([
  {
    id: "web-analytics-why",
    num: 82,
    title: "Why Analytics?",
    tagline: "Traffic alone cannot tell you who is winning.",
    skill: "Web",
    xp: 170,
    type: "js",
    icon: '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 6-6"/>',
    meta: { kind: "normal", series: "w10-analytics", order: 1 },
    briefing: {
      objective: "Learn why raw traffic numbers are not enough to judge a website.",
      body: "Website A gets 1,000 visitors. Website B gets 100. Which is better? You don't know yet. Ten thousand visitors who bounce in a second tell you less than fifty who fill in your contact form. Analytics is about quality - conversions, engagement, intent - not just the visitor count."
    },
    challenges: [
      {
        id: "ch1",
        title: "The honest answer",
        instructions: "Write visitorsVerdict(a, b) that returns 'unknown' - you cannot judge two sites on visitors alone.",
        learning: "Visitors alone cannot tell you which site is better. You need engagement, conversions, and intent. The honest answer is \"I don't know yet.\"",
        example: "function visitorsVerdict(a, b) {\n  return 'unknown';\n}",
        starter: "function visitorsVerdict(a, b) {\n  // what can you honestly conclude from visitor counts alone?\n  return '';\n}",
        test: "function t() {\n  var v = visitorsVerdict({ visitors: 1000 }, { visitors: 100 });\n  if (v !== 'unknown') return { passed: false, message: 'You cannot judge sites on visitors alone.' };\n  return { passed: true, message: 'Right - traffic alone is not enough!' };\n}",
        hints: [
          "No conversion data, no verdict.",
          "Return the string 'unknown'.",
          "One line."
        ],
        solution: "function visitorsVerdict(a, b) {\n  return 'unknown';\n}"
      },
      {
        id: "ch2",
        title: "Conversions win",
        instructions: "Write bestSite(sites) that returns the site with the highest conversions, regardless of visitor count.",
        learning: "A site with 100 visitors and 50 conversions beats a site with 1,000 visitors and 5. Quality of traffic beats quantity.",
        example: "function bestSite(sites) {\n  var best = null;\n  for (var i = 0; i < sites.length; i++) { if (!best || sites[i].conversions > best.conversions) { best = sites[i]; } }\n  return best;\n}",
        starter: "function bestSite(sites) {\n  // the site with the most conversions wins\n  return null;\n}",
        test: "function t() {\n  var best = bestSite([{ name: 'A', visitors: 1000, conversions: 5 }, { name: 'B', visitors: 100, conversions: 50 }]);\n  if (!best || best.name !== 'B') return { passed: false, message: 'Higher conversions should win, even with fewer visitors.' };\n  return { passed: true, message: 'B wins on conversions!' };\n}",
        hints: [
          "Compare conversions, not visitors.",
          "Loop through the array.",
          "Return the site object."
        ],
        solution: "function bestSite(sites) {\n  var best = null;\n  for (var i = 0; i < sites.length; i++) { if (!best || sites[i].conversions > best.conversions) { best = sites[i]; } }\n  return best;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write compareSites(sites) that returns { best: the site with the most conversions, reason: a short explanation }.",
      starter: S10_ANALYTICS_HELPERS + "function compareSites(sites) {\n  // find the best site and say why\n  return null;\n}",
      test: "function t() {\n  var r = compareSites([{ name: 'A', visitors: 900, conversions: 9 }, { name: 'B', visitors: 120, conversions: 60 }]);\n  if (!r || r.best.name !== 'B') return { passed: false, message: 'B converts better and should win.' };\n  if (!r.reason || r.reason.length < 10) return { passed: false, message: 'Give a reason, not just an answer.' };\n  return { passed: true, message: 'Now you know why analytics matters!' };\n}",
      hints: [
        "Loop for the highest conversions.",
        "reason should mention conversions.",
        "Return { best, reason }."
      ],
      solution: S10_ANALYTICS_HELPERS + "function compareSites(sites) {\n  var best = sites[0];\n  for (var i = 1; i < sites.length; i++) { if (sites[i].conversions > best.conversions) { best = sites[i]; } }\n  return { best: best, reason: 'The best site has the most conversions, not the most visitors.' };\n}",
      unlock: "Web Analytics"
    },
    unlock: "Web Analytics"
  },

  {
    id: "web-analytics-setup",
    num: 83,
    title: "Google Analytics",
    tagline: "Create your Analytics property.",
    skill: "Web",
    xp: 180,
    type: "js",
    icon: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M3 9h18M9 16v5M15 16v5"/>',
    meta: { kind: "normal", series: "w10-analytics", order: 2 },
    briefing: {
      objective: "Create a Google Analytics property for your deployed site.",
      body: "Google Analytics sits between your website and you: your site feeds it events, users and page views, and it shows you what people actually do. Browser-first: go to analytics.google.com, create a property for your site, and Analytics gives you a measurement ID that starts with G-. SkillRun checks the structure of what you record - it never touches your private Google account."
    },
    challenges: [
      {
        id: "ch1",
        title: "Create the property",
        instructions: "Write createProperty(name, id) that returns { name, id, created: true }.",
        learning: "A property in Analytics represents one website. After creating it you get a measurement ID like G-ABC123. You will enter your real ID.",
        example: "function createProperty(name, id) {\n  return { name: name, id: id, created: true };\n}",
        starter: "function createProperty(name, id) {\n  // record the property and its measurement ID\n  return null;\n}",
        test: "function t() {\n  var p = createProperty('Green Leaf Cafe', 'G-ABC123XYZ');\n  if (!p || p.name !== 'Green Leaf Cafe') return { passed: false, message: 'Should keep the property name.' };\n  if (!/^G-[A-Z0-9]{6,10}$/.test(p.id)) return { passed: false, message: 'A measurement ID looks like G-ABC123XYZ.' };\n  if (p.created !== true) return { passed: false, message: 'Should be created.' };\n  return { passed: true, message: 'Your Analytics property is ready!' };\n}",
        hints: [
          "Return the three fields.",
          "id must match the G- format.",
          "created: true."
        ],
        solution: "function createProperty(name, id) {\n  return { name: name, id: id, created: true };\n}"
      },
      {
        id: "ch2",
        title: "Is it ready?",
        instructions: "Write propertyReady(prop) that returns true when prop.created is true and prop.id looks like a G- measurement ID.",
        learning: "A property only works once it has a real measurement ID and is marked created.",
        example: "function propertyReady(prop) {\n  return prop.created === true && /^G-[A-Z0-9]{6,10}$/.test(prop.id || '');\n}",
        starter: "function propertyReady(prop) {\n  // created with a valid G- ID?\n  return false;\n}",
        test: "function t() {\n  if (!propertyReady({ created: true, id: 'G-ABC123' })) return { passed: false, message: 'A created property with a G- ID is ready.' };\n  if (propertyReady({ created: true, id: 'UA-123' })) return { passed: false, message: 'Old UA- IDs are not GA4 measurement IDs.' };\n  if (propertyReady({ created: false, id: 'G-ABC123' })) return { passed: false, message: 'Not created yet.' };\n  return { passed: true, message: 'Ready to connect your site!' };\n}",
        hints: [
          "Check the created flag.",
          "Check the G- format with a regex.",
          "Return a boolean."
        ],
        solution: "function propertyReady(prop) {\n  return prop.created === true && /^G-[A-Z0-9]{6,10}$/.test(prop.id || '');\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write setupAnalytics(name, id) that returns { name, id, created: true, ready: true } for a valid G- ID.",
      starter: S10_ANALYTICS_HELPERS + "function setupAnalytics(name, id) {\n  // create the property and report if it is ready\n  return null;\n}",
      test: "function t() {\n  var r = setupAnalytics('Green Leaf Cafe', 'G-ABC123XYZ');\n  if (!r || r.created !== true) return { passed: false, message: 'Should be created.' };\n  if (r.ready !== true) return { passed: false, message: 'A valid G- ID should be ready.' };\n  var bad = setupAnalytics('Green Leaf Cafe', 'UA-1');\n  if (bad.ready === true) return { passed: false, message: 'An invalid ID should not be ready.' };\n  return { passed: true, message: 'Property ready - now connect your website!' };\n}",
      hints: [
        "validGid(id) checks the format.",
        "ready = created and valid id.",
        "Return all four fields."
      ],
      solution: S10_ANALYTICS_HELPERS + "function setupAnalytics(name, id) {\n  return { name: name, id: id, created: true, ready: validGid(id) };\n}",
      unlock: "Web Analytics"
    },
    unlock: "Web Analytics"
  },

  {
    id: "web-analytics-connect",
    num: 84,
    title: "Connect the Website",
    tagline: "Add the measurement code to your site.",
    skill: "Web",
    xp: 180,
    type: "js",
    icon: '<path d="M12 3v18M3 12h18"/><circle cx="12" cy="12" r="9"/>',
    meta: { kind: "normal", series: "w10-analytics", order: 3 },
    briefing: {
      objective: "Add your measurement code to the <head> of your deployed site.",
      body: "Analytics gives you a small script to paste into every page's <head>. It loads from googletagmanager.com and configures your measurement ID. SkillRun checks the expected structure - the script present, the right ID, and no duplicates. It cannot, and will not, log into your Google account for you."
    },
    challenges: [
      {
        id: "ch1",
        title: "Add the tag",
        instructions: "Write addTag(html, id) that inserts the gtag script (loading googletagmanager.com/gtag/js?id=ID and calling gtag('config', 'ID')) right before </head>.",
        learning: "The tag has two parts: the loader script and the config call. Both must use your real measurement ID.",
        example: "function addTag(html, id) {\n  var s = '<script async src=\"https://www.googletagmanager.com/gtag/js?id=' + id + '\"></script>\\n<script>\\n  window.dataLayer = window.dataLayer || [];\\n  function gtag(){dataLayer.push(arguments);}\\n  gtag(\"js\", new Date());\\n  gtag(\"config\", \"' + id + '\");\\n</script>';\n  return html.replace('</head>', s + '\\n</head>');\n}",
        starter: "function addTag(html, id) {\n  // insert the gtag script before </head>\n  return html;\n}",
        test: "function t() {\n  var out = addTag('<html><head></head></html>', 'G-ABC123');\n  if (out.indexOf('googletagmanager.com/gtag/js?id=G-ABC123') === -1) return { passed: false, message: 'Should load the gtag script with your ID.' };\n  if (out.indexOf('gtag(\"config\", \"G-ABC123\")') === -1) return { passed: false, message: 'Should call config with the ID.' };\n  if (out.indexOf('</head>') === -1) return { passed: false, message: 'Should keep the closing head tag.' };\n  return { passed: true, message: 'Measurement tag installed!' };\n}",
        hints: [
          "Build the loader script line.",
          "Add the dataLayer config block.",
          "Insert everything before </head>."
        ],
        solution: "function addTag(html, id) {\n  var s = '<script async src=\"https://www.googletagmanager.com/gtag/js?id=' + id + '\"></script>\\n<script>\\n  window.dataLayer = window.dataLayer || [];\\n  function gtag(){dataLayer.push(arguments);}\\n  gtag(\"js\", new Date());\\n  gtag(\"config\", \"' + id + '\");\\n</script>';\n  return html.replace('</head>', s + '\\n</head>');\n}"
      },
      {
        id: "ch2",
        title: "Is it connected?",
        instructions: "Write hasTag(html, id) that returns true when the html contains the loader AND the config call for exactly that id.",
        learning: "A common mistake is pasting the tag but leaving the default or a wrong ID. The tag must match the ID you created.",
        example: "function hasTag(html, id) {\n  return html.indexOf('googletagmanager.com/gtag/js?id=' + id) !== -1 && html.indexOf('gtag(\"config\", \"' + id + '\")') !== -1;\n}",
        starter: "function hasTag(html, id) {\n  // loader + config for this exact id?\n  return false;\n}",
        test: "function t() {\n  var good = addTag('<html><head></head></html>', 'G-ABC123');\n  if (!hasTag(good, 'G-ABC123')) return { passed: false, message: 'Should detect the matching tag.' };\n  if (hasTag(good, 'G-OTHER9')) return { passed: false, message: 'A different ID should not count as connected.' };\n  return { passed: true, message: 'Your site and Analytics are talking!' };\n}",
        hints: [
          "Both the loader and the config matter.",
          "Match the exact ID.",
          "Return a boolean."
        ],
        solution: "function hasTag(html, id) {\n  return html.indexOf('googletagmanager.com/gtag/js?id=' + id) !== -1 && html.indexOf('gtag(\"config\", \"' + id + '\")') !== -1;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write connectAnalytics(html, id) that returns { html: the page with the tag added, connected: whether the tag for that id is present }.",
      starter: S10_ANALYTICS_HELPERS + "function connectAnalytics(html, id) {\n  // add the tag and confirm the connection\n  return null;\n}",
      test: "function t() {\n  var r = connectAnalytics('<html><head></head></html>', 'G-ABC123');\n  if (!r || r.connected !== true) return { passed: false, message: 'Should be connected after adding the tag.' };\n  if (r.html.indexOf('gtag/js?id=G-ABC123') === -1) return { passed: false, message: 'The tag should be in the returned html.' };\n  return { passed: true, message: 'Website connected to Analytics!' };\n}",
      hints: [
        "addTag(html, id) builds the page.",
        "connected = hasTag(out, id).",
        "Return both."
      ],
      solution: S10_ANALYTICS_HELPERS + "function connectAnalytics(html, id) {\n  var out = addTag(html, id);\n  return { html: out, connected: hasTag(out, id) };\n}",
      unlock: "Web Analytics"
    },
    unlock: "Web Analytics"
  },

  {
    id: "web-analytics-realtime",
    num: 85,
    title: "Real-Time Data",
    tagline: "Watch your own visit appear in the live report.",
    skill: "Web",
    xp: 180,
    type: "js",
    icon: '<path d="M12 8v4l2 2"/><circle cx="12" cy="12" r="9"/>',
    meta: { kind: "normal", series: "w10-analytics", order: 4 },
    briefing: {
      objective: "Open your deployed site, then watch the visit appear in Analytics Realtime.",
      body: "Browser-first and genuinely real: open your deployed website in one tab, then open Google Analytics → Reports → Realtime in another. Within seconds your own visit should appear as 1 active user. SkillRun asks you to confirm what you saw - that is the whole lesson."
    },
    challenges: [
      {
        id: "ch1",
        title: "Find Realtime",
        instructions: "Write openRealtime() that returns { opened: true, where: 'Google Analytics → Reports → Realtime' }.",
        learning: "Realtime shows active users right now. It is the fastest way to confirm your tag is really working.",
        example: "function openRealtime() {\n  return { opened: true, where: 'Google Analytics → Reports → Realtime' };\n}",
        starter: "function openRealtime() {\n  // record where the real-time report lives\n  return null;\n}",
        test: "function t() {\n  var r = openRealtime();\n  if (!r || r.opened !== true) return { passed: false, message: 'Should be opened.' };\n  if (r.where.toLowerCase().indexOf('realtime') === -1) return { passed: false, message: 'Where should mention Realtime.' };\n  return { passed: true, message: 'Open your live site, then open Realtime.' };\n}",
        hints: [
          "opened: true.",
          "where mentions Realtime.",
          "Return an object."
        ],
        solution: "function openRealtime() {\n  return { opened: true, where: 'Google Analytics → Reports → Realtime' };\n}"
      },
      {
        id: "ch2",
        title: "See yourself",
        instructions: "Write confirmVisit(url) that returns { url, seen: true, note } where note tells what you saw in Realtime.",
        learning: "Load your live site, then check Realtime: your own visit should show as an active user. If it does not, your tag is not firing.",
        example: "function confirmVisit(url) {\n  return { url: url, seen: true, note: 'I opened my live site and my visit appeared in Realtime within seconds.' };\n}",
        starter: "function confirmVisit(url) {\n  // report what you saw in Realtime\n  return null;\n}",
        test: "function t() {\n  var r = confirmVisit('https://greenleaf.vercel.app');\n  if (!r || r.url !== 'https://greenleaf.vercel.app') return { passed: false, message: 'Should record your site URL.' };\n  if (r.seen !== true) return { passed: false, message: 'You should have seen your visit.' };\n  if (!r.note || r.note.length < 10) return { passed: false, message: 'Describe what Realtime showed you.' };\n  return { passed: true, message: 'There you are - your tag is alive!' };\n}",
        hints: [
          "Record the URL.",
          "seen: true.",
          "Describe the real-time result honestly."
        ],
        solution: "function confirmVisit(url) {\n  return { url: url, seen: true, note: 'I opened my live site and my visit appeared in Realtime within seconds.' };\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write verifyRealtime(url) that returns { url, seen: true, activeUsers: 1, note }.",
      starter: S10_ANALYTICS_HELPERS + "function verifyRealtime(url) {\n  // report your real-time observation\n  return null;\n}",
      test: "function t() {\n  var r = verifyRealtime('https://greenleaf.vercel.app');\n  if (!r || r.seen !== true) return { passed: false, message: 'Should confirm the visit was seen.' };\n  if (!r.activeUsers || r.activeUsers < 1) return { passed: false, message: 'Your own visit counts as an active user.' };\n  if (!r.note || r.note.length < 10) return { passed: false, message: 'Give the note.' };\n  return { passed: true, message: 'Real-time verified. That is analytics you can feel.' };\n}",
      hints: [
        "seen: true, activeUsers: 1.",
        "note describes the Realtime view.",
        "Return the url too."
      ],
      solution: S10_ANALYTICS_HELPERS + "function verifyRealtime(url) {\n  return { url: url, seen: true, activeUsers: 1, note: 'One active user in Realtime - me, on my live site.' };\n}",
      unlock: "Web Analytics"
    },
    unlock: "Web Analytics"
  },

  {
    id: "web-analytics-events",
    num: 86,
    title: "Events",
    tagline: "Measure the moments that matter.",
    skill: "Web",
    xp: 180,
    type: "js",
    icon: '<path d="M8 2v4M16 2v4M4 6h16v16H4z"/><path d="M8 12h8M8 16h5"/>',
    meta: { kind: "normal", series: "w10-analytics", order: 5 },
    briefing: {
      objective: "Create a meaningful event for your site.",
      body: "Page views tell you someone arrived. Events tell you what they did: clicked a button, submitted a form, opened the menu. Two classic events are button_click and form_submit. Pick the interaction that matters most for YOUR site and define it as an event."
    },
    challenges: [
      {
        id: "ch1",
        title: "Is it meaningful?",
        instructions: "Write validEvent(evt) that returns true when evt.name and evt.category are both non-empty.",
        learning: "An event without a name tells you nothing. A meaningful event has a name (what happened) and a category (what kind of interaction).",
        example: "function validEvent(evt) {\n  return !!((evt.name || '').trim() && (evt.category || '').trim());\n}",
        starter: "function validEvent(evt) {\n  // name and category both present?\n  return false;\n}",
        test: "function t() {\n  if (validEvent({ name: '', category: 'engagement' })) return { passed: false, message: 'An empty name is meaningless.' };\n  if (!validEvent({ name: 'button_click', category: 'engagement' })) return { passed: false, message: 'button_click with a category is meaningful.' };\n  return { passed: true, message: 'That event is worth measuring!' };\n}",
        hints: [
          "Check name.",
          "Check category.",
          "Trim before checking."
        ],
        solution: "function validEvent(evt) {\n  return !!((evt.name || '').trim() && (evt.category || '').trim());\n}"
      },
      {
        id: "ch2",
        title: "Record it",
        instructions: "Write trackEvent(events, name, action) that pushes { name, action } onto events and returns events.",
        learning: "Every time the interaction happens, you record an event. Later the dashboard counts how often it fired.",
        example: "function trackEvent(events, name, action) {\n  events.push({ name: name, action: action });\n  return events;\n}",
        starter: "function trackEvent(events, name, action) {\n  // record the event\n  return events;\n}",
        test: "function t() {\n  var evts = [];\n  trackEvent(evts, 'form_submit', 'submit');\n  if (evts.length !== 1 || evts[0].name !== 'form_submit' || evts[0].action !== 'submit') return { passed: false, message: 'Should record the event with its action.' };\n  return { passed: true, message: 'Event recorded!' };\n}",
        hints: [
          "push { name, action }.",
          "Return events.",
          "Three lines."
        ],
        solution: "function trackEvent(events, name, action) {\n  events.push({ name: name, action: action });\n  return events;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write eventPlan(site) that returns { event, category, location } - a meaningful event for your site (for example form_submit on the Contact page).",
      starter: S10_ANALYTICS_HELPERS + "function eventPlan(site) {\n  // the interaction that matters most for your site\n  return null;\n}",
      test: "function t() {\n  var p = eventPlan('https://greenleaf.vercel.app');\n  if (!p || !(p.event || '').trim()) return { passed: false, message: 'Give the event a name.' };\n  if (!(p.category || '').trim()) return { passed: false, message: 'Give the event a category.' };\n  if (!(p.location || '').trim()) return { passed: false, message: 'Where does this event happen on the site?' };\n  return { passed: true, message: 'You know exactly what to measure!' };\n}",
      hints: [
        "event: what happened.",
        "category: the kind of interaction.",
        "location: where on the site."
      ],
      solution: S10_ANALYTICS_HELPERS + "function eventPlan(site) {\n  return { event: 'form_submit', category: 'form', location: 'Contact page' };\n}",
      unlock: "Web Analytics"
    },
    unlock: "Web Analytics"
  },

  {
    id: "web-analytics-dashboard",
    num: 87,
    title: "Understand the Dashboard",
    tagline: "Read analytics like a pro, not like a robot.",
    skill: "Web",
    xp: 200,
    type: "js",
    icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 12h18M12 3v18M3 7h4M3 17h4M17 7h4M17 17h4"/>',
    meta: { kind: "normal", series: "w10-analytics", order: 6 },
    briefing: {
      objective: "Answer real questions from a simulated analytics dashboard.",
      body: "Here is a dashboard full of numbers. Your job: which page gets the most views? Which event happened most? Where are users dropping off? Answering these questions - not pasting scripts - is the actual skill of analytics."
    },
    challenges: [
      {
        id: "ch1",
        title: "Most viewed page",
        instructions: "Write topPage(data) that returns the page key with the highest views.",
        learning: "Your most viewed page is where the attention already is. It is the first place to look when something matters.",
        example: "function topPage(data) {\n  var best = -1, name = '';\n  for (var k in data.pages) { if (data.pages[k].views > best) { best = data.pages[k].views; name = k; } }\n  return name;\n}",
        starter: "function topPage(data) {\n  // the page with the most views\n  return '';\n}",
        test: "function t() {\n  var top = topPage({ pages: { '/': { views: 120 }, '/menu': { views: 80 }, '/contact': { views: 30 } }, events: {} });\n  if (top !== '/') return { passed: false, message: 'The home page has the most views.' };\n  return { passed: true, message: 'You read the dashboard correctly!' };\n}",
        hints: [
          "Loop over data.pages.",
          "Track the highest views.",
          "Return the page key."
        ],
        solution: "function topPage(data) {\n  var best = -1, name = '';\n  for (var k in data.pages) { if (data.pages[k].views > best) { best = data.pages[k].views; name = k; } }\n  return name;\n}"
      },
      {
        id: "ch2",
        title: "Top event",
        instructions: "Write topEvent(data) that returns the event name with the highest count.",
        learning: "The most frequent event shows which interaction your visitors actually use.",
        example: "function topEvent(data) {\n  var best = -1, name = '';\n  for (var k in data.events) { if (data.events[k] > best) { best = data.events[k]; name = k; } }\n  return name;\n}",
        starter: "function topEvent(data) {\n  // the event that happened most\n  return '';\n}",
        test: "function t() {\n  var top = topEvent({ pages: {}, events: { 'button_click': 40, 'form_submit': 5 } });\n  if (top !== 'button_click') return { passed: false, message: 'button_click fired 40 times.' };\n  return { passed: true, message: 'You found the busy event!' };\n}",
        hints: [
          "Loop over data.events.",
          "Track the highest count.",
          "Return the event name."
        ],
        solution: "function topEvent(data) {\n  var best = -1, name = '';\n  for (var k in data.events) { if (data.events[k] > best) { best = data.events[k]; name = k; } }\n  return name;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write analyze(data) that returns { topPage, topEvent, dropoff } where dropoff is the page with the highest exits-per-view rate.",
      starter: S10_ANALYTICS_HELPERS + "function analyze(data) {\n  // topPage, topEvent, and where users leave\n  return null;\n}",
      test: "function t() {\n  var data = { pages: { '/': { views: 100, exits: 60 }, '/menu': { views: 80, exits: 20 }, '/contact': { views: 30, exits: 25 } }, events: { 'button_click': 40, 'form_submit': 5 } };\n  var r = analyze(data);\n  if (!r || r.topPage !== '/') return { passed: false, message: 'topPage should be the home page.' };\n  if (r.topEvent !== 'button_click') return { passed: false, message: 'topEvent should be button_click.' };\n  if (r.dropoff !== '/contact') return { passed: false, message: 'dropoff = highest exits per view: the contact page (25/30).' };\n  return { passed: true, message: 'You can read a dashboard and find the problem!' };\n}",
      hints: [
        "topPage and topEvent: highest counts.",
        "dropoff: max exits/views.",
        "Return all three."
      ],
      solution: S10_ANALYTICS_HELPERS + "function analyze(data) {\n  var topPage = '', topViews = -1, dropoff = '', dropRate = -1;\n  for (var k in data.pages) {\n    var p = data.pages[k];\n    if (p.views > topViews) { topViews = p.views; topPage = k; }\n    var rate = p.views ? p.exits / p.views : 0;\n    if (rate > dropRate) { dropRate = rate; dropoff = k; }\n  }\n  var topEvent = '', topEv = -1;\n  for (var e in data.events) { if (data.events[e] > topEv) { topEv = data.events[e]; topEvent = e; } }\n  return { topPage: topPage, topEvent: topEvent, dropoff: dropoff };\n}",
      unlock: "Web Analytics"
    },
    unlock: "Web Analytics"
  },

  {
    id: "web-analytics-debug",
    num: 88,
    title: "Analytics Debugging",
    tagline: "Find out why the numbers are wrong.",
    skill: "Web",
    xp: 200,
    type: "js",
    icon: '<path d="M12 3v6M12 9l8 3-8 3-8-3 8-3z"/><path d="M4 16l8 3 8-3"/>',
    meta: { kind: "normal", series: "w10-analytics", order: 7 },
    briefing: {
      objective: "Diagnose a broken Analytics setup.",
      body: "Analytics goes quiet and you have to find out why. The usual suspects: the wrong measurement ID, a duplicated tag firing twice, a missing script, or an event that never fires. Below are broken setups - identify the problem, then fix it."
    },
    challenges: [
      {
        id: "ch1",
        title: "Name the problem",
        instructions: "Write debugTag(html, expectedId) that returns an array of problems: 'missing script' if there is no gtag script, 'wrong measurement ID' if the script uses a different id, and 'duplicate tag' if the script appears more than once.",
        learning: "Debugging starts with naming the failure. Check presence first, then the ID, then duplicates.",
        example: "function debugTag(html, expectedId) {\n  var problems = [];\n  if (html.indexOf('googletagmanager.com/gtag/js') === -1) { problems.push('missing script'); }\n  var idMatch = /gtag\\/js\\?id=([^\"']+)/.exec(html);\n  if (idMatch && idMatch[1] !== expectedId) { problems.push('wrong measurement ID'); }\n  var count = (html.match(/googletagmanager\\.com\\/gtag\\/js/g) || []).length;\n  if (count > 1) { problems.push('duplicate tag'); }\n  return problems;\n}",
        starter: "function debugTag(html, expectedId) {\n  // find missing / wrong / duplicate tag problems\n  return [];\n}",
        test: "function t() {\n  var p1 = debugTag('<html><head></head></html>', 'G-ABC123');\n  if (p1.indexOf('missing script') === -1) return { passed: false, message: 'No script at all -> missing script.' };\n  var wrong = '<script async src=\"https://www.googletagmanager.com/gtag/js?id=G-WRONG\"></script>';\n  var p2 = debugTag(wrong, 'G-ABC123');\n  if (p2.indexOf('wrong measurement ID') === -1) return { passed: false, message: 'Different id -> wrong measurement ID.' };\n  var dup = '<script src=\"https://www.googletagmanager.com/gtag/js?id=G-ABC123\"></script><script src=\"https://www.googletagmanager.com/gtag/js?id=G-ABC123\"></script>';\n  var p3 = debugTag(dup, 'G-ABC123');\n  if (p3.indexOf('duplicate tag') === -1) return { passed: false, message: 'Two scripts -> duplicate tag.' };\n  return { passed: true, message: 'You can name the bug!' };\n}",
      hints: [
        "Check for the gtag loader string.",
        "Extract the id from the script.",
        "Count how many times the loader appears."
      ],
      solution: "function debugTag(html, expectedId) {\n  var problems = [];\n  if (html.indexOf('googletagmanager.com/gtag/js') === -1) { problems.push('missing script'); }\n  var idMatch = /gtag\\/js\\?id=([^\"']+)/.exec(html);\n  if (idMatch && idMatch[1] !== expectedId) { problems.push('wrong measurement ID'); }\n  var count = (html.match(/googletagmanager\\.com\\/gtag\\/js/g) || []).length;\n  if (count > 1) { problems.push('duplicate tag'); }\n  return problems;\n}"
      },
      {
        id: "ch2",
        title: "Fix the tag",
        instructions: "Write fixTag(html, expectedId) that removes every existing gtag script and inserts one clean tag with the expectedId before </head>.",
        learning: "The fix is simple: one script, one id, placed once in the head.",
        example: "function fixTag(html, expectedId) {\n  html = html.replace(/<script[^>]*googletagmanager\\.com[^>]*><\\/script>/g, '');\n  html = html.replace(/<script>[\\s\\S]*?dataLayer[\\s\\S]*?<\\/script>/g, '');\n  var s = '<script async src=\"https://www.googletagmanager.com/gtag/js?id=' + expectedId + '\"></script>\\n<script>\\n  window.dataLayer = window.dataLayer || [];\\n  function gtag(){dataLayer.push(arguments);}\\n  gtag(\"js\", new Date());\\n  gtag(\"config\", \"' + expectedId + '\");\\n</script>';\n  return html.replace('</head>', s + '\\n</head>');\n}",
        starter: "function fixTag(html, expectedId) {\n  // remove old tags, insert one clean tag\n  return html;\n}",
        test: "function t() {\n  var broken = '<html><head><script async src=\"https://www.googletagmanager.com/gtag/js?id=G-WRONG\"></script></head></html>';\n  var out = fixTag(broken, 'G-ABC123');\n  if (out.indexOf('gtag/js?id=G-ABC123') === -1) return { passed: false, message: 'Should insert the correct id.' };\n  if (out.indexOf('G-WRONG') !== -1) return { passed: false, message: 'Should remove the wrong id.' };\n  if ((out.match(/googletagmanager\\.com\\/gtag\\/js/g) || []).length !== 1) return { passed: false, message: 'Exactly one tag after the fix.' };\n  return { passed: true, message: 'One clean tag, right id - fixed!' };\n}",
        hints: [
          "Remove old loader scripts.",
          "Remove old dataLayer config blocks.",
          "Insert one fresh tag before </head>."
        ],
        solution: "function fixTag(html, expectedId) {\n  html = html.replace(/<script[^>]*googletagmanager\\.com[^>]*><\\/script>/g, '');\n  html = html.replace(/<script>[\\s\\S]*?dataLayer[\\s\\S]*?<\\/script>/g, '');\n  var s = '<script async src=\"https://www.googletagmanager.com/gtag/js?id=' + expectedId + '\"></script>\\n<script>\\n  window.dataLayer = window.dataLayer || [];\\n  function gtag(){dataLayer.push(arguments);}\\n  gtag(\"js\", new Date());\\n  gtag(\"config\", \"' + expectedId + '\");\\n</script>';\n  return html.replace('</head>', s + '\\n</head>');\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write debugAnalytics(html, expectedId) that returns { problems: the list of problems, fixed: the html with one clean correct tag }.",
      starter: S10_ANALYTICS_HELPERS + "function debugTag(html, expectedId) {\n  var problems = [];\n  if (html.indexOf('googletagmanager.com/gtag/js') === -1) { problems.push('missing script'); }\n  var idMatch = /gtag\\/js\\?id=([^\"']+)/.exec(html);\n  if (idMatch && idMatch[1] !== expectedId) { problems.push('wrong measurement ID'); }\n  var count = (html.match(/googletagmanager\\.com\\/gtag\\/js/g) || []).length;\n  if (count > 1) { problems.push('duplicate tag'); }\n  return problems;\n}\nfunction fixTag(html, expectedId) {\n  html = html.replace(/<script[^>]*googletagmanager\\.com[^>]*><\\/script>/g, '');\n  html = html.replace(/<script>[\\s\\S]*?dataLayer[\\s\\S]*?<\\/script>/g, '');\n  var s = '<script async src=\"https://www.googletagmanager.com/gtag/js?id=' + expectedId + '\"></script>\\n<script>\\n  window.dataLayer = window.dataLayer || [];\\n  function gtag(){dataLayer.push(arguments);}\\n  gtag(\"js\", new Date());\\n  gtag(\"config\", \"' + expectedId + '\");\\n</script>';\n  return html.replace('</head>', s + '\\n</head>');\n}\nfunction debugAnalytics(html, expectedId) {\n  // diagnose and fix in one go\n  return null;\n}",
      test: "function t() {\n  var broken = '<html><head><script async src=\"https://www.googletagmanager.com/gtag/js?id=G-WRONG\"></script><script async src=\"https://www.googletagmanager.com/gtag/js?id=G-ABC123\"></script></head></html>';\n  var r = debugAnalytics(broken, 'G-ABC123');\n  if (!r || r.problems.indexOf('duplicate tag') === -1) return { passed: false, message: 'Should flag the duplicate tag.' };\n  if (r.fixed.indexOf('gtag/js?id=G-WRONG') !== -1) return { passed: false, message: 'The wrong id should be gone.' };\n  if ((r.fixed.match(/googletagmanager\\.com\\/gtag\\/js/g) || []).length !== 1) return { passed: false, message: 'Exactly one clean tag in the fix.' };\n  return { passed: true, message: 'Diagnosed and fixed - that is the job!' };\n}",
      hints: [
        "debugTag(html, expectedId) for problems.",
        "fixTag(html, expectedId) for the fix.",
        "Return both."
      ],
      solution: S10_ANALYTICS_HELPERS + "function debugTag(html, expectedId) {\n  var problems = [];\n  if (html.indexOf('googletagmanager.com/gtag/js') === -1) { problems.push('missing script'); }\n  var idMatch = /gtag\\/js\\?id=([^\"']+)/.exec(html);\n  if (idMatch && idMatch[1] !== expectedId) { problems.push('wrong measurement ID'); }\n  var count = (html.match(/googletagmanager\\.com\\/gtag\\/js/g) || []).length;\n  if (count > 1) { problems.push('duplicate tag'); }\n  return problems;\n}\nfunction fixTag(html, expectedId) {\n  html = html.replace(/<script[^>]*googletagmanager\\.com[^>]*><\\/script>/g, '');\n  html = html.replace(/<script>[\\s\\S]*?dataLayer[\\s\\S]*?<\\/script>/g, '');\n  var s = '<script async src=\"https://www.googletagmanager.com/gtag/js?id=' + expectedId + '\"></script>\\n<script>\\n  window.dataLayer = window.dataLayer || [];\\n  function gtag(){dataLayer.push(arguments);}\\n  gtag(\"js\", new Date());\\n  gtag(\"config\", \"' + expectedId + '\");\\n</script>';\n  return html.replace('</head>', s + '\\n</head>');\n}\nfunction debugAnalytics(html, expectedId) {\n  return { problems: debugTag(html, expectedId), fixed: fixTag(html, expectedId) };\n}",
      unlock: "Web Analytics"
    },
    unlock: "Web Analytics"
  },

  {
    id: "web-analytics-boss",
    num: 89,
    title: "Measurable Website",
    tagline: "The analytics checklist on your real site.",
    skill: "Web",
    xp: 280,
    type: "js",
    icon: '<path d="M3 3v18h18"/><path d="M8 15l3-4 3 2 5-6"/><circle cx="18" cy="7" r="1.5"/>',
    meta: { kind: "boss", series: "w10-analytics", order: 8, focusLock: true, hintCap: 1 },
    briefing: {
      objective: "Make your website genuinely measurable, and prove you understand the numbers.",
      body: "The boss of the Analytics series. On your real deployed site: Analytics configured, website connected, a real-time visit verified, one meaningful event defined, and you able to explain the basic metrics. SkillRun checks the checklist; you do the real work and verify it."
    },
    challenges: [
      {
        id: "ch1",
        title: "Explain the metrics",
        instructions: "Write explainMetric(name) that returns a one-sentence explanation for visitors, sessions, bounce rate or top pages.",
        learning: "Analytics is only useful if you can say what the numbers mean. Be able to explain the basics out loud.",
        example: "function explainMetric(name) {\n  var m = { 'visitors': 'People who reached the site in a period.', 'sessions': 'A visit, a period of engagement that can contain multiple page views.', 'bounce rate': 'Percent of sessions that left after one page.', 'top pages': 'Your pages ranked by views.' };\n  return m[name] || 'A number that tells you what people do on your site.';\n}",
        starter: "function explainMetric(name) {\n  // explain one of the core metrics\n  return '';\n}",
        test: "function t() {\n  var e = explainMetric('bounce rate');\n  if (!e || e.length < 20) return { passed: false, message: 'Explain bounce rate in your own words.' };\n  return { passed: true, message: 'You can talk about the numbers!' };\n}",
        hints: [
          "bounce rate = left after one page.",
          "sessions = visits.",
          "Write a full sentence."
        ],
        solution: "function explainMetric(name) {\n  var m = { 'visitors': 'People who reached the site in a period.', 'sessions': 'A visit, a period of engagement that can contain multiple page views.', 'bounce rate': 'Percent of sessions that left after one page.', 'top pages': 'Your pages ranked by views.' };\n  return m[name] || 'A number that tells you what people do on your site.';\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write analyticsChecklist() that returns the five measurable-website items: Analytics configured, Website connected, Real-time visit verified, One meaningful event, Can explain basic metrics.",
      starter: S10_ANALYTICS_HELPERS + "function analyticsChecklist() {\n  // return the five items\n  return [];\n}",
      test: "function t() {\n  var want = ['Analytics configured', 'Website connected', 'Real-time visit verified', 'One meaningful event', 'Can explain basic metrics'];\n  var c = analyticsChecklist();\n  for (var i = 0; i < want.length; i++) { if (c.indexOf(want[i]) === -1) return { passed: false, message: 'Missing item: ' + want[i] }; }\n  return { passed: true, message: 'BOSS DOWN - your website is measurable!' };\n}",
      hints: [
        "Five items, all from this series.",
        "Real-time visit verified is the fun one.",
        "Return them as an array."
      ],
      solution: S10_ANALYTICS_HELPERS + "function analyticsChecklist() {\n  return ['Analytics configured', 'Website connected', 'Real-time visit verified', 'One meaningful event', 'Can explain basic metrics'];\n}",
      unlock: "Web Analytics"
    },
    unlock: "Web Analytics"
  }
]);

/* ============================================================
   Series 11 - Build & Launch (w11-launch) - the capstone.
   The learner plans, builds and ships a real client website
   (HTML/CSS/JS on GitHub, deployed via the browser-first Vercel
   flow, SEO + Search Console + Analytics). SkillRun guides,
   checks what is technically checkable, and asks the learner to
   report real, verified results from their own project.
   Builds are self-contained (prepend helpers).
   ============================================================ */

var S11_LAUNCH_HELPERS = [
  "function checkStructure(html) { var tags = ['<header', '<main', '<footer', '<nav', '<h1', '<a ', '<img']; for (var i = 0; i < tags.length; i++) { if (html.indexOf(tags[i]) === -1) { return false; } } return true; }",
  "function checkHeadings(html) { var h1 = (html.match(/<h1[\\s>]/g) || []).length; var h2 = (html.match(/<h2[\\s>]/g) || []).length; return h1 === 1 && h2 >= 1; }",
  "function countMedia(css) { return (css.match(/@media/g) || []).length; }"
].join('\n') + '\n';

registerMissions([
  {
    id: "web-launch-client",
    num: 90,
    title: "Choose Your Client",
    tagline: "Every brief is different. Pick yours.",
    skill: "Web",
    xp: 170,
    type: "js",
    icon: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
    meta: { kind: "normal", series: "w11-launch", order: 1 },
    briefing: {
      objective: "Choose the client brief you will build for the capstone.",
      body: "Not everyone gets the same project. Choose one: a Restaurant, a Personal Brand, a Local Business, a Portfolio, a Service Business, or a Student Project. Each has its own audience and its own must-have pages. This is your client for the rest of the course."
    },
    challenges: [
      {
        id: "ch1",
        title: "Pick your client",
        instructions: "Write chooseClient() that returns one of: restaurant, personal-brand, local-business, portfolio, service-business, student-project.",
        learning: "Your choice drives everything that follows - pages, sections, content and features.",
        example: "function chooseClient() {\n  return 'restaurant';\n}",
        starter: "function chooseClient() {\n  // pick your client from the six options\n  return '';\n}",
        test: "function t() {\n  var opts = ['restaurant', 'personal-brand', 'local-business', 'portfolio', 'service-business', 'student-project'];\n  var c = chooseClient();\n  if (opts.indexOf(c) === -1) return { passed: false, message: 'Choose one of the six client types.' };\n  return { passed: true, message: 'Client chosen. Now learn their brief!' };\n}",
        hints: [
          "Six valid options.",
          "Return the exact string.",
          "Any of them is correct."
        ],
        solution: "function chooseClient() {\n  return 'restaurant';\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write clientBrief(client) that returns { client, audience, needs } - the audience for that client type and at least 3 pages they need.",
      starter: S11_LAUNCH_HELPERS + "function clientBrief(client) {\n  // audience + required pages for your client\n  return null;\n}",
      test: "function t() {\n  var r = clientBrief('restaurant');\n  if (!r || !r.client) return { passed: false, message: 'Should name the client.' };\n  if (!r.audience || !r.audience.trim()) return { passed: false, message: 'Who is the audience?' };\n  if (!r.needs || r.needs.length < 3) return { passed: false, message: 'List at least 3 pages the client needs.' };\n  return { passed: true, message: 'You understand your client!' };\n}",
      hints: [
        "audience = who you are building for.",
        "needs = the pages they require.",
        "Restaurants need a menu page."
      ],
      solution: S11_LAUNCH_HELPERS + "function clientBrief(client) {\n  var briefs = { 'restaurant': { audience: 'People looking for somewhere to eat', needs: ['Home', 'Menu', 'About', 'Contact'] }, 'personal-brand': { audience: 'Fans and potential clients', needs: ['Home', 'About', 'Portfolio', 'Contact'] }, 'local-business': { audience: 'Local customers', needs: ['Home', 'Services', 'About', 'Contact'] }, 'portfolio': { audience: 'Employers and collaborators', needs: ['Home', 'Work', 'About', 'Contact'] }, 'service-business': { audience: 'People who need your service', needs: ['Home', 'Services', 'Pricing', 'Contact'] }, 'student-project': { audience: 'Classmates and teachers', needs: ['Home', 'About', 'Project', 'Contact'] } };\n  var b = briefs[client] || briefs['student-project'];\n  return { client: client, audience: b.audience, needs: b.needs };\n}",
      unlock: "Build & Launch"
    },
    unlock: "Build & Launch"
  },

  {
    id: "web-launch-plan",
    num: 91,
    title: "Plan Before Coding",
    tagline: "Map the site before you write a single tag.",
    skill: "Web",
    xp: 170,
    type: "js",
    icon: '<path d="M4 4h16v16H4z"/><path d="M4 10h16M10 10v10"/>',
    meta: { kind: "normal", series: "w11-launch", order: 2 },
    briefing: {
      objective: "Create the plan: pages, sections, content and features.",
      body: "Before any code, map the site. A plan like HOME → Hero → Services → About → Testimonials → Contact turns a vague idea into a build list. Plan your pages, the sections on each, and the features they need."
    },
    challenges: [
      {
        id: "ch1",
        title: "Plan the pages",
        instructions: "Write planPages(plan) that returns true when plan.pages has at least 3 pages and includes 'Home'.",
        learning: "A real site starts with a page list. Home is the entry point; the rest serve the client's brief.",
        example: "function planPages(plan) {\n  return plan.pages.length >= 3 && plan.pages.indexOf('Home') !== -1;\n}",
        starter: "function planPages(plan) {\n  // at least 3 pages including Home?\n  return false;\n}",
        test: "function t() {\n  if (!planPages({ pages: ['Home', 'Menu', 'About', 'Contact'] })) return { passed: false, message: 'Four pages including Home is a plan.' };\n  if (planPages({ pages: ['Home', 'Menu'] })) return { passed: false, message: 'Only two pages is too thin.' };\n  return { passed: true, message: 'A solid page map!' };\n}",
        hints: [
          "Check pages length.",
          "Check for 'Home'.",
          "Return a boolean."
        ],
        solution: "function planPages(plan) {\n  return plan.pages.length >= 3 && plan.pages.indexOf('Home') !== -1;\n}"
      },
      {
        id: "ch2",
        title: "Plan the sections",
        instructions: "Write planSections(plan) that returns true when plan.sections includes nav, hero and contact (case-insensitive).",
        learning: "Every page needs a nav to move around, a hero to say what you are, and a contact section so people can reach you.",
        example: "function planSections(plan) {\n  var s = plan.sections.join(',').toLowerCase();\n  return s.indexOf('nav') !== -1 && s.indexOf('hero') !== -1 && s.indexOf('contact') !== -1;\n}",
        starter: "function planSections(plan) {\n  // nav + hero + contact present?\n  return false;\n}",
        test: "function t() {\n  if (!planSections({ sections: ['nav', 'hero', 'services', 'contact'] })) return { passed: false, message: 'nav, hero and contact are the core sections.' };\n  if (planSections({ sections: ['nav', 'hero'] })) return { passed: false, message: 'Missing the contact section.' };\n  return { passed: true, message: 'The skeleton of a real site!' };\n}",
        hints: [
          "Join sections and lowercase.",
          "Check the three strings.",
          "Return a boolean."
        ],
        solution: "function planSections(plan) {\n  var s = plan.sections.join(',').toLowerCase();\n  return s.indexOf('nav') !== -1 && s.indexOf('hero') !== -1 && s.indexOf('contact') !== -1;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write buildPlan(client) that returns { pages: at least 3 including Home, sections: including nav, hero and contact, features: at least 1 real feature }.",
      starter: S11_LAUNCH_HELPERS + "function buildPlan(client) {\n  // pages + sections + features for your client\n  return null;\n}",
      test: "function t() {\n  function planPages(plan) { return plan.pages.length >= 3 && plan.pages.indexOf('Home') !== -1; }\n  function planSections(plan) { var s = plan.sections.join(',').toLowerCase(); return s.indexOf('nav') !== -1 && s.indexOf('hero') !== -1 && s.indexOf('contact') !== -1; }\n  var p = buildPlan('restaurant');\n  if (!p || !planPages(p)) return { passed: false, message: 'Need at least 3 pages including Home.' };\n  if (!planSections(p)) return { passed: false, message: 'Sections need nav, hero and contact.' };\n  if (!p.features || p.features.length < 1) return { passed: false, message: 'List at least one feature.' };\n  return { passed: true, message: 'Planned. Now build the structure!' };\n}",
      hints: [
        "pages: Home + at least two more.",
        "sections: nav, hero, ... , contact.",
        "features: what makes it work."
      ],
      solution: S11_LAUNCH_HELPERS + "function buildPlan(client) {\n  return { pages: ['Home', 'Menu', 'About', 'Contact'], sections: ['nav', 'hero', 'menu', 'about', 'contact'], features: ['working contact form'] };\n}",
      unlock: "Build & Launch"
    },
    unlock: "Build & Launch"
  },

  {
    id: "web-launch-structure",
    num: 92,
    title: "Build the Structure",
    tagline: "Semantic HTML that stands on its own.",
    skill: "Web",
    xp: 190,
    type: "js",
    icon: '<path d="M3 5h18v14H3z"/><path d="M3 9h18M7 14h6"/>',
    meta: { kind: "normal", series: "w11-launch", order: 3 },
    briefing: {
      objective: "Build the HTML structure of your client site.",
      body: "No canned solution here - this is your build. SkillRun checks what matters structurally: semantic elements (<header>, <main>, <footer>, <nav>), a single <h1> with <h2> sections, real links, and images. Write the HTML for your client's site and report it."
    },
    challenges: [
      {
        id: "ch1",
        title: "Semantic check",
        instructions: "Write checkStructure(html) that returns true when the html contains <header, <main, <footer, <nav, <h1, <a and <img.",
        learning: "Semantic elements tell browsers and search engines what each part of the page is for.",
        example: "function checkStructure(html) {\n  var tags = ['<header', '<main', '<footer', '<nav', '<h1', '<a ', '<img'];\n  for (var i = 0; i < tags.length; i++) { if (html.indexOf(tags[i]) === -1) { return false; } }\n  return true;\n}",
        starter: "function checkStructure(html) {\n  // header, main, footer, nav, h1, a, img present?\n  return false;\n}",
        test: "function t() {\n  var good = '<header><nav><a href=\"index.html\">Home</a></nav></header><main><h1>Title</h1><img src=\"a.jpg\"></main><footer></footer>';\n  if (!checkStructure(good)) return { passed: false, message: 'All the semantic pieces are there.' };\n  var bad = '<header><main><h1>No img</h1></main></header>';\n  if (checkStructure(bad)) return { passed: false, message: 'Missing img and links -> invalid.' };\n  return { passed: true, message: 'Your structure passes the check!' };\n}",
        hints: [
          "Search for each tag string.",
          "All must be present.",
          "Return a boolean."
        ],
        solution: "function checkStructure(html) {\n  var tags = ['<header', '<main', '<footer', '<nav', '<h1', '<a ', '<img'];\n  for (var i = 0; i < tags.length; i++) { if (html.indexOf(tags[i]) === -1) { return false; } }\n  return true;\n}"
      },
      {
        id: "ch2",
        title: "Heading hierarchy",
        instructions: "Write checkHeadings(html) that returns true when there is exactly one <h1> and at least one <h2>.",
        learning: "One <h1> per page states the single topic. <h2> tags break it into sections.",
        example: "function checkHeadings(html) {\n  var h1 = (html.match(/<h1[\\s>]/g) || []).length;\n  var h2 = (html.match(/<h2[\\s>]/g) || []).length;\n  return h1 === 1 && h2 >= 1;\n}",
        starter: "function checkHeadings(html) {\n  // exactly one h1 and at least one h2?\n  return false;\n}",
        test: "function t() {\n  if (!checkHeadings('<h1>Only one</h1><h2>Section</h2>')) return { passed: false, message: 'One h1 plus an h2 is correct.' };\n  if (checkHeadings('<h1>A</h1><h1>B</h1><h2>C</h2>')) return { passed: false, message: 'Two h1 tags break the hierarchy.' };\n  return { passed: true, message: 'A clean heading outline!' };\n}",
        hints: [
          "Count h1 and h2.",
          "h1 must be exactly 1.",
          "h2 at least 1."
        ],
        solution: "function checkHeadings(html) {\n  var h1 = (html.match(/<h1[\\s>]/g) || []).length;\n  var h2 = (html.match(/<h2[\\s>]/g) || []).length;\n  return h1 === 1 && h2 >= 1;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write structureReport(html) that returns { semantic: the list of semantic elements found, valid: whether the html passes both checks }.",
      starter: S11_LAUNCH_HELPERS + "function structureReport(html) {\n  // which semantic elements are present + is it valid?\n  return null;\n}",
      test: "function t() {\n  var html = '<header><nav><a href=\"index.html\">Home</a></nav></header><main><h1>Green Leaf</h1><h2>Menu</h2><img src=\"cafe.jpg\" alt=\"cafe\"></main><footer></footer>';\n  var r = structureReport(html);\n  if (!r || r.valid !== true) return { passed: false, message: 'This page should pass both checks.' };\n  if (r.semantic.indexOf('header') === -1 || r.semantic.indexOf('main') === -1 || r.semantic.indexOf('footer') === -1) return { passed: false, message: 'semantic should list the elements you found.' };\n  return { passed: true, message: 'Structure built - now make it responsive!' };\n}",
      hints: [
        "scan for header, main, footer, nav, h1, h2, a, img.",
        "valid = checkStructure(html) && checkHeadings(html).",
        "Return both fields."
      ],
      solution: S11_LAUNCH_HELPERS + "function structureReport(html) {\n  var found = [];\n  var tags = ['header', 'main', 'footer', 'nav', 'h1', 'h2', 'a', 'img'];\n  for (var i = 0; i < tags.length; i++) { if (html.indexOf('<' + tags[i]) !== -1) { found.push(tags[i]); } }\n  return { semantic: found, valid: checkStructure(html) && checkHeadings(html) };\n}",
      unlock: "Build & Launch"
    },
    unlock: "Build & Launch"
  },

  {
    id: "web-launch-responsive",
    num: 93,
    title: "Make It Responsive",
    tagline: "Desktop, tablet, mobile - one layout, three worlds.",
    skill: "Web",
    xp: 190,
    type: "js",
    icon: '<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M9 8l3 3 3-3"/>',
    meta: { kind: "normal", series: "w11-launch", order: 4 },
    briefing: {
      objective: "Make your client site work at every viewport size.",
      body: "People browse on phones, tablets and laptops. Test your layout at real widths and fix what breaks. Media queries with @media are how CSS adapts. SkillRun checks that you actually verified your site at multiple widths."
    },
    challenges: [
      {
        id: "ch1",
        title: "The three sizes",
        instructions: "Write viewports() that returns ['desktop', 'tablet', 'mobile'].",
        learning: "If it works at these three widths, it works for almost everyone.",
        example: "function viewports() {\n  return ['desktop', 'tablet', 'mobile'];\n}",
        starter: "function viewports() {\n  // the three viewport sizes you must test\n  return [];\n}",
        test: "function t() {\n  var v = viewports();\n  var want = ['desktop', 'tablet', 'mobile'];\n  for (var i = 0; i < want.length; i++) { if (v.indexOf(want[i]) === -1) return { passed: false, message: 'Missing viewport: ' + want[i] }; }\n  return { passed: true, message: 'Three sizes, one responsive goal.' };\n}",
        hints: [
          "desktop, tablet, mobile.",
          "Return an array.",
          "Exactly three strings."
        ],
        solution: "function viewports() {\n  return ['desktop', 'tablet', 'mobile'];\n}"
      },
      {
        id: "ch2",
        title: "Count the breakpoints",
        instructions: "Write countMedia(css) that returns how many @media rules the css contains.",
        learning: "Each @media rule adapts the layout at a specific width. One per breakpoint is typical.",
        example: "function countMedia(css) {\n  return (css.match(/@media/g) || []).length;\n}",
        starter: "function countMedia(css) {\n  // how many media queries?\n  return 0;\n}",
        test: "function t() {\n  if (countMedia('@media (max-width: 768px){.x{}}') !== 1) return { passed: false, message: 'One media query should count as 1.' };\n  if (countMedia('body{}') !== 0) return { passed: false, message: 'No media queries -> 0.' };\n  return { passed: true, message: 'You can count your breakpoints!' };\n}",
        hints: [
          "match /@media/g.",
          "Fall back to [] when none.",
          "Return the length."
        ],
        solution: "function countMedia(css) {\n  return (css.match(/@media/g) || []).length;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write responsiveReport(css, widths) that returns { tested: how many widths you checked, breakpoints: how many @media rules, mobileFirst: whether the css has a min-width query }.",
      starter: S11_LAUNCH_HELPERS + "function responsiveReport(css, widths) {\n  // how many widths tested + breakpoints + mobile-first?\n  return null;\n}",
      test: "function t() {\n  var css = '@media (min-width: 768px){.menu{display:flex}}@media (max-width: 767px){.menu{display:none}}';\n  var r = responsiveReport(css, ['375px', '768px', '1280px']);\n  if (!r || r.tested < 3) return { passed: false, message: 'Test at least 3 real widths.' };\n  if (r.breakpoints < 1) return { passed: false, message: 'Need at least one media query.' };\n  if (r.mobileFirst !== true) return { passed: false, message: 'A min-width query means mobile-first.' };\n  return { passed: true, message: 'Responsive across every device!' };\n}",
      hints: [
        "tested = widths.length.",
        "breakpoints = countMedia(css).",
        "mobileFirst = /@media[^{]*min-width/.test(css)."
      ],
      solution: S11_LAUNCH_HELPERS + "function responsiveReport(css, widths) {\n  return { tested: widths.length, breakpoints: countMedia(css), mobileFirst: /@media[^{]*min-width/.test(css) };\n}",
      unlock: "Build & Launch"
    },
    unlock: "Build & Launch"
  },

  {
    id: "web-launch-interaction",
    num: 94,
    title: "Add Interaction",
    tagline: "Make your site do something.",
    skill: "Web",
    xp: 190,
    type: "js",
    icon: '<path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 5l-2 14"/>',
    meta: { kind: "normal", series: "w11-launch", order: 5 },
    briefing: {
      objective: "Add at least one meaningful JavaScript interaction.",
      body: "A real site responds to the user: a mobile menu that opens, a form that validates, a calculator, an FAQ accordion, a filter, a counter. Pick the one that matters for your client's site and make it actually work."
    },
    challenges: [
      {
        id: "ch1",
        title: "A meaningful interaction",
        instructions: "Write validInteraction(name) that returns true when name is one of: menu, form validation, calculator, FAQ, filter or counter.",
        learning: "The interaction should solve a real problem on the page, not decorate it.",
        example: "function validInteraction(name) {\n  var ok = ['menu', 'form validation', 'calculator', 'FAQ', 'filter', 'counter'];\n  return ok.indexOf(name) !== -1;\n}",
        starter: "function validInteraction(name) {\n  // one of the six meaningful interactions?\n  return false;\n}",
        test: "function t() {\n  if (!validInteraction('menu')) return { passed: false, message: 'A menu is a meaningful interaction.' };\n  if (validInteraction('confetti')) return { passed: false, message: 'confetti is not on the list.' };\n  return { passed: true, message: 'That interaction earns its place!' };\n}",
        hints: [
          "Six allowed names.",
          "Compare against the list.",
          "Return a boolean."
        ],
        solution: "function validInteraction(name) {\n  var ok = ['menu', 'form validation', 'calculator', 'FAQ', 'filter', 'counter'];\n  return ok.indexOf(name) !== -1;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write interactionReport() that returns { name, description, working: true } for the interaction you added to your site.",
      starter: S11_LAUNCH_HELPERS + "function interactionReport() {\n  // the interaction you built and what it does\n  return null;\n}",
      test: "function t() {\n  var ok = ['menu', 'form validation', 'calculator', 'FAQ', 'filter', 'counter'];\n  var r = interactionReport();\n  if (!r || ok.indexOf(r.name) === -1) return { passed: false, message: 'Pick a meaningful interaction.' };\n  if (!r.description || r.description.length < 10) return { passed: false, message: 'Describe what it does on the page.' };\n  if (r.working !== true) return { passed: false, message: 'It should actually work.' };\n  return { passed: true, message: 'Your site reacts to the user!' };\n}",
      hints: [
        "name must be on the list.",
        "description explains the behavior.",
        "working: true."
      ],
      solution: S11_LAUNCH_HELPERS + "function interactionReport() {\n  return { name: 'menu', description: 'A hamburger menu that opens and closes on mobile.', working: true };\n}",
      unlock: "Build & Launch"
    },
    unlock: "Build & Launch"
  },

  {
    id: "web-launch-contact",
    num: 95,
    title: "Add Contact",
    tagline: "Connect the form system you learned earlier.",
    skill: "Web",
    xp: 190,
    type: "js",
    icon: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    meta: { kind: "normal", series: "w11-launch", order: 6 },
    briefing: {
      objective: "Connect your client site to the form system from the Data series.",
      body: "A contact page without a working form is a dead end. Reuse what you learned in Series 6 (Web3Forms): a form with name, email and message fields, and an endpoint that actually delivers submissions."
    },
    challenges: [
      {
        id: "ch1",
        title: "A complete form",
        instructions: "Write checkForm(html) that returns true when the html has a <form>, a name field, a type=\"email\" field and a message field (name=\"message\" or a textarea).",
        learning: "A working contact form has the three classic fields and an action that sends them somewhere.",
        example: "function checkForm(html) {\n  var hasForm = html.indexOf('<form') !== -1;\n  var hasName = html.indexOf('name=\"name\"') !== -1;\n  var hasEmail = html.indexOf('type=\"email\"') !== -1;\n  var hasMessage = html.indexOf('name=\"message\"') !== -1 || html.indexOf('<textarea') !== -1;\n  return hasForm && hasName && hasEmail && hasMessage;\n}",
        starter: "function checkForm(html) {\n  // form + name + email + message?\n  return false;\n}",
        test: "function t() {\n  var good = '<form><input type=\"text\" name=\"name\"><input type=\"email\" name=\"email\"><textarea name=\"message\"></textarea></form>';\n  if (!checkForm(good)) return { passed: false, message: 'This form has name, email and message.' };\n  var bad = '<form><input type=\"text\" name=\"name\"></form>';\n  if (checkForm(bad)) return { passed: false, message: 'Missing email and message fields.' };\n  return { passed: true, message: 'A real contact form!' };\n}",
        hints: [
          "Check for <form.",
          "Check name, email, message fields.",
          "textarea counts as message."
        ],
        solution: "function checkForm(html) {\n  var hasForm = html.indexOf('<form') !== -1;\n  var hasName = html.indexOf('name=\"name\"') !== -1;\n  var hasEmail = html.indexOf('type=\"email\"') !== -1;\n  var hasMessage = html.indexOf('name=\"message\"') !== -1 || html.indexOf('<textarea') !== -1;\n  return hasForm && hasName && hasEmail && hasMessage;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write contactReport(html) that returns { hasForm, fields: ['name', 'email', 'message'], endpoint } where endpoint is how the form delivers (e.g. Web3Forms).",
      starter: S11_LAUNCH_HELPERS + "function checkForm(html) {\n  var hasForm = html.indexOf('<form') !== -1;\n  var hasName = html.indexOf('name=\"name\"') !== -1;\n  var hasEmail = html.indexOf('type=\"email\"') !== -1;\n  var hasMessage = html.indexOf('name=\"message\"') !== -1 || html.indexOf('<textarea') !== -1;\n  return hasForm && hasName && hasEmail && hasMessage;\n}\nfunction contactReport(html) {\n  // is the form complete + where does it send?\n  return null;\n}",
      test: "function t() {\n  var html = '<form><input type=\"text\" name=\"name\"><input type=\"email\" name=\"email\"><textarea name=\"message\"></textarea></form>';\n  var r = contactReport(html);\n  if (!r || r.hasForm !== true) return { passed: false, message: 'Should confirm the form is complete.' };\n  if (r.fields.indexOf('name') === -1 || r.fields.indexOf('email') === -1 || r.fields.indexOf('message') === -1) return { passed: false, message: 'Should list the three fields.' };\n  if (!r.endpoint || !r.endpoint.trim()) return { passed: false, message: 'Where do submissions go?' };\n  return { passed: true, message: 'Contact form connected and deliverable!' };\n}",
      hints: [
        "hasForm from checkForm(html).",
        "fields: the three names.",
        "endpoint: the form system you use."
      ],
      solution: S11_LAUNCH_HELPERS + "function checkForm(html) {\n  var hasForm = html.indexOf('<form') !== -1;\n  var hasName = html.indexOf('name=\"name\"') !== -1;\n  var hasEmail = html.indexOf('type=\"email\"') !== -1;\n  var hasMessage = html.indexOf('name=\"message\"') !== -1 || html.indexOf('<textarea') !== -1;\n  return hasForm && hasName && hasEmail && hasMessage;\n}\nfunction contactReport(html) {\n  return { hasForm: checkForm(html), fields: ['name', 'email', 'message'], endpoint: 'Web3Forms' };\n}",
      unlock: "Build & Launch"
    },
    unlock: "Build & Launch"
  },

  {
    id: "web-launch-github",
    num: 96,
    title: "GitHub",
    tagline: "Push your final project up.",
    skill: "Web",
    xp: 190,
    type: "js",
    icon: '<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/>',
    meta: { kind: "normal", series: "w11-launch", order: 7 },
    briefing: {
      objective: "Push the final project to GitHub and report it.",
      body: "Time to ship the code. Create a repository on GitHub (you know this from Series 7), push all the files, and make a recent commit. SkillRun checks the shape of what you report - the repository URL, the files present, and a real commit message."
    },
    challenges: [
      {
        id: "ch1",
        title: "A real repository",
        instructions: "Write checkRepo(repo) that returns true when repo.url includes 'github.com' and repo.files has at least 3 entries.",
        learning: "A shipped project lives on GitHub with all its files - HTML, CSS, JS and more.",
        example: "function checkRepo(repo) {\n  return repo.url.indexOf('github.com') !== -1 && repo.files.length >= 3;\n}",
        starter: "function checkRepo(repo) {\n  // github.com URL with at least 3 files?\n  return false;\n}",
        test: "function t() {\n  if (!checkRepo({ url: 'https://github.com/YOU/greenleaf', files: ['index.html', 'style.css', 'script.js'] })) return { passed: false, message: 'A real repo has a github URL and 3+ files.' };\n  if (checkRepo({ url: 'https://notgithub.com/x', files: ['a'] })) return { passed: false, message: 'Not a GitHub URL / too few files.' };\n  return { passed: true, message: 'Your code is on GitHub!' };\n}",
        hints: [
          "Check the URL contains github.com.",
          "Count the files.",
          "Return a boolean."
        ],
        solution: "function checkRepo(repo) {\n  return repo.url.indexOf('github.com') !== -1 && repo.files.length >= 3;\n}"
      },
      {
        id: "ch2",
        title: "Recent commit",
        instructions: "Write checkCommit(repo) that returns true when repo.lastCommit is a non-empty string.",
        learning: "A repository you are still working on has a recent commit message describing the latest change.",
        example: "function checkCommit(repo) {\n  return !!(repo.lastCommit && repo.lastCommit.trim());\n}",
        starter: "function checkCommit(repo) {\n  // is there a real recent commit?\n  return false;\n}",
        test: "function t() {\n  if (!checkCommit({ lastCommit: 'Add contact form' })) return { passed: false, message: 'A real commit message should pass.' };\n  if (checkCommit({ lastCommit: '' })) return { passed: false, message: 'Empty message -> nothing committed.' };\n  return { passed: true, message: 'Your latest commit is recorded!' };\n}",
        hints: [
          "Check lastCommit.",
          "Trim it.",
          "Return a boolean."
        ],
        solution: "function checkCommit(repo) {\n  return !!(repo.lastCommit && repo.lastCommit.trim());\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write githubReport() that returns { url: 'https://github.com/YOU/<project>', files: at least 3 real file names, lastCommit: a real commit message }.",
      starter: S11_LAUNCH_HELPERS + "function githubReport() {\n  // your real repository details\n  return null;\n}",
      test: "function t() {\n  var r = githubReport();\n  if (!r || r.url.indexOf('github.com') === -1 || !r.files || r.files.length < 3) return { passed: false, message: 'Needs a github.com URL and at least 3 files.' };\n  if (!r.lastCommit || !r.lastCommit.trim()) return { passed: false, message: 'Needs a recent commit message.' };\n  return { passed: true, message: 'Pushed and committed!' };\n}",
      hints: [
        "Use your real repository URL.",
        "List the files you actually pushed.",
        "lastCommit = your latest commit message."
      ],
      solution: S11_LAUNCH_HELPERS + "function githubReport() {\n  return { url: 'https://github.com/YOU/greenleaf', files: ['index.html', 'style.css', 'script.js'], lastCommit: 'Add contact form' };\n}",
      unlock: "Build & Launch"
    },
    unlock: "Build & Launch"
  },

  {
    id: "web-launch-deploy",
    num: 97,
    title: "Deploy",
    tagline: "Ship it with the browser-first Vercel flow.",
    skill: "Web",
    xp: 190,
    type: "js",
    icon: '<path d="M5 3l14 9-14 9z"/>',
    meta: { kind: "normal", series: "w11-launch", order: 8 },
    briefing: {
      objective: "Deploy your client site and get a production URL.",
      body: "Use the browser-first Vercel workflow from Series 8: connect GitHub, import the repository, deploy, and get a live URL. No command line - the whole thing happens in the browser at vercel.com."
    },
    challenges: [
      {
        id: "ch1",
        title: "Is it live?",
        instructions: "Write checkDeploy(d) that returns true when d.url includes 'vercel.app' and d.status is 'live'.",
        learning: "Your production URL comes from Vercel. status 'live' means the site is serving to the world.",
        example: "function checkDeploy(d) {\n  return d.url.indexOf('vercel.app') !== -1 && d.status === 'live';\n}",
        starter: "function checkDeploy(d) {\n  // vercel.app URL and live status?\n  return false;\n}",
        test: "function t() {\n  if (!checkDeploy({ url: 'https://greenleaf.vercel.app', status: 'live' })) return { passed: false, message: 'A vercel.app URL with live status is deployed.' };\n  if (checkDeploy({ url: 'https://greenleaf.vercel.app', status: 'building' })) return { passed: false, message: 'building is not live yet.' };\n  return { passed: true, message: 'The site is live!' };\n}",
        hints: [
          "Check for vercel.app.",
          "status must be 'live'.",
          "Return a boolean."
        ],
        solution: "function checkDeploy(d) {\n  return d.url.indexOf('vercel.app') !== -1 && d.status === 'live';\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write deployReport() that returns { url: your live Vercel URL, status: 'live' }.",
      starter: S11_LAUNCH_HELPERS + "function deployReport() {\n  // your real production URL\n  return null;\n}",
      test: "function t() {\n  var r = deployReport();\n  if (!r || r.url.indexOf('vercel.app') === -1 || r.status !== 'live') return { passed: false, message: 'Needs a live vercel.app URL.' };\n  return { passed: true, message: 'Production URL live - open it in a new tab!' };\n}",
      hints: [
        "Use your real deployment URL.",
        "status: 'live'.",
        "Open it and check."
      ],
      solution: S11_LAUNCH_HELPERS + "function deployReport() {\n  return { url: 'https://greenleaf.vercel.app', status: 'live' };\n}",
      unlock: "Build & Launch"
    },
    unlock: "Build & Launch"
  },

  {
    id: "web-launch-seo",
    num: 98,
    title: "SEO Check",
    tagline: "Run the checklist from Series 9 on your live site.",
    skill: "Web",
    xp: 190,
    type: "js",
    icon: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>',
    meta: { kind: "normal", series: "w11-launch", order: 9 },
    briefing: {
      objective: "Run the full SEO check on your deployed client site.",
      body: "Everything you learned in Series 9, applied for real: a title, a meta description, correct headings, image alt text, a sitemap and a robots.txt on the live site.",
    },
    challenges: [
      {
        id: "ch1",
        title: "The six checks",
        instructions: "Write seoItems() that returns ['Title', 'Description', 'Headings', 'Alt text', 'Sitemap', 'robots.txt'].",
        learning: "Six quick checks cover the essentials. Run them on your live URL.",
        example: "function seoItems() {\n  return ['Title', 'Description', 'Headings', 'Alt text', 'Sitemap', 'robots.txt'];\n}",
        starter: "function seoItems() {\n  // the six SEO checks\n  return [];\n}",
        test: "function t() {\n  var want = ['Title', 'Description', 'Headings', 'Alt text', 'Sitemap', 'robots.txt'];\n  var s = seoItems();\n  for (var i = 0; i < want.length; i++) { if (s.indexOf(want[i]) === -1) return { passed: false, message: 'Missing check: ' + want[i] }; }\n  return { passed: true, message: 'Six checks, all on the list.' };\n}",
        hints: [
          "Six items.",
          "Sitemap and robots.txt are the last two.",
          "Return an array."
        ],
        solution: "function seoItems() {\n  return ['Title', 'Description', 'Headings', 'Alt text', 'Sitemap', 'robots.txt'];\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write seoReport() that returns { done: the six checks, property: your live site URL, sitemapSubmitted: true }.",
      starter: S11_LAUNCH_HELPERS + "function seoReport() {\n  // what you verified on the live site\n  return null;\n}",
      test: "function t() {\n  var r = seoReport();\n  var want = ['Title', 'Description', 'Headings', 'Alt text', 'Sitemap', 'robots.txt'];\n  for (var i = 0; i < want.length; i++) { if (r.done.indexOf(want[i]) === -1) return { passed: false, message: 'Missing check: ' + want[i] }; }\n  if (!r.property || r.property.indexOf('http') !== 0) return { passed: false, message: 'property should be your live site URL.' };\n  if (r.sitemapSubmitted !== true) return { passed: false, message: 'Should confirm the sitemap was submitted.' };\n  return { passed: true, message: 'SEO checks all pass on the live site!' };\n}",
      hints: [
        "done lists the six checks.",
        "property = your real URL.",
        "sitemapSubmitted: true."
      ],
      solution: S11_LAUNCH_HELPERS + "function seoReport() {\n  return { done: ['Title', 'Description', 'Headings', 'Alt text', 'Sitemap', 'robots.txt'], property: 'https://greenleaf.vercel.app', sitemapSubmitted: true };\n}",
      unlock: "Build & Launch"
    },
    unlock: "Build & Launch"
  },

  {
    id: "web-launch-console",
    num: 99,
    title: "Search Console",
    tagline: "Connect the final site and submit its sitemap.",
    skill: "Web",
    xp: 190,
    type: "js",
    icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8" cy="8" r="2"/><path d="M3 18l6-6 4 4 8-8"/><path d="M19 13v8M17 18h4"/>',
    meta: { kind: "normal", series: "w11-launch", order: 10 },
    briefing: {
      objective: "Add your final website to Search Console and submit its sitemap.",
      body: "Browser-first: open search.google.com/search-console, add your deployed site as a property, verify it, and submit the sitemap. Then look at the status it reports. SkillRun asks you to report what Search Console actually shows - it cannot pretend to do it for you."
    },
    challenges: [
      {
        id: "ch1",
        title: "Claimed and submitted",
        instructions: "Write consoleStatus() that returns { property: 'https://<your-site>.vercel.app', sitemapSubmitted: true }.",
        learning: "The site must be claimed as a Search Console property, then the sitemap submitted under it.",
        example: "function consoleStatus() {\n  return { property: 'https://greenleaf.vercel.app', sitemapSubmitted: true };\n}",
        starter: "function consoleStatus() {\n  // your claimed property + sitemap submitted\n  return null;\n}",
        test: "function t() {\n  var r = consoleStatus();\n  if (!r || r.property.indexOf('http') !== 0) return { passed: false, message: 'property should be your deployed site URL.' };\n  if (r.sitemapSubmitted !== true) return { passed: false, message: 'Should confirm the sitemap is submitted.' };\n  return { passed: true, message: 'Site claimed and sitemap submitted!' };\n}",
        hints: [
          "property = your live URL.",
          "sitemapSubmitted: true.",
          "Do it for real in Search Console."
        ],
        solution: "function consoleStatus() {\n  return { property: 'https://greenleaf.vercel.app', sitemapSubmitted: true };\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write consoleReport(property, status) that returns { property, sitemapSubmitted: true, status, indexed: false } where status is what Search Console reports (e.g. 'Success') and indexed stays false - nothing is instant.",
      starter: S11_LAUNCH_HELPERS + "function consoleReport(property, status) {\n  // the real status Search Console shows\n  return null;\n}",
      test: "function t() {\n  var r = consoleReport('https://greenleaf.vercel.app', 'Success');\n  if (!r || r.property !== 'https://greenleaf.vercel.app') return { passed: false, message: 'Should keep the property.' };\n  if (r.sitemapSubmitted !== true) return { passed: false, message: 'Should be submitted.' };\n  if (!r.status || !r.status.trim()) return { passed: false, message: 'Report the status Search Console shows.' };\n  if (r.indexed !== false) return { passed: false, message: 'Nothing is indexed instantly.' };\n  return { passed: true, message: 'Reported honestly - submitted is not indexed!' };\n}",
      hints: [
        "status = what Search Console shows you.",
        "indexed: false.",
        "Return all four fields."
      ],
      solution: S11_LAUNCH_HELPERS + "function consoleReport(property, status) {\n  return { property: property, sitemapSubmitted: true, status: status, indexed: false };\n}",
      unlock: "Build & Launch"
    },
    unlock: "Build & Launch"
  },

  {
    id: "web-launch-analytics",
    num: 100,
    title: "Analytics",
    tagline: "Connect the final site and verify it.",
    skill: "Web",
    xp: 190,
    type: "js",
    icon: '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 6-6"/>',
    meta: { kind: "normal", series: "w11-launch", order: 11 },
    briefing: {
      objective: "Connect Analytics to your final site and confirm it works.",
      body: "Add your measurement ID to the live site, then watch your own visit appear in Realtime. SkillRun checks the structure of what you report; the real-time check happens in your browser."
    },
    challenges: [
      {
        id: "ch1",
        title: "All connected?",
        instructions: "Write analyticsOk(report) that returns true when report.connected is true, report.id matches the G- format, and report.realtimeSeen is true.",
        learning: "Configured, connected, and proven by a real-time visit - those three together mean analytics works.",
        example: "function analyticsOk(report) {\n  return report.connected === true && /^G-[A-Z0-9]{6,10}$/.test(report.id || '') && report.realtimeSeen === true;\n}",
        starter: "function analyticsOk(report) {\n  // connected + valid id + realtime seen?\n  return false;\n}",
        test: "function t() {\n  if (!analyticsOk({ connected: true, id: 'G-ABC123', realtimeSeen: true })) return { passed: false, message: 'Connected with a valid ID and a seen visit is good.' };\n  if (analyticsOk({ connected: true, id: 'G-ABC123', realtimeSeen: false })) return { passed: false, message: 'The real-time visit was never confirmed.' };\n  return { passed: true, message: 'Analytics is verified!' };\n}",
        hints: [
          "Check connected.",
          "Check the G- ID.",
          "Check realtimeSeen."
        ],
        solution: "function analyticsOk(report) {\n  return report.connected === true && /^G-[A-Z0-9]{6,10}$/.test(report.id || '') && report.realtimeSeen === true;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write analyticsReport() that returns { connected: true, id: your G- measurement ID, realtimeSeen: true, event: your meaningful event }.",
      starter: S11_LAUNCH_HELPERS + "function analyticsReport() {\n  // your verified analytics setup\n  return null;\n}",
      test: "function t() {\n  var r = analyticsReport();\n  if (!r || r.connected !== true || !/^G-[A-Z0-9]{6,10}$/.test(r.id || '') || r.realtimeSeen !== true) return { passed: false, message: 'Connected, valid ID, real-time visit confirmed.' };\n  if (!r.event || !r.event.trim()) return { passed: false, message: 'Name the event you are tracking.' };\n  return { passed: true, message: 'Your final site is measurable!' };\n}",
      hints: [
        "id is your real measurement ID.",
        "realtimeSeen: true.",
        "event: the one you defined."
      ],
      solution: S11_LAUNCH_HELPERS + "function analyticsReport() {\n  return { connected: true, id: 'G-ABC123XYZ', realtimeSeen: true, event: 'form_submit' };\n}",
      unlock: "Build & Launch"
    },
    unlock: "Build & Launch"
  },

  {
    id: "web-launch-boss",
    num: 101,
    title: "Build & Launch",
    tagline: "Ship a complete client website. The capstone.",
    skill: "Web",
    xp: 420,
    type: "js",
    icon: '<path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4L2 9.4h7.6z"/>',
    meta: { kind: "boss", series: "w11-launch", order: 12, focusLock: true, hintCap: 1 },
    briefing: {
      objective: "Build and launch the client's website, then report every technical requirement.",
      body: "Client: Green Leaf Cafe. Green Leaf Cafe needs a professional website where customers can see the menu, learn about the cafe, find its location and contact the business. Requirements: responsive website, navigation, hero section, menu, about section, contact section, working form, JavaScript interaction, GitHub repository, Vercel deployment, SEO basics, sitemap, robots.txt, Search Console, Analytics. Build it. This is one of the hardest missions in SkillRun - no step-by-step recipe, just the brief and the standard."
    },
    challenges: [
      {
        id: "ch1",
        title: "Read the brief",
        instructions: "Write requirements(brief) that returns the technical requirements from the brief: responsive, navigation, hero, menu, about, contact, working form, JavaScript interaction, GitHub repository, Vercel deployment, SEO basics, sitemap, robots.txt, Search Console, Analytics.",
        learning: "The client brief lists the standard. Before you build, list every requirement so nothing is forgotten.",
        example: "function requirements(brief) {\n  return ['responsive', 'navigation', 'hero', 'menu', 'about', 'contact', 'working form', 'JavaScript interaction', 'GitHub repository', 'Vercel deployment', 'SEO basics', 'sitemap', 'robots.txt', 'Search Console', 'Analytics'];\n}",
        starter: "function requirements(brief) {\n  // every technical requirement from the brief\n  return [];\n}",
        test: "function t() {\n  var need = ['responsive', 'navigation', 'hero', 'menu', 'working form', 'JavaScript interaction', 'GitHub repository', 'Vercel deployment', 'Search Console', 'Analytics'];\n  var r = requirements('Green Leaf Cafe brief');\n  for (var i = 0; i < need.length; i++) { if (r.indexOf(need[i]) === -1) return { passed: false, message: 'Missing requirement: ' + need[i] }; }\n  return { passed: true, message: 'The brief is fully mapped.' };\n}",
        hints: [
          "Fifteen requirements in the brief.",
          "Form, JavaScript, GitHub, Vercel, SEO, console, analytics.",
          "Return them as an array."
        ],
        solution: "function requirements(brief) {\n  return ['responsive', 'navigation', 'hero', 'menu', 'about', 'contact', 'working form', 'JavaScript interaction', 'GitHub repository', 'Vercel deployment', 'SEO basics', 'sitemap', 'robots.txt', 'Search Console', 'Analytics'];\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write launch(client) that returns the full verified report: { client, repo (github.com URL), deployment (vercel.app URL), responsive: true, form: { fields: [name, email, message], endpoint }, interaction: { name, working: true }, seo: { title, description, headings, alt, sitemap, robots: true }, console: { property, sitemapSubmitted: true }, analytics: { id (G-), connected: true } }.",
      starter: S11_LAUNCH_HELPERS + "function launch(client) {\n  // the complete, truthful launch report\n  return null;\n}",
      test: "function t() {\n  var r = launch('Green Leaf Cafe');\n  if (!r || r.client !== 'Green Leaf Cafe') return { passed: false, message: 'Should name the client.' };\n  if (!r.repo || r.repo.indexOf('github.com') === -1) return { passed: false, message: 'Repo must be a github.com URL.' };\n  if (!r.deployment || r.deployment.indexOf('vercel.app') === -1) return { passed: false, message: 'Deployment must be a vercel.app URL.' };\n  if (r.responsive !== true) return { passed: false, message: 'Must be responsive.' };\n  if (!r.form || r.form.fields.indexOf('email') === -1 || r.form.fields.indexOf('message') === -1 || !r.form.endpoint) return { passed: false, message: 'Form needs email, message and an endpoint.' };\n  if (!r.interaction || r.interaction.working !== true) return { passed: false, message: 'One JavaScript interaction, working.' };\n  if (!r.seo || r.seo.sitemap !== true || r.seo.robots !== true || r.seo.title !== true) return { passed: false, message: 'SEO basics: title, sitemap, robots.' };\n  if (!r.console || r.console.sitemapSubmitted !== true) return { passed: false, message: 'Search Console with the sitemap submitted.' };\n  if (!r.analytics || !/^G-[A-Z0-9]{6,10}$/.test(r.analytics.id || '') || r.analytics.connected !== true) return { passed: false, message: 'Analytics connected with a G- ID.' };\n  return { passed: true, message: 'FINAL BOSS DOWN - you built and launched a real website. You are a web developer!' };\n}",
      hints: [
        "Every field in the report must be real and verified.",
        "repo github.com, deployment vercel.app.",
        "analytics id starts with G-."
      ],
      solution: S11_LAUNCH_HELPERS + "function launch(client) {\n  return { client: client, repo: 'https://github.com/YOU/greenleaf', deployment: 'https://greenleaf.vercel.app', responsive: true, form: { fields: ['name', 'email', 'message'], endpoint: 'Web3Forms' }, interaction: { name: 'menu', working: true }, seo: { title: true, description: true, headings: true, alt: true, sitemap: true, robots: true }, console: { property: 'https://greenleaf.vercel.app', sitemapSubmitted: true }, analytics: { id: 'G-ABC123XYZ', connected: true } };\n}",
      unlock: "Build & Launch"
    },
    unlock: "Build & Launch"
  }
]);

/* ============================================================
   Developer Gift (developer-gift)
   Bonus outside the core course: Web Developer -> Developer.
   Terminal skills, git from the CLI, and the free AI agent
   reward (referral lives in the app only, never the public
   website). Builds are self-contained (prepend helpers).
   ============================================================ */

var GIFT_GIT_HELPERS = [
  "function initRepo() { return { files: {}, staged: [], commits: [], pushed: false }; }",
  "function addFile(r, name, content) { r.files[name] = content; return r; }",
  "function gitAddAll(r) { r.staged = Object.keys(r.files); return r; }",
  "function gitCommit(r, msg) { r.commits.push({ msg: msg, files: r.staged.slice() }); r.staged = []; return r; }",
  "function gitPush(r) { r.pushed = true; return r; }"
].join('\n') + '\n';

registerMissions([
  {
    id: "gift-terminal",
    num: 102,
    title: "Meet the Terminal",
    tagline: "Your first commands: pwd, ls, cd.",
    skill: "Developer",
    xp: 150,
    type: "js",
    icon: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M7 9l3 2-3 2M12 13h5"/>',
    meta: { kind: "normal", series: "developer-gift", order: 1 },
    terminal: [
      "pwd                    # where am I?",
      "/home/runner",
      "ls                     # what is here?",
      "cd docs                # move into docs",
      "cd ..                  # back up one level",
      "pwd                    # /home/runner"
    ],
    briefing: {
      objective: "Learn the three commands that start every developer session.",
      body: "You built websites through the browser. Now see what developers do from the terminal. pwd prints where you are, ls lists what is here, cd moves you around. Three commands, then you are home."
    },
    challenges: [
      {
        id: "ch1",
        title: "Where am I?",
        instructions: "Write pwd() that returns the current directory as '/home/runner'.",
        learning: "pwd = print working directory. It tells you where you are in the filesystem.",
        example: "function pwd() {\n  return '/home/runner';\n}",
        starter: "function pwd() {\n  // return the current directory\n  return '';\n}",
        test: "function t() {\n  var d = pwd();\n  if (d !== '/home/runner') return { passed: false, message: 'pwd should return /home/runner.' };\n  return { passed: true, message: 'You know where you are!' };\n}",
        hints: [
          "Return a string.",
          "Start with a slash.",
          "'/home/runner'"
        ],
        solution: "function pwd() {\n  return '/home/runner';\n}"
      },
      {
        id: "ch2",
        title: "What is here?",
        instructions: "Write ls(dir) that returns the items in a directory as an array.",
        learning: "ls = list. It shows the files and folders in the current directory.",
        example: "function ls(dir) {\n  return ['index.html', 'docs', 'style.css'];\n}",
        starter: "function ls(dir) {\n  // return the items in the directory\n  return [];\n}",
        test: "function t() {\n  var items = ls('/home/runner');\n  if (!Array.isArray(items) || items.length < 2) return { passed: false, message: 'Should list several items.' };\n  if (items.indexOf('docs') === -1) return { passed: false, message: 'There should be a docs folder.' };\n  return { passed: true, message: 'You can see what is here!' };\n}",
        hints: [
          "Return an array.",
          "Include a docs folder.",
          "At least 2 items."
        ],
        solution: "function ls(dir) {\n  return ['index.html', 'docs', 'style.css'];\n}"
      },
      {
        id: "ch3",
        title: "Move around",
        instructions: "Write cdPath(current, target) that returns the new path: '..' strips the last segment, a path starting with '/' is absolute, otherwise append to current.",
        learning: "cd = change directory. '..' is the parent folder, so /home/runner/docs with '..' becomes /home/runner.",
        example: "function cdPath(current, target) {\n  if (target === '..') {\n    var parts = current.split('/');\n    parts.pop();\n    return parts.join('/') || '/';\n  }\n  if (target.charAt(0) === '/') { return target; }\n  return current + '/' + target;\n}",
        starter: "function cdPath(current, target) {\n  // handle '..', absolute paths, and appends\n  return '';\n}",
        test: "function t() {\n  if (cdPath('/home/runner', 'docs') !== '/home/runner/docs') return { passed: false, message: 'cd docs from /home/runner should give /home/runner/docs.' };\n  if (cdPath('/home/runner/docs', '..') !== '/home/runner') return { passed: false, message: 'cd .. should go back one level.' };\n  if (cdPath('/home/runner', '/var') !== '/var') return { passed: false, message: 'An absolute path replaces the current one.' };\n  return { passed: true, message: 'You can navigate!' };\n}",
        hints: [
          "'..' strips the last segment.",
          "Leading '/' means absolute.",
          "Otherwise join with '/'."
        ],
        solution: "function cdPath(current, target) {\n  if (target === '..') {\n    var parts = current.split('/');\n    parts.pop();\n    return parts.join('/') || '/';\n  }\n  if (target.charAt(0) === '/') { return target; }\n  return current + '/' + target;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write navigate() that returns { home: pwd(), items: ls('/home/runner'), docs: cdPath('/home/runner', 'docs'), back: cdPath('/home/runner/docs', '..') }.",
      starter: "function navigate() {\n  // combine pwd, ls and cd\n  return null;\n}",
      test: "function t() {\n  var n = navigate();\n  if (!n || n.home !== '/home/runner') return { passed: false, message: 'home should be /home/runner.' };\n  if (!n.items || n.items.indexOf('docs') === -1) return { passed: false, message: 'items should list the docs folder.' };\n  if (n.docs !== '/home/runner/docs') return { passed: false, message: 'docs should be /home/runner/docs.' };\n  if (n.back !== '/home/runner') return { passed: false, message: 'going .. from docs should return to /home/runner.' };\n  return { passed: true, message: 'You just navigated the filesystem like a developer!' };\n}",
      hints: [
        "Reuse pwd(), ls() and cdPath().",
        "back uses '..'.",
        "Return the four fields."
      ],
      solution: "function navigate() {\n  return { home: '/home/runner', items: ['index.html', 'docs', 'style.css'], docs: '/home/runner/docs', back: '/home/runner' };\n}",
      unlock: "Developer"
    },
    unlock: "Developer"
  },

  {
    id: "gift-git-cli",
    num: 103,
    title: "Git From the Terminal",
    tagline: "The same git you learned - now from the CLI.",
    skill: "Developer",
    xp: 170,
    type: "js",
    icon: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M7 9l3 2-3 2M12 13h5M7 20h10"/>',
    meta: { kind: "normal", series: "developer-gift", order: 2 },
    terminal: [
      "git status              # what changed?",
      "git add .               # stage everything",
      "git commit -m \"first commit\"",
      "git push                # send to GitHub",
      "git status              # clean!"
    ],
    briefing: {
      objective: "Run the git workflow from the terminal.",
      body: "This is the same git you mastered through GitHub in Series 7, now as commands. git status shows what changed, git add . stages everything, git commit saves a version, git push sends it to GitHub. Same ideas, new home: the terminal."
    },
    challenges: [
      {
        id: "ch1",
        title: "What changed?",
        instructions: "Write gitStatus(repo) that returns { staged, untracked } - staged lists repo.staged, untracked lists files in repo.files that are NOT staged.",
        learning: "git status splits your work into two piles: what is staged and ready to commit, and untracked files git has never seen.",
        example: "function gitStatus(repo) {\n  var untracked = [];\n  var names = Object.keys(repo.files);\n  for (var i = 0; i < names.length; i++) { if (repo.staged.indexOf(names[i]) === -1) { untracked.push(names[i]); } }\n  return { staged: repo.staged.slice(), untracked: untracked };\n}",
        starter: "function gitStatus(repo) {\n  // split files into staged and untracked\n  return null;\n}",
        test: "function t() {\n  var r = { files: { a: 1, b: 2, c: 3 }, staged: ['a'] };\n  var s = gitStatus(r);\n  if (s.staged.indexOf('a') === -1 || s.staged.length !== 1) return { passed: false, message: 'staged should list the staged files.' };\n  if (s.untracked.indexOf('b') === -1 || s.untracked.indexOf('c') === -1) return { passed: false, message: 'untracked should list the unstaged files.' };\n  return { passed: true, message: 'You can read git status!' };\n}",
        hints: [
          "Loop over Object.keys(repo.files).",
          "A file not in staged is untracked.",
          "Return both lists."
        ],
        solution: "function gitStatus(repo) {\n  var untracked = [];\n  var names = Object.keys(repo.files);\n  for (var i = 0; i < names.length; i++) { if (repo.staged.indexOf(names[i]) === -1) { untracked.push(names[i]); } }\n  return { staged: repo.staged.slice(), untracked: untracked };\n}"
      },
      {
        id: "ch2",
        title: "Stage everything",
        instructions: "Write gitAddAll(repo) that sets repo.staged to all file names and returns repo.staged.",
        learning: "git add . stages every file. After this, everything is ready for the commit.",
        example: "function gitAddAll(repo) {\n  repo.staged = Object.keys(repo.files);\n  return repo.staged;\n}",
        starter: "function gitAddAll(repo) {\n  // stage every file\n  return [];\n}",
        test: "function t() {\n  var r = { files: { a: 1, b: 2 }, staged: [] };\n  var s = gitAddAll(r);\n  if (s.indexOf('a') === -1 || s.indexOf('b') === -1 || s.length !== 2) return { passed: false, message: 'Should stage every file.' };\n  return { passed: true, message: 'Everything is staged!' };\n}",
        hints: [
          "Object.keys(repo.files).",
          "Assign to repo.staged.",
          "Return it."
        ],
        solution: "function gitAddAll(repo) {\n  repo.staged = Object.keys(repo.files);\n  return repo.staged;\n}"
      },
      {
        id: "ch3",
        title: "Commit it",
        instructions: "Write gitCommit(repo, msg) that pushes { msg, files: repo.staged.slice() } onto repo.commits, clears repo.staged, and returns the commit count.",
        learning: "git commit -m \"message\" saves a version. The commit records which files were included.",
        example: "function gitCommit(repo, msg) {\n  repo.commits.push({ msg: msg, files: repo.staged.slice() });\n  repo.staged = [];\n  return repo.commits.length;\n}",
        starter: "function gitCommit(repo, msg) {\n  // save the staged files as a commit\n  return 0;\n}",
        test: "function t() {\n  var r = { files: { a: 1 }, staged: ['a'], commits: [] };\n  var n = gitCommit(r, 'init');\n  if (n !== 1 || r.commits[0].msg !== 'init') return { passed: false, message: 'Should record a commit with the message.' };\n  if (r.commits[0].files.indexOf('a') === -1) return { passed: false, message: 'The commit should list its files.' };\n  if (r.staged.length !== 0) return { passed: false, message: 'Staging clears after a commit.' };\n  return { passed: true, message: 'Version saved!' };\n}",
        hints: [
          "push { msg, files }.",
          "Clear staged.",
          "Return the count."
        ],
        solution: "function gitCommit(repo, msg) {\n  repo.commits.push({ msg: msg, files: repo.staged.slice() });\n  repo.staged = [];\n  return repo.commits.length;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write gitShip() that inits a repo, adds 'index.html' and 'style.css', stages everything, commits 'first commit', pushes, and returns the repo - which must be pushed with exactly one commit.",
      starter: GIFT_GIT_HELPERS + "function gitShip() {\n  // init -> add files -> commit -> push\n  return null;\n}",
      test: "function t() {\n  var r = gitShip();\n  if (!r || r.pushed !== true) return { passed: false, message: 'Should be pushed to GitHub.' };\n  if (!r.files || r.files['index.html'] === undefined) return { passed: false, message: 'Should contain index.html.' };\n  if (r.commits.length !== 1 || r.commits[0].msg !== 'first commit') return { passed: false, message: 'Exactly one commit with the right message.' };\n  return { passed: true, message: 'Shipped from the terminal - git is yours!' };\n}",
      hints: [
        "initRepo() first.",
        "addFile, gitAddAll, gitCommit, gitPush.",
        "One commit, pushed."
      ],
      solution: GIFT_GIT_HELPERS + "function gitShip() {\n  var r = initRepo();\n  addFile(r, 'index.html', '<h1>Portfolio</h1>');\n  addFile(r, 'style.css', 'body{}');\n  gitAddAll(r);\n  gitCommit(r, 'first commit');\n  gitPush(r);\n  return r;\n}",
      unlock: "Developer"
    },
    unlock: "Developer"
  },

  {
    id: "gift-ai-agent",
    num: 104,
    title: "Your Free AI Agent",
    tagline: "A developer tool, unlocked as your reward.",
    skill: "Developer",
    xp: 250,
    type: "js",
    icon: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M7 9l3 2-3 2M12 13h5M10 21h4"/><circle cx="17" cy="18" r="3"/>',
    meta: { kind: "normal", series: "developer-gift", order: 3 },
    terminal: [
      "# SkillRun Web Development Complete!",
      "# You unlocked a free developer tool.",
      "agent \"add a navbar\"     # your free AI agent",
      "git diff                  # review its work",
      "# Claim it with your SkillRun referral code."
    ],
    terminalLink: "https://freebuff.com/?ref=ref-f2f77e07-fee5-4b8d-a9a9-ffe710ff3c5a",
    terminalLinkLabel: "Claim Your Free AI Agent →",
    briefing: {
      objective: "Direct an AI agent from the terminal and claim your free developer tool.",
      body: "SkillRun Web Development Complete. You have unlocked a free developer tool - an AI agent you control from the terminal. Give it a task, it reads your repo, writes code, and hands you a diff to review. This is a bonus reward for finishing the course: use SkillRun's referral code to claim it."
    },
    challenges: [
      {
        id: "ch1",
        title: "Give it a task",
        instructions: "Write runAgent(agent, task) that sets agent.task = task, agent.done = true, and returns the agent.",
        learning: "You steer the agent with a plain-English task, exactly like a junior developer.",
        example: "function runAgent(agent, task) {\n  agent.task = task;\n  agent.done = true;\n  return agent;\n}",
        starter: "function runAgent(agent, task) {\n  // assign the task and mark it done\n  return agent;\n}",
        test: "function t() {\n  var a = { done: false };\n  runAgent(a, 'add a navbar');\n  if (a.task !== 'add a navbar' || a.done !== true) return { passed: false, message: 'Should store the task and mark it done.' };\n  return { passed: true, message: 'The agent is on the job!' };\n}",
        hints: [
          "Set both fields.",
          "Return the agent.",
          "One line each."
        ],
        solution: "function runAgent(agent, task) {\n  agent.task = task;\n  agent.done = true;\n  return agent;\n}"
      },
      {
        id: "ch2",
        title: "Summarize the work",
        instructions: "Write agentSummary(agent) that returns { task: agent.task, done: agent.done === true, files: agent.files }.",
        learning: "Before you claim anything, review what the agent did. That review is your job.",
        example: "function agentSummary(agent) {\n  return { task: agent.task, done: agent.done === true, files: agent.files || [] };\n}",
        starter: "function agentSummary(agent) {\n  // what did the agent do?\n  return null;\n}",
        test: "function t() {\n  var a = { task: 'add footer', done: true, files: ['footer.html'] };\n  var s = agentSummary(a);\n  if (!s || s.task !== 'add footer' || s.done !== true) return { passed: false, message: 'Should summarize the task and status.' };\n  if (!s.files || s.files.length !== 1) return { passed: false, message: 'Should list the files the agent touched.' };\n  return { passed: true, message: 'You reviewed what the agent did!' };\n}",
        hints: [
          "Copy task and done.",
          "files falls back to [].",
          "Return an object."
        ],
        solution: "function agentSummary(agent) {\n  return { task: agent.task, done: agent.done === true, files: agent.files || [] };\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write claimReward() that returns { code: 'ref-f2f77e07-fee5-4b8d-a9a9-ffe710ff3c5a', link: 'https://freebuff.com/?ref=ref-f2f77e07-fee5-4b8d-a9a9-ffe710ff3c5a', claimed: true } - your reward for finishing SkillRun Web Development.",
      starter: "function claimReward() {\n  // your SkillRun referral code and claim link\n  return null;\n}",
      test: "function t() {\n  var r = claimReward();\n  if (!r || !r.code || r.code.length < 5) return { passed: false, message: 'Include the SkillRun referral code.' };\n  if (!r.link || r.link.indexOf('https://') !== 0) return { passed: false, message: 'The claim link should be a real URL.' };\n  if (r.claimed !== true) return { passed: false, message: 'Mark it claimed.' };\n  return { passed: true, message: 'Reward claimed - welcome to the world of developers!' };\n}",
      hints: [
        "code = the referral code.",
        "link = the full referral URL.",
        "claimed: true."
      ],
      solution: "function claimReward() {\n  return { code: 'ref-f2f77e07-fee5-4b8d-a9a9-ffe710ff3c5a', link: 'https://freebuff.com/?ref=ref-f2f77e07-fee5-4b8d-a9a9-ffe710ff3c5a', claimed: true };\n}",
      unlock: "Developer"
    },
    unlock: "Developer"
  }
]);