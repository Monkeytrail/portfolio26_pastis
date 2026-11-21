import { createClient } from '@sanity/client';

const token = process.env.SANITY_API_TOKEN;
if (!token) {
  console.error('Missing SANITY_API_TOKEN. Add it to .env.local and run: node --env-file=.env.local scripts/remove-kion-screenshots.mjs');
  process.exit(1);
}

const client = createClient({
  projectId: 'p1xxvps4',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

const FLEET_ID = '48678004-e1bd-4de7-a006-337db567cd69';

const description =
  "Control software for fleets of automated vehicles — AGVs and shuttles — in KION's automated warehouses. Built on the KION design system for a consistent experience across products. Screenshots aren't shown here because the product is confidential, but I'm happy to walk you through the work in a conversation.";

// Collect every image asset referenced in detailedContent (published + draft),
// so the files are also removed from the public Sanity CDN, not just unlinked.
const docs = await client.fetch(
  `*[_id in [$id, "drafts." + $id]]{_id, "refs": detailedContent[]{"a": image.asset._ref, "b": images[].asset._ref}}`,
  { id: FLEET_ID },
);
const assetIds = [
  ...new Set(docs.flatMap((d) => (d.refs ?? []).flatMap((r) => [r.a, ...(r.b ?? [])]).filter(Boolean))),
];

const tx = client.transaction();
for (const doc of docs) tx.patch(doc._id, (p) => p.unset(['detailedContent']).set({ description }));
await tx.commit();
console.log(`Removed detailedContent and updated description on: ${docs.map((d) => d._id).join(', ')}`);

for (const id of assetIds) {
  try {
    await client.delete(id);
    console.log(`  ✓ Deleted asset ${id}`);
  } catch (err) {
    console.error(`  ✗ Could not delete ${id}: ${err.message}`);
  }
}
