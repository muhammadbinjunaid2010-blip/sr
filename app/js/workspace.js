/* ============================================================
   SkillRun - workspace logic (mission / practice / project)
   - mission flow: Goal -> Learn -> Practice -> Build -> Complete
   - challenge screen with Instructions / Learning / Editor
   - progressive help: Hint 1 / Hint 2 / Hint 3 / Solution
   - sandboxed runner for HTML + JS code
   - XP / achievements / streak on completion
   ============================================================ */

(function () {
  "use strict";

  var STORAGE_KEY = "skillrun_progress";
  var current = null;   // { kind, mission, practiceItem, project, step, challengeIdx, isBuild }
  var lastResult = null;

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      var p = raw ? JSON.parse(raw) : {};
      if (typeof p.xp !== "number") { p.xp = 0; }
      if (!Array.isArray(p.doneMissions)) { p.doneMissions = []; }
      if (!p.doneChallenges || typeof p.doneChallenges !== "object") { p.doneChallenges = {}; }
      if (!Array.isArray(p.doneBuilds)) { p.doneBuilds = []; }
      if (!Array.isArray(p.donePractice)) { p.donePractice = []; }
      if (!Array.isArray(p.doneProjects)) { p.doneProjects = []; }
      if (!Array.isArray(p.skills)) { p.skills = []; }
      if (!Array.isArray(p.achievements)) { p.achievements = []; }
      if (!p.streak) { p.streak = { count: 0, lastDate: "" }; }
      return p;
    } catch (e) {
      return { xp: 0, doneMissions: [], doneChallenges: {}, doneBuilds: [], donePractice: [], doneProjects: [], skills: [], achievements: [], streak: { count: 0, lastDate: "" } };
    }
  }

  function save(p) { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch (e) {} }

  function esc(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function escapeScript(str) { return String(str).replace(/<\/script/gi, "<\\/script"); }
  function svgIcon(path) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + path + "</svg>"; }

  function levelOf(xp) { return Math.floor(xp / XP_PER_LEVEL) + 1; }
  function xpIntoLevel(xp) { return xp % XP_PER_LEVEL; }

  function todayStr() {
    var d = new Date();
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  }
  function yesterdayStr() {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  }
  function bumpStreak(p) {
    var t = todayStr();
    if (p.streak.lastDate === t) { return; }
    p.streak.count = (p.streak.lastDate === yesterdayStr()) ? p.streak.count + 1 : 1;
    p.streak.lastDate = t;
  }

  function hasAchievement(p, id) { return p.achievements.indexOf(id) !== -1; }
  function unlockAchievement(p, id) {
    if (hasAchievement(p, id)) { return false; }
    p.achievements.push(id);
    save(p);
    return true;
  }
  function unlockSkill(p, name) {
    if (!name || p.skills.indexOf(name) !== -1) { return false; }
    p.skills.push(name);
    save(p);
    return true;
  }

  function getQueryParam(name) {
    var match = new RegExp("[?&]" + name + "=([^&]*)").exec(window.location.search);
    return match ? decodeURIComponent(match[1].replace(/\+/g, " ")) : null;
  }

  /* per-run state for smart XP */
  function resetRunState() {
    current.hintsUsed = 0;
    current.solutionUsed = false;
    current.focusLost = false;
    current.timedLeft = 0;
  }

  function grantAchievements(p) {
    var newly = evalAchievements(p);
    for (var i = 0; i < newly.length; i++) {
      if (unlockAchievement(p, newly[i])) {
        toast("Achievement: " + achievementTitle(newly[i]));
      }
    }
    if (newly.length) { save(p); }
  }

  function achievementTitle(id) {
    for (var i = 0; i < ACHIEVEMENTS.length; i++) {
      if (ACHIEVEMENTS[i].id === id) { return ACHIEVEMENTS[i].title; }
    }
    return id;
  }

  function xpBreakdownHtml(bd) {
    var rows = '<div class="xp-breakdown">' +
      '<div class="xpb-row"><span>Base XP</span><span>+' + bd.base + '</span></div>';
    if (bd.hintPen) { rows += '<div class="xpb-row bad"><span>Hints used</span><span>-' + bd.hintPen + '</span></div>'; }
    if (bd.solPen) { rows += '<div class="xpb-row bad"><span>Solution used</span><span>-' + bd.solPen + '</span></div>'; }
    if (bd.focPen) { rows += '<div class="xpb-row bad"><span>Focus lost</span><span>-' + bd.focPen + '</span></div>'; }
    rows += '<div class="xpb-row total"><span>XP earned</span><span>+' + bd.earned + '</span></div></div>';
    return rows;
  }

  function findPractice(id) {
    var items = allPracticeItems();
    for (var i = 0; i < items.length; i++) { if (items[i].id === id) { return items[i]; } }
    return null;
  }

  function findProject(id) {
    for (var i = 0; i < PROJECTS.length; i++) {
      if (PROJECTS[i].id === id) { return PROJECTS[i]; }
    }
    return null;
  }

  /* ---------------- toast / banner ---------------- */

  function toast(text) {
    var el = document.getElementById("toast");
    if (!el) { return; }
    el.textContent = text;
    el.classList.add("show");
    clearTimeout(el._t);
    el._t = setTimeout(function () { el.classList.remove("show"); }, 2200);
  }

  function showBanner(kind, html) {
    var banner = document.getElementById("result-banner");
    if (!banner) { return; }
    banner.className = "result-banner " + kind;
    banner.innerHTML = html;
    banner.style.display = "block";
  }

  function clearBanner() {
    var banner = document.getElementById("result-banner");
    if (banner) { banner.style.display = "none"; }
  }

  function showCover(html, className) {
    var cover = document.getElementById("cover-overlay");
    var card = document.getElementById("cover-card");
    if (!cover || !card) { return; }
    card.className = "cover-card" + (className ? " " + className : "");
    card.innerHTML = html;
    cover.style.display = "flex";
  }

  function hideCover() {
    var cover = document.getElementById("cover-overlay");
    if (cover) { cover.style.display = "none"; }
  }

  function showConsole(logs) {
    var consoleEl = document.getElementById("console");
    if (!consoleEl) { return; }
    if (!logs || logs.length === 0) {
      consoleEl.textContent = "( no console output )";
      consoleEl.className = "console empty";
      return;
    }
    consoleEl.textContent = logs.join("\n");
    consoleEl.className = "console";
  }

  /* ---------------- header ---------------- */

  function renderHeaderChip(p) {
    var chips = document.querySelectorAll("[data-xp-chip]");
    for (var i = 0; i < chips.length; i++) {
      chips[i].textContent = "Lv " + levelOf(p.xp) + " · " + p.xp + " XP";
    }
  }

  /* ============================================================
     RENDERING
     ============================================================ */

  function progressOf(p, missionId) {
    var m = getMissionById(missionId);
    var total = m.challenges.length + 1;
    var done = 0;
    for (var i = 0; i < m.challenges.length; i++) {
      var list = p.doneChallenges[missionId];
      if (list && list.indexOf(m.challenges[i].id) !== -1) { done++; }
    }
    if (p.doneBuilds.indexOf(missionId) !== -1) { done++; }
    return { total: total, done: done, pct: Math.round((done / total) * 100) };
  }

  function getMissionById(id) {
    for (var i = 0; i < MISSIONS.length; i++) {
      if (MISSIONS[i].id === id) { return MISSIONS[i]; }
    }
    return null;
  }

  function renderMission() {
    var p = load();
    var id = getQueryParam("id");
    var mission = getMissionById(id);
    if (!mission) { window.location.href = "index.html"; return; }

    current = { kind: "mission", mission: mission, step: "briefing", challengeIdx: 0, isBuild: false, missionClean: true };

    var headerTitle = document.getElementById("ws-title");
    if (headerTitle) { headerTitle.textContent = "Mission " + mission.num; }
    renderHeaderChip(p);

    var meta = missionMetaOf(mission.id);
    var kindTag = meta.kind === "boss" ? ' <span class="badge badge-yellow">BOSS</span>' : "";
    var spacedNote = "";
    if (meta.revisit && meta.revisit.length) {
      spacedNote = '<div class="spaced-note">🧠 <strong>Spaced practice:</strong> this mission revisits ' +
        esc(meta.revisit.join(", ")) + '. Solid recall = higher mastery.</div>';
    }

    var el = document.getElementById("ws-content");
    el.innerHTML =
      '<div class="ws-briefing">' +
        '<div class="ws-icon">' + svgIcon(mission.icon) + '</div>' +
        '<div class="ws-tag">MISSION ' + mission.num + ' · ' + esc(mission.skill) + kindTag + '</div>' +
        '<h1>' + esc(mission.title) + '</h1>' +
        '<p class="ws-tagline">' + esc(mission.tagline) + '</p>' +
        '<div class="brief-box">' +
          '<h3>Goal</h3>' +
          '<p>' + esc(mission.briefing.objective) + '</p>' +
          '<h3>The Plan</h3>' +
          '<p>' + esc(mission.briefing.body) + '</p>' +
        '</div>' +
        (spacedNote) +
        '<div class="mission-parts">' +
          '<div class="part"><span class="part-emoji">📖</span><strong>Learn</strong><small>' + mission.challenges.length + ' lessons</small></div>' +
          '<div class="part"><span class="part-emoji">🔨</span><strong>Build</strong><small>Build Challenge</small></div>' +
          '<div class="part"><span class="part-emoji">🏆</span><strong>Reward</strong><small>+' + partBaseXp(mission) + ' XP/part · unlock "' + esc(mission.unlock) + '"</small></div>' +
        '</div>' +
        (meta.focusLock ? '<div class="lock-note">🎯 Focus mission — switching away or blurring the window costs 20% XP.</div>' : '') +
        '<button class="btn-primary btn-block" id="btn-start">Start Mission →</button>' +
      '</div>';

    var startBtn = document.getElementById("btn-start");
    if (startBtn) {
      startBtn.addEventListener("click", function () {
        var progress = progressOf(p, mission.id);
        current.step = "challenge";
        current.challengeIdx = Math.min(progress.done, mission.challenges.length);
        if (progress.done === progress.total) { current.challengeIdx = mission.challenges.length; }
        renderChallenge();
      });
    }
  }

  function renderChallenge() {
    var p = load();
    var mission = current.mission;
    var challenges = mission.challenges;

    if (current.challengeIdx >= challenges.length) {
      current.step = "build";
      renderBuild();
      return;
    }

    var ch = challenges[current.challengeIdx];
    current.step = "challenge";
    lastResult = null;
    shownHints = 0;
    hintLevel = 0;
    resetRunState();

    var isDone = false;
    var list = p.doneChallenges[mission.id];
    if (list && list.indexOf(ch.id) !== -1) { isDone = true; }

    var el = document.getElementById("ws-content");
    el.innerHTML =
      '<div class="ws-head">' +
        '<button class="back-btn" id="btn-back">←</button>' +
        '<div class="ws-head-info">' +
          '<div class="ws-tag">CHALLENGE ' + (current.challengeIdx + 1) + ' OF ' + challenges.length + '</div>' +
          '<h1>' + esc(ch.title) + '</h1>' +
        '</div>' +
      '</div>' +
      '<div class="tabs-ws">' +
        '<button class="ws-tab active" data-wstab="instructions">Instructions</button>' +
        '<button class="ws-tab" data-wstab="learning">Learning</button>' +
        '<button class="ws-tab" data-wstab="editor">Editor</button>' +
      '</div>' +
      '<div class="ws-panel active" data-wspanel="instructions">' +
        '<div class="instruction-card">' +
          '<h3>Your task</h3>' +
          '<p>' + esc(ch.instructions) + '</p>' +
        '</div>' +
        (ch.example ? '<div class="example-card"><h3>Example</h3><pre>' + esc(ch.example) + '</pre></div>' : '') +
        '<button class="btn-primary btn-block" data-goto="learning">Learn how →</button>' +
      '</div>' +
      '<div class="ws-panel" data-wspanel="learning">' +
        '<div class="learning-card">' +
          '<h3>Lesson</h3>' +
          '<p>' + esc(ch.learning) + '</p>' +
        '</div>' +
        '<button class="btn-primary btn-block" data-goto="editor">Let\'s code →</button>' +
      '</div>' +
      '<div class="ws-panel" data-wspanel="editor">' +
        '<div class="editor-toolbar">' +
          '<span class="file-chip">' + (mission.type === "html" ? "index.html" : (mission.type === "python" ? "script.py" : (mission.type === "circuit" ? "circuit.c" : "script.js"))) + '</span>' +
          '<span class="timer-chip" id="timer-chip"></span>' +
          '<button class="btn-small" id="btn-reset">Reset</button>' +
        '</div>' +
        '<textarea id="editor" spellcheck="false" autocomplete="off" autocapitalize="off"></textarea>' +
        '<div class="run-bar">' +
          '<button class="btn-secondary" id="btn-run">Run</button>' +
          '<button class="btn-primary" id="btn-check">Check</button>' +
          '<div class="help-btns">' +
            '<button class="help-btn" id="btn-hint">💡 Hint</button>' +
            '<button class="help-btn" id="btn-solution">👀 Solution</button>' +
          '</div>' +
        '</div>' +
        '<div id="help-panel"></div>' +
        '<div class="console" id="console">( no console output )</div>' +
        '<div id="preview-wrap" style="display:none"><iframe id="preview-frame" title="preview"></iframe></div>' +
        '<div id="result-banner" class="result-banner" style="display:none"></div>' +
      '</div>';

    var editor = document.getElementById("editor");
    editor.value = ch.starter;

    setupWsTabs();
    setupEditor(mission, ch, false);
  }

  function renderBuild() {
    var p = load();
    var mission = current.mission;
    var build = mission.build;
    current.step = "build";
    current.isBuild = true;
    lastResult = null;
    shownHints = 0;
    hintLevel = 0;
    resetRunState();

    var isDone = p.doneBuilds.indexOf(mission.id) !== -1;

    var el = document.getElementById("ws-content");
    el.innerHTML =
      '<div class="ws-head">' +
        '<button class="back-btn" id="btn-back">←</button>' +
        '<div class="ws-head-info">' +
          '<div class="ws-tag build-tag">BUILD CHALLENGE</div>' +
          '<h1>' + esc(build.title) + '</h1>' +
        '</div>' +
      '</div>' +
      '<div class="build-card">' +
        '<h3>Build it from scratch</h3>' +
        '<p>No step-by-step. Use everything you learned. Your code is checked automatically.</p>' +
        '<pre class="build-prompt">' + esc(build.prompt) + '</pre>' +
      '</div>' +
      '<div class="editor-toolbar">' +
        '<span class="file-chip">' + (mission.type === "html" ? "index.html" : (mission.type === "python" ? "script.py" : (mission.type === "circuit" ? "circuit.c" : "script.js"))) + '</span>' +
        '<span class="timer-chip" id="timer-chip"></span>' +
        '<button class="btn-small" id="btn-reset">Reset</button>' +
      '</div>' +
      '<textarea id="editor" spellcheck="false" autocomplete="off" autocapitalize="off"></textarea>' +
      '<div class="run-bar">' +
        '<button class="btn-secondary" id="btn-run">Run</button>' +
        '<button class="btn-primary" id="btn-check">Check</button>' +
        '<div class="help-btns">' +
          '<button class="help-btn" id="btn-hint">💡 Hint</button>' +
          '<button class="help-btn" id="btn-solution">👀 Solution</button>' +
        '</div>' +
      '</div>' +
      '<div id="help-panel"></div>' +
      '<div class="console" id="console">( no console output )</div>' +
      '<div id="preview-wrap" style="display:none"><iframe id="preview-frame" title="preview"></iframe></div>' +
      '<div id="result-banner" class="result-banner" style="display:none"></div>';

    var editor = document.getElementById("editor");
    editor.value = build.starter;

    setupEditor(mission, build, true);
  }

  /* ============================================================
     TABS / HELP
     ============================================================ */

  function setupWsTabs() {
    var tabs = document.querySelectorAll(".ws-tab");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", function () {
        var name = this.getAttribute("data-wstab");
        var all = document.querySelectorAll(".ws-tab");
        for (var j = 0; j < all.length; j++) { all[j].classList.toggle("active", all[j] === this); }
        var panels = document.querySelectorAll(".ws-panel");
        for (var k = 0; k < panels.length; k++) {
          panels[k].classList.toggle("active", panels[k].getAttribute("data-wspanel") === name);
        }
        if (name === "editor") { var ed = document.getElementById("editor"); if (ed) { ed.focus(); } }
      });
    }

    var goto = document.querySelectorAll("[data-goto]");
    for (var g = 0; g < goto.length; g++) {
      goto[g].addEventListener("click", function () {
        var name = this.getAttribute("data-goto");
        var all = document.querySelectorAll(".ws-tab");
        for (var j = 0; j < all.length; j++) { all[j].classList.toggle("active", all[j].getAttribute("data-wstab") === name); }
        var panels = document.querySelectorAll(".ws-panel");
        for (var k = 0; k < panels.length; k++) {
          panels[k].classList.toggle("active", panels[k].getAttribute("data-wspanel") === name);
        }
        var ed = document.getElementById("editor");
        if (ed) { ed.focus(); }
      });
    }

    var back = document.getElementById("btn-back");
    if (back) {
      back.addEventListener("click", function () {
        if (current.isBuild) { window.location.href = "mission.html?id=" + current.mission.id; return; }
        if (current.challengeIdx > 0) {
          current.challengeIdx--;
          renderChallenge();
        } else {
          renderMission();
        }
      });
    }
  }

  function setupEditor(mission, task, isBuild) {
    var editor = document.getElementById("editor");

    editor.addEventListener("keydown", function (e) {
      if (e.key === "Tab") {
        e.preventDefault();
        var start = editor.selectionStart;
        var end = editor.selectionEnd;
        editor.value = editor.value.substring(0, start) + "  " + editor.value.substring(end);
        editor.selectionStart = editor.selectionEnd = start + 2;
      }
    });

    var reset = document.getElementById("btn-reset");
    if (reset) {
      reset.addEventListener("click", function () {
        if (confirm("Reset the code to the starter version?")) { editor.value = task.starter; }
      });
    }

    var runBtn = document.getElementById("btn-run");
    if (runBtn) {
      runBtn.addEventListener("click", function () { runInSandbox("run"); });
    }
    var checkBtn = document.getElementById("btn-check");
    if (checkBtn) {
      checkBtn.addEventListener("click", function () { runInSandbox("check"); });
    }

    var hintBtn = document.getElementById("btn-hint");
    if (hintBtn) {
      hintBtn.addEventListener("click", function () {
        showHelp("hint");
      });
    }
    var solBtn = document.getElementById("btn-solution");
    if (solBtn) {
      solBtn.addEventListener("click", function () {
        showHelp("solution");
      });
    }

    var timedSecs = task.timed || 0;
    if (!timedSecs && current.mission && current.mission.id && MISSION_META[current.mission.id] && MISSION_META[current.mission.id].timed) {
      timedSecs = MISSION_META[current.mission.id].timed;
    }
    if (timedSecs) {
      var chip = document.getElementById("timer-chip");
      if (chip) {
        current.timedLeft = timedSecs;
        chip.style.display = "inline-block";
        var timerId = setInterval(function () {
          if (!chip) { return; }
          if (current.timedLeft <= 0) {
            chip.textContent = "⏱ 0:00";
            chip.classList.add("out");
            clearInterval(timerId);
            showBanner("fail", "<strong>Time's up!</strong> No penalty — keep going, or reload to restart the clock.");
            return;
          }
          var m = Math.floor(current.timedLeft / 60);
          var s = current.timedLeft % 60;
          chip.textContent = "⏱ " + m + ":" + (s < 10 ? "0" : "") + s;
          current.timedLeft--;
        }, 1000);
      }
    }
  }

  var hintLevel = 0;
  var shownHints = 0;

  function showHelp(kind) {
    var task = current.task || (current.isBuild ? current.mission.build : current.mission.challenges[current.challengeIdx]);
    var panel = document.getElementById("help-panel");
    if (!task || !panel) { return; }

    var meta = missionMetaOf(current.mission.id);
    var hintCap = meta.hintCap || 999;

    if (kind === "solution") {
      if (!confirm("Reveal the solution? It's more fun to figure it out yourself.")) { return; }
      current.solutionUsed = true;
      current.missionClean = false;
      panel.innerHTML = '<div class="help-panel solution-panel">' +
        '<div class="help-head">Solution</div>' +
        '<pre class="solution-code">' + esc(task.solution) + '</pre>' +
        '<button class="btn-small" data-close-help>Close</button></div>';
    } else {
      if (!task.hints || shownHints >= task.hints.length) { return; }
      if (shownHints >= hintCap) {
        toast("No more hints for this boss mission.");
        return;
      }
      var index = Math.min(shownHints, task.hints.length - 1);
      var label = index === 0 ? "Hint 1" : (index === 1 ? "Hint 2" : (index === 2 ? "Hint 3" : "Last hint"));
      var hintText = task.hints[index];
      shownHints++;
      current.hintsUsed = shownHints;
      current.missionClean = false;
      showHintCover(label, hintText);
    }

    var closes = panel.querySelectorAll("[data-close-help]");
    for (var i = 0; i < closes.length; i++) {
      closes[i].addEventListener("click", function () { panel.innerHTML = ""; });
    }
  }

  var hintTimer = null;

  function showHintCover(label, text) {
    var cover = document.getElementById("cover-overlay");
    var card = document.getElementById("cover-card");
    if (!cover || !card) { return; }
    card.className = "cover-card hint";
    card.innerHTML =
      '<div class="cover-emoji">💡</div>' +
      '<h2>' + label + '</h2>' +
      '<p>' + esc(text) + '</p>';
    cover.style.display = "flex";
    clearTimeout(hintTimer);
    hintTimer = setTimeout(function () {
      cover.style.display = "none";
    }, 4000);
  }

  /* ============================================================
     SANDBOXED RUNNER
     ============================================================ */

  function runInSandbox(action) {
    var mission = current.mission;
    var task = current.task || (current.isBuild ? mission.build : mission.challenges[current.challengeIdx]);
    if (!mission || !task) { return; }

    clearBanner();
    showConsole([]);

    var code = document.getElementById("editor").value;

    if (mission.type === "python") { runPythonCheck(action, code, task); return; }
    if (mission.type === "circuit") { runCircuitCheck(action, code, task); return; }

    var safe = escapeScript(code);
    var checkCode = mission.type === "js" ? task.test : task.check;
    var checkLit = mission.type === "js"
      ? JSON.stringify("(" + checkCode + ")()")
      : JSON.stringify(checkCode);

    var controller =
      "<script>\n" +
      "window.__logs = [];\n" +
      "console.log = function () {\n" +
      "  var parts = [];\n" +
      "  for (var i = 0; i < arguments.length; i++) {\n" +
      "    var v = arguments[i];\n" +
      "    if (typeof v === 'object' && v !== null) { try { v = JSON.stringify(v); } catch (e) { v = String(v); } }\n" +
      "    parts.push(v);\n" +
      "  }\n" +
      "  window.__logs.push(parts.join(' '));\n" +
      "};\n" +
      "window.onerror = function (msg) { window.__logs.push('Error: ' + msg); };\n" +
      "window.addEventListener('message', function (ev) {\n" +
      "  if (ev.data && ev.data.__SkillRun === 'run') {\n" +
      "    ev.source.postMessage({ __SkillRun: 'run', logs: window.__logs }, '*');\n" +
      "  } else if (ev.data && ev.data.__SkillRun === 'check') {\n" +
      "    try {\n" +
      "      var result = eval(window.__SkillRunCheck);\n" +
      "      ev.source.postMessage({ __SkillRun: 'check', logs: window.__logs, result: result }, '*');\n" +
      "    } catch (e) {\n" +
      "      ev.source.postMessage({ __SkillRun: 'check', logs: window.__logs, result: { passed: false, message: 'Check error: ' + e.message } }, '*');\n" +
      "    }\n" +
      "  }\n" +
      "});\n" +
      "<\/script>";

    var checkScript = "<script>window.__SkillRunCheck = " + checkLit + ";<\/script>";

    var doc;
    if (mission.type === "html") {
      var body = safe.replace(/<\/body/gi, "").replace(/<\/html/gi, "").replace(/<\/head/gi, "");
      doc = '<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:sans-serif;padding:16px}</style></head><body>' + body + checkScript + controller + "</body></html>";
    } else {
      doc = '<!DOCTYPE html><html><head><meta charset="utf-8"></head><body><script>' + safe + "<\/script>" + checkScript + controller + "</body></html>";
    }

    var frame = document.getElementById("preview-frame");
    if (!frame) { return; }
    frame.srcdoc = doc;

    var done = false;
    var timer = setTimeout(function () {
      if (done) { return; }
      done = true;
      showConsole(["No response - did your code loop forever?"]);
    }, 5000);

    function onMessage(ev) {
      if (ev.source !== frame.contentWindow) { return; }
      var data = ev.data;
      if (!data || !data.__SkillRun) { return; }
      clearTimeout(timer);
      done = true;
      window.removeEventListener("message", onMessage);
      showConsole(data.logs);
      if (data.__SkillRun === "check") {
        handleCheckResult(data.result);
      }
    }

    window.addEventListener("message", onMessage);

    frame.onload = function () {
      try {
        frame.contentWindow.postMessage({ __SkillRun: action }, "*");
      } catch (e) {
        clearTimeout(timer);
        done = true;
        showConsole(["Could not run your code."]);
      }
    };
  }

  /* ============================================================
     PYTHON RUNNER (subset interpreter, no iframe needed)
     ============================================================ */

  function runPythonCheck(action, code, task) {
    var res = typeof PythonEval !== "undefined" ? PythonEval.run(code) : { error: "Python engine not loaded." };
    if (res.error) {
      showConsole([res.error]);
      if (action === "check") { handleCheckResult({ passed: false, message: res.error }); }
      return;
    }
    showConsole(res.logs.length ? res.logs : ["( no console output — define your functions, then press Check )"]);
    if (action === "check") {
      try {
        var result = (new Function("return (" + task.test + ")()"))();
        handleCheckResult(result);
      } catch (e) {
        handleCheckResult({ passed: false, message: "Check error: " + e.message });
      }
    }
  }

  /* ============================================================
     CIRCUIT RUNNER (simulator + SVG renderer, no iframe needed)
     The learner writes a top-level script using a ready circuit C.
     Run redraws the SVG board; Check inspects window.__C.
     ============================================================ */

  function runCircuitCheck(action, code, task) {
    var runErr = null;
    try {
      if (!window.__skillrunCircuitShims) {
        var s = document.createElement("script");
        s.textContent = Object.keys(Circuit).map(function (k) {
          return "window['" + k + "'] = function () { return Circuit." + k + ".apply(null, arguments); };";
        }).join("\n");
        document.body.appendChild(s);
        window.__skillrunCircuitShims = true;
      }
      window.C = null;
      var s2 = document.createElement("script");
      s2.textContent = "var C = Circuit.create();\n" + code + "\nCircuit.step(C);";
      s2.onerror = function (ev) {
        runErr = (ev && (ev.message || "Could not run your circuit code."));
      };
      document.body.appendChild(s2);
      var C = window.C;
      if (C) { try { Circuit.step(C); } catch (e) { /* already stepped or errored */ } }
      window.__C = C;
      var logs = [];
      if (runErr) {
        logs.push("Error: " + runErr);
      } else if (C) {
        var notes = Circuit.logs(C);
        if (notes.length) { logs = logs.concat(notes); }
        else { logs.push("( circuit built — press Run to redraw, Check to verify )"); }
      } else {
        logs.push("( no circuit built yet )");
      }
      var preview = document.getElementById("preview-wrap");
      if (preview) {
        if (C) {
          preview.style.display = "block";
          preview.classList.add("circuit-mode");
          preview.innerHTML = CircuitSVG.render(C);
        } else {
          preview.style.display = "none";
          preview.classList.remove("circuit-mode");
        }
      }
      showConsole(logs);
      if (action === "check") {
        try {
          var result = (new Function("return (" + task.test + ")()"))();
          handleCheckResult(result);
        } catch (e) {
          handleCheckResult({ passed: false, message: "Check error: " + e.message });
        }
      }
    } catch (e) {
      window.__C = null;
      showConsole(["Error: " + e.message]);
      if (action === "check") { handleCheckResult({ passed: false, message: "Check error: " + e.message }); }
    }
  }

  /* ============================================================
     CHECK RESULT / COMPLETION
     ============================================================ */

  function handleCheckResult(result) {
    var p = load();
    var mission = current.mission;

    if (result && result.passed) {
      lastResult = result;

      if (current.kind === "mission") {
        var newXp = false;
        var base = partBaseXp(mission);
        var state = { hints: current.hintsUsed || 0, solution: !!current.solutionUsed, focus: !!current.focusLost };
        var bd = xpBreakdown(base, state);
        var earned = bd.earned;

        if (current.isBuild) {
          if (p.doneBuilds.indexOf(mission.id) === -1) {
            p.doneBuilds.push(mission.id);
            p.xp += earned;
            skillrunRecordXp(p, earned);
            unlockAchievement(p, "builder");
            save(p);
            newXp = true;
          }
        } else {
          var ch = mission.challenges[current.challengeIdx];
          var list = p.doneChallenges[mission.id];
          if (!list) { list = []; p.doneChallenges[mission.id] = list; }
          if (list.indexOf(ch.id) === -1) {
            list.push(ch.id);
            p.xp += earned;
            skillrunRecordXp(p, earned);
            var firstRun = p.doneMissions.length === 0;
            save(p);
            newXp = true;
            if (firstRun) { unlockAchievement(p, "first-run"); }
          }
        }

        var missionDone = p.doneMissions.indexOf(mission.id) !== -1;
        var allParts = true;
        for (var i = 0; i < mission.challenges.length; i++) {
          var cl = p.doneChallenges[mission.id];
          if (!cl || cl.indexOf(mission.challenges[i].id) === -1) { allParts = false; break; }
        }
        if (p.doneBuilds.indexOf(mission.id) === -1) { allParts = false; }

        if (allParts && !missionDone) {
          p.doneMissions.push(mission.id);
          if (current.missionClean && p.cleanMissions.indexOf(mission.id) === -1) {
            p.cleanMissions.push(mission.id);
          }
          unlockSkill(p, mission.unlock);
          grantAchievements(p);
          save(p);
          toast("Mission complete! +" + earned + " XP");
          showComplete(mission);
          renderHeaderChip(p);
          return;
        }

        bumpStreak(p);
        grantAchievements(p);
        save(p);

        var progress = progressOf(p, mission.id);
        var doneAll = progress.done >= progress.total;

        var nextHtml;
        if (doneAll) {
          nextHtml = "";
        } else if (current.isBuild) {
          nextHtml = "";
        } else if (current.challengeIdx + 1 < mission.challenges.length) {
          nextHtml = '<button class="btn-primary btn-block" id="btn-next">Next challenge →</button>';
        } else {
          nextHtml = '<button class="btn-primary btn-block" id="btn-next">Start Build Challenge →</button>';
        }

        var xpHtml = newXp ? '<span class="xp-chip">+' + earned + ' XP</span>' : '';
        var breakdownHtml = newXp ? xpBreakdownHtml(bd) : '';

        showCover(
          '<div class="cover-emoji">✅</div>' +
          '<h2>Completed!</h2>' +
          '<p>' + result.message + '</p>' +
          '<div class="cover-rewards">' + xpHtml +
            '<span class="badge badge-green">' + progress.done + ' / ' + progress.total + ' parts</span>' +
          '</div>' +
          breakdownHtml +
          '<div class="bar"><div class="bar-fill" style="width:' + progress.pct + '%"></div></div>' +
          '<div class="cover-actions">' + nextHtml + '</div>',
          "pass");

        var next = document.getElementById("btn-next");
        if (next) {
          next.addEventListener("click", function () {
            hideCover();
            current.challengeIdx++;
            hintLevel = 0;
            renderChallenge();
          });
        }

        if (newXp) { toast("+" + earned + " XP"); }
        renderHeaderChip(p);
      } else if (current.kind === "practice") {
        handlePracticePass(p, result);
      } else if (current.kind === "project") {
        handleProjectPass(p, result);
      }
    } else {
      var msg = (result && result.message) || "Not quite yet — read the hints and try again.";
      showBanner("fail", "<strong>Not yet.</strong> " + msg +
        ' <button class="next-link" id="retry-btn" style="border:none">Try again</button>');
      var retry = document.getElementById("retry-btn");
      if (retry) {
        retry.addEventListener("click", function () {
          var ed = document.getElementById("editor");
          if (ed) { ed.focus(); }
        });
      }
    }
  }

  function showComplete(mission) {
    var p = load();
    var allDone = true;
    for (var i = 0; i < MISSIONS.length; i++) {
      if (p.doneMissions.indexOf(MISSIONS[i].id) === -1) { allDone = false; break; }
    }
    if (allDone) {
      var got = unlockAchievement(p, "web-runner");
      if (got) { toast("Achievement: Web Runner 🚀"); }
    }

    showCover(
      '<div class="cover-emoji">🏆</div>' +
      '<h2>Completed!</h2>' +
      '<p>' + esc(mission.title) + ' — ' + esc(mission.unlock) + ' unlocked!</p>' +
      '<div class="cover-rewards">' +
        '<span class="xp-chip">+' + mission.xp + ' XP</span>' +
        '<span class="badge badge-green">✓ ' + esc(mission.unlock) + '</span>' +
      '</div>' +
      '<div class="cover-actions">' +
        '<a class="btn-primary btn-block" href="index.html">Back to app</a>' +
      '</div>',
      "pass");
  }

  function handlePracticePass(p, result) {
    var item = current.practiceItem;
    var newXp = false;
    var state = { hints: current.hintsUsed || 0, solution: !!current.solutionUsed, focus: !!current.focusLost };
    var earned = newXp ? 0 : earnedXp(item.xp, state);
    if (p.donePractice.indexOf(item.id) === -1) {
      p.donePractice.push(item.id);
      earned = earnedXp(item.xp, state);
      p.xp += earned;
      skillrunRecordXp(p, earned);
      bumpStreak(p);
      save(p);
      newXp = true;
    }
    if (item.kind === "fix") { unlockAchievement(p, "debugger"); }
    if (item.id === dailyPracticeItem().id) { p.dailyDone = (p.dailyDone || 0) + 1; }
    if (item.mystery) { p.mysteryDone = (p.mysteryDone || 0) + 1; }
    grantAchievements(p);
    save(p);

    showCover(
      '<div class="cover-emoji">✅</div>' +
      '<h2>Completed!</h2>' +
      '<p>' + result.message + '</p>' +
      '<div class="cover-rewards">' +
        (newXp ? '<span class="xp-chip">+' + earned + ' XP</span>' : '<span class="badge badge-green">Done</span>') +
      '</div>' +
      '<div class="cover-actions">' +
        '<a class="btn-primary btn-block" href="index.html?tab=practice">Back to Practice →</a>' +
      '</div>',
      "pass");
    if (newXp) { toast("+" + earned + " XP"); }
    renderHeaderChip(p);
  }

  function handleProjectPass(p, result) {
    var proj = current.project;
    var newXp = false;
    var earned = 0;
    if (p.doneProjects.indexOf(proj.id) === -1) {
      p.doneProjects.push(proj.id);
      var state = { hints: current.hintsUsed || 0, solution: !!current.solutionUsed, focus: !!current.focusLost };
      earned = earnedXp(proj.xp, state);
      p.xp += earned;
      skillrunRecordXp(p, earned);
      bumpStreak(p);
      grantAchievements(p);
      save(p);
      newXp = true;
    }
    showCover(
      '<div class="cover-emoji">🏆</div>' +
      '<h2>Completed!</h2>' +
      '<p>' + result.message + '</p>' +
      '<div class="cover-rewards">' +
        (newXp ? '<span class="xp-chip">+' + earned + ' XP</span>' : '<span class="badge badge-green">Done</span>') +
      '</div>' +
      '<div class="cover-actions">' +
        '<a class="btn-primary btn-block" href="index.html?tab=projects">Back to Projects →</a>' +
      '</div>',
      "pass");
    if (newXp) { toast("+" + earned + " XP"); }
    renderHeaderChip(p);
  }

  /* ============================================================
     PRACTICE / PROJECT WORKSHEETS
     ============================================================ */

  function renderPractice() {
    var p = load();
    var id = getQueryParam("c");
    var item = findPractice(id);
    if (!item) { window.location.href = "index.html?tab=practice"; return; }

    current = { kind: "practice", practiceItem: item, isBuild: false, step: "challenge", task: item };
    resetRunState();

    var headerTitle = document.getElementById("ws-title");
    if (headerTitle) { headerTitle.textContent = "Practice"; }
    renderHeaderChip(p);

    var el = document.getElementById("ws-content");
    el.innerHTML =
      '<div class="ws-head"><button class="back-btn" id="btn-back">←</button>' +
      '<div class="ws-head-info"><div class="ws-tag">PRACTICE</div><h1>' + esc(item.title) + '</h1></div></div>' +
      '<div class="build-card">' +
        '<h3>' + esc(item.tagline) + '</h3>' +
        '<p>' + esc(item.prompt) + '</p>' +
      '</div>' +
      '<div class="editor-toolbar"><span class="file-chip">script.js</span>' +
      '<button class="btn-small" id="btn-reset">Reset</button></div>' +
      '<textarea id="editor" spellcheck="false" autocomplete="off" autocapitalize="off"></textarea>' +
      '<div class="run-bar">' +
        '<button class="btn-secondary" id="btn-run">Run</button>' +
        '<button class="btn-primary" id="btn-check">Check</button>' +
        '<div class="help-btns">' +
          (item.hints ? '<button class="help-btn" id="btn-hint">💡 Hint</button>' : '') +
          (item.solution ? '<button class="help-btn" id="btn-solution">👀 Solution</button>' : '') +
        '</div>' +
      '</div>' +
      '<div id="help-panel"></div>' +
      '<div class="console" id="console">( no console output )</div>' +
      '<div id="result-banner" class="result-banner" style="display:none"></div>';

    var editor = document.getElementById("editor");
    editor.value = item.starter;

    var back = document.getElementById("btn-back");
    if (back) { back.addEventListener("click", function () { window.location.href = "index.html?tab=practice"; }); }

    // re-use editor setup with a fake mission object (JS type)
    var fakeMission = { id: "practice", type: "js", build: item };
    current.mission = fakeMission;
    setupEditor(fakeMission, item, false);
  }

  function renderProject() {
    var p = load();
    var id = getQueryParam("id");
    var proj = findProject(id);
    if (!proj) { window.location.href = "index.html?tab=projects"; return; }

    var task = { title: proj.title, prompt: proj.desc, starter: proj.starter || "// build it here\n", test: proj.test, check: proj.check, hints: proj.hints || ["Break it into small steps.", "Test each part as you go.", "Check the requirements one by one."], solution: proj.solution || "" };
    current = { kind: "project", project: proj, isBuild: true, step: "challenge", task: task };
    current.projectTask = task;
    resetRunState();

    var headerTitle = document.getElementById("ws-title");
    if (headerTitle) { headerTitle.textContent = "Project"; }
    renderHeaderChip(p);

    var fileChip = proj.type === "html" ? "index.html" : "script.js";
    var el = document.getElementById("ws-content");
    el.innerHTML =
      '<div class="ws-head"><button class="back-btn" id="btn-back">←</button>' +
      '<div class="ws-head-info"><div class="ws-tag build-tag">PROJECT</div><h1>' + proj.emoji + ' ' + esc(proj.title) + '</h1></div></div>' +
      '<div class="build-card">' +
        '<h3>Project Brief</h3>' +
        '<p>' + esc(proj.desc) + '</p>' +
      '</div>' +
      '<div class="editor-toolbar"><span class="file-chip">' + fileChip + '</span>' +
      '<button class="btn-small" id="btn-reset">Reset</button></div>' +
      '<textarea id="editor" spellcheck="false" autocomplete="off" autocapitalize="off"></textarea>' +
      '<div class="run-bar">' +
        '<button class="btn-secondary" id="btn-run">Run</button>' +
        '<button class="btn-primary" id="btn-check">Check</button>' +
        '<div class="help-btns">' +
          (task.hints ? '<button class="help-btn" id="btn-hint">💡 Hint</button>' : '') +
          (task.solution ? '<button class="help-btn" id="btn-solution">👀 Solution</button>' : '') +
        '</div>' +
      '</div>' +
      '<div id="help-panel"></div>' +
      '<div class="console" id="console">( no console output )</div>' +
      '<div id="preview-wrap" style="display:none"><iframe id="preview-frame" title="preview"></iframe></div>' +
      '<div id="result-banner" class="result-banner" style="display:none"></div>';

    var editor = document.getElementById("editor");
    editor.value = task.starter;

    var back = document.getElementById("btn-back");
    if (back) { back.addEventListener("click", function () { window.location.href = "index.html?tab=projects"; }); }

    var fakeMission = { id: "project", type: proj.type || "js", build: task };
    current.mission = fakeMission;
    setupEditor(fakeMission, task, true);
  }

  /* ============================================================
     BOOT
     ============================================================ */

  function boot() {
    var page = document.body.getAttribute("data-page");
    if (page === "mission") {
      renderMission();
    } else if (page === "practice") {
      renderPractice();
    } else if (page === "project") {
      renderProject();
    }

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { markFocusLost(); }
    });
    window.addEventListener("blur", function () {
      markFocusLost();
    });

    var scroller = document.querySelector(".app-shell > .app-main");
    if (scroller) scroller.scrollTop = 0;
    registerSW();
  }

  function markFocusLost() {
    if (!current) { return; }
    if (current.step !== "challenge" && current.step !== "build") { return; }
    var tracked = focusTrackedMission(current.mission.id) || !!(current.timedLeft);
    if (tracked && !current.focusLost) {
      current.focusLost = true;
      toast("Focus lost — 20% XP penalty on this run.");
    }
  }

  function registerSW() {
    if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    }
  }

  window.__initWorkspace = boot;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
