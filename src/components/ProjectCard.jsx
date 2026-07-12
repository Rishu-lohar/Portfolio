import { useNavigate } from "react-router-dom";

function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <article className="project-card card-surface">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tech-stack">
        {project.tech.map((item) => (
          <span key={item} className="tech-pill">
            {item}
          </span>
        ))}
      </div>
      <div className="project-actions">
        <button type="button" className="btn btn-outline" onClick={() => navigate(`/project/${project.id}`)}>
          View Details
        </button>
        <a className="btn btn-outline" href={project.github || "#"} target="_blank" rel="noreferrer">
          GitHub
        </a>
        {project.live ? (
          <a className="btn btn-primary" href={project.live} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        ) : (
          <button type="button" className="btn btn-outline" disabled>
            Coming Soon
          </button>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;