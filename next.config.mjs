/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96],
    domains: [],
    path: '/_next/image',
    loader: 'default',
  },
  output: 'standalone',
};

export default nextConfig;
