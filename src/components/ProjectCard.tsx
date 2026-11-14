import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { disciplineLabels } from '@/lib/disciplines';

// Grid rhythm in globals.css alternates 7- and 5-column spans; default the
// cover shape to suit the column when the editor hasn't picked one.
function defaultSize(index: number) {
  return index % 4 === 0 || index % 4 === 3 ? 'wide' : 'tall';
}

export default function ProjectCard({ project, index }: { project: any; index: number }) {
  const dark = project.coverImage ? urlForImage(project.coverImage) : null;
  const light = project.coverImageLight ? urlForImage(project.coverImageLight) : null;
  const alt = project.coverImage?.alt ?? '';
  const sizes = '(min-width: 900px) 58vw, 100vw';
  const labels = project.tags?.length ? project.tags : disciplineLabels(project.disciplines);

  return (
    <pastis-project-card
      className={`work-item${light ? ' has-light-cover' : ''}`}
      data-reveal=""
      href={`/work/${project.slug.current}`}
      heading={project.title}
      client={project.client}
      year={project.year}
      summary={project.shortDescription}
      index={String(index + 1).padStart(2, '0')}
      size={project.gridSize ?? defaultSize(index)}
      video={project.coverVideoUrl ?? undefined}
      image={project.coverVideoUrl && dark ? dark : undefined}
      tags={JSON.stringify(labels)}
    >
      {!project.coverVideoUrl && dark && (
        <Image slot="media" className="cover--dark" src={dark} alt={alt} fill sizes={sizes} />
      )}
      {!project.coverVideoUrl && light && (
        <Image slot="media" className="cover--light" src={light} alt={alt} fill sizes={sizes} />
      )}
    </pastis-project-card>
  );
}
