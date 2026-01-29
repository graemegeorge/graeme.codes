import Navigation from "../components/Navigation";
import { FileText, Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Building Modern Web Experiences",
    excerpt: "Exploring the latest trends in frontend development and how to create exceptional user experiences.",
    date: "January 15, 2026",
    category: "Development",
  },
  {
    title: "The Art of Component Design",
    excerpt: "A deep dive into creating reusable, composable React components that scale with your application.",
    date: "January 10, 2026",
    category: "Design",
  },
  {
    title: "Performance Optimization Strategies",
    excerpt: "Practical techniques for improving web application performance and user experience.",
    date: "January 5, 2026",
    category: "Performance",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-[#1a1a2e] rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-[#2d1f3d] rounded-full blur-[120px] opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-[#3d2a2a] rounded-full blur-[100px] opacity-30" />

      <Navigation />

      <div className="relative z-10 min-h-screen flex items-center justify-center flex-col flex-1 px-8 py-24">
        <div className="w-full max-w-3xl">
          <div className="flex flex-col items-center justify-center mb-12 gap-2">
            <div className="text-4xl text-white font-inter mb-2">Blog</div>
            <div className="text-xl text-zinc-400 font-inter">
              Thoughts on development, design, and technology
            </div>
          </div>

          <div className="space-y-4">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group px-6 py-5 rounded-2xl bg-white/3 border border-white/6 backdrop-blur-sm hover:bg-white/6 hover:border-white/12 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-[#6a6a7a] bg-white/5 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-[#6a6a7a]">
                        <Calendar className="w-3.5 h-3.5" />
                        <span className="text-xs">{post.date}</span>
                      </div>
                    </div>
                    <h2 className="text-xl text-white font-inter mb-2 group-hover:text-[#e8a87c] transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-[#6a6a7a] text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#4a4a5a] group-hover:text-[#e8a87c] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" />
                </div>
              </article>
            ))}
          </div>

          <p className="text-[#4a4a5a] text-sm font-light tracking-wide text-center mt-12">
            More posts coming soon
          </p>
        </div>
      </div>
    </main>
  );
}
