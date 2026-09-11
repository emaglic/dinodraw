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

## [2026-09-10] fix | Selected Lasso After Paste

- Changed selection paste to activate the lasso tool after creating the floating pasted selection so it can be moved, resized, rotated, committed, or deleted immediately.

## [2026-09-10] feature | Vendored Material Symbols

- Added a self-hosted Material Symbols Outlined `woff2` font under `src/vendor/material-symbols/`.
- Added a `.material-symbols-outlined` CSS class for future icon replacements.
- Added the local font to the service-worker precache so Material Symbols remain available offline.

## [2026-09-10] polish | Replaced Initial Toolbar Icons

- Replaced the initial requested toolbar/action icons with local Material Symbols ligatures from `temp/icon-replacements.md`.
- Changed the Documents button label and tooltip to Home while preserving its existing behavior.
- Added fullscreen enter/exit icon switching with `fullscreen` and `fullscreen_exit`.

## [2026-09-10] polish | Replaced More Toolbar And Document Icons

- Replaced toolbar drag handles, draw/erase/shape tool icons, toolbar visibility arrows, modal close buttons, and document-list folder/document icons with local Material Symbols.
- Kept existing button and toolbar control dimensions while changing the icon glyphs.

## [2026-09-10] polish | Replaced Folder Back Icon

- Replaced the landing-page previous-folder back button glyph with the local Material Symbols `arrow_back` icon.

## [2026-09-10] feature | Added Toolbar Dock Preview

- Added a semi-transparent edge preview while regular toolbars are dragged near a screen edge.
- Snapped toolbars to the previewed edge with 8px padding on pointer release.
- Kept docked orientation horizontal for top/bottom edges and vertical for left/right edges.

## [2026-09-10] polish | Tuned Toolbar Docking

- Made toolbar docking preview bands thicker and darker for better e-ink visibility.
- Removed automatic orientation changes during ordinary edge-adjacent dragging.
- Kept orientation changes tied to releasing the toolbar on a docking preview.

## [2026-09-10] feature | Stored Toolbar Positions Per Document

- Moved regular toolbar position records from global localStorage into document `settings.toolbarPositions`.
- Kept new documents starting at default toolbar positions.
- Preserved the hide/show tab as a separate edge-pinned global localStorage position.

## [2026-09-10] polish | Made Shape Settings Double-Tap

- Changed the main toolbar Shape button so a single tap selects shape drawing with the current document-level `shapeConfig`.
- Kept shape settings available from a double tap on the Shape button and from the pending shape action toolbar.
- Bumped the app/cache version to `v0.8.102`.

## [2026-09-10] feature | Prevented Regular Toolbar Overlap On Drop

- Added drop-time collision resolution for the four regular draggable toolbars.
- Kept dragging permissive, then resolves visible toolbar overlaps after release.
- Resolution first tries to nudge the dragged toolbar within the viewport, then moves overlapping neighboring toolbars when the dragged toolbar has no clean on-screen position.
- Bumped `src/index.html` and `src/service-worker.js` cache-busting references to `v0.8.103` so browsers load the updated drag behavior.
- Added a dock-lane collision pass and bumped to `v0.8.104` so overlapping toolbars on the same docked edge slide along that edge instead of moving out of the dock.
- Made active dock previews sticky while the drag point remains inside the active edge lane and bumped to `v0.8.105`.
- Raised toolbar stacking above the version badge and bumped to `v0.8.106`.

## [2026-09-10] polish | Raised Touch Pan Activation Threshold

- Changed two-finger touch pan/zoom to start as a pending gesture and activate only after center movement or pinch-distance movement crosses a small threshold.
- Bumped the app/cache version to `v0.8.107`.

## [2026-09-10] feature | Added Document UUID Import Handling

- Added stable document `uuid` handling to local records and exported DinoDraw JSON.
- Added startup migration for existing records with missing UUIDs without changing document edited times.
- Added same-UUID import detection with an overwrite-or-duplicate dialog that compares `updatedAt` values and shows both edited timestamps.
- Kept new/duplicate imports in the currently viewed folder while overwrites update the existing local document in place.
- Bumped the app/cache version to `v0.8.108`.

## [2026-09-10] feature | Added Save As Export Picker

- Added `showSaveFilePicker()` support for DinoDraw JSON, PNG ZIP, and PDF exports when the browser supports it in a secure context.
- Kept automatic download fallback when the picker is unavailable or blocked before opening.
- Made user cancellation of the native picker abort export instead of falling back to download.
- Bumped the app/cache version to `v0.8.109`.

## [2026-09-10] polish | Refined Documents Landing Help And Navigation

- Persisted Documents intro-card dismissal in global localStorage settings.
- Added a compact Help icon button at the top-left of the Documents panel after intro dismissal.
- Added a horizontal rule under the Documents heading.
- Changed the user-facing top-level folder label from `Root` to `My Documents`.
- Restyled folder breadcrumbs as underlined text links with `keyboard_arrow_right` separators.
- Hid the parent-folder back button while viewing the top-level folder.
- Bumped the app/cache version to `v0.8.110`.

## [2026-09-10] polish | Anchored Documents Landing Actions

- Moved New Drawing, New Folder, and Import Doc to the bottom of the Documents panel.
- Changed the Documents panel so the brand, intro/help, folder header, breadcrumbs, and bottom action buttons remain visible while the document list scrolls.
- Added a layout sync that caps the document list height based on the currently visible panel chrome and viewport.
- Bumped the app/cache version to `v0.8.111`.

## [2026-09-10] fix | Repositioned Documents Close Button

- Moved the Documents close X out of the header and into the modal panel shell so it anchors to the top-right edge directly across from the Help button.
- Bumped the app/cache version to `v0.8.112`.

## [2026-09-11] feature | Added Grid Shape

- Added Grid as a shape type with document-level default dimensions of 3 rows by 3 columns.
- Added row and column number fields to the temporary shape action toolbar only while a pending grid shape is selected.
- Rendered grid fill as the cell background and shape border settings as the outer border plus internal grid lines.
- Bumped the app/cache version to `v0.8.113`.

## [2026-09-11] polish | Improved Grid Shape Controls

- Moved grid row and column controls to their own second row in the temporary shape action toolbar.
- Added explicit minus and plus buttons for rows and columns so BOOX users do not depend on hidden native number input steppers.
- Made Enter blur the active grid number field, and made shape commit/delete/canvas pointer starts blur grid inputs to help dismiss the virtual keyboard.
- Bumped the app/cache version to `v0.8.114`.

## [2026-09-11] polish | Refined Shape Action Toolbar

- Made the temporary shape action toolbar visible as soon as the shape tool is selected, with pending-shape-only controls disabled until a shape exists.
- Added a temporary drag handle for the shape action toolbar; its position is not saved and resets when the shape tool is reselected.
- Made the aspect-ratio lock apply to initial non-line shape creation drags as well as later shape resizing.
- Bumped the app/cache version to `v0.8.115`.

## [2026-09-11] polish | Unified Temporary Toolbar Drag Handles

- Changed the shape action toolbar drag handle into a full-height side column instead of a first-row button.
- Added matching temporary drag handles to image-placement and lasso-selection action toolbars.
- Kept temporary action toolbar positions unsaved, with image and lasso positions reset when fresh workflows start.
- Bumped the app/cache version to `v0.8.116`.

## [2026-09-11] fix | Corrected Temporary Toolbar Layout And Dragging

- Changed temporary action toolbar layout to a horizontal flex shell with a full-height left drag column and right-side action content.
- Kept image and lasso action controls on one horizontal row after adding their drag handles.
- Added pointer capture to temporary toolbar drag handles so dragging continues after the pointer leaves the handle.
- Hid the shape toolbar when image placement starts by returning the active tool to Draw before showing image actions.
- Bumped the app/cache version to `v0.8.117`.

## [2026-09-11] polish | Tightened Grid Steppers

- Matched grid row/column number input height to the adjacent minus and plus buttons.
- Joined the stepper borders so each row/column control reads as a single grouped action.
- Bumped the app/cache version to `v0.8.118`.

## [2026-09-11] polish | Simplified Grid Stepper Containers

- Removed the outer border around each grid row/column stepper container.
- Added a simple vertical divider between the Rows and Cols controls.
- Bumped the app/cache version to `v0.8.119`.

## [2026-09-11] feature | Added Zoom Toolbar

- Added a regular draggable Zoom toolbar with zoom-out, percentage entry, and zoom-in controls.
- Added a global Settings checkbox to show or hide the Zoom toolbar with the other optional regular toolbars.
- Saved Zoom toolbar position per document and included it in reset, resize reclamping, and collision handling.
- Bumped the app/cache version to `v0.8.120`.

## [2026-09-11] fix | Hardened Zoom Toolbar Cache Transition

- Made the Zoom toolbar start hidden in raw HTML so older cached JavaScript cannot leave it visible but inert.
- Made current JavaScript reveal the Zoom toolbar only after it has loaded and applied global toolbar visibility settings.
- Bumped the app/cache version to `v0.8.121`.

## [2026-09-11] polish | Compact Zoom Toolbar

- Replaced the inline Zoom toolbar number field with a compact percentage button for better vertical toolbar layout.
- Added a Zoom dialog opened from the percentage button with both range-slider and numeric percent controls.
- Kept the slider live and the numeric field committed on Enter, change, or blur.
- Bumped the app/cache version to `v0.8.122`.

## [2026-09-11] polish | Simplified Zoom Percent Display

- Restyled the Zoom toolbar percentage control as plain clickable text, matching the main toolbar page indicator style.
- Removed the visible border/background treatment so vertical zoom toolbar width is driven by the icon buttons.
- Bumped the app/cache version to `v0.8.123`.

## [2026-09-11] fix | Strengthened BOOX Cache Refresh

- Changed service-worker network fetches to use `cache: "reload"` so current workers avoid stale browser HTTP-cache responses.
- Made service-worker registration actively request updates, skip waiting workers, and reload once when a new worker controls the page.
- Added `refresh.html` as a manual recovery page that clears Dino Draw service workers and `dinodraw-*` caches before reopening the app.
- Bumped the app/cache version to `v0.8.124`.

## [2026-09-11] polish | Reset Default Toolbar Layout Per Document

- Changed default toolbar placement to stack undo/main/zoom on the left and fullscreen/brush presets on the right.
- Made the main, zoom, and brush preset defaults vertical, while undo/redo and fullscreen remain horizontal.
- Moved optional toolbar visibility from global settings into document settings so each new document starts with the default enabled toolbar set.
- Kept brush preset colors, sizes, opacity, and Draw Behind settings global rather than serializing them into each document.
- Bumped the app/cache version to `v0.8.125`.
- Made regular toolbar drag handles swap dimensions in vertical orientation and rotate the drag indicator icon.
- Bumped the app/cache version to `v0.8.126`.
- Centered regular toolbar drag handle icons within their bordered handle boxes.
- Bumped the app/cache version to `v0.8.127`.
- Matched the brush preset toolbar control size to the other regular single-row toolbars.
- Bumped the app/cache version to `v0.8.128`.
- Made live Draw Behind strokes repaint their bounded stroke region in final layer order so normal ink stays visually above them while drawing.
- Bumped the app/cache version to `v0.8.129`.

## [2026-09-11] perf | Split Document Page Storage

- Bumped IndexedDB to version `3` and added a `documentPages` object store for per-page raster data.
- Changed autosave to write document metadata plus only dirty page records instead of re-encoding every page on each save.
- Kept DinoDraw JSON export/import, PNG ZIP, and PDF export on the portable full-document record shape by reassembling pages at export time and splitting them again on import.
- Preserved old embedded-page document records through lazy read compatibility and split them into page records on the next save.
- Bumped the app/cache version to `v0.8.130`.
- Bumped IndexedDB to version `4` and made the `documentPages` upgrade path repair the page index if needed.
- Replaced page-record lookup with a cursor fallback for browsers that do not support `IDBIndex.getAll()`.
- Bumped the app/cache version to `v0.8.131`.
- Added legacy embedded-document save fallback for new/imported documents and autosave if split page storage fails on a browser.
- Bumped the app/cache version to `v0.8.132`.
- Added a cursor fallback for document/folder store reads so the landing list works on browsers without `IDBObjectStore.getAll()`.
- Bumped the app/cache version to `v0.8.133`.
- Disabled split-page storage by default and restored the legacy full-document save path while keeping database version `4` compatible with tablets that already attempted the upgrade.
- Bumped the app/cache version to `v0.8.134`.
