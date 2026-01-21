import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "blur";
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const animationClasses = {
    "fade-up": "translate-y-12 opacity-0",
    "fade-left": "translate-x-12 opacity-0",
    "fade-right": "-translate-x-12 opacity-0",
    scale: "scale-95 opacity-0",
    blur: "opacity-0 blur-sm",
  };

  const visibleClasses = "translate-y-0 translate-x-0 scale-100 opacity-100 blur-0";

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? visibleClasses : animationClasses[animation],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
