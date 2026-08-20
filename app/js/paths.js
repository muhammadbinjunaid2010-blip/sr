/* ============================================================
   SkillRun - Paths, Series & Game Rules (V2 expansion)
   Loaded AFTER missions.js + missions-js.js, BEFORE app.js /
   workspace.js. Additive only: extends MISSIONS, PRACTICE,
   ACHIEVEMENTS and adds PATHS / SERIES / MISSION_META plus
   the smart-XP and mastery helpers.
   ============================================================ */

/* ---------------- Paths ---------------- */

var PATHS = [
  { id: "web",          title: "Web Development",     icon: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>', accent: "green",  desc: "HTML, CSS, JavaScript and the practical skills to ship real websites." },
  { id: "programming",  title: "Programming",         icon: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>', accent: "purple", desc: "Python from your first print to classes, APIs and automation." },
  { id: "electronics",  title: "Electronics",         icon: '<path d="M2 12h4l2-6 4 12 2-6h6"/>', accent: "cyan",   desc: "Build real circuits and Arduino projects with the built-in simulator." }
];

function pathOf(id) {
  for (var i = 0; i < PATHS.length; i++) { if (PATHS[i].id === id) { return PATHS[i]; } }
  return PATHS[0];
}

/* The course the learner is currently studying. Persisted as
   p.selectedCourse (p.path is kept in sync for backwards compat). */
function selectedCourseId(p) {
  var id = (p && (p.selectedCourse || p.path)) || "web";
  for (var i = 0; i < PATHS.length; i++) { if (PATHS[i].id === id) { return id; } }
  return "web";
}

function setSelectedCourse(p, id) {
  if (!id) { return; }
  p.selectedCourse = id;
  p.path = id;
}

/* ---------------- Series ---------------- */

var SERIES = [
  { id: "w1-webpage",   pathId: "web", order: 1,  icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/>', title: "Your First Webpage",   desc: "From a blank page to your first website.", start: true },
  { id: "w2-toolbox",   pathId: "web", order: 2,  icon: '<path d="M4 7h16M4 12h16M4 17h16"/>', title: "HTML Toolbox",          desc: "Lists, links, images, text, tables and semantic structure.", unlockSeries: "w1-webpage" },
  { id: "w3-forms",     pathId: "web", order: 3,  icon: '<path d="M4 5h16v14H4z"/><path d="M8 9h8M8 13h8M8 17h5"/>', title: "Forms",                 desc: "Labels, inputs, buttons, selects and a real contact page.", unlockSeries: "w2-toolbox" },
  { id: "w4-css",       pathId: "web", order: 4,  icon: '<path d="M4 20l16-16M14 4h6v6M4 10v10M10 4H4v6"/>', title: "CSS",                    desc: "Style, colors, spacing, flexbox and responsive layouts.", unlockSeries: "w3-forms" },
  { id: "w5-js",        pathId: "web", order: 5,  icon: '<path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 5l-2 14"/>', title: "JavaScript",            desc: "Buttons, variables, functions, conditions, DOM and validation.", unlockSeries: "w4-css" },
  { id: "w6-data",      pathId: "web", order: 6,  icon: '<path d="M3 5h18M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5M8 3v4M16 3v4M3 13h18"/>', title: "Real Website Data",    desc: "Send forms and store submissions with Web3Forms, Google Sheets and Apps Script.", unlockSeries: "w5-js" },
  { id: "w7-git",       pathId: "web", order: 7,  icon: '<path d="M6 3v12M6 15a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM18 3v8M18 11a4 4 0 0 1 0 8"/>', title: "Git & GitHub",          desc: "Terminal, files, commits, repos, push and pull.", unlockSeries: "w6-data" },
  { id: "w8-online",    pathId: "web", order: 8,  icon: '<path d="M3 17l9-13 9 13H3z"/><path d="M12 9v4M12 17h.01"/>', title: "Put It Online",        desc: "Deploy with Vercel and take your project from local to live.", unlockSeries: "w7-git" },
  { id: "w9-seo",       pathId: "web", order: 9,  icon: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>', title: "Get Found",            desc: "SEO, metadata, sitemap, robots.txt and Search Console.", unlockSeries: "w8-online" },
  { id: "w10-analytics",pathId: "web", order: 10, icon: '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 6-6"/>', title: "Understand Your Visitors", desc: "Google Analytics: visitors, sessions, pages and events.", unlockSeries: "w9-seo" },
  { id: "w11-launch",   pathId: "web", order: 11, icon: '<path d="M20 6L9 17l-5-5"/>', title: "Build & Launch",         desc: "The final course boss: build and ship a complete website.", unlockSeries: "w10-analytics" },
  { id: "developer-gift", pathId: "web", order: 12, icon: '<path d="M4 17l6-5-6-5M12 19h8"/>', title: "Developer Gift",       desc: "Bonus unlocked: the terminal, git from the CLI, and your free AI agent.", unlockSeries: "w11-launch" },
  { id: "speed-runner", pathId: "web", order: 12, icon: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M5 3 2 6M22 6l-3-3M6 2l-4 4M18 2l4 4M2 13h2M20 13h2"/>', title: "Speed Runner",         desc: "Practice series. Beat the clock on tiny challenges." },
  { id: "bug-hunter",   pathId: "web", order: 13, icon: '<rect x="8" y="6" width="8" height="14" rx="4"/><path d="M19 7l-3 3M5 7l3 3M12 3v3M2 13h2M20 13h2M8 21v-2M16 21v-2M8 6V4M16 6V4"/>', title: "Bug Hunter",           desc: "Practice series. Fix broken code like a pro." },
  { id: "builder",      pathId: "web", order: 14, icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>', title: "Builder",              desc: "Practice series. Ship small builds from scratch." },
  { id: "programmer",   pathId: "programming", order: 1, icon: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>', title: "Programmer",           desc: "Python, from print to classes, files and real automation." },
  { id: "circuit-runner",pathId: "electronics", order: 1, icon: '<path d="M2 12h4l2-6 4 12 2-6h6"/>', title: "Circuit Runner",       desc: "Power, breadboards, sensors and Arduino builds." }
];

function seriesOf(id) {
  for (var i = 0; i < SERIES.length; i++) { if (SERIES[i].id === id) { return SERIES[i]; } }
  return null;
}

function seriesMissions(seriesId) {
  var ids = [];
  for (var id in MISSION_META) {
    if (MISSION_META[id].series === seriesId) { ids.push(id); }
  }
  ids.sort(function (a, b) {
    var oa = MISSION_META[a].order || 9999, ob = MISSION_META[b].order || 9999;
    if (oa !== ob) { return oa - ob; }
    return (MISSION_META[a].num || 0) - (MISSION_META[b].num || 0);
  });
  return ids;
}

function seriesProgress(p, seriesId) {
  var ids = seriesMissions(seriesId);
  var done = 0;
  for (var i = 0; i < ids.length; i++) { if (p.doneMissions.indexOf(ids[i]) !== -1) { done++; } }
  return { total: ids.length, done: done, pct: ids.length ? Math.round((done / ids.length) * 100) : 0 };
}

function seriesUnlocked(p, series) {
  if (!series.unlockSeries) { return true; }
  return seriesProgress(p, series.unlockSeries).done >= seriesProgress(p, series.unlockSeries).total;
}

function pathMissions(pathId) {
  var out = [];
  for (var i = 0; i < SERIES.length; i++) {
    if (SERIES[i].pathId === pathId) {
      var ids = seriesMissions(SERIES[i].id);
      for (var j = 0; j < ids.length; j++) { out.push(ids[j]); }
    }
  }
  return out;
}

function courseProgress(p, pathId) {
  var ids = pathMissions(pathId);
  var done = 0;
  for (var i = 0; i < ids.length; i++) { if (p.doneMissions.indexOf(ids[i]) !== -1) { done++; } }
  return { total: ids.length, done: done, pct: ids.length ? Math.round((done / ids.length) * 100) : 0 };
}

function courseSkillNames(pathId) {
  var out = [];
  for (var i = 0; i < MISSIONS.length; i++) {
    var m = MISSIONS[i];
    var meta = MISSION_META[m.id] || {};
    var series = meta.series ? seriesOf(meta.series) : null;
    if (series && series.pathId === pathId && m.unlock && out.indexOf(m.unlock) === -1) {
      out.push(m.unlock);
    }
  }
  return out;
}

function allMissions() {
  return MISSIONS.slice();
}

/* Course-relative mission number. Missions are numbered per course, so the
   first Programmer mission is "Mission 1", not its global position. */
function missionCourseNum(m) {
  var meta = MISSION_META[m.id] || {};
  var series = meta.series ? seriesOf(meta.series) : null;
  var pathId = series ? series.pathId : (m.pathId || "web");
  var ids = pathMissions(pathId);
  for (var i = 0; i < ids.length; i++) {
    if (ids[i] === m.id) { return i + 1; }
  }
  return m.num || 1;
}

/* Skill names that belong to a course, in mission order. Used to keep the
   profile skill bar scoped to the course the learner picked. */
function courseSkills(pathId) {
  var out = [];
  for (var i = 0; i < MISSIONS.length; i++) {
    var m = MISSIONS[i];
    var meta = MISSION_META[m.id] || {};
    var series = meta.series ? seriesOf(meta.series) : null;
    if (series && series.pathId === pathId && m.skill && out.indexOf(m.skill) === -1) {
      out.push(m.skill);
    }
  }
  return out;
}

function courseSkillOrder(pathId) {
  var skills = courseSkills(pathId);
  var out = [];
  for (var i = 0; i < SKILL_ORDER.length; i++) {
    if (skills.indexOf(SKILL_ORDER[i]) !== -1) { out.push(SKILL_ORDER[i]); }
  }
  for (var j = 0; j < skills.length; j++) {
    if (out.indexOf(skills[j]) === -1) { out.push(skills[j]); }
  }
  return out;
}

/* ---------------- Mission kinds & meta ---------------- */

/* kinds: normal, speed, debug, boss, build, reverse, fix, daily, weekly,
   mystery, streak, mastery. The existing `type` field ("html"/"js") stays
   the sandbox evaluator; `kind` is the game type. */

var MISSION_META = {
  "your-first-page":        { kind: "normal", series: "web-runner", order: 1 },
  "tell-your-story":        { kind: "normal", series: "web-runner", order: 2 },
  "make-it-yours":          { kind: "normal", series: "web-runner", order: 3 },
  "design-the-interface":   { kind: "normal", series: "web-runner", order: 4 },
  "make-it-interactive":    { kind: "normal", series: "web-runner", order: 5, revisit: ["HTML", "CSS"] },
  "build-a-game":           { kind: "normal", series: "web-runner", order: 6, revisit: ["JavaScript"] },
  "store-something":        { kind: "normal", series: "web-runner", order: 7 },
  "talk-to-the-internet":   { kind: "normal", series: "web-runner", order: 8 },
  "build-an-application":   { kind: "normal", series: "web-runner", order: 9 },
  "final-run":              { kind: "boss",   series: "web-runner", order: 10, focusLock: true, hintCap: 1 }
};

function missionKindOf(id) {
  var m = MISSION_META[id];
  return (m && m.kind) || "normal";
}

function missionMetaOf(id) {
  return MISSION_META[id] || { kind: "normal", series: "web-runner", order: 9999 };
}

function registerMissions(list) {
  for (var i = 0; i < list.length; i++) {
    var m = list[i];
    MISSIONS.push(m);
    if (m.meta) { MISSION_META[m.id] = m.meta; }
  }
}

/* ---------------- Smart XP rules ---------------- */

function partBaseXp(mission) {
  return Math.max(5, Math.round(mission.xp / (mission.challenges.length + 1)));
}

function smartMultiplier(state) {
  var m = 1;
  var hints = state.hints || 0;
  if (hints >= 3) { m *= 0.8; } else if (hints >= 2) { m *= 0.85; } else if (hints >= 1) { m *= 0.9; }
  if (state.solution) { m *= 0.5; }
  if (state.focus) { m *= 0.8; }
  return m;
}

function earnedXp(base, state) {
  return Math.max(1, Math.round(base * smartMultiplier(state)));
}

function xpBreakdown(base, state) {
  var hintMult = 1, hintPen = 0, solMult = 1, solPen = 0, focMult = 1, focPen = 0;
  var hints = state.hints || 0;
  if (hints >= 3) { hintMult = 0.8; } else if (hints >= 2) { hintMult = 0.85; } else if (hints >= 1) { hintMult = 0.9; }
  if (hintMult !== 1) { hintPen = Math.round(base * (1 - hintMult)); }
  if (state.solution) { solMult = 0.5; solPen = Math.round((base - hintPen) * 0.5); }
  if (state.focus) { focMult = 0.8; focPen = Math.round((base - hintPen - solPen) * 0.2); }
  var earned = Math.max(1, base - hintPen - solPen - focPen);
  return { base: base, hintPen: hintPen, solPen: solPen, focPen: focPen, earned: earned };
}

function focusTrackedMission(missionId) {
  var m = MISSION_META[missionId];
  return !!(m && (m.focusLock || m.kind === "boss" || m.kind === "mastery"));
}

/* ---------------- Mastery ---------------- */

/* Mastery per skill = missions done for that skill / all missions for that
   skill across the whole mission pool, weighted by "clean" completions. */

function missionSkillTotal(skillName) {
  var n = 0;
  for (var i = 0; i < MISSIONS.length; i++) { if (MISSIONS[i].skill === skillName) { n++; } }
  return n;
}

function masteryOf(p, skillName) {
  var total = missionSkillTotal(skillName);
  if (!total) { return 0; }
  var done = 0;
  for (var i = 0; i < MISSIONS.length; i++) {
    var m = MISSIONS[i];
    if (m.skill !== skillName) { continue; }
    var meta = MISSION_META[m.id] || {};
    if (p.doneMissions.indexOf(m.id) !== -1) { done += 1; }
    if (p.doneMissions.indexOf(m.id) !== -1 && (meta.kind === "boss" || meta.kind === "mastery")) { done += 0.25; }
    if (p.doneMissions.indexOf(m.id) !== -1 && p.cleanMissions && p.cleanMissions.indexOf(m.id) !== -1) { done += 0.25; }
  }
  return Math.min(100, Math.round((done / total) * 100));
}

function overallMastery(p) {
  var total = 0, sum = 0;
  for (var i = 0; i < SKILL_ORDER.length; i++) {
    var s = masteryOf(p, SKILL_ORDER[i]);
    if (missionSkillTotal(SKILL_ORDER[i]) > 0) { total += 100; sum += s; }
  }
  return total ? Math.round((sum / total) * 100) : 0;
}

/* ---------------- Clean (no-hint / no-solution) tracking ---------------- */

function isClean(p, missionId) {
  return !!(p.cleanMissions && p.cleanMissions.indexOf(missionId) !== -1);
}

/* ---------------- XP history (for the leaderboard) ---------------- */

function isoDateStr(d) {
  var dd = d || new Date();
  return dd.getFullYear() + "-" + pad2(dd.getMonth() + 1) + "-" + pad2(dd.getDate());
}

function pad2(n) { return (n < 10 ? "0" : "") + n; }

function skillrunRecordXp(p, amount) {
  if (!amount) { return; }
  if (!Array.isArray(p.xpLog)) { p.xpLog = []; }
  p.xpLog.push({ d: isoDateStr(), xp: amount });
  var cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 62);
  var cut = isoDateStr(cutoff);
  while (p.xpLog.length && p.xpLog[0].d < cut) { p.xpLog.shift(); }
  if (p.xpLog.length > 500) { p.xpLog = p.xpLog.slice(p.xpLog.length - 500); }
}

function xpSince(p, days) {
  if (!Array.isArray(p.xpLog)) { return 0; }
  var since = new Date();
  since.setDate(since.getDate() - (days - 1));
  var key = isoDateStr(since);
  var sum = 0;
  for (var i = 0; i < p.xpLog.length; i++) {
    if (p.xpLog[i].d >= key) { sum += p.xpLog[i].xp; }
  }
  return sum;
}

function xpThisWeek(p) {
  var d = new Date();
  var dow = (d.getDay() + 6) % 7; // Monday = 0
  d.setDate(d.getDate() - dow);
  var key = isoDateStr(d);
  if (!Array.isArray(p.xpLog)) { return 0; }
  var sum = 0;
  for (var i = 0; i < p.xpLog.length; i++) {
    if (p.xpLog[i].d >= key) { sum += p.xpLog[i].xp; }
  }
  return sum;
}

function xpThisMonth(p) {
  var key = isoDateStr(new Date()).slice(0, 7);
  if (!Array.isArray(p.xpLog)) { return 0; }
  var sum = 0;
  for (var i = 0; i < p.xpLog.length; i++) {
    if (p.xpLog[i].d.indexOf(key) === 0) { sum += p.xpLog[i].xp; }
  }
  return sum;
}

function defaultRunnerName() {
  var n = 102 + Math.floor(Math.random() * 898);
  return "SpeedRunner" + (n < 1000 ? "0" : "") + n;
}

/* ---------------- Daily token budget ---------------- */

/* You earn XP ("tokens") but only up to a daily budget. Returning on the next
   consecutive day raises the budget a little, so streaks have a real payoff. */

var TOKEN_BASE_BUDGET = 100;
var TOKEN_STREAK_BONUS = 25;
var TOKEN_MAX_BUDGET = 250;

function tokenToday(p) {
  var t = isoDateStr();
  if (!p.tokens) { p.tokens = { budget: TOKEN_BASE_BUDGET, used: 0, day: "" }; }
  if (p.tokens.day === t) { return p.tokens; }
  var consecutive = p.tokens.day === isoDateStr(new Date(Date.now() - 86400000));
  p.tokens.budget = consecutive
    ? Math.min(TOKEN_MAX_BUDGET, (p.tokens.budget || TOKEN_BASE_BUDGET) + TOKEN_STREAK_BONUS)
    : TOKEN_BASE_BUDGET;
  p.tokens.day = t;
  p.tokens.used = 0;
  return p.tokens;
}

/* Cap an XP award against today's budget. Returns how much was actually
   granted and tracks the used amount on p.tokens. */
function tokenCap(p, amount) {
  var tk = tokenToday(p);
  var remaining = Math.max(0, tk.budget - tk.used);
  var granted = Math.min(amount, remaining);
  tk.used += granted;
  return granted;
}

function tokenStatus(p) {
  var tk = tokenToday(p);
  return { budget: tk.budget, used: tk.used, remaining: Math.max(0, tk.budget - tk.used), next: tk.budget + TOKEN_STREAK_BONUS };
}