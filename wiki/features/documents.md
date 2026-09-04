# Documents

Document behavior is implemented mostly in `src/app.js`, with markup in `src/index.html` and layout in `src/styles.css`.

## Landing Screen

- The app opens to the Documents screen.
- The landing page shows the DinoDraw SVG logo centered above "Documents".
- It shows "Dino Draw" and the current version under the logo.
- The Documents screen includes a dismissible "What is Dino Draw?" intro card below the logo/version and above the Documents heading. The close button sits beside the heading, while the explanation and right-aligned Instructions button span the card width. Dismissing the card only hides it until the page is reloaded.
- The close X is absolutely positioned at the top-right.
- Hide or disable the close X when closing is not allowed, such as the initial state with no active document behind the screen.

## Document List

- Documents are stored locally in IndexedDB.
- Documents are listed by last opened date, most recent first.
- The New and Import buttons sit together near the top and may stack on small screens.
- A row should show title, metadata, an Open button, and a three-dot menu for secondary actions.
- Metadata should include page count, opened date, and edited date, including the year.
- The document row three-dot menu is text-only.
- Expected row actions include Rename, Export, Save PNG, Save PDF, and Delete.

## Dialogs

Avoid native browser `prompt`, `confirm`, and `alert` dialogs. Use the integrated DinoDraw modal/dialog style for:

- rename
- delete confirmation
- new document naming
- import errors
- save/export errors
- other app-level confirmations

The Instructions guide should remain local/offline, full-screen, readable on tablets, and focused on actual workflows rather than marketing copy. Keep it reachable from the Documents intro card and from Settings.

## Saving

- Local document saving uses IndexedDB.
- Current historical database name: `booxDrawingDocuments`.
- Current object store: `documents`.
- Save behavior should include all pages, backgrounds, `underLayer`, normal `layer`, and document settings.
- Saves are debounced by `scheduleDocumentSave()`, currently with a default delay of `700ms`.
- `saveCurrentDocument()` serializes through `serializeCurrentDocument()` and writes with `putDocument()`.
- If a save is already in progress, the code sets `shouldSaveAgain` so another save is scheduled after the current write finishes.
- `flushDocumentSave()` is used before document switching, exporting, renaming, deleting, and creating new documents.

## Document Record Shape

Current local records include:

- `id`
- `name`
- `createdAt`
- `updatedAt`
- `lastOpenedAt`
- `appVersion`
- `activePageIndex`
- `settings`
- `pages`

`settings` includes eraser size, active preset index, brush presets, and shape config.

Each saved page includes:

- `background`
- `width`
- `height`
- `underDrawing`
- `drawing`

## Page Manager

- Tapping the page indicator opens the Pages modal.
- Pages modal uses a responsive thumbnail grid.
- Page overflow menus must not be clipped by the modal body.
- Page overflow menu items include Insert Page Before, Insert Page After, and Delete Page.
- Deleting pages uses the custom app dialog, not a browser confirm dialog.
- A document must always keep at least one page.
- New or inserted pages should choose a background from the active/neighboring page where appropriate.
- The main toolbar `+` opens a compact Add Page modal showing the current page and vertical Insert Before, Insert After, and Add to End choices. Each choice inserts a blank page at that placement and makes the inserted page active.
- Page thumbnails are generated from the same render order as the main canvas: background, `underLayer`, then normal `layer`.
- Insert Page Before/After keeps the active page active by remembering the active page object before splicing.
- Delete Page adjusts the active page index to remain valid after removal.

## Global Settings

Device-specific preferences should live outside document records. Current global settings are stored in localStorage under `dinodrawGlobalSettings`; Touch drawing lives there. The Documents intro-card dismissal is session-only runtime state and should reappear on reload.

## Document Screen Flow

- The app always shows the Documents screen after initialization.
- `hideDocumentScreen()` refuses to close when there is no active document.
- Opening the currently active document flushes pending saves and closes the screen.
- Opening another document updates its `lastOpenedAt` before loading it.
- Deleting the active document clears active document state, pages, and temporary canvas state, then shows the Documents screen again.
