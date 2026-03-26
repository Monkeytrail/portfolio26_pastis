import type { Metadata } from 'next';
import { PortableText } from '@portabletext/react';
import { client } from '@/sanity/lib/client';
import { aboutQuery, siteSettingsQuery } from '@/sanity/lib/queries';

export async function generateMetadata(): Promise<Metadata> {
  let settings: any = null;
  try { settings = await client.fetch(siteSettingsQuery); } catch { }
  return {
    title: settings?.aboutPageTitle ?? 'About — Jeroen van Ginneken',
    description:
      settings?.aboutPageDescription ??
      'Jeroen van Ginneken, UX/UI designer based in Antwerp.',
  };
}

const FALLBACK_ABOUT = {
  headline: 'Jeroen van Ginneken',
  intro: `I'm Jeroen, a UX/UI designer with 8+ years of experience helping teams build products that are clear, functional, and human.\n\nI believe great design is a conversation between people and technology. My process starts with deep research, moves through rapid iteration, and ends with a product that feels effortless to use.\n\nBased in Antwerp, I've worked with startups and scale-ups across Europe — from fintech and e-commerce to SaaS and healthcare.`,
  skills: ['Figma', 'UX Research', 'Prototyping', 'Design Systems', 'Component Libraries', 'User Testing', 'Information Architecture', 'Accessibility (WCAG)', 'HTML/CSS', 'React'],
  experience: [
    { role: 'Senior UX/UI Designer', company: 'Studio Pixel', period: '2022–Present', description: 'Leading design for multiple client products — from discovery workshops to shipped features. Defined the design process and mentored junior designers.' },
    { role: 'Product Designer', company: 'Kredit Bank', period: '2019–2022', description: 'Redesigned the core mobile banking experience, reducing support tickets by 35% and improving App Store rating from 2.8 to 4.6.' },
    { role: 'UI Designer', company: 'Digital Agency W', period: '2016–2019', description: 'Designed web and mobile interfaces for e-commerce, publishing, and SaaS clients. Delivered 20+ projects from brief to handoff.' },
  ],
  education: [
    { degree: 'Master in Interaction Design', school: 'LUCA School of Arts', year: '2016', note: 'Graduated with distinction' },
    { degree: 'Bachelor in Graphic Design', school: 'LUCA School of Arts', year: '2014', note: '' },
  ],
  email: 'coffee@jeroenvanginneken.be',
  linkedinUrl: 'https://linkedin.com/in/jeroenvanginneken',
};

export default async function AboutPage() {
  let about: any = null;
  try { about = await client.fetch(aboutQuery); } catch { }

  const d = about ?? FALLBACK_ABOUT;
  const headline    = d.headline    ?? FALLBACK_ABOUT.headline;
  const skills      = Array.isArray(d.skills) && d.skills.every((v: any) => typeof v === 'string')
    ? d.skills : FALLBACK_ABOUT.skills;
  const experience  = Array.isArray(d.experience)  ? d.experience  : FALLBACK_ABOUT.experience;
  const education   = Array.isArray(d.education)   ? d.education   : FALLBACK_ABOUT.education;
  const email       = d.email       ?? FALLBACK_ABOUT.email;
  const linkedinUrl = d.linkedinUrl ?? FALLBACK_ABOUT.linkedinUrl;
  const introIsBlocks = Array.isArray(d.intro);

  return (
    <div className="prose">
      <h1>{headline}</h1>

      <div className="about-intro">
        {introIsBlocks
          ? <PortableText value={d.intro} />
          : <p style={{ whiteSpace: 'pre-line' }}>{d.intro ?? FALLBACK_ABOUT.intro}</p>
        }
      </div>

      {skills.length > 0 && (
        <p className="about-skills">{skills.join(', ')}</p>
      )}

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

      <p className="about-contact">
        <a href={`mailto:${email}`}>Email</a>
        {linkedinUrl && (
          <>{' · '}<a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a></>
        )}
      </p>
    </div>
  );
}
