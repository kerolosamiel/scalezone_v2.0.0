/** @type {import('next').NextConfig} */
const nextConfig = {
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
