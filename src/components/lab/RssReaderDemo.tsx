'use client';

import { useEffect, useRef, useState } from 'react';
import { useCustomElementProps } from '@/hooks/useCustomElementProps';

interface Article {
  id: string;
  day: 'Today' | 'Yesterday';
  category: string;
  source: string;
  title: string;
  summary: string;
  minutes: number;
}

// Fictional sample data: the real reader is behind a login, so the demo runs on its own.
const ARTICLES: Article[] = [
  { id: 'a1', day: 'Today', category: 'UX/UI', source: 'Interface Journal', title: 'Designing empty states that teach', summary: 'An empty screen is the first lesson a user gets. Make it count.', minutes: 6 },
  { id: 'a2', day: 'Today', category: 'AI', source: 'Model Notes', title: 'Prototyping with an AI pair: what to keep human', summary: 'Speed is cheap now. Judgement still is not.', minutes: 5 },
  { id: 'a3', day: 'Yesterday', category: 'Web dev', source: 'Shadow Root', title: 'Theming web components with two layers of tokens', summary: 'Raw palette values underneath, semantic names on top.', minutes: 8 },
];

const CATEGORIES = [...new Set(ARTICLES.map((a) => a.category))];

const FILTERS = CATEGORIES.map((category) => ({
  label: category,
  value: category,
  count: ARTICLES.filter((a) => a.category === category).length,
}));

const COMPONENTS_USED = ['filter-bar', 'filter-chip', 'badge', 'tag', 'button'];

function toggleIn(set: Set<string>, id: string): Set<string> {
  const next = new Set(set);
  if (next.has(id)) next.delete(id);
  else next.add(id);
  return next;
}

export default function RssReaderDemo() {
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [read, setRead] = useState<Set<string>>(() => new Set());
  const [saved, setSaved] = useState<Set<string>>(() => new Set());
  const filterBarRef = useRef<HTMLElement>(null);

  useCustomElementProps(filterBarRef, 'pastis-filter-bar', { filters: FILTERS }, []);

  useEffect(() => {
    const filterBar = filterBarRef.current;
    if (!filterBar) return;
    const onFilter = (e: Event) => setActiveCategories((e as CustomEvent).detail.active);
    filterBar.addEventListener('pastis-filter-change', onFilter);
    return () => filterBar.removeEventListener('pastis-filter-change', onFilter);
  }, []);

  const visible = ARTICLES.filter((a) => activeCategories.length === 0 || activeCategories.includes(a.category));

  const days = [...new Set(visible.map((a) => a.day))];
  const unreadCount = ARTICLES.length - read.size;

  return (
    <div className="lab-demo">
      <div className="lab-controls">
        <pastis-filter-bar ref={filterBarRef} label="Topics" />

        <div className="rss-demo-stats">
          <pastis-badge>{unreadCount} unread</pastis-badge>
          <pastis-badge>{saved.size} saved</pastis-badge>
        </div>

        <div className="rss-demo-built">
          <p className="meta-text">Built with Pastis</p>
          <ul className="chip-list">
            {COMPONENTS_USED.map((c) => <li key={c}><pastis-tag size="sm">{c}</pastis-tag></li>)}
          </ul>
        </div>
      </div>

      <div className="lab-preview rss-demo-feed">
        {days.map((day) => (
          <section key={day} className="rss-demo-day" aria-label={day}>
            <h3 className="meta-text">{day}</h3>
            {visible.filter((a) => a.day === day).map((a) => {
              const isRead = read.has(a.id);
              const isSaved = saved.has(a.id);
              return (
                <article key={a.id} className="rss-demo-article" data-read={isRead || undefined}>
                  <p className="rss-demo-source">{a.source} · {a.category}</p>
                  <button
                    type="button"
                    className="rss-demo-title"
                    onClick={() => setRead((r) => new Set(r).add(a.id))}
                  >
                    {a.title}
                  </button>
                  <p className="rss-demo-summary">{a.summary}</p>
                  <div className="rss-demo-actions">
                    <pastis-tag size="sm">{a.minutes} min</pastis-tag>
                    <pastis-button size="sm" variant="ghost" onClick={() => setSaved((s) => toggleIn(s, a.id))}>
                      {isSaved ? '★ Saved' : '☆ Save'}
                    </pastis-button>
                    <pastis-button size="sm" variant="ghost" onClick={() => setRead((r) => toggleIn(r, a.id))}>
                      {isRead ? 'Mark unread' : 'Mark read'}
                    </pastis-button>
                  </div>
                </article>
              );
            })}
          </section>
        ))}
      </div>
    </div>
  );
}
