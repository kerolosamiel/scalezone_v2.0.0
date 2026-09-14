import {
  eventGalleryTransform,
  imageTransform,
  mediaImageTransform,
  metaTransform,
  teamMemberTransform,
  testimonialTransform,
  trustStatsTransform,
  zoneCardTransform,
  zoneMetaTransform,
  zoneTransform,
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
    id: pageData.id || 0,
    slug: customSlug || pageData.slug || '',
    seo: rowData.type === 'services-zone' ? zoneMetaTransform(pageData) : metaTransform(pageData),
    acf: rowData.type === 'services-zone' ? pageData.acf : pageData.acf_all_fields,
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
        testimonials: gTestimonials?.map((t) => testimonialTransform(t, imageMap)).filter(Boolean),
      },
      // Arabic market testimonials
      arabic: {
        market: homeData.testimonials_section?.testimonials_second_row?.market_name || '',
        testimonials: aTestimonials?.map((t) => testimonialTransform(t, imageMap)).filter(Boolean),
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

/**
 * Transforms WordPress about page data into a standardized format
 * @param {Object|Array} rowData - Raw page data from WordPress
 * @param {Object} trustStats - Trust statistics data
 * @param {Array} teamMembers - Array of team member data
 * @param {Object} teamImages - Map of team member images
 * @param {Array} gallery - Array of gallery/events data
 * @param {Object} gelleryImages - Map of gallery images
 * @param {string} customSlug - Optional custom slug to override the default
 * @returns {Object|null} Transformed about page object with all sections data
 */
export function aboutPageTransform(
  rowData,
  trustStats,
  teamMembers,
  gallery,
  images,
  customSlug = ''
) {
  if (!rowData) return null;

  // Get base page data and return null if invalid
  const base = basePageTransform(rowData, customSlug);
  if (!base) return null;

  // Extract about page ACF data
  const aboutData = base.acf?.about_page_v2;
  if (!aboutData) return base;

  // Remove ACF data from base object as we're building custom structure
  delete base.acf;

  // Build about page object with all sections
  const about = {
    ...base,
    any: aboutData,
    hero: {
      heroImage: imageTransform(aboutData.hero_section?.hero_image),
      title: aboutData.hero_section?.title || '',
      subtitle: aboutData.hero_section?.subtitle || '',
      primaryButton: aboutData.hero_section?.primary_button?.button_text || '',
      secondaryButton: aboutData.hero_section?.secondary_button?.button_text || '',
    },
    trust: trustStatsTransform(trustStats),
    team: {
      title: aboutData.team_section?.title || '',
      subtitle: aboutData.team_section?.subtitle || '',
      description: aboutData.team_section?.description || '',
      team: teamMembers.map((m) => teamMemberTransform(m?.acf, images)).filter(Boolean),
    },
    ownerPhilosophy: {
      owenrSide: {
        title: aboutData.owner_and_philosophy?.owner_side.title || '',
        subtitle: aboutData.owner_and_philosophy?.owner_side.subtitle || '',
        description: aboutData.owner_and_philosophy?.owner_side.description || '',
      },
      philosophySide: {
        title: aboutData.owner_and_philosophy?.philosophy_side.title || '',
        subtitle: aboutData.owner_and_philosophy?.philosophy_side.subtitle || '',
        description: aboutData.owner_and_philosophy?.philosophy_side.description || '',
      },
    },
    process: {
      title: aboutData.process_section?.title || '',
      subtitle: aboutData.process_section?.subtitle || '',
      stepOne: {
        title: aboutData.process_section?.step_one?.title || '',
        description: aboutData.process_section?.step_one?.description || '',
      },
      stepTwo: {
        title: aboutData.process_section?.step_two?.title || '',
        description: aboutData.process_section?.step_two?.description || '',
      },
      stepThree: {
        title: aboutData.process_section?.step_three?.title || '',
        description: aboutData.process_section?.step_three?.description || '',
      },
      stepFour: {
        title: aboutData.process_section?.step_four?.title || '',
        description: aboutData.process_section?.step_four?.description || '',
      },
    },
    conference: {
      title: aboutData.conference_section?.title || '',
      subtitle: aboutData.conference_section?.subtitle || '',
      videoURL: aboutData.conference_section?.video_url || '',
      posterImage: imageTransform(aboutData.conference_section?.poster_image),
    },
    events: {
      title: aboutData.events_section?.title || '',
      subtitle: aboutData.events_section?.subtitle || '',
      gallery: gallery.map((g) => eventGalleryTransform(g?.acf, images)).filter(Boolean),
    },
    cta: {
      title: aboutData.cta_section?.cta_title || '',
      description: aboutData.cta_section?.cta_description || '',
      cardTitle: aboutData.cta_section?.cta_second_title || '',
      button: aboutData.cta_section?.cta_button.button_text || '',
    },
  };

  return about;
}

export function zonesTransform(rowData, faqs, services) {
  if (!rowData) return null;

  const zones = rowData.map((z) => zoneTransform(z, faqs, services));

  return zones;
}
