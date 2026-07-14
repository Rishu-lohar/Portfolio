function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Get In Touch</span>
          <h2>Let&apos;s Work Together</h2>
          <p>
            Open to internships, collaborations, and interesting projects.
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="card-surface" style={{ display: "flex", flexDirection: "column", gap: "0.6rem", maxWidth: "480px", width: "100%" }}>
            <h3 style={{ color: "var(--text)", marginBottom: "0.5rem" }}>Contact Details</h3>

            <div className="contact-detail">
              <span>
                <strong>Email</strong>
                <a href="mailto:rishulohar266@gmail.com" style={{ color: "var(--accent)" }}>
                  rishulohar266@gmail.com
                </a>
              </span>
            </div>
            <div className="contact-detail">
              <span>
                <strong>Phone</strong>
                <a href="tel:+918905340433" style={{ color: "var(--text-secondary)" }}>
                  +91 89053 40433
                </a>
              </span>
            </div>
            <div className="contact-detail">
              <span>
                <strong>Location</strong>
                Bengaluru, India
              </span>
            </div>

            <div className="contact-list" style={{ marginTop: "0.8rem" }}>
              <a className="btn btn-outline" style={{ fontSize: "0.83rem" }} href="https://github.com/Rishu-lohar" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="btn btn-outline" style={{ fontSize: "0.83rem" }} href="https://www.linkedin.com/in/rishulohar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="btn btn-outline" style={{ fontSize: "0.83rem" }} href="https://leetcode.com/u/Rishu_lohar/" target="_blank" rel="noopener noreferrer">LeetCode</a>
              <a className="btn btn-outline" style={{ fontSize: "0.83rem" }} href="https://www.instagram.com/rishulohar_/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
