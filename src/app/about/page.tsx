import { User, Code, Palette, Zap } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

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
    icon: Code,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Design",
    icon: Palette,
    items: ["UI/UX Design", "Design Systems", "Figma", "Prototyping"],
  },
  {
    category: "Performance",
    icon: Zap,
    items: ["Optimization", "Accessibility", "SEO", "Testing"],
  },
];

export default function About() {
  return (
    <main className="app-shell">
      <div className="app-frame">
        <header className="nav-rail">
          <div className="label">Graeme George</div>
          <nav className="nav-links" aria-label="Primary">
            <Link href="/">Home</Link>
            <Link href="/portfolio">Work</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <section className="grid-12 mt-12">
          <div className="col-span-12 lg:col-span-5">
            <div className="label">About</div>
            <h1 className="hero-title">Senior Frontend Engineer</h1>
            <div className="hero-script">Rigorous, intentional, readable.</div>
          </div>
          <div className="col-span-12 lg:col-span-7 list-block">
            <div className="block">
              <div className="label">Profile</div>
              <p className="text-base">
                Based in London, I design and engineer web products that feel
                architectural. My work focuses on design systems, scalable
                frontend infrastructure, and interfaces with precision and
                restraint.
              </p>
            </div>
            <div className="block">
              <div className="label">Approach</div>
              <p className="text-base">
                I work across product, UI, and engineering to translate strategy
                into tactile systems. No visual noise, no gimmicks, only
                carefully structured experiences.
              </p>
            </div>
          </div>
        </section>

        <section className="grid-12 mt-16">
          <div className="col-span-12">
            <div className="rule" />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="label">Expertise</div>
            <p className="subtle mt-4">
              A balanced stack across design systems, engineering rigor, and
              performance.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 list-block">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div className="block" key={skill.category}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="icon-slab">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <div className="label">{skill.category}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <footer className="grid-12 mt-16 pb-10">
          <div className="col-span-12">
            <div className="rule" />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <p className="label">Statement</p>
            <p className="subtle mt-4">Always learning. Always building.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
