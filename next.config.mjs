/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable Next.js Image Optimization
  },
  basePath: '/Portofolio-Next', // Sesuaikan dengan nama repository GitHub
  assetPrefix: '/Portofolio-Next/', // Prefix untuk asset seperti gambar
};

export default nextConfig;
