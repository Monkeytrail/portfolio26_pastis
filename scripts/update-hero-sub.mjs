import { createClient } from '@sanity/client';

const token = process.env.SANITY_API_TOKEN;
if (!token) {
  console.error('Missing SANITY_API_TOKEN. Run: SANITY_API_TOKEN=your_token node scripts/update-hero-sub.mjs');
  process.exit(1);
}

const client = createClient({
  projectId: 'p1xxvps4',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

const heroSubheadline = `I'm a UX designer from the Netherlands, now based in Belgium, with over 10 years of experience creating products that genuinely work for the people using them. I care deeply about the details — usability, accessibility, and finding the right balance between good design and technical reality.

Right now I'm at Dematic, where I design warehouse management software for automated environments and help shape the design system that keeps everything consistent. Before that, I spent time at viaVictor crafting accessible digital experiences for governments, universities, and cultural institutions — and at Innomedio and Xsarus, building e-commerce platforms for brands like JBC and Omoda.

I love working closely with developers and use AI to get ideas into a prototype fast, so decisions are grounded in something tangible.`;

const existing = await client.fetch(`*[_type == "siteSettings"][0]{ _id }`);

if (existing?._id) {
  await client.patch(existing._id).set({ heroSubheadline }).commit();
  console.log('Updated heroSubheadline on existing siteSettings document.');
} else {
  await client.create({ _type: 'siteSettings', heroSubheadline });
  console.log('Created siteSettings document with heroSubheadline.');
}
