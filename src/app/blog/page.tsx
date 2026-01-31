import Link from "next/link";
import Navigation from "../components/Navigation";
import { Calendar, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { blogPosts } from "./data";

export const metadata: Metadata = {
  title: "Blog | Frontend Development Articles | React & Next.js",
  description:
    "Blog by Graeme George - Senior Frontend Engineer. Articles on React, Next.js, TypeScript, frontend development, and web development best practices.",
  keywords: [
    "Frontend Development Blog",
    "React Blog",
    "Next.js Blog",
    "Web Development Articles",
    "Frontend Engineer Blog London",
    "React Tutorials",
  ],
  openGraph: {
    title: "Blog - Graeme George | Frontend Development Articles",
    description:
      "Articles on React, Next.js, TypeScript, and frontend development.",
    url: "/blog",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function Blog() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 theme-page-bg" />

      <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 rounded-full blur-[120px] opacity-60 theme-gradient-1" />
      <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 rounded-full blur-[120px] opacity-50 theme-gradient-2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full blur-[100px] opacity-30 theme-gradient-3" />

      <Navigation />

      <div className="relative z-10 min-h-screen flex items-center justify-center flex-col flex-1 px-8 py-24">
        <div className="w-full max-w-3xl">
          <header className="flex flex-col items-center justify-center mb-12 gap-2">
            <h1 className="text-4xl font-inter mb-2 theme-text-primary">
              Blog
            </h1>
            <p className="text-xl font-inter theme-text-muted">
              Thoughts on development, design, and technology
            </p>
          </header>

          <div className="space-y-4">
            {blogPosts.map((post, index) => {
              const CardContent = (
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="text-xs px-3 py-1 rounded-full theme-text-muted"
                        style={{ backgroundColor: "var(--glass-bg)" }}
                      >
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 theme-text-muted">
                        <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                        <span className="text-xs">{post.date}</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-inter mb-2 transition-colors duration-300 theme-text-primary group-hover:text-[#e8a87c]">
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed theme-text-muted">
                      {post.excerpt}
                    </p>
                  </div>
                  <ArrowRight
                    className="w-5 h-5 transition-all duration-300 flex-shrink-0 mt-1 theme-text-muted-dark group-hover:text-[#e8a87c] group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              );

              if (post.content) {
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block px-6 py-5 rounded-2xl border backdrop-blur-sm transition-all duration-300 theme-glass hover:border-[#e8a87c]/30"
                  >
                    {CardContent}
                  </Link>
                );
              }

              return (
                <article
                  key={index}
                  className="group px-6 py-5 rounded-2xl border backdrop-blur-sm transition-all duration-300 theme-glass opacity-60"
                >
                  {CardContent}
                  <span className="text-xs mt-3 block theme-text-muted-dark">
                    Coming soon
                  </span>
                </article>
              );
            })}
          </div>

          <p className="text-sm font-light tracking-wide text-center mt-12 theme-text-muted-dark">
            More posts coming soon
          </p>
        </div>
      </div>
    </main>
  );
}
