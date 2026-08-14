import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "travel-widgets",
    icon: "✈️",
    name: "Travel booking widgets",
    description:
      "Embeddable JavaScript widgets for flight seat maps, accommodation info and language selection, used across multiple partner sites.",
    tags: ["JavaScript", "CSS", "Widgets"],
  },
  {
    id: "project-two",
    icon: "🧰",
    name: "Atlas",
    description:
      "Short description of another project — what it does, who it's for, and what was interesting about building it.",
    tags: ["C#", ".NET", "API"],
    featured: true
  },
  {
    id: "project-three",
    icon: "💡",
    name: "Project three",
    description:
      "Another placeholder — swap this out with a real project, a link to the repo, or a live demo.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];
