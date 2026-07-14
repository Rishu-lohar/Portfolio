function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>
          © 2026 <span style={{ color: "var(--accent)" }}>Rishu Lohar</span> — Built with React &amp; Vite
        </p>
        <button
          type="button"
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ Back to Top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
