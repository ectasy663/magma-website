import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thisismagma.com",
      },
    ],
  },
};

export default nextConfig;
