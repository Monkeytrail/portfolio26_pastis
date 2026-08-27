const FONTS = ['var(--font-display-1)', 'var(--font-display-2)', 'var(--font-display-3)'];
const ROTATIONS = [-6, 4, -3, 7, -8, 3, -5, 6];

export default function RansomHeadline({ text }: { text?: string }) {
  if (!text) return null;
  const words = text.trim().split(' ');
  const last = words.pop();

  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          className="ransom-word"
          style={
            {
              fontFamily: FONTS[i % FONTS.length],
              '--rot': `${ROTATIONS[i % ROTATIONS.length]}deg`,
              '--delay': `${i * 0.18}s`,
            } as React.CSSProperties
          }
        >
          {word}
        </span>
      ))}
      <span className="highlight-chip">{last}</span>
    </>
  );
}
