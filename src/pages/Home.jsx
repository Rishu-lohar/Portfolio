import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Certificate from "../components/Certificate";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const techStack = [
  "React", "Node.js", "MongoDB", "Express.js",
  "JavaScript", "Python", "MySQL", "Git", "GitHub", "Postman"
];

function Home() {
  return (
    <div>
      <Hero />

      {/* Worked-with / tech band */}
      <div className="worked-with-section">
        <div className="container">
          <p className="worked-with-label">Technologies I work with</p>
          <div className="tech-band">
            {techStack.map((t) => (
              <span key={t} className="tech-brand">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <About />

      <section className="section" id="skills">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Skills</span>
            <h2>My Technical Toolkit</h2>
            <p>
              Focused on the MERN stack, with a solid foundation in programming
              fundamentals and essential developer tools.
            </p>
          </div>
          <Skills />
        </div>
      </section>

      <Projects />

      <section className="section" id="certificates">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Certificates</span>
            <h2>Learning Milestones</h2>
            <p>Certifications that mark consistent growth in my development journey.</p>
          </div>
          <Certificate />
        </div>
      </section>

      <Contact />
    </div>
  );
}

export default Home;
