import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return (
      <div className="container page-shell">
        <div className="card-surface" style={{ padding: "2rem" }}>
          <h2>Project not found</h2>
          <p>Choose a project from the portfolio section to continue.</p>
          <Link className="btn btn-primary" to="/projects" style={{ marginTop: "1rem" }}>
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container page-shell">
      <div className="card-surface" style={{ padding: "2rem" }}>
        <span className="eyebrow">Project Highlight</span>
        <h1 style={{ marginTop: "0.7rem" }}>{project.title}</h1>
        <p style={{ color: "#b7c2ce", marginTop: "0.8rem" }}>{project.description}</p>
        <div className="tech-stack" style={{ marginTop: "1rem" }}>
          {project.tech.map((item) => (
            <span key={item} className="tech-pill">
              {item}
            </span>
          ))}
        </div>
        <div className="project-actions" style={{ marginTop: "1.2rem" }}>
          <a className="btn btn-outline" href={project.github || "#"} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn btn-primary" href={project.live || "#"} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;