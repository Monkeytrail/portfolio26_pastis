'use client';
import { useEffect } from 'react';

export function ScrollTheme() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-scroll-theme]');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const theme = (entry.target as HTMLElement).dataset.scrollTheme ?? 'dark';
            document.documentElement.dataset.scrollTheme = theme;
          }
        });
      },
      // fires when a section crosses the middle band of the viewport
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return null;
}
