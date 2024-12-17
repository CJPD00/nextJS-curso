import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        // port: '',
        // pathname: '/**',
      },
    ],
  },
  experimental: {
    ppr: 'incremental'
  },
  devIndicators: {
    //buildActivity: false,
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },
};

export default nextConfig;
