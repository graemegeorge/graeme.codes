import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  FileText,
  Briefcase,
  Mail,
  FileUser,
} from "lucide-react";
import Link from "next/link";

const links = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/graeme-george",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/graemegeorge1",
    icon: Instagram,
  },
  {
    label: "GitHub",
    href: "https://github.com/graemegeorge",
    icon: Github,
  },
  {
    label: "Download CV",
    href: "/Graeme_George_CV_2026_P.pdf",
    download: true,
    icon: FileUser,
  },
];

const secondaryLinks = [
  {
    label: "Blog",
    href: "/blog",
    icon: FileText,
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    icon: Briefcase,
  },
  {
    label: "About",
    href: "/about",
    icon: FileUser,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

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

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 theme-page-bg" />

      <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 rounded-full blur-[120px] opacity-60 theme-gradient-1" />
      <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 rounded-full blur-[120px] opacity-50 theme-gradient-2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full blur-[100px] opacity-30 theme-gradient-3" />

      {/* <header className="absolute top-0 left-0 w-full h-16 flex items-center justify-between px-6">
        <div className="text-2xl font-inter theme-text-primary">graeme.codes</div>
      </header> */}

      <div className="relative z-10 min-h-screen flex items-center justify-center flex-col flex-1 px-8">
        <div className="flex flex-col items-center justify-center py-12 gap-2">
          <h1 className="text-4xl font-inter theme-text-primary">
            Graeme George
          </h1>
          <p className="text-xl font-inter theme-text-muted">
            Senior Frontend Engineer
          </p>
          <p className="text-sm font-inter theme-text-muted-dark mt-2">
            React • Next.js • TypeScript | London, UK • Remote Available
          </p>
        </div>

        <div className="w-full max-w-md text-center">
          <nav className="space-y-3 mb-8">
            {links.map(({ label, icon: Icon, ...props }) => (
              <a
                key={label}
                {...props}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  label === "Download CV"
                    ? "Download Graeme George CV"
                    : `Visit ${label}`
                }
                className="group flex items-center justify-between w-full px-5 py-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 theme-glass"
              >
                <span className="flex items-center gap-3">
                  <Icon
                    className="w-5 h-5 transition-colors duration-300 theme-text-muted theme-accent-hover"
                    aria-hidden="true"
                  />
                  <span className="font-medium theme-text-secondary">
                    {label}
                  </span>
                </span>
                <svg
                  className="w-4 h-4 transition-all duration-300 theme-text-muted-dark theme-accent-hover group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--divider)] to-transparent" />
          </div>

          <div className="flex items-center justify-center gap-8">
            {secondaryLinks.map(({ label, icon: Icon, href, ...props }) => (
              <Link
                className="group flex flex-col items-center gap-2"
                key={label}
                href={href}
                {...props}
              >
                <div className="p-3.5 rounded-xl border transition-all duration-300 theme-glass">
                  <Icon
                    className="w-5 h-5 transition-colors duration-300 theme-text-muted theme-accent-hover"
                    aria-hidden="true"
                  />
                </div>
                <span className="text-sm transition-colors duration-300 theme-text-muted group-hover:opacity-80">
                  {label}
                </span>
              </Link>
            ))}
          </div>

          <p className="text-sm font-light tracking-wide py-12 theme-text-muted-dark">
            Building exceptional digital experiences with React, Next.js, and
            TypeScript. Available for projects in London, UK, and remote
            opportunities worldwide.
          </p>
        </div>
      </div>
    </main>
  );
}
