const cacheName = 'v2';
const resourcesToPrecache = ['/','./index.html','./manifest.json','./192x192.png','./512x512.png','./css/one.css'];
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        return cache.addAll(resourcesToPrecache);
      })
  );
});
/*
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
  .then(cacheResponse => (cacheResponse || fetch(event.request)))
  )
});*/
this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});