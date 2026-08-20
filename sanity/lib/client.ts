import { createClient, type QueryParams } from '@sanity/client';

export const client = createClient({
  projectId: 'p1xxvps4',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

export async function safeFetch<T>(query: string, params: QueryParams = {}): Promise<T | null> {
  try {
    return await client.fetch<T>(query, params);
  } catch {
    return null;
  }
}
