const highlights = [
  "MCA 2027 — PES University",
  "Cloud & DevOps specialization",
  "Full-stack development",
  "CI/CD & Infrastructure as Code"
];

const skillBadges = [
  "React.js", "Next.js", "TypeScript", "Node.js",
  "Express.js", "MongoDB", "AWS", "Docker",
  "Kubernetes", "Terraform", "Azure"
];

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">About</span>
          <h2>Who I Am</h2>
          <p>
            A developer who believes in learning by building — and building things that matter.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card card-surface">
            <p>
              I&apos;m pursuing a Master of Computer Applications at PES University with a
              Cloud &amp; DevOps specialization. My experience includes building full-stack
              applications with React, Next.js, TypeScript, Node.js, Express.js, and MongoDB.
            </p>
            <p style={{ marginTop: "0.8rem" }}>
              I&apos;m focused on cloud engineering, DevOps, CI/CD, and Infrastructure as
              Code, alongside developing reliable APIs and responsive web experiences.
            </p>
            <div className="badge-list">
              {highlights.map((item) => (
                <span key={item} className="skill-badge" style={{ color: "var(--accent)", borderColor: "var(--accent-border)" }}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="about-card card-surface">
            <h3>Skills at a Glance</h3>
            <div className="badge-list">
              {skillBadges.map((skill) => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>

          <div className="about-card card-surface">
            <h3>Education</h3>
            <p>
              <strong>Master of Computer Applications — Cloud &amp; DevOps Specialization</strong>
              <br />
              PES University, Bengaluru · Batch of 2027
            </p>
            <p style={{ marginTop: "0.8rem" }}>
              <strong>Bachelor of Science — Computer Science &amp; Technology</strong>
              <br />
              Govt. Nirbhay Singh Patel Science College, Indore
              <br />
              Affiliated to Devi Ahilya Vishwavidyalaya (DAVV), Indore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
