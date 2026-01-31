import { MetadataRoute } from "next";
import { getAllPostSlugs } from "./blog/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://graeme.codes";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/portfolio", "/blog", "/contact"];
  const blogSlugs = getAllPostSlugs();

  const mainRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...mainRoutes, ...blogRoutes];
}
