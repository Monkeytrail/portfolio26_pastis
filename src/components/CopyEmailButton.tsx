'use client';

export function CopyEmailButton({ email }: { email: string }) {
  return (
    <pastis-button variant="primary" copy={email}>
      {email}
    </pastis-button>
  );
}
