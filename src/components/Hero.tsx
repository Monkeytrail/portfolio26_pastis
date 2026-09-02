interface HeroProps {
  fullName: string;
  role: string;
  blurb?: string;
  yearsActive: number;
  projectCount: number;
  startYear: number;
  marqueeItems: string[];
}

function Marquee({ items }: { items: string[] }) {
  return (
    <>
      {items.map((item, i) => (
        <span key={i}>
          <span className="star">✦</span> {item}
        </span>
      ))}
    </>
  );
}

export default function Hero({ fullName, role, blurb, yearsActive, projectCount, startYear, marqueeItems }: HeroProps) {
  const words = fullName.trim().split(' ');
  const first = words[0];
  const last = words.length > 1 ? words[words.length - 1] : '';
  const middle = words.slice(1, -1).join(' ');

  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero-meta">
          <span>// Portfolio · v2026.1</span>
          <span><span className="tick">●</span> Antwerp, BE · UTC+1</span>
          <span>Design → Product · {startYear}—Now</span>
          <span>{yearsActive}+ Years / {projectCount} Shipped</span>
        </div>

        <h1 className="hero-title">
          <span className="row">{first}</span>
          <span className="row">
            {middle && <span className="outline">{middle}&nbsp;</span>}
            <span className="accent">{last || first}</span>
          </span>
          <span className="row">{role}<span className="slash">.</span></span>
        </h1>

        <div className="hero-bottom">
          {blurb && <p className="hero-blurb">{blurb}</p>}
          <div className="hero-stack">
            <div className="stat"><div className="n">{yearsActive}+</div><div className="l">Years shipping</div></div>
            <div className="stat"><div className="n">{projectCount}</div><div className="l">Products shipped</div></div>
          </div>
        </div>
      </div>

      <div className="hero-marquee">
        <div className="track">
          <Marquee items={marqueeItems} />
          <Marquee items={marqueeItems} />
        </div>
      </div>
    </section>
  );
}
