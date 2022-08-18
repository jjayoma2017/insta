/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'upload.wikimedia.org',
      'media-exp2.licdn.com',
      'lh3.googleusercontent.com',
    ],
  },
  swcMinify: true,
};

module.exports = nextConfig;
