'use client';

import { useEffect, useRef } from 'react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface Props {
  items: ExperienceItem[];
}

export default function ExperienceTimeline({ items }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !items?.length) return;

    const timelineItems = items.map((exp) => ({
      date: exp.period,
      title: exp.role,
      body: exp.description,
      tag: exp.company,
    }));

    const setup = () => {
      const el = ref.current;
      if (!el) return;
      (el as any).items = timelineItems;
    };

    if (customElements.get('pastis-timeline')) {
      setup();
    } else {
      customElements.whenDefined('pastis-timeline').then(setup);
    }
  }, [items]);

  // Native fallback renders immediately (SSR-safe) and web component enhances on client
  return (
    <>
      <pastis-timeline ref={ref} variant="default" style={{ display: 'none' }} />

      <div className="timeline-fallback">
        {items?.map((exp, i) => (
          <div key={i} className="timeline-item">
            <div style={{ paddingTop: 4 }}>
              <div className="timeline-dot">
                <div className="timeline-dot-inner" />
              </div>
            </div>
            <div className="timeline-content">
              <div className="timeline-period">{exp.period}</div>
              <div className="timeline-role">{exp.role}</div>
              <div className="timeline-company">{exp.company}</div>
              {exp.description && (
                <div className="timeline-description">{exp.description}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
