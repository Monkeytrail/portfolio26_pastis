import type { Metadata } from 'next';
import { safeFetch } from '@/sanity/lib/client';
import { allProjectsQuery, aboutQuery } from '@/sanity/lib/queries';
import { getEarliestYear } from '@/lib/deriveStats';
import WorkIndex from '@/components/WorkIndex';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Work — Jeroen van Ginneken',
  description: 'Selected case studies from product, government, and design-systems work.',
};

export default async function WorkPage() {
  const [projects, about] = await Promise.all([
    safeFetch<any[]>(allProjectsQuery),
    safeFetch<any>(aboutQuery),
  ]);

  const list = projects ?? [];
  const startYear = getEarliestYear(about?.experience) ?? new Date().getFullYear();
  const yearsActive = new Date().getFullYear() - startYear;

  return (
    <div className="container">
      <div className="page-hero">
        <div className="eyebrow">// Portfolio · {list.length} shown</div>
        <h1>Selected<br /><span className="accent">Work</span><span className="slash">.</span></h1>
        <p className="lede">
          {yearsActive}+ years across product, government, and design-systems work. A closer look at {list.length} recent case studies.
        </p>
      </div>
      <WorkIndex projects={list} />
      <SiteFooter bordered copyright={`© ${startYear}—${new Date().getFullYear()} · Jeroen van Ginneken`} />
    </div>
  );
}
