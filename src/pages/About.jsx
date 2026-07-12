const highlights = [
  "MCA Student — PES University",
  "MERN Stack Developer",
  "Backend & API Learning",
  "Open to Internships"
];

const skillBadges = [
  "JavaScript", "React", "Node.js", "Express.js",
  "MongoDB", "MySQL", "Python", "C",
  "Git", "GitHub", "VS Code", "Postman"
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
              I&apos;m currently pursuing my MCA at PES University and building a strong
              foundation in modern web technologies. My focus is on the MERN stack, RESTful APIs,
              and creating polished web experiences that feel as good as they look.
            </p>
            <p style={{ marginTop: "0.8rem" }}>
              I&apos;m actively looking for internship opportunities where I can contribute,
              collaborate, and grow alongside experienced engineers.
            </p>
            <div className="badge-list">
              {highlights.map((item) => (
                <span key={item} className="skill-badge" style={{ color: "#7CFC00", borderColor: "rgba(124,252,0,0.2)" }}>
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
        </div>
      </div>
    </section>
  );
}

export default About;
