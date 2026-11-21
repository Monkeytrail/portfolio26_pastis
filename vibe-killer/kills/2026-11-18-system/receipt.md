# Receipt — /system

**13 hardcoded colours, 20 bespoke class names and 114 lines of page CSS
became 13 Pastis component instances (4 components), 3 spacing tokens and 18
lines of layout-only CSS. Six of the old hand-typed token values were wrong,
and now none can be.**

**System:** Pastis @ v2.3.5 · **Posture:** A, so the system's rules win · **Date:** 2026-11-18
**Converted page:** `src/app/system/page.tsx` (+ `src/components/TokenTable.tsx`) · **Autopsy:** `./autopsy.md`

---

## Before / after

| Measure | Before | After |
|---|---|---|
| Bespoke CSS class names | 20 | 3 (layout only, all gaps) |
| Hardcoded color values | 13 | 0 |
| Hardcoded lengths | 42 | 1 (the `480px` media query) |
| Font declarations | 4 | 0 |
| Lines of custom CSS | 114 | 18 |
| Inline `style={{}}` | 2 | 0 |
| Design system components | 0 | 4 types, 13 instances |
| Design tokens in page CSS | 9 | 3 (`--space-sm/md/lg`). Everything else lives inside the components |
| Stale documented values | 11 (6 swatch, 5 table) | 0 (read live) |
| Themeable | values frozen as text | yes. Swatches and table show whatever's live |

Not 0 in the after column, named in "Still bespoke" below: 3 classes, 1 length, 18 lines.

---

## Components used

| Component | Count |
|---|---|
| `pastis-token-swatch` | 8 |
| `pastis-button` | 3 |
| `pastis-spec-table` | 1 |
| `pastis-table` | 1 |

**Evidence:** 9 of 9 mappings verified against the Pastis source in `node_modules/pastis-design-system/src` (v2.3.5), cross-checked against the shipped `public/pastis.js`.

---

## Accessibility fixed on the way through

| Was | Now |
|---|---|
| "Link button ↗" was a `<span>` styled as a button: not focusable, goes nowhere | Real link (`pastis-button href`), keyboard reachable, `rel="noopener noreferrer"` set by the component |
| Two demo `<button>`s with bespoke focus (browser default only) | `pastis-button` focus treatment |
| `↗` read aloud as "north east arrow" (×2) | `aria-hidden="true"` on the glyph |
| Sections had no accessible name | `<section aria-labelledby>` → each h2 |
| Colour chips overlapping their own labels (`.swatch` collision) | Fixed. Swatch is now a component with encapsulated styles |
| Widest prose line 96 characters | 84 (the shared `.prose` intro paragraph, untouched; see below) |

**New a11y failure introduced:** the Pastis `secondary` button. See "Still bespoke".

---

## Still bespoke

| What | Why | What's there now | Proposed upstream |
|---|---|---|---|
| `.system-section` (flex column, `--space-lg` gap) + `.system-section > p` | No in-column section component. `pastis-section` was tried and overturned (40px indent, display-size h2) | 2 layout-only rules, tokens only | `pastis-section` inset/flush option or a section-header component |
| `.system-swatches` (4-col grid, 2-col under 480px) | No grid component | 1 grid rule + 1 media query | `pastis-grid` |
| `.system-buttons` (flex wrap, `--space-sm`) | No button group | 1 rule | `pastis-button-group` |
| `pastis-spec-table::part(table) { table-layout: fixed }` | **Component bug:** nowrap type preview overflowed the page (1450px at 1280) | Marked `VIBE-KILLER GAP` override | Move `table-layout: fixed` into `pastis-spec-table` |
| Secondary button contrast **2.45:1** (axe: color-contrast, serious) | `#fc7428` text on the paper surface. Pastis's own light theme fails the same way | Left as is. Can't be fixed from the page without an override | Light-mode text token for `secondary` |
| Site shell: `.prose`, `.project-back-link`, `.system-eyebrow`, h1 | Shared with `/lab`, `/about`, `/work/*` | Unchanged | Convert site-wide, not per page |

---

## Content a human needs to decide about

- **Typography now documents Pastis tokens, not the portfolio's type styles.**
  The old rows (2rem/500, 0.8125rem, caps label) matched no Pastis token. If
  the section is meant to show the *portfolio's* type, posture A got that one
  wrong. Say so and I'll put it back.
- **Values are live, so they show the portfolio's light scroll-theme override**
  (`--bg-primary` `#f5f2ed`), not Pastis's default dark (`#110d0a`).
- **"Link button ↗" now points at the Pastis GitHub repo.**

No unverifiable claims on the page.

---

## What was proven, and what wasn't

| Check | Result |
|---|---|
| Renderer confirmed | innerWidth 1280 / 375 as requested. 13 Pastis elements found, matching source. Second render reflected the edits (section count changed) |
| Rendered in a browser | yes: headless Chrome (Playwright), 1280 and 375. No 768 pass |
| Human visual review | **no human review yet.** Screenshots in the scratchpad |
| Catalog corrections | 3 confirmed · 1 overturned (`pastis-section`) |
| Line length | widest prose 84 ch at 1280 (the intro paragraph in shared `.prose`, 800px max-width). Over the ~80 target. Site-wide fix |
| Horizontal overflow | none at 1280 or 375 after the spec-table fix (scrollWidth = innerWidth) |
| Spacing | section heading → content gap is 24px (`--space-lg`). No 0px sibling gaps observed |
| Deterministic counts | measured with `grep -oE`, HEAD vs working tree |
| Contrast | axe measured: 1 serious (Pastis secondary button). Everything else passes |
| System validator | no validator exists for Pastis |
| Automated a11y check | axe-core (`@axe-core/playwright`) on `main`: before 0 violations, after 1 (above) |
| Typecheck | `npx tsc --noEmit` clean |
| No-JS / SSR | **not proven.** Swatches, spec table and token table render only after `pastis.js` loads (`afterInteractive`). The old page was fully server-rendered |

Also seen but out of scope: the portfolio's `data-scroll-theme="light"` block
in `globals.css` overrides `--border-default` but not `--border-subtle`, so
Pastis table dividers render near-black (`#221c17`) on paper. That affects
every page using a Pastis component with subtle borders.

---

## Related course lessons

- **Six gaps found in one page** → [Station 1: Coverage & Gaps](https://learn.bradfrost.com/lessons/76494809) (AI and Design Systems). Shows how missing building blocks, like the grid and button group here, get catalogued and turned into a backlog. *Paid course; enrollment required.*
- **The `pastis-section` correction that rendering overturned** → [Best Practices for Adopting Design Tokens in Existing Components](https://learn.bradfrost.com/lessons/63864026) (Subatomic). Makes the case for checking rendered results, not just source, when swapping values in. *Paid course; enrollment required.*

## What to do next

1. Look at `/system` at desktop and phone width, and decide on the Typography
   content change. It's the one place posture A changed what the page *says*.
2. Decide whether to file the six Pastis issues (drafted above). The spec-table
   `table-layout: fixed` and secondary-button contrast fixes are one-liners in
   your Pastis repo. Ship them and the page's override can go.
3. Add `--border-subtle` to the scroll-theme override in `globals.css`, a
   one-line site-wide fix.
