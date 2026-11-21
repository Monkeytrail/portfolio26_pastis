import { createClient } from '@sanity/client';
import { createReadStream } from 'fs';
import { resolve } from 'path';
import { randomUUID } from 'crypto';

// Usage: SANITY_API_TOKEN=... node scripts/upload-project-screenshots.mjs <project>|all|covers [project]

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

const PORTFOLIO_DIR = process.env.PORTFOLIO_IMAGES_DIR ?? resolve(process.env.HOME, 'Downloads/Portfolio');

const PROJECTS = {
  'sociale-kaart': {
    id: 'b3c6d951-a97c-4103-a74f-a801dc9211fe',
    title: 'De sociale kaart',
    dir: 'Sociale kaart/selectie',
    hero: '02-fiche-detail.png',
    gallery: [
      '01-zoekresultaten.png',
      '03-voorstel-tot-wijziging.png',
      '05-gesuggereerde-wijzigingen.png',
      '04-datamanager-dashboard.png',
      '06-nieuwe-fiche-authentieke-bronnen.png',
    ],
  },
  'stedelijk-onderwijs': {
    id: '795d0fb5-05c2-4cef-9188-3280ffb51b22',
    title: 'Stedelijk onderwijs Antwerpen',
    dir: 'Stedelijk onderwijs/selectie',
    hero: '01-stedelijk-onderwijs-home.png',
    gallery: [
      '02-wireframe-school-home.png',
      '03-de-groene-egel-home.png',
      '04-wireframe-scholenzoeker.png',
      '05-scholenzoeker.png',
      '06-academie-hoboken-home.png',
      '07-academie-hoboken-opleiding.png',
    ],
  },
  hzs: {
    id: 'e1ac83f6-43b4-4502-b0ab-6d9e2ff8e79d',
    title: 'Antwerp Maritime Academy',
    dir: 'HZS/selectie',
    hero: '01-research-home.png',
    gallery: [
      '02-onderzoeksgroep.png',
      '03-project-detail.png',
      '04-projecten-overzicht.png',
      '05-studenten-home.png',
      '06-studentenvoorzieningen.png',
    ],
  },
  // Wireframes already in the Sanity media library (cc1–cc6.png), re-attached by asset id.
  'cultuur-centra': {
    id: 'fcaecda5-f77b-4d4a-ade5-b7493b4f77ce',
    title: 'Cultuur centra Antwerpen',
    hero: 'image-6fed2beb40e67646b13ffd86e433d98c42909255-3200x7740-png',
    gallery: [
      'image-9df423d3b61f896ae0ccd9a6aabdb14bfcc2a5a2-3200x6990-png',
      'image-3482a48dabe5b7b7891d2b23a6fbd7c91f3090bf-3200x4622-png',
      'image-7be9fc5326e565ee3f37e9a81d189ca4bea61031-3200x8874-png',
      'image-f2ca86e081749203711265b8ce5de32f66c811cf-3200x8324-png',
      'image-5ceca5ae39939379a04de0dafb46a702ae97fa39-3200x2000-png',
    ],
  },
  // Created as a draft (if it doesn't exist yet) so it stays off the live site until published in the Studio.
  heylen: {
    id: 'heylen-ceramics',
    title: 'Heylen Ceramics',
    dir: 'Heylen Ceramics/selectie',
    cover: '00-cover.png',
    hero: '01-homepage.png',
    gallery: [
      '02-producten-overzicht.png',
      '03-product-detail.png',
      '04-realisaties-overzicht.png',
      '05-realisatie-detail.png',
      '06-architecten.png',
      '07-fabrikant-detail.png',
      '08-kennisbank.png',
    ],
    create: {
      _type: 'project',
      title: 'Heylen Ceramics',
      slug: { _type: 'slug', current: 'heylen-ceramics' },
      client: 'viavictor',
      year: '2023',
      featured: true,
      shortDescription: 'A new website for a family-run brick and ceramics maker',
      description:
        'A new website for Heylen Ceramics, a family business with four generations of knowledge of brick. The site brings together a filterable product collection, realisations by architects, profiles of the architects and manufacturers behind the products, and a knowledge base — so architects and homeowners can go from inspiration to the right product and a showroom visit.',
      tags: ['Web design', 'UX', 'E-catalogue'],
    },
  },
};

// Homepage card images, one per project folder. Replaces the current coverImage.
const COVERS = {
  fleet: { id: '48678004-e1bd-4de7-a006-337db567cd69', title: 'Fleet management software', file: 'Fleet management/STILL-iGo-RX20_image_737x414.jpg' },
  heylen: { id: 'heylen-ceramics', title: 'Heylen Ceramics', file: 'Heylen Ceramics/2 1.png' },
  hzs: { id: 'e1ac83f6-43b4-4502-b0ab-6d9e2ff8e79d', title: 'Antwerp Maritime Academy', file: 'HZS/unsplash_XdIrwH98K_E.png' },
  'sociale-kaart': { id: 'b3c6d951-a97c-4103-a74f-a801dc9211fe', title: 'De sociale kaart', file: 'Sociale kaart/owen-beard-DK8jXx1B-1c-unsplash.jpg' },
  'stedelijk-onderwijs': { id: '795d0fb5-05c2-4cef-9188-3280ffb51b22', title: 'Stedelijk onderwijs Antwerpen', file: 'Stedelijk onderwijs/unsplash_GDokEYnOfnE.png' },
  // Portrait crop of cc.jpg, centred on the dancer.
  'cultuur-centra': { id: 'fcaecda5-f77b-4d4a-ade5-b7493b4f77ce', title: 'Cultuur centra Antwerpen', file: 'cc-card.jpg' },
};

const key = () => randomUUID().replace(/-/g, '').slice(0, 12);

// The published document and/or its unpublished draft — both need the same changes,
// otherwise publishing a stale draft would undo them.
async function existingIds(id) {
  return client.fetch(`*[_id in [$id, "drafts." + $id]]._id`, { id });
}

// Empty blocks (e.g. a gallery added in the Studio without images) are safe to replace.
function hasContent(blocks) {
  return (blocks ?? []).some((b) => b.text || b.image || b.images?.length || b.items?.length);
}

// Accepts a local filename, or the id of an asset already in Sanity (starts with "image-").
async function uploadImage(dir, filename) {
  if (filename.startsWith('image-')) {
    console.log(`  Reusing ${filename}`);
    return { _type: 'image', asset: { _type: 'reference', _ref: filename } };
  }
  console.log(`  Uploading ${filename}...`);
  const asset = await client.assets.upload('image', createReadStream(resolve(dir, filename)), { filename });
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
}

async function uploadProject(project) {
  console.log(`→ ${project.title}`);
  let ids = await existingIds(project.id);
  if (!ids.length && project.create) {
    await client.create({ _id: `drafts.${project.id}`, ...project.create });
    ids = [`drafts.${project.id}`];
  }
  const existing = await client.fetch(`*[_id in $ids].detailedContent`, { ids });
  if (existing.some(hasContent)) {
    console.error('  ✗ Already has detailedContent — skipped so nothing is overwritten.\n');
    return;
  }

  const dir = resolve(PORTFOLIO_DIR, project.dir ?? '');
  const hero = await uploadImage(dir, project.hero);
  const gallery = [];
  for (const file of project.gallery) {
    gallery.push({ ...(await uploadImage(dir, file)), _key: key() });
  }

  const fields = {
    detailedContent: [
      { _key: key(), contentType: 'image', image: hero },
      { _key: key(), contentType: 'gallery', images: gallery },
    ],
  };
  if (project.cover) {
    fields.coverImage = await uploadImage(dir, project.cover);
  }

  for (const id of ids) {
    await client.patch(id).set(fields).commit();
  }

  console.log('  ✓ detailedContent updated\n');
}

async function uploadCovers(name) {
  const selected = name ? [COVERS[name]].filter(Boolean) : Object.values(COVERS);
  if (!selected.length) {
    console.error(`Unknown cover: ${name}. Options: ${Object.keys(COVERS).join(', ')}`);
    process.exit(1);
  }
  for (const cover of selected) {
    console.log(`→ ${cover.title}`);
    const ids = await existingIds(cover.id);
    if (!ids.length) {
      console.error('  ✗ Project not found — skipped.\n');
      continue;
    }
    const image = await uploadImage(PORTFOLIO_DIR, cover.file);
    for (const id of ids) {
      await client.patch(id).set({ coverImage: image }).commit();
    }
    console.log('  ✓ coverImage updated\n');
  }
}

async function main() {
  const name = process.argv[2];
  if (name === 'covers') {
    await uploadCovers(process.argv[3]);
    console.log('Done.');
    return;
  }
  const selected = name === 'all' ? Object.values(PROJECTS) : [PROJECTS[name]].filter(Boolean);
  if (!selected.length) {
    console.error(`Usage: node scripts/upload-project-screenshots.mjs <${Object.keys(PROJECTS).join('|')}|all|covers>`);
    process.exit(1);
  }
  for (const project of selected) {
    await uploadProject(project);
  }
  console.log('Done.');
}

main().catch((err) => {
  console.error(`✗ Failed: ${err.message}`);
  process.exit(1);
});
