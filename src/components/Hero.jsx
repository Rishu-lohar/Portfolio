import profileImage from "../assests/profile.jpg";
import SocialLinks from "./SocialLinks";

function Hero() {
  return (
    <section className="section hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">MCA Student at PES University</span>
          <h1>
            Hi, I&apos;m <span>Rishu Lohar</span>
          </h1>
          <p>
            I am a passionate MERN stack learner building practical web applications, improving my backend knowledge, and preparing for internship opportunities.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/Rishu_Lohar_Resume.txt" download>
              Download Resume
            </a>
            <a className="btn btn-outline" href="#projects">
              View Projects
            </a>
            <a className="btn btn-outline" href="#contact">
              Hire Me
            </a>
          </div>
          <SocialLinks />
        </div>

        <div className="hero-media">
          <img src={profileImage} alt="Rishu Lohar" className="profile-image" loading="eager" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
