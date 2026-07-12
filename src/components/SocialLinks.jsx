function SocialLinks() {
  const socials = [
    { label: "GitHub", url: "https://github.com/rishu-lohar" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/rishulohar" },
    { label: "LeetCode", url: "https://leetcode.com/u/Rishu_Lohar/" },
    { label: "Instagram", url: "https://www.instagram.com/rishulohar_?igsh=amxrdWE1bG41OGM4" }
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