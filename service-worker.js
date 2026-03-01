self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("radiosweb-v2").then(cache => {
      return cache.addAll([
        "/RadiosWeb/index.html",
        "/RadiosWeb/manifest.json",
        "/RadiosWeb/icon-192.png",
        "/RadiosWeb/icon-512.png",
        // ajoute ici d'autres fichiers nécessaires (CSS, JS, etc.)
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
