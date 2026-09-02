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
  span?: string;
  coverImage?: any;
}

function WorkCard({ item, i, total }: { item: Project; i: number; total: number }) {
  const coverUrl = item.coverImage ? urlForImage(item.coverImage) : null;
  const span = item.span ?? 'half';

  return (
    <Link href={`/work/${item.slug.current}`} className={`work-card peek-on ${span}`}>
      <div className="work-visual">
        {coverUrl && (
          <Image src={coverUrl} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
        )}
      </div>
      <span className="work-index">{String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
      {item.tag && <span className="work-tag">{item.tag} · {item.year}</span>}
      <div className="work-caption">
        <div>
          <div className="t">{item.title}</div>
          <div className="m">{item.client}{item.year ? ` · ${item.year}` : ''}</div>
        </div>
        <div className="arrow">→</div>
      </div>
      {item.shortDescription && <div className="peek">&ldquo;{item.shortDescription}&rdquo;</div>}
    </Link>
  );
}

export default function WorkGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="work-grid">
      {projects.map((w, i) => (
        <WorkCard key={w._id} item={w} i={i} total={projects.length} />
      ))}
    </div>
  );
}
