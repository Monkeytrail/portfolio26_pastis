import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound-inner">
        <p className="notfound-code">4<span className="accent">0</span>4</p>
        <p className="notfound-msg">// Page not found · This path does not exist · Check the URL</p>
        <div className="notfound-actions">
          <Link href="/" className="nf-btn primary">← Back home</Link>
          <Link href="/work" className="nf-btn">View work</Link>
          <Link href="/about" className="nf-btn">About</Link>
        </div>
        <pre className="notfound-ascii">{`
   ____
  / __ \\
 | |  | |
 | |__| |
  \\___\\_\\  404

  // trace: no route matched
  // try: / or /work
        `}</pre>
      </div>
    </div>
  );
}
