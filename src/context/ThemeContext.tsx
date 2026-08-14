import { createContext, useContext, useEffect } from "react";
import type { ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type Theme = "light" | "dark";

// The shape of what the context broadcasts.
interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

// The channel itself. Default is `undefined` — we'll guard in the hook so
// that using it outside a provider fails loudly instead of silently.
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// The Provider: owns the theme state and transmits it to all children.
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "dark");

  // Side effect: reflect the theme onto <html> so CSS can respond.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook: the clean way for components to consume the context.
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}