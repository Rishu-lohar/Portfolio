import { useState } from "react";
import { toast } from "react-toastify";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill all the fields.");
      return;
    }

    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });

      const data = await res.text();
      toast.success(data || "Message sent successfully.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Contact</span>
          <h2>Contact Me</h2>
          <p>Feel free to reach out for internships, projects, or collaboration.</p>
        </div>

        <div className="contact-grid">
          <div className="card-surface contact-card">
            <p><strong>Email:</strong> rishulohar@example.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Location:</strong> Bengaluru, India</p>
            <div className="contact-list">
              <a className="btn btn-outline" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn btn-outline" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn btn-outline" href="https://leetcode.com/" target="_blank" rel="noreferrer">LeetCode</a>
              <a className="btn btn-outline" href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>

          <div className="card-surface contact-card">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" className="form-control" type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" className="form-control" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" className="form-control" rows="5" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Write your message" />
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
