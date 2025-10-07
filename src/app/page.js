import CompleteTransportation from "@/components/CompleteTransportation";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import StayConnected from "@/components/StayConnected";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FFF9ED] px-6">
      <Navbar />
      <HeroSection />
      <CompleteTransportation />
      <StayConnected />
    </main>
  );
}
