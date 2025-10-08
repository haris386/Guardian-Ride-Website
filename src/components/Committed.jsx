"use client";
import Image from "next/image";

export default function Committed() {
  return (
    <>
      {/* Desktop Section */}
      <section className="hidden sm:block w-full mx-auto mt-12 relative rounded-[25px] overflow-hidden px-6 py-16">
        <div className="max-w-[85%] mx-auto flex flex-col items-start text-left space-y-1">
          {/* Line 1: Committed + image + To */}
          <div className="flex items-center flex-wrap gap-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl xl:text-[6.8rem] font-[500] leading-tight font-lexend text-[#5A684E]">
              Committed
            </h2>
            <Image
              src="/images/committed.png"
              alt="Committed"
              width={220}
              height={80}
              className="w-[120px] sm:w-[160px] md:w-[200px] xl:w-[220px] h-auto rounded-[20px]"
            />
            <h2 className="text-3xl sm:text-5xl md:text-6xl xl:text-[6.8rem] font-[500] leading-tight font-lexend text-[#5A684E]">
              To
            </h2>
          </div>

          {/* Line 2: Safer Rides */}
          <div className="flex items-center flex-wrap gap-4">
            <div className="relative w-[120px] sm:w-[160px] md:w-[200px] xl:w-[220px] h-[150px] rounded-[20px] overflow-hidden">
              <Image
                src="/images/safer-rides.png"
                alt="Safer Rides"
                fill
                className="object-contain rounded-[20px]"
              />
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl xl:text-[6.8rem] font-[500] leading-tight font-lexend text-[#5A684E]">
              Safer Rides,
            </h2>
          </div>

          {/* Line 3: Clearer Oversight */}
          <div className="flex items-center flex-wrap gap-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl xl:text-[6.8rem] font-[500] leading-tight font-lexend text-[#5A684E]">
              Clearer Oversight.
            </h2>

            <div className="relative w-[120px] sm:w-[160px] md:w-[200px] xl:w-[220px] h-[200px] rounded-[20px] overflow-hidden">
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
