import { defineType, defineField } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
      description: 'Brief summary shown on project cards',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'tag',
      title: 'Category tag',
      type: 'string',
      description: 'Single category label shown on the work card and index (e.g. "Design system", "Public sector")',
    }),
    defineField({
      name: 'span',
      title: 'Homepage grid span',
      type: 'string',
      description: 'Controls how wide/tall the card is in the homepage work grid',
      options: {
        list: [
          { title: 'Wide (8 cols, 16:9)', value: 'wide' },
          { title: 'Half (6 cols)', value: 'half' },
          { title: 'Third (4 cols, 3:4)', value: 'third' },
          { title: 'Two-thirds (8 cols, 16:10)', value: 'twothirds' },
        ],
      },
      initialValue: 'half',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'e.g. "Lead Product Designer"',
    }),
    defineField({
      name: 'team',
      title: 'Team',
      type: 'string',
      description: 'e.g. "1 PM · 3 engineers"',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g. "6 months · Q1–Q3 2025"',
    }),
    defineField({
      name: 'metrics',
      title: 'Metrics',
      type: 'array',
      description: 'Short stat strip shown on the case study (e.g. value: "12", label: "hospitals deployed"). Keep claims verifiable.',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        },
      ],
    }),
    defineField({
      name: 'chapters',
      title: 'Case study chapters',
      type: 'array',
      description: 'Long-form narrative sections (Problem, Research, Design, Outcome, Reflection, ...)',
      of: [
        {
          type: 'object',
          name: 'chapter',
          fields: [
            { name: 'label', title: 'Label', type: 'string', description: 'e.g. "Problem", "Research"' },
            {
              name: 'body',
              title: 'Body',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'Heading', value: 'h4' },
                  ],
                  lists: [{ title: 'Bullet', value: 'bullet' }],
                  marks: {
                    decorators: [
                      { title: 'Bold', value: 'strong' },
                      { title: 'Italic', value: 'em' },
                    ],
                  },
                },
                {
                  type: 'object',
                  name: 'pullquote',
                  title: 'Pullquote',
                  fields: [
                    { name: 'quote', title: 'Quote', type: 'text', rows: 2 },
                    {
                      name: 'attribution',
                      title: 'Attribution',
                      type: 'string',
                      description: 'Optional. Only use a named attribution for a real, verified quote — leave blank for a reflective/unattributed line.',
                    },
                  ],
                  preview: { select: { title: 'quote' } },
                },
              ],
            },
          ],
          preview: { select: { title: 'label' } },
        },
      ],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image (Dark)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'coverImageLight',
      title: 'Cover Image (Light)',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional light-mode variant. Falls back to Cover Image (Dark) if not set.',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
    defineField({
      name: 'detailedContent',
      title: 'Detailed Content',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'contentType',
              title: 'Content Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Text', value: 'text' },
                  { title: 'Heading', value: 'heading' },
                  { title: 'Quote', value: 'quote' },
                  { title: 'Image', value: 'image' },
                  { title: 'Gallery', value: 'gallery' },
                  { title: 'Results', value: 'results' },
                ],
              },
            },
            {
              name: 'text',
              title: 'Text',
              type: 'text',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'images',
              title: 'Images (Gallery)',
              type: 'array',
              of: [{ type: 'image', options: { hotspot: true } }],
            },
            {
              name: 'items',
              title: 'Items (Results)',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
          preview: {
            select: { contentType: 'contentType', text: 'text' },
            prepare(value: Record<string, any>) {
              const { contentType, text } = value;
              return {
                title: (contentType as string)?.toUpperCase() || 'Content Block',
                subtitle: text ? (text as string).slice(0, 60) : '',
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'client', media: 'coverImage' },
  },
});
