"use client";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DriveSafely() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const left1Ref = useRef(null);
  const right1Ref = useRef(null);
  const left2Ref = useRef(null);
  const right2Ref = useRef(null);
  const pills1Ref = useRef([]);
  const pills2Ref = useRef([]);

  const pills = [
    "Manage assigned drivers and vehicles.",
    "Monitor live video & GPS across your fleet.",
    "Automate compliance, reporting, and student logs.",
    "Cut liability and insurance costs with clear oversight.",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ====== Section 1 Animations ======
      gsap.from(left1Ref.current, {
        x: -150,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top 80%",
        },
      });

      gsap.from(right1Ref.current, {
        x: 150,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top 80%",
        },
      });

      gsap.from(pills1Ref.current, {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top 75%",
        },
      });

      // Mouse Parallax (Section 1)
      const section1 = section1Ref.current;
      const image1 = left1Ref.current;
      section1.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        gsap.to(image1, { x, y, duration: 0.6, ease: "power2.out" });
      });
      section1.addEventListener("mouseleave", () => {
        gsap.to(image1, { x: 0, y: 0, duration: 0.8, ease: "power3.out" });
      });

      // ====== Section 2 Animations ======
      gsap.from(left2Ref.current, {
        x: -150,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 80%",
        },
      });

      gsap.from(right2Ref.current, {
        x: 150,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 80%",
        },
      });

      gsap.from(pills2Ref.current, {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 75%",
        },
      });

      // Mouse Parallax (Section 2)
      const section2 = section2Ref.current;
      const image2 = right2Ref.current;
      section2.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        gsap.to(image2, { x, y, duration: 0.6, ease: "power2.out" });
      });
      section2.addEventListener("mouseleave", () => {
        gsap.to(image2, { x: 0, y: 0, duration: 0.8, ease: "power3.out" });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Desktop / Tablet Section */}
      <section className="hidden sm:block w-full mx-auto relative rounded-[25px] overflow-hidden px-6 py-12 pb-0">
        {/* ========== Section 1 ========== */}
        <div
          ref={section1Ref}
          className="max-w-[85%] mx-auto my-10 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center"
        >
          {/* Left Column (Image) */}
          <div ref={left1Ref} className="flex justify-center lg:justify-start">
            <div className="rounded-[20px] overflow-hidden">
              <Image
                src="/images/drive-safely.png"
                alt="Drive Safely"
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Column (Text + Pills) */}
          <div ref={right1Ref} className="flex flex-col space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-[500] leading-snug">
              Drive Safely. Drive
              <br />
              Confidently. Arrive Securely.
            </h2>
            <p className="max-w-md">
              The GuardianRide Driver App empowers drivers to manage routes,
              ensure safety, and stay connected throughout every journey.
            </p>

            {/* Pills */}
            <div className="flex flex-col space-y-3">
              {pills.map((pill, index) => (
                <span
                  key={index}
                  ref={(el) => (pills1Ref.current[index] = el)}
                  className="inline-block px-4 py-4 bg-[#BDAB93] text-white rounded-full text-sm"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Button */}
            <div className="mt-6">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition w-fit">
                Download App <RiArrowRightSLine size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* ========== Section 2 ========== */}
        <div
          ref={section2Ref}
          className="max-w-[85%] mx-auto my-40 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center"
        >
          {/* Right Column (Image) */}
          <div ref={right2Ref} className="order-1 lg:order-2 flex justify-center lg:justify-start">
            <div className="rounded-[20px] overflow-hidden">
              <Image
                src="/images/smarter-dashboard.png"
                alt="Smarter Dashboard"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Left Column (Text + Pills) */}
          <div ref={left2Ref} className="order-2 lg:order-1 flex flex-col space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-[500] leading-snug">
              A Smarter Dashboard <br /> for Safer Schools
            </h2>
            <p className="max-w-md">
              The GuardianRide Dashboard gives schools full control over fleet
              operations, student safety, and compliance in one place.
            </p>

            {/* Pills */}
            <div className="flex flex-col space-y-3">
              {pills.map((pill, index) => (
                <span
                  key={index}
                  ref={(el) => (pills2Ref.current[index] = el)}
                  className="inline-block px-4 py-4 bg-[#BDAB93] text-white rounded-full text-sm"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Button */}
            <div className="mt-6">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition w-fit">
                Book a Demo <RiArrowRightSLine size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Mobile Version (unchanged) ====== */}
      <section className="sm:hidden mt-12 w-full mx-auto relative rounded-[25px] overflow-hidden px-0 py-0 pb-0">
        {/* 1st (Drive Safely) */}
        <div className="max-w-[96%] mx-auto my-10 flex flex-col space-y-4">
          <div className="rounded-[20px] overflow-hidden">
            <Image
              src="/images/drive-safely.png"
              alt="Drive Safely"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col space-y-3">
            <h2 className="text-3xl font-[500] leading-snug">
              Drive Safely. Drive Confidently. Arrive Securely.
            </h2>
            <p className="max-w-md text-[16px]">
              The GuardianRide Driver App empowers drivers to manage routes,
              ensure safety, and stay connected throughout every journey.
            </p>

            <div className="flex flex-col space-y-2">
              {pills.map((pill, index) => (
                <span
                  key={index}
                  className="inline-block px-4 py-3 bg-[#BDAB93] text-white rounded-full text-[11px]"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div className="mt-4">
              <button className="text-[12px] inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-white hover:text-black transition w-fit">
                Download App <RiArrowRightSLine size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* 2nd (Smarter Dashboard) */}
        <div className="max-w-[96%] mx-auto my-20 flex flex-col space-y-4">
          <div className="rounded-[20px] overflow-hidden">
            <Image
              src="/images/smarter-dashboard.png"
              alt="Smarter Dashboard"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col space-y-3">
            <h2 className="text-3xl font-[500] leading-snug">
              A Smarter Dashboard<br /> for Safer Schools
            </h2>
            <p className="max-w-md text-[16px]">
              The GuardianRide Dashboard gives schools full control over fleet
              operations, student safety, and compliance in one place.
            </p>

            <div className="flex flex-col space-y-2">
              {pills.map((pill, index) => (
                <span
                  key={index}
                  className="inline-block px-4 py-3 bg-[#BDAB93] text-white rounded-full text-[11px]"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div className="mt-4">
              <button className="text-[12px] inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-white hover:text-black transition w-fit">
                Book a Demo <RiArrowRightSLine size={12} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
