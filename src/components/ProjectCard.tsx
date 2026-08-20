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
    <article className={`project-card${project.featured ? " featured" : ""}`}>
      <div className="project-top">
        <span className="project-icon">{project.icon}</span>
        {project.featured && <span className="project-featured">★ Featured</span>}
      </div>
      <h3 className="project-name">{project.name}</h3>
      <p className="project-desc">{project.description}</p>
      <ul className="project-tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="project-actions">
        <button
          className={`like-button${likes > 0 ? " liked" : ""}`}
          onClick={onLike}
          aria-label="Like this project"
        >
          <span className="like-heart">♥</span>
          {likes > 0 && <span className="like-count">{likes}</span>}
        </button>
        <Link className="btn btn-primary" to={`/projects/${project.id}`}>
          View details →
        </Link>
      </div>
    </article>
  );
}
