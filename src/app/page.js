"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

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

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [loading, setLoading] = useState(true);
  const cursorRef = useRef(null);
  const cursorRingRef = useRef(null);
  const pageRef = useRef(null);
  const footerRef = useRef(null);

  // ✨ When loader completes
  const handleComplete = () => {
    setLoading(false);

    // Step 1: Fade in website
    gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          // Step 2: Navbar items slide in from right
          const navItems = document.querySelectorAll("nav ul li");
          gsap.from(navItems, {
            x: 100,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
          });

          // Step 3: Then, sections slide in from left
          const sections =
            pageRef.current.querySelectorAll("section, .slide-in");
          gsap.from(sections, {
            x: -100,
            opacity: 0,
            stagger: 0.2,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.4,
          });
        },
      }
    );
  };

  // 🌀 Smooth scroll setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.4,
      smooth: true,
      smoothTouch: true,
      direction: "vertical",
      gestureDirection: "vertical",
      lerp: 0.04,
      wheelMultiplier: 0.8,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    return () => lenis.destroy();
  }, []);

  // 🧭 Custom cursor logic
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

  // ✴️ Hover animations on interactive elements
  useEffect(() => {
    const interactiveEls = document.querySelectorAll(
      "a, button, .hover-target"
    );
    const cursor = cursorRef.current;
    const ring = cursorRingRef.current;

    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
          scale: 0.5,
          backgroundColor: "#FF7F50",
          duration: 0.3,
        });
        gsap.to(ring, { scale: 1.5, borderColor: "#FF7F50", duration: 0.3 });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: "rgba(0,0,0,0.7)",
          duration: 0.3,
        });
        gsap.to(ring, {
          scale: 1,
          borderColor: "rgba(0,0,0,0.5)",
          duration: 0.3,
        });
      });
    });
  }, []);


  return (
    <main className="relative bg-[#FFF9ED] min-h-screen overflow-hidden px-6">
      {/* Loader */}
      {loading && <Loader onComplete={handleComplete} />}

      {/* Floating Cursor */}
      <div
        ref={cursorRingRef}
        className="hidden md:block pointer-events-none fixed top-0 left-0 w-12 h-12 rounded-full border border-black/50 z-[9998] transform"
      />
      <div
        ref={cursorRef}
        className="hidden md:block pointer-events-none fixed top-0 left-0 w-2 h-2 rounded-full bg-black/70 z-[9999] transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Page content */}
      <div ref={pageRef} className="opacity-0 transition-all duration-700">
        <Navbar />
        <HeroSection />
        <CompleteTransportation />
        <StayConnected />
        <DriveSafely />
        <HowItWorks />
        <Committed />
        <ChildsSafety />

        <Footer />  
      </div>
    </main>
  );
}
