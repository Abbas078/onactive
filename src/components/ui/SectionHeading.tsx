import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  titleAs?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  titleAs: TitleTag = "h2",
  className,
  ...props
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={cn(
        "flex flex-col mb-10 max-w-3xl",
        alignClasses[align],
        className
      )}
      {...props}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-2.5">
          <span className="w-5 h-[2px] bg-[#F47721] rounded-full inline-block" />
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#F47721]">
            {eyebrow}
          </span>
          <span className="w-5 h-[2px] bg-[#F47721] rounded-full inline-block" />
        </div>
      )}

      <TitleTag className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102D4F] tracking-tight leading-snug">
        {title}
      </TitleTag>

      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-[#52647A] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

