import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { safeFetch } from '@/sanity/lib/client';
import { allProjectsQuery, aboutQuery, siteSettingsQuery } from '@/sanity/lib/queries';
import { getEarliestYear } from '@/lib/deriveStats';
import { accentLastWord } from '@/lib/headingParts';
import { SECONDARY_PAGES_ENABLED } from '@/lib/siteConfig';
import WorkIndex from '@/components/WorkIndex';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Work — Jeroen van Ginneken',
  description: 'Selected case studies from product, government, and design-systems work.',
};

export default async function WorkPage() {
  if (!SECONDARY_PAGES_ENABLED) notFound();

  const [projects, about, settings] = await Promise.all([
    safeFetch<any[]>(allProjectsQuery),
    safeFetch<any>(aboutQuery),
    safeFetch<any>(siteSettingsQuery),
  ]);

  const list = projects ?? [];
  const startYear = getEarliestYear(about?.experience) ?? new Date().getFullYear();
  const yearsActive = new Date().getFullYear() - startYear;
  const headingParts = accentLastWord(settings?.workListHeading ?? 'Selected Work');

  return (
    <div className="container">
      <div className="page-hero">
        <div className="eyebrow">// Portfolio · {list.length} shown</div>
        <h1>{headingParts.before && <>{headingParts.before}<br /></>}<span className="accent">{headingParts.match}</span><span className="slash">.</span></h1>
        <p className="lede">
          {yearsActive}+ years {settings?.workSectionSubheading ?? 'across product, government, and design-systems work'}. A closer look at {list.length} recent case studies.
        </p>
      </div>
      <WorkIndex projects={list} />
      <SiteFooter
        bordered
        copyright={settings?.footerCopyright || `© ${startYear}—${new Date().getFullYear()} · ${settings?.heroHeadline ?? 'Jeroen van Ginneken'}`}
      />
    </div>
  );
}
