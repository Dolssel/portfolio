import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "../context/ThemeContext";
import Navbar from "./Navbar";

describe("Navbar theme toggle", () => {
  it("swaps the icon when toggled", async () => {
    const user = userEvent.setup();

    // Navbar calls useTheme(), so it MUST be rendered inside its provider —
    // otherwise the guard we wrote throws "must be used within a ThemeProvider".
    render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    );

    // Default theme is dark → the button offers the sun (switch to light).
    const toggle = screen.getByRole("button", { name: /toggle light/i });
    expect(toggle).toHaveTextContent("☀️");

    await user.click(toggle);
    expect(toggle).toHaveTextContent("🌙"); // now offers the moon
  });
});
