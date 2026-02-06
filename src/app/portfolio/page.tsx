import { Briefcase, ExternalLink, Code } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio | React & Next.js Projects | Frontend Engineer",
  description:
    "Portfolio of Graeme George - Senior Frontend Engineer. Explore projects built with React, Next.js, TypeScript, and modern web technologies. Based in London, UK.",
  keywords: [
    "Frontend Engineer Portfolio",
    "React Projects",
    "Next.js Projects",
    "Web Developer Portfolio London",
    "Frontend Projects UK",
    "React Developer Portfolio",
  ],
  openGraph: {
    title: "Portfolio - Graeme George | Frontend Engineer",
    description:
      "Portfolio showcasing projects built with React, Next.js, and TypeScript.",
    url: "/portfolio",
  },
  alternates: {
    canonical: "/portfolio",
  },
};

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern, scalable e-commerce solution built with Next.js and TypeScript, featuring real-time inventory management and seamless checkout experience.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    link: "#",
  },
  {
    title: "Design System Library",
    description:
      "A comprehensive component library with Storybook documentation, ensuring consistency across multiple products and teams.",
    tech: ["React", "Storybook", "TypeScript", "CSS Modules"],
    link: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time data visualization dashboard with interactive charts and customizable widgets for business intelligence.",
    tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <main className="app-shell">
      <div className="app-frame">
        <header className="nav-rail">
          <div className="label">Graeme George</div>
          <nav className="nav-links" aria-label="Primary">
            <Link href="/">Home</Link>
            <Link href="/blog">Writing</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <section className="grid-12 mt-12">
          <div className="col-span-12 lg:col-span-5">
            <div className="label">Portfolio</div>
            <h1 className="hero-title">Selected systems and case studies.</h1>
            <p className="subtle mt-4">
              A mix of product design, frontend architecture, and performance
              engineering.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7 list-block">
            {projects.map((project) => (
              <div className="block" key={project.title}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="icon-slab">
                      <Briefcase className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <h2 className="text-xl">{project.title}</h2>
                  </div>
                  <a
                    href={project.link}
                    aria-label={`View ${project.title} project`}
                    className="btn btn-secondary"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
                <p className="subtle mt-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span className="tag" key={tech}>
                      <Code className="w-3 h-3" aria-hidden="true" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="grid-12 mt-16 pb-10">
          <div className="col-span-12">
            <div className="rule" />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <p className="label">Scope</p>
            <p className="subtle mt-4">
              More projects available upon request.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
