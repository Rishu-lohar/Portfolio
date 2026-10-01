import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Recent Work</span>
          <h2>Projects</h2>
          <p>
            Full-stack applications built with modern web technologies, backend
            services, and real-time features.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
