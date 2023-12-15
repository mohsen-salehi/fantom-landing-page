/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/manifest.json$/],
  disable: false
});

const nextConfig = {
  reactStrictMode: false,
  // trailingSlash: true,
  // output: "export",
  // distDir: "out"
};

module.exports = withPWA(nextConfig);
