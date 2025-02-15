/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  distDir: ".next",
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
