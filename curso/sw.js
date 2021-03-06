const cacheName = 'v2';
const resourcesToPrecache = [
  '/',
  './index.html',
  './manifest.json',
  './192x192.png',
  './512x512.png',
  './index.css'
];
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then( cache => (cache.addAll(resourcesToPrecache))),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
  .then(cacheResponse => (cacheResponse || fetch(event.request))),
  )
});
/*
// This is the "Offline page" service worker
const CACHE = "v11";

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = [
  "/",
  "./index.html",
  "./manifest.json",
  "./192x192.png",
  "./512x512.png",
  "./index.css"
];

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');


self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.add(offlineFallbackPage))
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;

        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {

        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    })());
  }
});

// This is the "Offline copy of assets" service worker

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE
  })
);

// This is the service worker with the Cache-first network

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.CacheFirst({
    cacheName: CACHE
  })
);*/