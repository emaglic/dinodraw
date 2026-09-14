# Performance Roadmap

This page tracks the large-document performance plan so work can continue across agent sessions. Update the status and notes as each chunk lands.

## Goals

- Keep 50+ page documents responsive on BOOX/e-ink browsers.
- Preserve local-first, static-app behavior with no backend.
- Preserve import/export compatibility and page render order: background, `underLayer`, normal `layer`.
- Favor small, regression-tested chunks over one large persistence rewrite.

## Current Status

- Done: lazy page hydration. Documents create lightweight records for all pages on open and decode only the active page immediately.
- Done: lazy Pages dialog thumbnails. Thumbnail backgrounds appear first; page rasters hydrate/render through visible/idle scheduling.
- Done: canvas-preservation fix after lazy hydration. History snapshots must not reset canvas dimensions and wipe committed strokes.
- Done: large-document debug harness and opt-in performance logging.
- Done: safe split page autosave is enabled with IndexedDB version `5`, page-record verification, and legacy full-document fallback.
- Done: PNG/PDF export progress updates and browser-yielding between pages.
- Done: in-memory page thumbnail cache with dirty/background/document invalidation.

## Chunk 0: Commit Current Work

Status: done.

Scope:

- Commit lazy page hydration, lazy thumbnails, version `v0.8.136`, and wiki updates before deeper storage work.

Regression checks:

- Draw several strokes on one page; later strokes must not erase earlier strokes.
- Switch pages and return; ink must persist.
- Open the Pages dialog; thumbnails should render progressively.
- Export/import smoke tests should still preserve page count and visible ink.

## Chunk 1: Large-Document Harness

Status: done.

Goal: make 50+ page performance repeatable instead of relying on hand-created documents.

Possible implementation:

- Add dev-only console helpers or debug functions, not visible product UI.
- Generate a document with many pages, backgrounds, and simple marks.
- Add timing logs for document open, page switch, Pages dialog open, autosave, JSON export, PNG export, and PDF export.

Implemented console helpers:

- On localhost, use `window.dinoDrawDebug` from the browser console.
- On a non-localhost debug session, open the app with `?dinodrawDebug=1` once to persist the console helper flag.
- Use `dinoDrawDebug.enablePerformanceLogging()` to log timings.
- Use `await dinoDrawDebug.createLargeTestDocument({ pageCount: 50 })` to generate and open a test document.
- Use `dinoDrawDebug.getPerformanceMetrics()` to inspect collected timings.
- Use `dinoDrawDebug.clearPerformanceMetrics()` to reset the in-memory metric list.

Regression checks:

- Generate a 50-page document.
- Open, close, and reopen it.
- Draw on multiple pages.
- Export/import and verify page count/content manually.

## Chunk 2: Safe Split Page Autosave

Status: done.

Goal: restore dirty-page-only autosave without risking existing local documents.

Context:

- The database already has `documents`, `documentPages`, and compatibility helpers.
- The earlier split-storage path was disabled in `v0.8.134` by setting `splitPageStorageEnabled = false`.
- Re-enabling this should be treated as the highest-risk performance chunk.

Possible implementation:

- Keep legacy embedded-page read/write fallback.
- Re-enable split storage behind integrity checks.
- Save document metadata plus dirty pages only.
- Verify page order/count against page records after split saves.
- Fall back to legacy full-document save on split-storage failure.
- Avoid deleting recoverable embedded page data until split records are known-good, if practical.

Implemented notes:

- IndexedDB version `5` ensures the `documentPages` store and `documentId` index exist even for browsers that reached version `4` while split storage was disabled.
- Split full saves and autosaves verify that every metadata `pageId` has a matching page record before accepting split metadata.
- Dirty page flags are cleared only after split page writes, verification, and metadata save succeed.
- Split save failures fall back to legacy embedded-page document records.
- Split reads preserve expected page count/order with blank placeholders if a page record is missing.

Regression checks:

- Existing legacy documents open and save.
- New documents save and reopen.
- A 50-page document editing one page should not re-encode every clean page.
- Insert/delete pages and reopen.
- Import/export remains portable full-document JSON.
- Missing or corrupt page records degrade gracefully.

## Chunk 3: Export Responsiveness

Status: done.

Goal: keep PNG ZIP and PDF export from freezing the UI on large documents.

Possible implementation:

- Yield between pages with a small frame/idle helper.
- Update save status with progress, such as `Exporting PDF 12/50...`.
- Keep output format unchanged.
- Prefer saved raster strings for unhydrated pages instead of forcing all page objects to remain hydrated.

Implemented notes:

- PNG ZIP and PDF export update save status with per-page progress.
- PNG ZIP and PDF export yield back to the browser between pages.
- Temporary flattened canvases are released after their page bytes are captured.
- Final ZIP/PDF assembly still happens locally in browser JavaScript and may have one remaining synchronous assembly step.

Regression checks:

- PNG ZIP contains `page-01.png`, `page-02.png`, etc.
- PDF page count matches document page count.
- Background, `underLayer`, and normal layer order are preserved.
- Cancel-before-work behavior still works when the save picker is cancelled.

## Chunk 4: Thumbnail Cache

Status: done.

Goal: avoid regenerating page thumbnails on every Pages dialog open.

Possible implementation:

- Start with an in-memory per-page thumbnail cache.
- Invalidate a page thumbnail when that page becomes dirty, its background changes, or page dimensions change.
- Keep lazy observer/idle scheduling.
- Defer persistent thumbnail storage until memory-only caching proves useful.

Implemented notes:

- Page thumbnails are cached in memory by page id plus background, dimensions, and dirty version.
- Cached thumbnails are reused immediately when reopening the Pages dialog.
- `markPageDirty()` invalidates the page thumbnail cache entry, covering strokes, shapes, image commits, lasso commits, new pages, and background changes.
- Document loads clear the thumbnail cache, and deleting a page removes its cached thumbnail.
- Undo/redo now mark the restored page dirty so split-page autosave and thumbnail invalidation both see the restored pixels.

Regression checks:

- First Pages dialog open renders lazily.
- Second open reuses cached thumbnails.
- Drawing on a page refreshes that page's thumbnail.
- Page insert/delete keeps thumbnails matched to the correct pages.

## Chunk 5: Page Memory Eviction

Status: planned.

Goal: prevent long sessions from keeping every hydrated page canvas in memory.

Possible implementation:

- Track page access time.
- Keep active page, nearby pages, dirty pages, and pages with meaningful undo history hydrated.
- Evict only clean, inactive pages after their raster strings have been saved or refreshed.
- Keep the first version conservative: never evict dirty pages or pages with active undo history.

Regression checks:

- Draw on page 1, visit many pages, return to page 1; ink remains.
- Undo still works on recently edited pages.
- Export includes evicted pages.
- Thumbnails can hydrate evicted pages again.

## Later Option: Blob-Based Page Storage

Status: future consideration.

Storing page images as `Blob`s instead of base64 data URLs may reduce memory/storage overhead. Treat this as a separate storage migration after split page autosave is stable.
