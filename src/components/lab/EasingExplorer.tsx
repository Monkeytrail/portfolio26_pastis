'use client';

import { useState } from 'react';

type Preset = { name: string; token: string; points: [number, number, number, number] };

const PRESETS: Preset[] = [
  { name: 'standard',  token: '--ease-standard',  points: [0.2, 0, 0, 1] },
  { name: 'enter',     token: '--ease-enter',      points: [0.16, 1, 0.3, 1] },
  { name: 'exit',      token: '--ease-exit',       points: [0.7, 0, 0.84, 0] },
  { name: 'out-expo',  token: '--ease-out-expo',   points: [0.19, 1, 0.22, 1] },
];

export default function EasingExplorer() {
  const [index, setIndex] = useState(3);
  const [duration, setDuration] = useState(800);
  const [played, setPlayed] = useState(false);

  const preset = PRESETS[index];
  const [c1x, c1y, c2x, c2y] = preset.points;
  const easing = `cubic-bezier(${preset.points.join(', ')})`;
  const curvePath = `M0,100 C${c1x * 100},${100 - c1y * 100} ${c2x * 100},${100 - c2y * 100} 100,0`;

  const select = (i: number) => { setIndex(i); setPlayed(false); };

  return (
    <div className="lab-demo">
      <div className="lab-controls">
        <fieldset>
          <legend className="meta-text">Easing token</legend>
          <div className="filters">
            {PRESETS.map((p, i) => (
              <button
                key={p.token}
                type="button"
                className="filter"
                aria-pressed={i === index}
                onClick={() => select(i)}
              >
                {p.name}
              </button>
            ))}
          </div>
        </fieldset>

        <label className="range">
          <span className="meta-text">Duration — {duration}ms</span>
          <input
            type="range"
            min={100}
            max={1500}
            step={50}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />
        </label>

        <button type="button" className="lab-btn" onClick={() => setPlayed((p) => !p)}>
          {played ? '↺ Reverse' : '▶ Play'}
        </button>
      </div>

      <div className="lab-preview easing-preview">
        <svg viewBox="-4 -4 108 108" className="easing-curve" role="img" aria-label={`Curve for ${easing}`}>
          <line x1="0" y1="100" x2="100" y2="0" className="easing-diagonal" />
          <path d={curvePath} />
        </svg>
        <div className="easing-track">
          <span
            className="easing-ball"
            style={{
              transform: played ? 'translateX(calc(100cqw - 100%))' : 'none',
              transition: `transform ${duration}ms ${easing}`,
            }}
          />
        </div>
      </div>

      <pre className="lab-code">
        <code>{`transition: transform ${duration}ms var(${preset.token});\n/* ${preset.token}: ${easing} */`}</code>
      </pre>
    </div>
  );
}
