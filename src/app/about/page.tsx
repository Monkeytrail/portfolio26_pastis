import type { Metadata } from 'next';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { safeFetch } from '@/sanity/lib/client';
import { aboutQuery, siteSettingsQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await safeFetch<any>(siteSettingsQuery);
  return {
    title: settings?.aboutPageTitle,
    description: settings?.aboutPageDescription,
  };
}

export default async function AboutPage() {
  const [about, settings] = await Promise.all([
    safeFetch<any>(aboutQuery),
    safeFetch<any>(siteSettingsQuery),
  ]);

  const skills = Array.isArray(about?.skills) && about.skills.every((v: any) => typeof v === 'string')
    ? about.skills : [];
  const skillCards = Array.isArray(about?.skillCards) ? about.skillCards : [];
  const experience = Array.isArray(about?.experience) ? about.experience : [];
  const education = Array.isArray(about?.education) ? about.education : [];
  const introIsBlocks = Array.isArray(about?.intro);
  const profileImageUrl = about?.profileImage ? urlForImage(about.profileImage) : null;

  return (
    <div className="prose">
      <h1>{about?.headline}</h1>

      {profileImageUrl && (
        <Image
          src={profileImageUrl}
          alt={about?.headline ?? 'Profile'}
          width={80}
          height={80}
          className="about-profile-img"
        />
      )}

      <div className="about-intro">
        {introIsBlocks
          ? <PortableText value={about.intro} />
          : <p style={{ whiteSpace: 'pre-line' }}>{about?.intro}</p>
        }
      </div>

      {skills.length > 0 && (
        <p className="about-skills">{skills.join(', ')}</p>
      )}

      {skillCards.length > 0 && (
        <>
          <h2>Expertise</h2>
          <div className="about-skill-cards">
            {skillCards.map((card: any, i: number) => (
              <div key={i} className="about-skill-card">
                <p className="about-skill-card-title">{card.title}</p>
                {card.desc && <p className="about-skill-card-desc">{card.desc}</p>}
              </div>
            ))}
          </div>
        </>
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

      {(about?.email || about?.linkedinUrl || settings?.cvUrl) && (
        <p className="about-contact">
          {about?.email && <a href={`mailto:${about.email}`}>Email</a>}
          {about?.email && about?.linkedinUrl && <>{' · '}</>}
          {about?.linkedinUrl && (
            <a href={about.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          )}
          {settings?.cvUrl && (
            <>
              {(about?.email || about?.linkedinUrl) && <>{' · '}</>}
              <a href={settings.cvUrl} target="_blank" rel="noopener noreferrer" className="about-cv-link">
                Download CV ↓
              </a>
            </>
          )}
        </p>
      )}
    </div>
  );
}
