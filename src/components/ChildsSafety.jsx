"use client";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ChildsSafety() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const leftRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🔹 Text (Left side) animation
      gsap.from(leftRef.current, {
        x: -150,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // 🔹 Image (Right side) animation
      gsap.from(imageRef.current, {
        x: 150,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // 🔹 Mouse Parallax Effect
      const section = sectionRef.current;
      const image = imageRef.current;

      section.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        gsap.to(image, { x, y, duration: 0.6, ease: "power2.out" });
      });

      section.addEventListener("mouseleave", () => {
        gsap.to(image, { x: 0, y: 0, duration: 0.8, ease: "power3.out" });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ===== Desktop Section ===== */}
      <section
        ref={sectionRef}
        className="hidden lg:block w-full relative rounded-[25px] bg-[#24211D] overflow-hidden px-6 py-6"
      >
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div
            ref={leftRef}
            className="space-y-6 text-left"
            style={{ marginLeft: "5rem" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-[500] leading-snug text-white">
              Your child’s <br /> safety starts here.
            </h2>
            <p className="font-outfit text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg">
              Join GuardianRide today and experience transparent, reliable, and
              secure school transportation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-outfit font-medium hover:bg-gray-100 transition">
                Get Started
                <RiArrowRightSLine size={18} />
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-outfit font-medium hover:bg-gray-100 transition">
                Book a Demo
                <RiArrowRightSLine size={18} />
              </button>
            </div>
          </div>

          {/* Right Column (Image + Parallax + Scroll Animations) */}
          <div
            ref={imageRef}
            className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-[25px] overflow-hidden"
          >
            <Image
              src="/images/childs-safety.png"
              alt="Child's Safety"
              fill
              className="object-cover rounded-[25px]"
            />
          </div>
        </div>
      </section>

      {/* ===== Mobile Section (No animation) ===== */}
      <section className="lg:hidden mt-24 w-full relative rounded-[25px] bg-[#24211D] overflow-hidden px-6 py-6">
        <div className="w-full grid grid-cols-1 gap-8 items-center">
          {/* Image First */}
          <div className="relative w-full h-[300px] sm:h-[400px] rounded-[25px] overflow-hidden">
            <Image
              src="/images/childs-safety.png"
              alt="Child's Safety"
              fill
              className="object-cover rounded-[25px]"
            />
          </div>

          {/* Text Content */}
          <div className="w-full flex flex-col space-y-4 text-left">
            <h2 className="text-3xl font-[500] leading-snug text-white">
              Your child’s <br /> safety starts here.
            </h2>
            <p className="font-outfit text-gray-300 text-base leading-relaxed">
              Join GuardianRide today and experience transparent, reliable, and
              secure school transportation.
            </p>
            <div className="flex gap-4 pt-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-outfit font-medium text-[12px] hover:bg-gray-100 transition">
                Get Started
                <RiArrowRightSLine size={16} />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-outfit font-medium text-[12px] hover:bg-gray-100 transition">
                Book a Demo
                <RiArrowRightSLine size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
