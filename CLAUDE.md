# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Next.js dev server on **port 3002** (not the default 3000)
- `npm run build` — production build
- `npm run start` — run the production build
- No lint, typecheck, or test scripts are configured in `package.json`. Use `npx tsc --noEmit` for a manual typecheck if needed.
- Sanity Studio is not run separately — it's mounted inside the Next app at `/studio` (see Architecture).
- One-off content scripts live in `scripts/` (e.g. `scripts/upload-projects.mjs`) and are run directly with `node`, e.g. `SANITY_API_TOKEN=... node scripts/upload-projects.mjs`. They require a `SANITY_API_TOKEN` env var with write access to the Sanity dataset.

## Architecture

This is a Next.js (App Router) portfolio site content-managed via **Sanity**, embedded in the same repo/deployment rather than as a separate service.

- **Sanity project config is hardcoded**, not env-driven: `projectId: 'p1xxvps4'`, `dataset: 'production'` appear in `sanity/lib/client.ts`, `sanity.config.ts`, `sanity.cli.ts`, and `scripts/*.mjs`. There is no `.env` file — if the target project/dataset ever changes, all of these need updating together.
- **Studio is embedded**: `src/app/studio/[[...index]]/page.tsx` mounts the Sanity Studio UI at `/studio` using the schema from `sanity/schemaTypes/`. Content editors use this route directly; there's no separate Studio deployment.
- **Data flow**: pages are async Server Components that call `client.fetch(query)` directly (from `sanity/lib/client.ts`) using GROQ queries centralized in `sanity/lib/queries.ts`. There is no API layer/route handlers in between — every page fetches Sanity content inline in the component, each wrapped in its own `try {} catch {}` so a Sanity outage degrades to `null`/`[]` data rather than a hard error.
- **Schema ↔ query coupling**: Sanity document shape is defined in `sanity/schemaTypes/{project,about,siteSettings}.ts`; the corresponding GROQ projections in `sanity/lib/queries.ts` must be kept in sync manually (no codegen) — adding a field to a schema does nothing until the relevant query also selects it.
- **Images**: Sanity image references are resolved to URLs via `urlForImage()` in `sanity/lib/image.ts`, then rendered with `next/image`. `next.config.ts` allowlists `cdn.sanity.io` as a remote image host — any other image source needs to be added there.
- **Content model**: `project` documents support a flexible `detailedContent` array of typed blocks (`text`, `heading`, `quote`, `image`, `gallery`, `results`); rendering logic for each block type lives in the `ContentBlock` switch in `src/app/work/[slug]/page.tsx`. Adding a new block type requires updating both the schema (`sanity/schemaTypes/project.ts`) and this switch.
- **Static params**: `/work/[slug]` pre-renders known project slugs via `generateStaticParams()` sourced from `projectSlugsQuery`.
- **Pastis design system**: `public/pastis.js` is a pre-built (minified, vendored) Lit-based web component bundle providing custom elements like `<pastis-nav>`, `<pastis-theme-toggle>`, `<pastis-button>`. It's loaded via `next/script` in `src/app/layout.tsx` and consumed from React components (e.g. `src/components/Nav.tsx`) by setting DOM properties on refs after `customElements.whenDefined(...)` resolves, and by listening for custom DOM events (e.g. `pastis-theme-change`). This file is a build artifact, not hand-written source — don't hand-edit it.
- **Theme**: `src/context/ThemeContext.tsx` manages a `data-theme` attribute on `<html>`, synced with the `pastis-theme-toggle` component via the `pastis-theme-change` custom event and persisted to `localStorage`. **Light mode is currently force-disabled** — both `ThemeProvider` and the inline script in `layout.tsx` hardcode `theme: 'dark'`; the original dynamic (localStorage/`prefers-color-scheme`) logic is preserved in comments at both call sites for when light mode is re-enabled.
- **Path aliases**: `@/*` → `src/*`, `@/sanity/*` → `sanity/*` (see `tsconfig.json`).
