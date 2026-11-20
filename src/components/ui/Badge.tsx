import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "orange" | "navy" | "subtle" | "outline" | "rghs";
  size?: "sm" | "md";
  icon?: React.ReactNode;
}

export function Badge({
  children,
  className,
  variant = "subtle",
  size = "md",
  icon,
  ...props
}: BadgeProps) {
  const variantStyles = {
    orange: "bg-[#FFF4EB] text-[#F47721] border border-[#FDE8D7]",
    navy: "bg-[#102D4F] text-white",
    subtle: "bg-[#F5F8FB] text-[#102D4F] border border-[#DCE5EF]",
    outline: "bg-transparent text-[#102D4F] border border-[#DCE5EF]",
    rghs: "bg-[#102D4F]/50 text-[#F5F8FB] border border-[#F47721]/60 text-xs font-semibold",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-1 gap-1.5",
    md: "text-xs sm:text-sm px-3.5 py-1.5 gap-2",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-full",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}

