import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import { safeFetch } from '@/sanity/lib/client';
import { siteSettingsQuery } from '@/sanity/lib/queries';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await safeFetch<any>(siteSettingsQuery);
  return {
    title: settings?.siteTitle ?? 'Jeroen van Ginneken — UX Engineer',
    description:
      settings?.siteDescription ??
      'Portfolio of Jeroen van Ginneken, a UX engineer based in Antwerp.',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Design tokens, synced from pastis-design-system by scripts/sync-pastis.mjs */}
        <link rel="stylesheet" href="/pastis-tokens.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme'),p=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';document.documentElement.setAttribute('data-theme',s||p);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
      </head>
      <body>
        <Script src="/pastis.js" strategy="afterInteractive" />
        <ThemeProvider>
          <RevealObserver />
          <a href="#main" className="skip-link">Skip to content</a>
          <Nav brand={settings?.brand} contactEmail={settings?.contactEmail} />
          <main id="main">{children}</main>
          <Footer
            brand={settings?.brand}
            tagline={settings?.footerTagline}
            copyright={settings?.footerCopyright}
            contactEmail={settings?.contactEmail}
            socialLinks={settings?.socialLinks}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
