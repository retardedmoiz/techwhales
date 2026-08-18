import Image from "next/image";

export function TechWhalesLogo({ className = "", width = 300 }: { className?: string; width?: number | string }) {
  return (
    <div 
      className={`relative inline-block ${className}`} 
      style={{ 
        width: typeof width === 'number' ? `${width}px` : width,
        // The aspect ratio of the logo is roughly 2:1
        aspectRatio: "2/1",
        // Multiply blend mode completely removes the white/textured background 
        // when placed on light themes, leaving only the black logo and text!
        mixBlendMode: "multiply",
        // Increase contrast to make the black pop more and crush any light gray paper texture
        filter: "contrast(1.2) brightness(1.05)"
      }}
    >
      <Image
        src="/Logo Techwhales.jpeg"
        alt="TechWhales Digital Architecture & Advertising Systems"
        fill
        className="object-contain"
        quality={100}
        priority
      />
    </div>
  );
}
