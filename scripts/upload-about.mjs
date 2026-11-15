import { createClient } from '@sanity/client';

const token = process.env.SANITY_API_TOKEN;
if (!token) {
  console.error('Missing SANITY_API_TOKEN. Run: SANITY_API_TOKEN=your_token node scripts/upload-about.mjs');
  process.exit(1);
}

const client = createClient({
  projectId: 'p1xxvps4',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

// PortableText block helper
function block(text) {
  return {
    _type: 'block',
    _key: Math.random().toString(36).slice(2, 10),
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: Math.random().toString(36).slice(2, 10), text, marks: [] }],
  };
}

const intro = [
  block("I'm a UX designer from the Netherlands, now based in Belgium, with over 10 years of experience creating products that genuinely work for the people using them. I care deeply about the details — usability, accessibility, and finding the right balance between good design and technical reality."),
  block("Right now I'm at Dematic, where I design warehouse management software for automated environments and help shape the design system that keeps everything consistent. Before that, I spent time at viaVictor crafting accessible digital experiences for governments, universities, and cultural institutions — and at Innomedio and Xsarus, building e-commerce platforms for brands like JBC and Omoda."),
  block("I love working closely with developers and use AI to get ideas into a prototype fast, so decisions are grounded in something tangible."),
];

async function run() {
  // Find the existing about document
  const existing = await client.fetch(`*[_type == "about"][0]{ _id }`);

  if (existing?._id) {
    console.log(`Patching existing about doc: ${existing._id}`);
    await client.patch(existing._id).set({ intro }).commit();
    console.log('Done.');
  } else {
    console.log('No about doc found — creating one.');
    await client.create({ _type: 'about', intro });
    console.log('Done.');
  }
}

run().catch((err) => { console.error(err); process.exit(1); });
