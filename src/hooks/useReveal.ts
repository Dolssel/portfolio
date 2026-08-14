import { useEffect, useRef, useState } from "react";

// A GENERIC custom hook — <T> works just like a C# generic type parameter.
// It defaults to HTMLElement, but a caller can say useReveal<HTMLDivElement>()
// to get a precisely-typed ref.
//
// Returns a tuple [ref, visible]. "as const" at the end tells TS to treat the
// return as a fixed 2-element tuple (ref, then boolean) instead of a loose
// array — that's what lets you destructure it with correct types.
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return; // TS now knows el is non-null below this line

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible] as const;
}
