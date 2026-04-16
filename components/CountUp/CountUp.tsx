"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

type Props = {
  to: number;
  duration?: number;
  decimals?: number;
  className?: string;
};

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export function CountUp({
  to,
  duration = 1400,
  decimals = 0,
  className = "",
}: Props) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setValue(to * easeOut(p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  const formatted =
    decimals === 0
      ? Math.round(value).toLocaleString()
      : value.toFixed(decimals);

  return (
    <span ref={ref} className={className}>
      {formatted}
    </span>
  );
}
