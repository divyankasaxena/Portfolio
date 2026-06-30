import { useEffect, useMemo, useState } from "react";
import { profile } from "../data/portfolioData";

export default function CommandPalette({ open, onClose, toggleTheme }) {
  const [query, setQuery] = useState("");

  const commands = useMemo(
    () => [
      { label: "Go to About", href: "#about" },
      { label: "Go to Skills", href: "#skills" },
      { label: "Go to Projects", href: "#projects" },
      { label: "Go to Experience", href: "#experience" },
      { label: "Go to Contact", href: "#contact" },
      { label: "Open GitHub Profile", href: profile.github, ext: true },
      { label: "Open LinkedIn", href: profile.linkedin, ext: true },
      { label: "Email Me", href: `mailto:${profile.email}`, ext: true },
      { label: "Toggle Theme", action: toggleTheme },
    ],
    [toggleTheme]
  );

  useEffect(() => {
    if (open) setQuery("");
  }, [open]);

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));

  const runCommand = (c) => {
    if (c.action) c.action();
    else if (c.ext) window.open(c.href, "_blank");
    else document.querySelector(c.href)?.scrollIntoView({ behavior: "smooth" });
    onClose();
  };

  return (
    <div id="cmdk-overlay" className={open ? "open" : ""} onClick={(e) => e.target.id === "cmdk-overlay" && onClose()}>
      <div id="cmdk">
        <input
          id="cmdk-input"
          autoFocus
          placeholder="Type a command or search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div id="cmdk-list">
          {filtered.map((c) => (
            <div key={c.label} className="cmdk-item" onClick={() => runCommand(c)}>
              <span>{c.label}</span>
              <span>↵</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
