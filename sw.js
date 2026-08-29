// Minimal service worker — caches the app shell so the site/app opens
// even with a poor connection. Live data (motorcycles, login) always
// comes fresh from Supabase over the network when available.
const CACHE_NAME = 'seng-tara-shell-v1';
const SHELL_FILES = [
  './index.html',
  './admin.html',
  './app.js',
  './config.js',
  './manifest.json',
  './admin-manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_FILES)).catch(()=>{})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  // Never intercept Supabase API/auth/storage calls — always go to network
  if (req.url.includes('supabase.co')) return;
  if (req.method !== 'GET') return;

  event.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy)).catch(()=>{});
        return res;
      })
      .catch(() => caches.match(req))
  );
});
