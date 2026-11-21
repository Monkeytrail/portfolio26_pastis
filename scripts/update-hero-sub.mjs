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

const heroSubheadline = `10+ years designing complex software that people rely on every day. Based in Antwerp.

At Dematic I design accessible warehouse management software for automated warehouses, working to WCAG 2.2 AA, and work on the design system behind it. I also built Pastis, the web-component design system that runs this site. Before that I created accessible services for governments and universities at viaVictor, and e-commerce platforms for JBC and Omoda.

I work closely with developers and prototype in code, with AI, so decisions rest on something real.

Open to conversations about senior UX designer or UX engineer roles.`;

const heroHeadline = 'Senior UX designer for complex B2B software and design systems';

const existing = await client.fetch(`*[_type == "siteSettings"][0]{ _id }`);

if (existing?._id) {
  await client.patch(existing._id).set({ heroHeadline, heroSubheadline }).commit();
  console.log('Updated heroHeadline and heroSubheadline on existing siteSettings document.');
} else {
  await client.create({ _type: 'siteSettings', heroHeadline, heroSubheadline });
  console.log('Created siteSettings document with heroHeadline and heroSubheadline.');
}
