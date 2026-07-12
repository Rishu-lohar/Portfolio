const skills = [
  { category: "Frontend", items: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "React"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { category: "Database", items: ["MongoDB", "MySQL"] },
  { category: "Programming", items: ["Python", "C"] },
  { category: "Tools & DevOps", items: ["Git", "GitHub", "VS Code", "Postman"] }
];

function Skills() {
  return (
    <div className="skill-grid">
      {skills.map((group) => (
        <div key={group.category} className="skill-category">
          <h3>{group.category}</h3>
          <div className="skill-list">
            {group.items.map((item) => (
              <span key={item} className="skill-badge">{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
