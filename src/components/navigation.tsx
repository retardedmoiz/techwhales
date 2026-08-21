"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Briefcase, Building2, Info, UserCheck, Mail, Moon, Sun, Menu, X } from "lucide-react";
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
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("tw_theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("tw_theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) return null;

  return (
    <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none w-full max-w-7xl px-4 flex justify-center">
      {/* Unified Center-Aligned Glassmorphism Navbar Capsule */}
      <div className="pointer-events-auto flex items-center justify-between gap-3 md:gap-5 px-4 md:px-6 py-2.5 rounded-full border border-black/10 dark:border-white/15 bg-white/90 dark:bg-[#08080a]/90 backdrop-blur-2xl shadow-2xl transition-all duration-300 max-w-full">
        
        {/* Prominent Logo */}
        <Link href="/" className="flex items-center group flex-shrink-0 pr-1">
          <TechWhalesLogo width={190} className="group-hover:scale-105 transition-transform duration-300" />
        </Link>

        {/* Separator Divider */}
        <div className="hidden lg:block w-px h-6 bg-black/10 dark:bg-white/15 flex-shrink-0" />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.url || (item.url !== "/" && pathname.startsWith(item.url));

            return (
              <Link
                key={item.name}
                href={item.url}
                className={cn(
                  "relative cursor-pointer text-[0.72rem] uppercase tracking-wider font-bold px-3.5 py-2 rounded-full transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap",
                  isActive
                    ? "text-red-600 dark:text-red-500 font-black"
                    : "text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
                )}
              >
                <Icon size={14} strokeWidth={2.2} />
                <span>{item.name}</span>
                
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className={cn(
                      "absolute inset-0 w-full rounded-full -z-10",
                      theme === "dark" ? "bg-white/10" : "bg-black/5"
                    )}
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
        </nav>

        {/* Separator Divider */}
        <div className="hidden lg:block w-px h-6 bg-black/10 dark:bg-white/15 flex-shrink-0" />

        {/* Theme Toggle & Mobile Controls */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={toggleTheme}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
              "relative cursor-pointer p-2 rounded-full transition-all duration-300 flex items-center justify-center",
              theme === "dark"
                ? "text-white/80 hover:text-white hover:bg-white/10"
                : "text-black/80 hover:text-black hover:bg-black/5"
            )}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          >
            <motion.div
              initial={false}
              animate={{
                scale: isHovered ? 1.15 : 1,
                rotate: theme === "dark" ? 180 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            >
              {theme === "light" ? (
                <Moon size={16} strokeWidth={2.2} className="text-black" />
              ) : (
                <Sun size={16} strokeWidth={2.2} className="text-yellow-400" />
              )}
            </motion.div>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown Card */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            className="pointer-events-auto absolute top-full mt-3 inset-x-4 z-50 bg-white/95 dark:bg-[#08080a]/95 border border-black/10 dark:border-white/15 rounded-3xl p-5 shadow-2xl backdrop-blur-2xl flex flex-col gap-2.5 max-w-sm mx-auto"
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
                    "flex items-center gap-3 p-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all",
                    isActive
                      ? "bg-red-600 text-white font-black shadow-lg shadow-red-600/30"
                      : "text-foreground/80 hover:bg-black/5 dark:hover:bg-white/5"
                  )}
                >
                  <Icon size={16} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default GlassmorphismNavBar;
