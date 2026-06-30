import { useEffect, useRef } from "react";

// Renders the ambient cursor glow, dot, and trailing ring. No-op on touch devices.
export default function CursorFX() {
  const glowRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    let mx = window.innerWidth / 2,
      my = window.innerHeight / 2,
      rx = mx,
      ry = my;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      glow.style.left = mx + "px";
      glow.style.top = my + "px";
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    };
    document.addEventListener("mousemove", onMove);

    let raf;
    const loop = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      raf = requestAnimationFrame(loop);
    };
    loop();

    const interactive = document.querySelectorAll("a, button, .proj-card, .skill-chip");
    const onEnter = () => {
      ring.style.width = "52px";
      ring.style.height = "52px";
      ring.style.borderColor = "var(--accent)";
    };
    const onLeave = () => {
      ring.style.width = "32px";
      ring.style.height = "32px";
    };
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div id="grain" />
      <div id="glow" ref={glowRef} />
      <div id="cursor-dot" ref={dotRef} />
      <div className="ring" ref={ringRef} />
    </>
  );
}
