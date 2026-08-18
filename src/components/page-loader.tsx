"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TechWhalesLogo } from "@/components/ui/logo";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";
    
    // Simulate loading time to show the logo beautifully
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white text-black"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <TechWhalesLogo width={350} className="text-black" />
          </motion.div>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            className="h-1 bg-red-600 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
