"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Priority: localStorage > system preference > dark (default)
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    let resolvedTheme: Theme;

    if (storedTheme && (storedTheme === "light" || storedTheme === "dark")) {
      resolvedTheme = storedTheme;
    } else {
      try {
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches;
        resolvedTheme = systemPrefersDark ? "dark" : "light";
      } catch {
        resolvedTheme = "dark";
      }
    }

    document.documentElement.setAttribute("data-theme", resolvedTheme);

    // Defer setState to avoid synchronous updates inside the effect (React 19)
    queueMicrotask(() => {
      setMounted(true);
      setTheme(resolvedTheme);
    });
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Always provide context, even when not mounted (to prevent errors)
  // Theme will be set correctly once mounted
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
