"use client";
import Image from "next/image";

export default function HowItWorks() {
  const cards = [
    {
      title: "Ride Assignment",
      text: "Parents or schools assign student rides through the dashboard, ensuring proper scheduling and planning.",
    },
    {
      title: "Route Lock",
      text: "The driver app locks onto the approved route, reducing risks and ensuring compliance with safety protocols.",
    },
    {
      title: "Live Tracking",
      text: "Parents can track the entire journey via the mobile app, with real-time updates and peace of mind.",
    },
    {
      title: "Fleet Oversight",
      text: "Schools monitor the full fleet in their dashboard, with visibility into trips, drivers, and student safety.",
    },
  ];

  return (
    <>
      {/* Original Section (Desktop + Mobile) */}
      <section className="hidden sm:block w-full mx-auto relative rounded-[25px] bg-[#24211D] overflow-hidden px-6 py-16">
        {/* Right-side spiral image */}
 <div className="absolute top-0 right-0">
          <img
            src="/images/right-side-spiral.png"
            alt="Spiral"
            className="object-contain" style={{width: "555px", height:"730px"}}
          />
        </div>

        {/* Headings and Text Section */}
        <div className="max-w-[85%] mx-auto relative z-10 text-white text-left space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-[500] leading-snug">
            How It Works
          </h2>
          <p className="max-w-3xl text-gray-300 leading-relaxed">
            GuardianRide makes student transportation simple, safe, and
            connected—allowing parents to assign rides, drivers to follow secure
            routes, and schools to monitor every journey with full oversight and
            peace of mind.
          </p>
        </div>

        {/* Cards Section */}
        <div className="max-w-[85%] mx-auto mt-6 relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-[20px] p-6 text-white flex flex-col space-y-4 "
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)",
                border: "1px solid gray",
                backdropFilter: "blur(44px)",
              }}
            >
              <div className="w-12 h-12 rounded-full bg-white/90 mb-6"></div>
              <h3 className="text-xl font-[400]">{card.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile-only duplicate */}
      <section className="sm:hidden w-full mx-auto relative rounded-[25px] bg-[#24211D]  overflow-hidden px-6 py-16">
        {/* Right-side spiral image */}
        <div className="absolute top-0 right-0 h-full">
          <Image
            src="/images/right-side-spiral.png"
            alt="Spiral"
            width={300}
            height={500}
            className="object-contain h-full opacity-40"
          />
        </div>

        {/* Headings and Text Section */}
        <div className="max-w-[100%] mx-auto relative z-10 text-white text-left space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-[500] leading-snug">
            How It Works
          </h2>
          <p className="max-w-full text-gray-300 leading-relaxed">
            GuardianRide makes student transportation simple, safe, and
            connected—allowing parents to assign rides, drivers to follow secure
            routes, and schools to monitor every journey with full oversight and
            peace of mind.
          </p>
        </div>

        {/* Cards Section */}
        <div className="max-w-[100%] mx-auto mt-6 relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-[20px] p-6 text-white flex flex-col space-y-4 "
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)",
                border: "1px solid gray",
                backdropFilter: "blur(44px)",
              }}
            >
              <div className="w-12 h-12 rounded-full bg-white/90 mb-6"></div>
              <h3 className="text-xl font-[400]">{card.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
