"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompleteTransportation from "@/components/CompleteTransportation";
import StayConnected from "@/components/StayConnected";
import DriveSafely from "@/components/DriveSafely";
import HowItWorks from "@/components/HowItWorks";
import Committed from "@/components/Committed";
import ChildsSafety from "@/components/ChildsSafety";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const cursorRef = useRef(null);
  const cursorRingRef = useRef(null);
  const footerRef = useRef(null);

  const handleComplete = () => setLoading(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = cursorRingRef.current;
    let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let mouse = { x: pos.x, y: pos.y };

    const moveCursor = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", moveCursor);

    const animate = () => {
      pos.x += (mouse.x - pos.x) * 0.15;
      pos.y += (mouse.y - pos.y) * 0.15;
      gsap.set(cursor, { x: mouse.x, y: mouse.y });
      gsap.set(ring, { x: pos.x - 15, y: pos.y - 15 });
      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Hover animations on buttons & links
  useEffect(() => {
    const interactiveEls = document.querySelectorAll("a, button, .hover-target");
    const cursor = cursorRef.current;
    const ring = cursorRingRef.current;

    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, { scale: 0.5, backgroundColor: "#FF7F50", duration: 0.3 });
        gsap.to(ring, { scale: 1.5, borderColor: "#FF7F50", duration: 0.3 });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, { scale: 1, backgroundColor: "rgba(0,0,0,0.7)", duration: 0.3 });
        gsap.to(ring, { scale: 1, borderColor: "rgba(0,0,0,0.5)", duration: 0.3 });
      });
    });
  }, []);

  // 👇 Footer 3D Scroll Animation
  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    gsap.set(footer, {
      yPercent: 100,
      rotationX: 45,
      transformOrigin: "top center",
      opacity: 0,
    });

    ScrollTrigger.create({
      trigger: footer,
      start: "top bottom-=200",
      end: "top bottom",
      onEnter: () => {
        gsap.to(footer, {
          yPercent: 0,
          rotationX: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(footer, {
          yPercent: 100,
          rotationX: 45,
          opacity: 0,
          duration: 1,
          ease: "power4.inOut",
        });
      },
    });
  }, []);

  return (
    <main className="relative bg-[#FFF9ED] min-h-screen overflow-hidden px-6">
      {loading && <Loader onComplete={handleComplete} />}

      {/* Floating Framer-Style Cursor */}
      <div
        ref={cursorRingRef}
        className="hidden md:block pointer-events-none fixed top-0 left-0 w-12 h-12 rounded-full border border-black/50 z-[9998] transform"
      />
      <div
        ref={cursorRef}
        className="hidden md:block pointer-events-none fixed top-0 left-0 w-2 h-2 rounded-full bg-black/70 z-[9999] transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Page content */}
      <div
        className={`transition-all duration-700 ${
          loading
            ? "blur-lg scale-[1.02] opacity-0"
            : "blur-0 opacity-100 scale-100"
        }`}
      >
        <Navbar />
        <HeroSection />
        <CompleteTransportation />
        <StayConnected />
        <DriveSafely />
        <HowItWorks />
        <Committed />
        <ChildsSafety />
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
    </main>
  );
}
