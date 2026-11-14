'use client';

import { useState } from 'react';
import { contrastRatio } from '@/lib/contrast';

const ACCENTS = [
  { name: 'Yellow', value: '#fcba28' },
  { name: 'Orange', value: '#fc7428' },
  { name: 'Pink', value: '#f38ba3' },
  { name: 'Green', value: '#0ba95b' },
  { name: 'Blue', value: '#12b5e5' },
  { name: 'Purple', value: '#7b5ea7' },
];

// Pick whichever label colour reads better on the accent, like a real token pipeline would
function labelColorFor(accent: string) {
  const dark = '#110d0a';
  const light = '#ffffff';
  return contrastRatio(accent, dark) >= contrastRatio(accent, light) ? dark : light;
}

export default function TokenPlayground() {
  const [accent, setAccent] = useState(ACCENTS[0].value);
  const [radius, setRadius] = useState(6);
  const [inverse, setInverse] = useState(false);

  const label = labelColorFor(accent);
  const ratio = contrastRatio(accent, label);

  const tokens = {
    '--action-primary': accent,
    '--action-primary-hover': accent,
    '--action-primary-text': label,
    '--border-focus': accent,
    '--radius-sm': `${Math.round(radius * 0.66)}px`,
    '--radius-md': `${radius}px`,
    '--radius-lg': `${Math.round(radius * 1.33)}px`,
  } as React.CSSProperties;

  const css = `:root {\n${Object.entries(tokens).map(([k, v]) => `  ${k}: ${v};`).join('\n')}\n}`;

  return (
    <div className="lab-demo">
      <div className="lab-controls">
        <fieldset>
          <legend className="meta-text">Accent</legend>
          <div className="swatches">
            {ACCENTS.map((a) => (
              <label key={a.value} className="swatch" style={{ background: a.value }}>
                <input
                  type="radio"
                  name="accent"
                  value={a.value}
                  checked={accent === a.value}
                  onChange={() => setAccent(a.value)}
                />
                <span className="sr-only">{a.name}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="range">
          <span className="meta-text">Radius — {radius}px</span>
          <input type="range" min={0} max={20} value={radius} onChange={(e) => setRadius(Number(e.target.value))} />
        </label>

        <label className="check">
          <input type="checkbox" checked={inverse} onChange={(e) => setInverse(e.target.checked)} />
          <span className="meta-text">Inverse surface</span>
        </label>

        <p className="meta-text lab-readout">
          Label on accent: {ratio.toFixed(1)}:1 {ratio >= 4.5 ? '· AA ✓' : '· below AA'}
        </p>
      </div>

      <div className="lab-preview" style={tokens} data-surface={inverse ? 'inverse' : undefined}>
        <div className="lab-preview-row">
          <pastis-button variant="primary">Save changes</pastis-button>
          <pastis-button variant="secondary">Cancel</pastis-button>
        </div>
        <pastis-input label="Component name" placeholder="pastis-button" />
        <div className="lab-preview-row">
          <pastis-toggle label="Dark mode" checked />
          <pastis-tag variant="primary">Token</pastis-tag>
        </div>
        <pastis-stat-card label="Components" value="44" />
      </div>

      <pre className="lab-code" aria-label="Generated tokens"><code>{css}</code></pre>
    </div>
  );
}
