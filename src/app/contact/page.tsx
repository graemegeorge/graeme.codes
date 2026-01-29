import Navigation from "../components/Navigation";
import { Mail, Linkedin, Github, MessageSquare, Code2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Frontend Engineer | London, UK | Remote Available",
  description:
    "Contact Graeme George - Senior Frontend Engineer. Available for React, Next.js, and TypeScript projects. Based in London, UK. Open to remote opportunities.",
  keywords: [
    "Contact Frontend Engineer",
    "Hire React Developer",
    "Frontend Engineer London",
    "Remote Frontend Developer",
    "React Developer UK",
    "Next.js Developer Contact",
  ],
  openGraph: {
    title: "Contact Graeme George - Senior Frontend Engineer",
    description:
      "Get in touch for React, Next.js, and TypeScript projects. Based in London, UK.",
    url: "/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

const contactMethods = [
  {
    label: "Email",
    value: "graemelgeorge@gmail.com",
    href: "mailto:graemelgeorge@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/graeme-george",
    href: "https://linkedin.com/in/graeme-george",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/graemegeorge",
    href: "https://github.com/graemegeorge",
    icon: Github,
  },
  {
    label: "CodeSandbox",
    value: "codesandbox.io/u/graemegeorge",
    href: "https://codesandbox.io/u/graemegeorge",
    icon: Code2,
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 theme-page-bg" />

      <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 rounded-full blur-[120px] opacity-60 theme-gradient-1" />
      <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 rounded-full blur-[120px] opacity-50 theme-gradient-2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full blur-[100px] opacity-30 theme-gradient-3" />

      <Navigation />

      <div className="relative z-10 min-h-screen flex items-center justify-center flex-col flex-1 px-8 py-24">
        <div className="w-full max-w-md">
          <header className="flex flex-col items-center justify-center mb-12 gap-2">
            <h1 className="text-4xl font-inter mb-2 theme-text-primary">
              Contact
            </h1>
            <p className="text-xl font-inter theme-text-muted">
              Let's work together
            </p>
          </header>

          <div className="space-y-3 mb-8">
            {contactMethods.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full px-5 py-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 theme-glass"
              >
                <span className="flex items-center gap-3">
                  <Icon
                    className="w-5 h-5 transition-colors duration-300 theme-text-muted theme-accent-hover"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col items-start">
                    <span className="font-medium theme-text-secondary">
                      {label}
                    </span>
                    <span className="text-xs theme-text-muted">{value}</span>
                  </div>
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
          </div>

          <div className="px-6 py-5 rounded-2xl border backdrop-blur-sm mb-8 theme-glass">
            <div className="flex items-start gap-3">
              <MessageSquare
                className="w-5 h-5 mt-0.5 flex-shrink-0 theme-text-muted"
                aria-hidden="true"
              />
              <div className="flex-1">
                <h3 className="text-sm font-inter mb-2 theme-text-primary">
                  Get in Touch
                </h3>
                <p className="text-xs leading-relaxed theme-text-muted">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Based in London, UK,
                  but available for remote work across the UK and
                  internationally. Feel free to reach out through any of the
                  channels above.
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm font-light tracking-wide text-center theme-text-muted-dark">
            Looking forward to hearing from you
          </p>
        </div>
      </div>
    </main>
  );
}
