import Navigation from "../components/Navigation";
import { Mail, Linkedin, Github, MessageSquare } from "lucide-react";

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
];

export default function Contact() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-[#1a1a2e] rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-[#2d1f3d] rounded-full blur-[120px] opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-[#3d2a2a] rounded-full blur-[100px] opacity-30" />

      <Navigation />

      <div className="relative z-10 min-h-screen flex items-center justify-center flex-col flex-1 px-8 py-24">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center justify-center mb-12 gap-2">
            <div className="text-4xl text-white font-inter mb-2">Contact</div>
            <div className="text-xl text-zinc-400 font-inter">
              Let's work together
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {contactMethods.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full px-5 py-4 rounded-2xl bg-white/3 border border-white/6 backdrop-blur-sm hover:bg-white/6 hover:border-white/12 transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-[#6a6a7a] group-hover:text-[#e8a87c] transition-colors duration-300" />
                  <div className="flex flex-col items-start">
                    <span className="text-[#e4e4e8] font-medium">{label}</span>
                    <span className="text-xs text-[#6a6a7a]">{value}</span>
                  </div>
                </span>
                <svg
                  className="w-4 h-4 text-[#4a4a5a] group-hover:text-[#e8a87c] group-hover:translate-x-1 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            ))}
          </div>

          <div className="px-6 py-5 rounded-2xl bg-white/3 border border-white/6 backdrop-blur-sm mb-8">
            <div className="flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-[#6a6a7a] mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-sm text-white font-inter mb-2">Get in Touch</h3>
                <p className="text-[#6a6a7a] text-xs leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities 
                  to be part of your vision. Feel free to reach out through any of the channels above.
                </p>
              </div>
            </div>
          </div>

          <p className="text-[#4a4a5a] text-sm font-light tracking-wide text-center">
            Looking forward to hearing from you
          </p>
        </div>
      </div>
    </main>
  );
}
