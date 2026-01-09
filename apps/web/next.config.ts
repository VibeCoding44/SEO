import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  async redirects() {
    const csvPath = path.resolve(__dirname, "../../redirects.csv");

    if (!fs.existsSync(csvPath)) {
      return [];
    }

    const rows = fs.readFileSync(csvPath, "utf8").split("\n").slice(1);
    const redirects = rows
      .map((row) => row.trim())
      .filter(Boolean)
      .map((row) => {
        const [source, destination] = row.split(",");
        if (!source || !destination) {
          return null;
        }

        return {
          source,
          destination,
          permanent: true,
        };
      })
      .filter(
        (entry): entry is { source: string; destination: string; permanent: true } =>
          Boolean(entry)
      );

    return redirects;
  },
};

export default nextConfig;
