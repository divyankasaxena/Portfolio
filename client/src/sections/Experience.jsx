import { achievements, certifications } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";

export default function Experience() {
  const [head1Ref, head1In] = useReveal();
  const [certRef, certIn] = useReveal();
  const [head2Ref, head2In] = useReveal();
  const [achRef, achIn] = useReveal();

  return (
    <section
      id="experience"
      style={{ background: "var(--bg-elev)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}
    >
      <div className="wrap">
        <div className={`reveal-up ${head1In ? "in" : ""}`} ref={head1Ref}>
          <span className="eyebrow-sm">04 — Recognition</span>
          <div className="section-head">
            <h2>Certifications.</h2>
            <p>Continuous learning, formalized.</p>
          </div>
        </div>
        <div className={`cert-grid stagger ${certIn ? "in" : ""}`} ref={certRef}>
          {certifications.map((c) => (
  <a
    key={c.title}
    href={c.link}
    target="_blank"
    rel="noopener noreferrer"
    className="cert-card"
    style={{
      textDecoration: "none",
      color: "inherit",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    }}
  >
    <div className="cert-icon">{c.icon}</div>

    <div>
      <h4>{c.title}</h4>
      <div className="meta">{c.meta}</div>
    </div>
  </a>
))}
        </div>

        <div className={`reveal-up ${head2In ? "in" : ""}`} ref={head2Ref} style={{ marginTop: "100px" }}>
          <span className="eyebrow-sm">05 — Beyond Code</span>
          <div className="section-head">
            <h2>Leadership &amp; Activities.</h2>
          </div>
        </div>
        <div className={`ach-grid stagger ${achIn ? "in" : ""}`} ref={achRef}>
          {achievements.map((a) => (
            <div className="ach-card" key={a.num}>
              <div className="num">{a.num}</div>
              <p>{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
