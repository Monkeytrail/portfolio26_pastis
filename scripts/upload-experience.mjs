import { createClient } from '@sanity/client';

const token = process.env.SANITY_API_TOKEN;
if (!token) {
  console.error('Missing SANITY_API_TOKEN. Run: SANITY_API_TOKEN=your_token node scripts/upload-experience.mjs');
  process.exit(1);
}

const client = createClient({
  projectId: 'p1xxvps4',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

const experience = [
  {
    _type: 'job',
    _key: 'dematic',
    company: 'Dematic',
    role: 'Senior UX Designer',
    period: '2022 – present',
    description: 'Designing warehouse management software for automated environments and shaping the design system.',
  },
  {
    _type: 'job',
    _key: 'viavictor',
    company: 'viaVictor',
    role: 'UX/UI Designer',
    period: '2019 – 2022',
    description: 'Crafting accessible digital experiences for governments, universities, and cultural institutions.',
  },
  {
    _type: 'job',
    _key: 'innomedio',
    company: 'Innomedio / Xsarus',
    role: 'UX/UI Designer',
    period: '2015 – 2019',
    description: 'Building e-commerce platforms for brands like JBC and Omoda.',
  },
];

const existing = await client.fetch(`*[_type == "about"][0]{ _id }`);

if (existing?._id) {
  await client.patch(existing._id).set({ experience }).commit();
  console.log('Updated experience on existing about document.');
} else {
  await client.create({ _type: 'about', experience });
  console.log('Created about document with experience.');
}
