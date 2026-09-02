/** Splits a title into the 3-row plain/accent/outline treatment used by big display headings. */
export function splitTitleRows(title: string): { row1: string; accent: string; outline: string } {
  const words = title.trim().split(' ');
  if (words.length < 3) {
    return { row1: words[0] ?? '', accent: words.slice(1).join(' '), outline: '' };
  }
  return { row1: words[0], accent: words[1], outline: words.slice(2).join(' ') };
}
