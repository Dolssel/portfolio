import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="section container project-detail">
        <h1 className="detail-title">Project not found</h1>
        <p className="project-detail-desc">No project matches “{id}”.</p>
        <Link className="btn btn-primary" to="/">
          Back home
        </Link>
      </main>
    );
  }

  return (
    <main className="section container project-detail">
      <button className="detail-back" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="detail-header">
        <span className="detail-icon">{project.icon}</span>
        {project.featured && <span className="project-featured">★ Featured</span>}
      </div>

      <h1 className="detail-title">{project.name}</h1>

      <ul className="project-tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <p className="project-detail-desc">{project.description}</p>
    </main>
  );
}