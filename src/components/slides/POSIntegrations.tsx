import SlideLayout from "./SlideLayout";
import pos3s from "@/assets/pos-logos/3spos.webp";
import amepos from "@/assets/pos-logos/amepos.png";
import bimpos from "@/assets/pos-logos/bimpos.png";
import cibo from "@/assets/pos-logos/cibo.webp";
import datamate from "@/assets/pos-logos/datamate.webp";
import dgtera from "@/assets/pos-logos/dgtera.png";
import dineplan from "@/assets/pos-logos/dineplan.webp";
import foodics from "@/assets/pos-logos/foodics.png";
import forkpos from "@/assets/pos-logos/forkpos.png";
import fodista from "@/assets/pos-logos/fodista.png";
import g5pos from "@/assets/pos-logos/g5pos.webp";

const posSystemsUAE = [
  { name: "3sPOS", logo: pos3s },
  { name: "Amepos", logo: amepos },
  { name: "BIMPOS", logo: bimpos },
  { name: "Cibo", logo: cibo },
  { name: "Datamate/Hotsoft Purple Key", logo: datamate },
  { name: "Dgtera", logo: dgtera },
  { name: "Dineplan", logo: dineplan },
  { name: "Foodics", logo: foodics },
  { name: "ForkPOS", logo: forkpos },
  { name: "Fodista", logo: fodista },
  { name: "G5POS", logo: g5pos },
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
            Leading POS Systems in UAE - Part 1
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
              className="bg-card border border-border rounded-lg p-6 shadow-soft hover:shadow-elegant transition-all duration-300 flex flex-col items-center justify-center gap-3 animate-fade-in min-h-[120px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={pos.logo} 
                alt={`${pos.name} logo`}
                className="h-12 w-auto object-contain"
              />
              <h3 className="text-xs font-medium text-muted-foreground text-center">
                {pos.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-lg font-semibold text-primary">
              Page 1 of 3
            </span>
            <span className="text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">
              11 POS Systems
            </span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
