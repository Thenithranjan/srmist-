import { Shield, Zap, AlertTriangle } from "lucide-react";

const rules = [
  {
    id: "01",
    icon: Zap,
    condition: "If current > 1.5A for more than 5 seconds",
    action: "Power is cut.",
    type: "critical",
  },
  {
    id: "02",
    icon: AlertTriangle,
    condition: "If voltage drops below safe limits",
    action: "User is alerted.",
    type: "warning",
  },
];

const FirewallSection = () => {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">
              A Firewall for Electricity
            </h2>
          </div>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {rules.map((rule) => (
            <div
              key={rule.id}
              className={`bg-card border rounded-lg p-6 transition-all duration-300 hover:border-primary/50 ${
                rule.type === "critical" ? "border-destructive/30" : "border-warning/30"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    rule.type === "critical" ? "bg-destructive/10" : "bg-warning/10"
                  }`}>
                    <rule.icon className={`w-6 h-6 ${
                      rule.type === "critical" ? "text-destructive" : "text-warning"
                    }`} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-sm text-muted-foreground">RULE {rule.id}</span>
                  </div>
                  
                  <p className="text-lg mb-2">
                    <span className="text-muted-foreground">{rule.condition}</span>
                    <span className="text-foreground"> → </span>
                    <span className={`font-semibold ${
                      rule.type === "critical" ? "text-destructive" : "text-warning"
                    }`}>
                      {rule.action}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bold statement */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-card border border-primary/30 rounded-lg px-8 py-6 glow-primary">
            <p className="text-xl md:text-2xl font-bold text-primary">
              These rules run on the device. Not in the cloud.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirewallSection;
