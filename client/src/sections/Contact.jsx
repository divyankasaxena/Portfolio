import { useState } from "react";
import { profile } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";
import Magnetic from "../components/Magnetic";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/contact";

export default function Contact() {
  const [headRef, headIn] = useReveal();
  const [copyLabel, setCopyLabel] = useState("Copy");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email).then(() => {
      setCopyLabel("Copied ✓");
      setTimeout(() => setCopyLabel("Copy"), 1500);
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "sending", msg: "" });
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus({ state: "success", msg: "Message sent — I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        state: "error",
        msg: err.message || "Could not send message. Make sure the backend server is running.",
      });
    }
  };

  return (
    <section id="contact" style={{ background: "var(--bg-elev)", borderTop: "1px solid var(--line)" }}>
      <div className="wrap">
        <div className={`reveal-up ${headIn ? "in" : ""}`} ref={headRef}>
          <span className="eyebrow-sm">07 — Get in touch</span>
          <div className="section-head">
            <h2>Let's build something.</h2>
            <p>
              Every meaningful collaboration begins with a conversation — whether it's an opportunity, an idea,
              or just a hello.
            </p>
          </div>
        </div>
        <div className="contact-grid">
          <div className="reveal-up in">
            <p style={{ color: "var(--text-dim)", fontWeight: 300, maxWidth: "420px" }}>
              Open to internship and full-time opportunities starting 2027 — and always glad to talk about AI
              products, frontend craft, or hackathons.
            </p>
            <div className="avail">
              <span className="dot" /> Available for new opportunities
            </div>
            <div className="contact-list">
              <div className="contact-row">
                <span>Email</span>
                <span style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <span className="mono" style={{ fontSize: "13px" }}>
                    {profile.email}
                  </span>
                  <button className="copybtn" onClick={copyEmail}>
                    {copyLabel}
                  </button>
                </span>
              </div>
              <div className="contact-row">
                <span>Phone</span>
                <span className="mono" style={{ fontSize: "13px" }}>
                  {profile.phone}
                </span>
              </div>
              <div className="contact-row">
                <span>LinkedIn</span>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }}>
                  linkedin.com/in/divyankasaxena ↗
                </a>
              </div>
              <div className="contact-row">
                <span>GitHub</span>
                <a href={profile.github} target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }}>
                  github.com/divyankasaxena ↗
                </a>
              </div>
              <div className="contact-row">
                <span>Location</span>
                <span>{profile.location}</span>
              </div>
            </div>
          </div>
          <form className="contact-form reveal-up in" onSubmit={onSubmit}>
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="field">
              <label>Message</label>
              <textarea
                rows={5}
                required
                placeholder="Tell me about the opportunity..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <Magnetic
              as="button"
              type="submit"
              className="btn btn-primary"
              style={{ alignSelf: "flex-start", border: "none" }}
              disabled={status.state === "sending"}
            >
              {status.state === "sending" ? "Sending..." : "Send message →"}
            </Magnetic>
            {status.msg && (
              <div className={`form-status ${status.state === "error" ? "error" : "success"}`}>{status.msg}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
