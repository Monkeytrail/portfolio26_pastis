import Image from 'next/image';
import { notFound } from 'next/navigation';
import { client, safeFetch } from '@/sanity/lib/client';
import { projectBySlugQuery, projectSlugsQuery, allProjectsQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import { splitTitleRows } from '@/lib/splitTitle';
import { Breadcrumb, MetricStrip, PrevNext } from '@/components/CaseStudyBits';
import Chapter from '@/components/CaseChapters';
import SiteFooter from '@/components/SiteFooter';

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
      title: `${project.title} — Case Study — JvG`,
      description: project.shortDescription ?? project.description,
    };
  }
  return { title: 'Project — Jeroen van Ginneken' };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  let project: any = null;
  let allProjects: any[] = [];

  try {
    [project, allProjects] = await Promise.all([
      client.fetch(projectBySlugQuery, { slug }),
      client.fetch(allProjectsQuery),
    ]);
  } catch { }

  if (!project) notFound();

  const coverImageUrl = project.coverImage ? urlForImage(project.coverImage) : null;
  const { row1, accent, outline } = splitTitleRows(project.title);

  const gallery = project.detailedContent?.find((b: any) => b.contentType === 'gallery')?.gallery ?? [];

  const order = allProjects.map((p) => p.slug.current);
  const idx = order.indexOf(slug);
  const prev = idx >= 0 ? allProjects[(idx - 1 + allProjects.length) % allProjects.length] : null;
  const next = idx >= 0 ? allProjects[(idx + 1) % allProjects.length] : null;

  return (
    <>
      <div className="container">
        <Breadcrumb items={[{ label: 'Work', href: '/work' }, { label: project.title }]} />
        <div className="page-hero">
          <div className="eyebrow">{project.tag ?? project.client} · {project.year}</div>
          <h1>
            {row1}<br /><span className="accent">{accent}</span>
            {outline && <><br /><span className="outline">{outline}</span></>}
            <span className="slash">.</span>
          </h1>
          <p className="lede">{project.description ?? project.shortDescription}</p>
        </div>
      </div>
      <div className="container">
        {(project.role || project.team || project.duration || project.client) && (
          <div className="case-meta">
            {project.role && <div className="cell"><div className="k">Role</div><div className="v">{project.role}</div></div>}
            {project.team && <div className="cell"><div className="k">Team</div><div className="v">{project.team}</div></div>}
            {project.duration && <div className="cell"><div className="k">Duration</div><div className="v">{project.duration}</div></div>}
            {project.client && <div className="cell"><div className="k">Client</div><div className="v">{project.client}</div></div>}
          </div>
        )}

        {coverImageUrl && (
          <div className="case-cover">
            <Image src={coverImageUrl} alt={project.title} fill sizes="100vw" style={{ objectFit: 'cover' }} priority />
          </div>
        )}

        {project.metrics?.length > 0 && <MetricStrip metrics={project.metrics} />}

        {project.chapters?.map((ch: any, i: number) => (
          <Chapter key={i} num={i + 1} label={ch.label} body={ch.body} />
        ))}

        {gallery.length > 0 && (
          <div className="case-gallery">
            {gallery.map((img: any, i: number) => {
              const url = urlForImage(img);
              if (!url) return null;
              return <Image key={i} src={url} alt={`${project.title} — image ${i + 1}`} width={640} height={480} style={{ width: '100%', height: 'auto' }} />;
            })}
          </div>
        )}

        {project.links?.length > 0 && (
          <div className="cta-row cta-row--bordered">
            {project.links.map((link: { label: string; url: string }) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="nf-btn">
                {link.label} ↗
              </a>
            ))}
          </div>
        )}

        {prev && next && prev.slug.current !== next.slug.current && <PrevNext prev={prev} next={next} />}

        <SiteFooter bordered copyright="© Jeroen van Ginneken" />
      </div>
    </>
  );
}
