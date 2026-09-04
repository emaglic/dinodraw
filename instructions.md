# DinoDraw Agent Instructions

This file is the short operating guide for agent sessions. The durable project memory lives in `wiki/`; read only the relevant wiki pages for the task instead of loading every detail up front.

## First Steps

- Read `wiki/index.md` first.
- Read the feature page for the subsystem you are changing.
- Treat `src/` as the application source. The rest of the repo is documentation, repo metadata, and agent/project instructions.
- Treat `temp/` as an ignored scratch inbox for screenshots, notes, and one-off instructions from the user. Do not preserve files from `temp/` unless the user explicitly asks. Extract durable conclusions into the wiki when useful.
- Treat `output/` as ignored agent-generated scratch output for the user's human consumption. Write there only when the user explicitly asks for a generated file such as a report, archive, or export. If the generated output contains durable project knowledge, summarize that durable knowledge into the wiki too.

## Project Basics

- DinoDraw is a static, local-first drawing and notebook web app.
- It is designed primarily for a BOOX Note Air5 C e-ink tablet with stylus input, while still working on laptop/desktop browsers.
- The app is plain HTML, CSS, and vanilla JavaScript in `src/`.
- Avoid backend architecture, build tooling, or a heavy framework unless the user explicitly asks.
- The visible product name is "Dino Draw". Code and file-format identifiers generally use "DinoDraw" or `dinodraw`.

## High-Priority Rules

- Keep the app fully usable without a backend.
- Preserve the historical IndexedDB database name: `booxDrawingDocuments`, unless a migration is implemented.
- Keep page backgrounds separate from drawing image data. Erasing must not bake in or erase backgrounds.
- Preserve both drawing layers: `underLayer` for Draw Behind/highlighter strokes and `layer` for normal ink/shapes.
- Render/export order is page background, `underLayer`, then normal `layer`.
- Eraser and lasso behavior must affect both drawing layers.
- Prefer low drawing latency and reliable pen behavior over decorative polish.
- Avoid hover-only interactions; BOOX pen hover can trigger accidentally.
- Do not reintroduce Google Drive sync/upload unless the user explicitly asks and accepts the backendless OAuth tradeoffs.

## Versioning

Whenever code, UI, service worker behavior, cacheable assets, or visible behavior changes, bump the app version everywhere. The user relies on the visible version number to detect stale tablet caching.

Update all of these together:

- `APP_VERSION` in `src/app.js`
- stylesheet query string in `src/index.html`
- app script query string in `src/index.html`
- service worker query string in `src/index.html`
- manifest query string in `src/index.html`
- visible bottom-right version badge in `src/index.html`
- landing page version text in `src/index.html`
- `CACHE_NAME` in `src/service-worker.js`
- cached `styles.css` and `app.js` URLs in `src/service-worker.js`

Current version at the time this guide was last updated: `v0.8.41`.

## Compatibility

The BOOX browser may have trouble parsing newer JavaScript syntax. Avoid:

- optional chaining, such as `obj?.value`
- nullish coalescing, such as `value ?? fallback`
- `replaceAll`
- `structuredClone`

Use older, broadly compatible JavaScript patterns unless the project explicitly moves to a transpiled build.

## Validation

After JavaScript changes:

```powershell
node --check src/app.js
```

If the service worker changed:

```powershell
node --check src/service-worker.js
```

Useful scans:

```powershell
rg -n "v0\.8\.|0\.8\." src
rg -n "\?\.| \?\? |replaceAll|structuredClone" src
```

For UI changes, test locally in a browser when practical. For BOOX-sensitive changes, remember that laptop behavior may not reveal e-ink latency, caching, or pen-hover issues.
