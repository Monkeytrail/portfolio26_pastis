import { PortableText } from '@portabletext/react';
import { client } from '@/sanity/lib/client';
import { projectsQuery, siteSettingsQuery, aboutQuery } from '@/sanity/lib/queries';
import { getEarliestYear, getCurrentJob } from '@/lib/deriveStats';
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
  const currentJob = getCurrentJob(about?.experience);
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

  return (
    <>
      <Hero
        fullName={settings?.heroHeadline ?? 'Jeroen van Ginneken'}
        role="UX/UI Designer"
        blurb={settings?.heroSubheadline?.split('\n\n')[0]}
        yearsActive={yearsActive}
        projectCount={projectCount}
        startYear={startYear}
        marqueeItems={skillTitles}
      />

      <section id="work" className="container">
        <div className="section-rule">
          <span className="dot">▶</span>
          <span>01 · Selected Work</span>
          <span className="line" />
          <span>{startYear} — Now</span>
        </div>
        <div className="work-head">
          <h2>Work I&apos;m <span>proud</span><br />to put my name on.</h2>
          <div className="work-count">// {projectCount} PROJECTS SHOWN</div>
        </div>
        <WorkGrid projects={projects} />
      </section>

      {about && (
        <section id="about" className="container">
          <div className="section-rule">
            <span className="dot">▶</span>
            <span>02 · About</span>
            <span className="line" />
            <span>The short version</span>
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
            <span>03 · Experience</span>
            <span className="line" />
            <span>{yearsActive} years · {about.experience.length} places</span>
          </div>
          <div className="timeline">
            <div className="timeline-head">
              <h3>Where<br />I&apos;ve been.</h3>
              <div className="sub">// A long-form log</div>
            </div>
            <ExperienceTimeline items={about.experience} />
          </div>
        </section>
      )}

      <section id="contact" className="container contact">
        <div className="section-rule">
          <span className="dot">▶</span>
          <span>04 · Contact</span>
          <span className="line" />
          <span>Let&apos;s talk</span>
        </div>
        <h2 className="contact-title">
          <span className="row">Have a <span className="on">thing</span></span>
          <span className="row"><span className="stroke">worth</span> shipping?</span>
        </h2>
        <div className="contact-grid">
          <div className="contact-info">
            {email && (
              <div>
                <div className="contact-label">// Primary channel</div>
                <CopyEmailButton email={email} className="contact-email" />
              </div>
            )}
            <div>
              <div className="contact-label">// Currently</div>
              <p className="contact-body">
                {currentJob
                  ? `${currentJob.role ?? 'Working'} at ${currentJob.company}. Open to hearing about interesting design-systems and product work.`
                  : 'Open to hearing about interesting design and product work.'}
              </p>
            </div>
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
        <SiteFooter copyright={`© ${startYear}—${new Date().getFullYear()} · Jeroen van Ginneken`} note={<span><span className="dot">●</span> Built with Pastis</span>} />
      </section>
    </>
  );
}
