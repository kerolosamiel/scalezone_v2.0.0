// Image Object Details
export function imageTransform(imageObject) {
  if (imageObject == null) return '';

  if (typeof imageObject == String)
    return {
      url: imageObject,
      alt: '',
    };

  const image = {
    url: imageObject.url || '',
    alt: imageObject.alt || '',
  };

  return image;
}

// SEO Meta Details
export function metaTransform(pageData) {
  if (!pageData) return null;

  if (!pageData.acf_all_fields) return null;

  if (!pageData.acf_all_fields.meta_details) return null;

  const metaDetails = pageData.acf_all_fields.meta_details;

  // Main values
  const title = metaDetails.meta_title || pageData.title || pageData.title?.rendered || '';
  const description = metaDetails.meta_description || '';

  const meta = {
    title,
    description,
    keywords: metaDetails.meta_keywords || 'Scalezone, Amazon, Sellers',
    ogImage: metaDetails.og_image || '',
    ogTitle: metaDetails.og_title || title,
    ogDescription: metaDetails.og_description || description,
  };
  console.log(meta);

  return meta;
}

export function trustStatsTransform(statsData) {
  if (!statsData) return null;

  const trustStats = {
    accountManaged: statsData.account_managed || '',
    positiveFeedback: statsData.positive_feedback || '',
    teamMembers: statsData.team_members || '',
    yearsExperience: statsData.years_experience || '',
  };

  return trustStats;
}
