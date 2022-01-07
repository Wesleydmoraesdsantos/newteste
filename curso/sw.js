const cacheName = 'v1';
const resourcesToPrecache = ['/','/index.html','/css/one.css','/img/Share-icon.png'];
self.addEventListener('install', (event) => {
  event.waitUtil(
    caches.open(cacheName)
    .then(cache => (cache.addAll(resourcesToPrecache))),
    )
});
self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request)).then(cacheResponse => (cacheResponse || fetch(event.request)))
})