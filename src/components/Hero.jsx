import profileImage from "../assests/profile.jpg";

function Hero() {
  return (
    <section className="section hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="hero-eyebrow">MCA · Cloud &amp; DevOps · PES University</span>
          <h1 style={{ color: "#ffffff" }}>
            <span style={{ color: "var(--text)" }}>Hi, I&apos;m </span>
            <span style={{ color: "var(--accent)" }}>Rishu Lohar</span>
          </h1>
          <p className="hero-desc">
            MCA student specializing in Cloud &amp; DevOps, with hands-on full-stack
            development experience. Interested in cloud engineering, CI/CD, and
            Infrastructure as Code.
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
