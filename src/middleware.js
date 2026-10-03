// middleware.js
import { NextResponse } from 'next/server';

const STATIC_REDIRECTS = {
  '/scale-your-sales.html': '/get-started',
  '/start-selling.html': '/get-started',
  '/blogs.html': '/resources/blogs',
  '/podcasts.html': '/resources/podcasts',
  '/videos.html': '/resources/videos',
  '/about.html': '/about',
  '/contact.html': '/contact',
  '/appointment.html': '/appointment',
};

const SERVICE_SLUG_MAP = {
  'account-setup': '/services/full-account-management',
  'product-listing': '/services/listing-optimization-and-seo',
  cataloging: '/services/cataloging-imaging-branding-a-plus-content',
  'amazon-inventory': '/services/end-to-end-amazon-fulfillment-logistics',
  advertising: '/services/amazon-ppc-and-advertising-management',
  'amazon-training': '/services/training-and-consultancy',
  'gated-category': '/services/account-health-ungating-and-reinstatement',
};

export function middleware(request) {
  const url = request.nextUrl.clone();
  const { pathname, searchParams } = url;

  if (pathname.startsWith('/cms')) {
    return NextResponse.next();
  }

  if (pathname === '/services/service.html' && searchParams.has('slug')) {
    const slug = searchParams.get('slug');
    const destination = SERVICE_SLUG_MAP[slug];

    if (destination) {
      url.pathname = destination;
      url.searchParams.delete('slug');
      return NextResponse.redirect(url, 301);
    }
  }

  if (STATIC_REDIRECTS[pathname]) {
    url.pathname = STATIC_REDIRECTS[pathname];
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images|fonts|cms).*)'],
};
