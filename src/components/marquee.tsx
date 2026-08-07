"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  speed?: number;
}

export default function Marquee({ items, speed = 20 }: MarqueeProps) {
  return (
    <div className="flex whitespace-nowrap overflow-hidden py-12 border-y border-white/10 bg-black/50 backdrop-blur-sm relative z-10">
      <motion.div
        className="flex gap-16 px-8 items-center min-w-full"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {/* We duplicate the array 4 times to ensure it fills ultra-wide screens and loops seamlessly */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-16 items-center">
            {items.map((item, index) => (
              <div key={`${i}-${index}`} className="flex items-center gap-16">
                <span className="text-4xl md:text-6xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-stone-gray to-white uppercase tracking-tighter opacity-80 hover:opacity-100 transition-opacity duration-500">
                  {item}
                </span>
                <span className="text-muted-sage text-2xl">✦</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
