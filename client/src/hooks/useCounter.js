import { useEffect, useState } from "react";

export function useCounter(targetValue, inView, decimal = false, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const cur = targetValue * p;
      setValue(decimal ? Number(cur.toFixed(2)) : Math.floor(cur));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setValue(targetValue);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, targetValue, decimal, duration]);

  return decimal ? value.toFixed(2) : value;
}
