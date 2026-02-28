/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'github.com'],
    unoptimized: false,
  },
  experimental: {
    mdxRs: false,
  },
};

module.exports = nextConfig;
