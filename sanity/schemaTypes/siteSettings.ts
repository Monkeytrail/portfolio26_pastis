import { defineType, defineField } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'brand',
      title: 'Brand / Initials',
      type: 'string',
      description: 'Short brand name shown in nav and footer (e.g. JvG)',
    }),

    // ── Hero ──
    defineField({
      name: 'heroHeadline',
      title: 'Hero Name',
      type: 'string',
      description: 'Full name shown as the hero heading',
    }),
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow',
      type: 'string',
      description: 'Label above the hero heading (e.g. UX / UI Designer)',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Subheadline',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'heroVersionLabel',
      title: 'Hero — Meta Line 1',
      type: 'string',
      description: 'Small decorative line above the hero title (e.g. "// Portfolio · v2026.1")',
    }),
    defineField({
      name: 'heroLocationLabel',
      title: 'Hero — Meta Line 2',
      type: 'string',
      description: 'e.g. "Antwerp, BE · UTC+1"',
    }),
    defineField({
      name: 'heroTrackLabel',
      title: 'Hero — Meta Line 3',
      type: 'string',
      description: 'Prefix shown before "· {start year}—Now" (e.g. "Design → Product")',
    }),
    defineField({
      name: 'homeHeroCtaLabel',
      title: 'Hero — Primary CTA Label',
      type: 'string',
      description: 'e.g. "View work ↓"',
    }),
    defineField({
      name: 'homeAboutCtaLabel',
      title: 'Hero — Secondary CTA Label',
      type: 'string',
      description: 'e.g. "About me →"',
    }),

    // ── Work section ──
    defineField({
      name: 'workSectionLabel',
      title: 'Work Section — Label',
      type: 'string',
      description: 'Small label above heading (e.g. "Selected Work")',
    }),
    defineField({
      name: 'workSectionHeading',
      title: 'Work Section — Heading',
      type: 'string',
      description: 'e.g. "Work I\'m proud to put my name on."',
    }),
    defineField({
      name: 'workSectionHeadingAccent',
      title: 'Work Section — Heading Accent Word',
      type: 'string',
      description: 'A word or phrase from the heading above to highlight (e.g. "proud"). The line breaks right after it.',
    }),
    defineField({
      name: 'workSectionSubheading',
      title: 'Work Section — Subheading',
      type: 'text',
      rows: 2,
      description: 'Reused on the /work index page lede, e.g. "across product, government, and design-systems work"',
    }),
    defineField({
      name: 'workListHeading',
      title: 'Work Index Page — Heading',
      type: 'string',
      description: 'Big heading on the /work page (e.g. "Selected Work"). Last word is highlighted.',
    }),

    // ── About page meta ──
    defineField({
      name: 'aboutPageTitle',
      title: 'About Page — Meta Title',
      type: 'string',
    }),
    defineField({
      name: 'aboutPageDescription',
      title: 'About Page — Meta Description',
      type: 'text',
      rows: 2,
    }),

    // ── Project detail ──
    defineField({
      name: 'projectBackLinkLabel',
      title: 'Project — Back Link Label',
      type: 'string',
      description: 'e.g. "← All work"',
    }),

    // ── Contact ──
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),

    // ── Footer ──
    defineField({
      name: 'footerTagline',
      title: 'Footer Tagline',
      type: 'string',
      description: 'Short tagline shown under the brand in the footer (e.g. UX/UI Designer · Antwerp)',
    }),
    defineField({
      name: 'footerCopyright',
      title: 'Footer Copyright',
      type: 'string',
      description: 'Leave empty to use the current year automatically.',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
        { name: 'github', title: 'GitHub URL', type: 'url' },
        { name: 'dribbble', title: 'Dribbble URL', type: 'url' },
      ],
    }),
  ],
});
