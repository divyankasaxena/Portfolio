import { profile, timeline } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const [headRef, headIn] = useReveal();
  const [gridRef, gridIn] = useReveal();

  return (
    <section id="about">
      <div className="wrap">
        <div className={`reveal-up ${headIn ? "in" : ""}`} ref={headRef}>
          <span className="eyebrow-sm">01 — About</span>
          <div className="section-head">
            <h2>Engineer, by way of curiosity.</h2>
          </div>
        </div>
        <div className={`about-grid reveal-up ${gridIn ? "in" : ""}`} ref={gridRef}>
          <div className="profile-card">
            <div className="avatar-ring">{profile.initials}</div>
            <h3>{profile.name}</h3>
            <div className="role">{profile.role}</div>
            <div className="kv">
              <span>Location</span>
              <span>{profile.location}</span>
            </div>
            <div className="kv">
              <span>University</span>
              <span>{profile.university}</span>
            </div>
            <div className="kv">
              <span>Graduating</span>
              <span>{profile.graduating}</span>
            </div>
            <div className="kv">
              <span>CGPA</span>
              <span>{profile.cgpa}</span>
            </div>
            <div className="kv">
              <span>Focus</span>
              <span>AI · Full Stack · Cloud</span>
            </div>
            <div className="badge-row">
              {["React.js", "Node.js", "Java", "MongoDB", "Docker"].map((b) => (
                <span className="badge" key={b}>
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div className="about-copy">
            <p>
              I'm a final-year B.Tech Computer Science student at GLA University, Mathura, passionate about
              building full-stack, AI-powered products that feel effortless to use. My work spans real-time
              systems, intelligent recommendation engines, and developer tooling — always grounded in clean
              architecture and an eye for interface detail.
            </p>
            <p>
              Currently exploring agentic AI features, scalable backend design, and DevOps practices, while
              strengthening my foundations in data structures, algorithms, and system design.
            </p>
            <div className="timeline">
              {timeline.map((t) => (
                <div className="tl-item" key={t.title}>
                  <div className="tl-date mono">{t.date}</div>
                  <h4>{t.title}</h4>
                  <p>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
