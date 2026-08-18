/* SkillRun PWA service worker
   Caches the app shell so it works offline once visited.
   NOTE: service workers only run over http(s), not file:// .
*/

const CACHE = 'skillrun-v6';
const ASSETS = [
  './',
  './index.html',
  './mission.html',
  './practice.html',
  './project.html',
  './css/app.css',
  './js/missions.js',
  './js/missions-js.js',
  './js/missions-web.js',
  './js/missions-web2.js',
  './js/missions-python.js',
  './js/missions-electronics.js',
  './js/missions-portfolio.js',
  './js/python-eval.js',
  './js/electronics.js',
  './js/paths.js',
  './js/practice-data.js',
  './js/app.js',
  './js/app-install.js',
  './js/workspace.js',
  '../skillrun-logo.svg',
  '../skillrun-icon.svg'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (key) { return key !== CACHE; })
          .map(function (key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') { return; }
  event.respondWith(
    caches.match(event.request).then(function (cached) {
      if (cached) { return cached; }
      return fetch(event.request).then(function (response) {
        const copy = response.clone();
        caches.open(CACHE).then(function (cache) { cache.put(event.request, copy); });
        return response;
      }).catch(function () {
        return caches.match('./index.html');
      });
    })
  );
});