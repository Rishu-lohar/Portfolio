function Social() {
  const socials = [
    { label: "GitHub", url: "https://github.com/Rishu-lohar" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/rishulohar" },
    { label: "LeetCode", url: "https://leetcode.com/u/Rishu_lohar/" },
    { label: "Instagram", url: "https://www.instagram.com/rishulohar_/" }
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
