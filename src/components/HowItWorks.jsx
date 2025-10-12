"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

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

  useEffect(() => {
    const cards = cardsRef.current;

    // Reset all card positions
    gsap.set(cards, {
      opacity: 0,
      transformPerspective: 800,
    });

    // Left side cards (1st & 2nd)
    gsap.fromTo(
      [cards[0], cards[1]],
      {
        x: -200,
        rotateY: -120,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1.5,
          toggleActions: "play reverse play reverse",
        },
        x: 0,
        rotateY: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
      }
    );

    // Right side cards (3rd & 4th)
    gsap.fromTo(
      [cards[2], cards[3]],
      {
        x: 200,
        rotateY: 120,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1.5,
          toggleActions: "play reverse play reverse",
        },
        x: 0,
        rotateY: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full mx-auto relative rounded-[25px] bg-[#24211D] overflow-hidden px-6 py-16"
    >
      {/* Decorative Spiral */}
      <div className="absolute top-0 right-0 opacity-30">
        <img
          src="/images/right-side-spiral.png"
          alt="Spiral"
          className="object-contain"
          style={{ width: "555px", height: "730px" }}
        />
      </div>

      {/* Text Section */}
      <div className="max-w-[85%] mx-auto relative z-10 text-white text-left space-y-6">
        <h2 className="text-3xl sm:text-4xl font-[500] leading-snug">
          How It Works
        </h2>
        <p className="max-w-3xl text-gray-300 leading-relaxed">
          GuardianRide makes student transportation simple, safe, and
          connected—allowing parents to assign rides, drivers to follow secure
          routes, and schools to monitor every journey with full oversight and
          peace of mind.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-[85%] mx-auto mt-10 relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="rounded-[20px] p-6 text-white flex flex-col space-y-4 transition-transform duration-300 hover:-translate-y-2 hover:rotate-1"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(44px)",
            }}
          >
            <div className="w-12 h-12 rounded-full bg-white/90 mb-6 shadow-lg"></div>
            <h3 className="text-xl font-[400]">{card.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
