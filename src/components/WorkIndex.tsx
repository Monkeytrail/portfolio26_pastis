'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';

interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  shortDescription?: string;
  client?: string;
  year?: string;
  tag?: string;
  coverImage?: any;
}

export default function WorkIndex({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const projectTags = projects.map((p) => p.tag).filter((tag): tag is string => Boolean(tag));
  const tags = ['All', ...new Set(projectTags)];
  const visible = activeFilter === 'All' ? projects : projects.filter((p) => p.tag === activeFilter);

  return (
    <>
      {tags.length > 1 && (
        <div className="index-filters">
          {tags.map((t) => (
            <button
              key={t}
              className={`filter-chip ${activeFilter === t ? 'active' : ''}`}
              onClick={() => setActiveFilter(t)}
            >
              {t}
            </button>
          ))}
        </div>
      )}
      <div className="index-rows">
        {visible.map((w, i) => {
          const coverUrl = w.coverImage ? urlForImage(w.coverImage) : null;
          return (
            <Link key={w._id} href={`/work/${w.slug.current}`} className="index-row">
              <div className="num">{String(i + 1).padStart(2, '0')}</div>
              <div className="t">
                {w.title}
                {w.shortDescription && <span className="sub">{w.shortDescription}</span>}
              </div>
              <div className="tag">{w.tag}</div>
              <div className="yr">{w.year}</div>
              <div className="arrow">→</div>
              {coverUrl && (
                <div className="preview">
                  <Image src={coverUrl} alt="" width={160} height={110} />
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
}
