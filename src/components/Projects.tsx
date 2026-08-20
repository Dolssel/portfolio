import { useState } from "react";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  // One object holding likes for every project, keyed by project id.
  const [likes, setLikes] = useState<Record<string, number>>({});

  //Event handler: a child calls this to request "+1 for this id"
  const handleLike = (id: string) => {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  };

  // DERIVED value -- computed from state, never stored separately.
  const total = Object.values(likes).reduce((sum, n) => sum + n, 0);
  // Featured projects first, so the big bento cell lands top-left.
  const ordered = [...projects].sort(
    (a, b) => Number(b.featured ?? false) - Number(a.featured ?? false)
  );

  return (
    <Section id="projects" number="03." title="Projects">
      <p className="projects-total">
        ♥ <span className="projects-total-count">{total}</span> total{" "}
        {total === 1 ? "like" : "likes"}
      </p>
      <div className="projects-grid">
        {ordered.map((project) => (
          <ProjectCard 
            key={project.id}
            project={project}
            likes={likes[project.id] ?? 0} //data flows DOWN
            onLike={() => handleLike(project.id)} //event flows UP  
          />
        ))}
      </div>
    </Section>
  );
}
