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
