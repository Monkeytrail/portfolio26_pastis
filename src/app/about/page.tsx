import type { Metadata } from 'next';
import { PortableText } from '@portabletext/react';
import { safeFetch } from '@/sanity/lib/client';
import { aboutQuery, siteSettingsQuery } from '@/sanity/lib/queries';
import { getEarliestYear, getCurrentJob } from '@/lib/deriveStats';
import SiteFooter from '@/components/SiteFooter';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await safeFetch<any>(siteSettingsQuery);
  return {
    title: settings?.aboutPageTitle ?? 'About — Jeroen van Ginneken',
    description: settings?.aboutPageDescription,
  };
}

export default async function AboutPage() {
  const about = await safeFetch<any>(aboutQuery);

  const skills = Array.isArray(about?.skills) ? about.skills : [];
  const experience = Array.isArray(about?.experience) ? about.experience : [];
  const values = Array.isArray(about?.values) ? about.values : [];
  const process = Array.isArray(about?.process) ? about.process : [];
  const testimonials = Array.isArray(about?.testimonials) ? about.testimonials : [];
  const introIsBlocks = Array.isArray(about?.intro);

  const startYear = getEarliestYear(experience) ?? new Date().getFullYear();
  const yearsActive = new Date().getFullYear() - startYear;
  const currentJob = getCurrentJob(experience);

  return (
    <div className="container">
      <div className="page-hero">
        <div className="eyebrow">// About · {about?.headline ?? 'Jeroen van Ginneken'}</div>
        <h1><span className="outline">About</span><br /><span className="accent">The</span><br />Designer<span className="slash">.</span></h1>
        <p className="lede">
          Senior UX/UI designer, {yearsActive}+ years in. I work at the intersection of product, craft, and accessibility.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-body">
          {introIsBlocks ? <PortableText value={about.intro} /> : <p style={{ whiteSpace: 'pre-line' }}>{about?.intro}</p>}
          {skills.length > 0 && (
            <ul className="skills-list">
              {skills.map((skill: string) => <li key={skill}>{skill}</li>)}
            </ul>
          )}
        </div>
        <div className="about-side">
          <div className="info-card">
            <h4>// Quick facts</h4>
            <div className="row"><span className="k">Based</span><span className="v">Antwerp, Belgium</span></div>
            <div className="row"><span className="k">Years active</span><span className="v">{startYear} — Now</span></div>
            {currentJob && (
              <div className="row"><span className="k">Currently</span><span className="v">{currentJob.company}</span></div>
            )}
          </div>
        </div>
      </div>

      {values.length > 0 && (
        <>
          <div className="section-rule">
            <span className="dot">▶</span>
            <span>{about.valuesSectionLabel ?? 'Values'}</span>
            <span className="line" />
            <span>{about.valuesSectionHeading ?? 'What I believe about design'}</span>
          </div>
          <div className="values">
            {values.map((v: any, i: number) => (
              <div key={i} className="value">
                <div className="num">{String(i + 1).padStart(2, '0')}</div>
                <h4>{v.heading}</h4>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {process.length > 0 && (
        <>
          <div className="section-rule">
            <span className="dot">▶</span>
            <span>{about.processSectionLabel ?? 'Process'}</span>
            <span className="line" />
            <span>{about.processSectionHeading ?? 'How I work'}</span>
          </div>
          <div className="process">
            {process.map((s: any, i: number) => (
              <div key={i} className="step">
                <div className="n">{String(i + 1).padStart(2, '0')}</div>
                <h5>{s.heading}</h5>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {experience.length > 0 && (
        <>
          <div className="section-rule">
            <span className="dot">▶</span>
            <span>Experience</span>
            <span className="line" />
            <span>{yearsActive} years · {experience.length} places</span>
          </div>
          <ul className="exp-list">
            {experience.map((item: any, i: number) => (
              <li key={i} className="exp-card">
                <div className="exp-meta">{item.company} · {item.period}</div>
                {item.role && <div className="exp-role">{item.role}</div>}
                {item.description && <p className="exp-desc">{item.description}</p>}
              </li>
            ))}
          </ul>
        </>
      )}

      {testimonials.length > 0 && (
        <>
          <div className="section-rule">
            <span className="dot">▶</span>
            <span>What people say</span>
            <span className="line" />
          </div>
          <div className="testimonials">
            {testimonials.map((t: any, i: number) => (
              <div key={i} className="testimonial">
                <span className="q">&ldquo;</span>
                <p className="body">{t.quote}</p>
                <div className="who"><b>{t.who}</b>{t.role ? ` · ${t.role}` : ''}</div>
              </div>
            ))}
          </div>
        </>
      )}

      {(about?.email || about?.linkedinUrl) && (
        <div className="cta-row">
          {about.email && <a href={`mailto:${about.email}`} className="nf-btn primary">Email</a>}
          {about.linkedinUrl && (
            <a href={about.linkedinUrl} target="_blank" rel="noopener noreferrer" className="nf-btn">LinkedIn ↗</a>
          )}
        </div>
      )}

      <SiteFooter
        bordered
        copyright={`© ${startYear}—${new Date().getFullYear()} · Jeroen van Ginneken`}
        note={<a href="/" className="footer-link">← Back home</a>}
      />
    </div>
  );
}
