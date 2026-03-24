import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { projectBySlugQuery, projectSlugsQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const slugs = await client.fetch(projectSlugsQuery);
    return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  try {
    const project = await client.fetch(projectBySlugQuery, { slug });
    if (project) {
      return {
        title: `${project.title} — Jeroen van Ginneken`,
        description: project.shortDescription ?? project.description,
      };
    }
  } catch {
    // ignore
  }
  return { title: 'Project — Jeroen van Ginneken' };
}

const FALLBACK_PROJECTS: Record<string, any> = {
  'design-system-at-scale': {
    _id: 'fallback-1',
    title: 'Design System at Scale',
    client: 'FinTech Corp',
    year: '2024',
    tags: ['Design Systems', 'Figma', 'React'],
    description:
      'An end-to-end design system built to unify product experiences across 6 teams. Starting from a component audit, I established a shared token layer, built 120+ documented Figma components, and collaborated with engineers to publish a React implementation used in production.',
    shortDescription: 'Built a cohesive component library adopted across 6 product teams.',
    coverImage: null,
    detailedContent: [
      {
        contentType: 'heading',
        text: 'The Challenge',
      },
      {
        contentType: 'text',
        text: 'Six product teams, twelve designers, and a design language that had fragmented over three years of rapid growth. Components were duplicated, tokens inconsistent, and the developer handoff process was a source of constant friction.',
      },
      {
        contentType: 'heading',
        text: 'Approach',
      },
      {
        contentType: 'text',
        text: 'I started with a full component audit — cataloguing every UI element in production, identifying duplicates, and mapping them against user expectations. From there, I designed the token architecture: global, alias, and component-level tokens that could support multiple themes.',
      },
      {
        contentType: 'quote',
        text: 'The design system became the single source of truth, reducing design debt and accelerating feature delivery by 30%.',
      },
      {
        contentType: 'results',
        items: [
          '120+ documented Figma components shipped',
          '30% faster feature delivery post-adoption',
          'Reduced visual inconsistencies by 80%',
          'Onboarding time for new designers cut from 2 weeks to 3 days',
        ],
      },
    ],
    links: [],
  },
};

function ContentBlock({ block }: { block: any }) {
  switch (block.contentType) {
    case 'heading':
      return <h2 className="project-content-heading">{block.text}</h2>;

    case 'text':
      return (
        <div className="project-content-block">
          <p className="project-content-text">{block.text}</p>
        </div>
      );

    case 'quote':
      return (
        <blockquote className="project-content-quote">{block.text}</blockquote>
      );

    case 'image': {
      const imgUrl = block.image ? urlForImage(block.image) : null;
      if (!imgUrl) return null;
      return (
        <div className="project-content-image">
          <Image src={imgUrl} alt="Project image" width={720} height={480} style={{ width: '100%', height: 'auto' }} />
        </div>
      );
    }

    case 'gallery': {
      if (!block.images?.length) return null;
      return (
        <div className="project-content-gallery">
          {block.images.map((img: any, i: number) => {
            const url = urlForImage(img);
            if (!url) return null;
            return (
              <Image key={i} src={url} alt={`Gallery image ${i + 1}`} width={360} height={270} style={{ width: '100%', height: 'auto' }} />
            );
          })}
        </div>
      );
    }

    case 'results':
      return (
        <div className="project-content-results">
          <ul>
            {block.items?.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      );

    default:
      return null;
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  let project: any = null;

  try {
    project = await client.fetch(projectBySlugQuery, { slug });
  } catch {
    // Sanity not configured
  }

  // Try fallback
  if (!project) {
    project = FALLBACK_PROJECTS[slug] ?? null;
  }

  if (!project) {
    notFound();
  }

  const coverImageUrl = project.coverImage ? urlForImage(project.coverImage) : null;

  return (
    <article>
      {/* Hero image */}
      <div className="project-hero">
        {coverImageUrl ? (
          <Image
            src={coverImageUrl}
            alt={project.title}
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
        ) : (
          <div
            className="project-hero-placeholder"
            style={{
              background: 'linear-gradient(135deg, var(--bg-elevated) 0%, var(--bg-card) 100%)',
              backgroundImage:
                'linear-gradient(var(--border-default) 1px, transparent 1px), linear-gradient(90deg, var(--border-default) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        )}
      </div>

      {/* Meta */}
      <div className="container">
        <div className="project-meta">
          {project.client && (
            <div className="project-meta-client">{project.client}</div>
          )}
          <h1 className="project-meta-title">{project.title}</h1>
          <div className="project-meta-badges">
            {project.year && (
              <span className="project-meta-badge project-meta-badge-year">
                {project.year}
              </span>
            )}
            {project.tags?.map((tag: string) => (
              <span key={tag} className="project-meta-badge">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container">
        <div className="project-body">
          {project.description && (
            <p className="project-description">{project.description}</p>
          )}

          {project.detailedContent?.map((block: any, i: number) => (
            <ContentBlock key={i} block={block} />
          ))}

          {project.links?.length > 0 && (
            <div className="project-links">
              {project.links.map((link: { label: string; url: string }) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}

          <Link href="/" className="project-back-link">
            ← All work
          </Link>
        </div>
      </div>
    </article>
  );
}
