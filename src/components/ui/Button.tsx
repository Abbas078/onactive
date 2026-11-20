import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "orangeOutline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      href,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "left",
      isExternal,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variantStyles = {
      primary:
        "bg-[#F47721] hover:bg-[#DF6410] text-white shadow-sm hover:shadow-md focus:ring-[#F47721]",
      secondary:
        "bg-[#102D4F] hover:bg-[#183F6C] text-white shadow-sm hover:shadow-md focus:ring-[#102D4F]",
      outline:
        "border border-[#102D4F] text-[#102D4F] hover:bg-[#F5F8FB] focus:ring-[#102D4F]",
      orangeOutline:
        "border border-[#F47721] text-[#F47721] hover:bg-[#FFF4EB] focus:ring-[#F47721]",
      ghost:
        "text-[#102D4F] hover:bg-[#F5F8FB] hover:text-[#F47721] focus:ring-[#102D4F]",
      white:
        "bg-white text-[#102D4F] hover:bg-neutral-50 shadow-sm border border-[#DCE5EF] focus:ring-white",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-2 gap-1.5 font-medium",
      md: "text-sm px-5 py-2.5 gap-2 font-semibold",
      lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
    };

    const combinedClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
      </>
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            className={combinedClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

