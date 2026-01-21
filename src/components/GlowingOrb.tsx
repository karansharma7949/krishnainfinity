import { cn } from "@/lib/utils";

interface GlowingOrbProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "accent" | "secondary";
}

export function GlowingOrb({
  className,
  size = "md",
  color = "primary",
}: GlowingOrbProps) {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
    xl: "w-[500px] h-[500px]",
  };

  const colorClasses = {
    primary: "bg-primary/30",
    accent: "bg-accent/50",
    secondary: "bg-secondary/30",
  };

  return (
    <div
      className={cn(
        "absolute rounded-full blur-3xl animate-pulse-glow pointer-events-none",
        sizeClasses[size],
        colorClasses[color],
        className
      )}
    />
  );
}
