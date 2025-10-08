"use client";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";

export default function StayConnected() {
  const pills = [
    "Watch a live video feed of every ride.",
    "Track real-time GPS location of the vehicle.",
    "Receive instant alerts on delays or route changes.",
    "Communicate directly with driver & school.",
  ];

  return (
    <>
      {/* Desktop / Tablet Section */}
      <section className="hidden sm:block w-full mx-auto my-24 relative rounded-[25px] bg-[#24211D] overflow-hidden px-6 py-12">
        {/* Right-side spiral image */}
        <div className="absolute top-0 right-0">
          <img
            src="/images/right-side-spiral.png"
            alt="Spiral"
            className="object-contain" style={{width: "675px", height:"877px"}}
          />
        </div>

        <div className="max-w-[85%] mx-auto my-10 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col space-y-6 text-white">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-[500] leading-snug">
              Stay Connected <br />
              Every Step of the Journey
            </h2>
            <p className="text-gray-200 max-w-md">
              With GuardianRide’s mobile app, parents can track rides in real
              time, watch live video, chat instantly with drivers, and stay fully
              informed throughout the journey.
            </p>

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

            <div className="mt-6">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition w-fit">
                Download App <RiArrowRightSLine size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-[20px] overflow-hidden">
              <Image
                src="/images/stay-connected.png"
                alt="Stay Connected"
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Section */}
      <section className="sm:hidden w-full mx-auto relative rounded-[25px] bg-[#24211D] overflow-hidden px-0 py-0" style={{marginTop:"6rem", marginBottom:"0"}}>
         {/* Right-side spiral image */}
        <div className="absolute top-0 right-0">
          <img
            src="/images/right-side-spiral.png"
            alt="Spiral"
            className="object-contain" style={{width: "675px", height:"430px"}}
          />
        </div>

        <div className="max-w-[91%] mx-auto my-5 relative z-10 flex flex-col space-y-6">
          {/* Image First */}
          <div className="rounded-[20px] overflow-hidden w-full">
            <Image
              src="/images/stay-connected.png"
              alt="Stay Connected"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content Second */}
          <div className="flex flex-col space-y-4 text-white">
            <h2 className="text-3xl font-[500] leading-snug">
              Stay Connected <br />
              Every Step of the Journey
            </h2>
            <p className="text-white max-w-md text-[16px]">
              With GuardianRide’s mobile app, parents can track rides in real
              time, watch live video, chat instantly with drivers, and stay fully
              informed throughout the journey.
            </p>

            <div className="flex flex-col space-y-2">
              {pills.map((pill, index) => (
                <span
                  key={index}
                  className="inline-block px-4 py-3 bg-[#BDAB93] rounded-full text-[11px]"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div className="mt-4">
              <button className="text-[12px] inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition w-fit">
                Download App <RiArrowRightSLine size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
