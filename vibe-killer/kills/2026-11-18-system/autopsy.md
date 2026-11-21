# Autopsy — /system

**Source:** `src/app/system/page.tsx` + its block in `src/app/globals.css` (HEAD `b31cf7b`) · **Fidelity:** full source, plus rendered DOM (headless Chrome via Playwright, `npm run dev` :3002)
**System:** Pastis @ v2.3.5 · **Profile:** `vibe-killer/SYSTEM.md` (verified 2026-11-18)
**Posture:** A, so the system's rules win
**Date:** 2026-11-18

> `/system` is the portfolio's showcase for its own design system: colour,
> type, buttons and a token table. It used zero Pastis components. Every
> specimen was hand-built and every value was hand-typed. Pastis already ships
> `pastis-token-swatch` and `pastis-spec-table` for exactly this job. Under
> posture A the page now shows the system's own specimen views, reading live
> values, and stops hand-copying them.

---

## Tells found

**7 of 30.** This page wasn't prompted into existence. It's a hand-built page
that went around its own system, and the tells are about that, not about AI.

| Tell | Where | What it means |
|---|---|---|
| Hardcoded hex palette | `page.tsx:8-28` (13 values) | Token values typed by hand. **6 of 8 swatch hexes are stale** vs `pastis-tokens.css` (e.g. `--bg-primary` listed `#0d0d0d`, ships `#110d0a`) |
| Repeated markup, no abstraction | `.swatch` ×8, `.type-sample` ×4 | Two specimen patterns the system already has as components |
| Hand-rolled buttons | `.system-btn` ×3 | The "Components" section demoed no components |
| `<span>` posing as a button | "Link button ↗" | Non-interactive element styled as an interactive one |
| `transition: all` | `.system-btn` | Hover affordance the button component already owns |
| Class-name collision | `.swatch` | Collides with Lab's `.swatch` (32px circle). **Verified in render:** colour chips overlapped their labels ("…round", "…0d" clipped) |
| Inline style with hardcoded rem | `page.tsx:93` | Muted intro text that the prose layer already styles |

## Counts (before)

| Measure | Count | How |
|---|---|---|
| Hardcoded color values | 13 | measured (`grep -oE`) |
| Hardcoded lengths | 42 (38 CSS + 4 inline) | measured |
| Bespoke class names | 20 | measured (excludes shared `prose`, `project-back-link`, `system-eyebrow`) |
| Font declarations | 4 (`font-family: monospace` ×3, `inherit` ×1) | measured |
| Lines of custom CSS | 114 | measured |
| `!important` | 0 | measured |
| Elements with no accessible name | 0 | axe-core 4.x, no violations |
| Heading-level jumps | 0 | rendered outline: h1 → h2 ×4 |

---

## Regions

| # | Region | What it's for | Content it carries | Notes |
|---|---|---|---|---|
| 1 | Back link | Return to work index | "← Work" | Shared site chrome (`/lab`, `/work/*`) |
| 2 | Page header | Name the page | eyebrow "System", h1, intro + GitHub link | Same pattern as `/lab` |
| 3 | Colour | Show the semantic colour tokens | 8 × (name, token, hex) | Hexes stale; render broken by `.swatch` collision |
| 4 | Typography | Show the type scale | 4 × (meta label, sample) | Labels describe *portfolio* sizes (2rem/500, 0.8125rem), not Pastis tokens |
| 5 | Components | Show the button | Primary, Secondary, "Link button ↗" | No Pastis component used |
| 6 | Tokens | Show how tokens ship and what they're for | 1 line of intro, 8 × (token, value, usage) | 5 of 8 values stale |

---

## Mapping

| # | Region | Disposition | Target | Props / slots | Evidence |
|---|---|---|---|---|---|
| 1 | Back link | Keep | — | Site-wide chrome. Converting it here alone would fork it from `/lab` and `/work` | — |
| 2 | Page header | Keep | native `p` + `h1` + `p` in `.prose` | Same header pattern as `/lab`. Pastis has no in-column page header (`pastis-hero` is a full band). Convert site-wide or not at all | [verified] |
| 3a | Section wrappers ×4 | Compose | native `<section aria-labelledby>` + `<h2>` | **First mapping `pastis-section` was overturned after render**, see below | [verified] |
| 3 | Colour swatches | Swap | `pastis-token-swatch` ×8 | `token`, `label`. No slots. Reads the live value | [verified] |
| 3b | Swatch grid | Gap | layout-only `.system-swatches` | No grid component | [verified] |
| 4 | Type samples | Swap | `pastis-spec-table` | `kind="type"`, `tokens` (JSON string), `sample` | [verified] |
| 5 | Buttons | Swap | `pastis-button` ×3 | `variant` primary / secondary / ghost; the third gets `href` + `target="_blank"` | [verified] |
| 5b | Button row | Gap | layout-only `.system-buttons` | No button group | [verified] |
| 6 | Token table | Swap | `pastis-table` via `TokenTable.tsx` | `columns`, `rows` set on a ref after `whenDefined` (repo convention). Values read live | [verified] |

**Dispositions:** 4 swap · 1 compose · 0 template · 0 delete · 2 gap · 2 keep
**Evidence:** 9 verified · 0 reported

### Where the catalog corrected the mapping

| First instinct | Catalog said | After rendering |
|---|---|---|
| `pastis-section label="Colour"` for the small caps heading | Source: `label` renders a pill chip with a yellow border, not an eyebrow. Use `heading` | **Confirmed** the chip trap, but… |
| `pastis-section heading="…" padding="sm" background="none"` | Section has `heading`, `padding`, `background="none"`, so it reads as fine for subsections | **Overturned.** It's a page band: fixed `--grid-margin` (40px) side padding indented every section 40px off the H1's edge, and its h2 is 22–40px uppercase mono, out of scale with the label-style h2s on `/lab` and `/about`. Native `<section>` + `.prose h2` used instead |
| Type scale in `pastis-table` (keeps the original labels) | `pastis-spec-table kind="type"` exists for exactly this | **Confirmed with a defect.** The nowrap preview stretched the table to 1450px at a 1280 viewport (1134px at 375). Fixed with a marked `::part(table) { table-layout: fixed }` workaround |
| `pastis-spec-table` for the token table too | One `kind` per table and no usage column, so the "Usage" text would be lost | **Confirmed.** `pastis-table` keeps all three columns |

---

## Token mapping

| Original | Nearest token | Note |
|---|---|---|
| 13 hardcoded hex in data arrays | read live via `getComputedStyle` (swatch, table) | Can't drift anymore |
| `gap: 1rem` (swatches) | `--space-md` | |
| `gap: 0.75rem` (buttons) | `--space-sm` | 12px → 8px; system's grid wins |
| `margin-top: 3.5rem` between sections | `.prose h2` `margin-top: 5rem` (site layer) | Sections now breathe like `/lab` |
| `margin-bottom: 1.25rem` under section label | `--space-lg` (flex gap) | 20px → 24px |
| `font-family: monospace` ×3 | component internals (`--font-family-mono`) | |
| `480px` breakpoint | — | Kept. Media queries can't use custom properties |

---

## Gaps

| What the page needs | Closest existing | Why it doesn't cover it | Proposed |
|---|---|---|---|
| In-column section with heading | `pastis-section` | Built as a full band with fixed side padding and a display-size h2 | A `flush`/`inset` option that drops horizontal padding, plus a `heading-size` axis. Or a separate `pastis-section-header` |
| Grid / auto-fill layout | none (story hand-writes one) | No layout primitives at all | `pastis-grid` (`min-item-width`, `gap` from `--space-*`) |
| Button group | `pastis-button-split` | That's a split button, not a group | `pastis-button-group` (wrap, gap) |
| Spec table that fits its container | `pastis-spec-table` | `.type-sample` is `nowrap` inside an auto-layout table | `table { table-layout: fixed }` in the component |
| Secondary button on light surfaces | `pastis-button variant="secondary"` | `#fc7428` text on paper = **2.45:1** (axe, serious) | A light-mode text token for secondary, e.g. reuse `--text-accent` |
| Live re-read on scroll theme | swatch / spec-table observe `data-theme` only | The portfolio flips token values via `data-scroll-theme` | Observe `style`/any attribute on `<html>`, or expose `refresh()` |

---

## Content flagged for a human

**Content that changed meaning** (posture A consequences, your call):
- **Typography rows.** The original documented the *portfolio's* sizes
  (Display 2rem/500, Body 1rem, Small 0.8125rem, Label 0.6875rem caps). Those
  aren't Pastis tokens: Pastis display is 56px Instrument Serif and there's no
  13px step. The page now shows `--font-size-display / body / body-sm / micro`
  with live values. One sample line ("The quick brown fox") replaces the four
  per-row samples, and the "Selected work" label sample is gone.
- **Swatch and table values.** The 13 typed hex values are gone. The page now
  shows what's actually live, which on this site means the
  `data-scroll-theme="light"` override (e.g. `--bg-primary` = `#f5f2ed`), not
  Pastis's own dark or light theme.
- **"Link button ↗" now links to the Pastis GitHub repo.** The original was a
  non-interactive `<span>`. I pointed it at the only outbound URL already on the
  page. Change or drop `href` if you'd rather it go somewhere else.

**Unverifiable claims:** none.

**Copy tells:** none worth noting.
