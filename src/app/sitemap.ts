import type { MetadataRoute } from "next";
import { featuredWork, getSiteUrl, insights } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const staticRoutes = ["", "/about", "/contact", "/work", "/insights", "/privacy-policy", "/terms", "/editorial-policy"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.72,
  }));

  const insightRoutes = insights.map((insight) => ({
    url: `${siteUrl}/insights/${insight.slug}`,
    lastModified: new Date(insight.published),
    changeFrequency: "monthly" as const,
    priority: 0.68,
  }));
  const workRoutes = featuredWork.map((work) => ({
    url: `${siteUrl}/work/${work.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  return [...staticRoutes, ...workRoutes, ...insightRoutes];
}
