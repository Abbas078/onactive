"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Calendar, Menu, Phone } from "lucide-react";
import { MAIN_NAV } from "@/constants/navigation";
import { CLINIC_INFO } from "@/constants/clinicInfo";
import { useAppointmentModal } from "@/context/AppointmentModalContext";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { openModal } = useAppointmentModal();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full bg-white transition-all duration-200 border-b border-[#DCE5EF]",
          isScrolled ? "shadow-md py-2.5" : "py-3"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#F47721] rounded-lg p-1 shrink-0"
            >
              <div className="relative h-10 w-40 sm:h-12 sm:w-48 transition-transform duration-200 group-hover:scale-[1.01]">
                <Image
                  src="/images/logo.png"
                  alt="Arthrogenix - Dr. Ankit Jaipal"
                  fill
                  sizes="(max-width: 640px) 160px, 192px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {MAIN_NAV.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                const hasChildren = item.children && item.children.length > 0;
                const isDropdownOpen = activeDropdown === item.label;

                if (hasChildren) {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150",
                          isActive
                            ? "text-[#F47721] font-semibold"
                            : "text-[#102D4F] hover:text-[#F47721] hover:bg-[#F5F8FB]"
                        )}
                        aria-expanded={isDropdownOpen}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            isDropdownOpen ? "rotate-180 text-[#F47721]" : "text-[#52647A]"
                          )}
                        />
                      </Link>

                      {/* Dropdown menu */}
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 w-72 pt-2 z-50">
                          <div className="bg-white rounded-xl shadow-xl border border-[#DCE5EF] p-2 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150">
                            {item.children?.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block p-2.5 rounded-lg hover:bg-[#F5F8FB] transition-colors group"
                              >
                                <span className="text-xs font-semibold text-[#102D4F] group-hover:text-[#F47721] transition-colors block">
                                  {child.label}
                                </span>
                                {child.description && (
                                  <span className="text-[11px] text-[#52647A] line-clamp-1 block mt-0.5">
                                    {child.description}
                                  </span>
                                )}
                              </Link>
                            ))}
                            <div className="pt-1.5 border-t border-[#DCE5EF] px-2.5 pb-1">
                              <Link
                                href={item.href}
                                className="text-xs font-bold text-[#F47721] hover:underline inline-block"
                              >
                                Explore all {item.label.toLowerCase()} →
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150",
                      isActive
                        ? "text-[#F47721] font-semibold"
                        : "text-[#102D4F] hover:text-[#F47721] hover:bg-[#F5F8FB]"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right side Actions */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              {/* Call button on mobile/tablet */}
              <a
                href={`tel:${CLINIC_INFO.primaryPhoneRaw}`}
                className="lg:hidden p-2 text-[#102D4F] hover:text-[#F47721] hover:bg-[#F5F8FB] rounded-lg transition-colors"
                aria-label="Call clinic"
              >
                <Phone className="w-5 h-5 text-[#F47721]" />
              </a>

              {/* Book Appointment CTA */}
              <Button
                onClick={() => openModal()}
                variant="primary"
                size="md"
                icon={<Calendar className="w-4 h-4" />}
                className="hidden sm:inline-flex"
              >
                Book Appointment
              </Button>

              {/* Mobile menu hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 text-[#102D4F] hover:bg-[#F5F8FB] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#F47721]"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6 text-[#102D4F]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

