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

## BOOX-Sensitive Checks

Laptop behavior may not reveal:

- e-ink drawing latency
- stale service-worker cache behavior
- pen-hover quirks
- physical pen eraser button behavior
- accidental touch/palm input while pen is active
