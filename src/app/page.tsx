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
    href: "#blog",
    icon: FileText,
  },
  {
    label: "Work",
    href: "#work",
    icon: Briefcase,
  },
  {
    label: "Contact",
    href: "mailto:graemelgeorge@gmail.com",
    icon: Mail,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-[#1a1a2e] rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-[#2d1f3d] rounded-full blur-[120px] opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-[#3d2a2a] rounded-full blur-[100px] opacity-30" />

      {/* <header className="absolute top-0 left-0 w-full h-16 flex items-center justify-between px-6">
        <div className="text-2xl text-white font-inter">graeme.codes</div>
      </header> */}

      <div className="relative z-10 min-h-screen flex items-center justify-center flex-col flex-1 px-8">
        <div className="flex flex-col items-center justify-center py-12 gap-2">
          <div className="text-4xl text-white font-inter">Graeme George</div>
          <div className="text-xl text-zinc-400 font-inter">
            Senior Frontend Engineer
          </div>
        </div>

        <div className="w-full max-w-md text-center">
          <nav className="space-y-3 mb-8">
            {links.map(({ label, icon: Icon, ...props }) => (
              <a
                key={label}
                {...props}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full px-5 py-4 rounded-2xl bg-white/3 border border-white/6 backdrop-blur-sm hover:bg-white/6 hover:border-white/12 transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-[#6a6a7a] group-hover:text-[#e8a87c] transition-colors duration-300" />
                  <span className="text-[#e4e4e8] font-medium">{label}</span>
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
          </nav>

          {/* <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <div className="flex items-center justify-center gap-8">
            {secondaryLinks.map(({ label, icon: Icon, ...props }) => (
              <a
                className="group flex flex-col items-center gap-2"
                key={label}
                {...props}
              >
                <div className="p-3.5 rounded-xl bg-white/3 border border-white/6 group-hover:bg-white/6 group-hover:border-white/12 transition-all duration-300">
                  <Icon className="w-5 h-5 text-[#6a6a7a] group-hover:text-[#e8a87c] transition-colors duration-300" />
                </div>
                <span className="text-sm text-[#6a6a7a] group-hover:text-[#a0a0b0] transition-colors duration-300">
                  {label}
                </span>
              </a>
            ))}
          </div> */}

          <p className="text-[#4a4a5a] text-sm font-light tracking-wide py-12">
            Building exceptional digital experiences
          </p>
        </div>
      </div>
    </main>
  );
}
