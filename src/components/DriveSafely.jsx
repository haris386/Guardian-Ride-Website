"use client";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";

export default function DriveSafely() {
  const pills = [
    "Manage assigned drivers and vehicles.",
    "Monitor live video & GPS across your fleet.",
    "Automate compliance, reporting, and student logs.",
    "Cut liability and insurance costs with clear oversight.",
  ];

  return (
    <>
      {/* Desktop / Tablet Section */}
      <section className="hidden sm:block w-full mx-auto relative rounded-[25px] overflow-hidden px-6 py-12 pb-0">
        {/* 1st Section */}
        <div className="max-w-[85%] mx-auto my-10 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
          {/* Left Column (Image) */}
          <div className="flex justify-center lg:justify-start">
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
          <div className="flex flex-col space-y-6">
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
                  className="inline-block px-4 py-4 bg-[#BDAB93] text-white rounded-full text-sm"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Download App Button */}
            <div className="mt-6">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition w-fit">
                Download App <RiArrowRightSLine size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* 2nd Section */}
        <div className="max-w-[85%] mx-auto my-40 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
          {/* Right Column (Image) */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
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
          <div className="order-2 lg:order-1 flex flex-col space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-[500] leading-snug">
              A Smarter Dashboard <br />
              for Safer Schools
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
                  className="inline-block px-4 py-4 bg-[#BDAB93] text-white rounded-full text-sm"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Book a Demo Button */}
            <div className="mt-6">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition w-fit">
                Book a Demo <RiArrowRightSLine size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Section */}
      <section className="sm:hidden mt-12 w-full mx-auto relative rounded-[25px] overflow-hidden px-0 py-0 pb-0">
        {/* 1st (Drive Safely) */}
        <div className="max-w-[96%] mx-auto my-10 flex flex-col space-y-4">
          {/* Image First */}
          <div className="rounded-[20px] overflow-hidden">
            <Image
              src="/images/drive-safely.png"
              alt="Drive Safely"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content Below */}
          <div className="flex flex-col space-y-3">
              <h2 className="text-3xl font-[500] leading-snug">
              Drive Safely. Drive Confidently. Arrive Securely.
            </h2>
            <p className=" max-w-md text-[16px]">
              The GuardianRide Driver App empowers drivers to manage routes,
              ensure safety, and stay connected throughout every journey.
            </p>

            {/* Pills */}
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

            {/* Button */}
           <div className="mt-4">
              <button className="text-[12px] inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-white hover:text-black transition w-fit">
                Download App <RiArrowRightSLine size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* 2nd (Smarter Dashboard) */}
        <div className="max-w-[96%] mx-auto my-20 flex flex-col space-y-4">
          {/* Image First */}
          <div className="rounded-[20px] overflow-hidden">
            <Image
              src="/images/smarter-dashboard.png"
              alt="Smarter Dashboard"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content Below */}
         <div className="flex flex-col space-y-3">
             <h2 className="text-3xl font-[500] leading-snug">
              A Smarter Dashboard<br /> for Safer Schools
            </h2>
            <p className=" max-w-md text-[16px]">
              The GuardianRide Dashboard gives schools full control over fleet
              operations, student safety, and compliance in one place.
            </p>

            {/* Pills */}
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

            {/* Button */}
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
