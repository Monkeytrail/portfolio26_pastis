import { ImageResponse } from 'next/og';
import { safeFetch } from '@/sanity/lib/client';
import { siteSettingsQuery } from '@/sanity/lib/queries';

export const alt = 'Jeroen van Ginneken — UX Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Link preview for LinkedIn, Slack and email — the first impression before the site itself
export default async function OpengraphImage() {
  const settings = await safeFetch<any>(siteSettingsQuery);
  const name = settings?.heroHeadline ?? 'Jeroen van Ginneken';
  const role = settings?.heroEyebrow ?? 'UX Engineer';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#110d0a',
          color: '#f4eee3',
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 28, color: '#a39b90' }}>
          <div style={{ width: 16, height: 16, borderRadius: 8, background: '#fcba28' }} />
          {role}
        </div>
        <div style={{ fontSize: 110, lineHeight: 1, letterSpacing: -2 }}>{name}</div>
        <div style={{ display: 'flex', gap: 12 }}>
          {['#fcba28', '#fc7428', '#f38ba3', '#f4eee3'].map((c) => (
            <div key={c} style={{ width: 64, height: 12, borderRadius: 6, background: c }} />
          ))}
        </div>
      </div>
    ),
    size,
  );
}
