"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor({ color = "#dc2626" }: { color?: string }) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Real mouse position
  const pos = useRef({ x: -100, y: -100 });
  // Interpolated outer ring position
  const cursorPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Apply global CSS to hide default cursor completely
    document.documentElement.style.cursor = "none";
    document.body.style.cursor = "none";
    
    // Create a style element to force cursor: none on everything
    const style = document.createElement("style");
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    const onMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      pos.current = { x: e.clientX, y: e.clientY };
      // Move dot instantly using transform3d for hardware acceleration
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    // Use event delegation for hover states so dynamically added elements work perfectly
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    // Smooth interpolation for the outer ring using requestAnimationFrame
    let raf: number;
    const animate = () => {
      // Linear interpolation (lerp) for buttery smooth trailing effect
      cursorPos.current.x += (pos.current.x - cursorPos.current.x) * 0.2;
      cursorPos.current.y += (pos.current.y - cursorPos.current.y) * 0.2;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x - 24}px, ${cursorPos.current.y - 24}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(raf);
      
      // Restore cursor
      document.documentElement.style.cursor = "auto";
      document.body.style.cursor = "auto";
      document.head.removeChild(style);
    };
  }, [isVisible]);

  // If device is mobile or cursor hasn't moved yet, don't render
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Outer trailing ring */}
      <motion.div
        ref={cursorRef}
        animate={{
          scale: isHovering ? 1.6 : 1,
          opacity: isVisible ? (isHovering ? 0.15 : 0.3) : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        style={{
          width: "48px",
          height: "48px",
          backgroundColor: color,
          borderRadius: "50%",
          willChange: "transform",
        }}
      />
      
      {/* Inner precise dot */}
      <motion.div
        ref={dotRef}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isVisible ? (isHovering ? 0 : 1) : 0,
        }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 z-[10000] pointer-events-none hidden md:block"
        style={{
          width: "8px",
          height: "8px",
          backgroundColor: color,
          borderRadius: "50%",
          willChange: "transform",
        }}
      />
    </>
  );
}
