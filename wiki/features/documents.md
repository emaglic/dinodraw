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
- A storage status panel appears above the document list. In Phase 1 of the file-system storage roadmap, it reports whether File System Access APIs are available and clarifies that current projects are still saved in browser storage.
- In Phase 3, the storage status panel includes Choose/Change Folder and Forget Folder controls where `showDirectoryPicker()` is available in a secure context.
- In Phase 4, new drawings become disk-backed when a workspace folder is connected. Existing browser-backed drawings can use Save to Folder from the document menu or Settings.
- In Phase 5, Recover Library scans the connected workspace folder for `.dinodraw.json` files and rebuilds the IndexedDB catalog/cache by document `uuid`.
- In Phase 6, the storage status panel includes Save Browser Projects when a connected folder exists. It shows the browser-cache project count when work remains, including missing records that can still open from the browser cache, and disables itself when there are no browser-cached projects to move. Missing-file records get priority recovery guidance.
- The New Drawing, New Folder, and Import Doc buttons sit together at the bottom of the Documents panel and may stack on small screens.
- Link-style breadcrumbs show the current folder path and navigate back to `My Documents` or parent folders. Breadcrumb levels are separated with `keyboard_arrow_right` icons.
- Folder rows appear before document rows in the current folder and include Open plus a three-dot menu.
- Folder and document rows include a left-side type icon, title, metadata, an Open button, and a three-dot menu for secondary actions.
- Metadata should include page count, opened date, and edited date, including the year.
- File-backed and missing document rows append their file path/name to the metadata line when available.
- The document row three-dot menu is text-only.
- Expected document row actions include Move, Rename, Export, Save to Folder, Save PNG, Save PDF, and Delete.
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

- Browser-backed document saving uses IndexedDB.
- Phase 1 storage clarity is implemented: document records include `storageKind`, existing records default to `browser`, and document rows show a storage badge.
- Phase 2 schema work is implemented: IndexedDB version `6` adds `storageSettings` and `storageHandles` stores for future device-folder handles and workspace preferences.
- Phase 3 folder selection is implemented: `storageSettings.workspaceHandleId` points to the selected workspace directory handle record, and `storageSettings.workspaceName` stores the display name.
- Phase 4 disk-backed saving is implemented: new drawings save to `.dinodraw.json` files when a workspace folder is connected, and existing browser-backed drawings can be converted with Save to Folder. IndexedDB remains a catalog/cache for disk-backed drawings.
- Phase 5 recovery is implemented: Recover Library scans the connected folder recursively for `.dinodraw.json` files, updates existing same-UUID records, and creates new file-backed records for projects missing from IndexedDB.
- Phase 6 mixed-storage management is implemented: Save Browser Projects bulk-converts remaining browser-backed drawings and missing-but-cached drawings, missing-file records show recovery guidance, and rows include storage path/name detail.
- Current historical database name: `booxDrawingDocuments`.
- Current object stores: `documents`, `documentPages`, `folders`, `storageSettings`, and `storageHandles`.
- Save behavior should include all pages, backgrounds, `underLayer`, normal `layer`, and document settings.
- Saves are debounced by `scheduleDocumentSave()`, currently with a default delay of `700ms`.
- `saveCurrentDocument()` writes document metadata and only dirty page records when split page storage is available.
- Split saves verify that each metadata `pageId` has a stored page record before the split metadata is accepted.
- If split save or verification fails, saving falls back to a legacy full-document record with embedded `pages`.
- If a save is already in progress, the code sets `shouldSaveAgain` so another save is scheduled after the current write finishes.
- `flushDocumentSave()` is used before document switching, exporting, renaming, deleting, and creating new documents.
- Old records with embedded `pages` remain readable and are marked dirty on load so they can be split into `documentPages` on the next save.
- Forgetting or changing a workspace folder marks file-backed catalog records as `missing` and removes stored handles without deleting disk files. Run Recover Library after reconnecting the folder that contains those project files.
- Refreshing the document list validates file-backed handles. If a disk file was deleted or can no longer be read, Dino Draw marks that catalog record as `missing`.
- Deleting a file-backed document currently removes Dino Draw's catalog/cache and stored file handle, but does not physically delete the disk file.
- Recovery skips a disk file when an existing browser-backed same-UUID document has a newer `updatedAt` timestamp.
- Opening a missing record uses the browser cache and updates the save status to warn that the project file is missing. Save Browser Projects can write missing-but-cached records back into the connected device folder.

## Document Record Shape

Current local records include:

- `id`
- `uuid`
- `name`
- `folderId`
- `storageKind`
- `workspaceId`
- `fileHandleId`
- `fileName`
- `relativePath`
- `fileLastModifiedAt`
- `catalogedAt`
- `createdAt`
- `updatedAt`
- `lastOpenedAt`
- `appVersion`
- `activePageIndex`
- `settings`
- `pageIds`
- `pageCount`

`settings` includes eraser size, active preset index, brush presets, shape config, and regular toolbar positions.

Editable DinoDraw JSON exports still use the portable full-document format with `pages`. Import splits that portable format back into document metadata and separate page records in IndexedDB. Local storage metadata such as `storageKind`, workspace IDs, handle IDs, file names, relative paths, and catalog timestamps should not be included in portable exports.

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
