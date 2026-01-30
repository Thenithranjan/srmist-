import { Activity } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Activity className="w-6 h-6 text-primary" />
            <span className="font-semibold text-lg">EcoSense</span>
          </div>
          
          {/* Tagline */}
          <p className="text-muted-foreground text-sm text-center">
            Edge AI Energy Auditor — Safety first. Always on.
          </p>
          
          {/* Status */}
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground font-mono">System Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
