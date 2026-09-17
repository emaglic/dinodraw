# File System Storage Roadmap

This page tracks the plan for making Dino Draw storage more durable and explicit.

## Goal

Dino Draw should make it clear where drawings live. When browser support allows it, users should be able to store editable project files directly in a chosen device folder. Browser storage should remain available as a fallback and cache, but it should never be mistaken for durable on-disk project storage.

## Core Model

- Each document has one canonical storage backend at a time.
- Disk-backed documents are canonical `.dinodraw.json` files in a user-chosen device folder.
- IndexedDB remains the canonical store for browser-backed documents.
- IndexedDB can also cache metadata, previews, remembered handles, and library catalog data for disk-backed documents.
- Clearing browser/site data may remove the catalog and remembered handles, but should not remove disk-backed project files.
- A user can rebuild the catalog by selecting a folder and letting Dino Draw scan for project files.

Planned storage kinds:

- `fileSystem`: canonical project file lives in a user-chosen device folder.
- `browser`: canonical project record lives in IndexedDB.
- `draft`: temporary work not committed to a canonical backend yet.
- `missing`: a file-backed project whose file or permission cannot currently be reached.

## Phase Status

| Phase | Status | Notes |
| --- | --- | --- |
| 1. Storage status and user clarity | Complete in `v0.8.142` | Added storage capability detection, document-row storage badges, clear browser-storage warnings, and docs. |
| 2. Data schema | Complete in `v0.8.143` | Added IndexedDB schema version 6, storage settings/handle stores, and file-system metadata fields. |
| 3. Folder selection | Complete in `v0.8.144` | Added Choose/Change/Forget Folder controls and persisted the workspace directory handle where supported. |
| 4. Disk-backed save/open | Complete in `v0.8.145` | New documents can save directly to `.dinodraw.json` files, and browser docs can be converted with Save to Folder. |
| 5. Recovery / rebuild library | Complete in `v0.8.146` | Added Recover Library to scan the selected folder for `.dinodraw.json` files and rebuild IndexedDB by `uuid`. |
| 6. Mixed storage management | Complete in `v0.8.147` | Added Save Browser Projects bulk migration, missing-file guidance, and row-level storage details. |
| 7. Docs and guardrails | Complete after `v0.8.147` | Added storage testing checklist, explicit guardrails, and real-device validation notes. |

## Phase 1 Scope

- Detect whether File System Access APIs are available in a secure context.
- Show a storage status panel on the Documents screen.
- Tell the user that current projects are stored in browser storage until device-folder saving is enabled.
- Add a per-document storage badge, defaulting existing documents to `Browser`.
- Preserve existing save behavior.

Phase 1 was completed in `v0.8.142`. All existing and new documents default to `storageKind: "browser"`; no disk-backed save path exists yet.

## Phase 2 Scope

- Bump IndexedDB to version `6`.
- Add a `storageSettings` object store for workspace-level storage preferences.
- Add a `storageHandles` object store for future directory/file handles.
- Normalize document metadata fields for `workspaceId`, `fileHandleId`, `fileName`, `relativePath`, `fileLastModifiedAt`, and `catalogedAt`.
- Preserve those metadata fields across document load/save.
- Keep portable DinoDraw exports free of local storage metadata.

Phase 2 was completed in `v0.8.143`. No folder picker or disk-backed write path exists yet; Phase 3 starts with selecting and persisting a device-folder handle.

## Phase 3 Scope

- Add Documents-screen controls for choosing, changing, and forgetting a device folder.
- Use `showDirectoryPicker({ mode: "readwrite" })` when available in a secure context.
- Persist the selected directory handle in the `storageHandles` store under `workspaceDirectory`.
- Store the selected folder name and handle ID in `storageSettings`.
- Update the storage status panel to distinguish `available` from `connected`.
- Keep all current document saves browser-backed until Phase 4.

Phase 3 was completed in `v0.8.144`. Selecting a folder only stores the workspace handle; it does not migrate, rewrite, or autosave projects to disk yet.

## Phase 4 Scope

- When a workspace folder is connected, new drawings become `fileSystem` documents and autosave to editable `.dinodraw.json` files.
- Existing browser-backed drawings can be converted with `Save to Folder`.
- Disk-backed saves continue updating IndexedDB as a catalog/cache while writing the full portable DinoDraw JSON file to disk.
- Disk-backed records use stable generated filenames based on document name and UUID.
- Forgetting a folder marks file-backed catalog records as `missing` and drops stored handles, but does not delete disk files.
- Deleting a file-backed document currently removes Dino Draw's catalog/cache and stored file handle, but does not physically delete the disk file.

Phase 4 was completed in `v0.8.145`. Phase 5 starts with folder scanning and catalog rebuild/recovery.

## Phase 5 Scope

- Add a Recover Library action to the storage status panel when a workspace folder is connected.
- Recursively scan the selected folder for `.dinodraw.json` project files.
- Parse each project file and rebuild IndexedDB document/page records using the file's `uuid`.
- Update existing same-UUID catalog records, unless a browser-backed record is newer than the file.
- Store recovered file handles and mark recovered records as `fileSystem`.
- Show a recovery summary with found, recovered, updated, skipped, failed, and file-limit information.

Phase 5 was completed in `v0.8.146`. Recovery rebuilds the local catalog/cache from disk-backed project files. Phase 6 starts with richer mixed-storage management and missing-file handling.

## Phase 6 Scope

- Add a Save Browser Projects action when a workspace folder is connected and browser-backed drawings remain.
- Bulk-convert browser-backed drawings to folder-backed `.dinodraw.json` files with a summary.
- Prioritize missing-file guidance in the storage status summary.
- Show file path/name details on file-backed and missing document rows.
- Warn through save status when opening a missing record from browser cache.

Phase 6 was completed in `v0.8.147`. Phase 7 remains for final docs/guardrail polish and any follow-up behavior discovered during browser/device testing.

## Phase 7 Scope

- Keep README, wiki, and in-app instructions aligned with final storage behavior.
- Add a manual File System Storage test checklist for secure Chromium/browser and BOOX validation.
- Document guardrails: disk files are canonical for file-backed documents; IndexedDB is catalog/cache; deleting a library entry does not physically delete a disk file; forgetting a folder drops handles and marks file-backed records missing.
- Track File System Access browser/device validation as an explicit known risk.

Phase 7 was completed as a docs/guardrails pass after `v0.8.147`. No app code changed in this phase.

## Implementation Notes

- Use older JavaScript syntax compatible with the BOOX browser constraints in `instructions.md`.
- The current portable DinoDraw export shape, `{ format, formatVersion, exportedAt, document }`, should be reused for disk-backed project file contents unless a future migration justifies a new file format.
- `uuid` remains the stable cross-storage document identity; local IndexedDB `id` remains the local key.
- `folderId` remains a local library organization field and should not be exported as portable file identity.
