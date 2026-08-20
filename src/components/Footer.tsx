'use client';

import { useRef } from 'react';
import { useCustomElementProps } from '@/hooks/useCustomElementProps';

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
  copyright: `© ${new Date().getFullYear()} Jeroen van Ginneken`,
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

  useCustomElementProps(ref, 'pastis-footer', { links, socials: resolvedSocials }, [resolvedEmail, resolvedSocials]);

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
