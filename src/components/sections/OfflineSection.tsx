import { WifiOff, Check, Database, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Check,
    text: "Safety logic continues running",
  },
  {
    icon: Database,
    text: "Data is logged locally",
  },
  {
    icon: RefreshCw,
    text: "Data syncs automatically when WiFi returns",
  },
];

const OfflineSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <WifiOff className="w-8 h-8 text-warning" />
            <h2 className="text-3xl md:text-4xl font-bold">
              What Happens When WiFi Fails?
            </h2>
          </div>
          
          {/* Big answer */}
          <div className="my-16">
            <p className="text-6xl md:text-8xl font-bold text-primary text-glow-primary">
              Nothing breaks.
            </p>
          </div>
          
          {/* Supporting points */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground font-medium">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfflineSection;
