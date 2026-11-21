"use client";

import React, { useState } from "react";
import { Share2, MessageCircle, Link2, Check } from "lucide-react";

interface ArticleSocialShareProps {
  title: string;
  slug: string;
}

export function ArticleSocialShare({ title, slug }: ArticleSocialShareProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = `https://arthrogenix.in/blog/${slug}`;

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${title} - Read more on Arthrogenix: ${shareUrl}`
  )}`;

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(shareUrl)}`;

  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    shareUrl
  )}`;

  return (
    <div className="bg-white rounded-2xl p-5 border border-[#DCE5EF] shadow-sm space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-[#DCE5EF]">
        <Share2 className="w-4 h-4 text-[#F47721]" />
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#102D4F]">
          Share This Patient Guide
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {/* WhatsApp */}
        <a
          href={whatsappShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors text-xs font-semibold"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Twitter / X */}
        <a
          href={twitterShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 text-[#102D4F] hover:bg-[#102D4F] hover:text-white transition-colors text-xs font-semibold"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span>X / Post</span>
        </a>

        {/* LinkedIn */}
        <a
          href={linkedinShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white transition-colors text-xs font-semibold"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32Z" />
          </svg>
          <span>LinkedIn</span>
        </a>

        {/* Copy Link */}
        <button
          onClick={handleCopy}
          className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#F5F8FB] text-[#52647A] hover:bg-[#102D4F] hover:text-white transition-colors text-xs font-semibold"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Link2 className="w-3.5 h-3.5" />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
