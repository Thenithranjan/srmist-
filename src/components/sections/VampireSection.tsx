import { Power, DollarSign, Eye } from "lucide-react";

const VampireSection = () => {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vampire Power Is Real.
            </h2>
            <div className="w-24 h-1 bg-warning mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Explanation */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Devices consume power even when switched off.
              </p>
              
              <div className="bg-card border border-warning/30 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <Power className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xl font-semibold text-foreground mb-2">
                      Your TV is off.
                    </p>
                    <p className="text-warning font-medium">
                      EcoSense knows it's still costing you money.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-muted-foreground">
                <DollarSign className="w-5 h-5" />
                <span>Standby power can account for 10% of your energy bill</span>
              </div>
            </div>
            
            {/* Visual - Power socket with magnifying glass */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-64 h-64">
                {/* Socket base */}
                <div className="absolute inset-0 bg-card border-2 border-border rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-20 bg-secondary rounded-lg relative">
                    {/* Socket holes */}
                    <div className="absolute top-4 left-6 w-3 h-8 bg-background rounded-sm" />
                    <div className="absolute top-4 right-6 w-3 h-8 bg-background rounded-sm" />
                  </div>
                </div>
                
                {/* Magnifying glass overlay */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 rounded-full border-4 border-primary bg-primary/5 backdrop-blur-sm flex items-center justify-center">
                      <Eye className="w-8 h-8 text-primary animate-pulse-slow" />
                    </div>
                    <div className="absolute -bottom-6 -right-2 w-4 h-16 bg-primary/30 rounded-full rotate-45 origin-top" />
                  </div>
                </div>
                
                {/* Power indicator */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-warning flex items-center justify-center animate-pulse">
                  <span className="text-xs font-bold text-warning-foreground">!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VampireSection;
