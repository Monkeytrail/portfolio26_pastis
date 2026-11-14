import Link from 'next/link';
import { safeFetch } from '@/sanity/lib/client';
import { featuredTestimonialsQuery, projectsQuery, siteSettingsQuery } from '@/sanity/lib/queries';
import CopyEmailButton from '@/components/CopyEmailButton';
import HeroStage from '@/components/HeroStage';
import ProjectCard from '@/components/ProjectCard';
import Testimonials from '@/components/Testimonials';

const TEASER_CHIPS = ['--action-primary', '--action-secondary', '--text-primary', '--color-pink'];

export default async function HomePage() {
  const [projects, settings, testimonials] = await Promise.all([
    safeFetch<any[]>(projectsQuery),
    safeFetch<any>(siteSettingsQuery),
    safeFetch<any[]>(featuredTestimonialsQuery),
  ]);

  const pillars: any[] = settings?.pillars ?? [];
  const proofStats: { value: string; label: string }[] = settings?.proofStats ?? [];
  const proofCompanies: string[] = settings?.proofCompanies ?? [];
  const teaser = settings?.systemTeaser;

  return (
    <>
      <div className="hero-wrap">
        <section className="container hero hero--center">
          {settings?.availability && (
            <p className="availability">
              <span className="status-dot" aria-hidden="true" />
              {settings.availability}
            </p>
          )}

          <pastis-statement eyebrow={settings?.heroEyebrow} size="xl">
            <h1>{settings?.heroHeadline ?? 'Jeroen van Ginneken'}</h1>
          </pastis-statement>

          <div className="hero-foot">
            {settings?.heroSubheadline && <p className="lede">{settings.heroSubheadline}</p>}
            <div className="hero-actions">
              <a href="#work" className="btn btn--primary">
                {settings?.homeHeroCtaLabel ?? 'Selected work ↓'}
              </a>
              {settings?.cvUrl && (
                <a href={settings.cvUrl} className="btn">CV (PDF) ↓</a>
              )}
              {settings?.contactEmail && (
                <CopyEmailButton email={settings.contactEmail} label="Copy email" className="btn" />
              )}
            </div>
          </div>
        </section>

        <HeroStage projects={projects ?? undefined} />
      </div>

      {(proofStats.length > 0 || proofCompanies.length > 0) && (
        <section className="container proof" aria-label="Experience at a glance">
          {proofStats.length > 0 && (
            <dl className="proof-stats">
              {proofStats.map((stat, i) => (
                <div key={i}>
                  <dt className="meta-text">{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
          )}
          {proofCompanies.length > 0 && (
            <div className="proof-companies">
              <span className="meta-text">Worked with</span>
              <ul>
                {proofCompanies.map((company) => <li key={company}>{company}</li>)}
              </ul>
            </div>
          )}
        </section>
      )}

      <section className="band section" data-surface="inverse" id="work" aria-labelledby="work-heading">
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

        <div className="container band-foot">
          <Link href="/work" className="btn">All case studies →</Link>
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

      <section className="container section teasers" aria-label="Design system and lab">
        <Link href="/system" className="teaser" data-reveal="">
          <div className="teaser-copy">
            <span className="section-label">{teaser?.label ?? 'System'}</span>
            <h2 className="section-heading">{teaser?.heading ?? 'Pastis design system'}</h2>
            {teaser?.text && <p>{teaser.text}</p>}
            <span className="btn">{teaser?.ctaLabel ?? 'Explore the system →'}</span>
          </div>
          <div className="teaser-specimen" aria-hidden="true">
            {TEASER_CHIPS.map((token) => (
              <span key={token} className="teaser-chip" style={{ background: `var(${token})` }} />
            ))}
            <div className="teaser-type">
              <span>Aa</span>
              <span className="meta-text">Instrument / Inter / JetBrains</span>
            </div>
          </div>
        </Link>

        <Link href="/lab" className="teaser teaser--lab" data-reveal="">
          <div className="teaser-copy">
            <span className="section-label">Lab</span>
            <h2 className="section-heading">Experiments in tokens, contrast &amp; motion</h2>
            <span className="btn">Open the lab →</span>
          </div>
          <div className="teaser-curve" aria-hidden="true">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,100 C19,0 22,0 100,0" />
            </svg>
          </div>
        </Link>
      </section>

      <Testimonials items={testimonials ?? undefined} />

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
          {settings?.cvUrl && <a href={settings.cvUrl} className="btn">CV (PDF) ↓</a>}
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
