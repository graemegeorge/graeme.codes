import Link from "next/link";
import { Home } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 px-8 py-6">
      <Link
        href="/"
        className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
      >
        <Home className="w-4 h-4 group-hover:text-[#e8a87c] transition-colors duration-300" />
        <span className="text-sm font-inter">Home</span>
      </Link>
    </nav>
  );
}
