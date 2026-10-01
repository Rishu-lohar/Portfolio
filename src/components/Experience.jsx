const experience = {
  role: "Full-Stack Developer Intern",
  company: "ElevanceSkills",
  dates: "Jul 2026 – Sep 2026",
  project: "YouTube Clone — Full-Stack Video Streaming Platform",
  responsibilities: [
    "Developed a full-stack YouTube-style video streaming platform with Next.js, React, TypeScript, Node.js, Express.js, and MongoDB.",
    "Implemented authentication, video upload and playback, likes and dislikes, comments, subscriptions, notifications, watch history, and Watch Later.",
    "Built REST APIs and connected frontend components with backend services.",
    "Implemented a real-time Watch Party using Socket.IO and WebRTC; used Firebase Authentication, Mongoose, Git, and GitHub."
  ],
  technologies: [
    "Next.js", "React", "TypeScript", "Node.js", "Express.js", "MongoDB",
    "Firebase Authentication", "Mongoose", "REST APIs", "Socket.IO", "WebRTC", "Git", "GitHub"
  ]
};

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Experience</span>
          <h2>Internship</h2>
          <p>Hands-on full-stack development experience at ElevanceSkills.</p>
        </div>

        <article className="card-surface">
          <div className="section-heading" style={{ marginBottom: "1.25rem" }}>
            <h3>{experience.role} — {experience.company}</h3>
            <p>{experience.dates}</p>
          </div>
          <h4 style={{ color: "var(--text)", marginBottom: "0.75rem" }}>{experience.project}</h4>
          <ul style={{ color: "var(--text-secondary)", paddingLeft: "1.25rem", marginBottom: "1.25rem" }}>
            {experience.responsibilities.map((responsibility) => (
              <li key={responsibility} style={{ marginBottom: "0.45rem" }}>{responsibility}</li>
            ))}
          </ul>
          <div className="tech-stack" aria-label="Internship technologies">
            {experience.technologies.map((technology) => (
              <span key={technology} className="tech-pill">{technology}</span>
            ))}
          </div>
          <div className="project-actions">
            <a
              className="btn btn-outline"
              href="https://www.elevanceskills.com/certificates/6abcdd9ca728b87889f1349c"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Internship Certificate
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Experience;