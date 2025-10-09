"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const logoRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Simulate progress
    gsap.to({}, {
      duration: 3,
      onUpdate: function () {
        const p = Math.floor(this.progress() * 100);
        setProgress(p);
      },
    });

    // Main animation timeline
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

    // Responsive animations
    mm.add(
      {
        isMobile: "(max-width: 768px)",
        isDesktop: "(min-width: 769px)",
      },
      (context) => {
        const { isMobile } = context.conditions;

        // Move + shrink the logo
        tl.to(logoRef.current, {
          duration: 1.4,
          x: isMobile ? -136.002 : -636.002,
          y: isMobile ? -612.794 : -312.794,
          scale: 0.5, // instead of changing fontSize, we scale the image
          ease: "power3.inOut",
        });

        // Fade out logo
        tl.to(logoRef.current, {
          duration: 0.6,
          opacity: 0,
          ease: "power1.out",
        });
      }
    );

    return () => mm.revert(); // cleanup
  }, [onComplete]);

  return (
    <div className="loader-wrapper fixed inset-0 bg-black/60 backdrop-blur-md z-[9999] flex items-center justify-center">
      {/* Center logo image */}
      <img
        ref={logoRef}
        src="/logos/gr-logo.png"
        alt="Guardian Ride Logo"
        className="w-[160px] sm:w-[200px] object-contain"
      />

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
