'use client';

import { useEffect, useState } from 'react';

interface Section {
  id: string;
  label: string;
}

// Sticky in-page navigation for long case studies; highlights the section in view.
export default function CaseToc({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: '-20% 0px -70% 0px' },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="case-toc" aria-label="Case study sections">
      <ol className="container">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`} aria-current={active === id ? 'location' : undefined}>{label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
