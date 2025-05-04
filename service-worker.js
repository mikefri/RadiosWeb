self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("radios-cache").then(cache => {
      return cache.addAll([
        "/RadiosWeb/index.html",
        "/RadiosWeb/manifest.json",
        "/RadiosWeb/icons/icon-192.png",
        "/RadiosWeb/icons/icon-512.png",
        // ajoute ici d'autres ressources importantes
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

