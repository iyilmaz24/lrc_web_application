/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "interesting-ballots.s3.us-east-1.amazonaws.com",
        pathname: "/public/**",
      },
      {
        protocol: "https",
        hostname: "lrci-main-web-app.s3.us-east-1.amazonaws.com",
        pathname: "/*",
      },
    ],
  },
};

export default nextConfig;
