"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const footerRef = useRef(null);
  const headerRef = useRef(null);
  const wrapperRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    // Simulate loading progress
    gsap.to({}, {
      duration: 3,
      onUpdate: function () {
        const p = Math.floor(this.progress() * 100);
        setProgress(p);
      },
      onComplete: () => {
        // Fade out footer logo
        gsap.to(footerRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });

        // Move header logo upward
        gsap.to(headerRef.current, {
          y: "-20vh",
          duration: 1.2,
          ease: "power3.inOut",
        });

        // Progress text slides slightly up and fades out
        gsap.to(progressRef.current, {
          y: -30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
          delay: 0.2,
        });

        // Slide the whole loader up like a window reveal
        gsap.to(wrapperRef.current, {
          y: "-100%",
          duration: 1.3,
          delay: 0.6,
          ease: "power4.inOut",
          onComplete: onComplete,
        });
      },
    });
  }, [onComplete]);

  return (
    <div
      ref={wrapperRef}
      className="loader-wrapper fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Footer background logo (large, gray, faded) */}
      <img
        ref={footerRef}
        src="logos/Footer.png"
        alt="Footer Logo"
        className="absolute w-[75vw] opacity-15 grayscale object-contain z-0"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "grayscale(100%) brightness(0.6)",
        }}
      />

      {/* Header logo */}
      <img
        ref={headerRef}
        src="logos/Header.png"
        alt="Header Logo"
        className="w-[200px] sm:w-[260px] object-contain relative z-10"
      />

      {/* Progress text (center-bottom, light gray) */}
      <div
        ref={progressRef}
        className="absolute text-gray-400 text-[50px] sm:text-[70px] font-semibold tracking-wide z-20"
        style={{
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {progress}%
      </div>
    </div>
  );
}
