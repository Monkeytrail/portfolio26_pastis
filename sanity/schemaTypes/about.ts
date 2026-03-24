import { defineType, defineField } from 'sanity';

export const about = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    // ── Hero ──
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string', description: 'Small label above headline (e.g. "About")' }),
    defineField({ name: 'headline', title: 'Headline', type: 'string' }),
    defineField({ name: 'subheadline', title: 'Subheadline', type: 'string' }),
    defineField({ name: 'profileImage', title: 'Profile Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'intro', title: 'Introduction', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'getInTouchLabel', title: 'CTA — Get in Touch Label', type: 'string', description: 'e.g. "Get in touch →"' }),
    defineField({ name: 'skills', title: 'Skills', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'whatILove', title: 'What I Love', type: 'array', of: [{ type: 'string' }], description: 'List of things/skills you are passionate about' }),

    // ── Skills & Expertise section ──
    defineField({ name: 'skillsSectionLabel', title: 'Skills Section — Label', type: 'string' }),
    defineField({ name: 'skillsSectionHeading', title: 'Skills Section — Heading', type: 'string' }),
    defineField({ name: 'skillsSectionSubheading', title: 'Skills Section — Subheading', type: 'text', rows: 2 }),
    defineField({
      name: 'skillCards',
      title: 'Skill Cards',
      type: 'array',
      description: 'Icon options: research, interaction, systems, mobile, accessibility, collaboration',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'iconKey',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'User Research', value: 'research' },
                  { title: 'Interaction Design', value: 'interaction' },
                  { title: 'Design Systems', value: 'systems' },
                  { title: 'Mobile & Web', value: 'mobile' },
                  { title: 'Accessibility', value: 'accessibility' },
                  { title: 'Dev Collaboration', value: 'collaboration' },
                ],
              },
            },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'desc', title: 'Description', type: 'text', rows: 3 },
          ],
          preview: { select: { title: 'title', subtitle: 'iconKey' } },
        },
      ],
    }),

    // ── Experience section ──
    defineField({ name: 'experienceSectionLabel', title: 'Experience Section — Label', type: 'string' }),
    defineField({ name: 'experienceSectionHeading', title: 'Experience Section — Heading', type: 'string' }),
    defineField({ name: 'experienceSectionSubheading', title: 'Experience Section — Subheading', type: 'text', rows: 2 }),
    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'job',
          fields: [
            { name: 'role', title: 'Role', type: 'string' },
            { name: 'company', title: 'Company', type: 'string' },
            { name: 'period', title: 'Period', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
          preview: { select: { title: 'role', subtitle: 'company' } },
        },
      ],
    }),

    // ── Education section ──
    defineField({ name: 'educationSectionLabel', title: 'Education Section — Label', type: 'string' }),
    defineField({ name: 'educationSectionHeading', title: 'Education Section — Heading', type: 'string' }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'degree',
          fields: [
            { name: 'degree', title: 'Degree', type: 'string' },
            { name: 'school', title: 'School', type: 'string' },
            { name: 'year', title: 'Year', type: 'string' },
            { name: 'note', title: 'Note', type: 'string' },
          ],
          preview: { select: { title: 'degree', subtitle: 'school' } },
        },
      ],
    }),

    // ── Contact CTA section ──
    defineField({ name: 'contactSectionLabel', title: 'Contact Section — Label', type: 'string' }),
    defineField({ name: 'contactSectionHeading', title: 'Contact Section — Heading', type: 'string' }),
    defineField({ name: 'quote', title: 'Personal Quote', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url' }),

    // ── Existing fields kept for backward compatibility ──
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'aboutPreviewHeadline', title: 'About Preview Headline', type: 'string' }),
    defineField({ name: 'aboutPreviewText', title: 'About Preview Text', type: 'text', rows: 4 }),
    defineField({ name: 'aboutPreviewImage', title: 'About Preview Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'footerQuote', title: 'Footer Quote', type: 'string' }),
  ],
});
