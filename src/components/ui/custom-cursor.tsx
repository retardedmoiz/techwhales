"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface CursorContextType {
  isHovered: boolean;
  setIsHovered: (value: boolean) => void;
}

const CursorContext = createContext<CursorContextType>({
  isHovered: false,
  setIsHovered: () => {},
});

export const CustomCursorTarget = ({
  children,
  className = "",
  size = "md",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  [key: string]: any;
}) => {
  const { setIsHovered } = useContext(CursorContext);
  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </div>
  );
};

export const CustomCursor = ({
  children,
  color = "#ff4c24", // Website's red
  className = "",
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
  layout?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use framer-motion values for buttery smooth cursor physics
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on mobile/touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Apply global CSS to hide default cursor
    document.body.style.cursor = "none";
    const style = document.createElement("style");
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);

    // Global event delegation for a/button hovers if not wrapped in CustomCursorTarget
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName?.toLowerCase() === "a" ||
        target.tagName?.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "auto";
      document.head.removeChild(style);
    };
  }, [isVisible, cursorX, cursorY]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return <div className={className}>{children}</div>;
  }

  return (
    <CursorContext.Provider value={{ isHovered, setIsHovered }}>
      <div className={className}>{children}</div>

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isVisible ? (isHovered ? 0.2 : 0.4) : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            backgroundColor: color,
            borderRadius: "50%",
          }}
        />
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0 : 1,
          opacity: isVisible ? (isHovered ? 0 : 1) : 0,
        }}
        transition={{ duration: 0.15 }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            backgroundColor: color,
            borderRadius: "50%",
          }}
        />
      </motion.div>
    </CursorContext.Provider>
  );
};

export default CustomCursor;
