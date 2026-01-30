import { Cpu, Gauge, Power, Monitor } from "lucide-react";

const components = [
  {
    icon: Cpu,
    name: "ESP8266",
    description: "Edge logic + WiFi",
  },
  {
    icon: Gauge,
    name: "INA219",
    description: "High-precision power sensing",
  },
  {
    icon: Power,
    name: "Relay Module",
    description: "Hardware cut-off",
  },
  {
    icon: Monitor,
    name: "OLED Display",
    description: "Local status display",
  },
];

const HardwareSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What's Inside EcoSense
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {components.map((component, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <component.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono font-semibold text-foreground">
                    {component.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {component.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Closing statement */}
          <div className="mt-12 text-center">
            <p className="text-xl font-semibold text-muted-foreground">
              No black boxes. No cloud lock-in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardwareSection;
