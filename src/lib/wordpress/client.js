const WORDPRESS_API_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://scalezone.ae/cms/wp-json/wp/v2';

/**
 * Custom Fetch Client for WordPress REST API
 *
 * @param {string} endpoint - The API endpoint relative to base URL
 * @param {Object} options - Fetch options (headers, revalidate time, tags, params)
 * @returns {Promise<any>} Response JSON data
 */
export async function wpFetch(endpoint, options = {}) {
  const { params = {}, next = {}, headers = {}, method = 'GET', body, ...restOptions } = options;

  // Build Query String from params object if present
  const queryString = new URLSearchParams(params).toString();
  const url = `${WORDPRESS_API_URL}${endpoint}${queryString ? `?${queryString}` : ''}`;
  console.log(url);

  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...headers,
  };

  // Next.js Cache & Revalidation Options
  const nextOptions = {
    tags: ['wordpress', ...(next.tags || [])],
    ...next,
  };

  try {
    const response = await fetch(url, {
      method,
      headers: defaultHeaders,
      body: body ? JSON.stringify(body) : undefined,
      next: nextOptions,
      ...restOptions,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText} on ${url}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Fetch Error [${endpoint}]:`, error);
    throw error;
  }
}
