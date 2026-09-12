import {
  imageTransform,
  mediaImageTransform,
  metaTransform,
  testimonialTransform,
  trustStatsTransform,
  zoneCardTransform,
} from './common';

/**
 * Transforms base page data from WordPress into a standardized format
 * @param {Object|Array} rowData - Raw page data from WordPress
 * @param {string} customSlug - Optional custom slug to override the default
 * @returns {Object|null} Transformed base page object with id, slug, seo, and acf data
 */
export function basePageTransform(rowData, customSlug = '') {
  if (!rowData) return null;

  // Extract the first element if rowData is an array, otherwise use rowData as is
  const pageData = Array.isArray(rowData) ? rowData[0] : rowData;

  if (!pageData) return null;

  // Build the base page object with id, slug, seo metadata, and ACF fields
  const base = {
    id: pageData.id,
    slug: customSlug || pageData.slug || '',
    seo: metaTransform(pageData),
    acf: pageData.acf_all_fields,
  };

  return base;
}

/**
 * Transforms WordPress home page data into a standardized format
 * @param {Object|Array} rowData - Raw page data from WordPress
 * @param {Array} partnersLogo - Array of partner logo images
 * @param {Array} companiesLogo - Array of company logo images
 * @param {Array} gTestimonials - Array of global market testimonials
 * @param {Array} aTestimonials - Array of Arabic market testimonials
 * @param {Array} zoneCards - Array of zone card data
 * @param {Object} imageMap - Map of image data for testimonials
 * @param {string} customSlug - Optional custom slug to override the default
 * @returns {Object|null} Transformed home page object with all sections data
 */
export function homePageTransform(
  rowData,
  partnersLogo,
  companiesLogo,
  gTestimonials,
  aTestimonials,
  zoneCards,
  imageMap,
  customSlug = ''
) {
  if (!rowData) return null;

  // Get base page data and return null if invalid
  const base = basePageTransform(rowData, customSlug);
  if (!base) return null;

  // Extract home page ACF data
  const homeData = base.acf?.home_page_v2;

  if (!homeData) return base;

  // Remove ACF data from base object as we're building custom structure
  delete base.acf;

  // Build home page object with all sections
  const home = {
    ...base,
    hero: {
      heroTitle: homeData.hero_section?.hero_title || '',
      heroDescription: homeData.hero_section?.hero_description || '',
      primaryButton: homeData.hero_section?.primary_button.text || '',
      secondaryButton: homeData.hero_section?.primary_button.text || '',
      heroImage: imageTransform(homeData.hero_section?.hero_image) || '',
    },
    partners: partnersLogo?.map((l) => mediaImageTransform(l)),
    zones: {
      title: homeData.zones_section?.zones_title || '',
      cards: zoneCards?.map((z) => zoneCardTransform(z)),
    },
    companies: companiesLogo?.map((c) => mediaImageTransform(c)),
    calculator: {
      title: homeData.growth_calc_section?.growth_title || '',
      description: homeData.growth_calc_section?.growth_description || '',
      button: homeData.growth_calc_section?.growth_button?.button_text || '',
    },
    testimonials: {
      title: homeData.testimonials_section?.testimonials_title || '',
      // Global market testimonials
      global: {
        market: homeData.testimonials_section?.testimonials_first_row?.market_name || '',
        testimonials: gTestimonials?.map((t) => testimonialTransform(t, imageMap)),
      },
      // Arabic market testimonials
      arabic: {
        market: homeData.testimonials_section?.testimonials_second_row?.market_name || '',
        testimonials: aTestimonials?.map((t) => testimonialTransform(t, imageMap)),
      },
    },
    trust: trustStatsTransform(homeData.trust_bar_section),
    mission: {
      title: homeData.mission_section?.mission_title || '',
      subtitle: homeData.mission_section?.mission_subtitle || '',
      description: homeData.mission_section?.mission_description || '',
      button: homeData.mission_section?.mission_button?.button_text || '',
    },
    cta: {
      title: homeData.cta_section?.cta_title || '',
      description: homeData.cta_section?.cta_description || '',
      cardTitle: homeData.cta_section?.cta_second_title || '',
      button: homeData.cta_section?.cta_button.button_text || '',
    },
  };

  return home;
}
