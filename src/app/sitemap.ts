import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://graeme.codes";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/portfolio", "/blog", "/contact"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : ("monthly" as const),
    priority: route === "" ? 1 : 0.8,
  }));
}
