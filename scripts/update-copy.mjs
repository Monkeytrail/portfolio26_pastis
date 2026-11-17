import { createClient } from '@sanity/client';

const token = process.env.SANITY_API_TOKEN;
if (!token) {
  console.error('Missing SANITY_API_TOKEN. Run: SANITY_API_TOKEN=your_token node scripts/update-copy.mjs');
  process.exit(1);
}

const client = createClient({
  projectId: 'p1xxvps4',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

// Proofreading pass of 2026-11-17, keyed by document _id.
const patches = {
  siteSettings: {
    siteDescription: 'Portfolio of Jeroen van Ginneken, a UX/UI Designer passionate about creating intuitive and beautiful digital products.',
    footerTagline: 'Jeroen van Ginneken - UX/UI Designer',
    heroSubheadline: `10+ years designing complex software that people rely on every day. Based in Antwerp.

At KION I design warehouse management software for automated warehouses, and work on the design system for the entire suite of applications. I also built Pastis, the web-component design system that runs this site. Before that I created accessible services for governments and universities at viaVictor, and e-commerce platforms for JBC and Omoda.

I work closely with developers and prototype in code, with AI, so decisions rest on something real.

Open to conversations about senior UX designer or UX engineer roles.`,
  },
  '34084252-2d38-4586-8904-04ce05846128': {
    year: '2024 - Current',
    description: "A shared design system for KION's suite of applications, so products like the fleet manager, digital twin preparation, analytics etc. look and behave the same. It covers the building blocks with components and tokens, with accessibility (WCAG) built into every component instead of checked afterwards. Designers and developers work from the same components, so new features start from tested parts.",
  },
  '48678004-e1bd-4de7-a006-337db567cd69': {
    title: 'Fleet Management Software',
    year: '2024 - Current',
    description: "Control software for fleets of automated vehicles — AGVs and shuttles — in KION's automated warehouses. Built on the KION design system for a consistent experience across products.",
  },
  'fcaecda5-f77b-4d4a-ade5-b7493b4f77ce': {
    title: 'Cultuur Centra Antwerpen',
  },
  '795d0fb5-05c2-4cef-9188-3280ffb51b22': {
    description: "A shared web platform for the City of Antwerp's public schools. One set of templates powers both the overarching Stedelijk Onderwijs site and the individual school sites, each with its own identity. Key features include a school finder with filters and a map, course pages with enrolment details, and vacancies. The design moved from wireframes to approved visual designs for every template.",
  },
  'heylen-ceramics': {
    description: 'A new website for Heylen Ceramics, a family business with four generations of knowledge of brick. The site brings together a filterable product collection, realisations by architects, profiles of the architects and manufacturers behind the products, and a knowledge base — so architects and homeowners can go from inspiration to the right product and a showroom visit. The main goal was a website that matches the quality of the product and of the buildings made with it.',
  },
  'b3c6d951-a97c-4103-a74f-a801dc9211fe': {
    title: 'De Sociale Kaart',
  },
};

const tx = client.transaction();
for (const [id, fields] of Object.entries(patches)) tx.patch(id, (p) => p.set(fields));
await tx.commit();
console.log(`Updated ${Object.keys(patches).length} documents.`);
