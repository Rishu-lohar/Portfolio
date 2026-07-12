/* Profile image is a placeholder until a real photo is uploaded */
function ProfilePlaceholder() {
  return (
    <div
      style={{
        width: "min(300px, 70vw)",
        aspectRatio: "1",
        borderRadius: "50%",
        border: "3px solid rgba(124,252,0,0.4)",
        boxShadow: "0 0 40px rgba(124,252,0,0.12), 0 20px 60px rgba(0,0,0,0.5)",
        background: "linear-gradient(135deg, #1a1a1a 0%, #252525 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.4rem",
        flexShrink: 0
      }}
    >
      <span style={{ fontSize: "clamp(3rem, 8vw, 5rem)", fontWeight: 800, color: "#7CFC00", lineHeight: 1 }}>
        RL
      </span>
      <span style={{ fontSize: "0.72rem", color: "#666", letterSpacing: "0.12em", textTransform: "uppercase" }}>
        Add Photo
      </span>
    </div>
  );
}

function Hero() {
  return (
    <section className="section hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="hero-eyebrow">MCA Student · PES University</span>
          <h1>
            Hi, I&apos;m{" "}
            <span>Rishu Lohar</span>
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
            <a className="btn btn-outline" href="/Rishu_Lohar_Resume.txt" download>
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-media">
          <ProfilePlaceholder />
        </div>
      </div>
    </section>
  );
}

export default Hero;
