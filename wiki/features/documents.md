# Documents

Document behavior is implemented mostly in `src/app.js`, with markup in `src/index.html` and layout in `src/styles.css`.

## Landing Screen

- The app opens to the Documents screen.
- The landing page shows the DinoDraw SVG logo centered above "Documents".
- It shows "Dino Draw" and the current version under the logo.
- The Documents screen includes a dismissible "What is Dino Draw?" intro card below the logo/version and above the Documents heading. The close button sits beside the heading, while the explanation and right-aligned Instructions button span the card width. Dismissing the card persists in global settings and shows a compact Help icon button at the top-left of the Documents panel.
- The main landing heading says `Documents`.
- A horizontal rule separates the `Documents` heading from the folder and action area.
- The current folder name, such as `My Documents`, sits below the heading in a smaller bold left-aligned heading on the same line as the parent-folder back arrow.
- The parent-folder back arrow is hidden while viewing `My Documents`.
- The brand, intro/help, folder header, breadcrumbs, and bottom action buttons remain visible while the document list scrolls in the middle of the panel.
- The Documents panel grows with the document list until the list reaches the available viewport cap, then only the list scrolls.
- The folder row does not show helper copy like "Local drawings stored on this device."
- The close X is absolutely positioned at the top-right.
- Hide or disable the close X when closing is not allowed, such as the initial state with no active document behind the screen.

## Document List

- Documents are stored locally in IndexedDB.
- Documents can be organized into folders and nested folders from the Documents screen.
- Existing records with no `folderId` appear in the top-level `My Documents` folder.
- Existing records with no `uuid` are migrated in place on app startup without changing `updatedAt`.
- Documents are listed by last opened date, most recent first.
- The current folder title appears above the folder-scoped action row.
- The New Drawing, New Folder, and Import Doc buttons sit together at the bottom of the Documents panel and may stack on small screens.
- Link-style breadcrumbs show the current folder path and navigate back to `My Documents` or parent folders. Breadcrumb levels are separated with `keyboard_arrow_right` icons.
- Folder rows appear before document rows in the current folder and include Open plus a three-dot menu.
- Folder and document rows include a left-side type icon, title, metadata, an Open button, and a three-dot menu for secondary actions.
- Metadata should include page count, opened date, and edited date, including the year.
- The document row three-dot menu is text-only.
- Expected document row actions include Move, Rename, Export, Save PNG, Save PDF, and Delete.
- Expected folder row actions include Rename, Move, and Delete. Deleting a folder moves direct child folders and documents up one level rather than deleting document content.
- Rows can be dragged from their body onto folder rows, breadcrumbs, `My Documents`, or the parent/back target to move them. Dragging requires a short press-and-hold; movement before the hold manually scrolls the document panel so straight vertical swipes remain usable. The Move menu remains the fallback path.

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
- Current object stores: `documents`, `documentPages`, and `folders`.
- Save behavior should include all pages, backgrounds, `underLayer`, normal `layer`, and document settings.
- Saves are debounced by `scheduleDocumentSave()`, currently with a default delay of `700ms`.
- `saveCurrentDocument()` writes lightweight document metadata and only dirty page records. Full-document serialization is reserved for export/import compatibility.
- If a save is already in progress, the code sets `shouldSaveAgain` so another save is scheduled after the current write finishes.
- `flushDocumentSave()` is used before document switching, exporting, renaming, deleting, and creating new documents.
- Old records with embedded `pages` remain readable and are split into `documentPages` the next time they are saved.

## Document Record Shape

Current local records include:

- `id`
- `uuid`
- `name`
- `folderId`
- `createdAt`
- `updatedAt`
- `lastOpenedAt`
- `appVersion`
- `activePageIndex`
- `settings`
- `pageIds`
- `pageCount`

`settings` includes eraser size, active preset index, brush presets, shape config, and regular toolbar positions.

Editable DinoDraw JSON exports still use the portable full-document format with `pages`. Import splits that portable format back into document metadata and separate page records in IndexedDB.

`settings.toolbarPositions` stores per-document position records for:

- `main`
- `presets`
- `undo`
- `fullscreen`

New documents start without saved toolbar positions, so their first load applies default toolbar positions. Moving a toolbar in a document saves that document's toolbar positions for the next time it is opened.

`uuid` is the stable document identity used by DinoDraw JSON export/import duplicate detection. `id` remains the local IndexedDB key. `folderId` is local library organization. Missing or unknown values resolve to the top-level `My Documents` folder. DinoDraw JSON exports strip `folderId`, and imported documents are placed into the currently viewed folder unless they overwrite an existing same-UUID document, in which case the existing document is updated in place in its current folder.

Folder records live in the `folders` object store and include:

- `id`
- `name`
- `parentId`
- `createdAt`
- `updatedAt`

Each saved page includes:

- `documentId`
- `pageId`
- `sortOrder`
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

Device-specific preferences should live outside document records. Current global settings are stored in localStorage under `dinodrawGlobalSettings`; Touch drawing, toolbar visibility, and Documents intro-card dismissal live there.

## Document Screen Flow

- The app always shows the Documents screen after initialization.
- `hideDocumentScreen()` refuses to close when there is no active document.
- Opening the currently active document flushes pending saves and closes the screen.
- Opening another document updates its `lastOpenedAt` before loading it.
- Deleting the active document clears active document state, pages, and temporary canvas state, then shows the Documents screen again.
