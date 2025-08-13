// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com","http://localhost:3000"], // <-- whitelist the Googleusercontent domain
  },
};

module.exports = nextConfig;
