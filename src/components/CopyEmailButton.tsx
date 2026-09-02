'use client';

import { useState } from 'react';

interface Props {
  email: string;
  className?: string;
}

export default function CopyEmailButton({ email, className }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { }
  };

  return (
    <a href={`mailto:${email}`} className={className} onClick={handleCopy}>
      <span>{email}</span>
      <span className="copy">{copied ? '✓ copied' : '⎘ copy'}</span>
    </a>
  );
}
