# Known Issues

This page tracks open risks and recurring pitfalls. Move fixed items into `log.md` or the relevant feature page when resolved.

## BOOX Behavior Requires Real-Device Validation

Desktop browser testing cannot fully validate e-ink latency, pen hover, palm rejection, physical pen eraser behavior, or stale cache symptoms.

## PWA Requires Secure Context

Offline install/service-worker behavior requires HTTPS or localhost. On insecure LAN HTTP, the app may still run, but PWA behavior can be unavailable or inconsistent.

## File System Access Requires Target-Browser Validation

Folder-backed storage depends on File System Access APIs such as `showDirectoryPicker()` and persisted `FileSystemHandle` objects. Chrome/Chromium support should be tested directly on the BOOX Note Air 5C target browser. In unsupported browsers, Dino Draw should remain browser-storage backed and make that clear in the storage row and Storage Settings dialog.

Known validation points:

- directory picker availability
- read/write permission prompts
- whether handles survive browser/app restart
- whether handles survive PWA launch mode
- behavior after clearing site data
- recursive folder scanning behavior on Android/BOOX

## Version Drift Can Cause Stale Tablet Builds

The visible version number is important because the user relies on it to detect whether the tablet has picked up the latest build. Any code/UI/cacheable behavior change should update all version references together.

## Syntax Compatibility

Avoid modern JavaScript features that may fail in the BOOX browser, including optional chaining, nullish coalescing, `replaceAll`, and `structuredClone`.
