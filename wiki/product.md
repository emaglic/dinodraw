# Product

Dino Draw is a static, local-first drawing and notebook web app for pen-first writing, sketching, marking up ideas, and keeping multi-page handwritten documents.

## User And Device

- Primary device: BOOX Note Air5 C e-ink tablet using Chrome and BOOX pen input.
- Secondary environment: laptop/desktop browser.
- Priorities: low-latency drawing, reliable stylus behavior, clear controls, and local persistence.
- Design should be high contrast, calm, e-ink friendly, and visually simple.
- Avoid interactions that depend on hover. BOOX pen hover can trigger accidentally.

## Product Naming

- Visible product name: "Dino Draw".
- Code and file-format identifiers generally use "DinoDraw" or `dinodraw`.

## Core Workflows

- Open the app to the Documents screen.
- Create a new local document.
- Import an existing DinoDraw JSON document.
- Open, rename, export, save as PNG, save as PDF, or delete a document from the document list.
- Draw with pen presets.
- Use Draw Behind/highlighter presets under normal ink.
- Erase normal and Draw Behind layers together.
- Add, insert, delete, and navigate pages.
- Set per-page backgrounds such as blank, ruled, or graph.
- Export editable DinoDraw files or flattened shareable PNG/PDF outputs.

## UX Principles

- Build the actual app experience first, not a marketing page.
- Keep controls clear and chunky enough for pen use.
- Prefer simple black-and-white UI with carefully limited color for ink swatches and drawing content.
- Keep spacing restrained and tablet-friendly.
- Use small radii around 6 to 8px.
- Avoid decorative gradients, orbs, hover-only help, and visual effects that do not help drawing.
- Text and controls must fit on smaller tablet screens without overlap.

## Durable Temp Ingestion

The `temp/` directory is an ignored scratch inbox for screenshots, design notes, and improvement instructions. Agents should analyze temp files when the user points to them, then extract durable conclusions into the wiki when they affect product behavior, design direction, BOOX observations, bugs, or implementation constraints.
