"use client";
import Image from "next/image";

export default function CompleteTransportation() {
  return (
    <section className="w-full lg:max-w-[80%] mx-auto mt-24 flex flex-col space-y-6 px-6">
      {/* Row 1: Heading + Paragraph */}
      <div className="flex flex-col md:flex-row justify-between items-end md:items-end space-y-4 md:space-y-0">
        {/* Left Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 leading-snug">
          Your Complete <br /> Transportation Control Center
        </h2>
        {/* Right Paragraph */}
        <p className=" max-w-md md:max-w-sm font-[600]">
          GuardianRide is more than just a ride—it’s a connected system.
        </p>
      </div>

      {/* Row 2: First set of cards */}
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
        {/* Left Card 70% */}
        <div
          className="relative flex-1 md:flex-[7] rounded-[20px] h-64 bg-cover bg-center flex flex-col justify-end p-6"
          style={{ backgroundImage: "url(/images/mobile-app.png)" }}
        >
          <h3 className="text-white font-bold text-xl mb-2">Mobile App</h3>
          <p className="text-white text-sm">
            Real-time tracking, live video, and instant messaging—keeping parents connected and assured.
          </p>
        </div>
        {/* Right Card 30% */}
        <div className="flex-1 md:flex-[3] rounded-[20px] bg-[#BDAB93] p-6 flex flex-col justify-end h-64">
          <h3 className="text-white font-bold text-xl mb-2">Driver App</h3>
          <p className="text-white text-sm">
            Route lock, safety alerts, and one-tap recording—ensuring safer, controlled trips.
          </p>
        </div>
      </div>

      {/* Row 3: Second set of cards */}
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
        {/* Left Card 30% */}
        <div className="flex-1 md:flex-[3] rounded-[20px] bg-[#BDAB93] p-6 flex flex-col justify-end h-64">
          <h3 className="text-white font-bold text-xl mb-2">School Dashboard</h3>
          <p className="text-white text-sm">
            Fleet management, student assignments, compliance reporting.
          </p>
        </div>
        {/* Right Card 70% */}
        <div className="relative flex-1 md:flex-[7] rounded-[20px] bg-[#5A684E] flex flex-col justify-end p-6 h-64">
          <h3 className="text-white font-bold text-xl mb-2">Parent Dashboard</h3>
          <p className="text-white text-sm">
            Trip history, driver details, instant notifications, real-time updates, and full control over your child’s rides.
          </p>
        </div>
      </div>
    </section>
  );
}
