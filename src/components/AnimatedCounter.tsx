import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.5 });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isVisible) return;

    // Extract numeric part and suffix
    const numMatch = value.match(/^(\d+)/);
    const suffix = value.replace(/^\d+/, "");
    const targetNum = numMatch ? parseInt(numMatch[1], 10) : 0;

    let current = 0;
    const duration = 2000;
    const steps = 60;
    const increment = targetNum / steps;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNum) {
        setDisplayValue(`${targetNum}${suffix}`);
        clearInterval(timer);
      } else {
        setDisplayValue(`${Math.floor(current)}${suffix}`);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
