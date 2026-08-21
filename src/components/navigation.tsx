"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Briefcase, Building2, Info, UserCheck, Mail, Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { TechWhalesLogo } from "@/components/ui/logo";

interface NavItem {
  name: string;
  url: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { name: "Home", url: "/", icon: Home },
  { name: "Services", url: "/services", icon: Briefcase },
  { name: "Industries", url: "/industries", icon: Building2 },
  { name: "About", url: "/about", icon: Info },
  { name: "Careers", url: "/careers", icon: UserCheck },
  { name: "Contact", url: "/contact", icon: Mail },
];

export function GlassmorphismNavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 pointer-events-none px-4 sm:px-8 max-w-7xl mx-auto flex items-center justify-between">
      
      {/* 1. Left Logo Capsule - Prominent, Unconstrained & Pure White */}
      <Link
        href="/"
        className="pointer-events-auto flex items-center h-14 px-6 rounded-full bg-[#08080a]/90 backdrop-blur-xl border border-white/15 shadow-xl hover:border-red-600/50 transition-all duration-300 group"
      >
        <TechWhalesLogo width={220} className="group-hover:scale-105 transition-transform duration-300" />
      </Link>

      {/* 2. Center Desktop Navigation Glass Pill (Floating Center Bar) */}
      <nav className="pointer-events-auto hidden lg:flex items-center h-14 px-4 rounded-full border border-white/15 bg-[#08080a]/90 backdrop-blur-xl shadow-2xl transition-all duration-300">
        <div className="flex items-center gap-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.url || (item.url !== "/" && pathname.startsWith(item.url));

            return (
              <Link
                key={item.name}
                href={item.url}
                className={cn(
                  "relative cursor-pointer text-[0.72rem] uppercase tracking-wider font-bold px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap",
                  isActive
                    ? "text-red-500 font-black"
                    : "text-white/70 hover:text-white"
                )}
              >
                <Icon size={14} strokeWidth={2.2} />
                <span>{item.name}</span>
                
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full rounded-full -z-10 bg-white/10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full bg-red-600">
                      <div className="absolute w-12 h-5 rounded-full blur-md -top-2 -left-2 bg-red-600/40" />
                      <div className="absolute w-8 h-5 rounded-full blur-sm -top-1 bg-red-600/50" />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* 3. Right CTA Button (Desktop) & Mobile Toggle Controls */}
      <div className="pointer-events-auto flex items-center gap-3">
        {/* CTA Button for Desktop */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center justify-center gap-2 px-6 h-14 rounded-full bg-red-600 text-white text-[0.72rem] font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:scale-105 shadow-lg shadow-red-600/25 transition-all duration-300"
        >
          <span>Contact Us</span>
          <ArrowUpRight size={15} />
        </Link>

        {/* Mobile Drawer Trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden h-12 w-12 flex items-center justify-center rounded-full border border-white/15 bg-[#08080a]/90 backdrop-blur-xl text-white shadow-lg"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Dropdown Card */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            className="pointer-events-auto absolute top-full mt-3 inset-x-4 z-50 bg-[#08080a]/95 border border-white/15 rounded-3xl p-5 shadow-2xl backdrop-blur-2xl flex flex-col gap-2.5 max-w-sm mx-auto"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.url || (item.url !== "/" && pathname.startsWith(item.url));

              return (
                <Link
                  key={item.name}
                  href={item.url}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 p-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all",
                    isActive
                      ? "bg-red-600 text-white font-black shadow-lg shadow-red-600/30"
                      : "text-white/80 hover:bg-white/5"
                  )}
                >
                  <Icon size={16} />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            <div className="pt-2 border-t border-white/10 mt-1">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-red-600 rounded-2xl shadow-lg shadow-red-600/25"
              >
                <span>Contact Us</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default GlassmorphismNavBar;
