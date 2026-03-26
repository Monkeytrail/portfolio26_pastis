import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { client } from '@/sanity/lib/client';
import { siteSettingsQuery } from '@/sanity/lib/queries';

export async function generateMetadata(): Promise<Metadata> {
  let settings: any = null;
  try {
    settings = await client.fetch(siteSettingsQuery);
  } catch { }
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
  let settings: any = null;
  try {
    settings = await client.fetch(siteSettingsQuery);
  } catch { }

  const email = settings?.contactEmail ?? 'coffee@jeroenvanginneken.be';

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme'),p=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';document.documentElement.setAttribute('data-theme',s||p);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
      </head>
      <body>
        <Script src="/pastis.js" strategy="afterInteractive" />
        <ThemeProvider>
          <main>{children}</main>
          <footer className="site-footer">
            <a href="/">Work</a>
            <span aria-hidden="true">·</span>
            <a href="/about">About</a>
            <span aria-hidden="true">·</span>
            <a href={`mailto:${email}`}>Contact</a>
            <span aria-hidden="true">·</span>
            <span>Antwerp</span>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
