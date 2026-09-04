# Offline PWA

Offline behavior is handled by `src/manifest.webmanifest`, `src/service-worker.js`, and registration/cache-busting references in `src/index.html`.

## Requirements

- Dino Draw should remain usable as static files.
- Drawing, saving, importing, exporting, PNG ZIP creation, and PDF creation happen locally in the browser.
- The only thing that truly requires an internet connection after deployment is fetching an updated build from the server.

## Secure Contexts

Offline/PWA install behavior requires HTTPS or localhost. On insecure LAN HTTP, the app can still run as a normal static page, but service-worker and install behavior may not be available.

## Manifest

- The manifest prefers fullscreen display mode.
- It includes standalone fallback via display override.
- Installed PWA launches should request fullscreen first and fall back to standalone when needed.
- Current `start_url` is `./index.html`.
- Current `scope` is `./`.
- Current orientation is `any`.
- Current icon is `./icon.svg` with `purpose: "any maskable"`.

## Service Worker

- The service worker caches core static assets.
- Cache names include the app version.
- Old caches should be cleaned up during activation.
- Current cache name is `dinodraw-v0.8.53`.
- Current precache list: `./`, `./index.html`, versioned `styles.css`, versioned `app.js`, versioned `manifest.webmanifest`, and `./icon.svg`.
- Install opens the versioned cache, adds precache URLs, then calls `skipWaiting()`.
- Activate deletes old `dinodraw-*` caches and calls `clients.claim()`.
- Fetch handling is network-first for same-origin GET requests, writes successful responses back into the current cache, then falls back to cache on network failure.
- Navigation fallback returns cached `./index.html` when available.

## Registration

`index.html` registers `./service-worker.js?v=...` on window load when `navigator.serviceWorker` exists. Registration uses `updateViaCache: "none"` and ignores registration errors.

Early inline script handlers surface startup/script errors in the document list and save-status UI.

## Versioning

Any changes to service-worker behavior, manifest behavior, cacheable files, app code, UI, or visible behavior require a version bump across `src/app.js`, `src/index.html`, and `src/service-worker.js`.

This matters because the user relies on visible version text to detect stale tablet caching.
