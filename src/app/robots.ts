import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://graeme.codes";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
