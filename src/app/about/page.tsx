import Navigation from "../components/Navigation";
import { User, Code, Palette, Zap } from "lucide-react";
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
              About
            </h1>
            <p className="text-xl font-inter theme-text-muted">
              Senior Frontend Engineer
            </p>
          </header>

          <div className="space-y-6 mb-8">
            <div className="px-6 py-5 rounded-2xl border backdrop-blur-sm theme-glass">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl border theme-glass">
                  <User
                    className="w-5 h-5 theme-text-muted"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-inter mb-2 theme-text-primary">
                    Who I Am
                  </h3>
                  <p className="text-sm leading-relaxed theme-text-muted">
                    I'm a Senior Frontend Engineer based in London, UK,
                    passionate about creating exceptional digital experiences.
                    With a focus on modern web technologies like React, Next.js,
                    and TypeScript, I specialize in building scalable,
                    performant applications that delight users and solve
                    real-world problems. I'm available for both London-based and
                    remote opportunities across the UK and internationally.
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 py-5 rounded-2xl border backdrop-blur-sm theme-glass">
              <h3 className="text-lg font-inter mb-4 theme-text-primary">
                Skills & Expertise
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <Icon
                        className="w-4 h-4 mt-0.5 flex-shrink-0 theme-text-muted"
                        aria-hidden="true"
                      />
                      <div className="flex-1">
                        <div className="text-sm font-medium mb-1.5 theme-text-primary">
                          {skill.category}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {skill.items.map((item, itemIndex) => (
                            <span
                              key={itemIndex}
                              className="text-xs px-2.5 py-1 rounded-full theme-text-muted"
                              style={{ backgroundColor: "var(--glass-bg)" }}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <p className="text-sm font-light tracking-wide text-center theme-text-muted-dark">
            Always learning, always building
          </p>
        </div>
      </div>
    </main>
  );
}
