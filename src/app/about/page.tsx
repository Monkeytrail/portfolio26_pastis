import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { aboutQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import ExperienceTimeline from '@/components/ExperienceTimeline';

export const metadata: Metadata = {
  title: 'About — Jeroen van Ginneken',
  description:
    'Learn about Jeroen van Ginneken, a UX/UI designer based in Antwerp with 8+ years of experience crafting thoughtful digital products.',
};

const FALLBACK_ABOUT = {
  headline: 'Designing products\npeople love to use.',
  subheadline: 'UX/UI Designer · Antwerp',
  intro: `I'm Jeroen, a UX/UI designer with 8+ years of experience helping teams build products that are clear, functional, and human.

I believe great design is a conversation between people and technology. My process starts with deep research, moves through rapid iteration, and ends with a product that feels effortless to use.

Based in Antwerp, I've worked with startups and scale-ups across Europe — from fintech and e-commerce to SaaS and healthcare.`,
  whatILove: [
    'Research & discovery',
    'Component design',
    'Design systems',
    'Interaction design',
    'Accessibility',
    'Developer collaboration',
  ],
  skills: [
    'Figma',
    'UX Research',
    'Prototyping',
    'Design Systems',
    'Component Libraries',
    'User Testing',
    'Information Architecture',
    'Accessibility (WCAG)',
    'HTML/CSS',
    'React',
    'Framer',
    'Miro',
  ],
  experience: [
    {
      role: 'Senior UX/UI Designer',
      company: 'Studio Pixel',
      period: '2022 – Present',
      description:
        'Leading design for multiple client products — from discovery workshops to shipped features. Defined the design process and mentored junior designers.',
    },
    {
      role: 'Product Designer',
      company: 'Kredit Bank',
      period: '2019 – 2022',
      description:
        'Redesigned the core mobile banking experience, reducing support tickets by 35% and improving App Store rating from 2.8 to 4.6.',
    },
    {
      role: 'UI Designer',
      company: 'Digital Agency W',
      period: '2016 – 2019',
      description:
        'Designed web and mobile interfaces for e-commerce, publishing, and SaaS clients. Delivered 20+ projects from brief to handoff.',
    },
  ],
  education: [
    {
      degree: 'Master in Interaction Design',
      school: 'LUCA School of Arts',
      year: '2016',
      note: 'Graduated with distinction',
    },
    {
      degree: 'Bachelor in Graphic Design',
      school: 'LUCA School of Arts',
      year: '2014',
      note: '',
    },
  ],
  quote: 'Design is not just what it looks like and feels like. Design is how it works.',
  email: 'coffee@jeroenvanginneken.be',
  linkedinUrl: 'https://linkedin.com/in/jeroenvanginneken',
  profileImage: null,
};

const SVG_PROPS = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

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

const FALLBACK_SKILL_CARDS = [
  { iconKey: 'research', title: 'User Research', desc: 'I root every design decision in user insight — interviews, usability tests, surveys, and analytics.' },
  { iconKey: 'interaction', title: 'Interaction Design', desc: 'Crafting flows that are intuitive and delightful, with careful attention to micro-interactions and feedback.' },
  { iconKey: 'systems', title: 'Design Systems', desc: 'Building the foundation: tokens, components, documentation — systems that scale with your product.' },
  { iconKey: 'mobile', title: 'Mobile & Web', desc: 'Native iOS/Android patterns, responsive web, and cross-platform experiences that feel right on every device.' },
  { iconKey: 'accessibility', title: 'Accessibility', desc: 'WCAG-compliant design that works for everyone — accessibility is a baseline, not a checkbox.' },
  { iconKey: 'collaboration', title: 'Dev Collaboration', desc: 'I speak the language of code. Clean handoffs, design tokens, and pairing with engineers to ship with confidence.' },
];

export default async function AboutPage() {
  let about: any = null;

  try {
    about = await client.fetch(aboutQuery);
  } catch {
    // Sanity not configured
  }

  // Safely extract data, falling back if Sanity returns unexpected types
  const rawData = about ?? FALLBACK_ABOUT;

  // Helper to ensure a value is a plain string (not a Sanity block object)
  function safeString(val: any, fallback: string): string {
    if (typeof val === 'string') return val;
    return fallback;
  }

  // Helper to ensure an array of plain strings
  function safeStringArray(val: any, fallback: string[]): string[] {
    if (Array.isArray(val) && val.every((v) => typeof v === 'string')) return val;
    return fallback;
  }

  // Helper to ensure an array of plain objects with string properties
  function safeObjectArray<T>(val: any, fallback: T[]): T[] {
    if (Array.isArray(val)) return val;
    return fallback;
  }

  const data = {
    headline: safeString(rawData.headline, FALLBACK_ABOUT.headline),
    subheadline: safeString(rawData.subheadline, FALLBACK_ABOUT.subheadline),
    intro: safeString(rawData.intro, FALLBACK_ABOUT.intro),
    whatILove: safeStringArray(rawData.whatILove, FALLBACK_ABOUT.whatILove),
    skills: safeStringArray(rawData.skills, FALLBACK_ABOUT.skills),
    skillCards: safeObjectArray(rawData.skillCards, FALLBACK_SKILL_CARDS),
    experience: safeObjectArray(rawData.experience, FALLBACK_ABOUT.experience),
    education: safeObjectArray(rawData.education, FALLBACK_ABOUT.education),
    quote: safeString(rawData.quote, FALLBACK_ABOUT.quote),
    email: safeString(rawData.email, FALLBACK_ABOUT.email),
    linkedinUrl: safeString(rawData.linkedinUrl, FALLBACK_ABOUT.linkedinUrl),
    profileImage: rawData.profileImage ?? null,
  };
  const profileImageUrl = data.profileImage ? urlForImage(data.profileImage) : null;

  return (
    <>
      {/* ── INTRO ── */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-grid">
            {/* Profile image */}
            <div className="about-profile-image-wrapper">
              {profileImageUrl ? (
                <Image
                  src={profileImageUrl}
                  alt="Jeroen van Ginneken"
                  width={360}
                  height={480}
                  className="about-profile-image"
                  priority
                />
              ) : (
                <div className="about-profile-image-placeholder">
                  <div className="about-profile-initials">JvG</div>
                  <div className="about-profile-label">Jeroen van Ginneken</div>
                </div>
              )}
            </div>

            {/* Text content */}
            <div>
              <div className="about-eyebrow">About</div>
              <h1 className="about-headline" style={{ whiteSpace: 'pre-line' }}>
                {data.headline}
              </h1>
              <p className="about-intro">{data.intro}</p>

              {data.skills?.length > 0 && (
                <div className="skills-tags">
                  {data.skills.slice(0, 8).map((skill: string) => (
                    <span key={skill} className="skills-tag">{skill}</span>
                  ))}
                </div>
              )}

              <div className="about-cta" style={{ marginTop: 32 }}>
                <a
                  href={`mailto:${data.email}`}
                  className="btn btn-primary"
                >
                  Get in touch →
                </a>
                {data.linkedinUrl && (
                  <a
                    href={data.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    LinkedIn ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT I DO ── */}
      <section className="what-i-do">
        <div className="container">
          <div className="section-label">What I do</div>
          <h2 className="section-heading">Skills & Expertise</h2>
          <p className="section-subheading">
            From research to high-fidelity prototypes, I cover the full spectrum of product design.
          </p>
          <div className="skills-grid">
            {data.skillCards.map((card: any) => (
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
          <div className="section-label">Experience</div>
          <h2 className="section-heading">Career path</h2>
          <p className="section-subheading">
            8+ years designing products across fintech, e-commerce, and SaaS.
          </p>
          <ExperienceTimeline items={data.experience} />
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="education-section">
        <div className="container">
          <div className="section-label">Education</div>
          <h2 className="section-heading">Background</h2>

          <div className="education-list">
            {data.education.map(
              (item: any, i: number) => (
                <div key={i} className="education-item">
                  <div className="education-year">{item.year}</div>
                  <div>
                    <div className="education-degree">{item.degree}</div>
                    <div className="education-school">{item.school}</div>
                    {item.note && (
                      <div className="education-note">{item.note}</div>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="contact-cta">
        <div className="container">
          <div className="contact-cta-label">Let's connect</div>
          <h2 className="contact-cta-headline">Let's work together</h2>
          <p className="contact-cta-sub">{data.quote}</p>
          <div className="contact-cta-actions">
            <a
              href={`mailto:${data.email}`}
              className="btn btn-primary"
            >
              Say hello →
            </a>
            {data.linkedinUrl && (
              <a
                href={data.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                LinkedIn ↗
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
