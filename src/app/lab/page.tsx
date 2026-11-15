import type { Metadata } from 'next';
import Link from 'next/link';
import TokenPlayground from '@/components/lab/TokenPlayground';

export const metadata: Metadata = {
  title: 'Lab — Jeroen van Ginneken',
  description: 'Interactive experiments with design tokens and web components, built on the Pastis design system.',
};

const TAGS = ['Design tokens', 'Web components', 'Theming'];

export default function LabPage() {
  return (
    <div className="prose">
      <Link href="/" className="project-back-link">← Work</Link>
      <p className="system-eyebrow">Lab</p>
      <h1>Experiments</h1>
      <p>
        Interactive tools built on the Pastis design system — prototypes built in code.
      </p>

      <section id="tokens" className="lab-full-experiment" aria-labelledby="tokens-heading">
        <header>
          <h2 id="tokens-heading" className="lab-experiment-title">Pastis Design System Playground</h2>
          <p className="lab-experiment-desc">
            Change a handful of tokens and every Pastis web component follows. The label colour on the accent is picked by contrast, not by hand.
          </p>
          <ul className="chip-list">
            {TAGS.map((t) => <li key={t}><pastis-tag size="sm">{t}</pastis-tag></li>)}
          </ul>
        </header>
        <TokenPlayground />
      </section>
    </div>
  );
}
