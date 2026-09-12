import { wpFetch } from '../client';
import { endpoints } from '../endpoints/endpoints';
import { trustStatsTransform } from '../transformers/common';

export async function getTrustStats() {
  try {
    const data = await wpFetch(endpoints.pageBySlug('home'));
    if (!data) return null;

    const pageData = Array.isArray(data) ? data[0] : data;

    if (!pageData) return null;

    const trustStatsData = pageData.acf_all_fields?.home_page_v2?.trust_bar_section;

    return trustStatsTransform(trustStatsData);
  } catch (error) {
    console.error(`Failed to Fetch Trust Stats: ${error}`);
    throw error;
  }
}
