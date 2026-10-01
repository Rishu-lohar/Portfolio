function SocialLinks() {
  const socials = [
    { label: "GitHub", url: "https://github.com/Rishu-lohar" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/rishulohar" },
    { label: "Portfolio", url: "https://rishulohar-portfolio.vercel.app/" }
  ];

  return (
    <div className="social-links">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.label}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
