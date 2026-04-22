import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",

  // No image optimization in static export
  images: {
    unoptimized: true,
  },

  // Enable React strict mode
  reactStrictMode: true,

  // Trailing slashes for GitHub Pages compatibility
  trailingSlash: true,
};

export default nextConfig;
