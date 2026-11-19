import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
import { works } from "@/lib/works";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const staticRoutes = ["", "/about", "/contact", "/work", "/privacy-policy", "/terms", "/editorial-policy"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.72,
  }));

  const workRoutes = works.map((work) => ({
    url: `${siteUrl}/work/${work.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  return [...staticRoutes, ...workRoutes];
}
