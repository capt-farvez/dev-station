import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/dev-station",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
