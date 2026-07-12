function SocialLinks() {
  const socials = [
    { label: "GitHub", url: "https://github.com/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/" },
    { label: "LeetCode", url: "https://leetcode.com/" },
    { label: "Instagram", url: "https://www.instagram.com/" }
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