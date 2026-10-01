const skills = [
  {
    category: "Frontend",
    items: ["HTML/CSS", "JavaScript", "React.js", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Mongoose", "PostgreSQL"]
  },
  {
    category: "Cloud",
    items: [
      "AWS: EC2", "EBS", "AMI", "ELB", "Auto Scaling", "S3", "RDS", "DynamoDB",
      "Lambda", "Route 53", "CloudFront", "VPC", "ECS", "EKS", "IAM",
      "CloudFormation", "Azure"
    ]
  },
  {
    category: "DevOps",
    items: [
      "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "GitLab CI/CD",
      "Azure DevOps", "Terraform", "Ansible", "Azure Bicep", "CI/CD"
    ]
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Linux", "NPM", "Jupyter Notebook"]
  }
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
