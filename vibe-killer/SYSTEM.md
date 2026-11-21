---
system: Pastis
version: "v2.3.5 (git tag; package.json inside the tag still says 2.1.0)"
naming: web-components
tag_style: "<pastis-button>"
token_prefix: "-- (unprefixed: --bg-*, --text-*, --action-*, --space-*, --radius-*, --font-*)"
catalog_source: node_modules/pastis-design-system/src/components/*/pastis-*.js (+ *.stories.js)
catalog_rung: repo
runtime_tested: true
verified_on: 2026-11-18
---

# Pastis — vibe-killer profile

Lit web-component library by Jeroen van Ginneken, consumed by this portfolio
as a git dependency (`github:Monkeytrail/pastis-design-system#v2.3.5`) and
copied into `public/` by `scripts/sync-pastis.mjs` on `npm install`. 45
components, one bundle, no MCP server, no manifest, no validator.

---

## 1. Catalog access

**Rung that answered:** 3, the repo on disk:
`node_modules/pastis-design-system/src/components/<name>/pastis-<name>.js`,
with stories alongside. There's no `custom-elements.json` (rung 2).

**Proof:** read `pastis-token-swatch.js`, which has props `token` and `label`,
no slots, and reads the live value with `getComputedStyle(document.documentElement)`.
Cross-checked that `public/pastis.js` registers the same tag
(`customElements.define(\`pastis-token-swatch\``) and that it's byte-identical
to `dist/pastis.js`.

Everything below is `[verified]` unless tagged otherwise.

---

## 2. Runtime (how a page loads this system)

**Package:** `pastis-design-system` @ `v2.3.5` (git tag, pinned in `package.json`).

**Load order** (already wired in `src/app/layout.tsx`):

```html
<link rel="stylesheet" href="/pastis-tokens.css">   <!-- tokens; @imports Instrument Serif, Inter, JetBrains Mono from Google Fonts -->
<!-- globals.css (portfolio layer) -->
<script src="/pastis.js" strategy="afterInteractive"></script>  <!-- all components, one bundle -->
```

**Theme activation:** `data-theme="dark" | "light"` on `<html>`.
`[data-surface="inverse"]` flips a subtree. **This portfolio also sets
`data-scroll-theme="light"` on `<html>`, and `globals.css` redefines `--bg-*`,
`--text-*` and `--border-default` with hardcoded hex under that attribute.**
Components read those overridden values.

**Fonts:** shipped via `@import` inside `pastis-tokens.css`. No separate step.

**Light-DOM stylesheets:** `pastis-statement em` rule lives in the tokens CSS.

**React integration (repo convention):** array or object props are set on a
ref after `customElements.whenDefined(tag)` (see `ExperienceTimeline.tsx`).
`pastis.js` loads `afterInteractive`, so React can't be relied on to set
properties during hydration. `pastis-spec-table` accepts JSON strings for
`tokens`, so it's safe as a plain attribute. **`pastis-table` doesn't**: it
calls `.map` on `columns`/`rows`, so it needs the ref pattern.

**Tested:** yes. Rendered in headless Chrome 1280/375 via Playwright against
`npm run dev` on :3002.

---

## 3. Vocabulary

| Need | Component | Props | Slots / children | Required wrapper | Evidence |
|---|---|---|---|---|---|
| Page shell | unmapped | (site uses `.prose`) | | | [verified] |
| Header / nav | `pastis-nav` | `brand`, `sticky`, `variant`; items via ref | | | [verified] |
| Footer | `pastis-footer` | `brand`, `tagline`, `copyright`, `variant` | | | [verified] |
| Section / band | `pastis-section` | `label` (renders a **chip**), `heading` (h2), `subheading`, `align`, `padding` sm/md/lg/none, `background` primary/card/elevated/none, `has-divider`, `max-width` | default; `heading`, `subheading` (used only when the prop is empty) | | [verified] |
| Layout container / grid / grid item | unmapped | | | | [verified] |
| Heading / prose / text link / list | unmapped (native HTML) | | | | [verified] |
| Icon | unmapped | | | | [verified] |
| Button | `pastis-button` | `variant` primary/secondary/ghost/destructive, `size` sm/md/lg, `disabled`, `loading`, `href` (renders `<a>`), `target`, `copy` | default | | [verified] |
| Button group | unmapped (`pastis-button-split` is a split button, not a group) | | | | [verified] |
| Card | `pastis-card` | `variant`, `hoverable`, `clickable`, `padding` | | | [verified] |
| Badge / tag | `pastis-badge`, `pastis-tag` | `variant`, `size` | default | | [verified] |
| Hero / page header | `pastis-hero` | `heading`, `subheading`, `cta`, `badge`, `variant`, `align`, `image`… | `heading`, `subheading`, `cta`, `image` | | [verified] |
| Editorial headline | `pastis-statement` | `eyebrow`, `size` md/lg/xl, `reveal` | default | | [verified] |
| Table (data) | `pastis-table` | `columns` [{key,label}], `rows`, `striped`, `hoverable`, `selectable`, `loading`, `emptyText` | none | | [verified] |
| Token swatch | `pastis-token-swatch` | `token`, `label` | none | | [verified] |
| Token spec table | `pastis-spec-table` | `tokens` (array or JSON string), `kind` type/space/radius/motion/color, `caption`, `sample` | none | | [verified] |
| Form fields | `pastis-input`, `-checkbox`, `-radio`, `-toggle`, `-dropdown`, `-search`, `-file-upload` | | | | [verified] |
| Alert / notice | `pastis-alert`, `pastis-toast` | | | | [verified] |
| Modal / drawer | `pastis-modal`, `pastis-drawer` | | | | [verified] |
| Tabs / accordion | `pastis-tabs`, `pastis-accordion` | | | | [verified] |

### Page templates
None.

### Canonical compositions
From `pastis-token-swatch.stories.js` (the story hand-writes its own grid,
because there's no grid component):

```html
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:16px;max-width:900px">
  <pastis-token-swatch token="--bg-primary" label="Background"></pastis-token-swatch>
</div>
```

From `pastis-spec-table.stories.js`:

```html
<pastis-spec-table kind="type" caption="Type scale" tokens='["--font-size-h3","--font-size-body"]'></pastis-spec-table>
```

---

## 4. Tokens

**Prefix:** none. Families are `--color-*` / `--gray-*` (primitive) and
`--bg-*`, `--text-*`, `--border-*`, `--action-*`, `--status-*`, `--shadow-*`
(semantic), plus `--space-*`, `--radius-*`, `--font-*`, `--duration-*`,
`--ease-*`, `--transition-*`, `--container-*`.

**Which tier consumers may use:** semantic. Primitives are public but
theming only remaps the semantic tier.

| Family | Pattern | Example |
|---|---|---|
| Background | `--bg-*` | `--bg-primary`, `--bg-card` |
| Content | `--text-*` | `--text-tertiary` |
| Border | `--border-*` | `--border-default` |
| Spacing | `--space-xs…5xl` | `--space-md` (16px) |
| Radius | `--radius-*` | `--radius-md` (6px) |
| Shadow | `--shadow-sm…xl` (hard offset) | |
| Type | `--font-size-*`, `--font-family-*`, `--font-weight-*` | |

---

## 5. The rules

From the system's `claude.md`: no hardcoded color/spacing/radius/shadow values,
an 8pt grid, WCAG 2.2 AA, and 24×24px minimum targets. Spacing doctrine is
unstated `[reported: none written]`. Components own their internal padding,
and the parent owns gaps between them.

**Don'ts worth remembering:**
- `pastis-section`'s `label` is a pill chip, not an eyebrow. Don't use it
  for a kicker.
- `pastis-table` cells are mono and its headers are uppercase. It's a data
  table, not prose.

---

## 6. Validation

**Command:** none. No validator, linter rule set or manifest. Receipts lean
on grep counts plus axe-core.

---

## 7. Known gaps

- Layout: no grid, stack, cluster or container component (the swatch story
  hand-writes one).
- No button group.
- No page header for an in-column title. `pastis-hero` is a full band.
- `pastis-spec-table` has no description/usage column and one `kind` per table.
- `pastis-token-swatch` and `pastis-spec-table` re-read on `data-theme`
  only, not on other attributes that change token values.
- No eyebrow / small-label type style outside `pastis-statement`. Hit on
  `/system` and `/` (2 of 2 pages).
- `pastis-timeline` `tag` renders `--action-primary` text, which fails contrast
  on the portfolio's paper surface. `pastis-timeline` also has no JSON-string
  guard for `items`, so use the ref pattern (as in `ExperienceTimeline.tsx`).
  The owner prefers the bespoke Collins-style experience list on `/` over the
  compact timeline, so don't re-propose it there.

## Canonical composition: project shelf (`Portfolio/Shelf` story)

```html
<pastis-shelf label="Selected work">
  <pastis-project-card href="…" heading="…" year="…" size="tall">
    <img slot="media" …>   <!-- or image="…" -->
  </pastis-project-card>
</pastis-shelf>
```

Consumer knobs (documented custom properties, not overrides):
`--pastis-shelf-inset`, `--pastis-shelf-item-width`, `--pastis-shelf-gap`,
`--pastis-project-card-ratio`, `--pastis-project-card-title-lines`,
`--pastis-project-card-summary-lines`. The shelf renders `role="region"
aria-label={label}`, so don't name its wrapping section the same.
