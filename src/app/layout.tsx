import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { client } from '@/sanity/lib/client';
import { siteSettingsQuery } from '@/sanity/lib/queries';

export async function generateMetadata(): Promise<Metadata> {
  let settings: any = null;
  try {
    settings = await client.fetch(siteSettingsQuery);
  } catch {
    // Sanity not configured yet — use defaults
  }

  return {
    title: settings?.siteTitle ?? 'Jeroen van Ginneken — UX/UI Designer',
    description:
      settings?.siteDescription ??
      'Portfolio of Jeroen van Ginneken, a UX/UI designer based in Antwerp creating thoughtful digital experiences.',
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
  } catch {
    // Sanity not configured — use component fallbacks
  }

  const socials = [];
  if (settings?.socialLinks?.linkedin) socials.push({ label: 'LinkedIn', href: settings.socialLinks.linkedin, icon: 'in' });
  if (settings?.socialLinks?.dribbble) socials.push({ label: 'Dribbble', href: settings.socialLinks.dribbble, icon: 'db' });
  if (settings?.socialLinks?.github) socials.push({ label: 'GitHub', href: settings.socialLinks.github, icon: 'gh' });

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Prevent theme flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
                  var theme = stored || preferred;
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <Script src="/pastis.js" strategy="afterInteractive" />
        <ThemeProvider>
          <Nav brand={settings?.brand} contactEmail={settings?.contactEmail} />
          <main>{children}</main>
          <Footer
            brand={settings?.brand}
            tagline={settings?.footerTagline}
            copyright={settings?.footerCopyright}
            contactEmail={settings?.contactEmail}
            socials={socials.length ? socials : undefined}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
