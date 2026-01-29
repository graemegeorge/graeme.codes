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
    setMounted(true);
    
    // Priority: localStorage > system preference > dark (default)
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    
    if (storedTheme && (storedTheme === "light" || storedTheme === "dark")) {
      // User has explicitly set a preference
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    } else {
      // Favour system preference, default to dark
      try {
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        // Respect system preference (favouring user's system settings)
        // Default to dark mode if system preference cannot be determined
        const initialTheme: Theme = systemPrefersDark ? "dark" : "light";
        setTheme(initialTheme);
        document.documentElement.setAttribute("data-theme", initialTheme);
      } catch {
        // Fallback to dark if matchMedia is not available
        setTheme("dark");
        document.documentElement.setAttribute("data-theme", "dark");
      }
    }
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
