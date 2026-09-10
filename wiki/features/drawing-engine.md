# Drawing Engine

The drawing engine lives mostly in `src/app.js`, with canvas markup in `src/index.html` and visual styling in `src/styles.css`.

## Canvas Performance

- Canvas pixel ratio is intentionally kept at `1` for e-ink performance.
- The main canvas context uses performance-oriented options where supported, including `alpha: false` and `desynchronized: true`.
- Input uses `pointermove`; `pointerrawupdate` can deliver too many events for e-ink browser rendering after BOOX/browser updates.
- Drawing latency on BOOX is more important than decorative rendering.
- The main visible canvas is a composited display surface. Per-page drawing data lives on offscreen page canvases.
- Live pen feedback is drawn directly onto the already-rendered main canvas. A separate transparent canvas remains hidden because some e-ink browser/firmware combinations can composite transparent canvases as opaque blank layers. Brush strokes keep their accepted page-space points while moving, then replay one permanent stroke to the target page layer on pointer up.

## Page Model

Each page has:

- a background setting
- `underLayer` canvas for Draw Behind/highlighter strokes
- `layer` canvas for normal ink and shapes
- undo/redo history

Render order:

1. background
2. `underLayer`
3. `layer`

New pages should default to the active/previous page background.

`createPage()` builds both layer canvases at a fixed native page size, usually the visible canvas size at the moment the document/page is created. `resizeCanvas()` resizes only the visible viewport canvas. Page layers keep their native dimensions, are rendered into the viewport with a page offset, and can be panned when the viewport is smaller than the page.

## Render Pipeline

- `drawBackground()` always fills white first.
- `renderPage()` draws a black viewport background outside the page, applies the active page viewport transform, draws the active page background at native page size, then draws `underLayer`, then draws `layer`.
- `renderWorkspace()` draws the committed page plus temporary overlays for selection, pending shape, and lasso path.
- `drawPageThumbnail()` and export flattening use the same background, `underLayer`, `layer` order.
- Draw Behind strokes preview on the main visible canvas while the pointer is down, then replay one committed stroke to `underLayer` with an identity page-layer transform. The page is recomposed once when the stroke ends. Avoid full-page `renderPage()` calls for every pen segment.

## Viewport, Panning, And Zoom

- Page coordinates are native document coordinates; viewport coordinates are mapped through `getPageViewportTransform()`.
- When the viewport is wider or taller than the native page, the page is centered on that axis.
- When the native page is larger than the viewport at the current zoom, runtime `panX`/`panY` offsets reveal clipped regions without changing page resolution.
- Two-finger touch drag pans the page and two-finger pinch zooms around the gesture midpoint after a small activation movement, reducing accidental palm/wrist-triggered navigation. Wheel/trackpad scrolling pans for desktop use and testing, and browser Ctrl+wheel pinch gestures zoom.
- Zoom can go out until the native page height fits the viewport height, capped at 100% minimum when the page is already shorter than the viewport.
- Panning and zoom are view state only; saved document pages, PNG exports, PDF exports, and thumbnails use native page dimensions.
- The black background is viewport chrome only. It is not drawn into page layers or exports.

## Backgrounds

Backgrounds are settings, not baked into ink layers. Erasing must not remove ruled/graph/background lines.

Known background styles include blank, ruled, and graph.

## Brush Presets

Default brush presets are user-editable and stored in local browser storage after customization. When changing defaults, avoid overwriting customized saved presets. It is acceptable to migrate presets that still exactly match an older default.

Current defaults:

- Preset 1: black, size 3, opacity 100%, Draw Behind off.
- Preset 2: yellow, size 30, opacity 45%, Draw Behind on.
- Preset 3: blue, size 7, opacity 100%, Draw Behind off.
- Preset 4: red, size 7, opacity 100%, Draw Behind off.
- Preset 5: turquoise, size 30, opacity 45%, Draw Behind on.
- Preset 6: turquoise, size 7, opacity 100%, Draw Behind off.

## Draw Behind

Draw Behind uses `underLayer`, allowing highlighter-style marks to sit below normal handwriting. Exports, thumbnails, lasso behavior, and eraser behavior must include this layer.

Live Draw Behind rendering should stay on the temporary overlay while the pointer is moving. Full-page recomposition is acceptable at the end of the stroke, but doing it on every pointer segment can freeze BOOX/e-ink browsers.

## Eraser

- Erasing affects both `underLayer` and normal `layer`.
- BOOX pen eraser, pen barrel/auxiliary buttons, or secondary button maps to erasing where browser/device events expose it.
- Samsung S Pen side-button behavior may appear as a pen auxiliary/barrel event and may only become visible on pointer movement after contact, so stroke routing checks temporary eraser state while moving as well as on start.
- Eraser preview should be lightweight. Avoid accumulating many overlapping preview marks, especially for physical pen eraser use.
- `drawLine()` switches erasing to `globalCompositeOperation = "destination-out"` on both layer contexts.
- Eraser preview is drawn only on the visible canvas with a short timer, not committed into page layers.
- For erasing with coalesced pointer events, only the latest coalesced event is used to reduce excessive preview/work.

## Lasso

Lasso selection must operate on both drawing layers at once. Moving, rotating, committing, or deleting a selection should preserve the relative content from `underLayer` and `layer`.

Implementation notes:

- Live lasso drawing appends only the latest visible segment while the pointer is moving. Avoid calling `renderWorkspace()` for every lasso point because that redraws the full accumulated path and gets slower as the path grows.
- `finalizeLassoSelection()` creates a mask from the lasso path.
- It extracts matching image data from `underLayer` and `layer` into separate selection canvases.
- It clears the selected shape from both page contexts with `destination-out`.
- It stores a `beforeSnapshot` so undo can restore the original location while a selection is floating.
- `commitSelection()` draws the selected under-canvas back to `underContext`, then draws normal selection content to `context`.

## Shapes

Shape drawing should have predictable orientation. Line shapes should be able to start horizontal by default and be adjusted cleanly.

Shapes render to the normal drawing layer when committed.

Implementation notes:

- Pending shapes are temporary overlays until committed.
- Switching away from shape mode commits a pending shape.
- Rectangles, ellipses, triangles, and lines share `drawShapePath()`.
- Lines snap to horizontal or vertical while being created/resized based on dominant pointer movement.
- Pending shapes can be resized from the corner handle, rotated with the 0-359 degree slider, and switched between proportional and freeform resizing.
- Rotated shape resizing uses the visible handle and opposite visual corner, matching image and lasso selection resizing.
- The action toolbar displays the current normalized degree value beside the slider.

## Images

Imported images render to the normal drawing layer when committed. Before commit, an image is a temporary overlay like a pending shape.

Implementation notes:

- Add Image opens a modal with device file import and clipboard import.
- Clipboard import uses browser clipboard image access when available and can show a small preview.
- New images start centered and fit within 50% of the canvas width and 50% of the canvas height without upscaling.
- Pending images can be moved, resized from the corner handle, rotated with the 0-359 degree slider, and switched between proportional and freeform resizing.
- Clicking outside a pending image commits it to the page.
- After commit, images are baked into the canvas pixels and can be manipulated later with lasso selection.

## Lasso Selection Rotation

Floating lasso selections can be moved, resized from the corner handle, switched between proportional and freeform resizing, or rotated before commit.

Implementation notes:

- Lasso rotation is stored as a live `rotation` value on the floating selection.
- The selected rasters are rendered rotated for preview and baked into the page layers only on commit.
- The action toolbar displays the current normalized degree value beside the 0-359 degree slider.
- The lasso action toolbar can copy the floating selection into an in-app selection clipboard.
- With copied selection pixels available, a canvas long-press or context-click while using the lasso tool opens a small Paste Selection menu at that page point.
- Pasted selections preserve separate `underLayer` and normal-layer rasters; they become page pixels only when the floating selection is committed.

## History

- Each page has independent undo/redo stacks.
- History snapshots clone background, `underLayer`, and `layer`.
- `pushHistorySnapshot()` clears redo and schedules a document save.
- The undo stack is capped by `historyLimit = 30`.
- Undo deletes a pending shape or image first, then restores a floating lasso selection origin, then falls back to page history.
- Deleting a freshly pasted floating selection discards it without adding history because the page pixels have not changed yet.

## Palm Rejection

Palm rejection should prefer pen input and ignore likely accidental touch/palm input while the pen is active.

Touch drawing is controlled by the global `dinodrawGlobalSettings` localStorage preference. It defaults to on so finger-only devices can draw immediately, but can be disabled once per pen-first device from Settings for palm rejection.

Current code ignores non-primary pointers for drawing, shape, and lasso starts. It also ignores `pointerType === "touch"` while the global Touch drawing preference is off.

## Pointer Routing

- `startCanvasAction()`, `continueCanvasAction()`, and `endCanvasAction()` route events by current tool.
- Draw and erase tools use stroke handling.
- Shape and lasso tools require primary left-button style input.
- Pointer capture is used during active drawing/shape/lasso actions.
- Stroke handling caches the canvas bounds for the duration of a stroke so coalesced events do not repeatedly read layout.
- Stroke handling caches the page viewport transform for the duration of a stroke so fixed-page zoom/pan math is not recalculated for every pen sample.
- Stroke and lasso movement consume only the latest coalesced pointer event. Replaying the full coalesced backlog can make BOOX/e-ink latency increase the longer a continuous gesture runs.
- Live stroke and lasso movement are lightly time-throttled to favor low visible latency over preserving every dense hardware sample on BOOX/e-ink browsers.
- Shape, image, and lasso-selection transforms are throttled more aggressively than ink, then catch up to the final pointer position on pointer up.
- Image and lasso-selection resizing draw a downsampled preview bitmap while the resize handle is active; full-resolution content is redrawn at final size on pointer up.
- Very small stroke movements are skipped to avoid processing dense pointer samples that do not visibly change the line.
- Right/secondary button, pen eraser button codes, and pen barrel/auxiliary button codes are interpreted as temporary erasing via `getStrokeTool()`.
- Touch strokes keep a temporary snapshot so a one-finger mark can be canceled into a two-finger pan. Pen strokes should not create that snapshot at stroke start.
- Two-finger pan/zoom starts as a pending gesture and only activates after the touch center moves or the pinch distance changes past the activation threshold.

## Page Key Navigation

The app listens for browser-delivered hardware/navigation key events while a document is open and no modal is active. `AudioVolumeUp`/`VolumeUp` and `PageUp` move to the previous page; `AudioVolumeDown`/`VolumeDown` and `PageDown` move to the next page. This depends on the browser/device exposing those hardware buttons to web content.
