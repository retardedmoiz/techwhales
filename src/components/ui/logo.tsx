export function TechWhalesLogo({ className = "", width = 210 }: { className?: string; width?: number | string }) {
  return (
    <div className={`flex items-center gap-2.5 transition-all duration-300 ${className}`}>
      <img
        src="/logo-techwhales.png"
        alt="TechWhales Digital Architecture & Advertising Systems"
        className="dark:brightness-200 dark:contrast-150 filter dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] transition-all duration-300"
        style={{ 
          width: typeof width === 'number' ? `${width}px` : width,
          height: "auto",
          maxHeight: "44px",
          objectFit: "contain",
          display: "block"
        }}
      />
    </div>
  );
}
