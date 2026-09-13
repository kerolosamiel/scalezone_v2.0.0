/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['app', 'components', 'lib'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scalezone.ae',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
