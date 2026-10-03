/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.scalezone.ae',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
