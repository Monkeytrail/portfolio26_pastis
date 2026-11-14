interface Testimonial {
  quote: string;
  name: string;
  role?: string;
  company?: string;
}

export default function Testimonials({ items, label = 'Kind words' }: { items?: Testimonial[]; label?: string }) {
  if (!items?.length) return null;

  return (
    <section className="container section" aria-labelledby="testimonials-heading">
      <header className="section-head">
        <span className="section-label">{label}</span>
        <h2 id="testimonials-heading" className="sr-only">Testimonials</h2>
      </header>
      <ul className="testimonials">
        {items.map((t, i) => (
          <li key={i} data-reveal="">
            <figure className="testimonial">
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <span className="testimonial-name">{t.name}</span>
                <span className="meta-text">{[t.role, t.company].filter(Boolean).join(' · ')}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
