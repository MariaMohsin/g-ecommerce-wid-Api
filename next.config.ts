
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**", // Adjust the pathname if needed
      },
      {
        protocol: "https",
        hostname: "template6-six.vercel.app",
      },
    ],
  },
};

export default nextConfig;
