/* ============================================================
   SkillRun app logic (V1)
   - onboarding with 3 starting points
   - 5-tab app: Home, Learn, Practice, Projects, Profile
   - mission workspace with Goal -> Learn -> Practice -> Build
   - progressive help (hints 1/2/3 + solution)
   - sandboxed code runner for HTML + JS missions
   - XP, level, streak, skills, achievements saved to localStorage
   ============================================================ */

(function () {
  "use strict";

  var STORAGE_KEY = "skillrun_progress";

  /* ---------------- progress model ---------------- */

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
      if (typeof p.name !== "string") { p.name = ""; }
      if (!p.name && !p.onboarded) { p.name = defaultRunnerName(); }
      if (typeof p.avatar !== "string") { p.avatar = ""; }
      if (typeof p.path !== "string") { p.path = "web"; }
      if (typeof p.playerId !== "string" || !p.playerId) {
        p.playerId = "p-" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
      }
      if (typeof p.startPoint !== "string") { p.startPoint = "new"; }
      if (!p.onboarded) { p.onboarded = false; }
      if (!Array.isArray(p.cleanMissions)) { p.cleanMissions = []; }
      if (typeof p.dailyDone !== "number") { p.dailyDone = 0; }
      if (typeof p.mysteryDone !== "number") { p.mysteryDone = 0; }
      if (!Array.isArray(p.xpLog)) {
        p.xpLog = p.xp > 0 ? [{ d: isoDateStr(), xp: p.xp }] : [];
      }
      return p;
    } catch (e) {
      return defaultProgress();
    }
  }

  function defaultProgress() {
    return {
      xp: 0,
      doneMissions: [],
      doneChallenges: {},
      doneBuilds: [],
      donePractice: [],
      doneProjects: [],
      skills: [],
      achievements: [],
      streak: { count: 0, lastDate: "" },
      name: defaultRunnerName(),
      avatar: "",
      path: "web",
      playerId: "p-" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36),
      startPoint: "new",
      onboarded: false,
      cleanMissions: [],
      dailyDone: 0,
      mysteryDone: 0,
      xpLog: []
    };
  }

  function save(p) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    } catch (e) { /* storage unavailable */ }
  }

  /* ---------------- derived helpers ---------------- */

  function getMission(id) {
    for (var i = 0; i < MISSIONS.length; i++) {
      if (MISSIONS[i].id === id) { return MISSIONS[i]; }
    }
    return null;
  }

  function indexOfMission(id) {
    for (var i = 0; i < MISSIONS.length; i++) {
      if (MISSIONS[i].id === id) { return i; }
    }
    return -1;
  }

  function isDoneMission(p, id) { return p.doneMissions.indexOf(id) !== -1; }
  function isDoneBuild(p, id) { return p.doneBuilds.indexOf(id) !== -1; }
  function isDonePractice(p, id) { return p.donePractice.indexOf(id) !== -1; }
  function isDoneProject(p, id) { return p.doneProjects.indexOf(id) !== -1; }
  function hasSkill(p, name) { return p.skills.indexOf(name) !== -1; }
  function hasAchievement(p, id) { return p.achievements.indexOf(id) !== -1; }

  function missionChallengeDone(p, missionId, challengeId) {
    var list = p.doneChallenges[missionId];
    return list && list.indexOf(challengeId) !== -1;
  }

  function missionUnlockIndex(p, i) {
    if (i === 0) { return true; }
    return isDoneMission(p, MISSIONS[i - 1].id);
  }

  function missionUnlocked(p, m) {
    var meta = MISSION_META[m.id] || {};
    var seriesId = meta.series;
    if (seriesId) {
      var series = seriesOf(seriesId);
      if (series && !seriesUnlocked(p, series)) { return false; }
      var ids = seriesMissions(seriesId);
      var idx = ids.indexOf(m.id);
      if (idx <= 0) { return true; }
      return p.doneMissions.indexOf(ids[idx - 1]) !== -1;
    }
    return missionUnlockIndex(p, indexOfMission(m.id));
  }

  function levelOf(xp) { return Math.floor(xp / XP_PER_LEVEL) + 1; }
  function xpIntoLevel(xp) { return xp % XP_PER_LEVEL; }
  function levelPct(xp) { return Math.round((xpIntoLevel(xp) / XP_PER_LEVEL) * 100); }

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

  function awardXp(p, amount) {
    p.xp += amount;
    skillrunRecordXp(p, amount);
    bumpStreak(p);
    save(p);
    window.skillrunPostScore && window.skillrunPostScore();
  }

  function unlockAchievement(p, id) {
    if (hasAchievement(p, id)) { return false; }
    p.achievements.push(id);
    save(p);
    return true;
  }

  function unlockSkill(p, name) {
    if (!name || hasSkill(p, name)) { return false; }
    p.skills.push(name);
    save(p);
    return true;
  }

  /* ---------------- escaping / icons ---------------- */

  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escapeScript(str) {
    return String(str).replace(/<\/script/gi, "<\\/script");
  }

  function svgIcon(path) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + path + "</svg>";
  }

  var ICON_FLAME   = '<path d="M12 22c4 0 7-3 7-7 0-3-2-5-3-7-1.5 2-3 2-3.5 4C12 10 12 8 12 6c-2 2-4 5-4 9 0 2.2 1.8 4 4 4z"/>';
  var ICON_STAR    = '<path d="M12 2l2.4 4.9L20 8.2l-4 3.9.9 5.6-4.9-2.6-4.9 2.6.9-5.6-4-3.9 5.6-1.3z"/>';
  var ICON_CROWN   = '<path d="M2 7l5 3 5-6 5 6 5-3-2 13H4z"/>';
  var ICON_BOOK    = '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>';
  var ICON_TARGET  = '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>';
  var ICON_TROPHY  = '<path d="M8 21h8M12 17v4M7 4h10v6a5 5 0 0 1-10 0z"/><path d="M7 5H3v3a4 4 0 0 0 4 4M17 5h4v3a4 4 0 0 1-4 4"/>';
  var ICON_USER    = '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>';
  var ICON_LOCK    = '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>';
  var ICON_DICE    = '<rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8.5" cy="8.5" r="0.5" fill="currentColor"/><circle cx="15.5" cy="8.5" r="0.5" fill="currentColor"/><circle cx="8.5" cy="15.5" r="0.5" fill="currentColor"/><circle cx="15.5" cy="15.5" r="0.5" fill="currentColor"/>';
  var ICON_CHECK   = '<path d="M20 6L9 17l-5-5"/>';
  var ICON_LIGHT   = '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-6 6c0 3.2 2.4 4.4 3.2 6.4a2 2 0 0 0 1.9 1.4h1.8a2 2 0 0 0 1.9-1.4C15.6 13.4 18 12.2 18 9a6 6 0 0 0-6-6z"/>';

  function medalSvg(n, color) {
    return '<span class="lb-medal" style="color:' + color + '">' + svgIcon('<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5l1-3.2 2.5-2 3.2.2 1 3-2.4 2.6z"/><text x="12" y="15.5" text-anchor="middle" font-size="9" fill="currentColor" stroke="none" font-weight="700">' + n + '</text>') + '</span>';
  }

  function toast(text) {
    var el = document.getElementById("toast");
    if (!el) { return; }
    el.textContent = text;
    el.classList.add("show");
    clearTimeout(el._t);
    el._t = setTimeout(function () { el.classList.remove("show"); }, 2200);
  }

  function getQueryParam(name) {
    var match = new RegExp("[?&]" + name + "=([^&]*)").exec(window.location.search);
    return match ? decodeURIComponent(match[1].replace(/\+/g, " ")) : null;
  }

  function registerSW() {
    if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    }
  }

  /* ============================================================
     HOME TAB
     ============================================================ */

  function currentMission(p) {
    var pathId = p.path || "web";
    for (var s = 0; s < SERIES.length; s++) {
      if (SERIES[s].pathId !== pathId) { continue; }
      if (!seriesUnlocked(p, SERIES[s])) { continue; }
      var ids = seriesMissions(SERIES[s].id);
      for (var m = 0; m < ids.length; m++) {
        if (!isDoneMission(p, ids[m])) {
          var mission = getMission(ids[m]);
          if (mission) { return { mission: mission, index: indexOfMission(ids[m]) }; }
        }
      }
    }
    return null;
  }

  function homeProgressPct(p) {
    var all = allMissions();
    return Math.round((p.doneMissions.length / all.length) * 100);
  }

  function renderHome(root) {
    var p = load();
    var lvl = levelOf(p.xp);
    var mast = overallMastery(p);
    var p2 = xpIntoLevel(p.xp);
    var course = pathOf(selectedCourseId(p));

    var html = "";

    html += '<div class="player-row">' +
      '<div class="avatar' + (p.avatar ? ' has-img' : '') + '">' + (p.avatar ? '<img src="' + esc(p.avatar) + '" alt="">' : esc(displayName(p)).charAt(0).toUpperCase()) + '</div>' +
      '<div class="player-info">' +
        '<h1>Hey ' + esc(displayName(p)) + '</h1>' +
        '<div class="player-stats">' +
          '<span class="stat-pill">Lv ' + lvl + '</span>' +
          '<span class="stat-pill">' + p.xp + ' XP</span>' +
          '<span class="stat-pill">' + svgIcon(ICON_FLAME) + ' ' + p.streak.count + '</span>' +
          '<span class="stat-pill">' + svgIcon(ICON_STAR) + ' ' + mast + '%</span>' +
        '</div>' +
        '<div class="bar"><div class="bar-fill" style="width:' + levelPct(p.xp) + '%"></div></div>' +
        '<div class="bar-caption">' + p2 + ' / ' + XP_PER_LEVEL + ' XP to Level ' + (lvl + 1) + '</div>' +
      '</div>' +
    '</div>';

    html += '<div class="sec-title"><h2>Your Mission</h2></div>';

    var cur = currentMission(p);
    if (cur) {
      var m = cur.mission;
      var progress = missionProgress(p, m.id);
      html += '<a class="continue-card" href="mission.html?id=' + m.id + '">' +
        '<div class="continue-num">Mission ' + m.num + '</div>' +
        '<h3>' + esc(m.title) + '</h3>' +
        '<p>' + esc(m.tagline) + '</p>' +
        '<div class="continue-progress"><div class="bar"><div class="bar-fill" style="width:' + progress.pct + '%"></div></div>' +
        '<span class="continue-label">' + progress.done + ' / ' + progress.total + ' parts done</span></div>' +
        '<div class="continue-go">Continue &rarr;</div>' +
        '</a>';
    } else {
      html += '<div class="card card-done"><h3>All missions complete!</h3><p>You finished every SkillRun mission. Check your Profile.</p></div>';
    }

    html += '<div class="sec-title"><h2>Pick your course</h2><p>3 courses, 1 hero. Switch anytime - progress is saved per course.</p></div>';
    html += '<div class="course-grid">';
    for (var c = 0; c < PATHS.length; c++) {
      var path = PATHS[c];
      var cp = courseProgress(p, path.id);
      var done = cp.done;
      var pct = cp.pct;
      var active = course.id === path.id;
      html += '<button class="course-card course-' + path.accent + (active ? ' active' : '') + '" data-course="' + path.id + '" type="button">' +
        '<div class="course-emoji">' + svgIcon(path.icon) + '</div>' +
        '<div class="course-body">' +
          '<div class="course-top"><h3>' + esc(path.title) + '</h3>' +
            (active ? '<span class="badge badge-green">Active</span>' : '<span class="badge badge-muted">' + (done ? done + ' done' : 'Start') + '</span>') + '</div>' +
          '<p>' + esc(path.desc) + '</p>' +
          '<div class="bar"><div class="bar-fill" style="width:' + pct + '%"></div></div>' +
          '<span class="course-meta">' + done + ' / ' + cp.total + ' missions</span>' +
        '</div>' +
      '</button>';
    }
    html += '</div>';

    html += '<div class="quick-links">' +
      '<a class="quick-link" href="?tab=learn">' + svgIcon(ICON_BOOK) + ' Learn</a>' +
      '<a class="quick-link" href="?tab=practice">' + svgIcon(ICON_TARGET) + ' Practice</a>' +
      '<a class="quick-link" href="?tab=projects">' + svgIcon(ICON_CROWN) + ' Projects</a>' +
      '<a class="quick-link" href="?tab=leaderboard">' + svgIcon(ICON_TROPHY) + ' Leaderboard</a>' +
      '<a class="quick-link" href="?tab=profile">' + svgIcon(ICON_USER) + ' Profile</a>' +
    '</div>';

    root.innerHTML = html;

    var courseBtns = root.querySelectorAll("[data-course]");
    for (var cb = 0; cb < courseBtns.length; cb++) {
      courseBtns[cb].addEventListener("click", function () {
        setSelectedCourse(p, this.getAttribute("data-course"));
        save(p);
        renderHome(root);
        toast("Course switched!");
      });
    }

    renderHeaderChip(p);
  }

  /* ============================================================
     LEARN TAB
     ============================================================ */

  function missionProgress(p, missionId) {
    var m = getMission(missionId);
    var total = m.challenges.length + 1;
    var done = 0;
    for (var i = 0; i < m.challenges.length; i++) {
      if (missionChallengeDone(p, missionId, m.challenges[i].id)) { done++; }
    }
    if (isDoneBuild(p, missionId)) { done++; }
    return { total: total, done: done, pct: Math.round((done / total) * 100) };
  }

  function renderMissionCard(p, m) {
    var done = isDoneMission(p, m.id);
    var unlocked = missionUnlocked(p, m);
    var prog = missionProgress(p, m.id);
    var kind = missionKindOf(m.id);

    var kindBadge = "";
    if (kind === "boss") { kindBadge = '<span class="badge badge-yellow">BOSS</span>'; }
    else if (kind === "speed") { kindBadge = '<span class="badge badge-cyan">Speed</span>'; }
    else if (kind === "debug") { kindBadge = '<span class="badge badge-red">Debug</span>'; }

    var chips = '<div class="challenge-dots">';
    for (var c = 0; c < m.challenges.length; c++) {
      var chDone = missionChallengeDone(p, m.id, m.challenges[c].id);
      chips += '<span class="ch-dot' + (chDone ? ' done' : '') + '"></span>';
    }
    chips += '<span class="ch-dot' + (isDoneBuild(p, m.id) ? ' done' : '') + ' ch-build"></span></div>';

    if (unlocked) {
      return '<a class="mission-card" href="mission.html?id=' + m.id + '">' +
        '<div class="mission-icon">' + svgIcon(m.icon) + '</div>' +
        '<div class="mission-body">' +
          '<div class="mission-top"><span class="mission-num">Mission ' + m.num + '</span>' +
            (done ? '<span class="badge badge-green">Complete</span>' : kindBadge || '<span class="badge badge-green">Go</span>') + '</div>' +
          '<h3>' + esc(m.title) + '</h3>' +
          '<p>' + esc(m.tagline) + '</p>' +
          chips +
          '<div class="mission-progress"><div class="bar"><div class="bar-fill" style="width:' + prog.pct + '%"></div></div>' +
          '<span class="mission-progress-text">' + prog.done + ' / ' + prog.total + ' &middot; +' + partBaseXp(m) + ' XP/part</span></div>' +
        '</div>' +
      '</a>';
    }
    return '<div class="mission-card locked">' +
      '<div class="mission-icon"><span class="lock">' + svgIcon(ICON_LOCK) + '</span></div>' +
      '<div class="mission-body">' +
        '<div class="mission-top"><span class="mission-num">Mission ' + m.num + '</span>' + kindBadge + '</div>' +
        '<h3>' + esc(m.title) + '</h3>' +
        '<p>' + esc(m.tagline) + '</p>' +
        '<div class="lock-note">' + lockReason(p, m) + '</div>' +
      '</div>' +
    '</div>';
  }

  function lockReason(p, m) {
    var meta = MISSION_META[m.id] || {};
    var seriesId = meta.series;
    if (seriesId) {
      var series = seriesOf(seriesId);
      if (series && !seriesUnlocked(p, series)) {
        return series.unlockSeries
          ? 'Complete the ' + esc(seriesOf(series.unlockSeries).title) + ' series to unlock this mission.'
          : 'Finish the previous mission in this series to unlock.';
      }
      var ids = seriesMissions(seriesId);
      var idx = ids.indexOf(m.id);
      if (idx > 0) {
        return 'Complete "' + esc(getMission(ids[idx - 1]).title) + '" to unlock.';
      }
    }
    return 'Complete the previous mission to unlock.';
  }

  function renderSeriesBlock(p, series) {
    var ids = seriesMissions(series.id);
    if (ids.length === 0) { return ""; }
    var unlocked = seriesUnlocked(p, series);
    var sp = seriesProgress(p, series.id);

    var html = '<div class="series-block">';
    html += '<div class="series-card' + (unlocked ? '' : ' locked') + '">' +
      '<div class="series-emoji">' + svgIcon(series.icon) + '</div>' +
      '<div class="series-info">' +
        '<div class="series-top"><h3>' + esc(series.title) + '</h3>' +
          (unlocked ? '<span class="badge badge-green">' + sp.done + ' / ' + sp.total + '</span>' : '<span class="badge badge-muted">Locked</span>') + '</div>' +
        '<p>' + esc(series.desc) + '</p>' +
        (unlocked ? '<div class="bar"><div class="bar-fill" style="width:' + sp.pct + '%"></div></div>' : '<div class="lock-note">' + (series.unlockSeries ? 'Complete the ' + esc(seriesOf(series.unlockSeries).title) + ' series to unlock.' : '') + '</div>') +
      '</div>' +
    '</div>';

    for (var i = 0; i < ids.length; i++) {
      var m = getMission(ids[i]);
      if (m) { html += renderMissionCard(p, m); }
    }
    html += '</div>';
    return html;
  }

  function renderPathSection(p, path) {
    var ids = pathMissions(path.id);
    var done = 0;
    for (var i = 0; i < ids.length; i++) { if (p.doneMissions.indexOf(ids[i]) !== -1) { done++; } }
    var pct = ids.length ? Math.round((done / ids.length) * 100) : 0;

    var html = '<div class="path-section path-' + path.accent + '">';
    html += '<div class="path-head"><div class="path-emoji">' + svgIcon(path.icon) + '</div>' +
      '<div class="path-head-info"><h2>' + esc(path.title) + '</h2><p>' + esc(path.desc) + '</p></div>' +
      (ids.length ? '<span class="xp-chip">' + done + ' / ' + ids.length + '</span>' : '<span class="badge badge-muted">Soon</span>') +
      '</div>';
    if (ids.length) { html += '<div class="bar path-bar"><div class="bar-fill" style="width:' + pct + '%"></div></div>'; }

    for (var s = 0; s < SERIES.length; s++) {
      if (SERIES[s].pathId !== path.id) { continue; }
      if (SERIES[s].missions === false) { continue; }
      html += renderSeriesBlock(p, SERIES[s]);
    }
    html += '</div>';
    return html;
  }

  function renderLearn(root) {
    var p = load();
    var sel = selectedCourseId(p);
    var html = '<div class="page-head"><h1>Learn</h1><p>Pick a path, follow a series, complete missions in order.</p></div>';

    html += '<div class="learn-overall"><span>' + p.doneMissions.length + ' / ' + allMissions().length + ' missions</span>' +
      '<div class="bar"><div class="bar-fill" style="width:' + homeProgressPct(p) + '%"></div></div></div>';

    html += '<div class="course-pills">';
    for (var c = 0; c < PATHS.length; c++) {
      var pc = courseProgress(p, PATHS[c].id);
      html += '<button class="course-pill course-' + PATHS[c].accent + (sel === PATHS[c].id ? ' active' : '') + '" data-course="' + PATHS[c].id + '" type="button">' +
        svgIcon(PATHS[c].icon) + ' ' + esc(PATHS[c].title) +
        '<span class="course-pill-meta">' + pc.done + ' / ' + pc.total + '</span></button>';
    }
    html += '</div>';

    for (var i = 0; i < PATHS.length; i++) {
      if (PATHS[i].id === sel) { html += renderPathSection(p, PATHS[i]); }
    }

    root.innerHTML = html;
    renderHeaderChip(p);

    var pills = root.querySelectorAll(".course-pill[data-course]");
    for (var b = 0; b < pills.length; b++) {
      pills[b].addEventListener("click", function () {
        setSelectedCourse(p, this.getAttribute("data-course"));
        save(p);
        renderLearn(root);
      });
    }
  }

  /* ============================================================
     PRACTICE TAB
     ============================================================ */

  function renderPractice(root) {
    var p = load();
    var sel = selectedCourseId(p);
    var html = '<div class="page-head"><h1>Practice</h1><p>Quick challenges for extra XP. Practice earns XP but doesn\'t unlock missions.</p></div>';

    html += '<div class="course-pills">';
    for (var c = 0; c < PATHS.length; c++) {
      var catCount = 0;
      for (var cc = 0; cc < PRACTICE_CATS.length; cc++) {
        var all = PRACTICE[PRACTICE_CATS[cc].key] || [];
        for (var ci = 0; ci < all.length; ci++) { if ((all[ci].pathId || "web") === PATHS[c].id) { catCount++; } }
      }
      html += '<button class="course-pill course-' + PATHS[c].accent + (sel === PATHS[c].id ? ' active' : '') + '" data-course="' + PATHS[c].id + '" type="button">' +
        svgIcon(PATHS[c].icon) + ' ' + esc(PATHS[c].title) +
        '<span class="course-pill-meta">' + catCount + ' items</span></button>';
    }
    html += '</div>';

    html += '<div class="featured-practice">';
    var daily = dailyPracticeItem();
    var weekly = weeklyPracticeItem();
    var mystery = allPracticeItems().filter(function (it) { return it.mystery; })[0] || null;

    function featCard(label, item) {
      return '<a class="feat-card" href="practice.html?c=' + item.id + '">' +
        '<span class="feat-label">' + label + '</span>' +
        '<h3>' + esc(item.title) + '</h3>' +
        '<span class="feat-go">+ ' + item.xp + ' XP &rarr;</span></a>';
    }
    html += featCard('Daily', daily);
    html += featCard('Weekly', weekly);
    if (mystery) { html += featCard('Mystery', mystery); }
    html += '</div>';

    for (var k = 0; k < PRACTICE_CATS.length; k++) {
      var cat = PRACTICE_CATS[k];
      var items = (PRACTICE[cat.key] || []).filter(function (it) { return (it.pathId || "web") === sel; });
      if (!items.length) { continue; }
      html += '<div class="sec-title"><h2>' + svgIcon(cat.icon) + ' ' + cat.title + '</h2><p>' + cat.desc + '</p></div>';
      for (var i = 0; i < items.length; i++) {
        var it = items[i];
        var done = isDonePractice(p, it.id);
        var extra = '';
        if (it.timed) { extra += '<span class="badge badge-cyan">' + Math.round(it.timed / 60 * 10) / 10 + ' min</span> '; }
        if (it.mystery) { extra += '<span class="badge badge-purple">Mystery</span> '; }
        html += '<a class="practice-card' + (done ? ' done' : '') + '" href="practice.html?c=' + it.id + '">' +
          '<div class="practice-body">' +
            '<h3>' + esc(it.title) + '</h3>' +
            '<p>' + esc(it.tagline) + '</p>' +
          '</div>' +
          (done ? '<span class="badge badge-green">Done</span>' : extra + '<span class="xp-chip">+' + it.xp + ' XP</span>') +
        '</a>';
      }
    }

    root.innerHTML = html;
    renderHeaderChip(p);

    var pills = root.querySelectorAll(".course-pill[data-course]");
    for (var b = 0; b < pills.length; b++) {
      pills[b].addEventListener("click", function () {
        setSelectedCourse(p, this.getAttribute("data-course"));
        save(p);
        renderPractice(root);
      });
    }
  }

  /* ============================================================
     PROJECTS TAB
     ============================================================ */

  function projectUnlocked(p, proj) {
    for (var i = 0; i < proj.skills.length; i++) {
      if (!hasSkill(p, proj.skills[i])) { return false; }
    }
    return true;
  }

  function renderProjects(root) {
    var p = load();
    var sel = selectedCourseId(p);
    var html = '<div class="page-head"><h1>Projects</h1><p>Projects combine the skills you\'ve learned. Each one unlocks when you own all its skills.</p></div>';

    html += '<div class="course-pills">';
    for (var c = 0; c < PATHS.length; c++) {
      var pCount = PROJECTS.filter(function (pr) { return (pr.pathId || "web") === PATHS[c].id; }).length;
      var pDone = PROJECTS.filter(function (pr) { return (pr.pathId || "web") === PATHS[c].id && isDoneProject(p, pr.id); }).length;
      html += '<button class="course-pill course-' + PATHS[c].accent + (sel === PATHS[c].id ? ' active' : '') + '" data-course="' + PATHS[c].id + '" type="button">' +
        svgIcon(PATHS[c].icon) + ' ' + esc(PATHS[c].title) +
        '<span class="course-pill-meta">' + pDone + ' / ' + pCount + '</span></button>';
    }
    html += '</div>';

    var shown = 0;
    for (var i = 0; i < PROJECTS.length; i++) {
      var proj = PROJECTS[i];
      if ((proj.pathId || "web") !== sel) { continue; }
      shown++;
      var unlocked = projectUnlocked(p, proj);
      var done = isDoneProject(p, proj.id);
      var skillHtml = "";
      for (var s = 0; s < proj.skills.length; s++) {
        var has = hasSkill(p, proj.skills[s]);
        skillHtml += '<span class="skill-dot' + (has ? ' has' : '') + '">' + svgIcon(has ? ICON_CHECK : ICON_LOCK) + ' ' + esc(proj.skills[s]) + '</span>';
      }

      if (unlocked) {
        html += '<a class="project-card' + (done ? ' done' : '') + '" href="project.html?id=' + proj.id + '">' +
          '<div class="project-emoji">' + svgIcon(proj.icon) + '</div>' +
          '<div class="project-body">' +
            '<div class="project-top"><h3>' + esc(proj.title) + '</h3>' + (done ? '<span class="badge badge-green">Done</span>' : '<span class="xp-chip">+' + proj.xp + ' XP</span>') + '</div>' +
            '<p>' + esc(proj.desc) + '</p>' +
            '<div class="skill-dots">' + skillHtml + '</div>' +
          '</div></a>';
      } else {
        html += '<div class="project-card locked">' +
          '<div class="project-emoji">' + svgIcon(ICON_LOCK) + '</div>' +
          '<div class="project-body">' +
            '<div class="project-top"><h3>' + esc(proj.title) + '</h3><span class="badge badge-muted">Locked</span></div>' +
            '<p>' + esc(proj.desc) + '</p>' +
            '<div class="skill-dots">' + skillHtml + '</div>' +
            '<div class="lock-note">Unlock these skills to open this project.</div>' +
          '</div></div>';
      }
    }
    if (shown === 0) {
      html += '<div class="card muted-card">No projects for this course yet.</div>';
    }

    html += '<div class="future-paths"><div class="sec-title"><h2>Coming Later</h2></div>' +
      '<div class="future-list">' +
        '<div class="future-item">' + svgIcon(ICON_USER) + '<div><h3>Community</h3><p>Share builds and remix others.</p></div><span class="badge badge-muted">Later</span></div>' +
        '<div class="future-item">' + svgIcon(ICON_CROWN) + '<div><h3>Marketplace</h3><p>Trade and sell what you build.</p></div><span class="badge badge-muted">Later</span></div>' +
      '</div></div>';

    root.innerHTML = html;
    renderHeaderChip(p);

    var pills = root.querySelectorAll(".course-pill[data-course]");
    for (var b = 0; b < pills.length; b++) {
      pills[b].addEventListener("click", function () {
        setSelectedCourse(p, this.getAttribute("data-course"));
        save(p);
        renderProjects(root);
      });
    }
  }

  /* ============================================================
     PROFILE TAB
     ============================================================ */

  function renderProfile(root) {
    var p = load();
    var lvl = levelOf(p.xp);
    var pct = levelPct(p.xp);
    var sel = selectedCourseId(p);

    var html = '<div class="page-head"><h1>Profile</h1></div>';

    html += '<div class="profile-card">' +
      '<button class="avatar avatar-btn' + (p.avatar ? ' has-img' : '') + '" id="pf-avatar" type="button" title="Change picture">' +
        (p.avatar ? '<img src="' + esc(p.avatar) + '" alt="">' : esc(displayName(p)).charAt(0).toUpperCase()) +
      '</button>' +
      '<input type="file" id="pf-avatar-file" accept="image/*" style="display:none">' +
      '<div class="profile-info">' +
        '<div class="pf-name-row">' +
          '<input type="text" id="pf-name" maxlength="20" value="' + esc(displayName(p)) + '" aria-label="Your name">' +
          '<button class="ob-dice" id="pf-dice" type="button" title="Random name">' + svgIcon(ICON_DICE) + '</button>' +
          '<button class="btn-small" id="pf-save" type="button">Save</button>' +
        '</div>' +
        '<div class="profile-level">Level ' + lvl + ' &middot; ' + p.xp + ' XP</div>' +
        '<div class="bar"><div class="bar-fill" style="width:' + pct + '%"></div></div>' +
        '<div class="streak"><span class="streak-flame">' + svgIcon(ICON_FLAME) + '</span> ' + p.streak.count + ' day streak</div>' +
      '</div></div>';

    html += '<div class="profile-stats">' +
      '<div class="stat"><strong>' + p.doneMissions.length + '</strong><span>Missions</span></div>' +
      '<div class="stat"><strong>' + p.skills.length + '</strong><span>Skills</span></div>' +
      '<div class="stat"><strong>' + p.doneProjects.length + '</strong><span>Projects</span></div>' +
      '<div class="stat"><strong>' + overallMastery(p) + '%</strong><span>Mastery</span></div>' +
      '<div class="stat"><strong>' + xpThisWeek(p) + '</strong><span>Week XP</span></div>' +
    '</div>';

    root.innerHTML = html;

    var nameInput = document.getElementById("pf-name");
    var dice = document.getElementById("pf-dice");
    var saveBtn = document.getElementById("pf-save");
    if (dice) {
      dice.addEventListener("click", function () { nameInput.value = defaultRunnerName(); });
    }
    if (saveBtn) {
      saveBtn.addEventListener("click", function () {
        p.name = (nameInput.value || "").trim() || defaultRunnerName();
        save(p);
        renderProfile(root);
        toast("Profile saved!");
      });
    }
    var avatarBtn = document.getElementById("pf-avatar");
    var avatarFile = document.getElementById("pf-avatar-file");
    if (avatarBtn) {
      avatarBtn.addEventListener("click", function () { avatarFile && avatarFile.click(); });
    }
    if (avatarFile) {
      avatarFile.addEventListener("change", function () {
        pickAvatar(avatarFile.files[0], function (dataUrl) {
          if (!dataUrl) { toast("Could not read that image"); return; }
          p.avatar = dataUrl;
          save(p);
          renderProfile(root);
          toast("Picture updated!");
        });
      });
    }

    var htmlRest = '';

    htmlRest += '<div class="sec-title"><h2>Courses</h2><p>Progress across all three courses.</p></div>';
    htmlRest += '<div class="course-progress-list">';
    for (var cpi = 0; cpi < PATHS.length; cpi++) {
      var cpr = courseProgress(p, PATHS[cpi].id);
      htmlRest += '<div class="course-progress-row course-' + PATHS[cpi].accent + '">' +
        '<span class="course-progress-icon">' + svgIcon(PATHS[cpi].icon) + '</span>' +
        '<div class="course-progress-body"><div class="course-progress-top">' +
          '<span>' + esc(PATHS[cpi].title) + '</span><span>' + cpr.done + ' / ' + cpr.total + ' missions</span>' +
        '</div>' +
        '<div class="bar"><div class="bar-fill" style="width:' + cpr.pct + '%"></div></div></div>' +
        '<span class="mastery-pct">' + cpr.pct + '%</span>' +
      '</div>';
    }
    htmlRest += '</div>';

    htmlRest += '<div class="sec-title"><h2>Skills</h2></div>';
    if (p.skills.length === 0) {
      htmlRest += '<div class="card muted-card">No skills yet. Complete missions to unlock skills.</div>';
    } else {
      htmlRest += '<div class="skill-list">';
      for (var i = 0; i < p.skills.length; i++) {
        htmlRest += '<span class="skill-chip">' + esc(p.skills[i]) + '</span>';
      }
      htmlRest += '</div>';
    }

    htmlRest += '<div class="sec-title"><h2>Mastery</h2><p>Per-skill mastery. Finish missions clean (no hints, no solutions) to push it higher.</p></div>';
    htmlRest += '<div class="mastery-list">';
    var anyMastery = false;
    for (var sk = 0; sk < SKILL_ORDER.length; sk++) {
      var skill = SKILL_ORDER[sk];
      var mt = masteryOf(p, skill);
      var mtotal = missionSkillTotal(skill);
      if (mtotal === 0) { continue; }
      anyMastery = true;
      htmlRest += '<div class="mastery-row">' +
        '<span class="mastery-name">' + esc(skill) + '</span>' +
        '<div class="bar"><div class="bar-fill" style="width:' + mt + '%"></div></div>' +
        '<span class="mastery-pct">' + mt + '%</span>' +
      '</div>';
    }
    if (!anyMastery) { htmlRest += '<div class="card muted-card">Complete missions to grow your mastery.</div>'; }
    htmlRest += '</div>';

    htmlRest += '<div class="sec-title"><h2>Achievements</h2></div>';
    var achGroups = {};
    for (var ai = 0; ai < ACHIEVEMENTS.length; ai++) {
      var grp = ACHIEVEMENTS[ai].group || "Other";
      if (!achGroups[grp]) { achGroups[grp] = []; }
      achGroups[grp].push(ACHIEVEMENTS[ai]);
    }
    for (var g = 0; g < ACHIEVEMENT_GROUPS.length; g++) {
      var grpKey = ACHIEVEMENT_GROUPS[g];
      var list = achGroups[grpKey] || [];
      if (!list.length) { continue; }
      var gotInGroup = 0;
      for (var gi = 0; gi < list.length; gi++) { if (hasAchievement(p, list[gi].id)) { gotInGroup++; } }
      htmlRest += '<div class="ach-group"><div class="ach-group-head"><h3>' + esc(grpKey) + '</h3>' +
        '<span class="ach-count">' + gotInGroup + ' / ' + list.length + ' unlocked</span></div><div class="achievements">';
      for (var aj = 0; aj < list.length; aj++) {
        var ach = list[aj];
        var got = hasAchievement(p, ach.id);
        htmlRest += '<div class="ach ach-' + esc(ach.rarity || "common") + (got ? ' got' : '') + '">' +
          '<div class="ach-emoji">' + svgIcon(ICON_TROPHY) + '</div>' +
          '<div><h3>' + esc(ach.title) + '</h3><p>' + esc(ach.desc) + '</p></div>' +
          (got ? '<span class="badge badge-green">Unlocked</span>' : '<span class="badge badge-muted">' + esc(ach.rarity || "common") + '</span>') +
        '</div>';
      }
      htmlRest += '</div></div>';
    }
    htmlRest += '</div>';

    var wrap = document.createElement("div");
    wrap.innerHTML = htmlRest;
    root.appendChild(wrap);

    htmlRest = '<div class="sec-title"><h2>What can I build now?</h2><p>Projects you can start in ' + esc(pathOf(sel).title) + '.</p></div>';
    var canBuild = [];
    for (var b = 0; b < PROJECTS.length; b++) {
      if ((PROJECTS[b].pathId || "web") !== sel) { continue; }
      if (projectUnlocked(p, PROJECTS[b]) && !isDoneProject(p, PROJECTS[b].id)) { canBuild.push(PROJECTS[b]); }
    }
    if (canBuild.length === 0) {
      htmlRest += '<div class="card muted-card">Unlock more skills to unlock more projects. Check your Learn tab.</div>';
    } else {
      for (var cb = 0; cb < canBuild.length; cb++) {
        htmlRest += '<a class="practice-card" href="project.html?id=' + canBuild[cb].id + '"><div class="practice-body"><h3>' + svgIcon(canBuild[cb].icon) + ' ' + esc(canBuild[cb].title) + '</h3><p>' + esc(canBuild[cb].desc) + '</p></div><span class="badge badge-green">Build</span></a>';
      }
    }

    htmlRest += '<button class="btn-ghost" id="reset-btn">Reset progress</button>';
    wrap.innerHTML += htmlRest;

    var resetBtn = document.getElementById("reset-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        if (confirm("Reset all progress? This cannot be undone.")) {
          save(defaultProgress());
          switchTab("home");
        }
      });
    }

    renderHeaderChip(p);
  }

  /* ============================================================
     LEADERBOARD TAB
     Local-friendly: you rank against a simulated field of
     runners that changes each week / month.
     ============================================================ */

  function medalFor(i) {
    if (i === 0) { return medalSvg(1, "#ffd54a"); }
    if (i === 1) { return medalSvg(2, "#c9d4de"); }
    if (i === 2) { return medalSvg(3, "#e5a36b"); }
    return '<span class="lb-rank">' + (i + 1) + '</span>';
  }

  function avatarHtml(a) {
    if (a && a.length > 16) { return '<img src="' + esc(a) + '" alt="">'; }
    return "";
  }

  function submitScore(p) {
    try {
      postScore(p);
    } catch (e) { /* offline or storage blocked */ }
  }

  function postScore(p) {
    try {
      var now = Date.now();
      var last = parseInt(localStorage.getItem("skillrun_lb_post") || "0", 10);
      if (now - last < 60000) { return; }
      localStorage.setItem("skillrun_lb_post", String(now));
      fetch("/api/leaderboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: p.playerId,
          name: displayName(p),
          avatar: (p.avatar || "").length > 20000 ? "" : (p.avatar || ""),
          xp: p.xp,
          weekXp: xpThisWeek(p),
          monthXp: xpThisMonth(p)
        })
      }).catch(function () {});
    } catch (e) { /* offline or storage blocked */ }
  }

  window.skillrunPostScore = function () {
    try { postScore(load()); } catch (e) {}
  };

  function renderLbShell(kind) {
    return '<div class="page-head"><h1>Leaderboard</h1><p>' + (kind === "week" ? "This week" : "This month") + ' &middot; highest XP wins.</p></div>' +
      '<div class="lb-switch">' +
        '<a class="lb-btn' + (kind === "week" ? ' active' : '') + '" href="?tab=leaderboard&lb=week">Weekly</a>' +
        '<a class="lb-btn' + (kind === "month" ? ' active' : '') + '" href="?tab=leaderboard&lb=month">Monthly</a>' +
      '</div>';
  }

  function renderLbRows(root, p, kind, players, meXp, persisted) {
    var rows = [];
    var foundMe = false;
    for (var pi = 0; pi < (players || []).length; pi++) {
      var pl = players[pi];
      var isYou = pl.id === p.playerId;
      if (isYou) { foundMe = true; }
      rows.push({
        name: isYou ? displayName(p) : (pl.name || "SpeedRunner"),
        xp: isYou ? meXp : (kind === "month" ? (pl.monthXp || 0) : (pl.weekXp || 0)),
        avatar: isYou ? (p.avatar || "") : (pl.avatar || ""),
        you: isYou
      });
    }
    if (!foundMe) {
      rows.push({ name: displayName(p), xp: meXp, avatar: p.avatar || "", you: true });
    }

    rows.sort(function (a, b) { return b.xp - a.xp; });
    var rank = 0;
    for (var i = 0; i < rows.length; i++) { if (rows[i].you) { rank = i + 1; } }

    var top = rows[0];
    var topIsMe = top.you;

    var html = renderLbShell(kind);
    html += '<div class="lb-top">' +
      '<div class="lb-top-medal">' + medalFor(0) + '</div>' +
      '<div class="lb-top-name">' + avatarHtml(top.avatar) + ' ' + esc(top.name) + (topIsMe ? ' <span class="badge badge-green">You</span>' : '') + '</div>' +
      '<div class="lb-top-xp">' + top.xp + ' XP</div>' +
      '<p>' + (topIsMe ? 'You hold the highest XP. Legend.' : 'Highest XP this ' + kind + '. Can you take the crown?') + '</p>' +
    '</div>';

    html += '<div class="lb-list">';
    for (var r = 0; r < rows.length; r++) {
      var row = rows[r];
      var isMe = row.you;
      html += '<div class="lb-row' + (isMe ? ' me' : '') + (r === 0 ? ' gold' : '') + '">' +
        '<span class="lb-medal">' + medalFor(r) + '</span>' +
        '<span class="lb-ava">' + avatarHtml(row.avatar) + '</span>' +
        '<span class="lb-name">' + esc(row.name) + (isMe ? ' <span class="badge badge-green">You</span>' : '') + '</span>' +
        '<span class="lb-xp">' + row.xp + ' XP</span>' +
      '</div>';
    }
    html += '</div>';

    html += '<div class="lb-note">' + (rank <= 5
      ? '<div class="card muted-card">You are #' + rank + ' &middot; keep pushing!</div>'
      : '<div class="card muted-card">You are #' + rank + ' of ' + rows.length + '. Grind some missions to climb.</div>') + '</div>';

    if (persisted === false) {
      html += '<div class="card muted-card lb-warn">' + svgIcon(ICON_LIGHT) + ' Storage not configured on the server yet &middot; scores reset on redeploy. Connect Vercel KV to persist.</div>';
    }

    root.innerHTML = html;
    renderHeaderChip(p);
  }

  function renderLbOffline(root, p, kind, meXp) {
    var html = renderLbShell(kind);
    html += '<div class="lb-top">' +
      '<div class="lb-top-medal">' + medalFor(0) + '</div>' +
      '<div class="lb-top-name">' + esc(displayName(p)) + ' <span class="badge badge-green">You</span></div>' +
      '<div class="lb-top-xp">' + meXp + ' XP</div>' +
      '<p>Your real ' + kind + ' XP &middot; this device only.</p>' +
    '</div>';
    html += '<div class="card muted-card">Offline mode &middot; no internet or not hosted yet, so there is nobody else to rank against (no fake players). Host the app on Vercel and the world leaderboard goes live.</div>';
    root.innerHTML = html;
    renderHeaderChip(p);
  }

  function renderLeaderboard(root) {
    var p = load();
    var kind = (getQueryParam("lb") === "month") ? "month" : "week";
    var meXp = kind === "month" ? xpThisMonth(p) : xpThisWeek(p);

    root.innerHTML = renderLbShell(kind) + '<div class="card muted-card">Loading leaderboard&hellip;</div>';
    renderHeaderChip(p);

    submitScore(p);

    var controller = new AbortController();
    var timer = setTimeout(function () { controller.abort(); }, 8000);
    fetch("/api/leaderboard?scope=" + kind, { headers: { Accept: "application/json" }, signal: controller.signal })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        clearTimeout(timer);
        renderLbRows(root, p, kind, data.players || [], meXp, data.persisted);
      })
      .catch(function () {
        clearTimeout(timer);
        renderLbOffline(root, p, kind, meXp);
      });
  }

  /* ============================================================
     TAB SWITCHING
     ============================================================ */

  var TAB_RENDER = {
    home: renderHome,
    learn: renderLearn,
    practice: renderPractice,
    projects: renderProjects,
    profile: renderProfile,
    leaderboard: renderLeaderboard
  };

  function switchTab(name) {
    var tabs = document.querySelectorAll(".tab");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.toggle("active", tabs[i].getAttribute("data-tab") === name);
    }
    var root = document.getElementById("view");
    var render = TAB_RENDER[name] || renderHome;
    render(root);
    var scroller = document.querySelector(".app-shell > .app-main");
    if (scroller) scroller.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  /* ---------------- header ---------------- */

  function renderHeaderChip(p) {
    var chips = document.querySelectorAll("[data-xp-chip]");
    for (var i = 0; i < chips.length; i++) {
      chips[i].textContent = "Lv " + levelOf(p.xp) + " &middot; " + p.xp + " XP";
    }
    var avs = document.querySelectorAll("[data-header-avatar]");
    for (var j = 0; j < avs.length; j++) {
      avs[j].innerHTML = p.avatar
        ? '<img src="' + esc(p.avatar) + '" alt="">'
        : esc(displayName(p)).charAt(0).toUpperCase();
    }
  }

  function displayName(p) { return p.name ? String(p.name) : "SpeedRunner"; }

  function pickAvatar(file, cb) {
    if (!file || !/^image\//.test(file.type)) { cb(""); return; }
    var reader = new FileReader();
    reader.onload = function (ev) {
      var img = new Image();
      img.onload = function () {
        var size = 128;
        var canvas = document.createElement("canvas");
        canvas.width = size; canvas.height = size;
        var ctx2 = canvas.getContext("2d");
        ctx2.drawImage(img, 0, 0, size, size);
        try { cb(canvas.toDataURL("image/jpeg", 0.82)); }
        catch (e) { cb(ev.target.result); }
      };
      img.onerror = function () { cb(ev.target.result); };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  }

  /* ---------------- onboarding ---------------- */

  function renderOnboarding() {
    var overlay = document.getElementById("onboarding");
    var body = document.getElementById("onboard-body");
    var p = load();

    var html = '<div class="ob-logo"><span class="ob-mark">' + svgIcon('<path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>') + '</span> SkillRun</div>';
    html += '<h1>Welcome to SkillRun</h1>';
    html += '<p class="ob-sub">Pick a course, set your name, start building. It takes 20 seconds.</p>';

    html += '<div class="ob-identity">';
    html += '<button class="ob-avatar" id="ob-avatar" type="button" title="Upload a picture">' +
      (p.avatar ? '<img src="' + esc(p.avatar) + '" alt="">' : '<span class="ob-avatar-plus">' + svgIcon('<path d="M12 5v14M5 12h14"/>') + '</span>') + '</button>';
    html += '<input type="file" id="ob-avatar-file" accept="image/*" style="display:none">';
    html += '<div class="ob-name-wrap"><label>Your runner name</label>' +
      '<input type="text" id="ob-name" maxlength="20" value="' + esc(displayName(p)) + '" placeholder="SpeedRunner1234">' +
      '<button class="ob-dice" id="ob-dice" type="button" title="Random name">' + svgIcon(ICON_DICE) + '</button></div>';
    html += '</div>';

    html += '<div class="ob-label">Choose your course</div>';
    html += '<div class="ob-options">';
    for (var i = 0; i < PATHS.length; i++) {
      var path = PATHS[i];
      html += '<button class="ob-option' + (i === 0 ? ' picked' : '') + '" data-course="' + path.id + '" type="button">' +
        '<span class="ob-emoji">' + svgIcon(path.icon) + '</span>' +
        '<span class="ob-text"><strong>' + esc(path.title) + '</strong><br><small>' + esc(path.desc) + '</small></span>' +
        '<span class="ob-go">&rarr;</span></button>';
    }
    html += '</div>';

    html += '<button class="btn-primary btn-block" id="ob-start" type="button">Start building &rarr;</button>';

    body.innerHTML = html;

    var curName = displayName(p);
    var nameInput = document.getElementById("ob-name");
    var dice = document.getElementById("ob-dice");
    if (dice) {
      dice.addEventListener("click", function () {
        curName = defaultRunnerName();
        nameInput.value = curName;
      });
    }

    var chosen = p.path || "web";
    var courseBtns = body.querySelectorAll("[data-course]");
    for (var o = 0; o < courseBtns.length; o++) {
      courseBtns[o].addEventListener("click", function () {
        chosen = this.getAttribute("data-course");
        for (var x = 0; x < courseBtns.length; x++) {
          courseBtns[x].classList.toggle("picked", courseBtns[x] === this);
        }
      });
    }

    var avatarBtn = document.getElementById("ob-avatar");
    var avatarFile = document.getElementById("ob-avatar-file");
    var newAvatar = p.avatar || "";
    if (avatarFile) {
      avatarFile.addEventListener("change", function () {
        pickAvatar(avatarFile.files[0], function (dataUrl) {
          if (dataUrl) { newAvatar = dataUrl; avatarBtn.innerHTML = '<img src="' + esc(dataUrl) + '" alt="">'; }
        });
      });
    }
    if (avatarBtn) {
      avatarBtn.addEventListener("click", function () { avatarFile && avatarFile.click(); });
    }

    var start = document.getElementById("ob-start");
    if (start) {
      start.addEventListener("click", function () {
        var name = (nameInput.value || "").trim() || defaultRunnerName();
        p.name = name;
        p.avatar = newAvatar;
        setSelectedCourse(p, chosen);
        p.startPoint = "new";
        p.onboarded = true;
        save(p);
        overlay.style.display = "none";
        switchTab("home");
      });
    }

    overlay.style.display = "flex";
  }

  /* ---------------- boot ---------------- */

  function setupTabs() {
    var tabs = document.querySelectorAll(".tab");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", function () {
        switchTab(this.getAttribute("data-tab"));
      });
    }
  }

  function boot() {
    var page = document.body.getAttribute("data-page");
    if (page !== "mission" && page !== "practice" && page !== "project") {
      setupTabs();
      var p = load();
      if (p.onboarded) {
        var tab = getQueryParam("tab");
        switchTab(tab && TAB_RENDER[tab] ? tab : "home");
      } else {
        renderOnboarding();
      }
    }
    registerSW();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
