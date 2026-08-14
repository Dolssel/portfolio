/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The react() plugin handles JSX. The `test` block configures Vitest —
// Vitest reads this same file, so tests and app share one config.
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",          // a fake browser DOM for tests to render into
    setupFiles: "./src/test/setup.ts", // runs before every test file
  },
});
