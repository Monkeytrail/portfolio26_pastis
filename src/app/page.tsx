import { client } from '@/sanity/lib/client';
import { projectsQuery, siteSettingsQuery } from '@/sanity/lib/queries';

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
          <a href={`mailto:${settings.contactEmail}`} className="hero-btn">
            Send an email
          </a>
        )}
      </div>
    </div>
  );
}
