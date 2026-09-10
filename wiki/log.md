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

## [2026-09-05] feature | Added Toolbar Visibility Settings

- Added Settings checkboxes for Main toolbar, Brush presets, Undo and redo, and Fullscreen toolbar visibility.
- Kept Main toolbar permanently enabled because it provides Settings access.
- Changed the edge show/hide tab to affect only enabled regular toolbars.
- Kept temporary shape, image, and lasso action toolbars outside the setting and controlled by their active workflow.

## [2026-09-05] polish | Moved Toolbar Position Reset

- Moved the toolbar position reset button into the Settings Toolbars section.
- Renamed the button to `Reset Toolbar Positions` to clarify it does not change toolbar visibility settings.

## [2026-09-05] polish | Clarified Touch Drawing Setting

- Added short helper text under the Touch drawing checkbox explaining that pen users may turn it off to prevent palm input from drawing.

## [2026-09-08] perf | Reduced BOOX Draw-Behind Repaints

- Changed stroke movement back to `pointermove` because raw pointer updates can overwhelm e-ink browser rendering after device/browser updates.
- Cached canvas bounds during active strokes to avoid repeated layout reads for coalesced pen events.
- Changed live Draw Behind preview from full-page recomposition per segment to dirty-rectangle repainting in final render order.
- Added a small stroke movement threshold to skip pointer samples that do not visibly change the line.

## [2026-09-08] perf | Reduced Continuous Stroke Backlog

- Changed stroke movement to use only the latest coalesced pointer event, avoiding an increasing backlog during long continuous strokes.
- Cached the active page viewport transform during strokes so fixed-page pan/zoom math is not recalculated for every pen sample.
- Limited pre-stroke snapshot creation to touch strokes, where it is needed for two-finger pan cancellation, instead of cloning page layers for every pen stroke.

## [2026-09-08] perf | Made Live Lasso Drawing Incremental

- Changed lasso movement to use only the latest coalesced pointer event.
- Changed live lasso preview to draw only the newest segment instead of calling `renderWorkspace()` and redrawing the full accumulated path on every move.
- Reused cached canvas bounds and viewport transforms during lasso and shape gestures.
- Added light timestamp throttling for live stroke and lasso movement, with final-point catch-up on gesture end.

## [2026-09-08] perf | Added Live Drawing Overlay

- Added a transparent `#live-canvas` overlay for pen-down brush and lasso feedback.
- Changed non-eraser brush strokes to draw live segments only on the overlay, then commit the complete stroke to the document layer on pointer up.
- Restored dashed live lasso feedback with incremental dash-offset tracking instead of redrawing the whole lasso path per move.

## [2026-09-08] fix | Baked Live Overlay Strokes On Pen Up

- Changed live brush commit to draw the transparent overlay bitmap back into the target page layer using the inverse page viewport transform.
- Removed retained live stroke point accumulation from the commit path so long strokes keep constant-size live state.

## [2026-09-08] fix | Persisted Live Overlay Brush Strokes

- Changed brush drawing so each accepted non-eraser segment writes to the target page layer during movement and also previews on `#live-canvas`.
- Removed the overlay bitmap bake as the persistence mechanism; pointer up now clears the overlay and recomposes from the already-updated page layer.

## [2026-09-08] fix | Stabilized Permanent Stroke Writes

- Changed permanent brush and eraser segment writes to save the target page context, reset it to identity page-pixel coordinates, then restore it after drawing.
- Reset line dash state for stroke segments and preserved the live overlay transform with save/restore so dashed lasso state cannot bleed into brush commits.
- Kept live overlay feedback separate from page-layer persistence so pointer-up clearing only removes the temporary preview.

## [2026-09-08] fix | Replayed Live Brush Strokes On Commit

- Changed non-eraser brush movement to keep page-space stroke points while drawing only the low-latency live overlay.
- Replayed the retained stroke path into the permanent page layer on pointer up, using identity page-layer coordinates.
- Preserved the eraser's immediate page-layer writes because erasing needs committed pixels to disappear during the gesture.

## [2026-09-08] fix | Hid Idle Live Canvas Overlay

- Changed `#live-canvas` to be hidden by default and shown only while live brush or lasso feedback is actively drawing.
- This avoids relying on transparent canvas compositing while idle, which can hide the committed drawing canvas on BOOX/e-ink browser firmware.
- This also restores visibility for pending images and their handles, which are drawn on the main canvas underneath the live overlay.

## [2026-09-08] fix | Moved Live Feedback Off Overlay

- Changed live brush and lasso feedback to draw directly on the already-rendered main canvas instead of displaying `#live-canvas`.
- Kept the permanent stroke replay on pointer up so the main canvas can be recomposed from page layers and remove any temporary live-only pixels.
- Left `#live-canvas` hidden so BOOX/e-ink browsers cannot cover the existing page while a transparent overlay is active.

## [2026-09-08] perf | Reduced Resize Interaction Repaints

- Added heavier pointer throttling for shape, pending-image, and lasso-selection transform interactions.
- Applied the final pointer position on pointer up so throttled movement stays accurate after the drag ends.
- Skipped bitmap drawing for pending images and lasso selections while resize handles are active, drawing only the outline and handle until the resize finishes.

## [2026-09-08] perf | Added Lightweight Resize Previews

- Added downsampled resize preview canvases for pending images and lasso selections when a resize interaction starts.
- Drew the lightweight preview during resize so selected content remains visible while avoiding repeated full-resolution bitmap resampling.
- Kept final pointer-up rendering on the original full-resolution image or selection canvases.

## [2026-09-09] feature | Added Document Folders

- Added nested document folders to the Documents landing screen from `temp/landing-page.md`.
- Bumped IndexedDB to version `2` and added a `folders` object store while keeping existing documents in Root through missing-`folderId` compatibility.
- Documented that `folderId` is local library organization and is stripped from DinoDraw JSON exports.

## [2026-09-09] polish | Refined Folder Landing Page

- Changed the Documents heading to show the current folder name and added a separate parent-folder back arrow.
- Renamed folder-scoped actions to New Drawing, New Folder, and Import Doc.
- Added folder/document row icons and pointer drag-to-move support for dropping rows onto folders, breadcrumbs, Root, or the parent target.

## [2026-09-09] fix | Restored Document List Scrolling

- Changed library drag-to-move so it activates only after a short press-and-hold and cancels on early swipe movement.
- Restored normal vertical scrolling for document rows.
- Changed the landing header to show a large `Documents` heading with the smaller current folder name beside the back arrow, and removed the folder helper text.

## [2026-09-09] polish | Aligned Folder Heading Row

- Changed the current folder label to a smaller heading element.
- Switched the location row to flex so the back arrow and folder name stay on the same line.

## [2026-09-09] fix | Stabilized Vertical Library Dragging

- Changed library row gestures to capture the pointer immediately and manually scroll the document panel when movement starts before the long-press delay.
- Kept straight vertical movement as drag movement after the long-press delay, avoiding browser vertical-pan cancellation.

## [2026-09-10] feature | Added Lasso Selection Copy And Paste

- Added a Copy selection button to the lasso action toolbar.
- Added an in-app selection clipboard that preserves separate Draw Behind and normal-layer selection canvases.
- Added a lasso-tool canvas long-press/context menu for Paste Selection at the chosen page point.
- Pasted selections remain floating until Done is pressed; deleting an uncommitted paste discards it without adding a history entry.

## [2026-09-10] polish | Added Lasso Copy Feedback

- Made the lasso Copy selection button briefly invert after a successful copy so the tap has visible confirmation.
