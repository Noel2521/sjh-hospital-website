import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow images from the same domain (for future Cloudinary or external URLs)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
