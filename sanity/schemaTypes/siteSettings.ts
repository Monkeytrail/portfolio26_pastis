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
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),
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
      description: 'Copyright line in the footer (e.g. © 2025 Jeroen van Ginneken)',
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
