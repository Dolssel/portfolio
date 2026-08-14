import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import About from "./About";

// A test file describes behavior. Each `it(...)` is one behavior we check.
describe("About", () => {
  it("shows the extra paragraph only after clicking 'Read more'", async () => {
    // ARRANGE — render the component into the fake DOM
    render(<About />);

    // ASSERT (before) — the extra text is NOT there yet.
    // queryByText returns null if not found (getByText would throw).
    expect(screen.queryByText(/rebuilding this/i)).not.toBeInTheDocument();

    // ACT — click the button, the way a real user would find it: by its label.
    await userEvent.click(screen.getByRole("button", { name: /read more/i }));

    // ASSERT (after) — now the extra text IS on the screen.
    expect(screen.getByText(/rebuilding this/i)).toBeInTheDocument();
  });
});
