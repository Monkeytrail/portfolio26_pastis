export default function HighlightLastWord({ text }: { text?: string }) {
  if (!text) return null;
  const words = text.trim().split(' ');
  const last = words.pop();
  return (
    <>
      {words.length > 0 && words.join(' ') + ' '}
      <span className="highlight-chip">{last}</span>
    </>
  );
}
