import { Container, Row, Col } from "react-bootstrap";

const highlights = [
  "MCA Student",
  "Passionate MERN Developer",
  "Learning Backend",
  "Learning Cloud",
  "Looking for Internship Opportunities"
];

const skillBadges = ["JavaScript", "React", "Node.js", "Express.js", "MongoDB", "MySQL", "Python", "C", "Git", "GitHub", "VS Code", "Postman"];

function About() {
  return (
    <section className="section" id="about">
      <Container>
        <div className="section-heading">
          <span className="eyebrow">About</span>
          <h2>About Me</h2>
          <p>I am an MCA student who enjoys building web applications and learning modern development practices.</p>
        </div>

        <div className="about-grid">
          <div className="about-card card-surface">
            <p>
              I am currently pursuing my MCA at PES University and developing a strong foundation in modern web technologies. My focus is on the MERN stack, backend systems, and creating portfolios that feel as polished as the products they represent.
            </p>
            <div className="badge-list">
              {highlights.map((item) => (
                <span key={item} className="skill-badge">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="about-card card-surface">
            <h3>Skills Snapshot</h3>
            <div className="badge-list">
              {skillBadges.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;