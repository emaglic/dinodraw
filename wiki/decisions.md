# Decisions

This page captures durable decisions and tradeoffs. Add entries when a choice should guide future work.

## Static, Local-First App

Decision: Dino Draw remains a static local-first app using browser APIs.

Rationale: The target BOOX/tablet workflow benefits from reliability, simple deployment, offline use, and no server dependency.

Implications:

- Avoid backend features unless explicitly requested.
- Keep import/export as local browser operations.
- Avoid adding heavy build tooling or frameworks without a clear user-requested reason.

## Vanilla HTML/CSS/JavaScript

Decision: Keep the app in plain HTML, CSS, and vanilla JavaScript.

Rationale: The codebase is simple, static, and deployed as files. A framework would add weight and compatibility questions for little current benefit.

## Preserve IndexedDB Name

Decision: Keep the IndexedDB database name `booxDrawingDocuments`.

Rationale: Existing local documents may depend on that name. Renaming without migration could make saved documents inaccessible.

## Separate Backgrounds From Ink

Decision: Store and render page backgrounds separately from drawing layers.

Rationale: Users should be able to erase ink without erasing ruled/graph/page backgrounds, and each page can keep its own background.

## Two Drawing Layers

Decision: Use `underLayer` for Draw Behind/highlighter strokes and `layer` for normal ink/shapes.

Rationale: Highlighting should sit under handwriting instead of obscuring it. Export and thumbnails must preserve this layer order.

## No Backendless Google Drive Sync

Decision: Google Drive integration was explored and removed.

Rationale: A backendless public OAuth client can expose API usage to anyone with the deployed app.

Implication: Do not reintroduce Google Drive sync/upload unless the user explicitly asks and accepts the tradeoff.

## Wiki As Durable Project Memory

Decision: Use `wiki/` as committed product and engineering memory, while keeping `temp/` ignored.

Rationale: Future agent sessions can load focused subsystem context instead of repeatedly reading one long instruction file. Temporary screenshots and notes can still inform durable wiki updates.

## Separate Scratch Input And Output

Decision: Use `temp/` for user-provided ephemeral input and `output/` for agent-generated ephemeral output.

Rationale: Screenshots and improvement notes from the user should not be committed wholesale, and generated human-consumable reports or archives should also stay out of durable repo history by default.

Implications:

- Ingest durable conclusions from `temp/` into the wiki when useful.
- Write files into `output/` only when the user explicitly asks for a generated artifact.
- If generated output contains durable project knowledge, summarize the durable parts into the wiki.

## Revisit Material Symbols For Toolbar Icons

Decision: Revisit replacing the current hand-built/Unicode toolbar icons with Google's Material Symbols.

Rationale: Material Symbols would let the user choose icon names from the Google icons page and have agents map those names directly into Dino Draw controls.

Implementation notes:

- Prefer a local/self-hosted package such as `material-symbols` or `@material-symbols/font-400` so icon rendering continues to work offline.
- Keep the first pass focused on toolbar icons and temporary action-toolbar controls.
- Avoid changing tool behavior while swapping icons.
