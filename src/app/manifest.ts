import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://graeme.codes";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Graeme George - Senior Frontend Engineer",
    short_name: "graeme.codes",
    description:
      "Senior Frontend Engineer specializing in React, Next.js, and TypeScript. Based in London, UK.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#e8a87c",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
