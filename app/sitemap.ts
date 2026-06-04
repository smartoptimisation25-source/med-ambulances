import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { path: "", priority: 1 },
    { path: "/mentions-legales", priority: 0.3 },
    { path: "/confidentialite", priority: 0.3 },
    { path: "/cookies", priority: 0.3 }
  ].map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority
  }));
}
