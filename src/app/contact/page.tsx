import { Mail, Linkedin, Github, Code2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

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
    <main className="app-shell">
      <div className="app-frame">
        <header className="nav-rail">
          <div className="label">Graeme George</div>
          <nav className="nav-links" aria-label="Primary">
            <Link href="/">Home</Link>
            <Link href="/portfolio">Work</Link>
            <Link href="/blog">Writing</Link>
          </nav>
        </header>

        <section className="grid-12 mt-12">
          <div className="col-span-12 lg:col-span-5">
            <div className="label">Contact</div>
            <h1 className="hero-title">Let’s build something precise.</h1>
            <p className="subtle mt-4">
              I collaborate with teams that value clarity, speed, and an
              authored visual voice.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7 list-block">
            {contactMethods.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block flex items-center justify-between"
              >
                <span className="flex items-center gap-3">
                  <span className="icon-slab">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm">{label}</span>
                    <span className="label">{value}</span>
                  </span>
                </span>
                <span className="label">Open</span>
              </a>
            ))}
            <div className="block">
              <div className="label">Availability</div>
              <p className="text-base mt-3">
                Remote-first, open to London or international collaborations.
                Clear briefs move fastest.
              </p>
            </div>
          </div>
        </section>

        <footer className="grid-12 mt-16 pb-10">
          <div className="col-span-12">
            <div className="rule" />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <p className="label">Response</p>
            <p className="subtle mt-4">Replies within two business days.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
