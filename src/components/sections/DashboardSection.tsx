import { useState, useEffect } from "react";
import { Wifi, WifiOff, Shield, AlertTriangle, Zap, Gauge, Activity, Power } from "lucide-react";

type SystemStatus = "normal" | "warning" | "cutoff";

const DashboardSection = () => {
  const [power, setPower] = useState(847);
  const [voltage, setVoltage] = useState(231.2);
  const [current, setCurrent] = useState(3.67);
  const [systemStatus, setSystemStatus] = useState<SystemStatus>("normal");
  const [wifiStatus, setWifiStatus] = useState(true);
  const [safetyEngine, setSafetyEngine] = useState<"active" | "triggered">("active");
  const [showAlert, setShowAlert] = useState(false);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Random fluctuations
      setPower(prev => Math.max(0, prev + (Math.random() - 0.5) * 50));
      setVoltage(prev => Math.max(220, Math.min(240, prev + (Math.random() - 0.5) * 2)));
      setCurrent(prev => Math.max(0.1, prev + (Math.random() - 0.5) * 0.3));
      
      // Randomly trigger warning state
      if (Math.random() < 0.02) {
        setSystemStatus("warning");
        setTimeout(() => setSystemStatus("normal"), 3000);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Simulate occasional alerts
  useEffect(() => {
    const alertInterval = setInterval(() => {
      if (Math.random() < 0.05) {
        setShowAlert(true);
        setSafetyEngine("triggered");
        setTimeout(() => {
          setShowAlert(false);
          setSafetyEngine("active");
        }, 5000);
      }
    }, 10000);

    return () => clearInterval(alertInterval);
  }, []);

  const getStatusColor = (status: SystemStatus) => {
    switch (status) {
      case "normal": return "text-primary";
      case "warning": return "text-warning";
      case "cutoff": return "text-destructive";
    }
  };

  const getStatusBg = (status: SystemStatus) => {
    switch (status) {
      case "normal": return "bg-primary/10 border-primary/30";
      case "warning": return "bg-warning/10 border-warning/30";
      case "cutoff": return "bg-destructive/10 border-destructive/30";
    }
  };

  return (
    <section id="dashboard" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Live Dashboard
          </h2>
          <p className="text-muted-foreground">Real-time energy monitoring. Industrial grade.</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
        </div>
        
        {/* Alert Banner */}
        {showAlert && (
          <div className="mb-8 bg-destructive/10 border border-destructive rounded-lg p-4 flex items-center gap-4 animate-scale-in glow-destructive">
            <AlertTriangle className="w-6 h-6 text-destructive animate-pulse" />
            <div>
              <p className="font-semibold text-destructive">Overcurrent detected for 5 seconds.</p>
              <p className="text-sm text-muted-foreground">Load disconnected locally.</p>
            </div>
          </div>
        )}
        
        {/* Dashboard Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Power Widget */}
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground text-sm font-mono uppercase tracking-wider">Current Power</span>
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold font-mono text-primary animate-data-tick">
                {power.toFixed(0)}
              </span>
              <span className="text-muted-foreground font-mono">W</span>
            </div>
            <div className="mt-4 h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500 rounded-full"
                style={{ width: `${Math.min(100, (power / 2000) * 100)}%` }}
              />
            </div>
          </div>
          
          {/* Voltage Widget */}
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground text-sm font-mono uppercase tracking-wider">Voltage</span>
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold font-mono text-foreground animate-data-tick">
                {voltage.toFixed(1)}
              </span>
              <span className="text-muted-foreground font-mono">V</span>
            </div>
            <p className="text-xs text-muted-foreground mt-4 font-mono">
              Range: 220V - 240V
            </p>
          </div>
          
          {/* Current Widget */}
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground text-sm font-mono uppercase tracking-wider">Current</span>
              <Gauge className="w-5 h-5 text-primary" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold font-mono text-foreground animate-data-tick">
                {current.toFixed(2)}
              </span>
              <span className="text-muted-foreground font-mono">A</span>
            </div>
            <p className="text-xs text-muted-foreground mt-4 font-mono">
              Max: 10A
            </p>
          </div>
          
          {/* System Status */}
          <div className={`bg-card border rounded-lg p-6 transition-colors ${getStatusBg(systemStatus)}`}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground text-sm font-mono uppercase tracking-wider">System Status</span>
              <Power className={`w-5 h-5 ${getStatusColor(systemStatus)}`} />
            </div>
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${systemStatus === "normal" ? "bg-primary animate-pulse-glow" : systemStatus === "warning" ? "bg-warning animate-pulse" : "bg-destructive animate-pulse"}`} />
              <span className={`text-2xl font-bold font-mono uppercase ${getStatusColor(systemStatus)}`}>
                {systemStatus}
              </span>
            </div>
          </div>
          
          {/* WiFi Status */}
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground text-sm font-mono uppercase tracking-wider">WiFi Status</span>
              {wifiStatus ? (
                <Wifi className="w-5 h-5 text-primary" />
              ) : (
                <WifiOff className="w-5 h-5 text-warning" />
              )}
            </div>
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${wifiStatus ? "bg-primary" : "bg-warning"} animate-pulse`} />
              <span className="text-2xl font-bold font-mono uppercase text-foreground">
                {wifiStatus ? "Online" : "Offline"}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-4 font-mono">
              {wifiStatus ? "Connected to network" : "Local mode active"}
            </p>
          </div>
          
          {/* Safety Engine */}
          <div className={`bg-card border rounded-lg p-6 transition-colors ${safetyEngine === "triggered" ? "border-warning/50 bg-warning/5" : "border-border hover:border-primary/30"}`}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground text-sm font-mono uppercase tracking-wider">Safety Engine</span>
              <Shield className={`w-5 h-5 ${safetyEngine === "triggered" ? "text-warning" : "text-primary"}`} />
            </div>
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${safetyEngine === "triggered" ? "bg-warning animate-pulse" : "bg-primary"}`} />
              <span className={`text-2xl font-bold font-mono uppercase ${safetyEngine === "triggered" ? "text-warning" : "text-primary"}`}>
                {safetyEngine}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-4 font-mono">
              {safetyEngine === "triggered" ? "Responding to event" : "Monitoring active"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
