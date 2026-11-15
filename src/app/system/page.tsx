import Link from 'next/link';

export const metadata = {
  title: 'System — Jeroen van Ginneken',
  description: 'The Pastis design system: tokens, typography, components and Figma ↔ code workflow.',
};

const SWATCHES = [
  { name: 'Background', token: '--bg-primary', hex: '#0d0d0d' },
  { name: 'Surface', token: '--bg-card', hex: '#1e1e1e' },
  { name: 'Elevated', token: '--bg-elevated', hex: '#262522' },
  { name: 'Text', token: '--text-primary', hex: '#f9f4da' },
  { name: 'Muted', token: '--text-tertiary', hex: '#909498' },
  { name: 'Primary', token: '--action-primary', hex: '#fcba28' },
  { name: 'Secondary', token: '--action-secondary', hex: '#fc7428' },
  { name: 'Border', token: '--border-default', hex: '#383c44' },
];

const TOKENS = [
  { token: '--bg-primary', value: '#0d0d0d', desc: 'Page background' },
  { token: '--text-primary', value: '#f9f4da', desc: 'Body text' },
  { token: '--text-tertiary', value: '#909498', desc: 'Muted / metadata' },
  { token: '--action-primary', value: '#fcba28', desc: 'Interactive highlight' },
  { token: '--border-default', value: '#383c44', desc: 'Dividers' },
  { token: '--radius-md', value: '6px', desc: 'Default border radius' },
  { token: '--radius-full', value: '9999px', desc: 'Pills' },
  { token: '--transition-base', value: '200ms ease', desc: 'Default transition' },
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
          GitHub ↗
        </a>
      </p>

      <section className="system-section">
        <h2 className="system-section-label">Colour</h2>
        <div className="system-swatches">
          {SWATCHES.map((s) => (
            <div key={s.token} className="swatch">
              <div className="swatch-color" style={{ background: s.hex }} />
              <span className="swatch-name">{s.name}</span>
              <span className="swatch-hex">{s.hex}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="system-section">
        <h2 className="system-section-label">Typography</h2>
        <div className="system-type-samples">
          <div className="type-sample">
            <span className="type-meta">Display · 2rem · 500</span>
            <p className="type-preview type--display">The quick brown fox</p>
          </div>
          <div className="type-sample">
            <span className="type-meta">Body · 1rem · 400</span>
            <p className="type-preview type--body">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div className="type-sample">
            <span className="type-meta">Small · 0.8125rem · 400</span>
            <p className="type-preview type--small">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div className="type-sample">
            <span className="type-meta">Label · 0.6875rem · 700 · caps</span>
            <p className="type-preview type--label">Selected work</p>
          </div>
        </div>
      </section>

      <section className="system-section">
        <h2 className="system-section-label">Components</h2>
        <div className="system-buttons">
          <button className="system-btn system-btn--primary">Primary action</button>
          <button className="system-btn system-btn--secondary">Secondary</button>
          <span className="system-btn system-btn--secondary">
            Link button ↗
          </span>
        </div>
      </section>

      <section className="system-section">
        <h2 className="system-section-label">Tokens</h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', marginBottom: '1rem' }}>
          Distributed as CSS custom properties via <code>pastis-tokens.css</code>.
        </p>
        <table className="system-token-table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Value</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            {TOKENS.map((t) => (
              <tr key={t.token}>
                <td>{t.token}</td>
                <td>{t.value}</td>
                <td>{t.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
