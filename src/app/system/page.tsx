import Link from 'next/link';
import TokenTable from '@/components/TokenTable';

export const metadata = {
  title: 'System — Jeroen van Ginneken',
  description: 'The Pastis design system: tokens, typography, components and Figma ↔ code workflow.',
};

const SWATCHES = [
  { name: 'Background', token: '--bg-primary' },
  { name: 'Surface', token: '--bg-card' },
  { name: 'Elevated', token: '--bg-elevated' },
  { name: 'Text', token: '--text-primary' },
  { name: 'Muted', token: '--text-tertiary' },
  { name: 'Primary', token: '--action-primary' },
  { name: 'Secondary', token: '--action-secondary' },
  { name: 'Border', token: '--border-default' },
];

const TYPE_TOKENS = ['--font-size-display', '--font-size-body', '--font-size-body-sm', '--font-size-micro'];

const TOKENS = [
  { token: '--bg-primary', usage: 'Page background' },
  { token: '--text-primary', usage: 'Body text' },
  { token: '--text-tertiary', usage: 'Muted / metadata' },
  { token: '--action-primary', usage: 'Interactive highlight' },
  { token: '--border-default', usage: 'Dividers' },
  { token: '--radius-md', usage: 'Default border radius' },
  { token: '--radius-full', usage: 'Pills' },
  { token: '--transition-base', usage: 'Default transition' },
];

export default function SystemPage() {
  return (
    <div className="prose">
      <Link href="/" className="project-back-link">← Work</Link>

      <p className="system-eyebrow">System</p>
      <h1>Pastis Design System</h1>
      <p>
        A Lit-based web component library that powers this portfolio — built to prove Figma-to-code
        parity in practice, not just in theory.{' '}
        <a href="https://github.com/Monkeytrail/pastis-design-system" target="_blank" rel="noopener noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </p>

      <section className="system-section" aria-labelledby="colour-heading">
        <h2 id="colour-heading">Colour</h2>
        {/* VIBE-KILLER GAP: no grid component in Pastis; layout-only rule in globals.css */}
        <div className="system-swatches">
          {SWATCHES.map((s) => (
            <pastis-token-swatch key={s.token} token={s.token} label={s.name} />
          ))}
        </div>
      </section>

      <section className="system-section" aria-labelledby="typography-heading">
        <h2 id="typography-heading">Typography</h2>
        <pastis-spec-table
          kind="type"
          tokens={JSON.stringify(TYPE_TOKENS)}
          sample="The quick brown fox"
        />
      </section>

      <section className="system-section" aria-labelledby="components-heading">
        <h2 id="components-heading">Components</h2>
        {/* VIBE-KILLER GAP: no button group in Pastis; layout-only rule in globals.css */}
        <div className="system-buttons">
          <pastis-button variant="primary">Primary action</pastis-button>
          <pastis-button variant="secondary">Secondary</pastis-button>
          <pastis-button
            variant="ghost"
            href="https://github.com/Monkeytrail/pastis-design-system"
            target="_blank"
          >
            Link button <span aria-hidden="true">↗</span>
          </pastis-button>
        </div>
      </section>

      <section className="system-section" aria-labelledby="tokens-heading">
        <h2 id="tokens-heading">Tokens</h2>
        <p>
          Distributed as CSS custom properties via <code>pastis-tokens.css</code>.
        </p>
        <TokenTable tokens={TOKENS} />
      </section>
    </div>
  );
}
