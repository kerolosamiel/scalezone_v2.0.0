import { promise } from 'zod';
import { wpFetch } from '../client';
import { endpoints } from '../endpoints/endpoints';
import { homePageTransform } from '../transformers/pageTransformer';

/**
 * Fetches trust statistics from the home page
 * @returns {Promise<Object|null>} Transformed trust stats data or null if not found
 */
export async function getTrustStats() {
  try {
    // Fetch home page data from WordPress
    const data = await wpFetch(endpoints.pageBySlug('home'));
    if (!data) return null;

    // Handle both array and object responses
    const pageData = Array.isArray(data) ? data[0] : data;

    if (!pageData) return null;

    // Extract trust bar section from ACF fields
    const trustStatsData = pageData.acf_all_fields?.home_page_v2?.trust_bar_section;

    // Transform and return the trust stats
    return trustStatsData;
  } catch (error) {
    console.error(`Failed to Fetch Trust Stats: ${error}`);
    throw error;
  }
}

/**
 * Fetches the first media item associated with a parent ID.
 * @param {number} id - The parent media ID to look up.
 * @returns {Promise<Object|null>} The matching media object or null if unavailable.
 */
async function getImageByParentId(id) {
  try {
    // Validate the parent ID before querying WordPress.
    if (!Number.isInteger(id)) return null;

    // Request media records associated with the parent ID.
    const data = await wpFetch(endpoints.mediaByParentId(id));
    if (!data) return null;

    // WordPress may return a single object or an array; normalize to the first item.
    const mediaData = Array.isArray(data) ? data[0] : data;
    if (!mediaData) return null;

    // Return the matched media object.
    return mediaData;
  } catch (error) {
    console.error(`Failed to Fetch Image: ${error}`);
    throw error;
  }
}

/**
 * Fetches a set of WordPress media records for the supplied image references.
 * @param {Array<{ ID: number }|number>} imageObjects - Image entries or IDs to look up.
 * @returns {Promise<Array<Object|null>>} Media objects in the same order as the input list.
 */
async function getMultipleImages(imageObjects) {
  try {
    // Normalize the incoming image references into a flat list of IDs.
    const ids = imageObjects.map((obj) => obj.ID);

    // Resolve each media ID in parallel to reduce fetch latency.
    return await Promise.all(ids.map((id) => getImageByParentId(id)));
  } catch (error) {
    console.error(`Failed to Fetch Images: ${error}`);
    throw error;
  }
}

/**
 * Fetches a custom post type (CPT) by ID from WordPress.
 * @param {number} id - The CPT ID to fetch.
 * @param {string} endpoint - The endpoint URL to query.
 * @returns {Promise<Object|null>} The matched CPT object or null if unavailable.
 */
async function getCPTById(id, endpoint) {
  // Validate the Testimonial ID.
  if (!Number.isInteger(id)) return null;

  try {
    // Fetch CPT data from the provided endpoint.
    const data = await wpFetch(endpoint);
    if (!data) return null;

    // WordPress may return a single object or an array; normalize to the first item.
    const cptData = Array.isArray(data) ? data[0] : data;
    if (!cptData) return null;

    return cptData;
  } catch (error) {
    console.error(`Failed to Fetch Data: ${error}`);
    throw error;
  }
}

/**
 * Fetches multiple custom post type entries for a list of IDs or object references.
 *
 * @param {Array<number|{ ID: number }>|null} cptObjects - CPT IDs or objects to resolve.
 * @param {Function} endpoint - A factory function that receives an ID and returns an endpoint URL.
 * @returns {Promise<Array<Object|null>|null>} Matching CPT records or null if input is unavailable.
 */
async function getMultipleCPTs(cptObjects, endpoint) {
  if (!cptObjects) return null;

  if (typeof endpoint !== 'function') return null;

  try {
    // Normalize the input to a flat list of numeric IDs.
    const ids = Number.isInteger(cptObjects[0]) ? cptObjects : cptObjects.map((obj) => obj.ID);

    // Fetch each CPT record concurrently and preserve the original order.
    return await Promise.all(ids.map((id) => getCPTById(id, endpoint(id))));
  } catch (error) {
    console.error(`Failed to Fetch: ${error}`);
    throw error;
  }
}

/**
 * Fetches and prepares the homepage data model for the front end.
 *
 * @returns {Promise<Object|null>} Transformed homepage data or null when the homepage
 * is unavailable or the required sections are missing.
 */
export async function getHomePage() {
  // Fetch the homepage entry from WordPress so we can access all ACF sections.
  const data = await wpFetch(endpoints.pageBySlug('home'));

  if (!data) return null;

  // Extract the nested homepage v2 data from the first page result.
  const homeData = data[0]?.acf_all_fields?.home_page_v2;

  if (!homeData) return null;

  // Grab each homepage section needed to build the final transformed response.
  const partnerData = homeData.partners_section;
  const companyData = homeData.company_logos_section;
  const globalTestimonialsData = homeData.testimonials_section?.testimonials_first_row;
  const arabicTestimonialsData = homeData.testimonials_section?.testimonials_second_row;
  const zonesData = homeData.zones_section?.zones;

  // Fetch all partner, company, images, testimonial and zone data in parallel.
  const [partnersLogos, companyLogos, globalTestimonials, arabicTestimonials, zones] =
    await Promise.all([
      getMultipleImages(partnerData?.partner_logos),
      getMultipleImages(companyData?.logos),
      getMultipleCPTs(globalTestimonialsData.testimonial_items, endpoints.testimonialById),
      getMultipleCPTs(arabicTestimonialsData.testimonial_items, endpoints.testimonialById),
      getMultipleCPTs(zonesData, endpoints.zoneById),
    ]);

  // Combine testimonial rows so client images can be resolved for both language groups.
  const allTestimonials = [...arabicTestimonials, ...globalTestimonials];

  // Convert each testimonial's client image ID into a media lookup payload.
  const imageObjects = allTestimonials
    .map((t) => t?.acf?.client_image)
    .filter(Boolean)
    .map((id) => ({ ID: id }));

  // Fetch all testimonial images and zone service entries needed by the page transformer.
  const [rawImages, zoneServices] = await Promise.all([
    getMultipleCPTs(imageObjects, endpoints.mediaById),
    getMultipleCPTs(zones[0]?.acf?.zone_services, endpoints.serviceById),
  ]);

  // Build a lookup map keyed by media ID for quick image access during transformation.
  const imagesMap = new Map(rawImages.map((img) => [img.id, img]));

  // Transform the raw WordPress data into the final homepage payload.
  const result = homePageTransform(
    data,
    partnersLogos,
    companyLogos,
    globalTestimonials,
    arabicTestimonials,
    zones,
    imagesMap,
    'home'
  );

  return result;
}
