// SkillRun leaderboard API — Vercel serverless function.
// GET  /api/leaderboard?scope=week|month  -> ranked players
// POST /api/leaderboard                   -> upsert your score
//
// Storage: uses Vercel KV (@vercel/kv) when KV_REST_API_URL /
// KV_REST_API_TOKEN are configured. Falls back to an in-memory store
// so the app still works without setup (scores reset on redeploys —
// the response reports persisted:false so the UI can warn).

const KV_KEY = "skillrun:players";

// in-memory fallback (per cold-start instance)
let memory = [];

function sanitize(v, max, fallback) {
  if (typeof v !== "string") { return fallback; }
  v = v.replace(/<[^>]*>/g, "").replace(/[\u0000-\u001f]/g, "").trim().slice(0, max);
  return v || fallback;
}

function sanitizeAvatar(v) {
  if (typeof v !== "string" || v.length > 20000) { return ""; }
  if (!/^data:image\//.test(v)) { return ""; }
  return v;
}

function num(v) { const n = parseInt(v, 10); return isNaN(n) ? 0 : n; }

async function loadPlayers() {
  let kv = null;
  try {
    kv = require("@vercel/kv").kv;
  } catch (e) { /* not installed */ }
  if (kv && process.env.KV_REST_API_URL) {
    try {
      const val = await kv.get(KV_KEY);
      return { players: Array.isArray(val) ? val : [], persisted: true };
    } catch (e) { /* fall through to memory */ }
  }
  return { players: memory.slice(), persisted: false };
}

async function savePlayers(players, persisted) {
  if (!persisted) {
    memory = players.slice(0, 1000);
    return;
  }
  try {
    const kv = require("@vercel/kv").kv;
    await kv.set(KV_KEY, players.slice(0, 1000));
  } catch (e) { memory = players.slice(0, 1000); }
}

function cors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function send(res, code, data) {
  cors(res);
  res.statusCode = code;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(data));
}

module.exports = async function (req, res) {
  cors(res);
  if (req.method === "OPTIONS") { res.statusCode = 204; res.end(); return; }

  if (req.method === "POST") {
    let body = {};
    try {
      body = JSON.parse(req.body || "{}");
    } catch (e) {
      return send(res, 400, { error: "invalid json" });
    }
    const id = sanitize(body.id, 60, "");
    if (!id) { return send(res, 400, { error: "missing id" }); }
    const name = sanitize(body.name, 20, "SpeedRunner");
    const avatar = sanitizeAvatar(body.avatar);

    const { players, persisted } = await loadPlayers();
    let found = null;
    const next = players.map(function (p) {
      if (p.id === id) {
        found = p;
        return Object.assign({}, p, {
          name: name,
          avatar: avatar || p.avatar || "",
          xp: num(body.xp),
          weekXp: num(body.weekXp),
          monthXp: num(body.monthXp),
          updated: Date.now()
        });
      }
      return p;
    });
    if (!found) {
      next.push({ id: id, name: name, avatar: avatar, xp: num(body.xp), weekXp: num(body.weekXp), monthXp: num(body.monthXp), updated: Date.now() });
    }
    await savePlayers(next, persisted);
    return send(res, 200, { ok: true, persisted: persisted });
  }

  if (req.method === "GET") {
    const scope = req.query && req.query.scope === "month" ? "month" : "week";
    const { players, persisted } = await loadPlayers();
    const key = scope === "month" ? "monthXp" : "weekXp";
    const sorted = players.slice().sort(function (a, b) { return (num(b[key]) - num(a[key])) || (b.updated - a.updated); });
    return send(res, 200, { players: sorted.slice(0, 100), scope: scope, persisted: persisted, serverTime: Date.now() });
  }

  return send(res, 405, { error: "method not allowed" });
};