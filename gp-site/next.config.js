// gp-site/next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React's Strict Mode for highlighting potential issues
  swcMinify: true, // Enables SWC-based minification for faster builds
  images: {
    domains: ['example.com'], // Add domains for optimized image loading
  },
  experimental: {
    appDir: true, // Enables the experimental app directory feature
  },
  webpack: (config, { isServer }) => {
    // Modify the webpack config to include TailwindCSS
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // Fixes issues with certain packages that use 'fs'
      };
    }
    return config;
  },
  typescript: {
    // Ignore TypeScript errors during builds
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

