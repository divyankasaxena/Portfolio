import { useEffect, useState } from "react";

export default function Preloader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHide(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const letters = "Divyanka".split("");

  return (
    <div id="preloader" className={hide ? "hide" : ""}>
      <div className="pname">
        {letters.map((l, i) => (
          <span key={i} style={{ animationDelay: `${0.05 + i * 0.03}s` }}>
            {l}
          </span>
        ))}
      </div>
      <div className="bar" />
    </div>
  );
}
