import profileImage from "../assests/profile.jpg";

function Hero() {
  return (
    <section className="section hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="hero-eyebrow">MCA Student · PES University</span>
          <h1 style={{ color: "#ffffff" }}>
            <span style={{ color: "var(--text)" }}>Hi, I&apos;m </span>
            <span style={{ color: "var(--accent)" }}>Rishu Lohar</span>
          </h1>
          <p className="hero-desc">
            A passionate MERN stack developer building practical web applications.
            I turn ideas into clean, functional digital experiences &mdash; and I&apos;m
            ready for my first internship.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Let&apos;s get started &rsaquo;
            </a>
            <a className="btn btn-outline" href="#projects">
              Recent Work
            </a>
            <a className="btn btn-outline" href="/Rishu_Lohar_Resume.pdf" download>
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-media">
          <img
            src={profileImage}
            alt="Rishu Lohar"
            className="profile-image"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
