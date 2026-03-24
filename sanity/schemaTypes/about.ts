import { defineType, defineField } from 'sanity';

export const about = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'string',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'whatILove',
      title: 'What I Love',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of things/skills you are passionate about',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'string' }],
    }),
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
          preview: {
            select: { title: 'role', subtitle: 'company' },
          },
        },
      ],
    }),
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
          preview: {
            select: { title: 'degree', subtitle: 'school' },
          },
        },
      ],
    }),
    defineField({
      name: 'skillCards',
      title: 'Skill Cards',
      type: 'array',
      description: 'The "What I do" cards. Icon options: research, interaction, systems, mobile, accessibility, collaboration',
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
    defineField({
      name: 'quote',
      title: 'Personal Quote',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
  ],
});
