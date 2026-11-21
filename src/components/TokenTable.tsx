'use client';

import { useEffect, useRef } from 'react';

interface TokenRow {
  token: string;
  usage: string;
}

const COLUMNS = [
  { key: 'token', label: 'Token' },
  { key: 'value', label: 'Value' },
  { key: 'usage', label: 'Usage' },
];

// Values are read from the live stylesheet so the table can't drift from the tokens
export default function TokenTable({ tokens }: { tokens: TokenRow[] }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const setup = () => {
      const el = ref.current as any;
      if (!el) return;
      const styles = getComputedStyle(document.documentElement);
      el.columns = COLUMNS;
      el.rows = tokens.map((t) => ({
        id: t.token,
        token: t.token,
        value: styles.getPropertyValue(t.token).trim(),
        usage: t.usage,
      }));
    };

    if (customElements.get('pastis-table')) {
      setup();
    } else {
      customElements.whenDefined('pastis-table').then(setup);
    }
  }, [tokens]);

  return <pastis-table ref={ref} />;
}
