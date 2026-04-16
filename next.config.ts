import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/dev-station",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/dev-station",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
