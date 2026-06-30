import { heroStats, profile } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";
import { useCounter } from "../hooks/useCounter";
import Magnetic from "../components/Magnetic";

function StatCounter({ stat }) {
  const [ref, inView] = useReveal(0.5);
  const value = useCounter(stat.value, inView, stat.decimal);
  return (
    <div className="stat" ref={ref}>
      <div className="stat-num">{value}</div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

export default function Hero() {
  const lines = ["Divyanka", "Saxena —", "building intelligent", "software."];

  return (
    <header className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-mesh" />
        <div className="hero-grid" />
      </div>
      <div className="wrap">
        <div className="eyebrow">
          <span className="dot" /> Open to internships &amp; full-time roles · 2027 grad
        </div>
        <h1>
          <div className="reveal">
            <span style={{ animationDelay: "0.05s" }}>Divyanka</span>
          </div>
          <br />
          <div className="reveal">
            <span style={{ animationDelay: "0.12s" }}>Saxena —</span>
          </div>
          <br />
          <div className="reveal">
            <span style={{ animationDelay: "0.19s" }}>
              building <em>intelligent</em>
            </span>
          </div>
          <br />
          <div className="reveal">
            <span style={{ animationDelay: "0.26s" }}>software.</span>
          </div>
        </h1>
        <p className="hero-sub">{profile.subtitle}</p>
        <div className="hero-cta">
          <Magnetic as="a" href="#projects" className="btn btn-primary">
            View Projects →
          </Magnetic>
          <Magnetic as="a" href={profile.resumeFile} download className="btn btn-ghost">
            Download Résumé
          </Magnetic>
          <Magnetic as="a" href={profile.github} target="_blank" className="btn btn-ghost">
            GitHub ↗
          </Magnetic>
        </div>
        <div className="stat-counters">
          {heroStats.map((s) => (
            <StatCounter key={s.label} stat={s} />
          ))}
        </div>
      </div>
      <div className="hero-scroll">
        <span>SCROLL</span>
        <div className="line" />
      </div>
    </header>
  );
}
