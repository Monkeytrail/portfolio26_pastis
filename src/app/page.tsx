import Link from 'next/link';
import { safeFetch } from '@/sanity/lib/client';
import { projectsQuery, siteSettingsQuery } from '@/sanity/lib/queries';
import CopyEmailButton from '@/components/CopyEmailButton';
import ProjectCard from '@/components/ProjectCard';

const TEASER_CHIPS = ['--action-primary', '--action-secondary', '--color-beige', '--color-pink'];

export default async function HomePage() {
  const [projects, settings] = await Promise.all([
    safeFetch<any[]>(projectsQuery),
    safeFetch<any>(siteSettingsQuery),
  ]);

  const pillars: any[] = settings?.pillars ?? [];
  const teaser = settings?.systemTeaser;

  return (
    <>
      <section className="container hero">
        <pastis-statement eyebrow={settings?.heroEyebrow} size="xl">
          <h1>{settings?.heroHeadline ?? 'Jeroen van Ginneken'}</h1>
        </pastis-statement>

        <div className="hero-foot">
          {settings?.heroSubheadline && <p className="lede">{settings.heroSubheadline}</p>}
          <div className="hero-actions">
            <a href="#work" className="btn btn--primary">
              {settings?.homeHeroCtaLabel ?? 'Work ↓'}
            </a>
            <Link href="/system" className="btn">
              {settings?.homeAboutCtaLabel ?? 'Design system →'}
            </Link>
          </div>
        </div>
      </section>

      {pillars.length > 0 && (
        <section className="container section" aria-label="What I do">
          <ol className="pillars">
            {pillars.map((pillar, i) => (
              <li key={i} className="pillar" data-reveal="">
                <h3>{pillar.title}</h3>
                {pillar.desc && <p>{pillar.desc}</p>}
              </li>
            ))}
          </ol>
        </section>
      )}

      <section className="section" id="work" aria-labelledby="work-heading">
        <header className="container section-head">
          <span className="section-label">{settings?.workSectionLabel ?? 'Selected work'}</span>
          {settings?.workSectionHeading
            ? <h2 id="work-heading" className="section-heading">{settings.workSectionHeading}</h2>
            : <h2 id="work-heading" className="sr-only">Selected work</h2>}
          {settings?.workSectionSubheading && <p className="section-sub">{settings.workSectionSubheading}</p>}
        </header>

        <pastis-shelf className="work-shelf" label="Selected work">
          {projects?.map((project, i) => (
            <ProjectCard key={project._id} project={project} index={i} />
          ))}
        </pastis-shelf>
      </section>

      {teaser?.heading && (
        <section className="container section">
          <Link href="/system" className="teaser" data-reveal="">
            <div className="teaser-copy">
              {teaser.label && <span className="section-label">{teaser.label}</span>}
              <h2 className="section-heading">{teaser.heading}</h2>
              {teaser.text && <p>{teaser.text}</p>}
              <span className="btn">{teaser.ctaLabel ?? 'Explore the system →'}</span>
            </div>
            <div className="teaser-specimen" aria-hidden="true">
              {TEASER_CHIPS.map((token) => (
                <span key={token} className="teaser-chip" style={{ background: `var(${token})` }} />
              ))}
              <div className="teaser-type">
                <span>Aa</span>
                <span className="meta-text">Bricolage / Inter / JetBrains</span>
              </div>
            </div>
          </Link>
        </section>
      )}

      <section className="container contact-cta" aria-label="Contact">
        {settings?.contactHeading && (
          <pastis-statement size="lg" reveal>
            <h2>{settings.contactHeading}</h2>
          </pastis-statement>
        )}
        {settings?.contactEmail && (
          <a href={`mailto:${settings.contactEmail}`} className="contact-email text-link">
            {settings.contactEmail}
          </a>
        )}
        <div className="hero-actions">
          {settings?.contactEmail && <CopyEmailButton email={settings.contactEmail} label="Copy email" className="btn" />}
          {settings?.socialLinks?.linkedin && (
            <a href={settings.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="btn">
              LinkedIn ↗
            </a>
          )}
          {settings?.socialLinks?.github && (
            <a href={settings.socialLinks.github} target="_blank" rel="noopener noreferrer" className="btn">
              GitHub ↗
            </a>
          )}
        </div>
      </section>
    </>
  );
}
