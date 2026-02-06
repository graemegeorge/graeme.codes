import Link from "next/link";
import { Home } from "lucide-react";

export default function Navigation() {
  return (
    <nav
      className="absolute top-0 left-0 w-full z-20 px-8 py-6"
      aria-label="Main navigation"
    >
      <Link
        href="/"
        className="group flex items-center gap-3 transition-colors duration-300 text-[var(--muted)] hover:text-[var(--accent)]"
        aria-label="Go to homepage"
      >
        <Home
          className="w-4 h-4 transition-colors duration-300"
          aria-hidden="true"
        />
        <span className="text-sm uppercase tracking-[0.08em]">Home</span>
      </Link>
    </nav>
  );
}
