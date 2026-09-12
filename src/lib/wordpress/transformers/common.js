/**
 * Transforms an image object into a standardized format
 * @param {string|Object} imageObject - The image data (string URL or object with url/alt properties)
 * @returns {Object} Standardized image object with url and alt properties
 */
export function imageTransform(imageObject) {
  if (imageObject == null) return '';

  // If imageObject is a string, treat it as URL
  if (typeof imageObject == 'string')
    return {
      id: 0,
      url: imageObject || '',
      alt: '',
    };

  // Return normalized image object with fallbacks
  const image = {
    id: imageObject.ID || 0,
    url: imageObject.url || '',
    alt: imageObject.alt || '',
  };

  return image;
}

/**
 * Normalizes a WordPress media image object into a simple image payload.
 * Supports the common WP REST response shape where the image includes
 * source_url, guid.rendered, and alt_text fields.
 *
 * @param {Object|null} imageObject - WordPress media object or null.
 * @returns {Object|string} Standardized image object or an empty string when no image exists.
 */
export function mediaImageTransform(imageObject) {
  // Return early when no media object is provided.
  if (imageObject == null) return '';

  // Build a normalized object with a safe fallback for the image URL and alt text.
  const image = {
    id: imageObject.id || 0,
    url: imageObject.source_url || imageObject.guid?.rendered || '',
    alt: imageObject.alt_text || '',
  };

  return image;
}

/**
 * Transforms SEO meta details from page data into a standardized format
 * @param {Object} pageData - The page data object containing ACF fields
 * @returns {Object|null} Standardized meta object with title, description, keywords, and OG properties
 */
export function metaTransform(pageData) {
  // Validate page data exists
  if (!pageData) return null;

  // Validate ACF fields exist
  if (!pageData.acf_all_fields) return null;

  // Validate meta details object exists
  if (!pageData.acf_all_fields.meta_details) return null;

  const metaDetails = pageData.acf_all_fields.meta_details;

  // Extract title with fallback chain: meta_title > pageData.title > rendered title
  // And description from meta details
  const title = metaDetails.meta_title || pageData.title || pageData.title?.rendered || '';
  const description = metaDetails.meta_description || '';

  // Build standardized meta object with fallback values
  const meta = {
    title,
    description,
    keywords: metaDetails.meta_keywords || 'Scalezone, Amazon, Sellers',
    ogImage: metaDetails.og_image || '',
    ogTitle: metaDetails.og_title || title,
    ogDescription: metaDetails.og_description || description,
  };

  return meta;
}

/**
 * Transforms trust statistics data into a standardized format
 * @param {Object} statsData - The trust statistics object containing seller metrics
 * @returns {Object|null} Standardized trust stats object with accountManaged, positiveFeedback, teamMembers, and yearsExperience properties
 */
export function trustStatsTransform(statsData) {
  // Validate stats data exists
  if (!statsData) return null;

  // Build standardized trust stats object with fallback values
  const trustStats = {
    accountManaged: statsData.account_managed || '',
    positiveFeedback: statsData.positive_feedback || '',
    teamMembers: statsData.team_members || '',
    yearsExperience: statsData.years_experience || '',
  };

  return trustStats;
}

/**
 * Transforms a WordPress zone post object into a standardized card format
 * @param {Object} zone - The zone post object containing id, slug, and ACF fields
 * @returns {Object|null} Standardized zone card object with id, slug, zoneIcon, zoneName, and zoneServices properties, or null if invalid
 */
export function zoneCardTransform(zone) {
  if (Array.isArray(zone) || !zone) return null;

  const acf = zone.acf;

  if (!acf) return null;

  // Build standardized zone card object with fallback values
  const card = {
    id: zone.id || 0,
    slug: zone.slug || '',
    zoneIcon: acf.zone_icon || '',
    zoneName: acf.zone_name || 'Zone Name',
    zoneServices: [],
  };

  return card;
}

/**
 * Transforms a WordPress testimonial object into a normalized frontend payload.
 *
 * @param {Object|null} testimonial - The testimonial post object from WordPress.
 * @param {Map} imageMap - A map of media IDs to WordPress media objects.
 * @returns {Object|null} Standardized testimonial object, or null when invalid.
 */
export function testimonialTransform(testimonial, imageMap) {
  if (Array.isArray(testimonial) || !testimonial) return null;

  const acf = testimonial.acf;

  if (!acf) return null;

  // Build the normalized testimonial object with fallback values.
  const data = {
    id: testimonial.id || 0,
    date: testimonial.date || Date.now(),
    // Resolve the client image from the media map and normalize it.
    clientImage: mediaImageTransform(imageMap.get(acf.client_image)),
    clientName: acf.client_name || '',
    clientCountry: acf.client_country || '',
    feedback: acf.feedback_text || '',
    isGlobal: acf.is_global || false,
    starCounter: acf.stars_number || 5,
  };

  return data;
}
