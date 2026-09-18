import { createClient } from '@sanity/client';

const token = process.env.SANITY_API_TOKEN;
if (!token) {
  console.error('Missing SANITY_API_TOKEN env variable. Run: export SANITY_API_TOKEN=your_token');
  process.exit(1);
}

const client = createClient({
  projectId: 'p1xxvps4',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

// Seeds the new CMS fields (added while wiring up previously-hardcoded copy)
// with the text that was hardcoded before, so nothing visibly changes but
// every one of these strings now genuinely lives in the CMS. Only sets a
// field if it's currently empty, so it never overwrites real edits.

const siteSettingsPatch = {
  heroVersionLabel: '// Portfolio · v2026.1',
  heroLocationLabel: 'Antwerp, BE · UTC+1',
  heroTrackLabel: 'Design → Product',
  workSectionHeading: "Work I'm proud to put my name on.",
  workSectionHeadingAccent: 'proud',
  workSectionSubheading: 'across product, government, and design-systems work',
  workListHeading: 'Selected Work',
};

const aboutPatch = {
  location: 'Antwerp, Belgium',
  bioDescription: 'I work at the intersection of product, craft, and accessibility.',
  availabilityNote: 'Open to hearing about interesting design and product work.',
  testimonialsSectionLabel: 'What people say',
};

async function seedIfEmpty(id, patch) {
  const doc = await client.getDocument(id);
  if (!doc) {
    console.error(`Document "${id}" not found — skipping.`);
    return;
  }
  const toSet = Object.fromEntries(
    Object.entries(patch).filter(([key]) => doc[key] === undefined || doc[key] === null || doc[key] === '')
  );
  if (Object.keys(toSet).length === 0) {
    console.log(`${id}: nothing to set, all fields already have values.`);
    return;
  }
  console.log(`${id}: setting ${Object.keys(toSet).join(', ')}`);
  await client.patch(id).set(toSet).commit();
}

await seedIfEmpty('siteSettings', siteSettingsPatch);
await seedIfEmpty('about', aboutPatch);

console.log('Done.');
