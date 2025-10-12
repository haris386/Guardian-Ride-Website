"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Committed() {
  const textRefs = useRef([]);
  const sectionRef = useRef(null);
  const committedImgRef = useRef(null);
  const saferRidesImgRef = useRef(null);
  const clearerImgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ===== Text gradient setup =====
      textRefs.current.forEach((el) => {
        gsap.set(el, {
          backgroundImage: "linear-gradient(90deg, #5A684E 50%, #c3d6b3 50%)",
          backgroundSize: "200%",
          backgroundPosition: "100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        });
      });

      // ===== Section enter/leave detection =====
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          console.log("✅ Entered section");

          // Animate all 3 images when section enters
          gsap.fromTo(
            committedImgRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
          );
          gsap.fromTo(
            saferRidesImgRef.current,
            { x: -150, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.2 }
          );
          gsap.fromTo(
            clearerImgRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.4 }
          );
        },
        onLeave: () => {
          console.log("🚪 Left section");
        },
        onEnterBack: () => {
          console.log("🔁 Entered section (from bottom)");

          // Replay animations again when scrolling back up
          gsap.fromTo(
            committedImgRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
          );
          gsap.fromTo(
            saferRidesImgRef.current,
            { x: -150, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.2 }
          );
          gsap.fromTo(
            clearerImgRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.4 }
          );
        },
        onLeaveBack: () => {
          console.log("⬆️ Left section (scrolling up)");
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // ===== Hover gradient animation =====
  const handleMouseEnter = () => {
    textRefs.current.forEach((el) => {
      gsap.to(el, {
        backgroundPosition: "0%",
        duration: 1.2,
        ease: "power3.out",
      });
    });
  };

  const handleMouseLeave = () => {
    textRefs.current.forEach((el) => {
      gsap.to(el, {
        backgroundPosition: "100%",
        duration: 1.2,
        ease: "power3.inOut",
      });
    });
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="hidden sm:block w-full mx-auto mt-12 relative rounded-[25px] overflow-hidden px-6 py-16"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-[85%] mx-auto flex flex-col items-start text-left space-y-1">
          {/* Line 1 */}
          <div className="flex items-center flex-wrap gap-4">
            <h2
              ref={(el) => (textRefs.current[0] = el)}
              className="text-3xl sm:text-5xl md:text-6xl xl:text-[6.8rem] font-[500] leading-tight font-lexend"
            >
              Committed
            </h2>
            <div ref={committedImgRef}>
              <Image
                src="/images/committed.png"
                alt="Committed"
                width={220}
                height={80}
                className="w-[120px] sm:w-[160px] md:w-[200px] xl:w-[220px] h-auto rounded-[20px]"
              />
            </div>
            <h2
              ref={(el) => (textRefs.current[1] = el)}
              className="text-3xl sm:text-5xl md:text-6xl xl:text-[6.8rem] font-[500] leading-tight font-lexend"
            >
              To
            </h2>
          </div>

          {/* Line 2 */}
          <div className="flex items-center flex-wrap gap-4">
            <div
              ref={saferRidesImgRef}
              className="relative w-[120px] sm:w-[160px] md:w-[200px] xl:w-[220px] h-[150px] rounded-[20px] overflow-hidden"
            >
              <Image
                src="/images/safer-rides.png"
                alt="Safer Rides"
                fill
                className="object-contain rounded-[20px]"
              />
            </div>
            <h2
              ref={(el) => (textRefs.current[2] = el)}
              className="text-3xl sm:text-5xl md:text-6xl xl:text-[6.8rem] font-[500] leading-tight font-lexend"
            >
              Safer Rides,
            </h2>
          </div>

          {/* Line 3 */}
          <div className="flex items-center flex-wrap gap-4">
            <h2
              ref={(el) => (textRefs.current[3] = el)}
              className="text-3xl sm:text-5xl md:text-6xl xl:text-[6.8rem] font-[500] leading-tight font-lexend pb-4"
            >
              Clearer Oversight.
            </h2>
            <div
              ref={clearerImgRef}
              className="relative w-[120px] sm:w-[160px] md:w-[200px] xl:w-[220px] h-[200px] rounded-[20px] overflow-hidden"
            >
              <Image
                src="/images/clearer-oversight2.png"
                alt="Clearer Oversight"
                fill
                className="object-contain rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Mobile-only Section */}
      <section className="sm:hidden w-full mx-auto mt-12 relative rounded-[25px] overflow-hidden px-0 py-0">
        <div className="w-full flex flex-col items-start text-left space-y-1">
          {/* Line 1: Committed + image + To */}
          <div className="flex items-center flex-wrap gap-4">
            <h2 className="text-[35px] font-[500] leading-tight font-lexend text-[#5A684E]">
              Committed
            </h2>
            <Image
              src="/images/committed.png"
              alt="Committed"
              width={220}
              height={80}
              className="w-[120px] h-auto rounded-[20px]"
            />
          </div>

          {/* Line 2: Safer Rides */}
          <div className="flex items-start gap-4">
            <h2 className="text-[35px] font-[500] leading-tight font-lexend text-[#5A684E]">
              To
            </h2>
            <div className="relative w-[120px] rounded-[10px] overflow-hidden">
              <img
                src="/images/safer-rides2.png"
                alt="Safer Rides"
                className="object-contain rounded-[10px]"
                style={{ width: "100%" }}
              />
            </div>
            <h2 className="text-[35px] font-[500] leading-tight font-lexend text-[#5A684E]">
              Safer
            </h2>
          </div>

          {/* Line 3: Ride Clearer */}
          <div className="flex items-center gap-4">
            <h2 className="text-[35px] font-[500] leading-tight font-lexend text-[#5A684E]">
              Rides Clearer
            </h2>
          </div>
          {/* Line 4: Oversight */}
          <div className="flex items-center gap-4">
            <h2 className="text-[35px] font-[500] leading-tight font-lexend text-[#5A684E]">
              Oversight.
            </h2>

            <div className="relative w-[120px] rounded-[10px] overflow-hidden">
              <img
                src="/images/clearer-oversight2.png"
                alt="Safer Rides"
                className="object-contain rounded-[10px]"
                style={{ width: "100%", height:"85px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
