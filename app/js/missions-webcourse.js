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
        target: "<p>My favourite website: <a href=\"https://example.com\">example.com</a></p>",
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
        solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <p>My favourite website: <a href=\"https://example.com\">example.com</a></p>\n</body>\n</html>"
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
      solution: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Void City</h1>\n  <p>Above the line.</p>\n  <hr>\n  <p>Below the line.</p>\n  <img src=\"image.jpg\" alt=\"A picture\">\n</body>\n</html>",
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
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Profile</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n<body>\n  <header><h1>Your Name</h1></header>\n  <nav><a href=\"#\">Home</a></nav>\n  <main>\n    <section><h2>About</h2><p>I am <strong>learning</strong> to build websites.</p></section>\n    <article><h2>My Skills</h2><ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul></article>\n  </main>\n  <footer><p>Find me at <a href=\"#\">my page</a></p></footer>\n</body>\n</html>",
      unlock: "HTML Foundations"
    },
    unlock: "HTML Foundations"
  }
]);