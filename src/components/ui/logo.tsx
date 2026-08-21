export function TechWhalesLogo({ className = "", width = 240 }: { className?: string; width?: number | string }) {
  return (
    <div className={`flex items-center transition-all duration-300 ${className}`}>
      <img
        src="/logo-techwhales.png"
        alt="TechWhales Digital Architecture & Advertising Systems"
        className="brightness-0 invert filter drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] transition-all duration-300"
        style={{ 
          width: typeof width === 'number' ? `${width}px` : width,
          height: "auto",
          maxHeight: "48px",
          objectFit: "contain",
          display: "block"
        }}
      />
    </div>
  );
}
