import type { Metadata } from 'next';
import { safeFetch } from '@/sanity/lib/client';
import { allProjectsQuery } from '@/sanity/lib/queries';
import WorkIndex from '@/components/WorkIndex';

export const metadata: Metadata = {
  title: 'Case studies — Jeroen van Ginneken',
};

export default async function WorkPage() {
  const projects = (await safeFetch<any[]>(allProjectsQuery)) ?? [];

  return (
    <section className="container section page-top">
      <pastis-statement size="xl" eyebrow={`${projects.length} case studies`}>
        <h1>Work</h1>
      </pastis-statement>
      <WorkIndex projects={projects} />
    </section>
  );
}
