import { PortableText } from '@portabletext/react';
import { client } from '@/sanity/lib/client';
import { projectsQuery, siteSettingsQuery, aboutQuery } from '@/sanity/lib/queries';
import { getEarliestYear } from '@/lib/deriveStats';
import { accentLastWord, splitAroundWord } from '@/lib/headingParts';
import { SECONDARY_PAGES_ENABLED } from '@/lib/siteConfig';
import Hero from '@/components/Hero';
import WorkGrid from '@/components/WorkGrid';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import CopyEmailButton from '@/components/CopyEmailButton';
import SiteFooter from '@/components/SiteFooter';

export default async function HomePage() {
  let projects: any[] = [];
  let settings: any = null;
  let about: any = null;

  try {
    [projects, settings, about] = await Promise.all([
      client.fetch(projectsQuery),
      client.fetch(siteSettingsQuery),
      client.fetch(aboutQuery),
    ]);
  } catch { }

  const startYear = getEarliestYear(about?.experience) ?? new Date().getFullYear();
  const yearsActive = new Date().getFullYear() - startYear;
  const projectCount = projects?.length ?? 0;
  const skillTitles = about?.skillCards?.map((c: any) => c.title) ?? [];
  const email = about?.email ?? settings?.contactEmail;
  const socials = settings?.socialLinks ?? {};
  const socialRows = [
    socials.linkedin && { label: 'LinkedIn', href: socials.linkedin },
    socials.github && { label: 'GitHub', href: socials.github },
    socials.dribbble && { label: 'Dribbble', href: socials.dribbble },
  ].filter(Boolean) as { label: string; href: string }[];

  const [quoteLead, ...quoteRestParts] = (about?.quote ?? '').split('.');
  const quoteRest = quoteRestParts.join('.').trim();

  const workHeading = settings?.workSectionHeading ?? "Work I'm proud to put my name on.";
  const workHeadingParts = splitAroundWord(workHeading, settings?.workSectionHeadingAccent ?? 'proud');

  const timelineHeading = about?.experienceSectionHeading ?? "Where I've been.";
  const timelineParts = accentLastWord(timelineHeading);

  const contactHeading = about?.contactSectionHeading ?? "Let's work together";
  const contactHeadingParts = accentLastWord(contactHeading);

  const timelineNum = SECONDARY_PAGES_ENABLED ? '03' : '01';
  const contactNum = SECONDARY_PAGES_ENABLED ? '04' : '02';

  return (
    <>
      <Hero
        fullName={settings?.heroHeadline ?? 'Jeroen van Ginneken'}
        role={settings?.heroEyebrow ?? 'UX/UI Designer'}
        blurb={settings?.heroSubheadline?.split('\n\n')[0]}
        startYear={startYear}
        marqueeItems={skillTitles}
        versionLabel={settings?.heroVersionLabel}
        locationLabel={settings?.heroLocationLabel}
        trackLabel={settings?.heroTrackLabel}
      />

      {SECONDARY_PAGES_ENABLED && (
        <section id="work" className="container">
          <div className="section-rule">
            <span className="dot">▶</span>
            <span>01 · {settings?.workSectionLabel ?? 'Selected Work'}</span>
            <span className="line" />
            <span>{startYear} — Now</span>
          </div>
          <div className="work-head">
            <h2>
              {workHeadingParts
                ? <>{workHeadingParts.before}<span>{workHeadingParts.match}</span><br />{workHeadingParts.after.trimStart()}</>
                : workHeading}
            </h2>
            <div className="work-count">// {projectCount} PROJECTS SHOWN</div>
          </div>
          <WorkGrid projects={projects} />
        </section>
      )}

      {SECONDARY_PAGES_ENABLED && about && (
        <section id="about" className="container">
          <div className="section-rule">
            <span className="dot">▶</span>
            <span>02 · {about.eyebrow ?? 'About'}</span>
            <span className="line" />
            <span>{about.subheadline ?? 'The short version'}</span>
          </div>
          <div className="about">
            {about.quote && (
              <h3 className="about-lead">
                {quoteLead}.{' '}
                <em>{quoteRest}</em>
              </h3>
            )}
            <div className="about-right">
              {Array.isArray(about.intro) && <PortableText value={about.intro} />}
              {skillTitles.length > 0 && (
                <div className="skills">
                  {skillTitles.map((s: string) => <span key={s} className="skill">{s}</span>)}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {about?.experience?.length > 0 && (
        <section id="timeline" className="container">
          <div className="section-rule">
            <span className="dot">▶</span>
            <span>{timelineNum} · {about.experienceSectionLabel ?? 'Experience'}</span>
            <span className="line" />
            <span>{yearsActive} years · {about.experience.length} places</span>
          </div>
          <div className="timeline">
            <div className="timeline-head">
              <h3>{timelineParts.before && <>{timelineParts.before}<br /></>}{timelineParts.match}</h3>
              <div className="sub">// {about.experienceSectionSubheading ?? 'A long-form log'}</div>
            </div>
            <ExperienceTimeline items={about.experience} />
          </div>
        </section>
      )}

      <section id="contact" className="container contact">
        <div className="section-rule">
          <span className="dot">▶</span>
          <span>{contactNum} · Contact</span>
          <span className="line" />
          <span>{about?.contactSectionLabel ?? "Let's talk"}</span>
        </div>
        <h2 className="contact-title">
          {contactHeadingParts.before && <>{contactHeadingParts.before}<br /></>}<span className="on">{contactHeadingParts.match}</span>
        </h2>
        <div className="contact-grid">
          <div className="contact-info">
            {email && (
              <div>
                <div className="contact-label">// Primary channel</div>
                <CopyEmailButton email={email} className="contact-email" />
              </div>
            )}
          </div>
          {socialRows.length > 0 && (
            <div className="social-list">
              {socialRows.map((s) => (
                <a key={s.label} className="social-row" href={s.href} target="_blank" rel="noopener noreferrer">
                  <span>{s.label}</span>
                  <span className="arrow">→</span>
                </a>
              ))}
            </div>
          )}
        </div>
        <SiteFooter
          copyright={settings?.footerCopyright || `© ${startYear}—${new Date().getFullYear()} · ${settings?.heroHeadline ?? 'Jeroen van Ginneken'}`}
          note={<span><span className="dot">●</span> Built with Pastis</span>}
        />
      </section>
    </>
  );
}
