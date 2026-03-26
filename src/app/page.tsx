import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { projectsQuery, siteSettingsQuery } from '@/sanity/lib/queries';

const FALLBACK_PROJECTS = [
  {
    _id: 'fallback-1',
    title: 'Design System at Scale',
    slug: { current: 'design-system-at-scale' },
    shortDescription: 'Built a cohesive component library adopted across 6 product teams.',
    year: '2024',
  },
  {
    _id: 'fallback-2',
    title: 'Mobile Banking Redesign',
    slug: { current: 'mobile-banking-redesign' },
    shortDescription: 'End-to-end redesign of a mobile banking app increasing engagement by 40%.',
    year: '2024',
  },
  {
    _id: 'fallback-3',
    title: 'E-commerce Experience',
    slug: { current: 'ecommerce-experience' },
    shortDescription: 'Streamlined checkout flow reducing cart abandonment by 25%.',
    year: '2023',
  },
  {
    _id: 'fallback-4',
    title: 'B2B Dashboard',
    slug: { current: 'b2b-dashboard' },
    shortDescription: 'Data-dense analytics dashboard for supply chain management.',
    year: '2023',
  },
];

export default async function HomePage() {
  let projects: any[] = [];
  let settings: any = null;

  try {
    [projects, settings] = await Promise.all([
      client.fetch(projectsQuery),
      client.fetch(siteSettingsQuery),
    ]);
  } catch { }

  const displayProjects = projects?.length ? projects : FALLBACK_PROJECTS;
  const headline = settings?.heroHeadline ?? 'Jeroen van Ginneken';
  const subheadline =
    settings?.heroSubheadline ??
    'I design digital products that are clear, functional, and crafted to matter. Based in Antwerp, working globally.';
  const email = settings?.contactEmail ?? 'coffee@jeroenvanginneken.be';
  const linkedinUrl = settings?.socialLinks?.linkedin ?? 'https://linkedin.com/in/jeroenvanginneken';

  return (
    <div className="prose">
      <h1>{headline}</h1>
      <p>{subheadline}</p>

      <div className="hero-actions">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hero-btn">
          LinkedIn ↗
        </a>
        <a href={`mailto:${email}`} className="hero-btn">
          Send an email
        </a>
      </div>

      <ul className="work-list">
        {displayProjects.map((project: any) => (
          <li key={project._id}>
            <Link href={`/work/${project.slug?.current ?? '#'}`}>
              <span className="work-title">{project.title}</span>
              {project.year && <span className="work-year">{project.year}</span>}
            </Link>
            {project.shortDescription && (
              <p className="work-desc">{project.shortDescription}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
