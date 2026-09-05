const CACHE_NAME = "dinodraw-v0.8.68";
const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./styles.css?v=0.8.68",
  "./app.js?v=0.8.68",
  "./manifest.webmanifest?v=0.8.68",
  "./icon.svg"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(PRECACHE_URLS);
      })
      .then(function () {
        return self.skipWaiting();
      })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches
      .keys()
      .then(function (cacheNames) {
        return Promise.all(
          cacheNames.map(function (cacheName) {
            if (
              cacheName.indexOf("dinodraw-") === 0 &&
              cacheName !== CACHE_NAME
            ) {
              return caches.delete(cacheName);
            }

            return Promise.resolve();
          })
        );
      })
      .then(function () {
        return self.clients.claim();
      })
  );
});

self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);

  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(function (response) {
        const responseCopy = response.clone();

        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseCopy);
        });

        return response;
      })
      .catch(function () {
        return caches.match(event.request).then(function (cachedResponse) {
          if (cachedResponse) {
            return cachedResponse;
          }

          if (event.request.mode === "navigate") {
            return caches.match("./index.html");
          }

          return cachedResponse;
        });
      })
  );
});
