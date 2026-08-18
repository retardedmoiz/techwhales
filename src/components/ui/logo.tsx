export function TechWhalesLogo({ className = "", width = 300 }: { className?: string; width?: number | string }) {
  return (
    <svg 
      viewBox="0 0 600 300" 
      width={width} 
      className={className}
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(0, -20)">
        {/* GEOMETRIC WHALE TAIL (The "Y" shape) */}
        <g transform="translate(300, 100) scale(1.6)">
          {/* Left Wing Outer */}
          <path d="M-60,-35 L-65,-40 L-80,-40 L-60,-5 L-15,35 L-25,60 L-35,35 Z" fill="currentColor"/>
          {/* Left Wing Middle */}
          <path d="M-40,-30 L-50,-35 L-60,-30 L-45,-5 L-10,35 L-20,60 L-30,35 Z" fill="currentColor"/>
          {/* Left Wing Inner */}
          <path d="M-20,-25 L-30,-25 L-40,-20 L-25,0 L5,40 L-5,60 L-15,35 Z" fill="currentColor"/>
          
          {/* Right Wing Outer */}
          <path d="M60,-35 L65,-40 L80,-40 L60,-5 L15,35 L25,60 L35,35 Z" fill="currentColor"/>
          {/* Right Wing Middle */}
          <path d="M40,-30 L50,-35 L60,-30 L45,-5 L10,35 L20,60 L30,35 Z" fill="currentColor"/>
          {/* Right Wing Inner */}
          <path d="M20,-25 L30,-25 L40,-20 L25,0 L-5,40 L5,60 L15,35 Z" fill="currentColor"/>
        </g>

        {/* TEXT: TECHWHALES */}
        <text 
          x="300" 
          y="230" 
          fontFamily="Arial, sans-serif" 
          fontWeight="900" 
          fontSize="56" 
          textAnchor="middle" 
          letterSpacing="0.1em"
        >
          TECHWHALES
        </text>

        {/* TEXT: SUBTITLE */}
        <text 
          x="300" 
          y="255" 
          fontFamily="Arial, sans-serif" 
          fontWeight="600" 
          fontSize="15" 
          textAnchor="middle" 
          letterSpacing="0.08em"
        >
          DIGITAL ARCHITECTURE &amp; ADVERTISING SYSTEMS
        </text>
      </g>
    </svg>
  );
}
