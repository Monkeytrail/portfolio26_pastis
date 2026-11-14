'use client';

import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useCustomElementProps } from '@/hooks/useCustomElementProps';

interface NavProps {
  brand?: string;
  contactEmail?: string;
  cvUrl?: string;
}

function getActiveId(pathname: string): string {
  if (pathname.startsWith('/about')) return 'about';
  if (pathname.startsWith('/system')) return 'system';
  if (pathname.startsWith('/lab')) return 'lab';
  return 'work';
}

export default function Nav({ brand, contactEmail, cvUrl }: NavProps) {
  const ref = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const activeId = getActiveId(pathname);

  const NAV_ITEMS = [
    { id: 'work', label: 'Work', href: '/work' },
    { id: 'system', label: 'System', href: '/system' },
    { id: 'lab', label: 'Lab', href: '/lab' },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'contact', label: 'Contact', href: `mailto:${contactEmail ?? 'coffee@jeroenvanginneken.be'}` },
    ...(cvUrl ? [{ id: 'cv', label: 'CV ↓', href: cvUrl }] : []),
  ];

  useCustomElementProps(ref, 'pastis-nav', { items: NAV_ITEMS, active: activeId }, [activeId, contactEmail, cvUrl]);

  return (
    <pastis-nav ref={ref} brand={brand ?? 'JvG'} variant="overlay" sticky="">
      <span slot="brand-icon" />
      <pastis-theme-toggle slot="actions" size="sm" />
      <pastis-theme-toggle slot="mobile-actions" />
    </pastis-nav>
  );
}
