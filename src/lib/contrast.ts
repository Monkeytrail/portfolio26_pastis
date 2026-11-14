// WCAG 2.2 relative luminance and contrast ratio for #rrggbb colours.

function channel(value: number): number {
  const c = value / 255;
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

export function luminance(hex: string): number {
  const h = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

export function contrastRatio(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

export function isHex(value: string): boolean {
  return /^#[0-9a-f]{6}$/i.test(value);
}

// Reads a token like --bg-primary from the live page as #rrggbb.
export function readTokenHex(token: string): string | null {
  const value = getComputedStyle(document.documentElement).getPropertyValue(token).trim();
  return isHex(value) ? value.toLowerCase() : null;
}
