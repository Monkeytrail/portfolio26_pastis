'use client';

import { useMemo, useRef } from 'react';
import { useCustomElementProps } from '@/hooks/useCustomElementProps';

interface SocialLinks {
  linkedin?: string;
  github?: string;
  dribbble?: string;
  figma?: string;
}

interface FooterProps {
  brand?: string;
  tagline?: string;
  copyright?: string;
  contactEmail?: string;
  socialLinks?: SocialLinks;
}

const SOCIAL_META: { key: keyof SocialLinks; label: string; icon: string }[] = [
  { key: 'linkedin', label: 'LinkedIn', icon: 'in' },
  { key: 'github', label: 'GitHub', icon: 'gh' },
  { key: 'figma', label: 'Figma', icon: 'fg' },
  { key: 'dribbble', label: 'Dribbble', icon: 'db' },
];

export default function Footer({ brand, tagline, copyright, contactEmail, socialLinks }: FooterProps) {
  const ref = useRef<HTMLElement>(null);

  const email = contactEmail ?? 'coffee@jeroenvanginneken.be';
  const socials = useMemo(
    () => SOCIAL_META
      .filter(({ key }) => socialLinks?.[key])
      .map(({ key, label, icon }) => ({ label, href: socialLinks![key]!, icon })),
    [socialLinks],
  );

  const links = [
    {
      heading: 'Navigation',
      items: [
        { label: 'Work', href: '/' },
        { label: 'System', href: '/system' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: `mailto:${email}` },
      ],
    },
  ];

  useCustomElementProps(ref, 'pastis-footer', { links, socials }, [email, socials]);

  return (
    <pastis-footer
      ref={ref}
      brand={brand ?? 'JvG'}
      tagline={tagline ?? 'UX Engineer · Antwerp'}
      copyright={copyright ?? `© ${new Date().getFullYear()} Jeroen van Ginneken`}
    />
  );
}
