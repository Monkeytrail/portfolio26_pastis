'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Fades in every [data-reveal] element as it scrolls into view.
// Durations come from Pastis motion tokens, which drop to 0 under prefers-reduced-motion.
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute('data-reveal', 'in');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );

    document.querySelectorAll('[data-reveal]:not([data-reveal="in"])').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
