"use client";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";

export default function ChildsSafety() {
  return (
    <>
      {/* Desktop Section */}
      <section className="hidden lg:block w-full relative rounded-[25px] bg-[#24211D] overflow-hidden px-6 py-6">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6 text-left" style={{ marginLeft: "5rem" }}>
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

          {/* Right Column (Image) */}
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-[25px] overflow-hidden">
            <Image
              src="/images/childs-safety.png"
              alt="Child's Safety"
              fill
              className="object-cover rounded-[25px]"
            />
          </div>
        </div>
      </section>

      {/* Mobile Section */}
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

          {/* Content Second */}
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
