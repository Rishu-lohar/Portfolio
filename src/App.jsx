import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Dashboard from "./pages/Dashboard";
import Skills from "./components/Skills";
import Certificate from "./components/Certificate";
import Social from "./components/Social";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="skills" element={<Skills />} />
            <Route path="certificate" element={<Certificate />} />
            <Route path="social" element={<Social />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
