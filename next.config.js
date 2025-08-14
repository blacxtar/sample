// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com","http://localhost:3000","4srfmt3e1hkqzuqk.public.blob.vercel-storage.com"], // <-- whitelist the Googleusercontent domain
  },
};

module.exports = nextConfig;
