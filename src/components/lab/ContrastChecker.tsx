'use client';

import { useEffect, useState } from 'react';
import { contrastRatio, isHex, readTokenHex } from '@/lib/contrast';

const PRESETS = [
  { label: 'Text on bg',      fg: '--text-primary',   bg: '--bg-primary' },
  { label: 'Muted on bg',     fg: '--text-tertiary',  bg: '--bg-primary' },
  { label: 'Muted on card',   fg: '--text-tertiary',  bg: '--bg-card' },
  { label: 'Border on bg',    fg: '--border-default', bg: '--bg-primary' },
];

const CHECKS = [
  { label: 'AA body text',   min: 4.5 },
  { label: 'AA large text',  min: 3 },
  { label: 'AAA body text',  min: 7 },
  { label: 'UI components',  min: 3 },
];

function ColorField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [draft, setDraft] = useState(value);
  useEffect(() => setDraft(value), [value]);
  return (
    <label className="color-field">
      <span className="meta-text">{label}</span>
      <div className="color-field-row">
        <input
          type="color"
          value={value}
          onChange={(e) => { onChange(e.target.value); setDraft(e.target.value); }}
        />
        <input
          type="text"
          value={draft}
          maxLength={7}
          onChange={(e) => {
            setDraft(e.target.value);
            if (isHex(e.target.value)) onChange(e.target.value);
          }}
        />
      </div>
    </label>
  );
}

export default function ContrastChecker() {
  const [fg, setFg] = useState('#f9f4da');
  const [bg, setBg] = useState('#0d0d0d');

  const ratio = contrastRatio(fg, bg);

  const applyPreset = (p: typeof PRESETS[number]) => {
    const fgHex = readTokenHex(p.fg) ?? fg;
    const bgHex = readTokenHex(p.bg) ?? bg;
    setFg(fgHex);
    setBg(bgHex);
  };

  return (
    <div className="lab-demo">
      <div className="lab-controls">
        <ColorField label="Foreground" value={fg} onChange={setFg} />
        <ColorField label="Background" value={bg} onChange={setBg} />

        <fieldset>
          <legend className="meta-text presets">Presets — reads live tokens</legend>
          <div className="filters">
            {PRESETS.map((p) => (
              <button key={p.label} type="button" className="filter" onClick={() => applyPreset(p)}>
                {p.label}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="lab-preview" style={{ background: bg, color: fg }}>
        <p className="contrast-ratio">{ratio.toFixed(2)}:1</p>
        <p>The quick brown fox jumps over the lazy dog.</p>
        <p style={{ fontSize: '0.8125rem' }}>Small body text at 13px</p>
        <ul className="contrast-checks" aria-live="polite">
          {CHECKS.map((c) => (
            <li key={c.label} className={ratio >= c.min ? 'pass' : 'fail'}>
              <span className="meta-text">{c.label}</span>
              <span className="meta-text">{c.min}:1</span>
              <span className="check-status">{ratio >= c.min ? '✓' : '✗'}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
