import { useState, useEffect } from "react";

// <T> = works for any value type (string, boolean, object…).
// Mirrors useState's API: returns [value, setValue].
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    // Lazy initializer: this function runs ONCE, on first render, to compute
    // the starting value — here, read from localStorage if something's saved.
    const stored = localStorage.getItem(key);
    return stored !== null ? (JSON.parse(stored) as T) : initialValue;
  });

  // Whenever the value (or key) changes, save it back to localStorage.
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}