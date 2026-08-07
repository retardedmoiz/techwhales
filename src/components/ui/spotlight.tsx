import React from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export function Spotlight({ className, fill }: SpotlightProps) {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-50",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#spotlight-filter)">
        <ellipse
          cx="1924.57"
          cy="273.89"
          rx="1924.57"
          ry="273.89"
          transform="matrix(-0.822375 -0.568948 -0.568948 0.822375 3631.88 2291.09)"
          fill={fill || "rgba(0,0,0,0.07)"}
        />
      </g>
      <defs>
        <filter
          id="spotlight-filter"
          x="0.860352"
          y="-0.838379"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          />
        </filter>
      </defs>
    </svg>
  );
}
