"use client";

import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-white/5">
          <div className="w-8 h-8 border-2 border-white/20 border-t-red-600 rounded-full animate-spin"></div>
        </div>
      }
    >
      <div className="w-full h-full max-w-full overflow-hidden flex items-center justify-center">
        <Spline scene={scene} className={className} />
      </div>
    </Suspense>
  );
}
