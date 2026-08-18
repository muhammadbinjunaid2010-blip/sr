/* SkillRun local dev server.
   Serves the PWA from /app and runs the /api/leaderboard function,
   so you can test the real leaderboard before deploying to Vercel.
   Usage: npm start   (then open http://localhost:3000) */

const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const APP = path.join(ROOT, "app");
const PORT = process.env.PORT || 3000;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webmanifest": "application/manifest+json",
  ".ico": "image/x-icon"
};

let leaderboardHandler = null;
try {
  leaderboardHandler = require(path.join(ROOT, "api", "leaderboard.js"));
} catch (e) {
  console.error("Could not load api/leaderboard.js:", e.message);
}

const server = http.createServer(function (req, res) {
  const url = req.url.split("?")[0];

  if (url.startsWith("/api/") && leaderboardHandler) {
    const bodyParts = [];
    req.on("data", function (chunk) { bodyParts.push(chunk); });
    req.on("end", function () {
      const fakeReq = {
        method: req.method,
        body: Buffer.concat(bodyParts).toString("utf8"),
        query: Object.fromEntries(new URL(req.url, "http://localhost").searchParams)
      };
      leaderboardHandler(fakeReq, res).catch(function (e) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: e.message }));
      });
    });
    return;
  }

  let rel = url === "/" ? "/index.html" : url;
  let filePath = path.normalize(path.join(APP, rel));
  if (!filePath.startsWith(APP)) {
    res.statusCode = 403;
    res.end("forbidden");
    return;
  }

  fs.readFile(filePath, function (err, data) {
    if (err) {
      res.statusCode = 404;
      res.end("not found");
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.setHeader("Content-Type", MIME[ext] || "application/octet-stream");
    res.end(data);
  });
});

server.listen(PORT, function () {
  console.log("SkillRun dev server: http://localhost:" + PORT);
});