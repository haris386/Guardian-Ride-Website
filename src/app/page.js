import ChildsSafety from "@/components/ChildsSafety";
import Committed from "@/components/Committed";
import CompleteTransportation from "@/components/CompleteTransportation";
import DriveSafely from "@/components/DriveSafely";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
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
      <DriveSafely />
      <HowItWorks />
      <Committed />
      <ChildsSafety />
      <Footer />
    </main>
  );
}
