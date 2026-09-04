# Known Issues

This page tracks open risks and recurring pitfalls. Move fixed items into `log.md` or the relevant feature page when resolved.

## BOOX Behavior Requires Real-Device Validation

Desktop browser testing cannot fully validate e-ink latency, pen hover, palm rejection, physical pen eraser behavior, or stale cache symptoms.

## PWA Requires Secure Context

Offline install/service-worker behavior requires HTTPS or localhost. On insecure LAN HTTP, the app may still run, but PWA behavior can be unavailable or inconsistent.

## Version Drift Can Cause Stale Tablet Builds

The visible version number is important because the user relies on it to detect whether the tablet has picked up the latest build. Any code/UI/cacheable behavior change should update all version references together.

## Syntax Compatibility

Avoid modern JavaScript features that may fail in the BOOX browser, including optional chaining, nullish coalescing, `replaceAll`, and `structuredClone`.
