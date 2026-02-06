import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senior Frontend Engineer | React & Next.js Expert | London, UK",
  description:
    "Graeme George - Senior Frontend Engineer specializing in React, Next.js, and TypeScript. Based in London, UK. Available for remote opportunities. Building exceptional digital experiences with modern web technologies.",
  keywords: [
    "Frontend Engineer London",
    "React Developer UK",
    "Next.js Developer London",
    "TypeScript Developer",
    "Remote Frontend Engineer",
    "Senior Frontend Developer",
    "React Expert London",
    "Next.js Expert UK",
  ],
  openGraph: {
    title: "Graeme George - Senior Frontend Engineer | React & Next.js Expert",
    description:
      "Senior Frontend Engineer specializing in React, Next.js, and TypeScript. Based in London, UK. Available for remote opportunities.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

const externalLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/graeme-george",
  },
  {
    label: "GitHub",
    href: "https://github.com/graemegeorge",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/graemegeorge1",
  },
];

const pages = [
  { label: "About", href: "/about", idx: "01" },
  { label: "Portfolio", href: "/portfolio", idx: "02" },
  { label: "Blog", href: "/blog", idx: "03" },
  { label: "Contact", href: "/contact", idx: "04" },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="border-b border-theme px-6 md:px-12 py-4 flex items-center justify-between">
        <span className="section-label">Graeme George</span>
        <span className="section-label">London, UK</span>
      </div>

      {/* Hero */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-5xl">
          <p className="section-label mb-6">Senior Frontend Engineer</p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight text-fg mb-8">
            Building{" "}
            <span className="font-accent text-6xl md:text-8xl lg:text-9xl text-accent">
              interfaces
            </span>
            <br />
            that work.
          </h1>

          <div className="grid-line my-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <p className="text-secondary text-sm leading-relaxed max-w-md">
              React, Next.js, and TypeScript. I build performant, accessible
              frontend systems. Available for projects in London and remote
              opportunities worldwide.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="/Graeme_George_CV_2026_P.pdf"
                download
                className="btn-slab btn-accent w-fit"
                aria-label="Download Graeme George CV"
              >
                Download CV
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <div className="flex gap-6 mt-2">
                {externalLinks.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted text-xs uppercase tracking-widest hover:text-fg transition-colors duration-150"
                    aria-label={`Visit ${label}`}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation grid */}
      <div className="border-t border-theme">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {pages.map(({ label, href, idx }, i) => (
            <Link
              key={label}
              href={href}
              className={`group flex flex-col justify-between p-6 md:p-8 min-h-[120px] transition-colors duration-150 hover:bg-[var(--surface-hover)] ${
                i < pages.length - 1 ? "border-r border-theme" : ""
              } ${i < 2 ? "border-b md:border-b-0 border-theme" : ""}`}
            >
              <span className="idx">{idx}</span>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-medium text-fg">{label}</span>
                <ArrowUpRight
                  className="w-4 h-4 text-muted group-hover:text-accent transition-colors duration-150"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
