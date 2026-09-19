# Testing

Use this page for validation strategy and recurring checks.

## JavaScript Syntax Checks

After changes to `src/app.js`:

```powershell
node --check src/app.js
```

After changes to `src/service-worker.js`:

```powershell
node --check src/service-worker.js
```

## Version Scans

When version bumps are required, scan for stale references:

```powershell
rg -n "v0\.8\.|0\.8\." src
```

## BOOX Compatibility Scan

The BOOX browser may struggle with newer syntax. Scan after JavaScript changes:

```powershell
rg -n "\?\.| \?\? |replaceAll|structuredClone" src
```

Avoid:

- optional chaining
- nullish coalescing
- `replaceAll`
- `structuredClone`

## Manual UI Checks

For UI changes, run the app locally in a browser when practical and check:

- drawing still starts quickly and tracks pointer movement
- text does not overlap or overflow controls
- dialogs fit on smaller tablet-like viewports
- toolbars remain draggable and reachable
- press-and-hold tooltips appear and disappear correctly
- page thumbnails and menus are not clipped
- exports still include background, `underLayer`, and normal `layer`

## File System Storage Checks

Run these in a secure Chromium browser context such as HTTPS or localhost. BOOX/Android behavior must be checked on the target browser because File System Access support varies.

Baseline:

- Confirm the visible app version is the expected version.
- Open Documents and confirm the compact storage row shows `Storage Method: Browser` with either `Device Storage Available` and a check-circle icon or `Device Storage Unavailable` and a circle-X icon.
- Use the storage gear button and confirm the Storage Settings dialog opens with the active storage mode, selected folder when connected, explanation, and controls.
- If File System Access is unsupported, confirm folder actions are hidden and browser storage warnings remain visible.

Folder setup:

- Use Device Storage and select a test folder.
- Confirm the storage row changes to `Storage Method: Device` and shows the selected folder name. In Storage Settings, confirm Change Folder, Import Browser Projects, Rescan Folder, and Use Browser Storage are available.
- Confirm the selected device folder appears as a top-level folder row in `My Documents` with a `Device` badge.
- Open the selected device folder row, create a new folder, and confirm it gets a `Device` badge and appears as a subdirectory in the selected device folder.
- Create a new drawing inside that folder and confirm it gets a `Device` badge.
- Outside Dino Draw, confirm a `.dinodraw.json` file exists in the matching device subfolder.

Disk-backed save:

- Open the folder-backed drawing, draw on at least two pages, wait for save, then inspect the file modified time if the platform exposes it.
- Close/reopen the document inside Dino Draw and confirm pages, backgrounds, `underLayer`, normal ink, settings, and toolbar visibility survive.
- Export the same document and confirm editable export still imports as expected.

Browser-to-folder migration:

- Create or import a browser-backed drawing while no folder is connected, or use an existing browser-backed drawing.
- Reconnect a folder and use Save to Folder on one drawing.
- Confirm its badge changes from `Browser` to `Device` and a project file appears on disk.
- Move that folder-backed drawing into a device-backed Dino Draw folder and confirm the project file moves into the matching device subfolder.
- If multiple browser-backed or missing-but-cached drawings remain, use Import Browser Projects and confirm the summary count and resulting badges. With a connected folder and no browser-cached projects, confirm the button remains visible but disabled.

Recovery:

- With known `.dinodraw.json` files on disk, simulate lost catalog state by testing in a fresh browser profile or after clearing site data only when the disk files have been verified.
- Reopen Dino Draw, choose the same folder, and confirm the automatic scan recovers the expected document rows and recreates virtual folders from disk subdirectories. Use Rescan Folder to confirm the manual fallback still works.
- Confirm recovered root-level project files appear inside the selected device folder row, not directly in `My Documents` beside browser-backed records.
- Confirm recovered documents open and continue saving to disk.
- Confirm recovery skips a browser-backed same-UUID document when the browser copy is newer.

Missing and forgotten folder behavior:

- Use Browser Storage and confirm file-backed document and folder rows become `Missing` rather than disappearing.
- Use Change Folder and select a different folder. Confirm existing file-backed document and folder rows become `Missing` rather than continuing to show `Device`.
- Delete a device subfolder outside Dino Draw, then refresh/reopen the Documents list. Confirm that virtual folder becomes `Missing` instead of continuing to show `Device`.
- Delete a `.dinodraw.json` file outside Dino Draw, then refresh/reopen the Documents list. Confirm that row becomes `Missing` instead of continuing to show `Device`.
- Open a missing record and confirm Dino Draw warns that it opened the browser cache.
- With a connected folder, use Import Browser Projects on a missing-but-cached record and confirm it writes a fresh `.dinodraw.json` file and changes the badge back to `Device`.
- Reconnect the folder and confirm the automatic scan restores file-backed status.
- Confirm deleting a file-backed library entry removes Dino Draw's catalog/cache entry but does not physically delete the disk file.

## BOOX-Sensitive Checks

Laptop behavior may not reveal:

- e-ink drawing latency
- stale service-worker cache behavior
- pen-hover quirks
- physical pen eraser button behavior
- accidental touch/palm input while pen is active
- File System Access picker behavior and whether directory handles persist after browser/app restarts
