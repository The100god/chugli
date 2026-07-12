import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_API_URL: process.env.NEXT_API_URL || "http://localhost:5000",
  },
};

export default nextConfig;
