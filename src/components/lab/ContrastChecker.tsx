'use client';

import { useEffect, useState } from 'react';
import { contrastRatio, isHex, readTokenHex } from '@/lib/contrast';

const PRESETS: [string, string, string][] = [
  ['Text on background', '--text-primary', '--bg-primary'],
  ['Muted on card', '--text-tertiary', '--bg-card'],
  ['Accent on background', '--text-accent', '--bg-primary'],
  ['Border on background', '--border-default', '--bg-primary'],
];

const CHECKS = [
  { label: 'AA · body text', min: 4.5 },
  { label: 'AA · large text', min: 3 },
  { label: 'AAA · body text', min: 7 },
  { label: 'UI components', min: 3 },
];

function ColorField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  const [draft, setDraft] = useState(value);
  // Keep the text field in sync when a preset or the picker changes the colour
  useEffect(() => setDraft(value), [value]);

  return (
    <div className="color-field">
      <span className="meta-text">{label}</span>
      <div>
        <input type="color" value={value} aria-label={`${label} colour picker`} onChange={(e) => onChange(e.target.value)} />
        <input
          type="text"
          value={draft}
          aria-label={`${label} hex value`}
          spellCheck={false}
          onChange={(e) => {
            setDraft(e.target.value);
            if (isHex(e.target.value)) onChange(e.target.value.toLowerCase());
          }}
        />
      </div>
    </div>
  );
}

export default function ContrastChecker() {
  const [fg, setFg] = useState('#a39b90');
  const [bg, setBg] = useState('#1b1612');
  const ratio = contrastRatio(fg, bg);

  const applyPreset = (fgToken: string, bgToken: string) => {
    const f = readTokenHex(fgToken);
    const b = readTokenHex(bgToken);
    if (f) setFg(f);
    if (b) setBg(b);
  };

  return (
    <div className="lab-demo">
      <div className="lab-controls">
        <ColorField label="Foreground" value={fg} onChange={setFg} />
        <ColorField label="Background" value={bg} onChange={setBg} />
        <div className="presets">
          <span className="meta-text">Live Pastis tokens</span>
          {PRESETS.map(([name, f, b]) => (
            <button key={name} type="button" className="filter" onClick={() => applyPreset(f, b)}>{name}</button>
          ))}
        </div>
      </div>

      <div className="lab-preview contrast-preview" style={{ background: bg, color: fg }}>
        <p className="contrast-ratio">{ratio.toFixed(2)}<span>:1</span></p>
        <p>The quick brown fox jumps over the lazy dog.</p>
      </div>

      <ul className="contrast-checks" aria-live="polite">
        {CHECKS.map(({ label, min }) => {
          const pass = ratio >= min;
          return (
            <li key={label} data-pass={pass}>
              <span aria-hidden="true">{pass ? '✓' : '✕'}</span>
              <span>{label}</span>
              <span className="meta-text">{pass ? 'pass' : 'fail'} · {min}:1</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
