import { createClient } from '@sanity/client';
import { createReadStream } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

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

const IMAGES_DIR = resolve(__dirname, '../public/images/projects');

const projects = [
  { _id: '34084252-2d38-4586-8904-04ce05846128', title: 'Design System KION',            imageFile: 'design-system-kion-light.svg' },
  { _id: '48678004-e1bd-4de7-a006-337db567cd69', title: 'Fleet management software',     imageFile: 'fleet-management-software-light.svg' },
  { _id: '795d0fb5-05c2-4cef-9188-3280ffb51b22', title: 'Stedelijk onderwijs Antwerpen', imageFile: 'stedelijk-onderwijs-antwerpen-light.svg' },
  { _id: 'b3c6d951-a97c-4103-a74f-a801dc9211fe', title: 'De sociale kaart',              imageFile: 'de-sociale-kaart-light.svg' },
  { _id: 'e1ac83f6-43b4-4502-b0ab-6d9e2ff8e79d', title: 'Antwerp Maritime Academy',     imageFile: 'antwerp-maritime-academy-light.svg' },
  { _id: 'fcaecda5-f77b-4d4a-ade5-b7493b4f77ce', title: 'Cultuur centra Antwerpen',     imageFile: 'cultuur-centra-antwerpen-light.svg' },
];

async function main() {
  console.log('Uploading light-mode cover images...\n');

  for (const project of projects) {
    console.log(`→ "${project.title}"`);
    try {
      const filepath = resolve(IMAGES_DIR, project.imageFile);
      const asset = await client.assets.upload('image', createReadStream(filepath), {
        filename: project.imageFile,
        contentType: 'image/svg+xml',
      });
      console.log(`  ✓ Asset: ${asset._id}`);

      await client
        .patch(project._id)
        .set({
          coverImageLight: {
            _type: 'image',
            asset: { _type: 'reference', _ref: asset._id },
          },
        })
        .commit();

      console.log(`  ✓ coverImageLight updated\n`);
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}\n`);
    }
  }

  console.log('Done.');
}

main();
