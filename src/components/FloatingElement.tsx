import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  speed?: "slow" | "medium" | "fast";
  direction?: "up" | "down" | "left" | "right";
}

export function FloatingElement({
  children,
  className,
  speed = "medium",
  direction = "up",
}: FloatingElementProps) {
  const speedClasses = {
    slow: "animate-float-slow",
    medium: "animate-float",
    fast: "animate-float-fast",
  };

  return (
    <div className={cn(speedClasses[speed], className)} data-direction={direction}>
      {children}
    </div>
  );
}
