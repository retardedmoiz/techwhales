"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/config";
import { cn } from "@/lib/utils";
import { TechWhalesLogo } from "@/components/ui/logo";
import { CustomCursorTarget } from "@/components/ui/custom-cursor";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-black/5 py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-1.5 z-50">
            <CustomCursorTarget className="flex items-center">
              <TechWhalesLogo width={180} className="text-black group-hover:text-red-600 transition-colors duration-300" />
            </CustomCursorTarget>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.filter(link => link.name !== "Legal Terms" && link.name !== "Contact").map((link) => (
              <CustomCursorTarget key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-[0.75rem] font-medium uppercase tracking-widest transition-colors duration-200 block py-2",
                    pathname === link.href
                      ? "text-red-600 font-semibold"
                      : "text-black/60 hover:text-black"
                  )}
                >
                  {link.name}
                </Link>
              </CustomCursorTarget>
            ))}
          </div>

          {/* CTA & Legal Links */}
          <div className="hidden lg:flex items-center gap-6">
            <CustomCursorTarget>
              <Link
                href="/legal"
                className="text-[0.75rem] font-medium uppercase tracking-widest text-black/60 hover:text-black transition-colors block py-2"
              >
                Legal Terms
              </Link>
            </CustomCursorTarget>
            <CustomCursorTarget>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-5 py-2.5 text-[0.75rem] font-bold uppercase tracking-wider text-white bg-black rounded-full hover:bg-red-600 transition-all duration-300"
              >
                Let&apos;s Talk
                <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
              </Link>
            </CustomCursorTarget>
          </div>

          {/* Mobile Toggle */}
          <button
            id="mobile-menu-toggle"
            className="lg:hidden relative z-50 p-2 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-28 pb-12 px-8"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center justify-between py-2 text-3xl font-heading font-black text-black border-b border-black/5 hover:text-black/60 transition-colors uppercase"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                    <ArrowUpRight size={24} className="text-black/30" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto"
            >
              <Link
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-4 text-sm font-bold uppercase tracking-widest text-white bg-black rounded-full"
              >
                Let&apos;s Talk
                <ArrowUpRight size={16} />
              </Link>

              <div className="mt-8 text-center text-xs tracking-wider text-black/40 uppercase">
                <p>{SITE_CONFIG.contact.general}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
