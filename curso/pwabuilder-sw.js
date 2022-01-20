const CacheName = 'v2';
const resourcesToPrecache = ['/',''];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CacheName)
    .then(cache => (cache.addAll(resourcesToPrecache))),
    )
});
// Clear cache on activate

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request)
  .then(cacheResponse => (cacheResponse || fetch(event.request)))
  )
});