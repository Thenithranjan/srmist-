import { Wifi, Cloud, Database, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: Database,
    title: "Bandwidth Waste",
    description: "Most meters transmit '0 Watts' thousands of times a day.",
    consequence: "High bandwidth. Zero intelligence.",
  },
  {
    icon: Cloud,
    title: "Cloud Dependency",
    description: "When WiFi fails, the system becomes dumb.",
    consequence: "No safety. No control.",
  },
  {
    icon: Wifi,
    title: "Data Loss",
    description: "Unstable networks cause missing readings and billing gaps.",
    consequence: "Incomplete records.",
  },
  {
    icon: HelpCircle,
    title: "Gibberish Data",
    description: "Users don't think in Amps and Volts.",
    consequence: "They think in money and risk.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Problem With Today's Smart Meters
          </h2>
          <div className="w-24 h-1 bg-destructive mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg p-6 hover:border-destructive/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {problem.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-3">
                {problem.description}
              </p>
              
              <p className="text-destructive font-mono text-sm font-medium">
                {problem.consequence}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
