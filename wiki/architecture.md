# Architecture

Dino Draw is a static web app implemented with plain HTML, CSS, and vanilla JavaScript under `src/`.

## Source Layout

- `src/index.html`: app shell, canvas, toolbar markup, modals/dialogs, document screen, version text, and cache-busting query strings.
- `src/styles.css`: visual system, layout, dialogs, toolbars, document list, page manager, responsive behavior, and print/screen styling.
- `src/app.js`: state, drawing model, IndexedDB persistence, import/export, page management, dialogs, toolbar behavior, input handling, and initialization.
- `src/service-worker.js`: offline cache setup, fetch strategy, and old-cache cleanup.
- `src/manifest.webmanifest`: PWA metadata and display preferences.
- `src/icon.svg`: app icon and document screen logo.

## Single-Module JavaScript Map

`src/app.js` is one large browser script with no module system or build step. Keep related edits close to the existing function cluster.

- DOM queries and constants are declared at the top.
- IndexedDB/document helpers appear before rendering and input logic.
- Export helpers include custom ZIP and PDF writers to avoid dependencies.
- Page/layer/history/rendering functions sit in the middle of the file.
- Pointer input, shape, lasso, and eraser behavior are grouped before page controls.
- Toolbar placement, tooltips, and drag logic are grouped near the bottom.
- Event listeners and `initializeApp()` are at the end.

## Static And Local-First Model

- The app must remain deployable as static files.
- All primary functionality runs in the browser with no backend.
- Local persistence uses IndexedDB.
- Export/import, PNG ZIP generation, and PDF generation happen locally in browser JavaScript.
- PWA/offline behavior depends on HTTPS or localhost. On insecure LAN HTTP, the app can still run as a normal static page, but service worker and install behavior may be restricted.

## Persistence

- Historical IndexedDB database name: `booxDrawingDocuments`.
- Do not rename the database unless a migration is implemented.
- Current database version: `1`.
- Current object store: `documents`.
- Documents are listed by last opened date, most recent first.

## Rendering Model

Each page stores background settings separately from drawing data. Each page also has two drawing canvases:

- `underLayer`: Draw Behind/highlighter strokes.
- `layer`: normal ink and shapes.

Render and export order:

1. page background
2. `underLayer`
3. normal `layer`

Eraser and lasso operations should affect both drawing layers together. Backgrounds should not be baked into normal drawing data.

## Runtime State

Most app state lives in `state` in `src/app.js`, including active document, pages, tool selection, presets, history, selection state, toolbar visibility, and modal/menu state.

Device-specific global preferences and toolbar positions use local browser storage where appropriate.

Important global objects:

- `state`: active tool, active pointer, active page, presets, pending shape, lasso path, selection, tooltip state, app dialog state, documents, save queue, toolbar visibility, and global settings.
- `brush`: currently stores `eraseSize`.
- `shapeConfig`: shape type, stroke/fill settings, colors, and stroke width.

Important constants:

- `canvasPixelRatio = 1` for e-ink performance.
- `moveEventName` uses `pointerrawupdate` if available, otherwise `pointermove`.
- `historyLimit = 30`.
- `exportFormat = "dinodraw-document"`.
- `legacyExportFormat = "boox-drawing-document"`.

## Startup Sequence

`initializeApp()`:

- ensures visible version text and document title
- restores brush presets from local storage
- builds preset and shape color grids
- initializes dialog/control state
- sets toolbar orientations and restores saved toolbar positions
- updates fullscreen button state
- installs press-and-hold toolbar tooltips
- sizes the canvas and page layers
- refreshes the IndexedDB document list
- opens the Documents screen

`index.html` also installs early `error` and `unhandledrejection` handlers before loading `app.js`; these write startup/script failures into the document list and save-status areas so a blank screen is less likely.

## Markup And Styling Contracts

- JavaScript finds most UI elements by `data-*` attributes. When changing markup, keep matching selectors in `src/app.js` in sync.
- The canvas is fixed full-screen with `touch-action: none`.
- `html` and `body` are fixed-size, overflow-hidden, white-background surfaces.
- Toolbar visibility is controlled by `.app-shell.are-toolbars-hidden`.
- Toolbar orientation is controlled by `data-orientation="horizontal"` or `data-orientation="vertical"`.
- The Pages menu is `position: fixed` with the page dialog set to `overflow: visible` to avoid clipped overflow menus.

## Versioning

Current app version: `v0.8.74`.

Version bumps are required for code, UI, service-worker behavior, cacheable assets, or visible behavior changes. Update the version in `src/app.js`, `src/index.html`, and `src/service-worker.js` together. See `instructions.md` for the exact checklist.
