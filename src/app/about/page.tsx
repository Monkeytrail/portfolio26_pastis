import type { Metadata } from 'next';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { safeFetch } from '@/sanity/lib/client';
import { aboutQuery, featuredTestimonialsQuery, siteSettingsQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import Testimonials from '@/components/Testimonials';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await safeFetch<any>(siteSettingsQuery);
  return {
    title: settings?.aboutPageTitle,
    description: settings?.aboutPageDescription,
  };
}

const isStringList = (v: unknown): v is string[] =>
  Array.isArray(v) && v.every((x) => typeof x === 'string');

export default async function AboutPage() {
  const [about, settings, testimonials] = await Promise.all([
    safeFetch<any>(aboutQuery),
    safeFetch<any>(siteSettingsQuery),
    safeFetch<any[]>(featuredTestimonialsQuery),
  ]);

  const skills: string[] = isStringList(about?.skills) ? about.skills : [];
  const tools: string[] = isStringList(about?.tools) ? about.tools : [];
  const skillCards: any[] = Array.isArray(about?.skillCards) ? about.skillCards : [];
  const experience: any[] = Array.isArray(about?.experience) ? about.experience : [];
  const education: any[] = Array.isArray(about?.education) ? about.education : [];
  const portrait = about?.profileImage ? urlForImage(about.profileImage) : null;

  return (
    <>
      <section className={`container about-hero${portrait ? ' has-portrait' : ''}`}>
        <div className="about-heading">
          <pastis-statement size="lg" eyebrow={about?.eyebrow}>
            <h1>{about?.headline}</h1>
          </pastis-statement>
          {about?.subheadline && <p className="lede">{about.subheadline}</p>}
          {(settings?.cvUrl || about?.linkedinUrl) && (
            <div className="hero-actions">
              {settings?.cvUrl && <a href={settings.cvUrl} className="btn btn--primary">CV (PDF) ↓</a>}
              {about?.linkedinUrl && (
                <a href={about.linkedinUrl} target="_blank" rel="noopener noreferrer" className="btn">LinkedIn ↗</a>
              )}
            </div>
          )}
        </div>
        {portrait && (
          <div className="about-portrait">
            <Image src={portrait} alt={about?.profileImage?.alt ?? ''} fill sizes="(min-width: 900px) 33vw, 100vw" priority />
          </div>
        )}
      </section>

      {about?.intro && (
        <section className="container section">
          <div className="about-intro">
            {Array.isArray(about.intro)
              ? <PortableText value={about.intro} />
              : <p style={{ whiteSpace: 'pre-line' }}>{about.intro}</p>}
          </div>
        </section>
      )}

      {(skillCards.length > 0 || skills.length > 0) && (
        <section className="container section" aria-labelledby="skills-heading">
          <header className="section-head">
            <span className="section-label">{about?.skillsSectionLabel ?? 'Capabilities'}</span>
            <h2 id="skills-heading" className="section-heading">{about?.skillsSectionHeading ?? 'What I do'}</h2>
            {about?.skillsSectionSubheading && <p className="section-sub">{about.skillsSectionSubheading}</p>}
          </header>
          <ul className="capabilities">
            {skillCards.length > 0
              ? skillCards.map((card, i) => (
                <li key={i} className="capability" data-reveal="">
                  <h3>{card.title}</h3>
                  {card.desc && <p>{card.desc}</p>}
                </li>
              ))
              : skills.map((skill, i) => (
                <li key={i} className="capability" data-reveal="">
                  <p>{skill}</p>
                </li>
              ))}
          </ul>
        </section>
      )}

      {tools.length > 0 && (
        <section className="container section" aria-labelledby="tools-heading">
          <header className="section-head">
            <span className="section-label">Toolkit</span>
            <h2 id="tools-heading" className="sr-only">Tools</h2>
          </header>
          <ul className="chip-list">
            {tools.map((tool) => (
              <li key={tool}><pastis-tag size="lg">{tool}</pastis-tag></li>
            ))}
          </ul>
        </section>
      )}

      {experience.length > 0 && (
        <section className="container section" aria-labelledby="experience-heading">
          <header className="section-head">
            <span className="section-label">{about?.experienceSectionLabel ?? 'Experience'}</span>
            <h2 id="experience-heading" className="section-heading">{about?.experienceSectionHeading ?? 'Experience'}</h2>
            {about?.experienceSectionSubheading && <p className="section-sub">{about.experienceSectionSubheading}</p>}
          </header>
          <ul className="cv-list">
            {experience.map((item, i) => (
              <li key={i} data-reveal="">
                <span className="meta-text">{item.period}</span>
                <div>
                  {item.role && <div className="cv-title">{item.role}</div>}
                  <div className="meta-text">{item.company}</div>
                </div>
                {item.description && <p className="cv-desc">{item.description}</p>}
              </li>
            ))}
          </ul>
        </section>
      )}

      {education.length > 0 && (
        <section className="container section" aria-labelledby="education-heading">
          <header className="section-head">
            <span className="section-label">{about?.educationSectionLabel ?? 'Education'}</span>
            <h2 id="education-heading" className="section-heading">{about?.educationSectionHeading ?? 'Education'}</h2>
          </header>
          <ul className="cv-list">
            {education.map((item, i) => (
              <li key={i} data-reveal="">
                <span className="meta-text">{item.year}</span>
                <div>
                  <div className="cv-title">{item.degree}</div>
                  <div className="meta-text">{item.school}</div>
                </div>
                {item.note && <p className="cv-desc">{item.note}</p>}
              </li>
            ))}
          </ul>
        </section>
      )}

      <Testimonials items={testimonials ?? undefined} />

      {(about?.email || about?.linkedinUrl) && (
        <section className="container contact-cta" aria-label="Contact">
          {about?.contactSectionHeading && (
            <pastis-statement size="lg" eyebrow={about?.contactSectionLabel} reveal>
              <h2>{about.contactSectionHeading}</h2>
            </pastis-statement>
          )}
          {about?.email && (
            <a href={`mailto:${about.email}`} className="contact-email text-link">{about.email}</a>
          )}
          {about?.linkedinUrl && (
            <div className="hero-actions">
              <a href={about.linkedinUrl} target="_blank" rel="noopener noreferrer" className="btn">LinkedIn ↗</a>
            </div>
          )}
        </section>
      )}
    </>
  );
}
