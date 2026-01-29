import Link from "next/link";
import { Home } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 px-8 py-6">
      <Link
        href="/"
        className="group flex items-center gap-2 transition-colors duration-300 theme-text-secondary opacity-80 hover:opacity-100"
      >
        <Home className="w-4 h-4 transition-colors duration-300 theme-accent-hover" />
        <span className="text-sm font-inter">Home</span>
      </Link>
    </nav>
  );
}
