import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ Disable ESLint checks during Vercel builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;


