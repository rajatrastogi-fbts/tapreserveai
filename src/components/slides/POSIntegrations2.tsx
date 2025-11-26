import SlideLayout from "./SlideLayout";
import { Building2 } from "lucide-react";
import idine from "@/assets/pos-logos/idine.png";
import microsOracle from "@/assets/pos-logos/micros-oracle.png";
import ncrBsl from "@/assets/pos-logos/ncr-bsl.webp";
import nubaSoft from "@/assets/pos-logos/nuba-soft.webp";
import ocim from "@/assets/pos-logos/ocim.webp";
import omakPos from "@/assets/pos-logos/omak-pos.png";
import omegaPos from "@/assets/pos-logos/omega-pos.webp";
import polaris from "@/assets/pos-logos/polaris.jpg";
import posbytz from "@/assets/pos-logos/posbytz.png";
import posify from "@/assets/pos-logos/posify.webp";

const posSystemsUAE = [
  { name: "I-Dine/Innosolv", logo: idine },
  { name: "LS Retail", logo: null },
  { name: "Micros Oracle Symphony Gen 2", logo: microsOracle },
  { name: "NCR BSL", logo: ncrBsl },
  { name: "Nuba Soft", logo: nubaSoft },
  { name: "Ocim", logo: ocim },
  { name: "OMAK POS", logo: omakPos },
  { name: "OMEGA POS Technology", logo: omegaPos },
  { name: "Polaris Technology", logo: polaris },
  { name: "PosBytz", logo: posbytz },
  { name: "Posify", logo: posify },
];

export default function POSIntegrations2() {
  return (
    <SlideLayout background="subtle">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Available POS Integrations
          </h2>
          <p className="text-2xl text-muted-foreground">
            Leading POS Systems in UAE - Part 2
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
              {pos.logo ? (
                <img 
                  src={pos.logo} 
                  alt={`${pos.name} logo`}
                  className="h-12 w-auto object-contain"
                />
              ) : (
                <Building2 className="h-12 w-12 text-muted-foreground/40" />
              )}
              <h3 className="text-xs font-medium text-muted-foreground text-center">
                {pos.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-lg font-semibold text-primary">
              Page 2 of 3
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
