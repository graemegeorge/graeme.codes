import Navigation from "../components/Navigation";
import { User, Code, Palette, Zap } from "lucide-react";

const skills = [
  { category: "Frontend", icon: Code, items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Design", icon: Palette, items: ["UI/UX Design", "Design Systems", "Figma", "Prototyping"] },
  { category: "Performance", icon: Zap, items: ["Optimization", "Accessibility", "SEO", "Testing"] },
];

export default function About() {
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
            <div className="text-4xl text-white font-inter mb-2">About</div>
            <div className="text-xl text-zinc-400 font-inter">
              Senior Frontend Engineer
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <div className="px-6 py-5 rounded-2xl bg-white/3 border border-white/6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/6">
                  <User className="w-5 h-5 text-[#6a6a7a]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg text-white font-inter mb-2">Who I Am</h3>
                  <p className="text-[#6a6a7a] text-sm leading-relaxed">
                    I'm a Senior Frontend Engineer passionate about creating exceptional digital experiences. 
                    With a focus on modern web technologies, I specialize in building scalable, performant 
                    applications that delight users and solve real-world problems.
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 py-5 rounded-2xl bg-white/3 border border-white/6 backdrop-blur-sm">
              <h3 className="text-lg text-white font-inter mb-4">Skills & Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <Icon className="w-4 h-4 text-[#6a6a7a] mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="text-sm text-white font-medium mb-1.5">{skill.category}</div>
                        <div className="flex flex-wrap gap-2">
                          {skill.items.map((item, itemIndex) => (
                            <span
                              key={itemIndex}
                              className="text-xs text-[#6a6a7a] bg-white/5 px-2.5 py-1 rounded-full"
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

          <p className="text-[#4a4a5a] text-sm font-light tracking-wide text-center">
            Always learning, always building
          </p>
        </div>
      </div>
    </main>
  );
}
