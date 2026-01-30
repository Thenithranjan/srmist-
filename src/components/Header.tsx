import { Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Activity className="w-6 h-6 text-primary" />
            <span className="font-semibold text-lg">EcoSense</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("solution")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection("dashboard")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Dashboard
            </button>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => scrollToSection("dashboard")}
            >
              Open Dashboard
            </Button>
          </nav>
          
          {/* Mobile status indicator */}
          <div className="md:hidden flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground">ONLINE</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
