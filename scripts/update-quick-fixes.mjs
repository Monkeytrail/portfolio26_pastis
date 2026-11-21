import { createClient } from '@sanity/client';

const token = process.env.SANITY_API_TOKEN;
if (!token) {
  console.error('Missing SANITY_API_TOKEN. Run: SANITY_API_TOKEN=your_token node scripts/update-quick-fixes.mjs');
  process.exit(1);
}

const client = createClient({
  projectId: 'p1xxvps4',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

const settings = {
  siteTitle: 'Jeroen van Ginneken — Senior UX Designer',
  siteDescription: 'Portfolio of Jeroen van Ginneken, a senior UX designer in Antwerp designing complex B2B software and design systems.',
};

const about = {
  'intro[_key=="y21hwd"].children[_key=="7xx3po"].text':
    "Currently, I'm a UX designer at KION, designing warehouse management software and working on the design system for its suite of applications. Before that, I worked at viaVictor on projects for governments, universities, cultural institutions, and recruitment companies, at Innomedio on websites for Immo De Laet, inLease, and Van Looy Group, and at Xsarus on e-commerce for JBC and Omoda.",
  'experience[_key=="ukdq99"].company': 'KION',
  'experience[_key=="3ewxg5"].role': 'Freelance Designer',
};

// Alt text per original file name. The cc*.png names say nothing, so those were written from the images.
const altByFilename = {
  // Fleet Management Software
  'Shuttle view.png': 'Shuttle overview showing the live status of automated shuttles',
  'Advanced parameter.png': 'Advanced parameters for tuning a vehicle type',
  'Settings.png': 'Settings page with accounts, licences, logs and language',
  'Profile card - Appearance.png': 'Profile card with the light, dark and automatic theme options',
  'Whats new - detail.png': 'In-app release notes explaining what is new in an update',
  // Cultuur Centra Antwerpen
  'cc2.png': 'Wireframe of the CC Merksem homepage with an event search, upcoming events, news and newsletter sign-up',
  'cc1.png': 'Wireframe of the CC Deurne homepage with programme tiles and upcoming activities',
  'cc3.png': 'Wireframe of the De Kern homepage with film and festival tiles',
  'cc4.png': 'Wireframe of a De Kern film page with screenings, prices, location and cast',
  'cc5.png': 'Wireframe of a CC Merksem event page with dates, prices, accessibility information and cast',
  'cc6.png': 'Wireframe of the De Kern search panel for finding a show or event by date, genre or keyword',
  // Stedelijk Onderwijs Antwerpen
  '01-stedelijk-onderwijs-home.png': 'Stedelijk Onderwijs homepage',
  '02-wireframe-school-home.png': 'Wireframe of a school homepage template',
  '03-de-groene-egel-home.png': 'Homepage of the school De Groene Egel, in its own colours',
  '04-wireframe-scholenzoeker.png': 'Wireframe of the school finder',
  '05-scholenzoeker.png': 'School finder with filters and a map',
  '06-academie-hoboken-home.png': 'Academie Hoboken homepage',
  '07-academie-hoboken-opleiding.png': 'Academie Hoboken course page with enrolment details',
  // Antwerp Maritime Academy
  '01-research-home.png': 'Homepage of the research section',
  '02-onderzoeksgroep.png': 'Research group page',
  '03-project-detail.png': 'Research project detail page',
  '04-projecten-overzicht.png': 'Overview of research projects',
  '05-studenten-home.png': 'Homepage for future students',
  '06-studentenvoorzieningen.png': 'Student services page',
  // Heylen Ceramics
  '01-homepage.png': 'Heylen Ceramics homepage',
  '02-producten-overzicht.png': 'Filterable product collection',
  '03-product-detail.png': 'Product detail page',
  '04-realisaties-overzicht.png': 'Overview of realisations by architects',
  '05-realisatie-detail.png': 'Realisation detail page',
  '06-architecten.png': 'Overview of architects',
  '07-fabrikant-detail.png': 'Manufacturer profile page',
  '08-kennisbank.png': 'Knowledge base',
  // De Sociale Kaart
  '02-fiche-detail.png': 'Detail page of a care provider listing',
  '01-zoekresultaten.png': 'Search results for social services',
  '03-voorstel-tot-wijziging.png': 'Form for suggesting a change to a listing',
  '05-gesuggereerde-wijzigingen.png': 'Overview of suggested changes awaiting review',
  '04-datamanager-dashboard.png': 'Dashboard for data managers',
  '06-nieuwe-fiche-authentieke-bronnen.png': 'New listing prefilled from authentic government sources',
};

const projects = await client.fetch(`*[_type == "project" && defined(detailedContent)]{
  _id,
  "blocks": detailedContent[]{
    _key,
    "image": image.asset->originalFilename,
    "images": images[]{ _key, "filename": asset->originalFilename }
  }
}`);

const tx = client.transaction();
tx.patch('siteSettings', (p) => p.set(settings));
tx.patch('about', (p) => p.set(about));

const missing = [];
let altCount = 0;
for (const project of projects) {
  const alts = {};
  for (const block of project.blocks) {
    const targets = [];
    if (block.image) targets.push([`detailedContent[_key=="${block._key}"].image.alt`, block.image]);
    for (const img of block.images ?? []) {
      targets.push([`detailedContent[_key=="${block._key}"].images[_key=="${img._key}"].alt`, img.filename]);
    }
    for (const [path, filename] of targets) {
      if (altByFilename[filename]) alts[path] = altByFilename[filename];
      else missing.push(filename);
    }
  }
  if (Object.keys(alts).length) {
    tx.patch(project._id, (p) => p.set(alts));
    altCount += Object.keys(alts).length;
  }
}

if (missing.length) {
  console.error(`No alt text for: ${missing.join(', ')}. Nothing was changed.`);
  process.exit(1);
}

await tx.commit();
console.log(`Updated site settings, about page and ${altCount} image alt texts.`);
