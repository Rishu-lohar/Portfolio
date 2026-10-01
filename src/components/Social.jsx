function Social() {
  const socials = [
    { label: "GitHub", url: "https://github.com/Rishu-lohar" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/rishulohar" },
    { label: "Portfolio", url: "https://rishulohar-portfolio.vercel.app/" }
  ];

  return (
    <div className="dashboard-card">
      <h3>Social Profiles</h3>
      <div className="contact-list">
        {socials.map((s) => (
          <a
            key={s.label}
            className="btn btn-outline"
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Social;
