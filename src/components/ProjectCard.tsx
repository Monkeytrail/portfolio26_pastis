import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { disciplineLabels } from '@/lib/disciplines';

// Honour the editor's Sanity hotspot when the cover is cropped to the card shape
function hotspotPosition(image: any): React.CSSProperties | undefined {
  const hotspot = image?.hotspot;
  if (!hotspot) return undefined;
  return { objectPosition: `${hotspot.x * 100}% ${hotspot.y * 100}%` };
}

export default function ProjectCard({ project, index }: { project: any; index: number }) {
  const dark = project.coverImage ? urlForImage(project.coverImage) : null;
  const light = project.coverImageLight ? urlForImage(project.coverImageLight) : null;
  const alt = project.coverImage?.alt ?? '';
  const sizes = '(min-width: 900px) 380px, 80vw';
  const labels = project.tags?.length ? project.tags : disciplineLabels(project.disciplines);

  return (
    <pastis-project-card
      className={light ? 'has-light-cover' : undefined}
      reveal
      href={`/work/${project.slug.current}`}
      heading={project.title}
      client={project.client}
      year={project.year}
      summary={project.shortDescription}
      index={String(index + 1).padStart(2, '0')}
      video={project.coverVideoUrl ?? undefined}
      image={project.coverVideoUrl && dark ? dark : undefined}
      tags={JSON.stringify(labels)}
    >
      {!project.coverVideoUrl && dark && (
        <Image slot="media" className="cover--dark" src={dark} alt={alt} fill sizes={sizes} style={hotspotPosition(project.coverImage)} />
      )}
      {!project.coverVideoUrl && light && (
        <Image slot="media" className="cover--light" src={light} alt={alt} fill sizes={sizes} style={hotspotPosition(project.coverImageLight)} />
      )}
    </pastis-project-card>
  );
}
