import type { Metadata } from 'next';
import TokenPlayground from '@/components/lab/TokenPlayground';
import ContrastChecker from '@/components/lab/ContrastChecker';
import EasingExplorer from '@/components/lab/EasingExplorer';

export const metadata: Metadata = {
  title: 'Lab — Jeroen van Ginneken',
  description: 'Interactive experiments with design tokens, accessible contrast and motion, built on the Pastis design system.',
};

const EXPERIMENTS = [
  {
    id: 'tokens',
    title: 'Token playground',
    desc: 'Change a handful of tokens and every Pastis web component follows. The label colour on the accent is picked by contrast, not by hand.',
    tags: ['Design tokens', 'Web components', 'Theming'],
    Demo: TokenPlayground,
  },
  {
    id: 'contrast',
    title: 'Contrast checker',
    desc: 'WCAG 2.2 contrast for any pair of colours, with one-click presets that read the live Pastis tokens on this page.',
    tags: ['Accessibility', 'WCAG 2.2'],
    Demo: ContrastChecker,
  },
  {
    id: 'motion',
    title: 'Easing explorer',
    desc: 'The motion tokens behind every transition on this site, plotted and playable.',
    tags: ['Motion', 'Tokens'],
    Demo: EasingExplorer,
  },
];

export default function LabPage() {
  return (
    <>
      <section className="container hero hero--compact page-top">
        <pastis-statement size="xl" eyebrow="Experiments">
          <h1>Lab</h1>
        </pastis-statement>
      </section>

      {EXPERIMENTS.map(({ id, title, desc, tags, Demo }, i) => (
        <section key={id} id={id} className="container section experiment" aria-labelledby={`${id}-heading`}>
          <header className="section-head">
            <span className="section-label">{String(i + 1).padStart(2, '0')}</span>
            <div className="experiment-intro">
              <h2 id={`${id}-heading`} className="section-heading">{title}</h2>
              <p>{desc}</p>
              <ul className="chip-list">
                {tags.map((t) => <li key={t}><pastis-tag size="sm">{t}</pastis-tag></li>)}
              </ul>
            </div>
          </header>
          <Demo />
        </section>
      ))}
    </>
  );
}
