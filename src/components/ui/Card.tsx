import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  bordered?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export function Card({
  children,
  className,
  hoverEffect = false,
  bordered = true,
  padding = "md",
  ...props
}: CardProps) {
  const paddingStyles = {
    none: "p-0",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={cn(
        "bg-white rounded-2xl transition-all duration-300",
        bordered && "border border-[#DCE5EF]",
        hoverEffect
          ? "hover:shadow-lg hover:border-[#B8CDE2] hover:-translate-y-1 shadow-[0_4px_20px_-2px_rgba(16,45,79,0.06)]"
          : "shadow-[0_2px_12px_rgba(16,45,79,0.04)]",
        paddingStyles[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

