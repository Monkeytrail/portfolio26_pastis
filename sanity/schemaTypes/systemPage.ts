import { defineType, defineField } from 'sanity';

const titledItem = {
  type: 'object',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'desc', title: 'Description', type: 'text', rows: 3 },
  ],
  preview: { select: { title: 'title', subtitle: 'desc' } },
};

export const systemPage = defineType({
  name: 'systemPage',
  title: 'Design System Page',
  type: 'document',
  fields: [
    // ── Meta ──
    defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 2 }),

    // ── Hero ──
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'headline', title: 'Headline', type: 'string' }),
    defineField({ name: 'intro', title: 'Introduction', type: 'text', rows: 4 }),

    // ── Principles ──
    defineField({ name: 'principlesHeading', title: 'Principles — Heading', type: 'string' }),
    defineField({ name: 'principles', title: 'Principles', type: 'array', of: [titledItem] }),

    // ── Foundations & components ──
    defineField({ name: 'foundationsIntro', title: 'Foundations — Intro', type: 'text', rows: 2 }),
    defineField({ name: 'componentsIntro', title: 'Components — Intro', type: 'text', rows: 2 }),

    // ── Workflow ──
    defineField({ name: 'workflowHeading', title: 'Workflow — Heading', type: 'string' }),
    defineField({
      name: 'workflow',
      title: 'Workflow Steps',
      type: 'array',
      of: [titledItem],
      description: 'e.g. Figma variables → tokens → Lit components → Storybook → product',
    }),

    // ── Links ──
    defineField({
      name: 'links',
      title: 'Links',
      type: 'object',
      fields: [
        { name: 'storybook', title: 'Storybook URL', type: 'url' },
        { name: 'github', title: 'GitHub URL', type: 'url' },
        { name: 'figma', title: 'Figma Library URL', type: 'url' },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Design System Page' }) },
});
