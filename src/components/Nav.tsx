'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavProps {
  brand?: string;
  name?: string;
  statusLabel?: string;
}

function getActiveId(pathname: string): string {
  if (pathname.startsWith('/work')) return 'work';
  if (pathname.startsWith('/about')) return 'about';
  return 'home';
}

const NAV_ITEMS = [
  { id: 'work', label: 'Work', href: '/work' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'home', label: 'Home', href: '/' },
];

export default function Nav({ brand = 'JvG', name = 'Jeroen van Ginneken', statusLabel }: NavProps) {
  const pathname = usePathname();
  const activeId = getActiveId(pathname);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? h.scrollTop / max : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  return (
    <>
      <nav className="nav">
        <Link className="nav-brand" href="/">
          <span className="mark">{brand}</span>
          <span>{name}</span>
        </Link>
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <Link key={item.id} href={item.href} className={activeId === item.id ? 'active' : ''}>
              {item.label}
            </Link>
          ))}
        </div>
        {statusLabel && (
          <div className="nav-actions">
            <span className="status-pill">
              <span className="ping" />
              {statusLabel}
            </span>
          </div>
        )}
      </nav>
      <div className="scroll-progress">
        <span style={{ transform: `scaleX(${pct})` }} />
      </div>
    </>
  );
}
