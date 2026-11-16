import { createClient } from '@sanity/client';
import { createReadStream } from 'fs';
import { resolve } from 'path';
import { randomUUID } from 'crypto';

const token = process.env.SANITY_API_TOKEN;
if (!token) {
  console.error('Missing SANITY_API_TOKEN. Run: export SANITY_API_TOKEN=your_token');
  process.exit(1);
}

const client = createClient({
  projectId: 'p1xxvps4',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

const PROJECT_ID = '48678004-e1bd-4de7-a006-337db567cd69';
const IMAGES_DIR = process.env.FLEET_IMAGES_DIR ?? resolve(process.env.HOME, 'Downloads/Portfolio/Fleet management');

const heroFile = 'Shuttle view.png';
const galleryFiles = [
  'Advanced parameter.png',
  'Settings.png',
  'Profile card - Appearance.png',
  'Whats new - detail.png',
];

const key = () => randomUUID().replace(/-/g, '').slice(0, 12);

async function uploadImage(filename) {
  console.log(`  Uploading ${filename}...`);
  const asset = await client.assets.upload('image', createReadStream(resolve(IMAGES_DIR, filename)), {
    filename,
    contentType: 'image/png',
  });
  console.log(`  ✓ Asset: ${asset._id}`);
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
}

async function main() {
  const existing = await client.fetch(`*[_id == $id][0].detailedContent`, { id: PROJECT_ID });
  if (existing?.length) {
    console.error('Fleet management already has detailedContent — aborting so nothing is overwritten.');
    process.exit(1);
  }

  console.log('Uploading Fleet management screenshots...\n');
  const hero = await uploadImage(heroFile);
  const gallery = [];
  for (const file of galleryFiles) {
    gallery.push({ ...(await uploadImage(file)), _key: key() });
  }

  await client
    .patch(PROJECT_ID)
    .set({
      detailedContent: [
        { _key: key(), contentType: 'image', image: hero },
        { _key: key(), contentType: 'gallery', images: gallery },
      ],
    })
    .commit();

  console.log('\n✓ detailedContent updated. Done.');
}

main().catch((err) => {
  console.error(`✗ Failed: ${err.message}`);
  process.exit(1);
});
