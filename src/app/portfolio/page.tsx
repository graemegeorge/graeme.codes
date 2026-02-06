import Navigation from "../components/Navigation";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

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
    idx: "01",
  },
  {
    title: "Design System Library",
    description:
      "A comprehensive component library with Storybook documentation, ensuring consistency across multiple products and teams.",
    tech: ["React", "Storybook", "TypeScript", "CSS Modules"],
    link: "#",
    idx: "02",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time data visualization dashboard with interactive charts and customizable widgets for business intelligence.",
    tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
    link: "#",
    idx: "03",
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl">
          {/* Page header */}
          <div className="mb-16">
            <p className="section-label mb-4">02 / Portfolio</p>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-fg leading-[0.95]">
              Selected{" "}
              <span className="font-accent text-5xl md:text-7xl text-accent">
                work
              </span>
            </h1>
          </div>

          <div className="grid-line mb-0" />

          {/* Projects */}
          <div>
            {projects.map((project) => (
              <div
                key={project.idx}
                className="group border-b border-theme"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10">
                  {/* Left column: index + tech */}
                  <div className="md:col-span-3 flex md:flex-col gap-4 md:gap-3">
                    <span className="idx">{project.idx}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-0.5 border border-theme text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right column: content */}
                  <div className="md:col-span-9 flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl md:text-2xl font-medium text-fg mb-2 group-hover:text-accent transition-colors duration-150">
                        {project.title}
                      </h2>
                      <p className="text-secondary text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <a
                      href={project.link}
                      aria-label={`View ${project.title} project`}
                      className="flex-shrink-0 mt-1 p-2 border border-theme text-muted hover:text-accent hover:border-strong transition-colors duration-150"
                    >
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-theme px-6 md:px-12 py-4">
        <p className="section-label">
          More projects available upon request
        </p>
      </div>
    </main>
  );
}
