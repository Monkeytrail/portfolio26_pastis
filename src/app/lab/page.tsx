import type { Metadata } from 'next';
import Link from 'next/link';
import TokenPlayground from '@/components/lab/TokenPlayground';
import RssReaderDemo from '@/components/lab/RssReaderDemo';

export const metadata: Metadata = {
  title: 'Lab — Jeroen van Ginneken',
  description: 'Interactive experiments with design tokens and web components, built on the Pastis design system.',
};

const TAGS = ['Design tokens', 'Web components', 'Theming'];
const RSS_TAGS = ['Astro', 'Design system', 'Offline-first'];

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

      <section id="rss-reader" className="lab-full-experiment" aria-labelledby="rss-reader-heading">
        <header>
          <h2 id="rss-reader-heading" className="lab-experiment-title">RSS Reader</h2>
          <p className="lab-experiment-desc">
            My personal feed reader, built in Astro and styled with Pastis tokens. It pulls feeds at build time, suggests new sources from Hacker News, Lobsters and dev.to, and keeps read and saved state local-first. The real app is private, so this demo rebuilds its core flow from Pastis components with sample articles.
          </p>
          <ul className="chip-list">
            {RSS_TAGS.map((t) => <li key={t}><pastis-tag size="sm">{t}</pastis-tag></li>)}
          </ul>
        </header>
        <RssReaderDemo />
      </section>
    </div>
  );
}
