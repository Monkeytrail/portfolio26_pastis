'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { contrastRatio } from '@/lib/contrast';

const ACCENTS = [
  { name: 'Yellow', value: '#fcba28' },
  { name: 'Orange', value: '#fc7428' },
  { name: 'Pink', value: '#f38ba3' },
  { name: 'Green', value: '#0ba95b' },
  { name: 'Blue', value: '#12b5e5' },
  { name: 'Purple', value: '#7b5ea7' },
];

function labelColorFor(accent: string) {
  const dark = '#110d0a';
  const light = '#ffffff';
  return contrastRatio(accent, dark) >= contrastRatio(accent, light) ? dark : light;
}

const SAMPLE_OPTIONS = [
  { label: 'Option one', value: 'one' },
  { label: 'Option two', value: 'two' },
  { label: 'Option three', value: 'three' },
];

// Overlays (modal, drawer, toast, cookie banner), page chrome (nav, footer, hero, section)
// and the theme toggle are left out: they escape the preview box or restyle the whole site.
const PREVIEWS: Record<string, () => React.ReactNode> = {
  'pastis-accordion': () => (
    <pastis-accordion
      items={[
        { id: 'tokens', title: 'What are design tokens?', content: 'Named values for colour, spacing, radius and motion that every component reads from.' },
        { id: 'theme', title: 'How do I theme it?', content: 'Override the CSS custom properties. Every component follows.' },
      ]}
    />
  ),
  'pastis-alert': () => (
    <>
      <pastis-alert variant="info" title="Heads up">Tokens changed on this surface.</pastis-alert>
      <pastis-alert variant="success" title="Saved">All changes are live.</pastis-alert>
    </>
  ),
  'pastis-avatar': () => (
    <div className="lab-preview-row">
      <pastis-avatar name="Ada Lovelace" size="lg" status="online" />
      <pastis-avatar name="Alan Turing" status="away" />
      <pastis-avatar name="Grace Hopper" size="sm" shape="square" />
    </div>
  ),
  'pastis-badge': () => (
    <div className="lab-preview-row">
      <pastis-badge variant="primary">New</pastis-badge>
      <pastis-badge>Default</pastis-badge>
      <pastis-badge variant="success">Active</pastis-badge>
    </div>
  ),
  'pastis-breadcrumb': () => (
    <pastis-breadcrumb
      items={[
        { id: 'home', label: 'Home', href: '#' },
        { id: 'lab', label: 'Lab', href: '#' },
        { id: 'tokens', label: 'Token playground' },
      ]}
    />
  ),
  'pastis-button': () => (
    <div className="lab-preview-row">
      <pastis-button variant="primary">Save changes</pastis-button>
      <pastis-button variant="secondary">Cancel</pastis-button>
      <pastis-button variant="ghost">Ghost</pastis-button>
    </div>
  ),
  'pastis-card': () => (
    <pastis-card hoverable>
      <h3 slot="header" style={{ margin: 0 }}>Card title</h3>
      <p style={{ margin: 0 }}>The accent comes straight from the tokens.</p>
    </pastis-card>
  ),
  'pastis-checkbox': () => (
    <>
      <pastis-checkbox label="Remember me" checked />
      <pastis-checkbox label="Partially selected" indeterminate />
      <pastis-checkbox label="Unchecked" />
    </>
  ),
  'pastis-code-block': () => (
    <pastis-code-block filename="tokens.css" language="css" copyable code={':root {\n  --action-primary: #fcba28;\n}'} />
  ),
  'pastis-divider': () => (
    <>
      <pastis-divider />
      <pastis-divider label="Or" />
      <pastis-divider variant="dashed" />
    </>
  ),
  'pastis-dropdown': () => <pastis-dropdown label="Pick an option" placeholder="Select…" options={SAMPLE_OPTIONS} />,
  'pastis-empty-state': () => (
    <pastis-empty-state icon="📭" heading="Nothing here yet" body="Create your first item to get started." cta="Create item" />
  ),
  'pastis-file-upload': () => <pastis-file-upload label="Attachments" helper="PNG or JPG, up to 5MB" />,
  'pastis-filter-chip': () => (
    <div className="lab-preview-row">
      <pastis-filter-chip label="All" value="all" selected count={42} />
      <pastis-filter-chip label="Active" value="active" count={12} />
      <pastis-filter-chip label="Archived" value="archived" removable />
    </div>
  ),
  'pastis-input': () => <pastis-input label="Email address" placeholder="you@example.com" />,
  'pastis-pagination': () => <pastis-pagination total={120} page={3} page-size={10} />,
  'pastis-progress': () => (
    <>
      <pastis-progress value={64} label="Upload" show-value />
      <pastis-progress value={64} variant="ring" show-value />
    </>
  ),
  'pastis-radio': () => (
    <>
      <pastis-radio name="plan" value="monthly" label="Monthly" checked />
      <pastis-radio name="plan" value="yearly" label="Yearly" />
    </>
  ),
  'pastis-search': () => (
    <pastis-search
      label="Search"
      placeholder="Search tokens…"
      suggestions={[{ label: 'action-primary' }, { label: 'border-focus' }, { label: 'action-primary-text' }]}
    />
  ),
  'pastis-skeleton': () => (
    <div className="lab-preview-row">
      <pastis-skeleton variant="circle" width="48px" height="48px" />
      <div style={{ flex: 1 }}><pastis-skeleton variant="lines" lines={3} /></div>
    </div>
  ),
  'pastis-spinner': () => (
    <div className="lab-preview-row">
      <pastis-spinner />
      <pastis-spinner variant="dots" />
      <pastis-spinner size="lg" />
    </div>
  ),
  'pastis-stat-card': () => (
    <div className="lab-preview-row">
      <pastis-stat-card label="Components" value="44" delta="+6" trend="up" variant="primary" />
      <pastis-stat-card label="Contrast" value="AA" />
    </div>
  ),
  'pastis-table': () => (
    <pastis-table
      hoverable
      columns={[{ key: 'token', label: 'Token' }, { key: 'value', label: 'Value' }]}
      rows={[
        { id: '1', token: '--action-primary', value: 'accent' },
        { id: '2', token: '--border-focus', value: 'accent' },
      ]}
    />
  ),
  'pastis-tabs': () => (
    <pastis-tabs
      tabs={[
        { id: 'overview', label: 'Overview', content: 'The active tab picks up the accent.' },
        { id: 'tokens', label: 'Tokens', badge: 4, content: 'Four tokens drive this preview.' },
        { id: 'contrast', label: 'Contrast', content: 'The label colour is picked by contrast.' },
      ]}
    />
  ),
  'pastis-tag': () => (
    <div className="lab-preview-row">
      <pastis-tag variant="primary">Primary</pastis-tag>
      <pastis-tag>Default</pastis-tag>
      <pastis-tag variant="success">Success</pastis-tag>
    </div>
  ),
  'pastis-testimonial': () => (
    <pastis-testimonial
      quote="Every component shipped was accessible and on-brand."
      name="Sarah Okafor"
      role="Head of Product"
      company="Arclight Labs"
      rating={5}
    />
  ),
  'pastis-timeline': () => (
    <pastis-timeline
      items={[
        { date: '2026', title: 'Design system v2', body: 'Tokens split into primitives and semantics.', tag: 'Release' },
        { date: '2025', title: 'Web components', body: 'Rebuilt every component in Lit.' },
      ]}
    />
  ),
  'pastis-toggle': () => (
    <div className="lab-preview-row">
      <pastis-toggle label="Dark mode" checked />
      <pastis-toggle label="Notifications" />
    </div>
  ),
  'pastis-tooltip': () => (
    <div className="lab-preview-row" style={{ paddingTop: '3rem' }}>
      <pastis-tooltip content="Tooltips read the same tokens" position="top">
        <pastis-button variant="secondary">Hover me</pastis-button>
      </pastis-tooltip>
    </div>
  ),
};

const COMPONENT_OPTIONS_ATTR = JSON.stringify(
  Object.keys(PREVIEWS).map((name) => ({ label: name.replace(/^pastis-/, ''), value: name })),
);

export default function TokenPlayground() {
  const [accent, setAccent] = useState(ACCENTS[0].value);
  const [component, setComponent] = useState('pastis-button');
  const dropdownRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = dropdownRef.current;
    if (!el) return;
    const handler = (e: Event) => {
      const val = (e as CustomEvent).detail?.value;
      if (val) setComponent(val);
    };
    el.addEventListener('pastis-change', handler);
    return () => el.removeEventListener('pastis-change', handler);
  }, []);

  const label = labelColorFor(accent);
  const ratio = contrastRatio(accent, label);

  const tokens = {
    '--action-primary': accent,
    '--action-primary-hover': accent,
    '--action-primary-text': label,
    '--border-focus': accent,
  } as React.CSSProperties;

  return (
    <div className="lab-demo">
      <div className="lab-controls">
        <pastis-dropdown
          ref={dropdownRef}
          searchable
          label="Component"
          placeholder="Select component"
          options={COMPONENT_OPTIONS_ATTR}
          value={component}
        />

        <fieldset>
          <legend className="meta-text">Accent</legend>
          <div className="swatches">
            {ACCENTS.map((a) => (
              <label key={a.value} className="swatch" style={{ background: a.value }}>
                <input
                  type="radio"
                  name="accent"
                  value={a.value}
                  checked={accent === a.value}
                  onChange={() => setAccent(a.value)}
                />
                <span className="sr-only">{a.name}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <p className="meta-text lab-readout">
          Label on accent: {ratio.toFixed(1)}:1 {ratio >= 4.5 ? '· AA ✓' : '· below AA'}
        </p>

        <Link href="/system" className="lab-ds-link">Explore system ↗</Link>
      </div>

      <div className="lab-preview" style={tokens}>
        {PREVIEWS[component]()}
      </div>
    </div>
  );
}
