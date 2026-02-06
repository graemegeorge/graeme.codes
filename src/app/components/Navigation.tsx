import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Navigation() {
  return (
    <nav
      className="border-b border-theme px-6 md:px-12 py-4 flex items-center justify-between"
      aria-label="Main navigation"
    >
      <Link
        href="/"
        className="group flex items-center gap-2 text-muted hover:text-fg transition-colors duration-150"
        aria-label="Go to homepage"
      >
        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        <span className="section-label group-hover:text-fg transition-colors duration-150">
          Back
        </span>
      </Link>
      <span className="section-label">Graeme George</span>
    </nav>
  );
}
