# Receipt — / (home)

**203 lines of homepage CSS, 20 bespoke class names, 2 `::part` overrides and a
59-line drag script became 5 Pastis components and 43 lines of layout-only,
tokenized CSS. Seven project cards that had no focus outline now have one.**

> **Revised after review (2026-11-18):** the owner asked for the Experience
> section to be reverted. It's back to the original Collins-style list
> (`.hp-exp*`, Cormorant company names, hover-dimming), now a **Keep**:
> deliberate art direction. `Timeline.tsx` was removed. The section label stays
> an `<h2>` (same class, no visual change). The counts below were taken before
> the revert: add back roughly 40 lines of CSS, 5 classes, 1 font declaration
> and 1 transition, and subtract `pastis-timeline`.
>
> **Also restored on request:** the work-card stagger. Odd cards get
> `margin-bottom: var(--space-3xl)` on the shelf (64px, was 58px), which is one
> more layout-only rule under "Still bespoke". A shelf `stagger-offset` option
> upstream would remove it.

**System:** Pastis @ v2.3.5 · **Posture:** A, so the system's rules win · **Date:** 2026-11-18
**Converted page:** `src/app/page.tsx` (+ new `src/components/Timeline.tsx`, deleted `src/components/DragScroll.tsx`, `LabGrid.tsx` h2→h3) · **Autopsy:** `./autopsy.md`

---

## Before / after

| Measure | Before | After |
|---|---|---|
| Bespoke CSS class names | 20 | 7 (layout and label only) |
| Hardcoded color/easing values | 2 | 0 |
| Hardcoded lengths | 68 + 2 inline | 4 (`900px` column, `100vw`/`50vw` breakout math) |
| Font declarations | 1 (Cormorant) | 0 |
| Lines of custom CSS | 203 | 43 |
| `::part` overrides of Pastis | 2 | 0 |
| Hand-set transitions | 3 | 0 |
| Bespoke JS for UI behaviour | 59 lines (`DragScroll`) | 0 |
| Pastis component types on the page (own markup) | 1 | 5 |
| Pastis instances on the page (own markup) | 2 | 11 (statement, 2 buttons, shelf, 7 cards, timeline) |
| Themeable | partly (tokens, except the Cormorant and easing literals) | yes |

---

## Components used

| Component | Count |
|---|---|
| `pastis-project-card` | 7 |
| `pastis-button` | 2 |
| `pastis-statement` | 1 |
| `pastis-shelf` | 1 |
| `pastis-timeline` | 1 |

**Evidence:** 7 of 7 mappings verified against Pastis source (v2.3.5); the shelf/card composition copies the `Portfolio/Shelf` story.

---

## Accessibility fixed on the way through

| Was | Now |
|---|---|
| 7 project cards with `outline: none` | 2px `--border-focus` outline on every card (Tab walk) |
| Card title and year at `opacity: 0` until hover, so never visible on touch | Always visible |
| Carousel reachable only by mouse drag or trackpad | Keyboard-reachable prev/next buttons, a named region, and progress |
| "Selected work" / "Experience" / "Lab" were `<p>`s; outline went h1 → h2 (Lab demos) | h1 → h2 ×3 → h3; cards are h3 |
| Cover `alt` repeated the link's title (announced twice) | `alt=""`, link named by its heading |
| Bio at 127 characters per line | 76 (`--container-prose`) |
| Bio was one `<p>` with `white-space: pre-line` | Real paragraphs |
| `↗` read aloud on the LinkedIn button | `aria-hidden` |
| Hand-set 0.8s tilt with no reduced-motion guard | Project card's tilt respects `prefers-reduced-motion` |
| — | **Introduced then fixed:** duplicate "Selected work" landmark (axe `landmark-unique`) |

---

## Still bespoke

| What | Why | What's there now | Proposed upstream |
|---|---|---|---|
| `.hp-section-label` (on real h2s) | No eyebrow/label type style. Second page to need it | Tokens only: caption size, medium, wide tracking, tertiary | `pastis-eyebrow` / label utility |
| `.hp`, `.hp-hero`, `.hp-bio`, `.hp-section` | No container or stack primitives | Layout only, `--space-*` and `--container-prose` | `pastis-stack`, `pastis-container` |
| `.hp-cta-row` | No button group | flex wrap, `--space-sm` | `pastis-button-group` |
| `.hp-work-section pastis-shelf` breakout + `--pastis-shelf-inset` calc with `900px` | The column width isn't a token | `margin-inline: calc(50% - 50vw)`, documented shelf knob | A `--container-*` token for the site column |
| `ScrollTheme` + `data-scroll-theme` | Deliberate effect. Its override block in `globals.css` hardcodes 7 hex values and misses `--border-subtle` | Unchanged | Scroll-driven surface switching, or at least complete the override |
| Lab demos (`TokenPlayground`, `RssReaderDemo`) | Out of scope this run | Unchanged. The "Cancel" there fails contrast (Pastis `secondary`, 2.45:1) | Secondary text token |

---

## Content a human needs to decide about

- **The look changed in five visible places:** serif headline, timeline instead
  of the Cormorant list, no card stagger, 6px card radius instead of 16px, and
  shelf controls. That's posture A doing its job. If any one of them is a
  signature you want to keep, say which, and I'll either find the system's way to
  do it or write it up as a gap.
- "10+ years" is the only claim on the page. Yours to vouch for.

---

## What was proven, and what wasn't

| Check | Result |
|---|---|
| Renderer confirmed | innerWidth 1280 / 375 as requested. 7 project cards = 7 featured projects from Sanity. Re-render reflected each edit |
| Rendered in a browser | yes: headless Chrome at 1280 and 375. No 768 pass |
| Human visual review | **no human review yet** |
| Catalog corrections | 3 confirmed · 1 overturned (by axe) |
| Line length | 76 ch at 1280 (was 127) |
| Horizontal overflow | none at 1280 / 375 |
| Spacing | no 0px sibling gaps seen. Hero stack 24px, bio paragraphs 16px |
| Keyboard | Tab walk: email → LinkedIn → 7 cards, all with a solid 2px outline. Shelf ← → reachable |
| Drag / snap / scroll themes | **not exercised** in headless. Mouse drag and the scroll-driven light→dark flip need a person with a mouse |
| Deterministic counts | measured, HEAD vs working tree |
| Contrast | axe: 1 serious, in the Lab demo (pre-existing, Pastis `secondary`) |
| System validator | none exists |
| Automated a11y check | axe-core on `main`: before 1 (same Lab button), after 1 (same) |
| Typecheck | `npx tsc --noEmit` clean |
| No-JS / SSR | **regressed.** Timeline items are set client-side, and cards render once `pastis.js` loads. Before, the experience list and cards were server HTML |

---

## Related course lessons

- **Shelf + card + slotted `next/image`, statement with a slotted h1** → [Component Composition](https://learn.bradfrost.com/lessons/75693040) (Atomic Design Certification Course). It's about slots beating ever-growing props, which is why the h1 and the cover image could be dropped in as children with nothing hand-built. *Paid course; enrollment required.*

## What to do next

1. Scroll the homepage yourself, with a mouse, at desktop and phone width. Check
   the drag, the snap, the light→dark flip into Experience, and the five visible
   design changes.
2. Two gaps now repeat across both converted pages: the eyebrow/label type style
   and the button group. Those are the strongest candidates to add to Pastis first.
3. Nothing is committed. `/system` and `/` are both sitting on `content_update`
   as working-tree changes.
