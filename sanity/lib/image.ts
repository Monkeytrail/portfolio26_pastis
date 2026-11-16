import { createImageUrlBuilder } from '@sanity/image-url';
import { client } from './client';

const builder = createImageUrlBuilder(client);

export function urlForImage(source: any) {
  if (!source?.asset) return null;
  return builder.image(source).auto('format').fit('max').url();
}

// 1200×630 crop for link previews (Open Graph / social cards).
export function ogImageUrl(source: any) {
  if (!source?.asset) return null;
  return builder.image(source).width(1200).height(630).fit('crop').auto('format').url();
}
