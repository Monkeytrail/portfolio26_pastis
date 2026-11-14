import type { Metadata } from 'next';
import { safeFetch } from '@/sanity/lib/client';
import { systemPageQuery } from '@/sanity/lib/queries';

export async function generateMetadata(): Promise<Metadata> {
  const page = await safeFetch<any>(systemPageQuery);
  return {
    title: page?.metaTitle ?? 'Pastis Design System — Jeroen van Ginneken',
    description: page?.metaDescription,
  };
}

const COLOR_TOKENS: [string, string][] = [
  ['--bg-primary', 'Background'],
  ['--bg-card', 'Surface'],
  ['--bg-elevated', 'Elevated'],
  ['--text-primary', 'Text'],
  ['--text-tertiary', 'Text muted'],
  ['--border-default', 'Border'],
  ['--action-primary', 'Primary'],
  ['--action-secondary', 'Secondary'],
  ['--color-pink', 'Pink'],
  ['--color-green', 'Green'],
  ['--color-blue', 'Blue'],
  ['--color-purple', 'Purple'],
];

const SPECS: { kind: string; caption: string; tokens: string[]; sample?: string }[] = [
  {
    kind: 'type',
    caption: 'Type — display scale',
    tokens: ['--font-size-statement-xl', '--font-size-statement-lg', '--font-size-statement-md', '--font-size-h3', '--font-size-body-lg', '--font-size-body'],
    sample: 'Figma ↔ code',
  },
  { kind: 'space', caption: 'Spacing — 8px grid', tokens: ['--space-xs', '--space-sm', '--space-md', '--space-lg', '--space-xl', '--space-2xl', '--space-3xl'] },
  { kind: 'radius', caption: 'Radius', tokens: ['--radius-sm', '--radius-md', '--radius-lg', '--radius-xl', '--radius-full'] },
  { kind: 'motion', caption: 'Motion — hover a row', tokens: ['--duration-fast', '--duration-base', '--duration-slow', '--duration-reveal'] },
];

function Specimen({ name, tag, wide, children }: { name: string; tag: string; wide?: boolean; children: React.ReactNode }) {
  return (
    <figure className={`specimen${wide ? ' specimen--wide' : ''}`} data-reveal="">
      <div className="specimen-stage">{children}</div>
      <figcaption className="specimen-label meta-text">
        <span>{name}</span>
        <code>&lt;{tag}&gt;</code>
      </figcaption>
    </figure>
  );
}

export default async function SystemPage() {
  const page = await safeFetch<any>(systemPageQuery);
  const principles: any[] = page?.principles ?? [];
  const workflow: any[] = page?.workflow ?? [];
  const links = page?.links ?? {};

  return (
    <>
      <section className="container hero hero--compact">
        <pastis-statement eyebrow={page?.eyebrow} size="xl">
          <h1>{page?.headline ?? 'Pastis'}</h1>
        </pastis-statement>
        {(page?.intro || links.storybook || links.github || links.figma) && (
          <div className="hero-foot">
            {page?.intro && <p className="lede">{page.intro}</p>}
            <div className="hero-actions">
              {links.storybook && <a className="btn btn--primary" href={links.storybook} target="_blank" rel="noopener noreferrer">Storybook ↗</a>}
              {links.figma && <a className="btn" href={links.figma} target="_blank" rel="noopener noreferrer">Figma ↗</a>}
              {links.github && <a className="btn" href={links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
            </div>
          </div>
        )}
      </section>

      {principles.length > 0 && (
        <section className="container section" aria-labelledby="principles-heading">
          <header className="section-head">
            <span className="section-label">Principles</span>
            <h2 id="principles-heading" className="section-heading">{page?.principlesHeading ?? 'Principles'}</h2>
          </header>
          <ul className="principles">
            {principles.map((p, i) => (
              <li key={i} className="principle" data-reveal="">
                <h3>{p.title}</h3>
                {p.desc && <p>{p.desc}</p>}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="container section" aria-labelledby="foundations-heading">
        <header className="section-head">
          <span className="section-label">Foundations</span>
          <h2 id="foundations-heading" className="section-heading">Tokens</h2>
          {page?.foundationsIntro && <p className="section-sub">{page.foundationsIntro}</p>}
        </header>

        <div className="swatch-grid">
          {COLOR_TOKENS.map(([token, label]) => (
            <pastis-token-swatch key={token} token={token} label={label} />
          ))}
        </div>

        <div className="spec-grid">
          {SPECS.map((spec) => (
            <pastis-spec-table
              key={spec.caption}
              kind={spec.kind}
              caption={spec.caption}
              sample={spec.sample}
              tokens={JSON.stringify(spec.tokens)}
            />
          ))}
        </div>
      </section>

      <section className="container section" aria-labelledby="components-heading">
        <header className="section-head">
          <span className="section-label">Components</span>
          <h2 id="components-heading" className="section-heading">Live components</h2>
          {page?.componentsIntro && <p className="section-sub">{page.componentsIntro}</p>}
        </header>

        <div className="specimens">
          <Specimen name="Button" tag="pastis-button">
            <pastis-button variant="primary">Primary</pastis-button>
            <pastis-button variant="secondary">Secondary</pastis-button>
            <pastis-button variant="ghost">Ghost</pastis-button>
          </Specimen>
          <Specimen name="Tag" tag="pastis-tag">
            <pastis-tag variant="primary">Tokens</pastis-tag>
            <pastis-tag variant="success">Shipped</pastis-tag>
            <pastis-tag variant="outline">Figma</pastis-tag>
          </Specimen>
          <Specimen name="Toggle" tag="pastis-toggle">
            <pastis-toggle label="Dark mode" checked />
          </Specimen>
          <Specimen name="Input" tag="pastis-input">
            <pastis-input label="Component name" placeholder="pastis-button" helper="Lowercase, kebab-case" />
          </Specimen>
          <Specimen name="Progress" tag="pastis-progress">
            <div className="specimen-fill">
              <pastis-progress value={60} label="Progress" show-value />
            </div>
          </Specimen>
          <Specimen name="Stat card" tag="pastis-stat-card">
            <pastis-stat-card label="Components" value="43" />
          </Specimen>
          <Specimen name="Alert" tag="pastis-alert" wide>
            <div className="specimen-fill">
              <pastis-alert variant="info" title="Alert">
                A live pastis-alert, themed by the same tokens as this page.
              </pastis-alert>
            </div>
          </Specimen>
          <Specimen name="Statement" tag="pastis-statement" wide>
            <pastis-statement size="md" eyebrow="Statement · md">
              <p>Statement <em>component</em></p>
            </pastis-statement>
          </Specimen>
        </div>
      </section>

      {workflow.length > 0 && (
        <section className="container section" aria-labelledby="workflow-heading">
          <header className="section-head">
            <span className="section-label">Workflow</span>
            <h2 id="workflow-heading" className="section-heading">{page?.workflowHeading ?? 'From Figma to production'}</h2>
          </header>
          <ol className="workflow">
            {workflow.map((step, i) => (
              <li key={i} data-reveal="">
                <h3>{step.title}</h3>
                {step.desc && <p>{step.desc}</p>}
              </li>
            ))}
          </ol>
        </section>
      )}
    </>
  );
}
