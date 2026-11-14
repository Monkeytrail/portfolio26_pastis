'use client';

import { useState } from 'react';

// Mirrors the easing tokens in pastis-design-system/src/tokens/motion.css
const EASINGS: { token: string; curve: [number, number, number, number] }[] = [
  { token: '--ease-standard', curve: [0.2, 0, 0, 1] },
  { token: '--ease-enter', curve: [0.16, 1, 0.3, 1] },
  { token: '--ease-exit', curve: [0.7, 0, 0.84, 0] },
  { token: '--ease-out-expo', curve: [0.19, 1, 0.22, 1] },
];

export default function EasingExplorer() {
  const [index, setIndex] = useState(3);
  const [duration, setDuration] = useState(800);
  const [played, setPlayed] = useState(false);

  const { token, curve } = EASINGS[index];
  const [x1, y1, x2, y2] = curve;
  const bezier = `cubic-bezier(${curve.join(', ')})`;
  // SVG y grows downwards; flip so the curve reads like a chart
  const path = `M0,100 C${x1 * 100},${100 - y1 * 100} ${x2 * 100},${100 - y2 * 100} 100,0`;

  return (
    <div className="lab-demo">
      <div className="lab-controls">
        <fieldset>
          <legend className="meta-text">Easing token</legend>
          <div className="filters">
            {EASINGS.map((e, i) => (
              <button
                key={e.token}
                type="button"
                className="filter"
                aria-pressed={i === index}
                onClick={() => { setIndex(i); setPlayed(false); }}
              >
                {e.token.replace('--ease-', '')}
              </button>
            ))}
          </div>
        </fieldset>

        <label className="range">
          <span className="meta-text">Duration — {duration}ms</span>
          <input type="range" min={100} max={1500} step={50} value={duration} onChange={(e) => setDuration(Number(e.target.value))} />
        </label>

        <button type="button" className="btn btn--primary" onClick={() => setPlayed((p) => !p)}>
          {played ? '↺ Reverse' : '▶ Play'}
        </button>
      </div>

      <div className="lab-preview easing-preview">
        <svg viewBox="-4 -4 108 108" className="easing-curve" role="img" aria-label={`Curve for ${bezier}`}>
          <line x1="0" y1="100" x2="100" y2="0" className="easing-diagonal" />
          <path d={path} />
        </svg>
        <div className="easing-track">
          <span
            className="easing-ball"
            style={{
              transform: played ? 'translateX(calc(100cqw - 100%))' : 'none',
              transition: `transform ${duration}ms ${bezier}`,
            }}
          />
        </div>
      </div>

      <pre className="lab-code"><code>{`transition: transform ${duration}ms var(${token});\n/* ${token}: ${bezier} */`}</code></pre>
    </div>
  );
}
