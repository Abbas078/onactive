"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone, MessageSquare, Calendar, X } from "lucide-react";
import { MAIN_NAV } from "@/constants/navigation";
import { CLINIC_INFO } from "@/constants/clinicInfo";
import { useAppointmentModal } from "@/context/AppointmentModalContext";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const { openModal } = useAppointmentModal();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl flex flex-col z-50 overflow-y-auto">
        {/* Top header in drawer */}
        <div className="flex items-center justify-between p-4 border-b border-[#DCE5EF]">
          <div>
            <span className="text-xs font-bold text-[#F47721] tracking-wider uppercase block">
              Arthrogenix
            </span>
            <span className="text-sm font-semibold text-[#102D4F]">
              Dr. Ankit Jaipal
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#52647A] hover:text-[#102D4F] hover:bg-[#F5F8FB] transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick action buttons */}
        <div className="grid grid-cols-2 gap-2 p-3 bg-[#F5F8FB] border-b border-[#DCE5EF]">
          <a
            href={`tel:${CLINIC_INFO.primaryPhoneRaw}`}
            className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white border border-[#DCE5EF] text-xs font-semibold text-[#102D4F] hover:border-[#F47721] transition-colors shadow-xs"
          >
            <Phone className="w-3.5 h-3.5 text-[#F47721]" />
            <span>Call Clinic</span>
          </a>
          <a
            href={CLINIC_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 text-xs font-semibold text-[#128C7E] hover:bg-[#25D366]/20 transition-colors shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Navigation items */}
        <nav className="flex-1 px-4 py-4 space-y-1">
          {MAIN_NAV.map((item) => {
            const isActive = pathname === item.href;
            const hasChildren = item.children && item.children.length > 0;
            const isSubmenuOpen = openSubmenu === item.label;

            if (hasChildren) {
              return (
                <div key={item.label} className="border-b border-neutral-100 pb-1">
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium text-[#102D4F] hover:bg-[#F5F8FB] transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 text-[#52647A] transition-transform duration-200",
                        isSubmenuOpen && "rotate-180 text-[#F47721]"
                      )}
                    />
                  </button>

                  {isSubmenuOpen && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-[#F5F8FB]/60 rounded-lg my-1">
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="block py-2 px-3 text-xs font-semibold text-[#F47721] hover:underline"
                      >
                        View All {item.label} →
                      </Link>
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="block py-1.5 px-3 rounded text-xs text-[#52647A] hover:text-[#102D4F] hover:bg-white transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[#FFF4EB] text-[#F47721] font-semibold"
                    : "text-[#102D4F] hover:bg-[#F5F8FB]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Drawer Footer CTA */}
        <div className="p-4 border-t border-[#DCE5EF] bg-white">
          <button
            onClick={() => {
              onClose();
              openModal();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#F47721] hover:bg-[#DF6410] text-white text-sm font-semibold shadow-md transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>
          <p className="mt-3 text-center text-[11px] text-[#52647A]">
            {CLINIC_INFO.rghsCashlessNote}
          </p>
        </div>
      </div>
    </div>
  );
}

