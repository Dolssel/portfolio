import type { Skill } from "../types";

// ": Skill[]" annotates the array. Now if you add a skill missing a field,
// or misspell "title", TS underlines it in red BEFORE you ever run the app.
export const skills: Skill[] = [
  {
    id: "frontend",
    title: "Front-end",
    description:
      "Building responsive, accessible interfaces with modern HTML, CSS and JavaScript.",
    items: ["HTML5 / CSS3", "JavaScript (ES6+)", "React", "TypeScript"],
  },
  {
    id: "backend",
    title: "Back-end",
    description:
      "Designing and maintaining robust server-side applications and APIs.",
    items: ["C# / .NET", "ASP.NET MVC / Web API", "REST services"],
  },
  {
    id: "tools",
    title: "Tools & practices",
    description:
      "Shipping with confidence using solid tooling and team workflows.",
    items: ["Git / pull requests", "SQL Server", "CI / code review"],
  },
];
