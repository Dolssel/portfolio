// Runs before every test file (configured in vite.config.ts).

// Adds friendly matchers like `toBeInTheDocument()` to `expect`.
// The "/vitest" entry wires the matchers into Vitest's expect specifically.
import "@testing-library/jest-dom/vitest";

// jsdom (the fake browser tests run in) doesn't implement IntersectionObserver,
// which our useReveal hook uses. Give it a no-op stub so components can render.
class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.IntersectionObserver =
  IntersectionObserverStub as unknown as typeof IntersectionObserver;
