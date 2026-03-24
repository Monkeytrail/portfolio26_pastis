import { createImageUrlBuilder } from '@sanity/image-url';
import { client } from './client';

const builder = createImageUrlBuilder(client);

export function urlForImage(source: any) {
  if (!source?.asset) return null;
  return builder.image(source).auto('format').fit('max').url();
}
