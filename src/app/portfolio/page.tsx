import Navigation from "../components/Navigation";
import { Briefcase, ExternalLink, Code } from "lucide-react";
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
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 theme-page-bg" />

      <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 rounded-full blur-[120px] opacity-60 theme-gradient-1" />
      <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 rounded-full blur-[120px] opacity-50 theme-gradient-2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full blur-[100px] opacity-30 theme-gradient-3" />

      <Navigation />

      <div className="relative z-10 min-h-screen flex items-center justify-center flex-col flex-1 px-8 py-24">
        <div className="w-full max-w-3xl">
          <header className="flex flex-col items-center justify-center mb-12 gap-2">
            <h1 className="text-4xl font-inter mb-2 theme-text-primary">
              Portfolio
            </h1>
            <p className="text-xl font-inter theme-text-muted">
              Selected projects and case studies
            </p>
          </header>

          <div className="space-y-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group px-6 py-5 rounded-2xl border backdrop-blur-sm transition-all duration-300 theme-glass"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase
                        className="w-4 h-4 transition-colors duration-300 theme-text-muted theme-accent-hover"
                        aria-hidden="true"
                      />
                      <h2 className="text-xl font-inter transition-colors duration-300 theme-text-primary theme-accent-hover">
                        {project.title}
                      </h2>
                    </div>
                    <p className="text-sm leading-relaxed mb-4 theme-text-muted">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-full theme-text-muted"
                          style={{ backgroundColor: "var(--glass-bg)" }}
                        >
                          <Code className="w-3 h-3" aria-hidden="true" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.link}
                    aria-label={`View ${project.title} project`}
                    className="flex-shrink-0 mt-1 p-2 rounded-lg border transition-all duration-300 theme-glass"
                  >
                    <ExternalLink
                      className="w-4 h-4 transition-colors duration-300 theme-text-muted-dark theme-accent-hover"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm font-light tracking-wide text-center mt-12 theme-text-muted-dark">
            More projects available upon request. Specializing in React,
            Next.js, and TypeScript for clients in London, UK, and remote
            projects worldwide.
          </p>
        </div>
      </div>
    </main>
  );
}
