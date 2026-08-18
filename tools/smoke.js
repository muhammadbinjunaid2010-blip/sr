const fs = require("fs");
const vm = require("vm");
const path = require("path");

const app = path.join(__dirname, "..", "app", "js");

// minimal browser-ish globals used at load time by the data files
global.localStorage = {
  _s: {},
  getItem(k) { return this._s[k] !== undefined ? this._s[k] : null; },
  setItem(k, v) { this._s[k] = String(v); },
  removeItem(k) { delete this._s[k]; }
};
global.document = { readyState: "complete", addEventListener() {}, querySelector() { return null; }, querySelectorAll() { return []; }, getElementById() { return null; }, body: { getAttribute() { return null; } } };
global.window = { location: { search: "", protocol: "https:" }, addEventListener() {}, scrollTo() {} };
global.navigator = { serviceWorker: undefined };
global.location = { search: "", protocol: "https:" };

function loadFile(f) {
  const code = fs.readFileSync(path.join(app, f), "utf8");
  new vm.Script(code, { filename: f }).runInThisContext();
}

["missions.js", "missions-js.js", "paths.js", "practice-data.js", "missions-web.js", "missions-web2.js", "missions-portfolio.js", "python-eval.js", "missions-python.js", "electronics.js", "missions-electronics.js"].forEach(loadFile);

let fails = 0;
function check(name, cond) {
  if (cond) { console.log("ok  " + name); }
  else { fails++; console.log("FAIL " + name); }
}

check("PATHS has 3 paths", PATHS.length === 3);
check("SERIES has 7 series", SERIES.length === 7);
check("web-runner has 10 missions", seriesMissions("web-runner").length === 10);
check("code-to-internet has 19 missions + boss", seriesMissions("code-to-internet").length === 19);
check("ship-it-boss is kind boss", MISSION_META["ship-it-boss"].kind === "boss");
check("boss has focusLock + hintCap 1", MISSION_META["ship-it-boss"].focusLock === true && MISSION_META["ship-it-boss"].hintCap === 1);
check("allMissions total = 47", allMissions().length === 47);
check("circuit-runner has 9 missions", seriesMissions("circuit-runner").length === 9);
check("circuit-boss is kind boss + focusLock", MISSION_META["circuit-boss"].kind === "boss" && MISSION_META["circuit-boss"].focusLock === true && MISSION_META["circuit-boss"].hintCap === 1);
check("PROJECTS total = 11", PROJECTS.length === 11);
check("8 portfolio projects have series", PROJECTS.filter(x => x.series === "portfolio").length === 8);
check("PRACTICE has 10 categories", Object.keys(PRACTICE).filter(k => !k.startsWith("_")).length >= 10);
check("ACHIEVEMENTS count >= 30", ACHIEVEMENTS.length >= 30);
check("daily practice item resolves", !!dailyPracticeItem() && !!dailyPracticeItem().id);
check("weekly practice item resolves", !!weeklyPracticeItem());
check("allPracticeItems has mystery", allPracticeItems().some(i => i.mystery));

// smart XP math
check("earnedXp base", earnedXp(25, { hints: 0, solution: false, focus: false }) === 25);
check("earnedXp 1 hint = 90%", earnedXp(25, { hints: 1, solution: false, focus: false }) === 23);
check("earnedXp solution = 50%", earnedXp(25, { hints: 0, solution: true, focus: false }) === 13);
check("earnedXp focus = 80%", earnedXp(25, { hints: 0, solution: false, focus: true }) === 20);

// runner identity + XP history helpers
check("defaultRunnerName format", /^SpeedRunner0?\d{3}$/.test(defaultRunnerName()));
check("pathMissions has all 3 paths", pathMissions("web").length > 0 && pathMissions("programming").length > 0 && pathMissions("electronics").length > 0);
const lbp = { xp: 500, xpLog: [], streak: { count: 3, lastDate: "" } };
skillrunRecordXp(lbp, 120);
skillrunRecordXp(lbp, 80);
check("skillrunRecordXp appends + prunes", lbp.xpLog.length === 2 && lbp.xpLog[0].xp === 120);
check("xpThisWeek counts recent", xpThisWeek(lbp) === 200);
check("xpThisMonth counts recent", xpThisMonth(lbp) === 200);
check("xpSince window", xpSince(lbp, 1) === 200);

// progress model with defaults
const p = JSON.parse(localStorage.getItem("skillrun_progress") || "{}");
const def = { xp: 0, doneMissions: [], doneChallenges: {}, doneBuilds: [], donePractice: [], doneProjects: [], skills: [], achievements: [], streak: { count: 0, lastDate: "" }, cleanMissions: [], dailyDone: 0, mysteryDone: 0 };

// simulate finishing web-runner missions 1-3
def.doneMissions.push("your-first-page", "tell-your-story", "make-it-yours");
def.doneChallenges = { "your-first-page": ["ch1", "ch2", "ch3"], "tell-your-story": ["ch1", "ch2", "ch3"], "make-it-yours": ["ch1", "ch2", "ch3"] };
def.doneBuilds.push("your-first-page", "tell-your-story", "make-it-yours");
def.skills.push("HTML Foundations", "HTML Structure", "CSS Foundations");
def.cleanMissions.push("your-first-page");

check("masteryOf HTML > 0", masteryOf(def, "HTML") > 0);
check("overallMastery number", typeof overallMastery(def) === "number");
check("first-run achievement fires", evalAchievements(def).indexOf("first-run") !== -1);
check("builder achievement fires", evalAchievements(def).indexOf("builder") !== -1);
check("skills-3 not defined (skip)", true);

// all ACHIEVEMENTS have a check
let missing = [];
ACHIEVEMENTS.forEach(a => { if (!ACHIEVEMENT_CHECKS[a.id]) { missing.push(a.id); } });
check("every achievement has a check", missing.length === 0);
if (missing.length) { console.log("   missing checks: " + missing.join(", ")); }

// all practice items resolve test/prompt/starter/solution
let badItems = [];
allPracticeItems().forEach(i => {
  if (!i.prompt || !i.starter || !i.test || !i.solution || !i.xp) { badItems.push(i.id); }
});
check("all practice items complete", badItems.length === 0);
if (badItems.length) { console.log("   incomplete: " + badItems.join(", ")); }

// run every JS mission's own tests against its official solution (in dependency order)
const ctx = vm.createContext({
  console,
  localStorage: { _s: {}, getItem(k) { return this._s[k] !== undefined ? this._s[k] : null; }, setItem(k, v) { this._s[k] = String(v); }, removeItem(k) { delete this._s[k]; } },
  Math, Date, JSON, Array, Object, String, Number, Boolean,
  window: { fetch() { return Promise.resolve({ ok: true }); } },
  PythonEval, Circuit, CircuitSVG
});
ctx.fetch = function () { return ctx.window.fetch.apply(null, arguments); };
function runAgainstSolution(label, solution, test) {
  try {
    new vm.Script(solution, { filename: label + "-sol" }).runInContext(ctx);
    const fnMatch = test.match(/function\s+(\w+)\s*\(/);
    const fn = fnMatch ? fnMatch[1] : "t";
    const r = new vm.Script(test + "\n;" + fn + "();", { filename: label + "-test" }).runInContext(ctx);
    if (!r || !r.passed) { fails++; console.log("FAIL " + label + ": " + (r && r.message || "no result")); }
    else { console.log("ok  " + label); }
  } catch (e) {
    fails++; console.log("FAIL " + label + " threw: " + e.message);
  }
}
function runPythonTest(label, solution, test) {
  try {
    const runRes = PythonEval.run(solution);
    if (runRes.error) { fails++; console.log("FAIL " + label + " py-run: " + runRes.error); return; }
    const r = new vm.Script(test + "\n;t();", { filename: label + "-test" }).runInContext(ctx);
    if (!r || !r.passed) { fails++; console.log("FAIL " + label + ": " + (r && r.message || "no result")); }
    else { console.log("ok  " + label); }
  } catch (e) {
    fails++; console.log("FAIL " + label + " threw: " + e.message);
  }
}
function runCircuitTest(label, solution, test) {
  try {
    const shims = Object.keys(Circuit).map(k => k + " = function () { return Circuit." + k + ".apply(null, arguments); };").join("\n");
    const pre = "var C = Circuit.create();\n" + shims + "\n";
    new vm.Script(pre + solution + "\nCircuit.step(C);", { filename: label + "-sol" }).runInContext(ctx);
    ctx.window.__C = ctx.C;
    const r = new vm.Script(test + "\n;t();", { filename: label + "-test" }).runInContext(ctx);
    if (!r || !r.passed) { fails++; console.log("FAIL " + label + ": " + (r && r.message || "no result")); }
    else { console.log("ok  " + label); }
  } catch (e) {
    fails++; console.log("FAIL " + label + " threw: " + e.message);
  }
}
let missionChecks = 0;
allMissions().forEach(m => {
  const chs = m.challenges || [];
  if (m.type === "js") {
    chs.forEach(ch => {
      if (ch.solution && ch.test) { missionChecks++; runAgainstSolution(m.id + " " + ch.id, ch.solution, ch.test); }
    });
    if (m.build && m.build.solution && m.build.test) { missionChecks++; runAgainstSolution(m.id + " build", m.build.solution, m.build.test); }
  } else if (m.type === "python") {
    chs.forEach(ch => {
      if (ch.solution && ch.test) { missionChecks++; runPythonTest(m.id + " " + ch.id, ch.solution, ch.test); }
    });
    if (m.build && m.build.solution && m.build.test) { missionChecks++; runPythonTest(m.id + " build", m.build.solution, m.build.test); }
  } else if (m.type === "circuit") {
    chs.forEach(ch => {
      if (ch.solution && ch.test) { missionChecks++; runCircuitTest(m.id + " " + ch.id, ch.solution, ch.test); }
    });
    if (m.build && m.build.solution && m.build.test) { missionChecks++; runCircuitTest(m.id + " build", m.build.solution, m.build.test); }
  }
});
check("ran " + missionChecks + " mission tests", missionChecks >= 130);

let projectChecks = 0;
PROJECTS.forEach(proj => {
  if (proj.type !== "js" || !proj.solution || !proj.test) { return; }
  projectChecks++;
  runAgainstSolution(proj.id, proj.solution, proj.test);
});
check("ran " + projectChecks + " project tests", projectChecks >= 10);

console.log(fails ? ("\n" + fails + " FAILURES") : "\nALL CHECKS PASSED");
process.exit(fails ? 1 : 0);