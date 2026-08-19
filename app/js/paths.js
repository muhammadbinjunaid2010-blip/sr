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
  { id: "web-runner",       pathId: "web",         order: 1, icon: '<path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 5l-2 14"/>', title: "Web Runner",           desc: "10 missions from your first HTML page to a full application." },
  { id: "code-to-internet", pathId: "web",         order: 2, icon: '<path d="M12 3a9 9 0 1 0 9 9h-9V3z"/><path d="M12 12l6-6M12 12h9"/>', title: "From Code to Internet", desc: "17 missions + boss. Take a project live: Git, GitHub, Vercel, SEO and analytics.", unlockSeries: "web-runner" },
  { id: "speed-runner",     pathId: "web",         order: 3, icon: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M5 3 2 6M22 6l-3-3M6 2l-4 4M18 2l4 4M2 13h2M20 13h2"/>', title: "Speed Runner",         desc: "Practice series. Beat the clock on tiny challenges." },
  { id: "bug-hunter",       pathId: "web",         order: 4, icon: '<rect x="8" y="6" width="8" height="14" rx="4"/><path d="M19 7l-3 3M5 7l3 3M12 3v3M2 13h2M20 13h2M8 21v-2M16 21v-2M8 6V4M16 6V4"/>', title: "Bug Hunter",           desc: "Practice series. Fix broken code like a pro." },
  { id: "builder",          pathId: "web",         order: 5, icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>', title: "Builder",              desc: "Practice series. Ship small builds from scratch." },
  { id: "programmer",       pathId: "programming", order: 1, icon: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>', title: "Programmer",           desc: "Python, from print to classes, files and real automation." },
  { id: "circuit-runner",   pathId: "electronics", order: 1, icon: '<path d="M2 12h4l2-6 4 12 2-6h6"/>', title: "Circuit Runner",       desc: "Power, breadboards, sensors and Arduino builds." }
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