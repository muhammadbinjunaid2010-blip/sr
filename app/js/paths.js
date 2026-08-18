/* ============================================================
   SkillRun - Paths, Series & Game Rules (V2 expansion)
   Loaded AFTER missions.js + missions-js.js, BEFORE app.js /
   workspace.js. Additive only: extends MISSIONS, PRACTICE,
   ACHIEVEMENTS and adds PATHS / SERIES / MISSION_META plus
   the smart-XP and mastery helpers.
   ============================================================ */

/* ---------------- Paths ---------------- */

var PATHS = [
  { id: "web",          title: "Web Development", emoji: "🌐", accent: "green",  desc: "HTML, CSS, JavaScript and the practical skills to ship real websites." },
  { id: "programming",  title: "Programming",     emoji: "💻", accent: "purple", desc: "Python from your first print to classes, APIs and automation." },
  { id: "electronics",  title: "Electronics",     emoji: "🔌", accent: "cyan",   desc: "Build real circuits and Arduino projects with the built-in simulator." }
];

function pathOf(id) {
  for (var i = 0; i < PATHS.length; i++) { if (PATHS[i].id === id) { return PATHS[i]; } }
  return PATHS[0];
}

/* ---------------- Series ---------------- */

var SERIES = [
  { id: "web-runner",       pathId: "web",         order: 1, emoji: "🌐", title: "Web Runner",           desc: "10 missions from your first HTML page to a full application." },
  { id: "code-to-internet", pathId: "web",         order: 2, emoji: "🚀", title: "From Code to Internet", desc: "17 missions + boss. Take a project live: Git, GitHub, Vercel, SEO and analytics.", unlockSeries: "web-runner" },
  { id: "speed-runner",     pathId: "web",         order: 3, emoji: "⚡", title: "Speed Runner",         desc: "Practice series. Beat the clock on tiny challenges." },
  { id: "bug-hunter",       pathId: "web",         order: 4, emoji: "🐞", title: "Bug Hunter",           desc: "Practice series. Fix broken code like a pro." },
  { id: "builder",          pathId: "web",         order: 5, emoji: "🔨", title: "Builder",              desc: "Practice series. Ship small builds from scratch." },
  { id: "programmer",       pathId: "programming", order: 1, emoji: "💻", title: "Programmer",           desc: "Python, from print to classes, files and real automation." },
  { id: "circuit-runner",   pathId: "electronics", order: 1, emoji: "🔌", title: "Circuit Runner",       desc: "Power, breadboards, sensors and Arduino builds." }
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

function allMissions() {
  return MISSIONS.slice();
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