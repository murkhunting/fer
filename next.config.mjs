/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com", "m.media-amazon.com"],
  },
  transpilePackages: ["mongoose"],
};

export default nextConfig;
