import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "./Contact";

describe("Contact form", () => {
  it("shows a personalised thank-you after filling and submitting", async () => {
    // userEvent.setup() is the recommended way — make a `user`, then act on it.
    const user = userEvent.setup();
    render(<Contact />);

    // Find inputs by their LABEL text — how a user identifies a field.
    await user.type(screen.getByLabelText(/name/i), "Dalison");
    await user.type(screen.getByLabelText(/email/i), "d@example.com");
    await user.type(screen.getByLabelText(/message/i), "Hello there!");

    // Submit.
    await user.click(screen.getByRole("button", { name: /send/i }));

    // The form is replaced by the thank-you, which includes the typed name.
    expect(screen.getByText(/thanks, dalison/i)).toBeInTheDocument();
    // And the form itself is gone.
    expect(screen.queryByLabelText(/message/i)).not.toBeInTheDocument();
  });
});
