/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  experimental: {
    appDir: true,
  },
  eslint: {
    dirs: ['app'],
  },
};

module.exports = nextConfig;
