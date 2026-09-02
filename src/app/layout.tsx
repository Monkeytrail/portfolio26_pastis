import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { safeFetch } from '@/sanity/lib/client';
import { siteSettingsQuery, aboutQuery } from '@/sanity/lib/queries';
import Nav from '@/components/Nav';
import { getCurrentJob } from '@/lib/deriveStats';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await safeFetch<any>(siteSettingsQuery);
  return {
    title: settings?.siteTitle ?? 'Jeroen van Ginneken — UX/UI Designer',
    description:
      settings?.siteDescription ??
      'Portfolio of Jeroen van Ginneken, a UX/UI designer based in Antwerp.',
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [settings, about] = await Promise.all([
    safeFetch<any>(siteSettingsQuery),
    safeFetch<any>(aboutQuery),
  ]);

  const currentJob = getCurrentJob(about?.experience);
  const statusLabel = currentJob
    ? `${currentJob.role ?? 'Working'} · ${currentJob.company}`
    : undefined;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme init script — currently locked to dark; restore dynamic logic when light mode is re-enabled:
          (function(){try{var s=localStorage.getItem('theme'),p=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';document.documentElement.setAttribute('data-theme',s||p);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute('data-theme','dark');`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Nav brand={settings?.brand} name={settings?.heroHeadline} statusLabel={statusLabel} />
          <main className="page">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
