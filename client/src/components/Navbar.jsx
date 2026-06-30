import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/portfolioData";
import Magnetic from "./Magnetic";

export default function Navbar({ navHidden, theme, toggleTheme, openCmdk }) {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = ["home", "about", "skills", "projects", "experience", "contact"];
    const onScroll = () => {
      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="navbar" className={navHidden ? "hidden" : ""}>
      <div className="navinner">
        <a href="#home" className="navbrand">
          Divyanka<span style={{ color: "var(--accent)" }}>.</span>
        </a>
        <div className="navlinks">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className={active === l.href.slice(1) ? "active" : ""}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="navactions">
          <button className="iconbtn" onClick={openCmdk} title="Command palette (Ctrl+K)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button className="iconbtn" onClick={toggleTheme} title="Toggle theme">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          </button>
          <Magnetic
            as="a"
            href="#contact"
            className="btn btn-primary"
            style={{ padding: "10px 20px", fontSize: "13px" }}
          >
            Let's talk
          </Magnetic>
        </div>
      </div>
    </nav>
  );
}
