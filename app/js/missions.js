/* ============================================================
   SkillRun - Mission data
   Each mission: Goal -> Learn -> Practice -> Build -> Complete -> Unlock
   Every challenge has instructions, a mini-lesson, starter code,
   an auto-check, progressive hints (1/2/3) and a solution.
   ============================================================ */

var SKILL_TREE = {
  "HTML": ["Text", "Links", "Images", "Lists", "Forms"],
  "CSS": ["Colors", "Typography", "Layout", "Responsive"],
  "JavaScript": ["Variables", "Conditions", "Functions", "Events", "DOM"],
  "APIs": ["Fetch", "JSON", "Async"],
  "Backend": ["Requests", "Data", "Deploy"],
  "Full Stack": ["Combine", "Build", "Ship"]
};

var SKILL_ORDER = ["HTML", "CSS", "JavaScript", "APIs", "Backend", "Full Stack"];

var MISSIONS = [
  {
    id: "your-first-page",
    num: 1,
    title: "Your First Page",
    tagline: "Create a webpage introducing yourself.",
    skill: "HTML",
    xp: 100,
    type: "html",
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h5"/>',
    briefing: {
      objective: "Create a webpage introducing yourself.",
      body: "You are going to build your first real webpage. It starts as a plain text document and becomes a page once you add tags the browser understands. By the end of this mission you will have a page with a heading, a paragraph, a sub-heading and a link \u2014 and you will know exactly why each tag does what it does."
    },
    challenges: [
      {
        id: "ch1",
        title: "Add a main heading",
        instructions: "Your webpage needs a main heading. Add your name inside an <h1> tag.",
        learning: "HTML uses <h1> for the main heading of a page. It is the biggest text on the page. Tags go inside angle brackets: <tag>content</tag>.",
        example: "<h1>Your Name</h1>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n\n</body>\n</html>",
        check: "(function(){\n  try {\n    var h1 = document.querySelector('h1');\n    if (!h1) return { passed: false, message: 'Add a <h1> tag inside the body.' };\n    if (!h1.textContent.trim()) return { passed: false, message: 'Put your name inside the <h1> tags.' };\n    return { passed: true, message: 'Great! Your page now has a main heading.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "A heading tag looks like <h1>words</h1>.",
          "The <h1> tags wrap the text: an opening tag before, a closing tag (with a /) after.",
          "Try: <h1>Sara</h1> \u2014 put it between <body> and </body>."
        ],
        solution: "<h1>Sara</h1>"
      },
      {
        id: "ch2",
        title: "Introduce yourself",
        instructions: "Add a <p> paragraph below the heading that says who you are.",
        learning: "<p> creates a paragraph. A page can have many paragraphs. The closing tag </p> ends it.",
        example: "<p>I am learning to build things.</p>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Sara</h1>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var p = document.querySelector('p');\n    if (!p) return { passed: false, message: 'Add a <p> paragraph.' };\n    if (!p.textContent.trim()) return { passed: false, message: 'Write something inside the paragraph.' };\n    var h1 = document.querySelector('h1');\n    if (!h1) return { passed: false, message: 'Keep your <h1> heading too.' };\n    return { passed: true, message: 'Nice! A heading and a paragraph.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "A paragraph is made with <p> and </p>.",
          "Put it after your </h1> closing tag.",
          "Try: <p>I am a student who loves to build.</p>"
        ],
        solution: "<h1>Sara</h1>\n<p>I am a student who loves to build.</p>"
      },
      {
        id: "ch3",
        title: "Add a sub-heading",
        instructions: "Add an <h2> sub-heading. Use it for a section like 'My Hobbies'.",
        learning: "<h2> is a smaller heading than <h1>. Use h1 for the page title and h2 for sections.",
        example: "<h2>My Hobbies</h2>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Sara</h1>\n  <p>I am a student who loves to build.</p>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var h2 = document.querySelector('h2');\n    if (!h2) return { passed: false, message: 'Add an <h2> sub-heading.' };\n    if (!h2.textContent.trim()) return { passed: false, message: 'Give the sub-heading some text.' };\n    return { passed: true, message: 'Perfect! You have a structured page now.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "h2 works exactly like h1 but is smaller.",
          "Pick a section name, for example 'My Hobbies' or 'About Me'.",
          "Try: <h2>My Hobbies</h2> under the paragraph."
        ],
        solution: "<h1>Sara</h1>\n<p>I am a student who loves to build.</p>\n<h2>My Hobbies</h2>\n<p>I like coding, games and music.</p>"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Create a complete introduction page. It must include:\n\n\u2022 A main <h1> heading with your name\n\u2022 A <p> paragraph about yourself\n\u2022 An <h2> sub-heading for a section\n\u2022 A second <p> paragraph inside that section",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n\n</body>\n</html>",
      check: "(function(){\n  try {\n    var h1 = document.querySelector('h1');\n    if (!h1 || !h1.textContent.trim()) return { passed: false, message: 'Add a main <h1> heading with your name.' };\n    var h2 = document.querySelector('h2');\n    if (!h2 || !h2.textContent.trim()) return { passed: false, message: 'Add an <h2> sub-heading.' };\n    var ps = document.querySelectorAll('p');\n    if (ps.length < 2) return { passed: false, message: 'Add two <p> paragraphs (one about you, one for the section).' };\n    for (var i = 0; i < ps.length; i++) { if (!ps[i].textContent.trim()) return { passed: false, message: 'Every paragraph needs text.' }; }\n    return { passed: true, message: 'Excellent! You just built a full page from scratch.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "Start with <h1>Your Name</h1>.",
        "Each <p> tag needs text and a closing </p>.",
        "Use <h2>Section Name</h2> then a paragraph about it."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Sara</h1>\n  <p>I am a student who loves to build.</p>\n  <h2>My Hobbies</h2>\n  <p>I like coding, games and music.</p>\n</body>\n</html>"
    },
    unlock: "HTML Foundations"
  },

  {
    id: "tell-your-story",
    num: 2,
    title: "Tell Your Story",
    tagline: "More HTML: lists, images and links.",
    skill: "HTML",
    xp: 120,
    type: "html",
    icon: '<path d="M3 3h18v18H3z"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5-5 5M21 21H3l6-6"/>',
    briefing: {
      objective: "Build a richer page using lists, images and links.",
      body: "Text headings are only the start. Real pages use lists to organise information, images to show things, and links to move between pages. In this mission you will add all three."
    },
    challenges: [
      {
        id: "ch1",
        title: "Make a list",
        instructions: "Create a list of your favourite things using <ul> and <li>.",
        learning: "<ul> starts an unordered (bulleted) list. Each item goes inside <li>...</li>.",
        example: "<ul>\n  <li>Pizza</li>\n  <li>Code</li>\n</ul>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>My Favourites</h1>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var ul = document.querySelector('ul');\n    if (!ul) return { passed: false, message: 'Add a <ul> list.' };\n    var lis = ul.querySelectorAll('li');\n    if (lis.length < 2) return { passed: false, message: 'Add at least two <li> items.' };\n    for (var i = 0; i < lis.length; i++) { if (!lis[i].textContent.trim()) return { passed: false, message: 'Every <li> needs text.' }; }\n    return { passed: true, message: 'Nice list! Bullets and all.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "A list is <ul> with <li> items inside.",
          "Each item is its own <li>text</li>.",
          "Put at least two <li> elements between <ul> and </ul>."
        ],
        solution: "<h1>My Favourites</h1>\n<ul>\n  <li>Pizza</li>\n  <li>Code</li>\n</ul>"
      },
      {
        id: "ch2",
        title: "Add an image",
        instructions: "Add an image with the <img> tag. Use src=\"https://placehold.co/200\" and alt text.",
        learning: "<img> shows an image. It needs src (the address) and alt (text shown if the image fails). Note: <img> has no closing tag.",
        example: "<img src=\"https://placehold.co/200\" alt=\"a placeholder\">",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>My Favourites</h1>\n  <ul>\n    <li>Pizza</li>\n    <li>Code</li>\n  </ul>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var img = document.querySelector('img');\n    if (!img) return { passed: false, message: 'Add an <img> tag.' };\n    if (!img.getAttribute('src')) return { passed: false, message: 'Give the image a src attribute.' };\n    if (!img.getAttribute('alt')) return { passed: false, message: 'Add an alt attribute (screen readers use it).' };\n    return { passed: true, message: 'Picture perfect! Your page has an image.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "The image tag needs an attribute: src=\"URL\".",
          "Add alt=\"something\" so it is accessible.",
          "Try: <img src=\"https://placehold.co/200\" alt=\"my picture\">"
        ],
        solution: "<img src=\"https://placehold.co/200\" alt=\"my picture\">"
      },
      {
        id: "ch3",
        title: "Add a link",
        instructions: "Add a link using <a href=\"https://skillrun.com\">text</a>.",
        learning: "<a> creates a link. The href attribute holds the address. The text between the tags is what people click.",
        example: "<a href=\"https://skillrun.com\">Visit SkillRun</a>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>My Favourites</h1>\n  <ul>\n    <li>Pizza</li>\n    <li>Code</li>\n  </ul>\n  <img src=\"https://placehold.co/200\" alt=\"my picture\">\n</body>\n</html>",
        check: "(function(){\n  try {\n    var a = document.querySelector('a');\n    if (!a) return { passed: false, message: 'Add an <a> link.' };\n    if (!a.getAttribute('href')) return { passed: false, message: 'Give the link an href attribute.' };\n    if (!a.textContent.trim()) return { passed: false, message: 'The link needs clickable text.' };\n    return { passed: true, message: 'Linked up! Your page connects to the world now.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "A link is <a href=\"URL\">text</a>.",
          "href is the attribute holding the destination.",
          "Try: <a href=\"https://skillrun.com\">Visit SkillRun</a>"
        ],
        solution: "<a href=\"https://skillrun.com\">Visit SkillRun</a>"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Build a page about yourself. It must include:\n\n\u2022 An <h1> heading\n\u2022 A <ul> list with at least 3 items\n\u2022 An <img> with src and alt\n\u2022 An <a> link with href and text",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>About Me</title>\n</head>\n<body>\n\n</body>\n</html>",
      check: "(function(){\n  try {\n    if (!document.querySelector('h1') || !document.querySelector('h1').textContent.trim()) return { passed: false, message: 'Add an <h1> heading.' };\n    var ul = document.querySelector('ul');\n    if (!ul || ul.querySelectorAll('li').length < 3) return { passed: false, message: 'Add a <ul> with at least 3 <li> items.' };\n    var img = document.querySelector('img');\n    if (!img || !img.getAttribute('src') || !img.getAttribute('alt')) return { passed: false, message: 'Add an <img> with both src and alt.' };\n    var a = document.querySelector('a');\n    if (!a || !a.getAttribute('href') || !a.textContent.trim()) return { passed: false, message: 'Add an <a> link with href and text.' };\n    return { passed: true, message: 'Outstanding! Lists, images and links \u2014 a real page.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "Plan four parts: heading, list, image, link.",
        "An image is <img src=\"URL\" alt=\"text\"> (no closing tag).",
        "A link is <a href=\"URL\">text</a>."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>About Me</title>\n</head>\n<body>\n  <h1>About Me</h1>\n  <ul>\n    <li>I love to code</li>\n    <li>I play games</li>\n    <li>I listen to music</li>\n  </ul>\n  <img src=\"https://placehold.co/200\" alt=\"my picture\">\n  <a href=\"https://skillrun.com\">Visit SkillRun</a>\n</body>\n</html>"
    },
    unlock: "HTML Structure"
  },

  {
    id: "make-it-yours",
    num: 3,
    title: "Make It Yours",
    tagline: "Basic CSS: colors and typography.",
    skill: "CSS",
    xp: 130,
    type: "html",
    icon: '<circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"/><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor"/><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor"/><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
    briefing: {
      objective: "Style your page with colors and fonts.",
      body: "HTML decides what a page says. CSS decides how it looks. In this mission you will write your first CSS rules \u2014 changing colors and fonts \u2014 so your page stops looking like a blank document and starts looking like a real website."
    },
    challenges: [
      {
        id: "ch1",
        title: "Style with color",
        instructions: "Make the <h1> text green (#30d05c). Add a <style> block in the head.",
        learning: "CSS lives in a <style> tag inside <head>. A rule has a selector (what to style) and a declaration (what to change): selector { property: value; }",
        example: "<style>\n  h1 { color: #30d05c; }\n</style>",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Styled</title>\n</head>\n<body>\n  <h1>Hello, I am styled!</h1>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var h1 = document.querySelector('h1');\n    if (!h1) return { passed: false, message: 'Keep your <h1> heading.' };\n    var color = window.getComputedStyle(h1).color;\n    var rgb = color.match(/\\d+/g);\n    if (!rgb) return { passed: false, message: 'Could not read the color of your heading.' };\n    var isGreen = rgb[0] < 100 && rgb[1] > 150 && rgb[2] < 130;\n    if (!isGreen) return { passed: false, message: 'Set the h1 color to green (#30d05c).' };\n    return { passed: true, message: 'You styled your first element! Green and glowing.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "CSS rules go inside <style> ... </style> in the head.",
          "A rule looks like: h1 { color: #30d05c; }",
          "color: sets text color. Use the exact green #30d05c."
        ],
        solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Styled</title>\n  <style>\n    h1 { color: #30d05c; }\n  </style>\n</head>\n<body>\n  <h1>Hello, I am styled!</h1>\n</body>\n</html>"
      },
      {
        id: "ch2",
        title: "Change the font",
        instructions: "Set the whole page body font to a monospace style using font-family.",
        learning: "font-family changes the typeface. Apply it to body so every element inherits it. Use a monospace family to look like a developer.",
        example: "body { font-family: monospace; }",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Styled</title>\n  <style>\n    h1 { color: #30d05c; }\n  </style>\n</head>\n<body>\n  <h1>Hello, I am styled!</h1>\n  <p>Now change my font.</p>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var body = document.body;\n    var family = window.getComputedStyle(body).fontFamily || '';\n    if (!/monospace/i.test(family)) return { passed: false, message: 'Set body { font-family: monospace; }.' };\n    return { passed: true, message: 'Your text now looks like a developer wrote it!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Style the body tag so everything inherits it.",
          "font-family: monospace; gives that code look.",
          "Add it inside the <style> block: body { font-family: monospace; }"
        ],
        solution: "body { font-family: monospace; }"
      },
      {
        id: "ch3",
        title: "Background color",
        instructions: "Give the page a dark background using background-color on body.",
        learning: "background-color fills the area behind an element. body covers the whole page, so styling body changes the whole page background.",
        example: "body { background-color: #0a0a0a; }",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Styled</title>\n  <style>\n    h1 { color: #30d05c; }\n    body { font-family: monospace; }\n  </style>\n</head>\n<body>\n  <h1>Hello, I am styled!</h1>\n  <p>Change my background.</p>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var bg = window.getComputedStyle(document.body).backgroundColor || '';\n    var rgb = bg.match(/\\d+/g);\n    if (!rgb) return { passed: false, message: 'Set a background-color on body.' };\n    var isDark = Number(rgb[0]) < 40 && Number(rgb[1]) < 40 && Number(rgb[2]) < 40;\n    if (!isDark) return { passed: false, message: 'Use a dark background like #0a0a0a.' };\n    return { passed: true, message: 'Dark mode! Your page looks sleek now.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Add background-color to the body rule.",
          "Use a dark value such as #0a0a0a.",
          "Your body rule should now have font-family AND background-color."
        ],
        solution: "body { font-family: monospace; background-color: #0a0a0a; }"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Style a page any way you like. It must include:\n\n\u2022 A <style> block in the head\n\u2022 The <h1> colored green (#30d05c)\n\u2022 The body font set to monospace\n\u2022 A dark background-color on body\n\u2022 At least one <p> paragraph",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Styled</title>\n</head>\n<body>\n  <h1>My Styled Page</h1>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var h1 = document.querySelector('h1');\n    if (!h1) return { passed: false, message: 'Keep an <h1> heading.' };\n    var c = window.getComputedStyle(h1).color.match(/\\d+/g);\n    if (!c || !(c[1] > 150)) return { passed: false, message: 'Color the h1 green (#30d05c).' };\n    var fam = window.getComputedStyle(document.body).fontFamily || '';\n    if (!/monospace/i.test(fam)) return { passed: false, message: 'Set body font-family to monospace.' };\n    var bg = window.getComputedStyle(document.body).backgroundColor.match(/\\d+/g);\n    if (!bg || Number(bg[0]) > 40) return { passed: false, message: 'Use a dark body background (e.g. #0a0a0a).' };\n    if (!document.querySelector('p')) return { passed: false, message: 'Add a <p> paragraph.' };\n    return { passed: true, message: 'You styled a whole page by yourself!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "Put one <style> block in the head with three rules.",
        "h1 { color: #30d05c; }  body { font-family: monospace; background-color: #0a0a0a; }",
        "Don't forget a <p> with some text."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Styled</title>\n  <style>\n    h1 { color: #30d05c; }\n    body { font-family: monospace; background-color: #0a0a0a; }\n  </style>\n</head>\n<body>\n  <h1>My Styled Page</h1>\n  <p>Look at me go!</p>\n</body>\n</html>"
    },
    unlock: "CSS Foundations"
  },

  {
    id: "design-the-interface",
    num: 4,
    title: "Design the Interface",
    tagline: "Layout and responsive design with CSS.",
    skill: "CSS",
    xp: 150,
    type: "html",
    icon: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    briefing: {
      objective: "Arrange elements on the page with layout CSS.",
      body: "So far your elements stack top to bottom. Layout lets you control where things go \u2014 side by side, spaced out, centered \u2014 and makes pages work on phones and screens. This mission introduces flexbox, the workhorse of modern layout."
    },
    challenges: [
      {
        id: "ch1",
        title: "Center a box",
        instructions: "Give the box a max-width of 400px and center it with margin: auto.",
        learning: "max-width stops an element from growing too wide. margin: auto on a block element with a set width centres it horizontally.",
        example: ".box { max-width: 400px; margin: 0 auto; }",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Layout</title>\n  <style>\n    .box {\n      padding: 20px;\n      border: 1px solid #30d05c;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"box\">A centered box</div>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var box = document.querySelector('.box');\n    if (!box) return { passed: false, message: 'Keep a div with class=\"box\".' };\n    var style = window.getComputedStyle(box);\n    var rect = box.getBoundingClientRect();\n    var viewport = document.documentElement.clientWidth;\n    var leftGap = rect.left;\n    var rightGap = viewport - rect.right;\n    if (Math.abs(leftGap - rightGap) > 20) return { passed: false, message: 'Center the box: add margin: 0 auto; and a max-width.' };\n    if (!/auto/.test(style.marginLeft)) return { passed: false, message: 'Use margin: 0 auto; to centre it.' };\n    return { passed: true, message: 'Centred! The box now sits in the middle.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "The box needs a max-width smaller than the screen.",
          "Add margin: 0 auto; to centre a block.",
          "Try: .box { max-width: 400px; margin: 0 auto; }"
        ],
        solution: ".box { max-width: 400px; margin: 0 auto; padding: 20px; border: 1px solid #30d05c; }"
      },
      {
        id: "ch2",
        title: "Side by side",
        instructions: "Make two items sit side by side using flexbox on their container.",
        learning: "display: flex on a container lays its children in a row. justify-content: space-between pushes them to the two ends.",
        example: ".row { display: flex; justify-content: space-between; }",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Layout</title>\n  <style>\n    .row { }\n    .item {\n      width: 120px;\n      padding: 16px;\n      border: 1px solid #30d05c;\n      text-align: center;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"row\">\n    <div class=\"item\">A</div>\n    <div class=\"item\">B</div>\n  </div>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var row = document.querySelector('.row');\n    if (!row) return { passed: false, message: 'Keep a container div with class=\"row\".' };\n    var a = row.querySelectorAll('.item');\n    if (a.length < 2) return { passed: false, message: 'Keep two items with class=\"item\".' };\n    var style = window.getComputedStyle(row);\n    if (style.display !== 'flex') return { passed: false, message: 'Add display: flex; to the .row rule.' };\n    var ra = a[0].getBoundingClientRect();\n    var rb = a[1].getBoundingClientRect();\n    if (Math.abs(ra.top - rb.top) > 20) return { passed: false, message: 'The two items should be on the same row (side by side).' };\n    return { passed: true, message: 'Flexbox magic! Your items sit side by side.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
        hints: [
          "Add display: flex; to the .row rule.",
          "flex children line up horizontally by default.",
          "Optional: add justify-content: space-between; to spread them."
        ],
        solution: ".row { display: flex; justify-content: space-between; }"
      },
      {
        id: "ch3",
        title: "Make it responsive",
        instructions: "Add a media query that stacks the row on small screens.",
        learning: "A media query applies CSS only when the condition is true. @media (max-width: 600px) targets small screens. Inside it, flex-direction: column stacks items.",
        example: "@media (max-width: 600px) {\n  .row { flex-direction: column; }\n}",
        starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Layout</title>\n  <style>\n    .row { display: flex; justify-content: space-between; }\n    .item {\n      width: 120px;\n      padding: 16px;\n      border: 1px solid #30d05c;\n      text-align: center;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"row\">\n    <div class=\"item\">A</div>\n    <div class=\"item\">B</div>\n  </div>\n</body>\n</html>",
        check: "(function(){\n  try {\n    var css = document.documentElement.innerHTML;\n    if (!/@media/.test(css)) return { passed: false, message: 'Add a @media query.' };\n    if (!/max-width:\\s*600/.test(css) && !/max-width:\\s*480/.test(css)) return { passed: false, message: 'Use @media (max-width: 600px) or narrower.' };\n    var row = document.querySelector('.row');\n    var style = window.getComputedStyle(row);\n    if (!/column/.test(style.flexDirection)) return { passed: false, message: 'Inside the query, set .row { flex-direction: column; }.' };\n    return { passed: true, message: 'Responsive! Your layout adapts to small screens.' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "Media queries start with @media (max-width: 600px) { ... }.",
        "Inside it, target .row and set flex-direction: column;.",
        "That is what stacks items on phones."
      ],
      solution: "@media (max-width: 600px) {\n  .row { flex-direction: column; }\n}"
    }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Create a responsive header bar. It must include:\n\n\u2022 A .bar container using display: flex\n\u2022 A title on the left and a menu on the right\n\u2022 On small screens, the bar stacks vertically\n\u2022 At least one @media query",
      starter: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Layout</title>\n  <style>\n  </style>\n</head>\n<body>\n  <div class=\"bar\">\n    <div class=\"title\">SkillRun</div>\n    <div class=\"menu\">Home &middot; Learn &middot; Contact</div>\n  </div>\n</body>\n</html>",
      check: "(function(){\n  try {\n    var css = document.documentElement.innerHTML;\n    if (!/@media/.test(css)) return { passed: false, message: 'Add a @media query.' };\n    var bar = document.querySelector('.bar');\n    if (!bar) return { passed: false, message: 'Keep a .bar container.' };\n    if (window.getComputedStyle(bar).display !== 'flex') return { passed: false, message: 'Make .bar display: flex.' };\n    if (!document.querySelector('.title') || !document.querySelector('.menu')) return { passed: false, message: 'Keep the .title and .menu elements.' };\n    return { passed: true, message: 'You built a responsive header!' };\n  } catch (e) { return { passed: false, message: 'Something went wrong: ' + e.message }; }\n})()",
      hints: [
        "Start: .bar { display: flex; justify-content: space-between; }",
        "Add a media query that stacks: @media (max-width: 600px) { .bar { flex-direction: column; } }",
        "Keep .title and .menu as the two children."
      ],
      solution: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Layout</title>\n  <style>\n    .bar { display: flex; justify-content: space-between; }\n    @media (max-width: 600px) {\n      .bar { flex-direction: column; }\n    }\n  </style>\n</head>\n<body>\n  <div class=\"bar\">\n    <div class=\"title\">SkillRun</div>\n    <div class=\"menu\">Home &middot; Learn &middot; Contact</div>\n  </div>\n</body>\n</html>"
    },
    unlock: "CSS Layout"
  }
];

/* ============================================================
   JavaScript missions are defined in missions-js.js so this file
   stays readable. The sandbox runs their code and checks.
   ============================================================ */
