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
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'Your role on the project (e.g. "UX engineer — design system lead")',
    }),
    defineField({
      name: 'disciplines',
      title: 'Disciplines',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Design system', value: 'design-system' },
          { title: 'UX', value: 'ux' },
          { title: 'UI', value: 'ui' },
          { title: 'Engineering', value: 'engineering' },
        ],
      },
    }),
    defineField({
      name: 'tools',
      title: 'Tools & Stack',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image (Dark)',
      type: 'image',
      options: { hotspot: true },
      description: 'Cropped to portrait/square cards on the home shelf — set the hotspot on the area that must stay visible.',
      fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
    }),
    defineField({
      name: 'coverImageLight',
      title: 'Cover Image (Light)',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional light-mode variant. Falls back to Cover Image (Dark) if not set.',
    }),
    defineField({
      name: 'coverVideo',
      title: 'Cover Video',
      type: 'file',
      options: { accept: 'video/mp4,video/webm' },
      description: 'Optional short muted loop shown instead of the cover image on the work grid.',
    }),
    defineField({
      name: 'metrics',
      title: 'Key Metrics',
      type: 'array',
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
                  { title: 'Code', value: 'code' },
                  { title: 'Component Spec', value: 'componentSpec' },
                  { title: 'Before / After', value: 'beforeAfter' },
                  { title: 'Figma Embed', value: 'figmaEmbed' },
                ],
              },
            },
            {
              name: 'text',
              title: 'Text',
              type: 'text',
              hidden: ({ parent }: any) => !['text', 'heading', 'quote', 'code'].includes(parent?.contentType),
            },
            {
              name: 'language',
              title: 'Language',
              type: 'string',
              description: 'e.g. ts, css, json',
              hidden: ({ parent }: any) => parent?.contentType !== 'code',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
              hidden: ({ parent }: any) => !['image', 'componentSpec'].includes(parent?.contentType),
            },
            {
              name: 'images',
              title: 'Images (Gallery)',
              type: 'array',
              of: [{ type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', title: 'Alt text', type: 'string' }] }],
              hidden: ({ parent }: any) => parent?.contentType !== 'gallery',
            },
            {
              name: 'before',
              title: 'Before',
              type: 'image',
              fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
              hidden: ({ parent }: any) => parent?.contentType !== 'beforeAfter',
            },
            {
              name: 'after',
              title: 'After',
              type: 'image',
              fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
              hidden: ({ parent }: any) => parent?.contentType !== 'beforeAfter',
            },
            {
              name: 'url',
              title: 'Figma URL',
              type: 'url',
              description: 'Share link to a Figma file, frame or prototype',
              hidden: ({ parent }: any) => parent?.contentType !== 'figmaEmbed',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
              hidden: ({ parent }: any) => !['image', 'gallery', 'componentSpec', 'beforeAfter', 'figmaEmbed'].includes(parent?.contentType),
            },
            {
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'Results: one outcome per item. Component spec: tokens or props used.',
              hidden: ({ parent }: any) => !['results', 'componentSpec'].includes(parent?.contentType),
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
