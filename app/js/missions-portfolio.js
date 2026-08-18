/* ============================================================
   SkillRun - Portfolio Series (V2)
   Bigger projects that combine earlier skills.
   Appended to PROJECTS (from missions-js.js).
   New skills: Version Control, Deploy, SEO, Analytics, Security,
   Performance - all unlocked by "From Code to Internet" missions.
   ============================================================ */

PROJECTS.push(
  {
    id: "memory-game",
    title: "Memory Game",
    emoji: "🃏",
    desc: "Build the logic for a card-matching memory game.",
    skills: ["JavaScript Foundations", "JavaScript Logic"],
    xp: 200,
    kind: "project",
    type: "js",
    series: "portfolio",
    starter: "function createDeck(n) {\n  // return one array with each number 1..n twice\n  return [];\n}\nfunction cardMatches(a, b) {\n  return false;\n}\nfunction scoreRound(pairs, wrongGuesses) {\n  // start at 100, lose 10 per wrong guess, min 10\n  return 0;\n}",
    test: "function t() {\n  var deck = createDeck(3);\n  if (deck.length !== 6) return { passed: false, message: 'createDeck(3) should make 6 cards (3 pairs).' };\n  if (deck.filter(function (x) { return x === 2; }).length !== 2) return { passed: false, message: 'Each number should appear exactly twice.' };\n  if (!cardMatches(3, 3)) return { passed: false, message: 'cardMatches(3,3) should be true.' };\n  if (cardMatches(3, 4)) return { passed: false, message: 'cardMatches(3,4) should be false.' };\n  if (scoreRound(3, 0) !== 100) return { passed: false, message: 'No wrong guesses -> 100.' };\n  if (scoreRound(3, 5) !== 50) return { passed: false, message: '5 wrong guesses -> 50.' };\n  if (scoreRound(3, 20) !== 10) return { passed: false, message: 'Score never drops below 10.' };\n  return { passed: true, message: 'Your memory game logic is solid!' };\n}",
    hints: [
      "createDeck: loop 1..n, push(i, i).",
      "cardMatches: return a === b.",
      "scoreRound: 100 - wrongGuesses * 10, floor at 10."
    ],
    solution: "function createDeck(n) {\n  var deck = [];\n  for (var i = 1; i <= n; i++) { deck.push(i, i); }\n  return deck;\n}\nfunction cardMatches(a, b) {\n  return a === b;\n}\nfunction scoreRound(pairs, wrongGuesses) {\n  var s = 100 - wrongGuesses * 10;\n  return s < 10 ? 10 : s;\n}"
  },

  {
    id: "expense-tracker",
    title: "Expense Tracker",
    emoji: "💸",
    desc: "Track spending, totals and your biggest cost.",
    skills: ["JavaScript Logic", "Data & Storage"],
    xp: 250,
    kind: "project",
    type: "js",
    series: "portfolio",
    starter: "function addExpense(list, name, amount) {\n  // add { name, amount } and return the list\n  return list;\n}\nfunction totalSpent(list) {\n  return 0;\n}\nfunction biggestExpense(list) {\n  return null;\n}",
    test: "function t() {\n  var list = [];\n  addExpense(list, 'coffee', 5);\n  addExpense(list, 'lunch', 12);\n  if (list.length !== 2 || list[0].name !== 'coffee' || list[0].amount !== 5) return { passed: false, message: 'addExpense should push { name, amount }.' };\n  if (totalSpent(list) !== 17) return { passed: false, message: 'totalSpent should sum amounts (17).' };\n  if (totalSpent([]) !== 0) return { passed: false, message: 'Empty list totals 0.' };\n  if (!biggestExpense(list) || biggestExpense(list).name !== 'lunch') return { passed: false, message: 'biggestExpense should return lunch.' };\n  if (biggestExpense([]) !== null) return { passed: false, message: 'Empty list -> null.' };\n  return { passed: true, message: 'Your expense tracker balances!' };\n}",
    hints: [
      "addExpense: push an object, return the list.",
      "totalSpent: loop and add amount.",
      "biggestExpense: track the largest amount, return null for empty."
    ],
    solution: "function addExpense(list, name, amount) {\n  list.push({ name: name, amount: amount });\n  return list;\n}\nfunction totalSpent(list) {\n  var total = 0;\n  for (var i = 0; i < list.length; i++) { total += list[i].amount; }\n  return total;\n}\nfunction biggestExpense(list) {\n  var best = null;\n  for (var i = 0; i < list.length; i++) {\n    if (!best || list[i].amount > best.amount) { best = list[i]; }\n  }\n  return best;\n}"
  },

  {
    id: "git-portfolio",
    title: "Git Portfolio",
    emoji: "📦",
    desc: "Put your site in a repo, commit it and tag a release.",
    skills: ["HTML Foundations", "CSS Foundations", "Version Control"],
    xp: 300,
    kind: "project",
    type: "js",
    series: "portfolio",
    starter: "function buildPortfolio() {\n  // repo named 'my-portfolio' with index.html, commit 'init', return repo\n  return null;\n}\nfunction releaseVersion(repo) {\n  // set repo.version = 'v1.0.0' and return it\n  return null;\n}\nfunction currentVersion(repo) {\n  // return repo.version or 'dev'\n  return null;\n}",
    test: "function t() {\n  var r = buildPortfolio();\n  if (!r || !r.files || !r.files['index.html']) return { passed: false, message: 'Should have an index.html in the repo.' };\n  if (!r.commits || r.commits.length !== 1 || r.commits[0].msg !== 'init') return { passed: false, message: 'Should have one commit named \"init\".' };\n  if (releaseVersion(r) !== 'v1.0.0' || r.version !== 'v1.0.0') return { passed: false, message: 'releaseVersion should tag v1.0.0.' };\n  if (currentVersion(r) !== 'v1.0.0') return { passed: false, message: 'currentVersion should read the tag.' };\n  if (currentVersion({}) !== 'dev') return { passed: false, message: 'No tag yet -> \"dev\".' };\n  return { passed: true, message: 'Your portfolio is versioned and tagged!' };\n}",
    hints: [
      "initRepo, addFile, commit - in that order.",
      "repo.name = 'my-portfolio'",
      "releaseVersion: repo.version = 'v1.0.0'; currentVersion: repo.version || 'dev'."
    ],
    solution: "function buildPortfolio() {\n  var r = initRepo(); r.name = 'my-portfolio';\n  addFile(r, 'index.html', '<h1>My Portfolio</h1>');\n  commit(r, 'init');\n  return r;\n}\nfunction releaseVersion(repo) {\n  repo.version = 'v1.0.0';\n  return repo.version;\n}\nfunction currentVersion(repo) {\n  return repo.version || 'dev';\n}"
  },

  {
    id: "landing-page",
    title: "SEO Landing Page",
    emoji: "🏕️",
    desc: "A landing page that search engines and shares love.",
    skills: ["HTML Foundations", "CSS Foundations", "SEO"],
    xp: 300,
    kind: "project",
    type: "js",
    series: "portfolio",
    starter: "function pageHead() {\n  // headTags('SkillRun', 'Learn by building real projects')\n  return '';\n}\nfunction pageOg() {\n  // ogTags('SkillRun', 'Learn by building', 'https://skillrun.com/card.png')\n  return '';\n}\nfunction pageReady() {\n  // head + newline + og + newline + robotsContent()\n  return '';\n}",
    test: "function t() {\n  var head = pageHead();\n  if (head.indexOf('SkillRun') === -1 || head.indexOf('<title>') === -1) return { passed: false, message: 'pageHead needs a title tag.' };\n  var og = pageOg();\n  if (og.indexOf('og:image') === -1) return { passed: false, message: 'pageOg needs the og:image tag.' };\n  var out = pageReady();\n  if (out.indexOf('og:title') === -1) return { passed: false, message: 'pageReady should include OG tags.' };\n  if (out.indexOf('User-agent') === -1) return { passed: false, message: 'pageReady should include robots.txt rules.' };\n  return { passed: true, message: 'Your landing page is SEO-ready!' };\n}",
    hints: [
      "Reuse headTags and ogTags from the SEO missions.",
      "pageReady joins head, og and robotsContent with newlines."
    ],
    solution: "function pageHead() {\n  return headTags('SkillRun', 'Learn by building real projects');\n}\nfunction pageOg() {\n  return ogTags('SkillRun', 'Learn by building', 'https://skillrun.com/card.png');\n}\nfunction pageReady() {\n  return pageHead() + '\\n' + pageOg() + '\\n' + robotsContent();\n}"
  },

  {
    id: "blog-engine",
    title: "Blog Engine",
    emoji: "📝",
    desc: "A blog that tracks which posts people read.",
    skills: ["JavaScript Logic", "Data & Storage", "Analytics"],
    xp: 300,
    kind: "project",
    type: "js",
    series: "portfolio",
    starter: "function createBlog() {\n  // { posts: [], views: initTracker() }\n  return null;\n}\nfunction addPost(blog, title) {\n  // push { title, views: 0 }, return blog\n  return blog;\n}\nfunction viewPost(blog, index) {\n  // bump views and log a pageview, return the post's new view count\n  return 0;\n}\nfunction popularPost(blog) {\n  // return the post with the most views\n  return null;\n}",
    test: "function t() {\n  var blog = createBlog();\n  if (!blog || !Array.isArray(blog.posts) || !blog.views) return { passed: false, message: 'createBlog needs posts array and views tracker.' };\n  addPost(blog, 'First'); addPost(blog, 'Second');\n  if (blog.posts.length !== 2) return { passed: false, message: 'Two posts added.' };\n  if (viewPost(blog, 0) !== 1) return { passed: false, message: 'First view of a post returns 1.' };\n  viewPost(blog, 0);\n  if (blog.posts[0].views !== 2) return { passed: false, message: 'Views should accumulate (2).' };\n  viewPost(blog, 1);\n  if (popularPost(blog).title !== 'First') return { passed: false, message: 'First post is the most viewed.' };\n  return { passed: true, message: 'Your blog tracks every read!' };\n}",
    hints: [
      "viewPost: blog.posts[index].views++ and logEvent(blog.views, 'pageview:/post/' + index).",
      "popularPost: loop and track the highest views.",
      "Return the post, not just its view count."
    ],
    solution: "function createBlog() {\n  return { posts: [], views: initTracker() };\n}\nfunction addPost(blog, title) {\n  blog.posts.push({ title: title, views: 0 });\n  return blog;\n}\nfunction viewPost(blog, index) {\n  blog.posts[index].views++;\n  logEvent(blog.views, 'pageview:/post/' + index);\n  return blog.posts[index].views;\n}\nfunction popularPost(blog) {\n  var best = null;\n  for (var i = 0; i < blog.posts.length; i++) {\n    if (!best || blog.posts[i].views > best.views) { best = blog.posts[i]; }\n  }\n  return best;\n}"
  },

  {
    id: "secure-auth",
    title: "Secure Auth",
    emoji: "🔐",
    desc: "Signups that sanitize input and block abuse.",
    skills: ["JavaScript Logic", "Data & Storage", "Security"],
    xp: 300,
    kind: "project",
    type: "js",
    series: "portfolio",
    starter: "function sanitizeUsername(input) {\n  // escapeHtml(String(input))\n  return String(input);\n}\nfunction trySignup(store, name) {\n  // store users list, sanitize name, rate-limit to 5 tries, return { ok: true, user } or { ok: false }\n  return { ok: false };\n}\nfunction listUsers(store) {\n  // return store.users or []\n  return [];\n}",
    test: "function t() {\n  var store = { users: [], limits: {} };\n  if (sanitizeUsername('<b>Ali</b>').indexOf('<') !== -1) return { passed: false, message: 'Username must be escaped.' };\n  var out = trySignup(store, '<b>Ali</b>');\n  if (!out.ok) return { passed: false, message: 'First signup should succeed.' };\n  if (out.user.indexOf('<') !== -1) return { passed: false, message: 'Stored user must be sanitized.' };\n  if (listUsers(store).length !== 1) return { passed: false, message: 'One user registered.' };\n  trySignup(store, 'Bob'); trySignup(store, 'Bob'); trySignup(store, 'Bob'); trySignup(store, 'Bob'); trySignup(store, 'Bob');\n  if (trySignup(store, 'Bob').ok) return { passed: false, message: 'Sixth signup from same name should be blocked.' };\n  return { passed: true, message: 'Signups are safe and rate-limited!' };\n}",
    hints: [
      "sanitizeUsername: escapeHtml(String(input)).",
      "trySignup: clean the name first, then rateLimit(store.limits, clean, 5).",
      "Return { ok: true, user: clean } when allowed."
    ],
    solution: "function sanitizeUsername(input) {\n  return escapeHtml(String(input));\n}\nfunction trySignup(store, name) {\n  var clean = sanitizeUsername(name);\n  if (!rateLimit(store.limits, clean, 5)) return { ok: false };\n  if (store.users.indexOf(clean) === -1) store.users.push(clean);\n  return { ok: true, user: clean };\n}\nfunction listUsers(store) {\n  return store.users || [];\n}"
  },

  {
    id: "analytics-dashboard-pro",
    title: "Analytics Dashboard",
    emoji: "📊",
    desc: "A fast dashboard that reports your site's traffic.",
    skills: ["JavaScript Logic", "Analytics", "Performance"],
    xp: 300,
    kind: "project",
    type: "js",
    series: "portfolio",
    starter: "function trackPage(blog, path) {\n  // logEvent(blog.views, 'pageview:' + path), return totalViews\n  return 0;\n}\nfunction report(blog) {\n  // { views, top, uniques } using the analytics helpers\n  return null;\n}",
    test: "function t() {\n  var blog = { views: initTracker() };\n  trackPage(blog, '/home'); trackPage(blog, '/home'); trackPage(blog, '/about');\n  var r = report(blog);\n  if (!r || r.views !== 3) return { passed: false, message: 'views should be 3.' };\n  if (r.top !== '/home') return { passed: false, message: 'top should be /home.' };\n  if (r.uniques !== 2) return { passed: false, message: 'uniques should be 2.' };\n  return { passed: true, message: 'Your dashboard reports like a pro tool!' };\n}",
    hints: [
      "trackPage: logEvent then return totalViews(blog.views).",
      "report: totalViews, topPage, uniquePages.",
      "All three come from the analytics missions."
    ],
    solution: "function trackPage(blog, path) {\n  logEvent(blog.views, 'pageview:' + path);\n  return totalViews(blog.views);\n}\nfunction report(blog) {\n  return { views: totalViews(blog.views), top: topPage(blog.views), uniques: uniquePages(blog.views) };\n}"
  },

  {
    id: "full-stack-app",
    title: "Full Stack App",
    emoji: "🚀",
    desc: "The whole journey: build, push, deploy, custom domain.",
    skills: ["HTML Foundations", "JavaScript Logic", "Version Control", "Deploy"],
    xp: 400,
    kind: "project",
    type: "js",
    series: "portfolio",
    starter: "function buildApp() {\n  // repo 'app' with index.html, commit 'init', return repo\n  return null;\n}\nfunction deployApp() {\n  // push buildApp() to a remote, then deploy it, return the deployment\n  return null;\n}\nfunction shipApp() {\n  // deployApp + connectDomain({ name: 'myapp.dev', records: [] }, deployment)\n  // return { deployment, domain, repo }\n  return null;\n}",
    test: "function t() {\n  var r = buildApp();\n  if (!r || r.name !== 'app' || !r.commits || r.commits.length !== 1) return { passed: false, message: 'buildApp should make repo \"app\" with one commit.' };\n  var d = deployApp();\n  if (!d || d.url.indexOf('app') === -1) return { passed: false, message: 'Deployment url should mention the app name.' };\n  var s = shipApp();\n  if (!s || !s.deployment || s.deployment.url.indexOf('app') === -1) return { passed: false, message: 'shipApp should deploy the app.' };\n  if (s.domain !== 'myapp.dev') return { passed: false, message: 'Custom domain should be myapp.dev.' };\n  if (!s.repo || !s.repo.commits) return { passed: false, message: 'Include the repo in the ship result.' };\n  return { passed: true, message: 'You shipped a full-stack app to the internet!' };\n}",
    hints: [
      "buildApp: initRepo with name 'app', addFile, commit.",
      "deployApp: createRemote, push, then deploy(repo).",
      "shipApp: connectDomain to myapp.dev and return everything."
    ],
    solution: "function buildApp() {\n  var r = initRepo(); r.name = 'app';\n  addFile(r, 'index.html', '<h1>Full Stack App</h1>');\n  commit(r, 'init');\n  return r;\n}\nfunction deployApp() {\n  var r = buildApp();\n  var rem = createRemote();\n  push(rem, r);\n  return deploy(r);\n}\nfunction shipApp() {\n  var r = buildApp();\n  var rem = createRemote();\n  push(rem, r);\n  var d = deploy(r);\n  var dom = { name: 'myapp.dev', records: [] };\n  connectDomain(dom, d);\n  return { deployment: d, domain: d.domain, repo: r };\n}"
  }
);