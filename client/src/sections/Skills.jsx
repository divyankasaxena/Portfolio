import { useState } from "react";
import { skillFilters, skills } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";

export default function Skills() {
  const [filter, setFilter] = useState("all");
  const [headRef, headIn] = useReveal();
  const [cloudRef, cloudIn] = useReveal();

  const visible = skills.filter((s) => filter === "all" || s.cat.includes(filter));

  return (
    <section id="skills" style={{ background: "var(--bg-elev)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <div className={`reveal-up ${headIn ? "in" : ""}`} ref={headRef}>
          <span className="eyebrow-sm">02 — Capabilities</span>
          <div className="section-head">
            <h2>Tools of the craft.</h2>
            <p>A working toolkit spanning interface, backend, and infrastructure.</p>
          </div>
          <div className="skill-filters">
            {skillFilters.map((f) => (
              <button
                key={f.key}
                className={`filter-chip ${filter === f.key ? "active" : ""}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
        <div className={`skill-cloud stagger ${cloudIn ? "in" : ""}`} ref={cloudRef}>
          {visible.map((s) => (
            <div className="skill-chip" key={s.name}>
              <span className="dot" />
              {s.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
