import type { Metadata } from 'next';
import { PortableText } from '@portabletext/react';
import { client } from '@/sanity/lib/client';
import { aboutQuery, siteSettingsQuery } from '@/sanity/lib/queries';

export async function generateMetadata(): Promise<Metadata> {
  let settings: any = null;
  try { settings = await client.fetch(siteSettingsQuery); } catch { }
  return {
    title: settings?.aboutPageTitle,
    description: settings?.aboutPageDescription,
  };
}

export default async function AboutPage() {
  let about: any = null;
  try { about = await client.fetch(aboutQuery); } catch { }

  const skills     = Array.isArray(about?.skills) && about.skills.every((v: any) => typeof v === 'string')
    ? about.skills : [];
  const experience = Array.isArray(about?.experience) ? about.experience : [];
  const education  = Array.isArray(about?.education)  ? about.education  : [];
  const introIsBlocks = Array.isArray(about?.intro);

  return (
    <div className="prose">
      <h1>{about?.headline}</h1>

      <div className="about-intro">
        {introIsBlocks
          ? <PortableText value={about.intro} />
          : <p style={{ whiteSpace: 'pre-line' }}>{about?.intro}</p>
        }
      </div>

      {skills.length > 0 && (
        <p className="about-skills">{skills.join(', ')}</p>
      )}

      {experience.length > 0 && (
        <>
          <h2>Experience</h2>
          <ul className="about-exp-list">
            {experience.map((item: any, i: number) => (
              <li key={i} className="about-exp-item">
                <div className="about-exp-meta">{item.company} · {item.period}</div>
                <div className="about-exp-role">{item.role}</div>
                {item.description && <p className="about-exp-desc">{item.description}</p>}
              </li>
            ))}
          </ul>
        </>
      )}

      {education.length > 0 && (
        <>
          <h2>Education</h2>
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
        <p className="about-contact">
          {about.email && <a href={`mailto:${about.email}`}>Email</a>}
          {about.email && about.linkedinUrl && <>{' · '}</>}
          {about.linkedinUrl && (
            <a href={about.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          )}
        </p>
      )}
    </div>
  );
}
