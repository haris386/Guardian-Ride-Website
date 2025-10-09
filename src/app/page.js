"use client";
import { useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompleteTransportation from "@/components/CompleteTransportation";
import StayConnected from "@/components/StayConnected";
import DriveSafely from "@/components/DriveSafely";
import HowItWorks from "@/components/HowItWorks";
import Committed from "@/components/Committed";
import ChildsSafety from "@/components/ChildsSafety";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleComplete = () => setLoading(false);

  return (
    <main className="relative bg-[#FFF9ED] min-h-screen overflow-hidden px-6">
      {loading && <Loader onComplete={handleComplete} />}

      <div
        className={`transition-all duration-700 ${
          loading
            ? "blur-lg scale-[1.02] opacity-0"
            : "blur-0 opacity-100 scale-100"
        }`}
      >
        <Navbar />
        <HeroSection />
        <CompleteTransportation />
        <StayConnected />
        <DriveSafely />
        <HowItWorks />
        <Committed />
        <ChildsSafety />
        <Footer />
      </div>
    </main>
  );
}
