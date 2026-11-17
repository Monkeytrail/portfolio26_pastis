import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { client, safeFetch } from '@/sanity/lib/client';
import { projectBySlugQuery, projectSlugsQuery, siteSettingsQuery } from '@/sanity/lib/queries';
import { ogImageUrl, urlForImage } from '@/sanity/lib/image';

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
    const title = `${project.title} — Jeroen van Ginneken`;
    const description = project.shortDescription ?? project.description;
    // The homepage card image doubles as the link preview when a project is shared.
    const ogImage = ogImageUrl(project.coverImage);
    const images = ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined;
    return {
      title,
      description,
      openGraph: { title, description, type: 'article', images },
      twitter: { card: images ? 'summary_large_image' : 'summary', title, description, images: images?.map((i) => i.url) },
    };
  }
  return { title: 'Project — Jeroen van Ginneken' };
}

// Prefer the alt text set in Sanity; otherwise turn a file name like
// "02-producten-overzicht.png" into "Heylen Ceramics — producten overzicht".
function altFor(img: any, projectTitle: string, index: number) {
  if (img?.alt) return img.alt;
  const name = (img?.filename ?? '')
    .replace(/^.*\//, '')
    .replace(/\.[a-z0-9]+$/i, '')
    .replace(/^\d+[-_ ]+/, '')
    .replace(/[-_]+/g, ' ')
    .trim()
    .toLowerCase();
  if (/[a-z]{3,}/.test(name) && !/^[a-z]{1,3}\d+$/.test(name)) return `${projectTitle} — ${name}`;
  // Names like "cc2" carry only a number; use it so screens stay distinguishable.
  const number = name.match(/\d+/)?.[0] ?? String(index + 1);
  return `${projectTitle} — screen ${number}`;
}

// Shared by single images and gallery images in the content flow.
const mediaImageSize = { width: 1440, height: 1800, sizes: '(max-width: 640px) 100vw, 912px' };

function ContentBlock({ block, projectTitle }: { block: any; projectTitle: string }) {
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
          alt={altFor(block.image, projectTitle, 0)}
          {...mediaImageSize}
          className="project-media-img"
        />
      );
    }

    case 'gallery': {
      if (!block.images?.length) return null;
      const leadFull = block.images.length % 2 === 1;
      return (
        <div className="project-content-gallery">
          {block.images.map((img: any, i: number) => {
            const url = urlForImage(img);
            if (!url) return null;
            return (
              <Image
                key={i}
                src={url}
                alt={altFor(img, projectTitle, i)}
                {...mediaImageSize}
                className={leadFull && i === 0 ? 'project-media-img is-full' : 'project-media-img'}
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
  const sb = project.summaryBox;
  const credits = [
    ['Role', sb?.role],
    ['Team', sb?.team],
    ['Timeline', sb?.timeline],
    ['Tools', sb?.tools?.join(', ')],
    ['Outcome', sb?.outcome],
  ].filter(([, value]) => value);

  // The first image block becomes the hero; everything else flows below the intro.
  const blocks: any[] = project.detailedContent ?? [];
  const heroIndex = blocks.findIndex((b) => b.contentType === 'image' && b.image);
  const heroUrl = heroIndex >= 0 ? urlForImage(blocks[heroIndex].image) : null;
  const rest = blocks.filter((_, i) => i !== heroIndex);

  const backLink = (
    <Link href="/" className="project-back-pill">
      {settings?.projectBackLinkLabel ?? '← Work'}
    </Link>
  );

  return (
    <article className="project-page">
      <div className="project-sheet">
        {heroUrl ? (
          <div className="project-hero">
            {backLink}
            <div className="project-hero-window">
              <Image
                src={heroUrl}
                alt={altFor(blocks[heroIndex].image, project.title, 0)}
                width={1440}
                height={1800}
                sizes="(max-width: 640px) 90vw, 800px"
                priority
              />
            </div>
          </div>
        ) : (
          <div className="project-hero-bare">{backLink}</div>
        )}

        <header className="project-intro">
          <h1 className="project-title">{project.title}</h1>
          {project.description && <p className="project-description">{project.description}</p>}
          {metaParts.length > 0 && <p className="project-meta">{metaParts.join(' · ')}</p>}
          {project.links?.length > 0 && (
            <div className="project-link-pills">
              {project.links.map((link: { label: string; url: string }) => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link-pill">
                  {link.label} →
                </a>
              ))}
            </div>
          )}
        </header>

        {rest.length > 0 && (
          <div className="project-media">
            {rest.map((block, i) => {
              const isMedia = block.contentType === 'image' || block.contentType === 'gallery';
              if (isMedia) {
                return <ContentBlock key={i} block={block} projectTitle={project.title} />;
              }
              return (
                <div key={i} className="project-narrow">
                  <ContentBlock block={block} projectTitle={project.title} />
                </div>
              );
            })}
          </div>
        )}

        {project.testimonial?.quote && (
          <div className="project-narrow project-testimonial">
            <blockquote>"{project.testimonial.quote}"</blockquote>
            <cite>
              {project.testimonial.author}
              {project.testimonial.authorRole && ` · ${project.testimonial.authorRole}`}
            </cite>
          </div>
        )}

        {credits.length > 0 && (
          <dl className="project-narrow project-credits">
            {credits.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </article>
  );
}
