'use client';

import { usePathname } from 'next/navigation';
import Nav from './Nav';
import Footer from './Footer';

interface SiteShellProps {
  children: React.ReactNode;
  brand?: string;
  contactEmail?: string;
  tagline?: string;
  copyright?: string;
  socialLinks?: { linkedin?: string; github?: string; dribbble?: string };
}

export default function SiteShell({ children, brand, contactEmail, tagline, copyright, socialLinks }: SiteShellProps) {
  const pathname = usePathname();

  if (pathname?.startsWith('/studio')) {
    return <main>{children}</main>;
  }

  const socials = [
    socialLinks?.linkedin && { label: 'LinkedIn', href: socialLinks.linkedin, icon: 'in' },
    socialLinks?.github && { label: 'GitHub', href: socialLinks.github, icon: 'gh' },
    socialLinks?.dribbble && { label: 'Dribbble', href: socialLinks.dribbble, icon: 'db' },
  ].filter(Boolean) as { label: string; href: string; icon: string }[];

  const hideNav = pathname === '/' || pathname?.startsWith('/work/');

  return (
    <>
      {!hideNav && <Nav brand={brand} contactEmail={contactEmail} />}
      <main>{children}</main>
      <Footer
        brand={brand}
        tagline={tagline}
        copyright={copyright}
        contactEmail={contactEmail}
        socials={socials.length > 0 ? socials : undefined}
      />
    </>
  );
}
