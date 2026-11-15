import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { client, safeFetch } from '@/sanity/lib/client';
import { projectBySlugQuery, projectSlugsQuery, siteSettingsQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = (await safeFetch<{ slug: string }[]>(projectSlugsQuery)) ?? [];
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = await safeFetch<any>(projectBySlugQuery, { slug });
  if (project) {
    return {
      title: `${project.title} — Jeroen van Ginneken`,
      description: project.shortDescription ?? project.description,
    };
  }
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
          width={1920}
          height={1080}
          style={{ width: '100%', height: 'auto', display: 'block' }}
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
                width={960}
                height={640}
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

  const metaParts = [project.client, project.year, ...(project.tags ?? [])].filter(Boolean);
  const coverImageUrl = project.coverImage ? urlForImage(project.coverImage) : null;
  const sb = project.summaryBox;
  const hasSummary = sb && (sb.role || sb.team || sb.timeline || sb.tools?.length || sb.outcome);

  return (
    <article className="project-page">
      <div className="project-page-header">
        <Link href="/" className="project-back-link">
          {settings?.projectBackLinkLabel ?? '← Work'}
        </Link>
        <h1 className="project-title">{project.title}</h1>
        {metaParts.length > 0 && (
          <p className="project-meta">{metaParts.join(' · ')}</p>
        )}
        {project.description && (
          <p className="project-description">{project.description}</p>
        )}
      </div>

      {hasSummary && (
        <div className="project-summary-box">
          <div className="project-summary-box-inner">
            {sb.role && <div className="summary-row"><span className="summary-key">Role</span><span className="summary-val">{sb.role}</span></div>}
            {sb.team && <div className="summary-row"><span className="summary-key">Team</span><span className="summary-val">{sb.team}</span></div>}
            {sb.timeline && <div className="summary-row"><span className="summary-key">Timeline</span><span className="summary-val">{sb.timeline}</span></div>}
            {sb.tools?.length > 0 && <div className="summary-row"><span className="summary-key">Tools</span><span className="summary-val">{sb.tools.join(', ')}</span></div>}
            {sb.outcome && <div className="summary-row"><span className="summary-key">Outcome</span><span className="summary-val">{sb.outcome}</span></div>}
          </div>
        </div>
      )}

      {coverImageUrl && (
        <Image
          src={coverImageUrl}
          alt={project.title}
          width={1920}
          height={1080}
          className="project-img-full"
          priority
          style={{ width: '100%', height: 'auto' }}
        />
      )}

      {project.detailedContent?.map((block: any, i: number) => {
        const isMedia = block.contentType === 'image' || block.contentType === 'gallery';
        if (isMedia) {
          return <ContentBlock key={i} block={block} />;
        }
        return (
          <div key={i} className="project-body-text">
            <ContentBlock block={block} />
          </div>
        );
      })}

      {project.testimonial?.quote && (
        <div className="project-body-text">
          <div className="project-testimonial">
            <blockquote>"{project.testimonial.quote}"</blockquote>
            <cite>
              {project.testimonial.author}
              {project.testimonial.authorRole && ` · ${project.testimonial.authorRole}`}
            </cite>
          </div>
        </div>
      )}

      {project.links?.length > 0 && (
        <div className="project-page-footer">
          {project.links.map((link: { label: string; url: string }) => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
