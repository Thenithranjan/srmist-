import { ArrowRight, Cloud, Cpu } from "lucide-react";

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 relative bg-secondary/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shift the Brain From Cloud to Edge
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Legacy Model */}
          <div className="bg-card border border-destructive/30 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Cloud className="w-6 h-6 text-destructive" />
              <h3 className="text-xl font-semibold text-destructive">Legacy Cloud Model</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center font-mono text-sm">1</div>
                <span>Measure</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center font-mono text-sm">2</div>
                <span>Send to Cloud</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center font-mono text-sm">3</div>
                <span>Process Remotely</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-destructive/20 flex items-center justify-center font-mono text-sm text-destructive">4</div>
                <span className="text-destructive font-semibold">Act (Too Late)</span>
              </div>
            </div>
          </div>
          
          {/* EcoSense Model */}
          <div className="bg-card border border-primary/30 rounded-lg p-8 glow-primary">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-primary">EcoSense Model</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center font-mono text-sm">1</div>
                <span>Measure</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center font-mono text-sm text-primary">2</div>
                <span className="text-primary font-semibold">Process Locally</span>
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center font-mono text-sm text-primary">3</div>
                <span className="text-primary font-semibold">Act Instantly</span>
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center font-mono text-sm">4</div>
                <span>Log Smart Data</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Highlight statement */}
        <div className="mt-12 text-center">
          <p className="text-xl md:text-2xl font-bold text-primary text-glow-primary">
            EcoSense does not wait for the internet to make safety decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
