"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 transition-all duration-300 group"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 transition-colors duration-300 theme-text-muted theme-accent-hover" />
      ) : (
        <Moon className="w-5 h-5 transition-colors duration-300 theme-text-muted theme-accent-hover" />
      )}
    </button>
  );
}
