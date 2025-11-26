import SlideLayout from "./SlideLayout";
import fusion from "@/assets/pos-logos/fusion.jpg";
import g5pos from "@/assets/pos-logos/g5pos.webp";
import geidea from "@/assets/pos-logos/geidea.jpg";
import gofrugal from "@/assets/pos-logos/gofrugal.png";
import grafterr from "@/assets/pos-logos/grafterr.jpg";
import hungerbox from "@/assets/pos-logos/hungerbox.png";
import idine from "@/assets/pos-logos/idine.png";
import jpos from "@/assets/pos-logos/jpos.jpg";
import kayana from "@/assets/pos-logos/kayana.jpg";
import kuber from "@/assets/pos-logos/kuber.jpg";
import kurve from "@/assets/pos-logos/kurve.jpg";
import lightspeed from "@/assets/pos-logos/lightspeed.png";

const posSystemsUAE = [
  { name: "Fusion Innovative", logo: fusion },
  { name: "G5POS", logo: g5pos },
  { name: "Geidea", logo: geidea },
  { name: "GoFrugal", logo: gofrugal },
  { name: "Grafterr/ePOS Hybrid", logo: grafterr },
  { name: "Hungerbox-POS", logo: hungerbox },
  { name: "I-Dine/Innosolv", logo: idine },
  { name: "JPOS/Sanguine", logo: jpos },
  { name: "Kayana POS", logo: kayana },
  { name: "Kuber POS", logo: kuber },
  { name: "Kurve", logo: kurve },
  { name: "Lightspeed", logo: lightspeed },
];

export default function POSIntegrations4() {
  return (
    <SlideLayout background="subtle">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Available POS Integrations
          </h2>
          <p className="text-2xl text-muted-foreground">
            Leading POS Systems - Part 4
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto pt-2">
            TapReserve.AI integrates with all major POS platforms, 
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
              Page 4 of 7
            </span>
            <span className="text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">
              12 POS Systems
            </span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
