"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", onMove, { passive: true });

    const interactables = document.querySelectorAll("a, button, [role='button'], input, textarea");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    let raf: number;
    const animate = () => {
      cursorPos.current.x += (pos.current.x - cursorPos.current.x) * 0.12;
      cursorPos.current.y += (pos.current.y - cursorPos.current.y) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorPos.current.x - 20}px, ${cursorPos.current.y - 20}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block transition-all duration-200 ${
          isHovering ? "w-12 h-12 opacity-80 scale-125" : "w-10 h-10 opacity-60"
        }`}
        style={{
          border: "1px solid rgba(255, 255, 255, 0.9)",
          borderRadius: "50%",
          willChange: "transform",
          mixBlendMode: "difference",
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-2 h-2 rounded-full hidden md:block"
        style={{
          background: "rgba(255, 255, 255, 1)",
          willChange: "transform",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}
