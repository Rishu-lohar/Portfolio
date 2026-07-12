const certificates = [
  { title: "Web Development Fundamentals", issuer: "Open Learning", year: "2025" },
  { title: "React & Frontend Essentials", issuer: "Self-paced study", year: "2025" },
  { title: "Backend Development Basics", issuer: "Hands-on learning", year: "2025" }
];

function Certificate() {
  return (
    <div className="certificate-grid">
      {certificates.map((certificate) => (
        <div key={certificate.title} className="certificate-card card-surface">
          <h3>{certificate.title}</h3>
          <p>{certificate.issuer}</p>
          <div className="meta">
            <span className="meta-pill">{certificate.year}</span>
            <span className="meta-pill">Verified learning</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Certificate;