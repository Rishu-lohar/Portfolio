import { useState } from "react";
import { toast } from "react-toastify";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = form;

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });

      if (!res.ok) throw new Error("Server error");
      const data = await res.text();
      toast.success(data || "Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Get In Touch</span>
          <h2>Let&apos;s Work Together</h2>
          <p>
            Open to internships, collaborations, and interesting projects.
            Drop me a message and I&apos;ll reply within 24 hours.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info panel */}
          <div className="card-surface" style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            <h3 style={{ color: "#f0f0f0", marginBottom: "0.5rem" }}>Contact Details</h3>

            <div className="contact-detail">
              <span>
                <strong>Email</strong>
                <a href="mailto:rishulohar266@gmail.com" style={{ color: "#7CFC00" }}>
                  rishulohar266@gmail.com
                </a>
              </span>
            </div>
            <div className="contact-detail">
              <span>
                <strong>Phone</strong>
                <a href="tel:+918905340433" style={{ color: "#c8c8c8" }}>
                  +91 89053 40433
                </a>
              </span>
            </div>
            <div className="contact-detail">
              <span>
                <strong>Location</strong>
                Bengaluru, India
              </span>
            </div>

            <div className="contact-list" style={{ marginTop: "0.8rem" }}>
              <a className="btn btn-outline" style={{ fontSize: "0.83rem" }} href="https://github.com/rishulohar" target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn btn-outline" style={{ fontSize: "0.83rem" }} href="https://www.linkedin.com/in/rishulohar" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn btn-outline" style={{ fontSize: "0.83rem" }} href="https://leetcode.com/rishulohar" target="_blank" rel="noreferrer">LeetCode</a>
              <a className="btn btn-outline" style={{ fontSize: "0.83rem" }} href="https://www.instagram.com/rishulohar" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>

          {/* Form */}
          <div className="card-surface">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  className="form-control"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  autoComplete="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  className="form-control"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or project…"
                />
              </div>
              <button type="submit" className="btn btn-primary" disabled={sending}>
                {sending ? "Sending…" : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
