import type { Metadata } from 'next';
import { PortableText } from '@portabletext/react';
import { safeFetch } from '@/sanity/lib/client';
import { aboutQuery, siteSettingsQuery } from '@/sanity/lib/queries';
import RansomHeadline from '@/components/RansomHeadline';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await safeFetch<any>(siteSettingsQuery);
  return {
    title: settings?.aboutPageTitle,
    description: settings?.aboutPageDescription,
  };
}

export default async function AboutPage() {
  const about = await safeFetch<any>(aboutQuery);

  const skills = Array.isArray(about?.skills) && about.skills.every((v: any) => typeof v === 'string')
    ? about.skills : [];
  const experience = Array.isArray(about?.experience) ? about.experience : [];
  const education = Array.isArray(about?.education) ? about.education : [];
  const introIsBlocks = Array.isArray(about?.intro);

  return (
    <div className="prose">
      {about?.eyebrow && <p className="eyebrow">{about.eyebrow}</p>}

      <h1 className="about-headline">
        <RansomHeadline text={about?.headline} />
      </h1>

      {about?.subheadline && <p className="lede">{about.subheadline}</p>}

      <div className="about-intro">
        {introIsBlocks
          ? <PortableText value={about.intro} />
          : <p style={{ whiteSpace: 'pre-line' }}>{about?.intro}</p>
        }
      </div>

      {skills.length > 0 && (
        <ul className="skills-list">
          {skills.map((skill: string) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      )}

      {experience.length > 0 && (
        <>
          <h2 className="section-label">Experience</h2>
          <ul className="exp-list">
            {experience.map((item: any, i: number) => (
              <li key={i} className="exp-card">
                <div className="exp-meta">{item.company} · {item.period}</div>
                <div className="exp-role">{item.role}</div>
                {item.description && <p className="exp-desc">{item.description}</p>}
              </li>
            ))}
          </ul>
        </>
      )}

      {education.length > 0 && (
        <>
          <h2 className="section-label">Education</h2>
          <ul className="about-edu-list">
            {education.map((item: any, i: number) => (
              <li key={i} className="about-edu-item">
                <div className="about-edu-meta">
                  {item.school} · {item.year}{item.note ? ` · ${item.note}` : ''}
                </div>
                <div className="about-edu-degree">{item.degree}</div>
              </li>
            ))}
          </ul>
        </>
      )}

      {(about?.email || about?.linkedinUrl) && (
        <div className="cta-row">
          {about.email && (
            <a href={`mailto:${about.email}`} className="cta-btn cta-btn--primary">Email</a>
          )}
          {about.linkedinUrl && (
            <a href={about.linkedinUrl} target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--ghost">
              LinkedIn ↗
            </a>
          )}
        </div>
      )}
    </div>
  );
}
