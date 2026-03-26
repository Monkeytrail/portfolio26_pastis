import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { projectBySlugQuery, projectSlugsQuery, siteSettingsQuery } from '@/sanity/lib/queries';
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
  } catch { }
  return { title: 'Project — Jeroen van Ginneken' };
}

function ContentBlock({ block }: { block: any }) {
  switch (block.contentType) {
    case 'heading':
      return <h2 className="project-content-heading">{block.text}</h2>;

    case 'text':
      return <p className="project-content-text">{block.text}</p>;

    case 'quote':
      return <blockquote className="project-content-quote">{block.text}</blockquote>;

    case 'image': {
      const imgUrl = block.image ? urlForImage(block.image) : null;
      if (!imgUrl) return null;
      return (
        <Image
          src={imgUrl}
          alt="Project image"
          width={660}
          height={440}
          className="project-content-image"
          style={{ width: '100%', height: 'auto' }}
        />
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
              <Image
                key={i}
                src={url}
                alt={`Gallery image ${i + 1}`}
                width={320}
                height={240}
                style={{ width: '100%', height: 'auto' }}
              />
            );
          })}
        </div>
      );
    }

    case 'results':
      return (
        <ul className="project-content-results">
          {block.items?.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    default:
      return null;
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  let project: any = null;
  let settings: any = null;

  try {
    [project, settings] = await Promise.all([
      client.fetch(projectBySlugQuery, { slug }),
      client.fetch(siteSettingsQuery),
    ]);
  } catch { }

  if (!project) notFound();

  const context = [project.client, project.year].filter(Boolean).join(' · ');
  const coverImageUrl = project.coverImage ? urlForImage(project.coverImage) : null;

  return (
    <article className="prose">
      <Link href="/" className="project-back-link">
        {settings?.projectBackLinkLabel ?? '← Work'}
      </Link>

      <h1>{project.title}</h1>

      {context && <p className="project-context">{context}</p>}

      {project.tags?.length > 0 && (
        <p className="project-tags">{project.tags.join(', ')}</p>
      )}

      {coverImageUrl && (
        <Image
          src={coverImageUrl}
          alt={project.title}
          width={660}
          height={440}
          className="project-cover-image"
          priority
        />
      )}

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
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
