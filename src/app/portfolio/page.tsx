import Navigation from "../components/Navigation";
import { Briefcase, ExternalLink, Code } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern, scalable e-commerce solution built with Next.js and TypeScript, featuring real-time inventory management and seamless checkout experience.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    link: "#",
  },
  {
    title: "Design System Library",
    description: "A comprehensive component library with Storybook documentation, ensuring consistency across multiple products and teams.",
    tech: ["React", "Storybook", "TypeScript", "CSS Modules"],
    link: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization dashboard with interactive charts and customizable widgets for business intelligence.",
    tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
    link: "#",
  },
];

export default function Portfolio() {
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
            <div className="text-4xl text-white font-inter mb-2">Portfolio</div>
            <div className="text-xl text-zinc-400 font-inter">
              Selected projects and case studies
            </div>
          </div>

          <div className="space-y-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group px-6 py-5 rounded-2xl bg-white/3 border border-white/6 backdrop-blur-sm hover:bg-white/6 hover:border-white/12 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase className="w-4 h-4 text-[#6a6a7a] group-hover:text-[#e8a87c] transition-colors duration-300" />
                      <h2 className="text-xl text-white font-inter group-hover:text-[#e8a87c] transition-colors duration-300">
                        {project.title}
                      </h2>
                    </div>
                    <p className="text-[#6a6a7a] text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="flex items-center gap-1.5 text-xs text-[#6a6a7a] bg-white/5 px-3 py-1 rounded-full"
                        >
                          <Code className="w-3 h-3" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.link}
                    className="flex-shrink-0 mt-1 p-2 rounded-lg bg-white/5 border border-white/6 hover:bg-white/10 hover:border-white/12 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 text-[#4a4a5a] group-hover:text-[#e8a87c] transition-colors duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[#4a4a5a] text-sm font-light tracking-wide text-center mt-12">
            More projects available upon request
          </p>
        </div>
      </div>
    </main>
  );
}
