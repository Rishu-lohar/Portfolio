import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container page-shell">
      <div className="card-surface" style={{ padding: "2rem" }}>
        <span className="eyebrow">Dashboard</span>
        <h1 style={{ marginTop: "0.7rem" }}>Curated sections for your portfolio updates</h1>
        <div className="dashboard-links">
          <NavLink to="skills">Skills</NavLink>
          <NavLink to="certificate">Certificates</NavLink>
          <NavLink to="social">Social</NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;