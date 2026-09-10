# Toolbars

Toolbar behavior is implemented in `src/app.js`, `src/index.html`, and `src/styles.css`.

## Main Toolbar

- Default position: left side of canvas, vertically centered.
- Default orientation: vertical.
- Contains document/library, draw, erase, shape, add image, lasso, settings, page navigation, page indicator, and add page controls.
- Tapping Shape selects the tool without opening settings. Double tapping Shape opens shape settings while preserving the current document-level shape configuration.
- The document/library button is labeled as Home in the UI while still opening the Documents landing screen.
- Toolbars are draggable.
- Dragging near an edge shows a semi-transparent docking preview strip for that edge.
- Releasing while the docking preview is visible snaps the toolbar to that edge with 8px padding.
- Releasing on a top or bottom docking preview sets horizontal orientation.
- Releasing on a left or right docking preview sets vertical orientation.
- Dragging near an edge without docking should not change the current toolbar orientation.
- Saved in the active document under `settings.toolbarPositions.main`.
- Main toolbar visibility is always enabled because it provides access to Settings.

## Brush Preset Toolbar

- Default position: bottom-left edge.
- Default orientation: horizontal.
- Visible when draw tool is selected.
- Contains six user-editable brush presets.
- Double tap a preset to edit size, opacity, color, and Draw Behind.
- Saved in the active document under `settings.toolbarPositions.presets`.
- Brush preset storage key: `brushPresets`.

## Shape Tool

- Shape settings are saved in the active document under `settings.shapeConfig`.
- Tapping the main toolbar Shape button selects the shape tool and uses the last saved/current configuration.
- Double tapping the main toolbar Shape button opens shape settings.
- The shape action toolbar settings button also opens shape settings for the pending shape.

## Undo/Redo Toolbar

- Default position: top-left.
- Draggable and edge-oriented like other toolbars.
- Saved in the active document under `settings.toolbarPositions.undo`.

## Toolbar Icons

- Toolbar icon replacements use the local `.material-symbols-outlined` class backed by `src/vendor/material-symbols/material-symbols-outlined.woff2`.
- Replaced icon ligatures include `drag_indicator`, `keyboard_arrow_up`, `keyboard_arrow_down`, `ink_pen`, `ink_eraser`, `shapes`, `home`, `image`, `lasso_select`, `settings`, `keyboard_arrow_left`, `keyboard_arrow_right`, `arrow_back`, `add`, `delete`, `aspect_ratio`, `check`, `content_copy`, `undo`, `redo`, `fullscreen`, `fullscreen_exit`, `close`, `folder`, and `article`.
- Keep existing toolbar and action button dimensions when swapping icons.

## Fullscreen Toolbar

- Default position: top-right.
- Has a drag handle and fullscreen toggle button.
- The fullscreen toggle uses `fullscreen` when entering fullscreen and `fullscreen_exit` when exiting.
- Saved in the active document under `settings.toolbarPositions.fullscreen`.

## Toolbar Visibility Settings

- Settings includes toolbar visibility checkboxes for Main toolbar, Brush presets, Undo and redo, and Fullscreen.
- Main toolbar is checked and disabled so it cannot be hidden from the enabled-toolbar set.
- Optional regular toolbar visibility is stored in global localStorage settings, not inside each document.
- The edge show/hide tab hides or shows only the regular toolbars enabled in Settings.
- Temporary action toolbars for shape, image, and lasso are not listed and remain controlled by their active tool state.

## Hide/Show Toolbars Tab

- Default position: top-center.
- Small trapezoid pull-tab that stays visible while other toolbars are hidden.
- Has a small top grip for dragging around the screen perimeter.
- The lower arrow/toggle area toggles toolbar visibility.
- Movement is edge-pinned and should rotate at corners.
- Saved localStorage key: `toolbarVisibilityTabPosition`.
- Older `centerX` saved values are migrated/restored as top-edge positions.

When hiding toolbars, fade out:

- main toolbar
- brush preset toolbar
- undo/redo toolbar
- fullscreen toolbar
- shape action toolbar
- lasso action toolbar
- image action toolbar

Shape, image, and lasso action toolbars include a 0-359 degree rotation slider with a compact degree readout plus a proportional resize lock toggle.

Hiding should not change the selected tool. Showing toolbars again should only show the brush preset toolbar when the draw tool is selected.

## Reset Position Behavior

The Settings modal Toolbars section includes `Reset Toolbar Positions`. This resets toolbar positions only. It must not reset toolbar visibility, brush presets, or other user settings.

Current reset reapplies default positions for the four regular toolbars and writes those positions back to the active document. It also removes legacy global regular-toolbar position keys when possible:

- `mainToolbarPosition`
- `presetToolbarPositionBottomLeft`
- `undoToolbarPositionTopLeft`
- `fullscreenToolbarPosition`
- legacy `presetToolbarPositionBottomRight`

The hide/show tab still uses its separate edge-pinned `toolbarVisibilityTabPosition` localStorage key and is reset by the same button.

## Tooltips

- Tooltips are press-and-hold only.
- Avoid hover tooltip behavior.
- Current intended delay is about `375ms`.
- Tooltips disappear as soon as the hold ends.
- Placement should avoid overlapping buttons in the same toolbar when possible.
- Tooltip setup copies `data-tooltip`, `aria-label`, or `title` into `data-tooltip`, then removes native `title` attributes.
- Long-press tooltip display can block the following click for the same target, preventing an accidental activation after using the tooltip.
- Pen/touch pointer movement over 8px from the press origin cancels the tooltip.

## Drag Pattern

The four regular toolbars share similar drag behavior:

- calculate the pointer offset within the toolbar on `pointerdown`
- show an edge docking preview when the toolbar is within the dock zone
- keep the current orientation during ordinary dragging
- snap to the previewed edge and apply that edge orientation on `pointerup`
- clamp position to the viewport with an 8px margin
- write `{ left, top, orientation }` plus responsive anchor metadata to `settings.toolbarPositions` on drag end
- preserve left/right/top/bottom edge distance for toolbars placed near an edge when the viewport resizes or rotates
- preserve center-axis ratio for toolbars placed away from edges
- reclamp positions on window resize so toolbars remain on screen

The hide/show tab uses a separate edge/offset model instead of free `{ left, top }` positioning and is not affected by toolbar visibility settings.
