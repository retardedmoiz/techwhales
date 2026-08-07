"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Home } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(0, 212, 255, 0.07) 0%, rgba(123, 47, 255, 0.05) 50%, transparent 70%), #04070F" }}>
      {/* Animated particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div key={i}
          className="absolute rounded-full opacity-20"
          style={{ background: i % 2 === 0 ? "#00D4FF" : "#7B2FFF", width: 4 + i * 2, height: 4 + i * 2, left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10], opacity: [0.1, 0.3, 0.1] }}
          transition={{ repeat: Infinity, duration: 3 + i, ease: "easeInOut" }} />
      ))}

      <div className="container mx-auto text-center relative z-10 py-20">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
          <div className="text-[clamp(6rem,20vw,16rem)] font-heading font-black leading-none mb-0 select-none"
            style={{ background: "linear-gradient(135deg, rgba(0, 212, 255, 0.15) 0%, rgba(123, 47, 255, 0.15) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            404
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tighter mb-4">
            This page swam away.
          </h1>
          <p className="text-white/40 max-w-md mx-auto mb-10 text-lg leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist, was moved, or is hiding somewhere in the ocean.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/"
              className="group inline-flex items-center gap-2 px-8 py-4 font-bold text-white rounded-2xl hover:scale-105 transition-transform"
              style={{ background: "linear-gradient(135deg, #00D4FF 0%, #7B2FFF 100%)" }}>
              <Home size={18} />
              Back to Home
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white/60 border border-white/10 hover:border-white/20 hover:text-white rounded-2xl transition-all">
              Contact Support
              <ArrowUpRight size={18} />
            </Link>
          </div>
          <p className="text-white/20 text-sm mt-8">{SITE_CONFIG.brand} by {SITE_CONFIG.legalName}</p>
        </motion.div>
      </div>
    </div>
  );
}
