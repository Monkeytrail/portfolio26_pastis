'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

type Theme = 'dark' | 'light';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = localStorage.getItem('theme') as Theme | null;
    const preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    return stored || preferred;
  });

  const pathname = usePathname();

  // Re-apply data-theme after every navigation.
  // Next.js RSC reconciliation can strip attributes added dynamically to <html>,
  // so we need to re-set it after the DOM is patched.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme, pathname]);

  // Keep React state and localStorage in sync when the pastis-theme-toggle
  // web component fires its own toggle (it sets data-theme but skips localStorage).
  useEffect(() => {
    const handleThemeChange = (e: Event) => {
      const newTheme = (e as CustomEvent<{ theme: Theme }>).detail?.theme;
      if (newTheme) {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
      }
    };
    document.addEventListener('pastis-theme-change', handleThemeChange);
    return () => document.removeEventListener('pastis-theme-change', handleThemeChange);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
