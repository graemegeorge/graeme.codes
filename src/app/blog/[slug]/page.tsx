import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import type { Metadata } from "next";
import { getPostBySlug, getAllPostSlugs } from "../data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Graeme George`,
    description: post.excerpt,
    keywords: [
      post.category,
      "Frontend Development",
      "React",
      "Next.js",
      "Web Development",
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.content) {
    notFound();
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 theme-page-bg" />

      <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 rounded-full blur-[120px] opacity-60 theme-gradient-1" />
      <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 rounded-full blur-[120px] opacity-50 theme-gradient-2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full blur-[100px] opacity-30 theme-gradient-3" />

      <Navigation />

      <article className="relative z-10 min-h-screen flex items-start justify-center flex-col flex-1 px-8 py-24">
        <div className="w-full max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 mb-8 transition-colors duration-300 theme-text-muted theme-accent-hover"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to Blog</span>
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
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
            <h1 className="text-4xl md:text-5xl font-inter leading-tight theme-text-primary">
              {post.title}
            </h1>
          </header>

          <div className="prose prose-lg max-w-none">{post.content}</div>

          <footer className="mt-16 pt-8 border-t theme-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 transition-colors duration-300 theme-text-muted theme-accent-hover"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to all posts</span>
            </Link>
          </footer>
        </div>
      </article>
    </main>
  );
}
