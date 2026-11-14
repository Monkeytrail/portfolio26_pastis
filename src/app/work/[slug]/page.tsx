import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { safeFetch } from '@/sanity/lib/client';
import { projectBySlugQuery, projectNavQuery, projectSlugsQuery, siteSettingsQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import { disciplineLabels } from '@/lib/disciplines';

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
    const cover = project.coverImage ? urlForImage(project.coverImage) : null;
    return {
      title: `${project.title} — Jeroen van Ginneken`,
      description: project.shortDescription ?? project.description,
      openGraph: cover ? { images: [{ url: cover }] } : undefined,
    };
  }
  return { title: 'Project — Jeroen van Ginneken' };
}

function figmaEmbedUrl(url: string) {
  return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;
}

function Figure({ image, caption, sizes }: { image: any; caption?: string; sizes: string }) {
  const url = image ? urlForImage(image) : null;
  if (!url) return null;
  return (
    <figure className="block-figure">
      <Image src={url} alt={image.alt ?? ''} width={1600} height={1000} sizes={sizes} />
      {caption && <figcaption className="meta-text">{caption}</figcaption>}
    </figure>
  );
}

function ContentBlock({ block }: { block: any }) {
  switch (block.contentType) {
    case 'heading':
      return <h2 className="block-heading">{block.text}</h2>;

    case 'text':
      return <p className="block-text">{block.text}</p>;

    case 'quote':
      return <blockquote className="block-quote">{block.text}</blockquote>;

    case 'image':
      return (
        <div className="block-wide">
          <Figure image={block.image} caption={block.caption} sizes="(min-width: 1280px) 1200px, 100vw" />
        </div>
      );

    case 'gallery': {
      if (!block.images?.length) return null;
      return (
        <div className="block-wide">
          <div className="block-gallery">
            {block.images.map((img: any, i: number) => (
              <Figure key={i} image={img} sizes="(min-width: 760px) 50vw, 100vw" />
            ))}
          </div>
          {block.caption && <p className="meta-text block-caption">{block.caption}</p>}
        </div>
      );
    }

    case 'results':
      return (
        <ol className="block-results">
          {block.items?.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );

    case 'code':
      if (!block.text) return null;
      return (
        <div className="block-code">
          <pastis-code-block code={block.text} language={block.language} copyable />
        </div>
      );

    case 'componentSpec':
      return (
        <div className="block-wide">
          <div className="block-spec">
            <Figure image={block.image} caption={block.caption} sizes="(min-width: 900px) 760px, 100vw" />
            {block.items?.length > 0 && (
              <div>
                <p className="meta-text block-caption">Tokens &amp; props</p>
                <ul>
                  {block.items.map((item: string, i: number) => (
                    <li key={i}><code>{item}</code></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      );

    case 'beforeAfter':
      return (
        <div className="block-wide">
          <div className="block-before-after">
            {[['Before', block.before], ['After', block.after]].map(([label, image]) => (
              <figure key={label}>
                <span className="meta-text">{label}</span>
                <Figure image={image} sizes="(min-width: 760px) 50vw, 100vw" />
              </figure>
            ))}
          </div>
          {block.caption && <p className="meta-text block-caption">{block.caption}</p>}
        </div>
      );

    case 'figmaEmbed':
      if (!block.url) return null;
      return (
        <div className="block-wide block-embed">
          <iframe
            src={figmaEmbedUrl(block.url)}
            title={block.caption ?? 'Figma file'}
            loading="lazy"
            allowFullScreen
          />
          {block.caption && <p className="meta-text block-caption">{block.caption}</p>}
        </div>
      );

    default:
      return null;
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const [project, settings, nav] = await Promise.all([
    safeFetch<any>(projectBySlugQuery, { slug }),
    safeFetch<any>(siteSettingsQuery),
    safeFetch<{ title: string; slug: string; client?: string }[]>(projectNavQuery),
  ]);

  if (!project) notFound();

  const coverImageUrl = project.coverImage ? urlForImage(project.coverImage) : null;
  const coverLightUrl = project.coverImageLight ? urlForImage(project.coverImageLight) : null;

  const navIndex = nav?.findIndex((p) => p.slug === slug) ?? -1;
  const next = nav?.length ? nav[(navIndex + 1) % nav.length] : null;

  const meta = [
    ['Role', project.role],
    ['Client', project.client],
    ['Year', project.year],
    ['Discipline', disciplineLabels(project.disciplines).join(', ')],
    ['Tools', project.tools?.join(', ')],
  ].filter(([, value]) => value);

  return (
    <article>
      <header className="container project-hero">
        <Link href="/#work" className="back-link">
          {settings?.projectBackLinkLabel ?? '← All work'}
        </Link>

        <pastis-statement size="lg" eyebrow={[project.client, project.year].filter(Boolean).join(' · ')}>
          <h1>{project.title}</h1>
        </pastis-statement>

        {project.shortDescription && <p className="lede">{project.shortDescription}</p>}

        {meta.length > 0 && (
          <dl className="project-meta">
            {meta.map(([label, value]) => (
              <div key={label}>
                <dt className="meta-text">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        )}
      </header>

      {coverImageUrl && (
        <div className="container container--full">
          <div className={`project-cover${coverLightUrl ? ' has-light-cover' : ''}`}>
            <Image
              src={coverImageUrl}
              alt={project.coverImage?.alt ?? ''}
              fill
              sizes="(min-width: 1680px) 1600px, 100vw"
              className="cover--dark"
              priority
            />
            {coverLightUrl && (
              <Image
                src={coverLightUrl}
                alt={project.coverImage?.alt ?? ''}
                fill
                sizes="(min-width: 1680px) 1600px, 100vw"
                className="cover--light"
              />
            )}
          </div>
        </div>
      )}

      {project.metrics?.length > 0 && (
        <div className="container section">
          <div className="project-metrics">
            {project.metrics.map((m: { value: string; label: string }, i: number) => (
              <pastis-stat-card key={i} value={m.value} label={m.label} data-reveal="" />
            ))}
          </div>
        </div>
      )}

      <div className="project-body">
        {project.description && <p className="block-description">{project.description}</p>}

        {project.detailedContent?.map((block: any, i: number) => (
          <ContentBlock key={block._key ?? i} block={block} />
        ))}

        {project.links?.length > 0 && (
          <div className="project-links">
            {project.links.map((link: { label: string; url: string }) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="btn">
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>

      {next && next.slug !== slug && (
        <nav className="container next-project" aria-label="Next project">
          <span className="section-label">Next project</span>
          <Link href={`/work/${next.slug}`}>
            {next.title} <span aria-hidden="true">→</span>
          </Link>
        </nav>
      )}
    </article>
  );
}
