/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "linguarprime.academy"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
