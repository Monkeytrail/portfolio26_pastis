import { client } from '@/sanity/lib/client';
import { projectsQuery, siteSettingsQuery } from '@/sanity/lib/queries';
import CopyEmailButton from '@/components/CopyEmailButton';

export default async function HomePage() {
  let projects: any[] = [];
  let settings: any = null;

  try {
    [projects, settings] = await Promise.all([
      client.fetch(projectsQuery),
      client.fetch(siteSettingsQuery),
    ]);
  } catch { }

  return (
    <div className="prose prose--home">
      <h1>{settings?.heroHeadline}</h1>
      <p>{settings?.heroSubheadline}</p>

      <h2 className="work-section-title">Selected work</h2>

      <ul className="work-list">
        {projects?.map((project: any) => (
          <li key={project._id}>
            <div className="work-row">
              <span className="work-title">{project.title}</span>
              {project.year && <span className="work-year">{project.year}</span>}
            </div>
            {project.shortDescription && (
              <p className="work-desc">{project.shortDescription}</p>
            )}
          </li>
        ))}
      </ul>

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
    </div>
  );
}
