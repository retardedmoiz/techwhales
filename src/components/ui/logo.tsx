export function TechWhalesLogo({ className = "", width = 200 }: { className?: string; width?: number | string }) {
  return (
    <div className={`flex items-center transition-all duration-300 ${className}`}>
      <img
        src="/logo-techwhales.png"
        alt="TechWhales Digital Architecture & Advertising Systems"
        className="dark:brightness-0 dark:invert transition-all duration-300"
        style={{ 
          width: typeof width === 'number' ? `${width}px` : width,
          height: "auto",
          maxHeight: "38px",
          objectFit: "contain",
          display: "block"
        }}
      />
    </div>
  );
}
