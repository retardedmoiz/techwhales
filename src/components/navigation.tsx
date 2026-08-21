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
    // Initialize theme from localStorage or document class
    const savedTheme = localStorage.getItem("tw_theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Default to dark theme for premium tech feel
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
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-4 py-3 sm:py-4 flex justify-between items-center max-w-7xl mx-auto">
      {/* Brand Logo */}
      <Link href="/" className="pointer-events-auto flex items-center gap-2 group bg-background/60 backdrop-blur-xl border border-white/10 dark:border-white/10 px-4 py-2 rounded-full shadow-lg transition-all hover:scale-105">
        <TechWhalesLogo width={150} className="text-foreground group-hover:text-red-600 transition-colors duration-300" />
      </Link>

      {/* Glassmorphism Centered Navigation Bar (Desktop & Tablet) */}
      <nav className="pointer-events-auto hidden md:flex items-center gap-1.5 py-1.5 px-3 rounded-full shadow-2xl transition-all duration-300 border border-white/10 dark:border-white/10 bg-background/50 dark:bg-background/40 backdrop-blur-xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.url || (item.url !== "/" && pathname.startsWith(item.url));

          return (
            <Link
              key={item.name}
              href={item.url}
              className={cn(
                "relative cursor-pointer text-xs uppercase tracking-wider font-bold px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2",
                isActive
                  ? "text-red-600 dark:text-red-500 font-black"
                  : "text-foreground/70 hover:text-foreground dark:text-white/70 dark:hover:text-white"
              )}
            >
              <Icon size={14} strokeWidth={2.5} />
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
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-1 rounded-t-full bg-red-600">
                    <div className="absolute w-10 h-5 rounded-full blur-md -top-2 -left-2 bg-red-600/40" />
                    <div className="absolute w-6 h-5 rounded-full blur-sm -top-1 bg-red-600/50" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}

        <div className="w-px h-5 bg-border/40 mx-1" />

        {/* Global Dark/Light Theme Toggle */}
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
              <Moon size={16} strokeWidth={2.5} className="text-black" />
            ) : (
              <Sun size={16} strokeWidth={2.5} className="text-yellow-400" />
            )}
          </motion.div>
        </button>
      </nav>

      {/* Mobile Right Bar (Theme Toggle + Menu Button) */}
      <div className="pointer-events-auto flex md:hidden items-center gap-2">
        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-full border border-white/10 bg-background/60 backdrop-blur-xl text-foreground"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} className="text-yellow-400" />}
        </button>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2.5 rounded-full border border-white/10 bg-background/60 backdrop-blur-xl text-foreground"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pointer-events-auto fixed inset-x-4 top-20 z-50 bg-background/95 border border-white/10 dark:border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-2xl flex flex-col gap-3"
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
                    "flex items-center gap-3 p-3 rounded-2xl text-sm font-bold uppercase tracking-wider transition-all",
                    isActive
                      ? "bg-red-600 text-white font-black"
                      : "text-foreground/80 hover:bg-white/5"
                  )}
                >
                  <Icon size={18} />
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
