import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { PortableText } from '@portabletext/react';
import { client } from '@/sanity/lib/client';
import { aboutQuery, siteSettingsQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import ExperienceTimeline from '@/components/ExperienceTimeline';

export async function generateMetadata(): Promise<Metadata> {
  let settings: any = null;
  try {
    settings = await client.fetch(siteSettingsQuery);
  } catch { /* ignore */ }
  return {
    title: settings?.aboutPageTitle ?? 'About — Jeroen van Ginneken',
    description: settings?.aboutPageDescription ?? 'Learn about Jeroen van Ginneken, a UX/UI designer based in Antwerp with 8+ years of experience crafting thoughtful digital products.',
  };
}

const FALLBACK_ABOUT = {
  eyebrow: 'About',
  headline: 'Designing products\npeople love to use.',
  subheadline: 'UX/UI Designer · Antwerp',
  intro: `I'm Jeroen, a UX/UI designer with 8+ years of experience helping teams build products that are clear, functional, and human.\n\nI believe great design is a conversation between people and technology. My process starts with deep research, moves through rapid iteration, and ends with a product that feels effortless to use.\n\nBased in Antwerp, I've worked with startups and scale-ups across Europe — from fintech and e-commerce to SaaS and healthcare.`,
  getInTouchLabel: 'Get in touch →',
  whatILove: ['Research & discovery', 'Component design', 'Design systems', 'Interaction design', 'Accessibility', 'Developer collaboration'],
  skills: ['Figma', 'UX Research', 'Prototyping', 'Design Systems', 'Component Libraries', 'User Testing', 'Information Architecture', 'Accessibility (WCAG)', 'HTML/CSS', 'React', 'Framer', 'Miro'],
  skillsSectionLabel: 'What I do',
  skillsSectionHeading: 'Skills & Expertise',
  skillsSectionSubheading: 'From research to high-fidelity prototypes, I cover the full spectrum of product design.',
  experienceSectionLabel: 'Experience',
  experienceSectionHeading: 'Career path',
  experienceSectionSubheading: '8+ years designing products across fintech, e-commerce, and SaaS.',
  experience: [
    { role: 'Senior UX/UI Designer', company: 'Studio Pixel', period: '2022 – Present', description: 'Leading design for multiple client products — from discovery workshops to shipped features. Defined the design process and mentored junior designers.' },
    { role: 'Product Designer', company: 'Kredit Bank', period: '2019 – 2022', description: 'Redesigned the core mobile banking experience, reducing support tickets by 35% and improving App Store rating from 2.8 to 4.6.' },
    { role: 'UI Designer', company: 'Digital Agency W', period: '2016 – 2019', description: 'Designed web and mobile interfaces for e-commerce, publishing, and SaaS clients. Delivered 20+ projects from brief to handoff.' },
  ],
  educationSectionLabel: 'Education',
  educationSectionHeading: 'Background',
  education: [
    { degree: 'Master in Interaction Design', school: 'LUCA School of Arts', year: '2016', note: 'Graduated with distinction' },
    { degree: 'Bachelor in Graphic Design', school: 'LUCA School of Arts', year: '2014', note: '' },
  ],
  contactSectionLabel: "Let's connect",
  contactSectionHeading: "Let's work together",
  quote: 'Design is not just what it looks like and feels like. Design is how it works.',
  email: 'coffee@jeroenvanginneken.be',
  linkedinUrl: 'https://linkedin.com/in/jeroenvanginneken',
  profileImage: null,
};

const FALLBACK_SKILL_CARDS = [
  { iconKey: 'research',      title: 'User Research',      desc: 'I root every design decision in user insight — interviews, usability tests, surveys, and analytics.' },
  { iconKey: 'interaction',   title: 'Interaction Design',  desc: 'Crafting flows that are intuitive and delightful, with careful attention to micro-interactions and feedback.' },
  { iconKey: 'systems',       title: 'Design Systems',      desc: 'Building the foundation: tokens, components, documentation — systems that scale with your product.' },
  { iconKey: 'mobile',        title: 'Mobile & Web',        desc: 'Native iOS/Android patterns, responsive web, and cross-platform experiences that feel right on every device.' },
  { iconKey: 'accessibility', title: 'Accessibility',       desc: 'WCAG-compliant design that works for everyone — accessibility is a baseline, not a checkbox.' },
  { iconKey: 'collaboration', title: 'Dev Collaboration',   desc: 'I speak the language of code. Clean handoffs, design tokens, and pairing with engineers to ship with confidence.' },
];

const SVG_PROPS = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

const SKILL_ICONS: Record<string, ReactNode> = {
  research: (
    <svg {...SVG_PROPS}>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
    </svg>
  ),
  interaction: (
    <svg {...SVG_PROPS}>
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="5.5" />
      <circle cx="12" cy="12" r="9.5" strokeDasharray="2.5 2.5" />
    </svg>
  ),
  systems: (
    <svg {...SVG_PROPS}>
      <rect x="9" y="1" width="6" height="5" rx="1" />
      <rect x="1" y="17" width="6" height="6" rx="1" />
      <rect x="9" y="17" width="6" height="6" rx="1" />
      <rect x="17" y="17" width="6" height="6" rx="1" />
      <line x1="12" y1="6" x2="12" y2="13" />
      <line x1="4" y1="13" x2="20" y2="13" />
      <line x1="4" y1="13" x2="4" y2="17" />
      <line x1="12" y1="13" x2="12" y2="17" />
      <line x1="20" y1="13" x2="20" y2="17" />
    </svg>
  ),
  mobile: (
    <svg {...SVG_PROPS}>
      <rect x="1" y="7" width="14" height="13" rx="2" />
      <path d="M9 4h12a2 2 0 0 1 2 2v11" />
      <line x1="1" y1="11" x2="15" y2="11" />
    </svg>
  ),
  accessibility: (
    <svg {...SVG_PROPS}>
      <rect x="4" y="11" width="16" height="11" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 7.75-1.5" />
      <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  collaboration: (
    <svg {...SVG_PROPS}>
      <path d="M4 20l1.5-5.5L17 3l4 4L9.5 18.5z" />
      <line x1="14" y1="5" x2="19" y2="10" />
      <line x1="6" y1="15" x2="9" y2="15" />
      <polyline points="19 14 22 17 19 20" />
    </svg>
  ),
};

export default async function AboutPage() {
  let about: any = null;

  try {
    about = await client.fetch(aboutQuery);
  } catch { /* Sanity not configured */ }

  const d = about ?? FALLBACK_ABOUT;

  const eyebrow               = d.eyebrow               ?? FALLBACK_ABOUT.eyebrow;
  const headline              = d.headline              ?? FALLBACK_ABOUT.headline;
  const skills                = Array.isArray(d.skills) && d.skills.every((v: any) => typeof v === 'string') ? d.skills : FALLBACK_ABOUT.skills;
  const skillCards            = Array.isArray(d.skillCards) && d.skillCards.length ? d.skillCards : FALLBACK_SKILL_CARDS;
  const experience            = Array.isArray(d.experience) ? d.experience : FALLBACK_ABOUT.experience;
  const education             = Array.isArray(d.education) ? d.education : FALLBACK_ABOUT.education;
  const getInTouchLabel       = d.getInTouchLabel       ?? FALLBACK_ABOUT.getInTouchLabel;
  const skillsSectionLabel    = d.skillsSectionLabel    ?? FALLBACK_ABOUT.skillsSectionLabel;
  const skillsSectionHeading  = d.skillsSectionHeading  ?? FALLBACK_ABOUT.skillsSectionHeading;
  const skillsSectionSub      = d.skillsSectionSubheading ?? FALLBACK_ABOUT.skillsSectionSubheading;
  const expSectionLabel       = d.experienceSectionLabel   ?? FALLBACK_ABOUT.experienceSectionLabel;
  const expSectionHeading     = d.experienceSectionHeading ?? FALLBACK_ABOUT.experienceSectionHeading;
  const expSectionSub         = d.experienceSectionSubheading ?? FALLBACK_ABOUT.experienceSectionSubheading;
  const eduSectionLabel       = d.educationSectionLabel   ?? FALLBACK_ABOUT.educationSectionLabel;
  const eduSectionHeading     = d.educationSectionHeading ?? FALLBACK_ABOUT.educationSectionHeading;
  const contactSectionLabel   = d.contactSectionLabel   ?? FALLBACK_ABOUT.contactSectionLabel;
  const contactSectionHeading = d.contactSectionHeading ?? FALLBACK_ABOUT.contactSectionHeading;
  const quote                 = d.quote                 ?? FALLBACK_ABOUT.quote;
  const email                 = d.email                 ?? FALLBACK_ABOUT.email;
  const linkedinUrl           = d.linkedinUrl           ?? FALLBACK_ABOUT.linkedinUrl;
  const profileImageUrl       = d.profileImage ? urlForImage(d.profileImage) : null;

  // intro can be Portable Text blocks or plain string
  const introIsBlocks = Array.isArray(d.intro);

  return (
    <>
      {/* ── INTRO ── */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-grid">
            <div className="about-profile-image-wrapper">
              {profileImageUrl ? (
                <Image src={profileImageUrl} alt={headline} width={360} height={480} className="about-profile-image" priority />
              ) : (
                <div className="about-profile-image-placeholder">
                  <div className="about-profile-initials">JvG</div>
                  <div className="about-profile-label">Jeroen van Ginneken</div>
                </div>
              )}
            </div>

            <div>
              <div className="about-eyebrow">{eyebrow}</div>
              <h1 className="about-headline" style={{ whiteSpace: 'pre-line' }}>{headline}</h1>

              <div className="about-intro">
                {introIsBlocks
                  ? <PortableText value={d.intro} />
                  : <p>{d.intro ?? FALLBACK_ABOUT.intro}</p>
                }
              </div>

              {skills.length > 0 && (
                <div className="skills-tags">
                  {skills.slice(0, 8).map((skill: string) => (
                    <span key={skill} className="skills-tag">{skill}</span>
                  ))}
                </div>
              )}

              <div className="about-cta" style={{ marginTop: 32 }}>
                <a href={`mailto:${email}`} className="btn btn-primary">{getInTouchLabel}</a>
                {linkedinUrl && (
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">LinkedIn ↗</a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT I DO ── */}
      <section className="what-i-do">
        <div className="container">
          <div className="section-label">{skillsSectionLabel}</div>
          <h2 className="section-heading">{skillsSectionHeading}</h2>
          <p className="section-subheading">{skillsSectionSub}</p>
          <div className="skills-grid">
            {skillCards.map((card: any) => (
              <div key={card.title} className="skill-card">
                <div className="skill-card-icon">{SKILL_ICONS[card.iconKey]}</div>
                <div className="skill-card-title">{card.title}</div>
                <div className="skill-card-desc">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="experience-section">
        <div className="container">
          <div className="section-label">{expSectionLabel}</div>
          <h2 className="section-heading">{expSectionHeading}</h2>
          <p className="section-subheading">{expSectionSub}</p>
          <ExperienceTimeline items={experience} />
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="education-section">
        <div className="container">
          <div className="section-label">{eduSectionLabel}</div>
          <h2 className="section-heading">{eduSectionHeading}</h2>
          <div className="education-list">
            {education.map((item: any, i: number) => (
              <div key={i} className="education-item">
                <div className="education-year">{item.year}</div>
                <div>
                  <div className="education-degree">{item.degree}</div>
                  <div className="education-school">{item.school}</div>
                  {item.note && <div className="education-note">{item.note}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="contact-cta">
        <div className="container">
          <div className="contact-cta-label">{contactSectionLabel}</div>
          <h2 className="contact-cta-headline">{contactSectionHeading}</h2>
          <p className="contact-cta-sub">{quote}</p>
          <div className="contact-cta-actions">
            <a href={`mailto:${email}`} className="btn btn-primary">Say hello →</a>
            {linkedinUrl && (
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">LinkedIn ↗</a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
