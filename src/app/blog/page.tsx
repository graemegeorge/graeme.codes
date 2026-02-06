import { Calendar } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

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
    date: "January 15, 2026",
    category: "Development",
  },
  {
    title: "The Art of Component Design",
    excerpt:
      "A deep dive into creating reusable, composable React components that scale with your application.",
    date: "January 10, 2026",
    category: "Design",
  },
  {
    title: "Performance Optimization Strategies",
    excerpt:
      "Practical techniques for improving web application performance and user experience.",
    date: "January 5, 2026",
    category: "Performance",
  },
];

export default function Blog() {
  return (
    <main className="app-shell">
      <div className="app-frame">
        <header className="nav-rail">
          <div className="label">Graeme George</div>
          <nav className="nav-links" aria-label="Primary">
            <Link href="/">Home</Link>
            <Link href="/portfolio">Work</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <section className="grid-12 mt-12">
          <div className="col-span-12 lg:col-span-5">
            <div className="label">Blog</div>
            <h1 className="hero-title">Notes on systems, design, and code.</h1>
            <p className="subtle mt-4">
              Concise thinking on building modern interfaces without the noise.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7 list-block">
            {blogPosts.map((post) => (
              <article className="block" key={post.title}>
                <div className="flex items-center justify-between">
                  <span className="tag">{post.category}</span>
                  <div className="flex items-center gap-2 label">
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                    {post.date}
                  </div>
                </div>
                <h2 className="text-xl mt-4">{post.title}</h2>
                <p className="subtle mt-2">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="grid-12 mt-16 pb-10">
          <div className="col-span-12">
            <div className="rule" />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <p className="label">Next</p>
            <p className="subtle mt-4">More posts coming soon.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
