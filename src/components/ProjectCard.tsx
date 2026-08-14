import { Link } from "react-router-dom";
import type { Project } from "../types";

// The prop type says: this component MUST receive a "project" that matches
// the Project shape. Pass the wrong thing and TS flags it at the call site.
interface ProjectCardProps {
  project: Project;
  likes: number;
  onLike: () => void;
}

export default function ProjectCard({ project, likes, onLike }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-top">
        <span className="project-icon">{project.icon}</span>
      </div>
      <h3 className="project-name">{project.name}</h3>
      {project.featured && <span className="project-tags"><li>★ Featured</li></span>}
      <p className="project-desc">{project.description}</p>
      <ul className="project-tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <button className="btn btn-outline" onClick={onLike}>
        ♥ {likes}
      </button>
      <Link className="btn btn-primary" to={`/projects/${project.id}`}>
        View details →
      </Link>
    </article>
  );
}
