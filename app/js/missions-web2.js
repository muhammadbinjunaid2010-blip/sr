/* ============================================================
   SkillRun - "From Code to Internet" series part 2 (V2)
   SEO, Search Console, Analytics, Performance, Security,
   and the series boss: Ship It.
   ============================================================ */

registerMissions([
  {
    id: "seo-basics",
    num: 19,
    title: "SEO Basics",
    tagline: "Help Google understand and rank your page.",
    skill: "Full Stack",
    xp: 160,
    type: "js",
    icon: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>',
    meta: { kind: "normal", series: "code-to-internet", order: 9 },
    briefing: {
      objective: "Write the head tags that tell search engines what your page is about.",
      body: "Search engines read your page's <title> and meta description to decide what it is and when to show it. Every page you ship should have both."
    },
    challenges: [
      {
        id: "ch1",
        title: "Write the title tag",
        instructions: "Write metaTitle(title) that returns '<title>' + title + '</title>'.",
        learning: "The <title> tag is the headline of your page in search results.",
        example: "function metaTitle(title) {\n  return '<title>' + title + '</title>';\n}",
        starter: "function metaTitle(title) {\n  return \"\";\n}",
        test: "function t() {\n  if (metaTitle('My Site') !== '<title>My Site</title>') return { passed: false, message: 'Should wrap the title in title tags.' };\n  return { passed: true, message: 'Title tag ready!' };\n}",
        hints: ["Concatenate the three parts.", "exact output: <title>...</title>"],
        solution: "function metaTitle(title) {\n  return '<title>' + title + '</title>';\n}"
      },
      {
        id: "ch2",
        title: "Write the description",
        instructions: "Write metaDescription(desc) that returns '<meta name=\"description\" content=\"' + desc + '\">'.",
        learning: "The meta description is the snippet under your title in results.",
        example: "function metaDescription(desc) {\n  return '<meta name=\"description\" content=\"' + desc + '\">';\n}",
        starter: "function metaDescription(desc) {\n  return \"\";\n}",
        test: "function t() {\n  if (metaDescription('Learn to code') !== '<meta name=\"description\" content=\"Learn to code\">') return { passed: false, message: 'Should build the meta description tag.' };\n  return { passed: true, message: 'Description written!' };\n}",
        hints: ["Careful with nested quotes.", "content=\"...\" around the text."],
        solution: "function metaDescription(desc) {\n  return '<meta name=\"description\" content=\"' + desc + '\">';\n}"
      },
      {
        id: "ch3",
        title: "Full head",
        instructions: "Write headTags(title, desc) that returns the title tag followed by the description tag (newline between).",
        learning: "Real pages have both tags in the <head>.",
        example: "function headTags(title, desc) {\n  return metaTitle(title) + '\\n' + metaDescription(desc);\n}",
        starter: "function headTags(title, desc) {\n  return \"\";\n}",
        test: "function t() {\n  var out = headTags('Home', 'Welcome');\n  if (out.indexOf('<title>Home</title>') === -1) return { passed: false, message: 'Should include the title tag.' };\n  if (out.indexOf('<meta name=\"description\" content=\"Welcome\">') === -1) return { passed: false, message: 'Should include the description tag.' };\n  return { passed: true, message: 'Head tags complete!' };\n}",
        hints: ["Reuse the two functions you wrote.", "Join with a newline."],
        solution: "function headTags(title, desc) {\n  return metaTitle(title) + '\\n' + metaDescription(desc);\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write seoHead() that returns headTags('SkillRun - Learn by Building', 'Learn to code by building real projects.')",
      starter: "function seoHead() {\n  return \"\";\n}",
      test: "function t() {\n  var out = seoHead();\n  if (out.indexOf('SkillRun - Learn by Building') === -1) return { passed: false, message: 'Title should mention the site name.' };\n  if (out.indexOf('description') === -1) return { passed: false, message: 'Should include a description.' };\n  return { passed: true, message: 'Search engines get it now!' };\n}",
      hints: ["Call headTags with the two strings.", "That is the whole solution."],
      solution: "function seoHead() {\n  return headTags('SkillRun - Learn by Building', 'Learn to code by building real projects.');\n}",
      unlock: "SEO"
    },
    unlock: "SEO"
  },

  {
    id: "robots-txt",
    num: 20,
    title: "Robots.txt",
    tagline: "Tell crawlers what they may visit.",
    skill: "Full Stack",
    xp: 150,
    type: "js",
    icon: '<path d="M12 2a7 7 0 0 1 7 7v2a4 4 0 0 1 4 4v3a3 3 0 0 1-3 3h-2M12 2a7 7 0 0 0-7 7v2a4 4 0 0 0-4 4v3a3 3 0 0 0 3 3h2"/>',
    meta: { kind: "normal", series: "code-to-internet", order: 10 },
    briefing: {
      objective: "Write a robots.txt that guides search engine crawlers.",
      body: "robots.txt lives at the root of your site and tells crawlers which paths they may or may not visit. It is plain text with rules per user agent."
    },
    challenges: [
      {
        id: "ch1",
        title: "Address all crawlers",
        instructions: "Write robotsStart() that returns 'User-agent: *\\nAllow: /\\n'.",
        learning: "User-agent: * means the rules apply to every crawler. Allow: / permits everything.",
        example: "function robotsStart() {\n  return 'User-agent: *\\nAllow: /\\n';\n}",
        starter: "function robotsStart() {\n  return \"\";\n}",
        test: "function t() {\n  if (robotsStart() !== 'User-agent: *\\nAllow: /\\n') return { passed: false, message: 'Return exactly User-agent + Allow lines.' };\n  return { passed: true, message: 'Crawlers welcomed!' };\n}",
        hints: ["Two lines with a newline between.", "End with a newline."],
        solution: "function robotsStart() {\n  return 'User-agent: *\\nAllow: /\\n';\n}"
      },
      {
        id: "ch2",
        title: "Block a folder",
        instructions: "Write robotsBlock(path) that returns 'User-agent: *\\nDisallow: ' + path + '\\n'.",
        learning: "Disallow tells crawlers to skip a path, like /private/.",
        example: "function robotsBlock(path) {\n  return 'User-agent: *\\nDisallow: ' + path + '\\n';\n}",
        starter: "function robotsBlock(path) {\n  return \"\";\n}",
        test: "function t() {\n  if (robotsBlock('/private/') !== 'User-agent: *\\nDisallow: /private/\\n') return { passed: false, message: 'Should produce the Disallow rule.' };\n  return { passed: true, message: 'Folder blocked!' };\n}",
        hints: ["Concatenate with the path.", "Exact formatting matters."],
        solution: "function robotsBlock(path) {\n  return 'User-agent: *\\nDisallow: ' + path + '\\n';\n}"
      },
      {
        id: "ch3",
        title: "Point to the sitemap",
        instructions: "Write robotsSitemap(url) that returns 'Sitemap: ' + url + '\\n'.",
        learning: "A Sitemap line tells crawlers where your sitemap.xml lives.",
        example: "function robotsSitemap(url) {\n  return 'Sitemap: ' + url + '\\n';\n}",
        starter: "function robotsSitemap(url) {\n  return \"\";\n}",
        test: "function t() {\n  if (robotsSitemap('https://skillrun.com/sitemap.xml') !== 'Sitemap: https://skillrun.com/sitemap.xml\\n') return { passed: false, message: 'Should emit the Sitemap line.' };\n  return { passed: true, message: 'Sitemap announced!' };\n}",
        hints: ["Sitemap: then the URL.", "Newline at the end."],
        solution: "function robotsSitemap(url) {\n  return 'Sitemap: ' + url + '\\n';\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write robotsContent() that returns robotsStart() + robotsSitemap('https://skillrun.com/sitemap.xml').",
      starter: "function robotsContent() {\n  return \"\";\n}",
      test: "function t() {\n  var out = robotsContent();\n  if (out.indexOf('User-agent: *') === -1) return { passed: false, message: 'Should start with User-agent.' };\n  if (out.indexOf('sitemap.xml') === -1) return { passed: false, message: 'Should reference the sitemap.' };\n  return { passed: true, message: 'robots.txt is live!' };\n}",
      hints: ["Join the two helpers.", "Exact order: rules, then Sitemap."],
      solution: "function robotsContent() {\n  return robotsStart() + robotsSitemap('https://skillrun.com/sitemap.xml');\n}",
      unlock: "SEO"
    },
    unlock: "SEO"
  },

  {
    id: "sitemap-xml",
    num: 21,
    title: "Sitemap XML",
    tagline: "Give search engines a map of every page.",
    skill: "Full Stack",
    xp: 160,
    type: "js",
    icon: '<path d="M9 4h6v6H9zM4 14h6v6H4zM14 14h6v6h-6z"/>',
    meta: { kind: "normal", series: "code-to-internet", order: 11 },
    briefing: {
      objective: "Generate a sitemap.xml listing every page on the site.",
      body: "A sitemap lists all the pages search engines should know about, each as a <url><loc>...</loc></url> entry inside a <urlset>."
    },
    challenges: [
      {
        id: "ch1",
        title: "Open the urlset",
        instructions: "Write sitemapOpen() that returns '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">'.",
        learning: "The urlset is the XML container for all URLs.",
        example: "function sitemapOpen() {\n  return '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">';\n}",
        starter: "function sitemapOpen() {\n  return \"\";\n}",
        test: "function t() {\n  if (sitemapOpen().indexOf('<urlset') === -1) return { passed: false, message: 'Should open a urlset element.' };\n  return { passed: true, message: 'Sitemap opened!' };\n}",
        hints: ["Copy the exact declaration.", "Check for urlset."],
        solution: "function sitemapOpen() {\n  return '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">';\n}"
      },
      {
        id: "ch2",
        title: "Add a URL",
        instructions: "Write sitemapUrl(loc) that returns '<url><loc>' + loc + '</loc></url>'.",
        learning: "Each page is a url element wrapping a loc (location) element.",
        example: "function sitemapUrl(loc) {\n  return '<url><loc>' + loc + '</loc></url>';\n}",
        starter: "function sitemapUrl(loc) {\n  return \"\";\n}",
        test: "function t() {\n  if (sitemapUrl('https://skillrun.com/') !== '<url><loc>https://skillrun.com/</loc></url>') return { passed: false, message: 'Should wrap the URL in url/loc tags.' };\n  return { passed: true, message: 'URL added to the map!' };\n}",
        hints: ["Three concatenated parts.", "url > loc nesting."],
        solution: "function sitemapUrl(loc) {\n  return '<url><loc>' + loc + '</loc></url>';\n}"
      },
      {
        id: "ch3",
        title: "Close the urlset",
        instructions: "Write sitemapClose() that returns '</urlset>'.",
        learning: "Close the container to finish valid XML.",
        example: "function sitemapClose() {\n  return '</urlset>';\n}",
        starter: "function sitemapClose() {\n  return \"\";\n}",
        test: "function t() {\n  if (sitemapClose() !== '</urlset>') return { passed: false, message: 'Should close the urlset.' };\n  return { passed: true, message: 'Sitemap closed!' };\n}",
        hints: ["Closing tag with a slash.", "Exactly </urlset>."],
        solution: "function sitemapClose() {\n  return '</urlset>';\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write sitemap(pages) that returns sitemapOpen() + each page as sitemapUrl('https://skillrun.com' + page) + sitemapClose(). Example: sitemap(['/','/learn']) builds 2 URL entries.",
      starter: "function sitemap(pages) {\n  var out = sitemapOpen();\n  // append a url entry per page\n  out += sitemapClose();\n  return out;\n}",
      test: "function t() {\n  var out = sitemap(['/', '/learn']);\n  if (out.indexOf('<url><loc>https://skillrun.com/</loc></url>') === -1) return { passed: false, message: 'Should include the homepage URL.' };\n  if (out.indexOf('<url><loc>https://skillrun.com/learn</loc></url>') === -1) return { passed: false, message: 'Should include the /learn URL.' };\n  if (out.indexOf('</urlset>') === -1) return { passed: false, message: 'Should close the urlset.' };\n  return { passed: true, message: 'Search engines have your map!' };\n}",
      hints: ["Loop over pages.", "Prepend the base URL.", "Close after the loop."],
      solution: "function sitemap(pages) {\n  var out = sitemapOpen();\n  for (var i = 0; i < pages.length; i++) {\n    out += sitemapUrl('https://skillrun.com' + pages[i]);\n  }\n  return out + sitemapClose();\n}",
      unlock: "SEO"
    },
    unlock: "SEO"
  },

  {
    id: "search-console",
    num: 22,
    title: "Search Console",
    tagline: "Prove you own the site and submit your sitemap.",
    skill: "Full Stack",
    xp: 160,
    type: "js",
    icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
    meta: { kind: "normal", series: "code-to-internet", order: 12 },
    briefing: {
      objective: "Verify ownership and submit the sitemap to Google.",
      body: "Google Search Console needs proof you own the site. You verify with a token, then submit the sitemap and watch your pages get indexed."
    },
    challenges: [
      {
        id: "ch1",
        title: "Generate a token",
        instructions: "Write verifyToken(domain) that returns 'google-site-verification=' + domain + '-token'.",
        learning: "A verification token is a string Google checks on your site.",
        example: "function verifyToken(domain) {\n  return 'google-site-verification=' + domain + '-token';\n}",
        starter: "function verifyToken(domain) {\n  return \"\";\n}",
        test: "function t() {\n  if (verifyToken('skillrun.com') !== 'google-site-verification=skillrun.com-token') return { passed: false, message: 'Token format is wrong.' };\n  return { passed: true, message: 'Token generated!' };\n}",
        hints: ["Concatenate the three parts.", "Exact prefix and suffix."],
        solution: "function verifyToken(domain) {\n  return 'google-site-verification=' + domain + '-token';\n}"
      },
      {
        id: "ch2",
        title: "Submit the sitemap",
        instructions: "Write submitSitemap(tool, url) that adds url to tool.submitted (init array) and returns tool.",
        learning: "Submitting the sitemap tells Google to crawl the listed pages.",
        example: "function submitSitemap(tool, url) {\n  tool.submitted = tool.submitted || [];\n  tool.submitted.push(url);\n  return tool;\n}",
        starter: "function submitSitemap(tool, url) {\n  // record the submitted url\n  return tool;\n}",
        test: "function t() {\n  var g = {};\n  submitSitemap(g, 'https://skillrun.com/sitemap.xml');\n  if (g.submitted.length !== 1) return { passed: false, message: 'Should add the url to submitted.' };\n  return { passed: true, message: 'Sitemap submitted!' };\n}",
        hints: ["Init the array if missing.", "push the url."],
        solution: "function submitSitemap(tool, url) {\n  tool.submitted = tool.submitted || [];\n  tool.submitted.push(url);\n  return tool;\n}"
      },
      {
        id: "ch3",
        title: "Count indexed pages",
        instructions: "Write indexedPages(tool) that returns tool.indexed or 0.",
        learning: "Indexed pages is the number Google has actually stored.",
        example: "function indexedPages(tool) {\n  return tool.indexed || 0;\n}",
        starter: "function indexedPages(tool) {\n  return 0;\n}",
        test: "function t() {\n  if (indexedPages({ indexed: 12 }) !== 12) return { passed: false, message: 'Should return tool.indexed.' };\n  if (indexedPages({}) !== 0) return { passed: false, message: 'Missing index -> 0.' };\n  return { passed: true, message: 'Indexing tracked!' };\n}",
        hints: ["Return tool.indexed or 0.", "One line."],
        solution: "function indexedPages(tool) {\n  return tool.indexed || 0;\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write verifySite(domain) that returns { token: verifyToken(domain), submitted: 'https://skillrun.com/sitemap.xml', indexed: 5 }.",
      starter: "function verifySite(domain) {\n  return null;\n}",
      test: "function t() {\n  var v = verifySite('skillrun.com');\n  if (!v || v.token.indexOf('skillrun.com') === -1) return { passed: false, message: 'Token should mention the domain.' };\n  if (v.submitted.indexOf('sitemap.xml') === -1) return { passed: false, message: 'Should include the sitemap url.' };\n  if (v.indexed !== 5) return { passed: false, message: 'indexed should be 5.' };\n  return { passed: true, message: 'Your site is verified and indexed!' };\n}",
      hints: ["Reuse verifyToken.", "Return the three fields."],
      solution: "function verifySite(domain) {\n  return { token: verifyToken(domain), submitted: 'https://skillrun.com/sitemap.xml', indexed: 5 };\n}",
      unlock: "SEO"
    },
    unlock: "SEO"
  },

  {
    id: "analytics",
    num: 23,
    title: "Analytics",
    tagline: "See what your visitors actually do.",
    skill: "Full Stack",
    xp: 180,
    type: "js",
    icon: '<path d="M3 3v18h18M7 15l4-6 4 3 5-7"/>',
    meta: { kind: "normal", series: "code-to-internet", order: 13 },
    briefing: {
      objective: "Build a tiny analytics tracker that counts events.",
      body: "Analytics records what happens on your site - page views, clicks, signups. Each event has a name and a time."
    },
    challenges: [
      {
        id: "ch1",
        title: "Create the tracker",
        instructions: "Write initTracker() that returns { events: [] }.",
        learning: "The tracker stores a list of events.",
        example: "function initTracker() {\n  return { events: [] };\n}",
        starter: "function initTracker() {\n  return null;\n}",
        test: "function t() {\n  var tr = initTracker();\n  if (!tr || !Array.isArray(tr.events)) return { passed: false, message: 'Should return { events: [] }.' };\n  return { passed: true, message: 'Tracker ready!' };\n}",
        hints: ["Return the object literal."],
        solution: "function initTracker() {\n  return { events: [] };\n}"
      },
      {
        id: "ch2",
        title: "Log an event",
        instructions: "Write logEvent(tracker, name) that pushes { name: name, at: Date.now() } into tracker.events. Returns tracker.",
        learning: "Events carry a name and a timestamp.",
        example: "function logEvent(tracker, name) {\n  tracker.events.push({ name: name, at: Date.now() });\n  return tracker;\n}",
        starter: "function logEvent(tracker, name) {\n  // record the event\n  return tracker;\n}",
        test: "function t() {\n  var tr = initTracker();\n  logEvent(tr, 'pageview');\n  if (tr.events.length !== 1 || tr.events[0].name !== 'pageview') return { passed: false, message: 'Should push an event with the name.' };\n  if (!tr.events[0].at) return { passed: false, message: 'Event needs an at timestamp.' };\n  return { passed: true, message: 'Event recorded!' };\n}",
        hints: ["push an object.", "name and at fields."],
        solution: "function logEvent(tracker, name) {\n  tracker.events.push({ name: name, at: Date.now() });\n  return tracker;\n}"
      },
      {
        id: "ch3",
        title: "Count events",
        instructions: "Write countEvents(tracker, name) that returns how many events match the name.",
        learning: "Counting events tells you which things happen most.",
        example: "function countEvents(tracker, name) {\n  return tracker.events.filter(function (e) { return e.name === name; }).length;\n}",
        starter: "function countEvents(tracker, name) {\n  return 0;\n}",
        test: "function t() {\n  var tr = initTracker();\n  logEvent(tr, 'pageview'); logEvent(tr, 'pageview'); logEvent(tr, 'click');\n  if (countEvents(tr, 'pageview') !== 2) return { passed: false, message: 'Should count pageview events (2).' };\n  if (countEvents(tr, 'click') !== 1) return { passed: false, message: 'Should count click events (1).' };\n  return { passed: true, message: 'Events counted!' };\n}",
      hints: ["filter by name then .length.", "One line."],
        solution: "function countEvents(tracker, name) {\n  return tracker.events.filter(function (e) { return e.name === name; }).length;\n}"
      },
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write pageView(tracker, page) that logs 'pageview:' + page and returns countEvents(tracker, 'pageview:' + page).",
      starter: "function pageView(tracker, page) {\n  // log and return the count\n  return 0;\n}",
      test: "function t() {\n  var tr = initTracker();\n  if (pageView(tr, '/home') !== 1) return { passed: false, message: 'First view returns 1.' };\n  if (pageView(tr, '/home') !== 2) return { passed: false, message: 'Second view returns 2.' };\n  return { passed: true, message: 'Page views tracked!' };\n}",
      hints: ["logEvent with a composed name.", "Return the count."],
      solution: "function pageView(tracker, page) {\n  logEvent(tracker, 'pageview:' + page);\n  return countEvents(tracker, 'pageview:' + page);\n}",
      unlock: "Analytics"
    },
    unlock: "Analytics"
  },

  {
    id: "lighthouse",
    num: 24,
    title: "Lighthouse",
    tagline: "Score your site on performance and quality.",
    skill: "Full Stack",
    xp: 190,
    type: "js",
    icon: '<path d="M12 2a7 7 0 0 1 7 7v6a4 4 0 0 1-4 4h-1v3H10v-3H9a4 4 0 0 1-4-4V9a7 7 0 0 1 7-7z"/><path d="M9 12l2 2 4-4"/>',
    meta: { kind: "normal", series: "code-to-internet", order: 14 },
    briefing: {
      objective: "Compute Lighthouse-style scores and hit 90+.",
      body: "Lighthouse scores pages on Performance, Accessibility, Best Practices and SEO. Each is 0-100; 90+ is green."
    },
    challenges: [
      {
        id: "ch1",
        title: "Average a list",
        instructions: "Write avg(values) that returns the average of an array of numbers (0 for empty).",
        learning: "Averages are used all over analytics and scoring.",
        example: "function avg(values) {\n  if (!values.length) { return 0; }\n  var sum = 0;\n  for (var i = 0; i < values.length; i++) { sum += values[i]; }\n  return sum / values.length;\n}",
        starter: "function avg(values) {\n  return 0;\n}",
        test: "function t() {\n  if (avg([100, 80, 90]) !== 90) return { passed: false, message: 'avg([100,80,90]) should be 90.' };\n  if (avg([]) !== 0) return { passed: false, message: 'Empty list averages to 0.' };\n  return { passed: true, message: 'Averaging works!' };\n}",
        hints: ["Sum then divide by length.", "Guard empty."],
        solution: "function avg(values) {\n  if (!values.length) { return 0; }\n  var sum = 0;\n  for (var i = 0; i < values.length; i++) { sum += values[i]; }\n  return sum / values.length;\n}"
      },
      {
        id: "ch2",
        title: "Pass the bar",
        instructions: "Write passed(score) that returns true when score >= 90.",
        learning: "Lighthouse green starts at 90.",
        example: "function passed(score) {\n  return score >= 90;\n}",
        starter: "function passed(score) {\n  return false;\n}",
        test: "function t() {\n  if (!passed(90)) return { passed: false, message: '90 passes.' };\n  if (passed(89)) return { passed: false, message: '89 fails.' };\n  return { passed: true, message: 'Bar set!' };\n}",
        hints: ["Return score >= 90.", "One line."],
        solution: "function passed(score) {\n  return score >= 90;\n}"
      },
      {
        id: "ch3",
        title: "Audit a site",
        instructions: "Write lighthouse(scores) that returns { avg: avg(scores), pass: avg(scores) >= 90 }.",
        learning: "The overall score averages all categories; green means pass.",
        example: "function lighthouse(scores) {\n  var a = avg(scores);\n  return { avg: a, pass: a >= 90 };\n}",
        starter: "function lighthouse(scores) {\n  return null;\n}",
        test: "function t() {\n  var a = lighthouse([95, 88, 92]);\n  if (a.avg !== 91.66666666666667 && Math.abs(a.avg - 91.67) > 1) return { passed: false, message: 'avg should be the average.' };\n  if (!a.pass) return { passed: false, message: 'Average ~91.7 should pass.' };\n  if (lighthouse([50, 50, 50]).pass) return { passed: false, message: '50s should not pass.' };\n  return { passed: true, message: 'Site scores green!' };\n}",
      hints: ["Compute avg once.", "Return avg and pass."],
        solution: "function lighthouse(scores) {\n  var a = avg(scores);\n  return { avg: a, pass: a >= 90 };\n}"
      },
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write auditSite() that returns lighthouse([92, 88, 95, 91, 94]) — the final answer should pass.",
      starter: "function auditSite() {\n  return null;\n}",
      test: "function t() {\n  var a = auditSite();\n  if (!a || a.pass !== true) return { passed: false, message: 'Those scores average above 90 - should pass.' };\n  if (typeof a.avg !== 'number') return { passed: false, message: 'Should include the avg score.' };\n  return { passed: true, message: 'Lighthouse green! Site ships fast and clean.' };\n}",
      hints: ["Call lighthouse with the five scores."],
      solution: "function auditSite() {\n  return lighthouse([92, 88, 95, 91, 94]);\n}",
      unlock: "Performance"
    },
    unlock: "Performance"
  },

  {
    id: "open-graph",
    num: 25,
    title: "Open Graph",
    tagline: "Control how your page looks when shared.",
    skill: "Full Stack",
    xp: 150,
    type: "js",
    icon: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',
    meta: { kind: "normal", series: "code-to-internet", order: 15 },
    briefing: {
      objective: "Add Open Graph tags so links look great on WhatsApp, X and Facebook.",
      body: "When someone shares your link, apps read Open Graph meta tags for the title, description and image to build the preview card."
    },
    challenges: [
      {
        id: "ch1",
        title: "OG title",
        instructions: "Write ogTitle(title) that returns '<meta property=\"og:title\" content=\"' + title + '\">'.",
        learning: "og:title becomes the headline of the share card.",
        example: "function ogTitle(title) {\n  return '<meta property=\"og:title\" content=\"' + title + '\">';\n}",
        starter: "function ogTitle(title) {\n  return \"\";\n}",
        test: "function t() {\n  if (ogTitle('SkillRun') !== '<meta property=\"og:title\" content=\"SkillRun\">') return { passed: false, message: 'OG title tag format is wrong.' };\n  return { passed: true, message: 'OG title set!' };\n}",
        hints: ["property=\"og:title\"", "content=\"...\""],
        solution: "function ogTitle(title) {\n  return '<meta property=\"og:title\" content=\"' + title + '\">';\n}"
      },
      {
        id: "ch2",
        title: "OG image",
        instructions: "Write ogImage(url) that returns '<meta property=\"og:image\" content=\"' + url + '\">'.",
        learning: "og:image is the picture shown in the share card.",
        example: "function ogImage(url) {\n  return '<meta property=\"og:image\" content=\"' + url + '\">';\n}",
        starter: "function ogImage(url) {\n  return \"\";\n}",
        test: "function t() {\n  if (ogImage('https://skillrun.com/card.png') !== '<meta property=\"og:image\" content=\"https://skillrun.com/card.png\">') return { passed: false, message: 'OG image tag format is wrong.' };\n  return { passed: true, message: 'Share image set!' };\n}",
        hints: ["property=\"og:image\"", "content=\"url\""],
        solution: "function ogImage(url) {\n  return '<meta property=\"og:image\" content=\"' + url + '\">';\n}"
      },
      {
        id: "ch3",
        title: "OG description",
        instructions: "Write ogDescription(desc) that returns '<meta property=\"og:description\" content=\"' + desc + '\">'.",
        learning: "og:description is the text under the title in a share card.",
        example: "function ogDescription(desc) {\n  return '<meta property=\"og:description\" content=\"' + desc + '\">';\n}",
        starter: "function ogDescription(desc) {\n  return \"\";\n}",
        test: "function t() {\n  if (ogDescription('Learn by building') !== '<meta property=\"og:description\" content=\"Learn by building\">') return { passed: false, message: 'OG description format is wrong.' };\n  return { passed: true, message: 'OG description set!' };\n}",
        hints: ["property=\"og:description\"", "content=\"...\""],
        solution: "function ogDescription(desc) {\n  return '<meta property=\"og:description\" content=\"' + desc + '\">';\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write ogTags(title, desc, image) that returns ogTitle + '\\n' + ogDescription + '\\n' + ogImage.",
      starter: "function ogTags(title, desc, image) {\n  return \"\";\n}",
      test: "function t() {\n  var out = ogTags('SkillRun', 'Learn by building', 'https://skillrun.com/card.png');\n  if (out.indexOf('og:title') === -1 || out.indexOf('og:description') === -1 || out.indexOf('og:image') === -1) return { passed: false, message: 'All three OG tags needed.' };\n  return { passed: true, message: 'Links now share beautifully!' };\n}",
      hints: ["Join the three helpers with newlines."],
      solution: "function ogTags(title, desc, image) {\n  return ogTitle(title) + '\\n' + ogDescription(desc) + '\\n' + ogImage(image);\n}",
      unlock: "SEO"
    },
    unlock: "SEO"
  },

  {
    id: "redirects-404",
    num: 26,
    title: "Redirects & 404",
    tagline: "Send visitors to the right place, even when they're lost.",
    skill: "Full Stack",
    xp: 170,
    type: "js",
    icon: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
    meta: { kind: "normal", series: "code-to-internet", order: 16 },
    briefing: {
      objective: "Manage redirects so old links still work, and catch broken ones.",
      body: "URLs change. Redirects send old URLs to the new location. If nothing matches, a 404 tells visitors (and search engines) the page is gone."
    },
    challenges: [
      {
        id: "ch1",
        title: "Add a redirect",
        instructions: "Write addRedirect(routes, from, to) that stores routes[from] = to and returns routes.",
        learning: "A routes object maps old paths to new paths.",
        example: "function addRedirect(routes, from, to) {\n  routes[from] = to;\n  return routes;\n}",
        starter: "function addRedirect(routes, from, to) {\n  return routes;\n}",
        test: "function t() {\n  var r = addRedirect({}, '/old', '/new');\n  if (r['/old'] !== '/new') return { passed: false, message: 'Should map /old to /new.' };\n  return { passed: true, message: 'Redirect recorded!' };\n}",
        hints: ["routes[from] = to.", "Return routes."],
        solution: "function addRedirect(routes, from, to) {\n  routes[from] = to;\n  return routes;\n}"
      },
      {
        id: "ch2",
        title: "Follow a redirect",
        instructions: "Write redirectTo(routes, path) that returns routes[path] or null.",
        learning: "Looking up a path tells you where it leads.",
        example: "function redirectTo(routes, path) {\n  return routes[path] || null;\n}",
        starter: "function redirectTo(routes, path) {\n  return null;\n}",
        test: "function t() {\n  var r = addRedirect({}, '/a', '/b');\n  if (redirectTo(r, '/a') !== '/b') return { passed: false, message: 'Should resolve /a to /b.' };\n  if (redirectTo(r, '/nope') !== null) return { passed: false, message: 'Unknown path -> null.' };\n  return { passed: true, message: 'Redirects resolve!' };\n}",
        hints: ["Return routes[path] || null.", "One line."],
        solution: "function redirectTo(routes, path) {\n  return routes[path] || null;\n}"
      },
      {
        id: "ch3",
        title: "Catch a 404",
        instructions: "Write is404(routes, path) that returns true when there is no redirect for the path.",
        learning: "If no rule matches, the page returns 404.",
        example: "function is404(routes, path) {\n  return !routes[path];\n}",
        starter: "function is404(routes, path) {\n  return false;\n}",
        test: "function t() {\n  var r = addRedirect({}, '/x', '/y');\n  if (is404(r, '/x')) return { passed: false, message: '/x exists, not a 404.' };\n  if (!is404(r, '/zz')) return { passed: false, message: '/zz should be a 404.' };\n  return { passed: true, message: 'Broken links detected!' };\n}",
        hints: ["Return !routes[path].", "One line."],
        solution: "function is404(routes, path) {\n  return !routes[path];\n}"
      }
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write routeAll(routes, paths) that returns an array where each path becomes redirectTo(routes, path), or '404' when missing.",
      starter: "function routeAll(routes, paths) {\n  return [];\n}",
      test: "function t() {\n  var r = addRedirect({}, '/old', '/new');\n  var out = routeAll(r, ['/old', '/missing']);\n  if (out[0] !== '/new') return { passed: false, message: '/old should route to /new.' };\n  if (out[1] !== '404') return { passed: false, message: '/missing should be \"404\".' };\n  return { passed: true, message: 'All URLs handled!' };\n}",
      hints: ["map each path.", "Use redirectTo or '404'."],
      solution: "function routeAll(routes, paths) {\n  return paths.map(function (p) { return redirectTo(routes, p) || '404'; });\n}",
      unlock: "Analytics"
    },
    unlock: "Analytics"
  },

  {
    id: "web-security",
    num: 27,
    title: "Web Security",
    tagline: "Never trust input. Sanitize everything.",
    skill: "Full Stack",
    xp: 180,
    type: "js",
    icon: '<path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/>',
    meta: { kind: "normal", series: "code-to-internet", order: 17 },
    briefing: {
      objective: "Sanitize user input and add basic rate limiting.",
      body: "Users can type anything. If you put that text into HTML unescaped, they can break your site or worse. Sanitizing turns dangerous characters into safe text. Rate limiting stops bots hammering your API."
    },
    challenges: [
      {
        id: "ch1",
        title: "Escape HTML",
        instructions: "Write escapeHtml(input) that replaces every < with &lt;, > with &gt;, and & with &amp;.",
        learning: "Escaping neutralizes characters that browsers interpret as markup.",
        example: "function escapeHtml(input) {\n  return String(input).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');\n}",
        starter: "function escapeHtml(input) {\n  return String(input);\n}",
        test: "function t() {\n  if (escapeHtml('<script>') !== '&lt;script&gt;') return { passed: false, message: 'Should escape angle brackets.' };\n  if (escapeHtml('a & b') !== 'a &amp; b') return { passed: false, message: 'Should escape ampersands.' };\n  if (escapeHtml('plain') !== 'plain') return { passed: false, message: 'Plain text passes through.' };\n  return { passed: true, message: 'Input is safe now!' };\n}",
      hints: ["Chain three .replace calls.", "Escape & FIRST."],
      solution: "function escapeHtml(input) {\n  return String(input).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');\n}"
      },
      {
        id: "ch2",
        title: "Strip it down",
        instructions: "Write safeName(input) that keeps only letters and numbers (remove everything else) using .replace(/[^a-zA-Z0-9]/g, '').",
        learning: "For usernames and IDs, only safe characters belong.",
        example: "function safeName(input) {\n  return String(input).replace(/[^a-zA-Z0-9]/g, '');\n}",
        starter: "function safeName(input) {\n  return String(input);\n}",
        test: "function t() {\n  if (safeName('Ali_99!') !== 'Ali99') return { passed: false, message: 'Should remove non-alphanumeric characters.' };\n  if (safeName('hello') !== 'hello') return { passed: false, message: 'Clean input stays.' };\n  return { passed: true, message: 'Name sanitized!' };\n}",
        hints: ["Use the exact regex.", "One line."],
        solution: "function safeName(input) {\n  return String(input).replace(/[^a-zA-Z0-9]/g, '');\n}"
      },
      {
        id: "ch3",
        title: "Rate limit",
        instructions: "Write rateLimit(store, key, max) that increments store[key] (init 0) and returns true while the count stays <= max.",
        learning: "Rate limiting caps how often a key (like an IP) can act.",
        example: "function rateLimit(store, key, max) {\n  store[key] = (store[key] || 0) + 1;\n  return store[key] <= max;\n}",
        starter: "function rateLimit(store, key, max) {\n  return true;\n}",
        test: "function t() {\n  var s = {};\n  if (!rateLimit(s, 'ip', 3)) return { passed: false, message: 'First call allowed.' };\n  rateLimit(s, 'ip', 3); rateLimit(s, 'ip', 3);\n  if (rateLimit(s, 'ip', 3)) return { passed: false, message: 'Fourth call should be blocked.' };\n  return { passed: true, message: 'Rate limited!' };\n}",
      hints: ["Increment the counter first.", "Return count <= max."],
      solution: "function rateLimit(store, key, max) {\n  store[key] = (store[key] || 0) + 1;\n  return store[key] <= max;\n}"
      },
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write secureInput(input) that returns escapeHtml(safeName(input)) and the escaped result of '<b>hacker</b>' should contain no angle brackets.",
      starter: "function secureInput(input) {\n  return String(input);\n}",
      test: "function t() {\n  var out = secureInput('<b>hacker</b>');\n  if (out.indexOf('<') !== -1 || out.indexOf('>') !== -1) return { passed: false, message: 'No raw angle brackets should survive.' };\n  if (out.indexOf('hacker') === -1) return { passed: false, message: 'The word should remain.' };\n  return { passed: true, message: 'Your site is hardened!' };\n}",
      hints: ["safeName first, then escapeHtml.", "Compose the two helpers."],
      solution: "function secureInput(input) {\n  return escapeHtml(safeName(input));\n}",
      unlock: "Security"
    },
    unlock: "Security"
  },

  {
    id: "analytics-dashboard",
    num: 28,
    title: "Analytics Dashboard",
    tagline: "Turn raw events into a summary you can read.",
    skill: "Full Stack",
    xp: 200,
    type: "js",
    icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',
    meta: { kind: "normal", series: "code-to-internet", order: 18 },
    briefing: {
      objective: "Build a dashboard that summarizes page views.",
      body: "Raw events are noisy. Dashboards roll them up into totals, top pages and unique counts you can act on."
    },
    challenges: [
      {
        id: "ch1",
        title: "Total views",
        instructions: "Write totalViews(tracker) that returns the number of events whose name starts with 'pageview:'.",
        learning: "Counting pageview events gives total views.",
        example: "function totalViews(tracker) {\n  return tracker.events.filter(function (e) { return e.name.indexOf('pageview:') === 0; }).length;\n}",
        starter: "function totalViews(tracker) {\n  return 0;\n}",
        test: "function t() {\n  var tr = initTracker();\n  logEvent(tr, 'pageview:/home'); logEvent(tr, 'pageview:/learn'); logEvent(tr, 'click');\n  if (totalViews(tr) !== 2) return { passed: false, message: 'Should count only pageview events (2).' };\n  return { passed: true, message: 'Views totaled!' };\n}",
        hints: ["filter by prefix.", "indexOf('pageview:') === 0."],
        solution: "function totalViews(tracker) {\n  return tracker.events.filter(function (e) { return e.name.indexOf('pageview:') === 0; }).length;\n}"
      },
      {
        id: "ch2",
        title: "Top page",
        instructions: "Write topPage(tracker) that returns the page name with the most pageview events (strip the 'pageview:' prefix), or null when none.",
        learning: "The top page is your most-visited route.",
        example: "function topPage(tracker) {\n  var counts = {};\n  for (var i = 0; i < tracker.events.length; i++) {\n    var e = tracker.events[i];\n    if (e.name.indexOf('pageview:') !== 0) { continue; }\n    var page = e.name.slice(9);\n    counts[page] = (counts[page] || 0) + 1;\n  }\n  var best = null, bestN = 0;\n  for (var p in counts) { if (counts[p] > bestN) { best = p; bestN = counts[p]; } }\n  return best;\n}",
        starter: "function topPage(tracker) {\n  return null;\n}",
        test: "function t() {\n  var tr = initTracker();\n  logEvent(tr, 'pageview:/home'); logEvent(tr, 'pageview:/home'); logEvent(tr, 'pageview:/learn');\n  if (topPage(tr) !== '/home') return { passed: false, message: '/home is the top page.' };\n  if (topPage(initTracker()) !== null) return { passed: false, message: 'No views -> null.' };\n  return { passed: true, message: 'Top page found!' };\n}",
      hints: ["Count pages in an object.", "Track the best."],
      solution: "function topPage(tracker) {\n  var counts = {};\n  for (var i = 0; i < tracker.events.length; i++) {\n    var e = tracker.events[i];\n    if (e.name.indexOf('pageview:') !== 0) { continue; }\n    var page = e.name.slice(9);\n    counts[page] = (counts[page] || 0) + 1;\n  }\n  var best = null, bestN = 0;\n  for (var p in counts) { if (counts[p] > bestN) { best = p; bestN = counts[p]; } }\n  return best;\n}"
      },
      {
        id: "ch3",
        title: "Unique pages",
        instructions: "Write uniquePages(tracker) that returns the number of distinct pages with pageview events.",
        learning: "Unique pages shows how much of your site people reach.",
        example: "function uniquePages(tracker) {\n  var seen = {};\n  for (var i = 0; i < tracker.events.length; i++) {\n    var e = tracker.events[i];\n    if (e.name.indexOf('pageview:') === 0) { seen[e.name.slice(9)] = true; }\n  }\n  var n = 0;\n  for (var p in seen) { n++; }\n  return n;\n}",
        starter: "function uniquePages(tracker) {\n  return 0;\n}",
        test: "function t() {\n  var tr = initTracker();\n  logEvent(tr, 'pageview:/a'); logEvent(tr, 'pageview:/a'); logEvent(tr, 'pageview:/b');\n  if (uniquePages(tr) !== 2) return { passed: false, message: 'Two distinct pages -> 2.' };\n  return { passed: true, message: 'Uniques counted!' };\n}",
      hints: ["Use an object as a set.", "Count the keys."],
      solution: "function uniquePages(tracker) {\n  var seen = {};\n  for (var i = 0; i < tracker.events.length; i++) {\n    var e = tracker.events[i];\n    if (e.name.indexOf('pageview:') === 0) { seen[e.name.slice(9)] = true; }\n  }\n  var n = 0;\n  for (var p in seen) { n++; }\n  return n;\n}"
      },
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write dashboard(tracker) that returns { views: totalViews(tracker), top: topPage(tracker), uniques: uniquePages(tracker) }.",
      starter: "function dashboard(tracker) {\n  return null;\n}",
      test: "function t() {\n  var tr = initTracker();\n  logEvent(tr, 'pageview:/home'); logEvent(tr, 'pageview:/home'); logEvent(tr, 'pageview:/learn');\n  var d = dashboard(tr);\n  if (!d || d.views !== 3) return { passed: false, message: 'views should be 3.' };\n  if (d.top !== '/home') return { passed: false, message: 'top should be /home.' };\n  if (d.uniques !== 2) return { passed: false, message: 'uniques should be 2.' };\n  return { passed: true, message: 'You built a real analytics dashboard!' };\n}",
      hints: ["Compose the three helpers.", "Return the object."],
      solution: "function dashboard(tracker) {\n  return { views: totalViews(tracker), top: topPage(tracker), uniques: uniquePages(tracker) };\n}",
      unlock: "Analytics"
    },
    unlock: "Analytics"
  },

  {
    id: "ai-agent-cli",
    num: 28,
    title: "AI Agent Terminal",
    tagline: "Direct an AI agent from the terminal and review its work.",
    skill: "Backend",
    xp: 190,
    type: "js",
    icon: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M7 9l3 2-3 2M12 13h5M10 21h4"/>',
    meta: { kind: "normal", series: "code-to-internet", order: 19 },
    briefing: {
      objective: "Direct an AI agent from the terminal: give it a task, run it, and review the diff before committing.",
      body: "AI agents are like fast junior developers you control from the terminal. You type a task, they read your repo, edit files, and hand you a diff. Your job is to review before you commit. This mission models that loop: a repo, an agent that writes code, and your review gate.",
      terminal: [
        "npm i -g @agent/cli      # install a CLI agent",
        "cd my-site",
        "agent \"add a navbar\"    # the agent reads your repo and edits files",
        "git diff                 # review every change it made",
        "git commit -m \"agent: add navbar\"",
        "",
        "# free agents let you practice exactly this workflow"
      ],
      terminalLink: "https://freebuff.com/?ref=ref-f2f77e07-fee5-4b8d-a9a9-ffe710ff3c5a",
      terminalLinkLabel: "Get Free AI Agents to Practice →"
    },
    challenges: [
      {
        id: "ch1",
        title: "Assign a task",
        instructions: "Write assignTask(agent, task) that sets agent.task = task and returns the agent.",
        learning: "You steer the agent with a plain-English task. The agent remembers it in agent.task.",
        example: "function assignTask(agent, task) {\n  agent.task = task;\n  return agent;\n}",
        starter: "function assignTask(agent, task) {\n  // remember the task on the agent\n  return agent;\n}",
        test: "function t() {\n  var a = { repo: { files: {}, commits: [] }, edits: [] };\n  assignTask(a, 'add a navbar');\n  if (a.task !== 'add a navbar') return { passed: false, message: 'Should store the task on agent.task.' };\n  return { passed: true, message: 'Agent is on the job!' };\n}",
        hints: [
          "Set agent.task = task.",
          "Return the agent.",
          "One line."
        ],
        solution: "function assignTask(agent, task) {\n  agent.task = task;\n  return agent;\n}"
      },
      {
        id: "ch2",
        title: "Let it write",
        instructions: "Write agentRun(agent, file, content) that records an edit { file, content } in agent.edits and writes content into agent.repo.files[file]. Returns the agent.",
        learning: "The agent stages changes into agent.edits and the working files, but nothing is committed yet - you still get to review.",
        example: "function agentRun(agent, file, content) {\n  agent.edits.push({ file: file, content: content });\n  agent.repo.files[file] = content;\n  return agent;\n}",
        starter: "function agentRun(agent, file, content) {\n  // record the edit and write it to the repo files\n  return agent;\n}",
        test: "function t() {\n  var a = { repo: { files: {}, commits: [] }, edits: [] };\n  agentRun(a, 'nav.js', 'console.log(1)');\n  if (!a.edits || a.edits.length !== 1 || a.edits[0].file !== 'nav.js') return { passed: false, message: 'Should record the edit in agent.edits.' };\n  if (a.repo.files['nav.js'] !== 'console.log(1)') return { passed: false, message: 'Should write the file into agent.repo.files.' };\n  if (a.repo.commits.length !== 0) return { passed: false, message: 'Nothing should be committed yet - you still review.' };\n  return { passed: true, message: 'The agent wrote code but left it for review!' };\n}",
        hints: [
          "Init agent.edits if missing.",
          "push { file, content } and set repo.files[file].",
          "Do not touch commits."
        ],
        solution: "function agentRun(agent, file, content) {\n  agent.edits.push({ file: file, content: content });\n  agent.repo.files[file] = content;\n  return agent;\n}"
      },
      {
        id: "ch3",
        title: "Review & commit",
        instructions: "Write reviewCommit(agent, ok) that commits every recorded edit if ok is true (one commit per edit, message 'agent: ' + agent.task), and clears agent.edits either way. Returns agent.repo.",
        learning: "Reviewing is the human's job. Accept and the changes become commits; reject and the edits are dropped without touching the history.",
        example: "function reviewCommit(agent, ok) {\n  if (ok && agent.repo) {\n    for (var i = 0; i < agent.edits.length; i++) {\n      commit(agent.repo, 'agent: ' + agent.task);\n    }\n  }\n  agent.edits = [];\n  return agent.repo;\n}",
        starter: "function reviewCommit(agent, ok) {\n  // if ok, commit each edit; clear edits either way\n  return agent.repo;\n}",
        test: "function t() {\n  var r = initRepo();\n  addFile(r, 'index.html', '<h1>v1</h1>');\n  var a = { repo: r, edits: [], task: 'add footer' };\n  agentRun(a, 'footer.html', '<footer>OK</footer>');\n  reviewCommit(a, true);\n  if (r.commits.length !== 1 || r.commits[0].msg !== 'agent: add footer') return { passed: false, message: 'Accepting should commit each edit with \"agent: <task>\" message.' };\n  if (r.files['footer.html'] !== '<footer>OK</footer>') return { passed: false, message: 'Accepted files should stay in the repo.' };\n  if (a.edits.length !== 0) return { passed: false, message: 'edits should clear after review.' };\n  var r2 = initRepo();\n  addFile(r2, 'a.txt', 'x');\n  var a2 = { repo: r2, edits: [], task: 'add spam' };\n  agentRun(a2, 'spam.txt', 'bad');\n  reviewCommit(a2, false);\n  if (r2.commits.length !== 0) return { passed: false, message: 'Rejecting should commit nothing.' };\n  return { passed: true, message: 'You approved good code and rejected the rest!' };\n}",
        hints: [
          "If ok, loop edits and commit(agent.repo, 'agent: ' + agent.task).",
          "Clear agent.edits no matter what.",
          "Return agent.repo."
        ],
        solution: "function reviewCommit(agent, ok) {\n  if (ok && agent.repo) {\n    for (var i = 0; i < agent.edits.length; i++) {\n      commit(agent.repo, 'agent: ' + agent.task);\n    }\n  }\n  agent.edits = [];\n  return agent.repo;\n}"
      },
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write agentFlow() that: creates a repo, adds 'index.html' = '<h1>Home</h1>', creates an agent with that repo, assigns task 'add footer', runs the agent on 'footer.html' = '<footer>SkillRun</footer>', reviews with ok, and returns the repo - which must contain footer.html and exactly one commit.",
      starter: "function agentFlow() {\n  // repo + agent + task + run + review\n  return null;\n}",
      test: "function t() {\n  var r = agentFlow();\n  if (!r || !r.files) return { passed: false, message: 'Should return a repo.' };\n  if (r.files['footer.html'] !== '<footer>SkillRun</footer>') return { passed: false, message: 'The agent change should be in the repo.' };\n  if (r.commits.length !== 1) return { passed: false, message: 'Exactly one commit after reviewing one edit.' };\n  return { passed: true, message: 'You ran an AI agent, reviewed it, and shipped it. Now do it for real!' };\n}",
      hints: [
        "initRepo, addFile index.html.",
        "agent = { repo: r, edits: [], task: '' }; assignTask; agentRun.",
        "reviewCommit(agent, true) then return r."
      ],
      solution: "function agentFlow() {\n  var r = initRepo();\n  addFile(r, 'index.html', '<h1>Home</h1>');\n  var agent = { repo: r, edits: [], task: '' };\n  assignTask(agent, 'add footer');\n  agentRun(agent, 'footer.html', '<footer>SkillRun</footer>');\n  reviewCommit(agent, true);\n  return r;\n}",
      unlock: "AI Workflows"
    },
    unlock: "AI Workflows"
  },

  {
    id: "ship-it-boss",
    num: 29,
    title: "Ship It",
    tagline: "The boss. Every practical skill at once.",
    skill: "Full Stack",
    xp: 300,
    type: "js",
    icon: '<path d="M20 6L9 17l-5-5"/>',
    meta: { kind: "boss", series: "code-to-internet", order: 20, focusLock: true, hintCap: 1 },
    briefing: {
      objective: "Ship a real site: repo, commit, push, deploy, SEO, sitemap, robots and analytics.",
      body: "This is the boss of From Code to Internet. You will chain everything you built into one pipeline: a repo with commits, a push to a remote, a deploy with a custom domain, SEO head tags, robots.txt, a sitemap, and analytics. Minimal hints. Focus. Ship it."
    },
    challenges: [
      {
        id: "ch1",
        title: "The pipeline",
        instructions: "Write pipeline() that returns a repo named 'site' with one commit 'init', pushed to a remote, returning the remote.",
        learning: "Reuse initRepo, commit, createRemote, push. Give the repo a name.",
        example: "function pipeline() {\n  var r = initRepo(); r.name = 'site';\n  addFile(r, 'index.html', '<h1>My Site</h1>');\n  commit(r, 'init');\n  var rem = createRemote();\n  push(rem, r);\n  return rem;\n}",
        starter: "function pipeline() {\n  // repo + commit + push\n  return null;\n}",
        test: "function t() {\n  var rem = pipeline();\n  if (!rem || !rem.repos['site']) return { passed: false, message: 'Remote should contain repo \"site\".' };\n  if (rem.repos['site'].commits.length !== 1 || rem.repos['site'].commits[0].msg !== 'init') return { passed: false, message: 'Should have one commit \"init\".' };\n  return { passed: true, message: 'Pipeline up!' };\n}",
      hints: [
        "Give the repo a name property.",
        "addFile, commit, then push."
      ],
      solution: "function pipeline() {\n  var r = initRepo(); r.name = 'site';\n  addFile(r, 'index.html', '<h1>My Site</h1>');\n  commit(r, 'init');\n  var rem = createRemote();\n  push(rem, r);\n  return rem;\n}"
      },
      {
        id: "ch2",
        title: "The live site",
        instructions: "Write launchSite() that deploys { name: 'site' } and connects the domain 'site.dev', returning { deployment: d, domain: d.domain }.",
        learning: "Combine deploy and connectDomain. Reuse both helpers.",
        example: "function launchSite() {\n  var d = deploy({ name: 'site' });\n  var dom = { name: 'site.dev', records: [] };\n  connectDomain(dom, d);\n  return { deployment: d, domain: d.domain };\n}",
        starter: "function launchSite() {\n  // deploy + domain\n  return null;\n}",
        test: "function t() {\n  var out = launchSite();\n  if (!out || !out.deployment || out.deployment.url.indexOf('site') === -1) return { passed: false, message: 'Should deploy a project named site.' };\n  if (out.domain !== 'site.dev') return { passed: false, message: 'Domain should be site.dev.' };\n  return { passed: true, message: 'Live and reachable!' };\n}",
      hints: [
        "deploy the project.",
        "connectDomain with a domain object."
      ],
      solution: "function launchSite() {\n  var d = deploy({ name: 'site' });\n  var dom = { name: 'site.dev', records: [] };\n  connectDomain(dom, d);\n  return { deployment: d, domain: d.domain };\n}"
      },
    ],
    build: {
      title: "The Final Ship",
      prompt: "Write ship() that returns an object with all of these:\n\n\u2022 repo: a repo named 'portfolio' with commit 'init' pushed to a remote (return the remote)\n\u2022 head: headTags('Portfolio', 'My work')\n\u2022 robots: robotsContent()\n\u2022 sitemap: sitemap(['/', '/projects'])\n\u2022 lighthouse: lighthouse([93, 91, 95]).pass\n\u2022 security: escapeHtml('<b>x</b>')",
      starter: "function ship() {\n  // everything at once\n  return null;\n}",
      test: "function t() {\n  var s = ship();\n  if (!s) return { passed: false, message: 'ship() should return an object.' };\n  if (!s.repo || !s.repo.repos['portfolio']) return { passed: false, message: 'repo should be a remote containing \"portfolio\".' };\n  if (s.head.indexOf('Portfolio') === -1 || s.head.indexOf('description') === -1) return { passed: false, message: 'head needs title + description.' };\n  if (s.robots.indexOf('User-agent') === -1) return { passed: false, message: 'robots needs rules.' };\n  if (s.sitemap.indexOf('</urlset>') === -1) return { passed: false, message: 'sitemap must be complete XML.' };\n  if (s.lighthouse !== true) return { passed: false, message: 'lighthouse should pass.' };\n  if (s.security.indexOf('<') !== -1) return { passed: false, message: 'security must escape brackets.' };\n  return { passed: true, message: 'MISSION COMPLETE. You shipped a real website to the internet.' };\n}",
      hints: [
        "Reuse pipeline-style code for the repo.",
        "headTags, robotsContent, sitemap, lighthouse, escapeHtml.",
        "Put all six results in one object."
      ],
      solution: "function ship() {\n  var r = initRepo(); r.name = 'portfolio';\n  addFile(r, 'index.html', '<h1>Portfolio</h1>');\n  commit(r, 'init');\n  var rem = createRemote();\n  push(rem, r);\n  return {\n    repo: rem,\n    head: headTags('Portfolio', 'My work'),\n    robots: robotsContent(),\n    sitemap: sitemap(['/', '/projects']),\n    lighthouse: lighthouse([93, 91, 95]).pass,\n    security: escapeHtml('<b>x</b>')\n  };\n}",
      unlock: "Ship It"
    },
    unlock: "Ship It"
  }
]);