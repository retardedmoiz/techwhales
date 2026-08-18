
export function TechWhalesLogo({ className = "", width = 300 }: { className?: string; width?: number | string }) {
  return (
    <img
      src="/logo-techwhales.jpeg"
      alt="TechWhales Digital Architecture & Advertising Systems"
      className={className}
      style={{ 
        width: typeof width === 'number' ? `${width}px` : width,
        height: "auto",
        display: "block",
        mixBlendMode: "multiply",
        filter: "contrast(1.2) brightness(1.05)"
      }}
    />
  );
}
