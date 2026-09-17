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
- Open Documents and confirm the storage panel accurately shows browser storage, folder availability, or active folder state.
- If File System Access is unsupported, confirm folder actions are hidden and browser storage warnings remain visible.

Folder setup:

- Use Choose Folder and select a test folder.
- Confirm the storage panel changes to device folder active and shows Recover Library.
- Create a new drawing and confirm it gets a `Folder` badge.
- Outside Dino Draw, confirm a `.dinodraw.json` file exists in the selected folder.

Disk-backed save:

- Open the folder-backed drawing, draw on at least two pages, wait for save, then inspect the file modified time if the platform exposes it.
- Close/reopen the document inside Dino Draw and confirm pages, backgrounds, `underLayer`, normal ink, settings, and toolbar visibility survive.
- Export the same document and confirm editable export still imports as expected.

Browser-to-folder migration:

- Create or import a browser-backed drawing while no folder is connected, or use an existing browser-backed drawing.
- Reconnect a folder and use Save to Folder on one drawing.
- Confirm its badge changes from `Browser` to `Folder` and a project file appears on disk.
- If multiple browser-backed or missing-but-cached drawings remain, use Save Browser Projects and confirm the summary count and resulting badges. With a connected folder and no browser-cached projects, confirm the button remains visible but disabled.

Recovery:

- With known `.dinodraw.json` files on disk, simulate lost catalog state by testing in a fresh browser profile or after clearing site data only when the disk files have been verified.
- Reopen Dino Draw, choose the same folder, run Recover Library, and confirm the recovered count and document rows.
- Confirm recovered documents open and continue saving to disk.
- Confirm recovery skips a browser-backed same-UUID document when the browser copy is newer.

Missing and forgotten folder behavior:

- Use Forget Folder and confirm file-backed rows become `Missing` rather than disappearing.
- Use Change Folder and select a different folder. Confirm existing file-backed rows become `Missing` rather than continuing to show `Folder`.
- Delete a `.dinodraw.json` file outside Dino Draw, then refresh/reopen the Documents list. Confirm that row becomes `Missing` instead of continuing to show `Folder`.
- Open a missing record and confirm Dino Draw warns that it opened the browser cache.
- With a connected folder, use Save Browser Projects on a missing-but-cached record and confirm it writes a fresh `.dinodraw.json` file and changes the badge back to Folder.
- Reconnect the folder and run Recover Library to restore file-backed status.
- Confirm deleting a file-backed library entry removes Dino Draw's catalog/cache entry but does not physically delete the disk file.

## BOOX-Sensitive Checks

Laptop behavior may not reveal:

- e-ink drawing latency
- stale service-worker cache behavior
- pen-hover quirks
- physical pen eraser button behavior
- accidental touch/palm input while pen is active
- File System Access picker behavior and whether directory handles persist after browser/app restarts
