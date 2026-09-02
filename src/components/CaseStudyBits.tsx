import { Fragment } from 'react';
import Link from 'next/link';

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <div className="breadcrumb">
      {items.map((item, i) => (
        <Fragment key={i}>
          {i > 0 && <span className="sep">/</span>}
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span className="current">{item.label}</span>}
        </Fragment>
      ))}
    </div>
  );
}

export function MetricStrip({ metrics }: { metrics: { value: string; label: string }[] }) {
  return (
    <div className="metrics">
      {metrics.map((m, i) => (
        <div key={i} className="cell">
          <div className="big">{m.value}</div>
          <div className="lbl">{m.label}</div>
        </div>
      ))}
    </div>
  );
}

interface NavProject {
  slug: { current: string };
  title: string;
  tag?: string;
  year?: string;
}

export function PrevNext({ prev, next }: { prev: NavProject; next: NavProject }) {
  return (
    <div className="prevnext">
      <Link href={`/work/${prev.slug.current}`}>
        <div className="dir">← Previous</div>
        <div className="title">{prev.title}</div>
        <div className="meta">{prev.tag ? `${prev.tag} · ` : ''}{prev.year}</div>
      </Link>
      <Link href={`/work/${next.slug.current}`} className="next">
        <div className="dir">Next →</div>
        <div className="title">{next.title}</div>
        <div className="meta">{next.tag ? `${next.tag} · ` : ''}{next.year}</div>
      </Link>
    </div>
  );
}
