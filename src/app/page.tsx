import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { projectsQuery, siteSettingsQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';

const FALLBACK_PROJECTS = [
  {
    _id: 'fallback-1',
    title: 'Design System at Scale',
    slug: { current: 'design-system-at-scale' },
    shortDescription: 'Built a cohesive component library adopted across 6 product teams.',
    year: '2024',
    client: 'FinTech Corp',
    tags: ['Design Systems', 'Figma', 'React'],
    coverImage: null,
  },
  {
    _id: 'fallback-2',
    title: 'Mobile Banking Redesign',
    slug: { current: 'mobile-banking-redesign' },
    shortDescription: 'End-to-end redesign of a mobile banking app increasing engagement by 40%.',
    year: '2024',
    client: 'Kredit Bank',
    tags: ['Mobile', 'UX Research', 'iOS'],
    coverImage: null,
  },
  {
    _id: 'fallback-3',
    title: 'E-commerce Experience',
    slug: { current: 'ecommerce-experience' },
    shortDescription: 'Streamlined checkout flow reducing cart abandonment by 25%.',
    year: '2023',
    client: 'Retail Platform',
    tags: ['E-commerce', 'Conversion', 'A/B Testing'],
    coverImage: null,
  },
  {
    _id: 'fallback-4',
    title: 'B2B Dashboard',
    slug: { current: 'b2b-dashboard' },
    shortDescription: 'Data-dense analytics dashboard for supply chain management.',
    year: '2023',
    client: 'LogiTech Solutions',
    tags: ['Dashboard', 'Data Viz', 'B2B'],
    coverImage: null,
  },
];

const FALLBACK_SETTINGS = {
  heroHeadline: 'Jeroen van Ginneken',
  heroEyebrow: 'UX / UI Designer',
  heroSubheadline:
    'I design digital products that are clear, functional, and crafted to matter. Based in Antwerp, working globally.',
};

const PLACEHOLDER_COLORS = [
  'linear-gradient(135deg, #1e1e1e 0%, #262522 100%)',
  'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
  'linear-gradient(135deg, #1e1e1e 0%, #2d1b00 100%)',
  'linear-gradient(135deg, #0d1b2a 0%, #1b2838 100%)',
];

export default async function HomePage() {
  let projects: any[] = [];
  let settings: any = null;

  try {
    [projects, settings] = await Promise.all([
      client.fetch(projectsQuery),
      client.fetch(siteSettingsQuery),
    ]);
  } catch {
    // Sanity not configured — use fallbacks
  }

  const displayProjects = projects?.length ? projects : FALLBACK_PROJECTS;
  const heroHeadline = settings?.heroHeadline ?? FALLBACK_SETTINGS.heroHeadline;
  const heroEyebrow = settings?.heroEyebrow ?? FALLBACK_SETTINGS.heroEyebrow;
  const heroSubheadline = settings?.heroSubheadline ?? FALLBACK_SETTINGS.heroSubheadline;

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div>
              <div className="hero-eyebrow">{heroEyebrow}</div>
              <h1 className="hero-title">{heroHeadline}</h1>
              <p className="hero-subtitle">{heroSubheadline}</p>
              <div className="hero-actions">
                <a href="#work" className="btn btn-primary">
                  {settings?.homeHeroCtaLabel ?? 'View work ↓'}
                </a>
                <Link href="/about" className="btn btn-ghost">
                  {settings?.homeAboutCtaLabel ?? 'About me →'}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WORK SECTION ── */}
      <section className="section" id="work">
        <div className="container">
          <div className="section-header">
            <div className="section-label">{settings?.workSectionLabel ?? 'Selected Work'}</div>
            <h2 className="section-heading">{settings?.workSectionHeading ?? 'Projects that matter'}</h2>
            <p className="section-subheading">
              {settings?.workSectionSubheading ?? 'A selection of UX/UI work spanning product design, design systems, and digital strategy.'}
            </p>
          </div>

          <div className="projects-grid">
            {displayProjects.map((project: any, index: number) => {
              const darkUrl = project.coverImage
                ? urlForImage(project.coverImage)
                : null;
              const lightUrl = project.coverImageLight
                ? urlForImage(project.coverImageLight)
                : darkUrl;

              return (
                <Link
                  key={project._id}
                  href={`/work/${project.slug?.current ?? '#'}`}
                  className="project-card"
                >
                  {darkUrl ? (
                    <>
                      <Image
                        src={darkUrl}
                        alt={project.title}
                        fill
                        className="project-card-media project-card-media--dark"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index < 2}
                      />
                      {lightUrl && lightUrl !== darkUrl && (
                        <Image
                          src={lightUrl}
                          alt={project.title}
                          fill
                          className="project-card-media project-card-media--light"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={index < 2}
                        />
                      )}
                    </>
                  ) : (
                    <div
                      className="project-card-media-placeholder"
                      style={{ background: PLACEHOLDER_COLORS[index % PLACEHOLDER_COLORS.length] }}
                    >
                      <div className="project-card-media-placeholder-pattern" />
                    </div>
                  )}

                  <div className="project-card-overlay" />

                  {project.year && (
                    <div className="project-card-year">{project.year}</div>
                  )}

                  <div className="project-card-content">
                    {project.tags?.length > 0 && (
                      <div className="project-card-tags">
                        {project.tags.slice(0, 3).map((tag: string) => (
                          <span key={tag} className="project-card-tag">{tag}</span>
                        ))}
                      </div>
                    )}
                    <div className="project-card-title">{project.title}</div>
                    {project.shortDescription && (
                      <div className="project-card-description">
                        {project.shortDescription}
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
