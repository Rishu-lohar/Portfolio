function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>
          © 2026 <span style={{ color: "#8ff5b8" }}>Rishu Lohar</span> — Built with React, Vite, and care.
        </p>
        <button type="button" className="back-to-top" onClick={scrollToTop}>
          ↑ Back to Top
        </button>
      </div>
    </footer>
  );
}

export default Footer;