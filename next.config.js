/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // Add prefix to all routes in production.
  basePath: isProd ? "/blog" : "",
  assetPrefix: isProd ? "/blog/" : "",
  output: "export",
  distDir: "dist",
  agentRules: false,
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
