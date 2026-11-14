'use client';

import { useState } from 'react';
import Link from 'next/link';
import { disciplineLabels } from '@/lib/disciplines';

interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  client?: string;
  year?: string;
  role?: string;
  outcome?: string;
  shortDescription?: string;
  disciplines?: string[];
}

const ALL = 'all';

export default function WorkIndex({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState(ALL);

  const disciplines = Array.from(new Set(projects.flatMap((p) => p.disciplines ?? [])));
  const visible = filter === ALL ? projects : projects.filter((p) => p.disciplines?.includes(filter));

  return (
    <>
      {disciplines.length > 1 && (
        <div className="filters" role="group" aria-label="Filter by discipline">
          {[ALL, ...disciplines].map((d) => (
            <button
              key={d}
              type="button"
              className="filter"
              aria-pressed={filter === d}
              onClick={() => setFilter(d)}
            >
              {d === ALL ? 'All' : disciplineLabels([d])[0]}
            </button>
          ))}
        </div>
      )}

      <p className="sr-only" aria-live="polite">{visible.length} case studies shown</p>

      <ol className="work-index">
        {visible.map((project) => (
          <li key={project._id}>
            <Link href={`/work/${project.slug.current}`} className="work-row">
              <span className="meta-text work-row-year">{project.year}</span>
              <span className="work-row-title">{project.title}</span>
              <span className="work-row-meta">
                <span className="meta-text">{[project.client, project.role].filter(Boolean).join(' · ')}</span>
                {(project.outcome ?? project.shortDescription) && (
                  <span className="work-row-outcome">{project.outcome ?? project.shortDescription}</span>
                )}
              </span>
              <span className="work-row-arrow" aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}
