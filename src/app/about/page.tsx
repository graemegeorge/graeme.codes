import Navigation from "../components/Navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Senior Frontend Engineer | React & Next.js Expert",
  description:
    "Learn about Graeme George, a Senior Frontend Engineer based in London, UK. Specializing in React, Next.js, TypeScript, and modern web development. Available for remote opportunities.",
  keywords: [
    "About Frontend Engineer",
    "React Developer London",
    "Next.js Developer UK",
    "Frontend Engineer Skills",
    "Web Developer London",
    "Remote Frontend Engineer",
  ],
  openGraph: {
    title: "About Graeme George - Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer specializing in React, Next.js, and TypeScript. Based in London, UK.",
    url: "/about",
  },
  alternates: {
    canonical: "/about",
  },
};

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Design",
    items: ["UI/UX Design", "Design Systems", "Figma", "Prototyping"],
  },
  {
    category: "Performance",
    items: ["Optimization", "Accessibility", "SEO", "Testing"],
  },
];

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl">
          {/* Page header */}
          <div className="mb-16">
            <p className="section-label mb-4">01 / About</p>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-fg leading-[0.95]">
              Who{" "}
              <span className="font-accent text-5xl md:text-7xl text-accent">
                I am
              </span>
            </h1>
          </div>

          <div className="grid-line mb-12" />

          {/* Bio */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16">
            <div className="md:col-span-4">
              <p className="section-label">Biography</p>
            </div>
            <div className="md:col-span-8">
              <p className="text-secondary text-sm leading-relaxed mb-4">
                I&apos;m a Senior Frontend Engineer based in London, UK,
                focused on building exceptional digital experiences.
                With deep expertise in React, Next.js, and TypeScript,
                I specialize in scalable, performant applications that
                solve real problems.
              </p>
              <p className="text-secondary text-sm leading-relaxed">
                Available for both London-based and remote opportunities
                across the UK and internationally.
              </p>
            </div>
          </div>

          <div className="grid-line mb-12" />

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <p className="section-label">Expertise</p>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-8">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="marker" />
                      <span className="text-sm font-medium text-fg">
                        {skill.category}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-5">
                      {skill.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="text-xs px-3 py-1.5 border border-theme text-secondary"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-theme px-6 md:px-12 py-4">
        <p className="section-label">Always learning, always building</p>
      </div>
    </main>
  );
}
