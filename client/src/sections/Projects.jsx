import { useState } from "react";
import { projects } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";

export default function Projects() {
  const [query, setQuery] = useState("");
  const [headRef, headIn] = useReveal();
  const [gridRef, gridIn] = useReveal();

  const filtered = projects.filter((p) => p.search.toLowerCase().includes(query.toLowerCase()));

  return (
    <section id="projects">
      <div className="wrap">
        <div className={`reveal-up ${headIn ? "in" : ""}`} ref={headRef}>
          <span className="eyebrow-sm">03 — Selected Work</span>
          <div className="project-tools">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <h2>Projects.</h2>
            </div>
            <div className="search-box">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search projects, tech..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className={`project-grid stagger ${gridIn ? "in" : ""}`} ref={gridRef}>
          {filtered.map((p) => (
            <div className="proj-card" key={p.id}>
              <div className="proj-thumb">
  <img src={p.image} alt={p.name} className="project-image" />

  {p.featured && <span className="featured-badge">Featured</span>}
  <span className="ptag">{p.date}</span>
</div>
              <div className="proj-body">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="proj-stack">
                  {p.stack.map((t) => (
                    <span className="tag-pill" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="proj-links">
                  <a href={p.github} target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
