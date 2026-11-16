import { createClient } from '@sanity/client';

// Usage: SANITY_API_TOKEN=... node scripts/update-descriptions.mjs

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

const DESCRIPTIONS = [
  {
    id: '34084252-2d38-4586-8904-04ce05846128',
    title: 'Design System KION',
    description:
      "A shared design system for KION's warehouse software, so products like the fleet manager look and behave the same. It covers the building blocks of industrial interfaces — scan inputs, status badges, data tables, navigation and mode toggles — in light and dark themes, with accessibility (WCAG) built into every component instead of checked afterwards. Designers and developers work from the same components, so new features start from tested parts.",
  },
  {
    id: '48678004-e1bd-4de7-a006-337db567cd69',
    title: 'Fleet management software',
    description:
      "Control software for fleets of automated vehicles — AGVs and shuttles — in KION's automated warehouses. The work covers the live system and shuttle overviews, advanced parameters for tuning each vehicle type, and everything around it: accounts and permissions, licences, logs, language, and light, dark or automatic themes. Built on the KION design system for a consistent experience across products.",
  },
  {
    id: '795d0fb5-05c2-4cef-9188-3280ffb51b22',
    title: 'Stedelijk onderwijs Antwerpen',
    description:
      "A shared web platform for the City of Antwerp's public schools. One set of templates powers both the overarching Stedelijk Onderwijs site and the individual school sites, each in its own colours and identity — from De Groene Egel to Academie Hoboken. Key features include a school finder with filters and a map, course pages with enrolment details, and vacancies. The design moved from wireframes to approved visual designs for every template.",
  },
  {
    id: 'e1ac83f6-43b4-4502-b0ab-6d9e2ff8e79d',
    title: 'Antwerp Maritime Academy',
    description:
      'A redesign of the Antwerp Maritime Academy website, for future students as much as for researchers. Clear navigation guides prospective students through programmes and student services, while a new research section brings together research groups, projects and the people behind them. Strong maritime visuals, interactive elements and extra attention to mobile use and accessibility make a site that informs as well as it invites.',
  },
  {
    id: 'b3c6d951-a97c-4103-a74f-a801dc9211fe',
    title: 'De sociale kaart',
    description:
      'The redevelopment of the Sociale Kaart for the Flemish Government, both the informative section for citizens and the administrative portal for care providers and civil servants, was a complex challenge. The needs were mapped out with extensive interviews and user research. The Service Design document served as a guideline throughout the entire UX process, with regular user tests being carried out to test progress. The aim was a platform that effectively meets various user needs and improves the accessibility of social services and care information.',
  },
];

async function main() {
  for (const { id, title, description } of DESCRIPTIONS) {
    // Update the published document and any unpublished draft, so publishing a draft can't undo this.
    const ids = await client.fetch(`*[_id in [$id, "drafts." + $id]]._id`, { id });
    if (!ids.length) {
      console.error(`✗ ${title}: not found — skipped`);
      continue;
    }
    for (const docId of ids) {
      await client.patch(docId).set({ description }).commit();
    }
    console.log(`✓ ${title}`);
  }
  console.log('Done.');
}

main().catch((err) => {
  console.error(`✗ Failed: ${err.message}`);
  process.exit(1);
});
