const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  env: {
    API_URL: "https://65e75d6b53d564627a8ea521.mockapi.io",
    DOMAIN_ORIGIN: isProduction
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000",
  },
};

export default nextConfig;
