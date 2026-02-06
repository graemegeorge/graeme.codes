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
    <main className="app-shell">
      <div className="app-frame">
        <header className="nav-rail motion-reveal">
          <div className="label">Graeme George</div>
          <nav className="nav-links" aria-label="Primary">
            <Link href="/portfolio">Work</Link>
            <Link href="/blog">Writing</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <section className="grid-12 mt-12">
          <div className="col-span-12 lg:col-span-7 list-block">
            <div className="motion-reveal" data-delay="1">
              <div className="label">Senior Frontend Engineer</div>
              <h1 className="hero-title">
                I build engineered web systems with brutal clarity.
              </h1>
            </div>
            <div className="motion-reveal" data-delay="2">
              <div className="hero-script">Design as infrastructure.</div>
              <p className="subtle mt-4 text-base">
                React, Next.js, and TypeScript for teams that want interfaces
                to feel authored, not assembled. Based in London with global
                availability.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-6 motion-reveal" data-delay="2">
              <a className="btn btn-primary" href="/contact">
                Start a project
              </a>
              <a className="btn btn-secondary" href="/Graeme_George_CV_2026_P.pdf">
                Download CV
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 list-block">
            <div className="block motion-reveal" data-delay="1">
              <div className="label">Status</div>
              <p className="text-lg">Selective availability for Q2 2026.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="tag">Remote-first</span>
                <span className="tag">Product + UI</span>
                <span className="tag">London</span>
              </div>
            </div>
            <div className="block motion-reveal" data-delay="2">
              <div className="label">Signal</div>
              <div className="list-block mt-3">
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
                    className="flex items-center justify-between"
                  >
                    <span className="flex items-center gap-3">
                      <span className="icon-slab">
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </span>
                      <span className="text-sm">{label}</span>
                    </span>
                    <span className="label">Open</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid-12 mt-16">
          <div className="col-span-12">
            <div className="rule" />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="label">Selected work</div>
            <p className="subtle mt-4">
              Systems that needed restraint, speed, and a strong authorial
              voice.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 list-block">
            {[
              "Product design system rebuild for a fintech platform",
              "Editorial commerce UI with performance-first architecture",
              "Portfolio platform for a global creative collective",
            ].map((item) => (
              <div className="block" key={item}>
                <div className="label">Case</div>
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid-12 mt-16">
          <div className="col-span-12">
            <div className="rule" />
          </div>
          <div className="col-span-12 lg:col-span-6 list-block">
            <div className="label">Capabilities</div>
            <div className="block">
              <ul className="list-block">
                {[
                  "Interface systems and component architecture",
                  "Brutalist-leaning visual identity",
                  "Performance-first Next.js builds",
                  "Design tokens and theme engineering",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 list-block">
            <div className="label">Contact</div>
            <div className="block">
              <label className="label" htmlFor="email">
                Project briefing
              </label>
              <input
                id="email"
                className="field mt-3"
                placeholder="Your email"
                type="email"
              />
              <div className="flex gap-3 mt-4">
                <button className="btn btn-primary" type="button">
                  Send
                </button>
                <a className="btn btn-secondary" href="/contact">
                  Full contact
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="grid-12 mt-16 pb-10">
          <div className="col-span-12">
            <div className="rule" />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <p className="label">Digital presence</p>
            <div className="flex gap-3 mt-4">
              {secondaryLinks.map(({ label, icon: Icon, href, ...props }) => (
                <Link className="tag" key={label} href={href} {...props}>
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <p className="subtle">
              Building exceptional digital experiences with React, Next.js, and
              TypeScript. Available for projects in London, UK, and remote
              opportunities worldwide.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
