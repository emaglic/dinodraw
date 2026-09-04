# Drawing Engine

The drawing engine lives mostly in `src/app.js`, with canvas markup in `src/index.html` and visual styling in `src/styles.css`.

## Canvas Performance

- Canvas pixel ratio is intentionally kept at `1` for e-ink performance.
- The main canvas context uses performance-oriented options where supported, including `alpha: false` and `desynchronized: true`.
- Input prefers `pointerrawupdate` when available, with `pointermove` as fallback.
- Drawing latency on BOOX is more important than decorative rendering.
- The main visible canvas is a composited display surface. Per-page drawing data lives on offscreen page canvases.

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

`createPage()` builds both layer canvases at the current visible canvas size. `resizeCanvas()` resizes the visible canvas to the viewport and resizes every page layer, drawing the old canvas content into a snapshot first.

## Render Pipeline

- `drawBackground()` always fills white first.
- `renderPage()` resets the visible canvas transform, draws the active page background, then draws `underLayer`, then draws `layer`.
- `renderWorkspace()` draws the committed page plus temporary overlays for selection, pending shape, and lasso path.
- `drawPageThumbnail()` and export flattening use the same background, `underLayer`, `layer` order.

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

## Eraser

- Erasing affects both `underLayer` and normal `layer`.
- BOOX pen eraser or secondary button maps to erasing where browser/device events expose it.
- Eraser preview should be lightweight. Avoid accumulating many overlapping preview marks, especially for physical pen eraser use.
- `drawLine()` switches erasing to `globalCompositeOperation = "destination-out"` on both layer contexts.
- Eraser preview is drawn only on the visible canvas with a short timer, not committed into page layers.
- For erasing with coalesced pointer events, only the latest coalesced event is used to reduce excessive preview/work.

## Lasso

Lasso selection must operate on both drawing layers at once. Moving, rotating, committing, or deleting a selection should preserve the relative content from `underLayer` and `layer`.

Implementation notes:

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
- Shape rotations use 15-degree increments from the action toolbar.

## History

- Each page has independent undo/redo stacks.
- History snapshots clone background, `underLayer`, and `layer`.
- `pushHistorySnapshot()` clears redo and schedules a document save.
- The undo stack is capped by `historyLimit = 30`.
- Undo deletes a pending shape first, then restores a floating lasso selection origin, then falls back to page history.

## Palm Rejection

Palm rejection should prefer pen input and ignore likely accidental touch/palm input while the pen is active.

Current code ignores `pointerType === "touch"` and non-primary pointers for drawing, shape, and lasso starts.

## Pointer Routing

- `startCanvasAction()`, `continueCanvasAction()`, and `endCanvasAction()` route events by current tool.
- Draw and erase tools use stroke handling.
- Shape and lasso tools require primary left-button style input.
- Pointer capture is used during active drawing/shape/lasso actions.
- Right/secondary button and pen eraser button codes are interpreted as temporary erasing via `getStrokeTool()`.
