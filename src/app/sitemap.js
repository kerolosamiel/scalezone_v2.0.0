// src/app/sitemap.js

import { getBlogPage, getResourcePage, getZonePage } from '@/lib/wordpress/data-fetching/queries';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://scalezone.ae';

  const staticPages = [
    '',
    '/about',
    '/contact',
    '/appointment',
    '/get-started',
    '/resources',
    '/case-studies',
    '/event',
    '/resources',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  let dynamicZonesAndServices = [];
  let dynamicBlogs = [];

  try {
    const zonesRes = await getZonePage();
    const resourcesRes = await getResourcePage();

    const zoneRoutes = zonesRes.map((zone) => ({
      url: `${baseUrl}/${zone.slug}`,
      lastModified: new Date(zone.modified || Date.now()).toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    }));

    dynamicZonesAndServices.push(...zoneRoutes);

    const services = zonesRes?.map((zone) => zone.services?.items).flat(Infinity);

    const serviceRoutes =
      services.length > 0 &&
      services.map((service) => {
        const zoneSlug = service.slug;

        return {
          url: `${baseUrl}/services/${zoneSlug}`,
          lastModified: new Date(service.modified || Date.now()).toISOString(),
          changeFrequency: 'monthly',
          priority: 0.8,
        };
      });
    dynamicZonesAndServices.push(...serviceRoutes);

    const blogs = resourcesRes ? resourcesRes.mediaHub.blogs.items : [];

    const featured = resourcesRes.mediaHub.blogs.featured
      ? Array.isArray(resourcesRes.mediaHub.blogs.featured)
        ? resourcesRes.mediaHub.blogs.featured[0]
        : resourcesRes.mediaHub.blogs.featured
      : [];

    if (featured?.length != 0) blogs.push(featured);

    const blogRoutes = blogs.map((blog) => ({
      url: `${baseUrl}/blogs/${blog?.slug}`,
      lastModified: new Date(blog.date || Date.now()).toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    }));

    dynamicBlogs.push(...blogRoutes);
  } catch (error) {
    console.error('Error fetching Zones & Services & Blogs for sitemap:', error);
  }

  return [...staticPages, ...dynamicZonesAndServices, ...dynamicBlogs];
}
