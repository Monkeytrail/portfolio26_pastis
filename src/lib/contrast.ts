function channel(value: number): number {
  const v = value / 255;
  return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
}

export function luminance(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

export function contrastRatio(a: string, b: string): number {
  const la = luminance(a), lb = luminance(b);
  const lighter = Math.max(la, lb), darker = Math.min(la, lb);
  return (lighter + 0.05) / (darker + 0.05);
}

export function isHex(value: string): boolean {
  return /^#[0-9a-f]{6}$/i.test(value);
}

export function readTokenHex(token: string): string | null {
  if (typeof document === 'undefined') return null;
  const v = getComputedStyle(document.documentElement).getPropertyValue(token).trim().toLowerCase();
  return isHex(v) ? v : null;
}
