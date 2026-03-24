'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

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

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const setup = () => {
      const el = ref.current;
      if (!el) return;
      (el as any).items = NAV_ITEMS;
      (el as any).active = activeId;
    };

    if (customElements.get('pastis-nav')) {
      setup();
    } else {
      customElements.whenDefined('pastis-nav').then(setup);
    }
  }, [activeId]);

  return (
    <pastis-nav ref={ref} brand={brand ?? 'JvG'} sticky="">
      <pastis-theme-toggle slot="actions" />
    </pastis-nav>
  );
}
