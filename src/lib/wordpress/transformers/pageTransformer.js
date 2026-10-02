import { any } from 'zod';
import {
  eventGalleryTransform,
  faqTransform,
  imageTransform,
  mediaImageTransform,
  mediaTransform,
  metaTransform,
  serviceCardTransform,
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
  servicesMap,
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
      title: homeData.hero_section?.hero_title || '',
      description: homeData.hero_section?.hero_description || '',
      primaryButton: homeData.hero_section?.primary_button.text || '',
      secondaryButton: homeData.hero_section?.secondary_button.text || '',
      image: imageTransform(homeData.hero_section?.hero_image) || '',
    },
    partners: partnersLogo?.map((l) => mediaImageTransform(l)),
    zones: {
      title: homeData.zones_section?.zones_title || '',
      cards: zoneCards?.map((z) => zoneCardTransform(z, servicesMap)),
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
      image: imageTransform(homeData.mission_section?.mission_image) || '',
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
    hero: {
      image: imageTransform(aboutData.hero_section?.hero_image),
      title: aboutData.hero_section?.title || '',
      subtitle: aboutData.hero_section?.subtitle || '',
      description: aboutData.hero_section?.description || '',
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

/**
 * Transforms multiple zone records from WordPress into standardized zone objects
 * @param {Array} rowData - Array of raw zone data from WordPress
 * @param {Array} faqs - Array of FAQ data to associate with zones
 * @param {Array} services - Array of services data to associate with zones
 * @returns {Array|null} Array of transformed zone objects
 */
export function zonesTransform(rowData, faqs, services) {
  if (!rowData) return null;

  // Transform each zone record using zoneTransform helper
  const zones = rowData.map((z) => zoneTransform(z, faqs, services));

  return zones;
}

/**
 * Transforms WordPress contact page data into a standardized format
 * @param {Object|Array} rowData - Raw contact page data from WordPress
 * @returns {Object|null} Transformed contact page object with hero, contact info, and social media
 */
export function contactTransform(rowData) {
  if (!rowData) return null;

  // Reuse the shared page transformer to get the base page metadata.
  const base = basePageTransform(rowData, 'contact');
  if (!base) return null;

  // Extract the contact-specific ACF fields.
  const data = base.acf?.contact_page_v2;
  if (!data) return null;

  delete base.acf;

  // Build the normalized contact object with all contact sections.
  const contact = {
    ...base,
    hero: data.hero,
    info: {
      whatsapp: {
        title: data.information_side?.whatsapp_part?.title || '',
        button: {
          text: data.information_side?.whatsapp_part?.whatsapp_button?.button_text || '',
          number: data.information_side?.whatsapp_part?.whatsapp_button?.whatsapp_number || '',
        },
      },
      contact: {
        title: data.information_side?.contact_part?.title || '',
        email: data.information_side?.contact_part?.email || '',
        phone: data.information_side?.contact_part?.phone_number || '',
      },
      location: data.information_side?.location_part,
      socialMedia: data.information_side?.social_media_part,
    },
  };

  return contact;
}

export function servicePageTransform(rowData, rawFaqs, rawServices) {
  if (!rowData) return null;

  const base = basePageTransform(rowData);
  if (!base) return null;

  const page = base.acf?.service_v2?.services_sections;
  if (!page) return null;

  const faqs = rawFaqs || [];
  const services = rawServices || [];

  delete base.acf;

  const service = {
    ...base,
    hero: page.hero_section,
    impact: {
      firstPart: page.impact_section.first_part || '',
      insight: page.impact_section.insight,
      secondPart: page.impact_section.second_part || '',
      thirdPart: page.impact_section.third_part || '',
    },
    process: {
      title: page.process_section?.title || '',
      subtitle: page.process_section?.subtitle || '',
      chip: page.process_section?.chip || '',
      stepOne: page.process_section?.step_one,
      stepTwo: page.process_section?.step_two,
      stepThree: page.process_section?.step_three,
      stepFour: page.process_section?.step_four,
    },
    result: {
      title: page?.result_section?.title ?? '',
      subtitle: page?.result_section?.subtitle ?? '',
      card: {
        clientTag: page?.result_section?.result_card?.client_tag ?? '',
        quote: page?.result_section?.result_card?.quote ?? '',
        authorName: page?.result_section?.result_card?.author_name ?? '',
        authorRole: page?.result_section?.result_card?.author_role ?? '',
      },
    },
    recommendation: {
      title: page.recommendation_section?.title || '',
      subtitle: page.recommendation_section?.subtitle || '',
      services: services?.map((s) => serviceCardTransform(s)) || [],
    },
    calculator: {
      title: page?.growth_calc_section?.growth_title || '',
      description: page?.growth_calc_section?.growth_description || '',
      button: page?.growth_calc_section?.growth_button?.button_text || '',
    },
    faqs: {
      title: page?.faqs_section?.title || '',
      subtitle: page?.faqs_section?.subtitle || '',
      questions: faqs?.map((f) => faqTransform(f)) || [],
    },
    cta: {
      title: page?.cta_section?.cta_title || '',
      description: page?.cta_section?.cta_description || '',
      cardTitle: page?.cta_section?.cta_second_title || '',
      button: page?.cta_section?.cta_button?.button_text || '',
    },
  };

  return service;
}

export function resourcesPageTransfrom(
  rawData,
  rawBlogs,
  rawVideos,
  rawPodcasts,
  blogFeatured,
  videoFeatured,
  podcastFeatured,
  images
) {
  if (!rawData) return null;

  const base = basePageTransform(rawData);
  if (!base) return null;

  const page = base.acf;
  if (!page) return null;

  delete base.acf;

  const recources = {
    ...base,
    hero: page.hero,
    mediaHub: {
      blogs: {
        featured: {},
        items: [],
      },
      videos: {
        featured: mediaTransform(videoFeatured, images) || {},
        items: rawVideos?.map((v) => mediaTransform(v, images)) || [],
      },
      podcasts: {
        featured: mediaTransform(podcastFeatured, images) || {},
        items: rawPodcasts?.map((p) => mediaTransform(p, images)) || [],
      },
    },
    cta: {
      title: page?.cta_section?.cta_title || '',
      description: page?.cta_section?.cta_description || '',
      cardTitle: page?.cta_section?.cta_second_title || '',
      button: page?.cta_section?.cta_button?.button_text || '',
    },
  };

  return recources;
}
