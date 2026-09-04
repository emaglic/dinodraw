# DinoDraw Wiki Index

This wiki is the durable project memory for Dino Draw. It captures product behavior, architecture, decisions, feature notes, testing practices, and durable takeaways from temporary screenshots or notes.

Agents should read this page first, then only the pages relevant to the task.

## Start Here

- [Product](product.md): user, device, design principles, workflows, and product vocabulary.
- [Architecture](architecture.md): source layout, static app model, persistence, rendering model, and versioning.
- [Decisions](decisions.md): durable project decisions and tradeoffs.
- [Testing](testing.md): validation commands, BOOX-sensitive checks, and review checklist.
- [Known Issues](known-issues.md): open risks, recurring pitfalls, and things to watch.
- [Log](log.md): chronological wiki maintenance and durable project-memory entries.

## Feature Pages

- [Drawing Engine](features/drawing-engine.md): canvas layers, brush presets, eraser, lasso, shapes, input, and performance.
- [Documents](features/documents.md): landing page, document list, IndexedDB records, page manager, dialogs, and local save behavior.
- [Toolbars](features/toolbars.md): draggable toolbars, hide/show tab, orientations, tooltips, and reset behavior.
- [Export And Import](features/export-import.md): DinoDraw JSON, legacy import compatibility, PNG ZIP, PDF, and filenames.
- [Offline PWA](features/offline-pwa.md): manifest, service worker, cache versioning, HTTPS/local requirements, and installed behavior.

## Source Map

- `src/index.html`: static markup, dialogs, toolbar shells, version text, and cache-busting query strings.
- `src/styles.css`: e-ink-friendly visual system, responsive layout, toolbars, dialogs, and document UI.
- `src/app.js`: application state, IndexedDB, drawing, pages, import/export, dialogs, toolbar dragging, and initialization.
- `src/service-worker.js`: offline cache installation, fetch handling, and cache cleanup.
- `src/manifest.webmanifest`: PWA metadata and display mode preferences.
- `src/icon.svg`: app/logo asset.

## `src/app.js` Regions

- Lines 1-235: DOM handles, global state, configuration constants, colors, default presets, storage keys, and format identifiers.
- Lines 238-540: IDs, IndexedDB helpers, app dialogs, filenames, document settings, document serialization.
- Lines 543-879: image/blob helpers, hand-rolled ZIP generation, hand-rolled PDF generation, downloads.
- Lines 882-1564: saved-page loading, document screen, document CRUD, save queue, export/import.
- Lines 1567-1988: page objects, history snapshots, presets, version badge, backgrounds, render pipeline, shape/lasso overlays.
- Lines 1992-2390: action toolbar visibility, toolbar hide/show tab, undo/redo, fullscreen, eraser preview, canvas resize.
- Lines 2391-3150: tool selection, pointer/stylus handling, drawing, eraser, shapes, lasso selection, canvas action routing.
- Lines 3152-3593: page controls, Pages modal, background controls, eraser/preset/shape settings.
- Lines 3595-4543: settings dialogs, press-and-hold tooltips, toolbar positioning, toolbar dragging, edge-pinned hide/show tab dragging.
- Lines 4554-4882: button interactions, initialization, event wiring, resize handling, fullscreen change handling.

## Wiki Maintenance

- Only ingest durable information from `temp/`; do not blindly archive scratch files.
- When a temp source changes project direction, feature behavior, or implementation constraints, update the relevant wiki page and append a short entry to `log.md`.
- Keep `instructions.md` short. Put subsystem detail in the wiki.
- Prefer precise source links and code references over broad restatements.
