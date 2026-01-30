import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import DashboardSection from "@/components/sections/DashboardSection";
import FirewallSection from "@/components/sections/FirewallSection";
import OfflineSection from "@/components/sections/OfflineSection";
import VampireSection from "@/components/sections/VampireSection";
import HardwareSection from "@/components/sections/HardwareSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <DashboardSection />
        <FirewallSection />
        <OfflineSection />
        <VampireSection />
        <HardwareSection />
        <RoadmapSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
