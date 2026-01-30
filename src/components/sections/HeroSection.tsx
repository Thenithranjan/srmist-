import { Button } from "@/components/ui/button";
import { ArrowRight, Activity } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Animated circuit lines */}
      <div className="absolute inset-0 circuit-lines animate-data-flow opacity-30" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      
      {/* Glowing orb effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
          <Activity className="w-4 h-4 text-primary animate-pulse-glow" />
          <span className="text-sm font-mono text-primary">Edge AI Energy Auditor</span>
        </div>
        
        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto">
          <span className="text-foreground">Your Smart Meter Shouldn't Go Blind </span>
          <span className="text-primary text-glow-primary">When WiFi Dies.</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          EcoSense processes energy data locally, enforces safety rules instantly, and sends only meaningful data to the cloud.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => scrollToSection("dashboard")}
          >
            Open Live Dashboard
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button 
            variant="heroOutline" 
            size="xl"
            onClick={() => scrollToSection("solution")}
          >
            How EcoSense Works
          </Button>
        </div>
        
        {/* Status indicators */}
        <div className="mt-16 flex items-center justify-center gap-8 text-sm font-mono">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-muted-foreground">Edge Processing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-muted-foreground">Offline Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-muted-foreground">Safety First</span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
