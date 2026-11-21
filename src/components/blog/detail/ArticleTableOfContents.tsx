"use client";

import React from "react";
import { List } from "lucide-react";

interface ArticleTableOfContentsProps {
  items: { id: string; title: string }[];
}

export function ArticleTableOfContents({ items }: ArticleTableOfContentsProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      aria-label="Table of contents"
      className="bg-[#F5F8FB] rounded-2xl p-5 border border-[#DCE5EF] sticky top-24"
    >
      <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[#DCE5EF]">
        <List className="w-4 h-4 text-[#F47721]" />
        <h2 className="text-xs font-bold uppercase tracking-wider text-[#102D4F]">
          Table of Contents
        </h2>
      </div>

      <ul className="space-y-2 text-xs">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollTo(item.id)}
              className="text-left text-[#52647A] hover:text-[#F47721] transition-colors py-1 block w-full leading-snug font-medium"
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
