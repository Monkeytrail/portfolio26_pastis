import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { projectsQuery, aboutQuery, siteSettingsQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
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
  const bio: string[] = (settings?.heroSubheadline ?? '').split(/\n\s*\n/).filter(Boolean);

  return (
    <div className="hp">
      <ScrollTheme />

      {/* Hero */}
      <section className="hp-hero" data-scroll-theme="light">
        {settings?.heroHeadline && (
          <pastis-statement eyebrow={settings?.heroEyebrow} size="md">
            <h1>{settings.heroHeadline}</h1>
          </pastis-statement>
        )}
        <div className="hp-bio">
          {bio.map((para, i) => <p key={i}>{para}</p>)}
        </div>
        {/* VIBE-KILLER GAP: no button group in Pastis; layout-only rule in globals.css */}
        <div className="hp-cta-row">
          {settings?.contactEmail && (
            <CopyEmailButton email={settings.contactEmail} />
          )}
          {settings?.socialLinks?.linkedin && (
            <pastis-button variant="ghost" href={settings.socialLinks.linkedin} target="_blank">
              LinkedIn <span aria-hidden="true">↗</span>
            </pastis-button>
          )}
        </div>
      </section>

      {/* Work — full-width shelf */}
      {projects.length > 0 && (
        <section className="hp-section hp-work-section" data-scroll-theme="light">
          <h2 className="hp-section-label">Selected work</h2>
          <pastis-shelf label="Selected work">
            {projects.map((project: any) => {
              const imageUrl = project.coverImage ? urlForImage(project.coverImage) : null;
              return (
                <pastis-project-card
                  key={project._id}
                  href={`/work/${project.slug?.current}`}
                  heading={project.title}
                  year={project.year ? String(project.year) : undefined}
                  size="tall"
                >
                  {imageUrl && (
                    <Image slot="media" src={imageUrl} alt="" fill sizes="(max-width:768px) 86vw, 380px" />
                  )}
                </pastis-project-card>
              );
            })}
          </pastis-shelf>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="hp-section" data-scroll-theme="dark" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="hp-section-label">Experience</h2>
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
      <section className="hp-section" data-scroll-theme="dark" aria-labelledby="lab-heading">
        <h2 id="lab-heading" className="hp-section-label">Lab</h2>
        <LabGrid />
      </section>

    </div>
  );
}
