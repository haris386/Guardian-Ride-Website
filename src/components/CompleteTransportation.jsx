"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CompleteTransportation() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",   // jab section 75% viewport me aaye
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Heading & Paragraph reveal
      tl.from(".complete-heading", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(".complete-para", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        }, "-=0.6");

      // Cards stagger animation (left-right parallax style)
      tl.from(".complete-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
      }, "-=0.3");
    }, sectionRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full lg:max-w-[80%] mx-auto mt-24 flex flex-col space-y-6 px-[0px] lg:px-6"
    >
      {/* Row 1: Heading + Paragraph */}
      <div className="flex flex-col md:flex-row justify-between items-end md:items-end space-y-4 md:space-y-0">
        {/* Left Heading */}
        <h2 className="complete-heading text-3xl sm:text-4xl md:text-4xl font-[500] text-gray-900 leading-snug">
          Your Complete <br /> Transportation Control Center
        </h2>

        {/* Right Paragraph */}
        <p className="complete-para max-w-md md:max-w-sm font-[400] text-[20px] capitalize">
          GuardianRide is more than just a ride—it’s a connected system.
        </p>
      </div>

      {/* Row 2: First set of cards */}
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
        {/* Left Card */}
        <div
          className="complete-card relative flex-1 md:flex-[7] rounded-[20px] h-64 bg-cover bg-center flex flex-col justify-end p-6"
          style={{ backgroundImage: "url(/images/mobile-app.png)" }}
        >
          <h3 className="text-white font-[500] text-xl mb-2 mt-[50%] md:mt-0">
            Mobile App
          </h3>
          <p className="text-white text-sm">
            Real-time tracking, live video, and instant messaging—keeping parents connected and assured.
          </p>
        </div>

        {/* Right Card */}
        <div className="complete-card flex-1 md:flex-[3] rounded-[20px] bg-[#BDAB93] p-6 flex flex-col justify-end h-64">
          <h3 className="text-white font-[500] text-xl mb-2 mt-[50%] md:mt-0">
            Driver App
          </h3>
          <p className="text-white text-sm">
            Route lock, safety alerts, and one-tap recording—ensuring safer, controlled trips.
          </p>
        </div>
      </div>

      {/* Row 3: Second set of cards */}
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
        <div className="complete-card flex-1 md:flex-[3] rounded-[20px] bg-[#BDAB93] p-6 flex flex-col justify-end h-64">
          <h3 className="text-white font-[500] text-xl mb-2 mt-[50%] md:mt-0">
            School Dashboard
          </h3>
          <p className="text-white text-sm">
            Fleet management, student assignments, compliance reporting.
          </p>
        </div>

        <div className="complete-card relative flex-1 md:flex-[7] rounded-[20px] bg-[#5A684E] flex flex-col justify-end p-6 h-64">
          <h3 className="text-white font-[500] text-xl mb-2 mt-[50%] md:mt-0">
            Parent Dashboard
          </h3>
          <p className="text-white text-sm">
            Trip history, driver details, instant notifications, real-time updates, and full control over your child’s rides.
          </p>
        </div>
      </div>
    </section>
  );
}
