import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";

describe("ProjectDetail", () => {
  it("shows the project named by the URL", () => {
    // ProjectDetail reads the :id from the URL, so it needs a router.
    // MemoryRouter is a fake router for tests: we set the starting URL.
    render(
      <MemoryRouter initialEntries={["/projects/project-two"]}>
        <Routes>
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </MemoryRouter>
    );

    // project-two is "Atlas" in the data — it should render.
    expect(screen.getByText(/atlas/i)).toBeInTheDocument();
  });

  it("shows a not-found message for an unknown id", () => {
    render(
      <MemoryRouter initialEntries={["/projects/does-not-exist"]}>
        <Routes>
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });
});
