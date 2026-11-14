import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';

// A stack of the first case-study covers sitting at the fold. It peeks into the
// first view to signal there's more, then fans out as it scrolls in (globals.css).
export default function HeroStage({ projects }: { projects?: any[] }) {
  const cards = (projects ?? []).filter((p) => p.coverImage).slice(0, 3);
  if (cards.length === 0) return null;

  return (
    <div className="container">
      <div className="hero-stage" data-count={cards.length}>
        {cards.map((project, i) => {
          const dark = urlForImage(project.coverImage);
          const light = project.coverImageLight ? urlForImage(project.coverImageLight) : null;
          return (
            <Link
              key={project._id}
              href={`/work/${project.slug.current}`}
              className={`stage-card stage-card--${i}${light ? ' has-light-cover' : ''}`}
            >
              <Image src={dark!} alt="" fill sizes="(min-width: 900px) 420px, 60vw" className="cover--dark" priority={i === 1} />
              {light && <Image src={light} alt="" fill sizes="(min-width: 900px) 420px, 60vw" className="cover--light" />}
              <span className="stage-card-label">
                <span className="meta-text">{project.client}</span>
                {project.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
