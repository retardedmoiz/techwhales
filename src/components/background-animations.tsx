"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function BackgroundAnimations() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Slow down for premium feel
    }
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background">
      {/* Premium Video Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }} /* Increased opacity significantly for premium visibility */
        transition={{ duration: 2 }}
        className="absolute inset-0 w-full h-full mix-blend-screen"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full scale-[1.05]"
        >
          <source src="/vecteezy_dark-liquid-beautiful-motion-flow-animation-black-wavy_6995865.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Very subtle vignette overlay so text pops without hiding the video */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(5,5,5,0.7)_100%)]" />
    </div>
  );
}
