import SlideLayout from "./SlideLayout";
import { CheckCircle2 } from "lucide-react";

const posSystemsUAE = [
  { name: "3sPOS", category: "Live" },
  { name: "Amepos", category: "Live" },
  { name: "BIMPOS", category: "Live" },
  { name: "Cibo", category: "Live" },
  { name: "Datamate/Hotsoft Purple Key", category: "Live" },
  { name: "Dineplan", category: "Live" },
  { name: "Dgtera", category: "Live" },
  { name: "Foodics", category: "Live" },
  { name: "ForkPOS", category: "Live" },
  { name: "Fodista", category: "Live" },
  { name: "G5POS", category: "Live" },
  { name: "I-Dine/Innosolv", category: "Live" },
  { name: "LS Retail", category: "Live" },
  { name: "Micros Oracle Symphony Gen 2", category: "Live" },
  { name: "NCR BSL", category: "Live" },
  { name: "Nuba Soft", category: "Live" },
  { name: "OMAK POS", category: "Live" },
  { name: "OMEGA POS Technology", category: "Live" },
  { name: "Polaris Technology", category: "Live" },
  { name: "PosBytz", category: "Live" },
  { name: "Posify", category: "Live" },
  { name: "Prologic", category: "Live" },
];

export default function POSIntegrations() {
  return (
    <SlideLayout background="subtle">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Available POS Integrations
          </h2>
          <p className="text-2xl text-muted-foreground">
            Seamlessly Connect with Leading POS Systems in UAE
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto pt-2">
            TapReserve.AI integrates with all major POS platforms in the UAE, 
            ensuring smooth operations regardless of your current system.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {posSystemsUAE.map((pos, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-4 shadow-soft hover:shadow-elegant transition-all duration-300 flex items-center gap-3"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-foreground truncate">
                  {pos.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-lg font-semibold text-primary">
              22+ Live Integrations
            </span>
            <span className="text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">
              Ready to connect today
            </span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
