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

## [2026-09-04] maintenance | Added `output/` Scratch Convention

- User created `output/` as ignored agent-generated scratch output for human-consumable artifacts.
- Documented that agents should write to `output/` only on explicit request, and should copy durable findings from generated artifacts back into the wiki when appropriate.

## [2026-09-04] feature | Added Device-Level Input Preferences

- Added a global localStorage settings pattern for device-specific preferences.
- Documented Touch drawing as a global setting that defaults off for pen-first palm rejection and can be enabled per device.
- Documented hardware/navigation key page turning support where the browser exposes volume or page keys.
- Recorded that the toolbar `+` inserts after the active page and activates the inserted page.

## [2026-09-04] fix | Broadened Pen Button Eraser Mapping

- Added pen barrel/auxiliary button detection for temporary erasing, aimed at Samsung S Pen side-button browser events.
- Updated active stroke routing to re-check temporary eraser state during pointer movement so a pen button exposed after contact can switch the stroke into erasing.

## [2026-09-04] feature | Added Add Page Placement Dialog

- Changed the main toolbar `+` to open a placement dialog instead of inserting immediately.
- Placement options are Insert Before, Insert After, and Add to End, and all options switch to the inserted page.

## [2026-09-04] polish | Refined Add Page Dialog

- Made Add Page placement buttons stack vertically in a narrower modal.
- Added a current-page readout beneath the Add Page title.

## [2026-09-04] feature | Added In-App Instructions

- Added an Instructions button near the top of the Documents screen.
- Added a full-screen offline user guide covering documents, drawing, pages, device settings, files, and toolbars.

## [2026-09-04] polish | Moved Instructions Above Documents

- Moved the Instructions button below the Dino Draw logo/version and above the Documents heading for clearer app-level placement.

## [2026-09-04] polish | Added Dismissible Intro Card

- Replaced the standalone Documents-screen Instructions button with a textured "What is Dino Draw?" intro card below the logo/version.
- Added a close button that persists the intro-card dismissal in global localStorage settings.
- Added an Instructions button to the Settings modal.

## [2026-09-04] fix | Added Guide Button Cache Compatibility

- BOOX testing surfaced a script error for a stale `openGuideButton` reference.
- Restored a singular guide-button compatibility handle and made guide opening tolerate missing/stale dialog markup.

## [2026-09-04] polish | Made Intro Dismissal Temporary

- Changed the Documents intro-card close button to hide the card only until page reload instead of persisting dismissal.
- Increased intro-card spacing and right-aligned its Instructions button.

## [2026-09-04] polish | Refined Intro Card Header

- Moved the intro-card close button into a heading row so the description and Instructions button can use the full card width.

## [2026-09-04] polish | Increased Intro Card Texture Contrast

- Darkened and widened the intro-card diagonal texture so it remains visible on BOOX/e-ink rendering.

## [2026-09-04] decision | Revisit Material Symbols Icons

- Recorded a future direction to replace hand-built/Unicode toolbar icons with Google Material Symbols.
- Noted that the user can provide icon names from the Google icons page for agents to map into controls.
- Captured the preference for a local/self-hosted package so Dino Draw remains offline-friendly.

## [2026-09-04] polish | Shortened Intro Copy And Defaulted Touch On

- Shortened the Documents intro card to a single sentence.
- Changed Touch drawing to default on for fresh devices while preserving saved per-device choices.
- Updated in-app instructions to recommend turning Touch drawing off on pen-first tablets.

## [2026-09-05] fix | Preserved Page Pixels Across Orientation Changes

- Changed viewport resize handling so page backing canvases grow when needed but do not shrink to the rotated viewport.
- Preserved existing page pixels at 1:1 during canvas growth instead of scaling them into the new orientation.
- Updated snapshot restore so undo/redo and floating lasso cancellation keep the largest relevant page dimensions.

## [2026-09-05] feature | Added Fixed-Page Viewport Panning

- Changed new pages to keep a native page size set at creation time instead of adopting each viewport resize.
- Rendered fixed-size pages into the visible viewport with centering on axes where the viewport is larger than the page.
- Added page-coordinate pointer mapping so drawing, erasing, shapes, images, lasso selection, and overlays align with centered/panned pages.
- Added two-finger touch panning and wheel/trackpad panning for pages larger than the current viewport.
- Kept PNG/PDF export and page thumbnails tied to native page dimensions rather than device orientation.

## [2026-09-05] polish | Added Viewport Background Texture

- Added a light dotted background behind fixed-size pages so empty viewport space is visually distinct from the document.
- Kept the dotted texture outside page layers, thumbnails, PNG exports, and PDF exports.

## [2026-09-05] polish | Switched Off-Page Space To Black

- Replaced the subtle dotted viewport texture with a solid black off-page background for stronger contrast.
- Kept the black background as viewport chrome only, outside page layers and exports.

## [2026-09-05] feature | Added Pinch Zoom For Fixed Pages

- Added per-page runtime zoom state to the fixed-page viewport transform.
- Added two-finger pinch zoom around the gesture midpoint while preserving two-finger drag panning.
- Limited zoom-out so the native page height can shrink to fit the current viewport height, but no farther.
- Kept zoom as view state only, with exports and thumbnails still using native page dimensions.

## [2026-09-05] polish | Added Responsive Toolbar Anchoring

- Added edge-aware anchor metadata to regular draggable toolbar position records.
- Preserved right/left/top/bottom distances for toolbars placed near viewport edges across orientation changes.
- Preserved center ratios for toolbars placed away from edges while still clamping all toolbar positions on screen.
- Kept legacy `{ left, top, orientation }` saved toolbar positions restorable and migrated on next save.
