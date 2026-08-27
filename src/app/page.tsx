import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { projectsQuery, siteSettingsQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import CopyEmailButton from '@/components/CopyEmailButton';
import RansomHeadline from '@/components/RansomHeadline';

const TILTS = [-3, 2, -5, 4, 3, -2];

export default async function HomePage() {
  let projects: any[] = [];
  let settings: any = null;

  try {
    [projects, settings] = await Promise.all([
      client.fetch(projectsQuery),
      client.fetch(siteSettingsQuery),
    ]);
  } catch { }

  const marqueeLabel = settings?.workSectionLabel ?? 'Selected work';
  const marqueeItems = Array.from({ length: 8 }, (_, i) => (
    <span key={i} className="marquee-item">
      {marqueeLabel} <span aria-hidden="true">✦</span>
    </span>
  ));

  return (
    <div className="prose prose--home">
      {settings?.heroEyebrow && <p className="eyebrow">{settings.heroEyebrow}</p>}

      <h1 className="hero-headline">
        <RansomHeadline text={settings?.heroHeadline} />
      </h1>

      {settings?.heroSubheadline && <p className="lede">{settings.heroSubheadline}</p>}

      <div className="cta-row">
        <a href="#work" className="cta-btn cta-btn--primary">
          {settings?.homeHeroCtaLabel ?? 'View work ↓'}
        </a>
        <Link href="/about" className="cta-btn cta-btn--ghost">
          {settings?.homeAboutCtaLabel ?? 'About me →'}
        </Link>
      </div>

      <div className="hero-actions">
        {settings?.socialLinks?.linkedin && (
          <a href={settings.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hero-btn">
            LinkedIn ↗
          </a>
        )}
        {settings?.contactEmail && (
          <CopyEmailButton email={settings.contactEmail} className="hero-btn" />
        )}
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {marqueeItems}
          {marqueeItems}
        </div>
      </div>
      <div className="marquee marquee--alt" aria-hidden="true">
        <div className="marquee-track">
          {marqueeItems}
          {marqueeItems}
        </div>
      </div>

      <section id="work" aria-labelledby="work-heading">
        <h2 id="work-heading" className="sr-only">{marqueeLabel}</h2>
        {settings?.workSectionHeading && (
          <p className="work-section-heading">{settings.workSectionHeading}</p>
        )}
        {settings?.workSectionSubheading && (
          <p className="work-section-subheading">{settings.workSectionSubheading}</p>
        )}

        <div className="work-grid">
          {projects?.map((project: any, i: number) => {
            const coverUrl = project.coverImage ? urlForImage(project.coverImage) : null;

            return (
              <Link
                key={project._id}
                href={`/work/${project.slug.current}`}
                className="work-card"
                style={{ '--tilt': `${TILTS[i % TILTS.length]}deg` } as React.CSSProperties}
              >
                <pastis-card hoverable="" padding="md">
                  <div slot="media" className="work-card-media">
                    {coverUrl ? (
                      <Image
                        src={coverUrl}
                        alt=""
                        width={600}
                        height={450}
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="work-card-media--empty" />
                    )}
                  </div>
                  <span slot="header" className="work-card-title">{project.title}</span>
                  {project.shortDescription && <p className="work-card-desc">{project.shortDescription}</p>}
                  <div slot="footer" className="work-card-footer">
                    {project.year && (
                      <pastis-tag variant="solid" size="sm">{project.year}</pastis-tag>
                    )}
                    {project.tags?.slice(0, 2).map((tag: string) => (
                      <Fragment key={tag}>
                        <pastis-tag variant="outline" size="sm">{tag}</pastis-tag>
                      </Fragment>
                    ))}
                  </div>
                </pastis-card>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
