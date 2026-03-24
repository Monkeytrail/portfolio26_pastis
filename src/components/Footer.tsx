'use client';

import { useEffect, useRef } from 'react';

interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

interface FooterProps {
  brand?: string;
  tagline?: string;
  copyright?: string;
  contactEmail?: string;
  socials?: SocialLink[];
}

const FALLBACK: Required<FooterProps> = {
  brand: 'JvG',
  tagline: 'UX/UI Designer · Antwerp',
  copyright: '© 2025 Jeroen van Ginneken',
  contactEmail: 'coffee@jeroenvanginneken.be',
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/jeroenvanginneken', icon: 'in' },
    { label: 'Dribbble', href: 'https://dribbble.com/jeroenvanginneken', icon: 'db' },
  ],
};

export default function Footer({ brand, tagline, copyright, contactEmail, socials }: FooterProps) {
  const ref = useRef<HTMLElement>(null);

  const resolvedBrand = brand ?? FALLBACK.brand;
  const resolvedTagline = tagline ?? FALLBACK.tagline;
  const resolvedCopyright = copyright ?? FALLBACK.copyright;
  const resolvedEmail = contactEmail ?? FALLBACK.contactEmail;
  const resolvedSocials = socials ?? FALLBACK.socials;

  const links = [
    {
      heading: 'Navigation',
      items: [
        { label: 'Work', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: `mailto:${resolvedEmail}` },
      ],
    },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const setup = () => {
      const el = ref.current;
      if (!el) return;
      (el as any).links = links;
      (el as any).socials = resolvedSocials;
    };

    if (customElements.get('pastis-footer')) {
      setup();
    } else {
      customElements.whenDefined('pastis-footer').then(setup);
    }
  }, [resolvedEmail, resolvedSocials]);

  return (
    <pastis-footer
      ref={ref}
      brand={resolvedBrand}
      tagline={resolvedTagline}
      copyright={resolvedCopyright}
    >
      <pastis-theme-toggle slot="actions" />
    </pastis-footer>
  );
}
