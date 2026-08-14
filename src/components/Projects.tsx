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

  return (
    <Section id="projects" number="03." title="Projects">
      <p className="contact-text">❤️ {total} total likes</p>
      <div className="projects-grid">
        {projects.map((project) => (
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
