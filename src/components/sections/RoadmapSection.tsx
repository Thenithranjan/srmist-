import { Brain, Trophy, Mic, TrendingUp } from "lucide-react";

const milestones = [
  {
    icon: Brain,
    title: "AI Load Identification",
    description: "Recognize appliances by their power fingerprints.",
    status: "research",
  },
  {
    icon: Trophy,
    title: "Green Score",
    description: "Gamified energy efficiency comparison.",
    status: "planned",
  },
  {
    icon: Mic,
    title: "Voice Integration",
    description: "Ask for energy status verbally.",
    status: "planned",
  },
  {
    icon: TrendingUp,
    title: "Dynamic Tariffs",
    description: "Run heavy loads when electricity is cheaper.",
    status: "planned",
  },
];

const RoadmapSection = () => {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Future Roadmap
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-6"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-16 flex-shrink-0 justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  </div>
                  
                  {/* Card */}
                  <div className="flex-1 bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <milestone.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
