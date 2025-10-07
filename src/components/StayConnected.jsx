"use client";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function StayConnected() {
  const pills = [
    "Watch a live video feed of every ride.",
    "Track real-time GPS location of the vehicle.",
    "Receive instant alerts on delays or route changes.",
    "Communicate directly with driver & school.",
  ];

  return (
    <section className="w-full mx-auto my-24 relative rounded-[25px] bg-[#24211D] overflow-hidden px-6 py-12">
      {/* Right-side spiral image */}
      <div className=" absolute top-0 right-0 h-full">
        <Image
          src="/images/right-side-spiral.png"
          alt="Spiral"
          width={300}
          height={500}
          className="object-contain h-full"
        />
      </div>

      {/* Content */}
      <div className="max-w-[85%] mx-auto my-10 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
        {/* Left Column */}
        <div className="flex flex-col space-y-6 text-white">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold leading-snug">
            Stay Connected <br />
            Every Step of the Journey
          </h2>
          <p className="text-gray-200 max-w-md">
            With GuardianRide’s mobile app, parents can track rides in real
            time, watch live video, chat instantly with drivers, and stay fully
            informed throughout the journey.
          </p>

          {/* Pills */}
          <div className="flex flex-col space-y-3">
            {pills.map((pill, index) => (
              <span
                key={index}
                className="inline-block px-4 py-4 bg-[#BDAB93] rounded-full text-sm"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Download App Button */}
          <div className="mt-6">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition w-fit">
              Download App <FiArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex justify-center lg:justify-end">
          <div className="rounded-[20px] overflow-hidden">
            <Image
              src="/images/stay-connected.png"
              alt="Stay Connected"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
