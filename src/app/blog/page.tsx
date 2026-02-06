import Navigation from "../components/Navigation";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

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

const blogPosts = [
  {
    title: "Building Modern Web Experiences",
    excerpt:
      "Exploring the latest trends in frontend development and how to create exceptional user experiences.",
    date: "2026.01.15",
    category: "Development",
    idx: "01",
  },
  {
    title: "The Art of Component Design",
    excerpt:
      "A deep dive into creating reusable, composable React components that scale with your application.",
    date: "2026.01.10",
    category: "Design",
    idx: "02",
  },
  {
    title: "Performance Optimization Strategies",
    excerpt:
      "Practical techniques for improving web application performance and user experience.",
    date: "2026.01.05",
    category: "Performance",
    idx: "03",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl">
          {/* Page header */}
          <div className="mb-16">
            <p className="section-label mb-4">03 / Blog</p>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-fg leading-[0.95]">
              Thoughts on{" "}
              <span className="font-accent text-5xl md:text-7xl text-accent">
                craft
              </span>
            </h1>
          </div>

          <div className="grid-line mb-0" />

          {/* Posts */}
          <div>
            {blogPosts.map((post) => (
              <article
                key={post.idx}
                className="group border-b border-theme"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10">
                  {/* Left column: metadata */}
                  <div className="md:col-span-3 flex md:flex-col gap-4 md:gap-2">
                    <span className="idx">{post.idx}</span>
                    <span className="idx">{post.date}</span>
                    <span className="text-xs px-2 py-0.5 border border-theme text-muted w-fit">
                      {post.category}
                    </span>
                  </div>

                  {/* Right column: content */}
                  <div className="md:col-span-9 flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl md:text-2xl font-medium text-fg mb-2 group-hover:text-accent transition-colors duration-150">
                        {post.title}
                      </h2>
                      <p className="text-secondary text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="w-5 h-5 text-muted group-hover:text-accent transition-colors duration-150 flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-theme px-6 md:px-12 py-4">
        <p className="section-label">More posts coming soon</p>
      </div>
    </main>
  );
}
