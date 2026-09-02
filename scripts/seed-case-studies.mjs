import { createClient } from '@sanity/client';
import { randomUUID } from 'crypto';

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

const key = () => randomUUID().slice(0, 8);

// ── Portable text helpers ──────────────────────────────────────
function p(text) {
  return { _key: key(), _type: 'block', style: 'normal', markDefs: [], children: [{ _key: key(), _type: 'span', text, marks: [] }] };
}
function h4(text) {
  return { _key: key(), _type: 'block', style: 'h4', markDefs: [], children: [{ _key: key(), _type: 'span', text, marks: [] }] };
}
function bullets(items) {
  return items.map((text) => ({
    _key: key(),
    _type: 'block',
    style: 'normal',
    listItem: 'bullet',
    level: 1,
    markDefs: [],
    children: [{ _key: key(), _type: 'span', text, marks: [] }],
  }));
}
function quote(text, attribution) {
  return { _key: key(), _type: 'pullquote', quote: text, attribution };
}
function metric(value, label) {
  return { _key: key(), value, label };
}
function chapter(label, body) {
  return { _key: key(), label, body };
}

// ── Draft case-study content, grounded in what's already true in
//    Sanity (real project descriptions, real client names, real
//    counts of things explicitly mentioned). No invented outcome
//    percentages or quotes attributed to named people — review and
//    edit in Studio before treating any of this as final copy. ──

const projects = [
  {
    _id: '34084252-2d38-4586-8904-04ce05846128', // Design System KION
    tag: 'Design system',
    span: 'wide',
    accent: 'yellow',
    role: 'UX Designer',
    team: 'Design & engineering team',
    duration: '2026',
    order: 1,
    chapters: [
      chapter('Problem', [
        p('As Dematic’s warehouse management software grew across multiple product teams, screens accumulated without a shared visual or interaction language. Every team was solving the same UI problems slightly differently.'),
        h4('Why it mattered'),
        ...bullets([
          'Inconsistent patterns slowed teams down and made handoff to engineering slower than it needed to be',
          'The product had to work for operators in dense, technical warehouse environments — not a generic dashboard',
        ]),
      ]),
      chapter('Approach', [
        p('Rather than designing a component library speculatively, the system grows out of real screens as they get built — tokens and components get extracted once a pattern repeats, not before.'),
        p('Working directly with engineers is the point: a design system only earns its keep if it actually gets adopted, which means clean handoffs and components that are as easy to implement as they are to design.'),
      ]),
      chapter('Outcome', [
        p('An evolving shared design system now used across Dematic’s warehouse software teams, with dark and light support built in from the start.'),
      ]),
    ],
  },
  {
    _id: '48678004-e1bd-4de7-a006-337db567cd69', // Fleet management software
    tag: 'Product design',
    span: 'third',
    accent: 'orange',
    role: 'UX Designer',
    team: 'Design & engineering team',
    duration: '2026',
    order: 2,
    chapters: [
      chapter('Problem', [
        p('Teams overseeing automated warehouse fleets need to understand, at a glance, what every vehicle in the fleet is doing right now — and act quickly the moment something needs attention.'),
      ]),
      chapter('Approach', [
        p('The interface is built status-first: normal operation stays quiet, and attention is reserved for the vehicles and tasks that actually need a decision. Built on top of the shared KION design system so the fleet console feels consistent with the rest of the product suite.'),
      ]),
      chapter('Outcome', [
        p('Shipped as part of Dematic’s fleet orchestration product line for automated warehouse environments.'),
      ]),
    ],
  },
  {
    _id: '795d0fb5-05c2-4cef-9188-3280ffb51b22', // Stedelijk onderwijs Antwerpen
    tag: 'Public sector',
    span: 'half',
    accent: 'pink',
    role: 'UX/UI Designer',
    team: 'Design & engineering team',
    duration: '2023',
    order: 3,
    metrics: [metric('4', 'school sites unified')],
    chapters: [
      chapter('Problem', [
        p('Antwerp’s public schools — including De Groene Egel, CVO Encora, and Academie Hoboken — each ran on inconsistent, dated websites, making it harder for prospective students and parents to find what they needed.'),
      ]),
      chapter('Approach', [
        p('One shared platform and template system for Stedelijk Onderwijs’s network of schools, so each school keeps its own identity and content while sharing a consistent, accessible foundation.'),
      ]),
      chapter('Outcome', [
        p('Four school sites launched on the shared platform, including De Groene Egel, CVO Encora, and Academie Hoboken, alongside the central Stedelijk Onderwijs site.'),
      ]),
    ],
  },
  {
    _id: 'b3c6d951-a97c-4103-a74f-a801dc9211fe', // De sociale kaart
    tag: 'Public sector',
    span: 'half',
    accent: 'green',
    role: 'UX/UI Designer',
    team: 'Design & engineering team',
    duration: '2022',
    order: 4,
    metrics: [metric('2', 'connected portals')],
    chapters: [
      chapter('Problem', [
        p('Citizens and care providers across Flanders needed a reliable way to find and manage information about local social services — for very different audiences with very different needs.'),
      ]),
      chapter('Research', [
        p('Needs were mapped out through extensive interviews and user research. A Service Design document served as the guideline throughout the UX process, with regular user testing carried out to validate progress along the way.'),
        quote('A platform only works for citizens if it also works for the people entering and maintaining the data behind it.'),
      ]),
      chapter('Outcome', [
        p('Two connected platforms: an informative section for citizens, and an administrative portal for care providers and civil servants — improving how accessible social-services information is for everyone involved.'),
      ]),
    ],
  },
  {
    _id: 'e1ac83f6-43b4-4502-b0ab-6d9e2ff8e79d', // Antwerp Maritime Academy
    tag: 'Education',
    span: 'third',
    accent: 'purple',
    role: 'UX/UI Designer',
    team: 'Design & engineering team',
    duration: '2023',
    order: 5,
    chapters: [
      chapter('Problem', [
        p('Prospective students researching maritime study programmes needed a clearer way to understand what the Academy offers and picture themselves there.'),
      ]),
      chapter('Approach', [
        p('The redesign focused on easy navigation, attractive visuals, and interactive features to inform future students — with extra attention to mobile use and accessibility, since most research happens on a phone.'),
      ]),
      chapter('Outcome', [
        p('A redesigned site live at amacademy.be.'),
      ]),
    ],
  },
  {
    _id: 'fcaecda5-f77b-4d4a-ade5-b7493b4f77ce', // Cultuur centra Antwerpen
    tag: 'Culture',
    span: 'twothirds',
    accent: 'yellow',
    role: 'UX/UI Designer',
    team: 'Design & engineering team',
    duration: '2024',
    order: 6,
    metrics: [metric('4', 'cultural centres'), metric('4', 'service design documents')],
    chapters: [
      chapter('Problem', [
        p('Four of Antwerp’s major cultural centres — including De Kern, De Klap, and Corso — needed digital experiences tailored to their distinct audiences, not one generic template stretched across all of them.'),
      ]),
      chapter('Approach', [
        p('An extensive UX exercise produced four tailor-made Service Design documents, each including a target-group analysis and venue-specific requirements. Wireframes were developed from those documents, with accessibility built in from the start rather than checked at the end.'),
      ]),
      chapter('Outcome', [
        p('Four adapted, accessible websites, each guaranteeing an inclusive experience suited to its own venue and audience.'),
      ]),
    ],
  },
];

const aboutPatch = {
  valuesSectionLabel: 'Values',
  valuesSectionHeading: 'What I believe about design',
  values: [
    { _key: key(), heading: 'Accessibility from day one', body: "WCAG 2.1 AA isn't a final checklist item — it shapes decisions from the first wireframe." },
    { _key: key(), heading: 'Systems, not screens', body: 'A design system only works if developers actually adopt it. I build for that adoption, not just for Figma.' },
    { _key: key(), heading: 'Usability meets constraints', body: 'The best solution respects the technical reality it has to live in, rather than ignoring it.' },
    { _key: key(), heading: 'Design in code', body: 'I use AI to get ideas into a working prototype fast, so decisions are grounded in something tangible.' },
    { _key: key(), heading: 'Research before conviction', body: "Structuring an application starts with how people actually use it — not an assumption of how they should." },
    { _key: key(), heading: 'Leave the team better', body: 'Guiding a team through design decisions matters as much as making the decisions myself.' },
  ],
  processSectionLabel: 'Process',
  processSectionHeading: 'How I work',
  process: [
    { _key: key(), heading: 'Understand', body: "What's the actual problem, and who has it? Contextual research before anything gets drawn." },
    { _key: key(), heading: 'Frame', body: 'Turn research into a clear brief: success criteria, constraints, and the one thing that has to be true.' },
    { _key: key(), heading: 'Design', body: 'Wireframes and prototypes first, high fidelity second — prototyping in code when the fidelity matters.' },
    { _key: key(), heading: 'Validate', body: 'Usability testing with real users, with accessibility checks built in, not bolted on at the end.' },
    { _key: key(), heading: 'Ship & support', body: 'Handoff, documentation, and staying close to engineering through implementation.' },
  ],
};

async function main() {
  console.log('Patching case-study fields onto real Sanity projects...\n');
  console.log('NOTE: chapter/value/process copy below is a DRAFT written from the descriptions');
  console.log('already in Sanity. No metrics or quotes are invented beyond what’s already stated.');
  console.log('Review everything in Studio before treating it as final.\n');

  for (const proj of projects) {
    const { _id, ...fields } = proj;
    console.log(`→ ${_id}`);
    try {
      await client.patch(_id).set(fields).commit();
      console.log('  ✓ patched\n');
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}\n`);
    }
  }

  console.log('→ about doc (values + process)');
  try {
    await client.patch('about').set(aboutPatch).commit();
    console.log('  ✓ patched\n');
  } catch (err) {
    console.error(`  ✗ Failed: ${err.message}\n`);
  }

  console.log('Done.');
}

main();
