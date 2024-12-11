/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    NEXT_PUBLIC_NODE_MODE: process.env.NEXT_PUBLIC_NODE_MODE,
    NEXT_PUBLIC_SESSION_SECRET: process.env.NEXT_PUBLIC_SESSION_SECRET,
    NEXT_PUBLIC_TIMEZONE: process.env.NEXT_PUBLIC_TIMEZONE,
    NEXT_PUBLIC_SOCKET_URL: process.env.NEXT_PUBLIC_SOCKET_URL,
    NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API,
  },
  async redirects() {
    if (process.env.NEXT_PUBLIC_NODE_MODE === 'production') {
      return [
        {
          source: '/admin/:path*',
          destination: 'http://localhost:5757/admin/:path*', // Redirect to admin path in production
          permanent: false,
        },
      ];
    }
    return [];
  },
};

export default nextConfig;
