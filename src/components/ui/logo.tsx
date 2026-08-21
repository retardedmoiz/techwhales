export function TechWhalesLogo({ className = "", width = 140 }: { className?: string; width?: number | string }) {
  return (
    <img
      src="/logo-techwhales.png"
      alt="TechWhales Digital Architecture & Advertising Systems"
      className={`dark:brightness-0 dark:invert transition-all duration-300 ${className}`}
      style={{ 
        width: typeof width === 'number' ? `${width}px` : width,
        height: "auto",
        maxHeight: "26px",
        objectFit: "contain",
        display: "block"
      }}
    />
  );
}
