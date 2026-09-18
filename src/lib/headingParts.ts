/** Splits `text` around the last space, isolating the final word for accent styling. */
export function accentLastWord(text: string): { before: string; match: string } {
  const trimmed = text.trim();
  const idx = trimmed.lastIndexOf(' ');
  if (idx === -1) return { before: '', match: trimmed };
  return { before: trimmed.slice(0, idx + 1), match: trimmed.slice(idx + 1) };
}

/** Splits `text` around the first occurrence of `word`, for highlighting a specific word/phrase. */
export function splitAroundWord(text: string, word?: string): { before: string; match: string; after: string } | null {
  if (!word) return null;
  const idx = text.indexOf(word);
  if (idx === -1) return null;
  return { before: text.slice(0, idx), match: word, after: text.slice(idx + word.length) };
}

/**
 * Breaks `text` into one word/phrase per row, for display headings set in a monospace
 * font at very large sizes — at that scale a plain space between two words on the same
 * line renders as a conspicuously large gap, so each comma-separated segment (and each
 * word of the final segment) gets its own row instead.
 */
export function splitHeadingRows(text: string): { rows: string[]; accentWord: string } {
  const commaSegments = text.split(',').map((s) => s.trim()).filter(Boolean);
  const last = commaSegments.pop() ?? text.trim();
  const words = last.split(' ').filter(Boolean);
  const accentWord = words.pop() ?? last;
  return { rows: [...commaSegments, ...words], accentWord };
}
