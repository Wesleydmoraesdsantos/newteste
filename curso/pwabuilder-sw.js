const cacheName = 'v2';
const resourcesToPrecache = ['/','./index.html','./manifest.html','./192x192.png','./512x512.png','./js/one.js'];

/*self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
    .then(cache => (cache.addAll(resourcesToPrecache))),
    )
});*/
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        return cache.addAll(resourcesToPrecache);
      })
  );
});

/*self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request)
  .then(cacheResponse => (cacheResponse || fetch(event.request)))
  )
});*/

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});