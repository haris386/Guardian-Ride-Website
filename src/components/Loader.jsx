"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const logoRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Progress simulation
    gsap.to({}, {
      duration: 3,
      onUpdate: function () {
        const p = Math.floor(this.progress() * 100);
        setProgress(p);
      },
    });

    // Timeline for the animation
    const tl = gsap.timeline({
      delay: 2.5,
      onComplete: () => {
        gsap.to(".loader-wrapper", {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          onComplete,
        });
      },
    });

    // Different animations for mobile and desktop
    mm.add(
      {
        // Mobile
        isMobile: "(max-width: 768px)",
        // Desktop
        isDesktop: "(min-width: 769px)",
      },
      (context) => {
        const { isMobile } = context.conditions;

        tl.to(logoRef.current, {
          duration: 1.4,
          x: isMobile ? -136.002 : -636.002,
          y: isMobile ? -612.794 : -312.794,
          fontSize: "30px",
          fontWeight: 500,
          ease: "power3.inOut",
        });

        tl.to(logoRef.current, {
          duration: 0.6,
          opacity: 0,
          ease: "power1.out",
        });
      }
    );

    return () => mm.revert(); // Cleanup on unmount
  }, [onComplete]);

  return (
    <div className="loader-wrapper fixed inset-0 bg-black/60 backdrop-blur-md z-[9999] flex items-center justify-center">
      {/* Center logo */}
      <h1
        ref={logoRef}
        className="text-white text-[60px] sm:text-[70px] font-bold tracking-wide"
      >
        LOGO
      </h1>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/20 overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <div className="absolute bottom-[40px] right-[40px] text-white text-[50px] sm:text-[60px] font-medium tracking-wide">
        {progress}%
      </div>
    </div>
  );
}
