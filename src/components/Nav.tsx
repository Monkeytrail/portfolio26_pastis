'use client';

import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useCustomElementProps } from '@/hooks/useCustomElementProps';

interface NavProps {
  brand?: string;
  contactEmail?: string;
}

function getActiveId(pathname: string): string {
  if (pathname === '/') return 'work';
  if (pathname.startsWith('/about')) return 'about';
  if (pathname.startsWith('/work')) return 'work';
  return 'work';
}

export default function Nav({ brand, contactEmail }: NavProps) {
  const ref = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const activeId = getActiveId(pathname);

  const NAV_ITEMS = [
    { id: 'work', label: 'Work', href: '/' },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'contact', label: 'Contact', href: `mailto:${contactEmail ?? 'coffee@jeroenvanginneken.be'}` },
  ];

  useCustomElementProps(ref, 'pastis-nav', { items: NAV_ITEMS, active: activeId }, [activeId]);

  return (
    <pastis-nav ref={ref} brand={brand ?? 'JvG'} sticky="">
      {/* Light mode temporarily disabled — restore when re-enabling: <pastis-theme-toggle slot="actions" /> */}
    </pastis-nav>
  );
}
