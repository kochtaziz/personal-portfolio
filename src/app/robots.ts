import type { MetadataRoute } from "next";

const siteUrl = "https://personal-portfolio-one-orcin-67.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
