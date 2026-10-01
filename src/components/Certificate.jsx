const certificates = [
  {
    title: "Full-Stack Web Development Internship Certificate",
    issuer: "ElevanceSkills",
    link: "https://www.elevanceskills.com/certificates/6abcdd9ca728b87889f1349c"
  }
];

function Certificate() {
  return (
    <div className="certificate-grid">
      {certificates.map((certificate) => (
        <div key={certificate.title} className="certificate-card card-surface">
          <h3>{certificate.title}</h3>
          <p>{certificate.issuer}</p>
            <div className="meta">
              <span className="meta-pill">{certificate.issuer}</span>
            </div>
            <div className="project-actions">
              <a className="btn btn-outline" href={certificate.link} target="_blank" rel="noopener noreferrer">
                View Internship Certificate
              </a>
            </div>
        </div>
      ))}
    </div>
  );
}

export default Certificate;