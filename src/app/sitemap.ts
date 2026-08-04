import type { MetadataRoute } from "next";
import { projects } from "@/data/site";

const siteUrl = "https://personal-portfolio-one-orcin-67.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/about",
    "/projects",
    "/certifications",
    "/skills",
    "/experience",
    "/resume",
    "/blog",
    "/contact",
  ];

  return [
    ...routes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
