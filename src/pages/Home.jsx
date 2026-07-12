import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Certificate from "../components/Certificate";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <section className="section" id="skills">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Skills</span>
            <h2>Focused on frontend craft, backend curiosity, and practical delivery.</h2>
            <p>My learning path currently centers on the MERN stack, strong UI principles, and a deeper understanding of systems and APIs.</p>
          </div>
          <Skills />
        </div>
      </section>
      <Projects />
      <section className="section" id="certificates">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Certificates</span>
            <h2>Learning milestones that reflect consistent growth.</h2>
            <p>I am building a portfolio rooted in practice, curiosity, and the discipline to keep improving.</p>
          </div>
          <Certificate />
        </div>
      </section>
      <Contact />
    </div>
  );
}

export default Home;