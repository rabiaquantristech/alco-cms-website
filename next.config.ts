import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    // Allow local images and external URLs if needed
    domains: [],
    formats: ['image/avif', 'image/webp'], // add any formats you use
  },
};

export default nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     // Allow local images and external URLs if needed
//     domains: [], 
//     formats: ['image/avif', 'image/webp'], // add any formats you use
//   },
// };

// module.exports = nextConfig;
