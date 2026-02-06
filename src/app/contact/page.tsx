import Navigation from "../components/Navigation";
import { ArrowUpRight } from "lucide-react";
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
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/graeme-george",
    href: "https://linkedin.com/in/graeme-george",
  },
  {
    label: "GitHub",
    value: "github.com/graemegeorge",
    href: "https://github.com/graemegeorge",
  },
  {
    label: "CodeSandbox",
    value: "codesandbox.io/u/graemegeorge",
    href: "https://codesandbox.io/u/graemegeorge",
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl">
          {/* Page header */}
          <div className="mb-16">
            <p className="section-label mb-4">04 / Contact</p>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-fg leading-[0.95]">
              Let&apos;s{" "}
              <span className="font-accent text-5xl md:text-7xl text-accent">
                talk
              </span>
            </h1>
          </div>

          <div className="grid-line mb-0" />

          {/* Contact methods */}
          <div>
            {contactMethods.map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-6 md:py-8 border-b border-theme"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 flex-1">
                  <div className="md:col-span-3">
                    <span className="section-label">{label}</span>
                  </div>
                  <div className="md:col-span-9">
                    <span className="text-fg text-sm md:text-base group-hover:text-accent transition-colors duration-150">
                      {value}
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 text-muted group-hover:text-accent transition-colors duration-150 flex-shrink-0 ml-4"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>

          <div className="grid-line my-12" />

          {/* Message */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <p className="section-label">Availability</p>
            </div>
            <div className="md:col-span-8">
              <p className="text-secondary text-sm leading-relaxed">
                I&apos;m open to discussing new projects, creative ideas, or
                opportunities. Based in London, UK, but available for remote
                work across the UK and internationally. Reach out through any
                channel above.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-theme px-6 md:px-12 py-4">
        <p className="section-label">Looking forward to hearing from you</p>
      </div>
    </main>
  );
}
