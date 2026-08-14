import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();               // reads the ":id" from the URL
  const navigate = useNavigate();           // lets us go back programmatically
  const project = projects.find((p) => p.id === id);

  // The id might not match any project (someone typed a bad URL).
  if (!project) {
    return (
      <main className="section container">
        <h2 className="section-title">Project not found</h2>
        <p>No project matches “{id}”.</p>
        <Link className="btn btn-primary" to="/">Back home</Link>
      </main>
    );
  }

  return (
    <main className="section container">
      <button className="btn btn-outline" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <h2 className="section-title" style={{ marginTop: "1.5rem" }}>
        {project.icon} {project.name}
      </h2>
      <p>{project.description}</p>
      <ul className="project-tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </main>
  );
}