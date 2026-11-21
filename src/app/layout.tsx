import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { safeFetch } from '@/sanity/lib/client';
import { siteSettingsQuery } from '@/sanity/lib/queries';
import SiteShell from '@/components/SiteShell';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await safeFetch<any>(siteSettingsQuery);
  return {
    title: settings?.siteTitle ?? 'Jeroen van Ginneken — Senior UX Designer',
    description:
      settings?.siteDescription ??
      'Portfolio of Jeroen van Ginneken, a senior UX designer in Antwerp designing complex B2B software and design systems.',
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await safeFetch<any>(siteSettingsQuery);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/pastis-tokens.css" />
        {/* Theme init script — currently locked to dark; restore dynamic logic when light mode is re-enabled:
          (function(){try{var s=localStorage.getItem('theme'),p=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';document.documentElement.setAttribute('data-theme',s||p);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute('data-theme','dark');document.documentElement.setAttribute('data-scroll-theme','light');`,
          }}
        />
      </head>
      <body>
        <Script src="/pastis.js" strategy="afterInteractive" />
        <ThemeProvider>
          <SiteShell
            brand={settings?.brand}
            contactEmail={settings?.contactEmail}
            tagline={settings?.footerTagline}
            copyright={settings?.footerCopyright}
            socialLinks={settings?.socialLinks}
          >
            {children}
          </SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
