import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'p1xxvps4',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});
