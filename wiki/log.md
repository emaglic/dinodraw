# DinoDraw Wiki Log

Append entries chronologically. Use this file for wiki maintenance, durable conclusions from temp sources, design decisions, and notable project-memory updates.

## [2026-09-04] maintenance | Scaffolded Project Wiki

- Created the initial DinoDraw wiki structure.
- Split durable project context from `instructions.md` into product, architecture, decision, feature, testing, and issue pages.
- Established `temp/` as an ignored scratch inbox: agents should ingest only durable conclusions, not raw temporary files by default.

## [2026-09-04] maintenance | Swept `src/` For Codebase Memory

- Read `src/app.js`, `src/index.html`, `src/styles.css`, `src/service-worker.js`, and `src/manifest.webmanifest`.
- Added a source map and function-region map for the single-file JavaScript app.
- Documented actual runtime details for document records, save queue, render pipeline, history snapshots, lasso/shape behavior, toolbar storage keys, tooltip mechanics, export formats, and service-worker strategy.

## [2026-09-04] maintenance | Removed Stale `src/src.zip` Note

- User confirmed `src/src.zip` was an unneeded remnant and deleted it.
- Removed active wiki warnings about `src/src.zip`.
