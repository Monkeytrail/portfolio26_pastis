# Autopsy — / (home)

**Source:** `src/app/page.tsx`, `src/components/DragScroll.tsx`, and the "HOME PAGE — COLLINS STYLE" block of `src/app/globals.css` (HEAD `b31cf7b`) · **Fidelity:** full source + rendered DOM (headless Chrome, Playwright, `npm run dev` :3002, live Sanity content)
**System:** Pastis @ v2.3.5 · **Profile:** `vibe-killer/SYSTEM.md` (verified 2026-11-18)
**Posture:** A, so the system's rules win
**Date:** 2026-11-18

> The homepage is the recruiter's first screen: who you are, the work, where
> you've been, and the Lab. It used one Pastis component (the button) and
> hand-built everything else, including a drag carousel and its own drag
> script. Pastis ships a `Portfolio/Shelf` story that is this exact carousel.
> Under posture A the page takes Pastis's editorial headline, shelf, project
> card and timeline, and their type and motion along with them.

---

## Tells found

**6 of 30.** These are hand-built tells, not prompt tells.

| Tell | Where | What it means |
|---|---|---|
| Hand-rolled carousel + bespoke drag script | `.hp-grid`, `DragScroll.tsx` (59 lines) | `pastis-shelf` does drag, snap, keyboard, prev/next and progress |
| Hand-rolled project card with hover tilt | `.hp-card*` (7 rules) | `pastis-project-card` has the same tilt, built on motion tokens |
| `outline: none` on the cards | `.hp-card` | **Verified by Tab walk:** 7 cards with no outline. Focus showed only as a tilt |
| Info hidden until hover | `.hp-card-info { opacity: 0 }` | **Verified:** title and year are invisible on touch, where there's no hover |
| Labels that should be headings | `p.hp-section-label` ×3 | Outline jumped h1 → the Lab demos' h2s. "Selected work" and "Experience" had no heading |
| `::part` override fighting the system | `.hp-cta-row pastis-button[variant="ghost"]::part(button)` ×2 | The ghost button's hover was re-skinned per page |
| Non-system font | `.hp-exp-company { font-family: 'Cormorant Garamond' }` | Typeface outside Pastis (Instrument Serif / Inter / JetBrains Mono) |

## Counts (before)

| Measure | Count | How |
|---|---|---|
| Hardcoded color/easing values | 2 (`cubic-bezier` ×2) | measured |
| Hardcoded lengths | 68 in CSS + 2 inline `style={{}}` | measured |
| Bespoke class names | 20 | measured |
| Font declarations | 1 (+ Google Fonts `@import` for Cormorant, site-wide) | measured |
| Lines of custom CSS | 203 | measured |
| Hand-set transitions | 3 | measured |
| `::part` overrides of system components | 2 | measured |
| Focusable elements with no visible focus | 7 | Tab walk |
| Widest prose line | 127 characters | measured at 1280 |
| Heading-level jumps | "Selected work", "Experience", "Lab" not headings | rendered outline |

---

## Regions

| # | Region | What it's for | Content it carries | Notes |
|---|---|---|---|---|
| 1 | Scroll theming | Flip the page light/dark per section as you scroll | `data-scroll-theme` + `ScrollTheme` | Portfolio art direction |
| 2 | Hero headline | Say who this is | optional eyebrow, h1 (Sanity `heroHeadline`) | |
| 3 | Bio | Short intro | `heroSubheadline`, 4 paragraphs via `pre-line` | 127 ch lines |
| 4 | Contact CTAs | Get in touch | copy-email primary button, LinkedIn ghost button | |
| 5 | Work carousel | Browse case studies | 7 × (cover image, title, year) linking to `/work/*` | Full-bleed, staggered, drag |
| 6 | Experience | Career at a glance | 5 × (company, role · period) | Cormorant names |
| 7 | Lab | Show interactive work | `LabGrid` (TokenPlayground, RssReaderDemo) | |

---

## Mapping

| # | Region | Disposition | Target | Props / slots | Evidence |
|---|---|---|---|---|---|
| 1 | Scroll theming | Keep | `ScrollTheme` + `data-scroll-theme` | Deliberate whole-page effect. Pastis's `data-surface="inverse"` does static bands, not scroll-driven flips | [verified] |
| 2 | Hero headline | Swap | `pastis-statement` | `eyebrow`, `size="md"`, h1 in the default slot | [verified] |
| 3 | Bio | Compose | native `<p>` × n in a layout-only stack, `max-width: var(--container-prose)` | Split on blank lines instead of an inline `pre-line` | [verified] |
| 4 | Contact CTAs | Swap (already) | `pastis-button` primary (`copy`) + ghost (`href`) | `::part` override deleted | [verified] |
| 5 | Work carousel | Compose | `pastis-shelf` > `pastis-project-card` ×7 | shelf `label`; card `href`, `heading`, `year`, `size="tall"`; `next/image` in slot `media`; `--pastis-shelf-inset`, `--pastis-project-card-title-lines` | [verified] (story `Portfolio/Shelf`) |
| 6 | Experience | ~~Swap → `pastis-timeline variant="compact"`~~ **Keep** (owner reverted after review) | original `ul.hp-exp` list | Deliberate art direction: Cormorant names, hover-dimming. Heading kept as `<h2>` | — |
| 7 | Lab | Keep | `LabGrid` | Interactive demos, out of scope this run. h2 → h3 for the outline | — |
| — | Section labels ×3 | Gap | native `<h2 class="hp-section-label">` | No eyebrow/label type style | [verified] |
| — | `DragScroll.tsx` | Delete | — | Only used by the homepage. The shelf does it | — |

**Dispositions:** 3 swap · 2 compose · 0 template · 1 delete · 1 gap · 2 keep
**Evidence:** 7 verified · 0 reported

### Where the catalog corrected the mapping

| First instinct | Catalog said | After rendering |
|---|---|---|
| Timeline `tag` = company (it looks like a label) | `tag` renders an `--action-primary` pill: yellow on paper, roughly 1.6:1 | **Confirmed.** Company became `title`, role · period became `date`. Nothing fails contrast |
| Keep the full-bleed breakout in bespoke CSS | Shelf docs: `--pastis-shelf-inset`: "align it with your container" | **Confirmed.** First card lines up with the column edge at 1280; shelf runs edge to edge |
| Accept the shelf's bottom-aligned cards as they are | `--pastis-project-card-title-lines`: "so media bottoms line up across cards" | **Confirmed.** Set to 2, so the one-line "Design System KION" no longer sits lower |
| `aria-labelledby` on every section | Shelf already renders `role="region" aria-label` | **Overturned by axe** (`landmark-unique`): two regions named "Selected work". Dropped it on the work section |

---

## Token mapping

| Original | Nearest token | Note |
|---|---|---|
| `padding: 72px 0 56px` (hero) | `--space-3xl` / `--space-2xl` (64 / 48) | System grid wins |
| `margin-top: 64px` (sections) | `--space-3xl` | exact |
| `margin-bottom: 1.5rem` (label) | `--space-lg` | exact |
| `gap: 0.75rem` (CTAs) | `--space-sm` | 12 → 8 |
| `0 24px 100px` (`.hp`) | `--space-lg` / `--space-4xl` | 100 → 96 |
| `0.75rem / 500 / 0.08em` (label) | `--font-size-caption`, `--font-weight-medium`, `--letter-spacing-wide` (0.05em) | tracking tightens |
| `clamp(2rem, 5vw, 3rem)` Inter 500 (h1) | `--font-size-statement-md` Instrument Serif | **Visible change:** the headline is now serif |
| Bio `0.9375rem`, full width | body default (16px), `--container-prose` (680px) | 127 → 76 ch |
| `cubic-bezier(0.19,1,0.22,1)` 0.8s tilt | inside project card: `--duration-tilt` + `--ease-out-expo` | same curve, now tokenized and reduced-motion aware |
| Cormorant Garamond company names | timeline title (JetBrains Mono, uppercase) | **Visible change** |
| `900px` column, `24px` gutter | no container token matches | Kept (site shell) |

---

## Gaps

| What the page needs | Closest existing | Why it doesn't cover it | Proposed |
|---|---|---|---|
| Small uppercase section label as a real heading | `pastis-section label` (a pill chip); `pastis-statement eyebrow` (only inside a statement) | No standalone eyebrow/label type style. **Second page to hit this** (`/system`'s `.system-eyebrow`) | `pastis-eyebrow` element, or a `.pastis-label` type utility in the tokens CSS |
| Page container / vertical stack | `pastis-section` (full band) | No layout primitives | `pastis-stack`, `pastis-container` |
| Button group | — | (also on `/system`) | `pastis-button-group` |
| Secondary button on paper | `pastis-button variant="secondary"` | 2.45:1, seen here in the Lab playground's "Cancel" | Light-mode text token for secondary |

---

## Content flagged for a human

**Design changes posture A made, your call:**
- **Headline typeface.** Inter 500 became Instrument Serif via `pastis-statement`.
- **Experience list.** The Collins-style two-column list with Cormorant names and
  hover-dimming became Pastis's compact timeline: mono uppercase company, dots,
  vertical rule. It's the same data, and the look changed noticeably.
- **Work cards.** The even-card 58px stagger is gone (shelf bottom-aligns), and
  the corners are `--radius-md` (6px) instead of 1rem. Title and year are now
  always visible, with Instrument Serif titles and a hover arrow.
- **New controls.** The shelf adds a progress bar and ← → buttons under the carousel.
- **Cover images** now have `alt=""`, because the card's heading already names the
  link. Before, every card announced its title twice.

**Unverifiable claims:** "10+ years" in the bio is yours to vouch for. Nothing else.

**Copy tells:** none.
