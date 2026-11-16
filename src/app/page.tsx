import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { projectsQuery, aboutQuery, siteSettingsQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import { DragScroll } from '@/components/DragScroll';
import { ScrollTheme } from '@/components/ScrollTheme';
import { CopyEmailButton } from '@/components/CopyEmailButton';
import { LabGrid } from '@/components/LabGrid';

export default async function HomePage() {
  let projects: any[] = [];
  let about: any = null;
  let settings: any = null;

  try {
    [projects, about, settings] = await Promise.all([
      client.fetch(projectsQuery),
      client.fetch(aboutQuery),
      client.fetch(siteSettingsQuery),
    ]);
  } catch { }

  const experience: any[] = Array.isArray(about?.experience) ? about.experience : [];

  return (
    <div className="hp">
      <ScrollTheme />
      <DragScroll selector=".hp-grid" />

      {/* Hero */}
      <section className="hp-hero" data-scroll-theme="light">
        {settings?.heroEyebrow && <p className="hp-eyebrow">{settings.heroEyebrow}</p>}
        {settings?.heroHeadline && <h1 className="hp-heading">{settings.heroHeadline}</h1>}
        <p className="hp-bio" style={{ whiteSpace: 'pre-line' }}>{settings?.heroSubheadline}</p>
        <div className="hp-cta-row">
          {settings?.contactEmail && (
            <CopyEmailButton email={settings.contactEmail} />
          )}
          {settings?.socialLinks?.linkedin && (
            <pastis-button variant="ghost" href={settings.socialLinks.linkedin} target="_blank">LinkedIn ↗</pastis-button>
          )}
        </div>
      </section>

      {/* Work — full-width carousel */}
      {projects.length > 0 && (
        <section className="hp-section hp-work-section" data-scroll-theme="light">
          <p className="hp-section-label">Selected work</p>
          <div className="hp-grid">
            {projects.map((project: any) => {
              const imageUrl = project.coverImage ? urlForImage(project.coverImage) : null;
              return (
                <Link key={project._id} href={`/work/${project.slug?.current}`} className="hp-card">
                  <div className="hp-card-inner">
                    {imageUrl
                      ? <Image src={imageUrl} alt={project.title} fill sizes="(max-width:768px) 100vw, 70vw" style={{ objectFit: 'cover' }} />
                      : <div className="hp-card-bg" />
                    }
                  </div>
                  <div className="hp-card-info">
                    <span className="hp-card-title">{project.title}</span>
                    {project.year && <span className="hp-card-year">{project.year}</span>}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="hp-section" data-scroll-theme="dark">
          <p className="hp-section-label">Experience</p>
          <ul className="hp-exp">
            {experience.map((item: any, i: number) => (
              <li key={i} className="hp-exp-row">
                <span className="hp-exp-company">{item.company}</span>
                <span className="hp-exp-desc">
                  {item.role}{item.period ? ` · ${item.period}` : ''}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Lab */}
      <section className="hp-section" data-scroll-theme="dark">
        <p className="hp-section-label">Lab</p>
        <LabGrid />
      </section>

    </div>
  );
}
