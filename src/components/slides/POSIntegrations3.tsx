import SlideLayout from "./SlideLayout";
import { CheckCircle2 } from "lucide-react";

const posSystemsUAE = [
  { name: "Prologic", category: "Live" },
  { name: "Rancelab", category: "Live" },
  { name: "Revel", category: "Live" },
  { name: "Sahlhub", category: "Live" },
  { name: "Sapaad", category: "Live" },
  { name: "Spotlight", category: "Live" },
  { name: "Squirrel", category: "Live" },
  { name: "Syrve", category: "Live" },
  { name: "Thinksoftwares", category: "Live" },
  { name: "TMBill", category: "Live" },
];

export default function POSIntegrations3() {
  return (
    <SlideLayout background="subtle">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Available POS Integrations
          </h2>
          <p className="text-2xl text-muted-foreground">
            Leading POS Systems in UAE - Part 3
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto pt-2">
            TapReserve.AI integrates with all major POS platforms in the UAE, 
            ensuring smooth operations regardless of your current system.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto pt-4">
          {posSystemsUAE.map((pos, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-4 shadow-soft hover:shadow-elegant transition-all duration-300 flex items-center gap-3 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
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
              Page 3 of 3
            </span>
            <span className="text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">
              10 POS Systems
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            <strong className="text-foreground">Total: 32 POS Integrations</strong> (31 Live + 1 Upcoming)
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
