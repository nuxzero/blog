/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // Add prefix to all routes in production.
  basePath: isProd ? "/blog" : "",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    // To be able to access the basePath in the app.
    basePath: isProd ? "/blog" : "",
  },
};

module.exports = nextConfig;
