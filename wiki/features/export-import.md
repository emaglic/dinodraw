# Export And Import

Export/import behavior is implemented mostly in `src/app.js`.

## DinoDraw JSON

- JSON export is the editable DinoDraw document format.
- Preferred exported filename pattern: `[filename].dinodraw.json`.
- Preferred internal format identifier: `dinodraw-document`.
- User-facing button text should be `Export`.
- Avoid reviving old `DrawDoc` user-facing text.
- Current wrapped export shape is `{ format, formatVersion, exportedAt, document }`.
- Current `formatVersion` is `1`.
- Export calls `flushDocumentSave()` first when exporting the active document, then serializes current in-memory state.

## Legacy Compatibility

Import should continue accepting:

- legacy `.drawdoc` files
- legacy `boox-drawing-document` format data, where compatibility already exists

## PNG Export

- User-facing button text: `Save PNG`.
- PNG export downloads a ZIP, but the UI does not need to say ZIP.
- PNG files inside the ZIP should be named `page-01.png`, `page-02.png`, and so on.
- Export must flatten background, `underLayer`, and normal `layer` in the correct order.
- Current ZIP filename is `[filename]-png-pages.zip`.
- ZIP creation is implemented directly in browser JavaScript with local headers, central directory records, CRC32, and stored/uncompressed file entries.
- `canvas.toBlob()` is preferred, with a `toDataURL()` fallback.

## PDF Export

- User-facing button text: `Save PDF`.
- PDF export may use PNG/page image data internally.
- Clarity is more important than file size.
- Export must flatten background, `underLayer`, and normal `layer` in the correct order.
- Current PDF filename is `[filename].pdf`.
- PDF creation is implemented directly in browser JavaScript as a simple PDF 1.4 document.
- PDF page image data is written as raw DeviceRGB bytes from the flattened canvas, not as compressed PNG/JPEG data.

## Import Requirements

Imported documents should preserve:

- document title and metadata when available
- page dimensions
- per-page background settings
- `underLayer` / Draw Behind content
- normal layer content

Import errors should use DinoDraw custom dialogs, not native browser alerts.

## Normalization Behavior

`normalizeImportedDocument()`:

- accepts wrapped DinoDraw/legacy records or a bare document-like object
- requires `pages` to be an array
- generates a new document `id`
- preserves source `name` and `createdAt` when present
- sets `updatedAt`, `lastOpenedAt`, and `appVersion` to current values
- defaults missing page background to `blank`
- defaults missing dimensions to the current canvas/viewport
- defaults missing `drawing` and `underDrawing` to empty strings
