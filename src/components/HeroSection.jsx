"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="w-full mx-auto lg:mt-5 rounded-[25px] bg-cover bg-center flex flex-col justify-center px-3"
      style={{
        backgroundImage: "url(/images/hero-bg.png)",
        paddingTop: "25rem",
        paddingBottom: "2rem",
      }}
    >
      {/* Desktop Heading */}
      <h1
        className="hidden lg:block text-white font-[500] leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[95px] lg:ml-16"
      >
        GuardianRide <br />
        The Future of Safe <br />
        Student Transportation
      </h1>

      {/* Mobile Heading */}
      <h1
        className="block lg:hidden text-white font-[500] leading-tight text-[40px]"
      >
        GuardianRide <br />
        The Future of <br />
        Safe Student <br /> Transportation
      </h1>
    </section>
  );
}
