function SocialLinks() {
  const socials = [
    { label: "GitHub", url: "https://github.com/rishu-lohar" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/rishulohar" },
    { label: "LeetCode", url: "https://leetcode.com/Rishu_Lohar/" },
    { label: "Instagram", url: "https://www.instagram.com/rishulohar_" }
  ];

  return (
    <div className="social-links">
      {socials.map((social) => (
        <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
          {social.label}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;