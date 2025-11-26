import SlideLayout from "./SlideLayout";
import accessPos from "@/assets/pos-logos/access-pos.jpg";
import adloggs from "@/assets/pos-logos/adloggs.jpg";
import agilysys from "@/assets/pos-logos/agilysys.jpg";
import allpos from "@/assets/pos-logos/allpos.jpg";
import amepos from "@/assets/pos-logos/amepos.png";
import app4 from "@/assets/pos-logos/app4.jpg";
import bestpos from "@/assets/pos-logos/bestpos.png";
import billberry from "@/assets/pos-logos/billberry.jpg";
import bimpos from "@/assets/pos-logos/bimpos.png";
import bitsila from "@/assets/pos-logos/bitsila.jpg";
import biz1book from "@/assets/pos-logos/biz1book.jpg";
import bluelotus from "@/assets/pos-logos/bluelotus.png";

const posSystemsUAE = [
  { name: "Access POS", logo: accessPos },
  { name: "Adloggs", logo: adloggs },
  { name: "Agilysys", logo: agilysys },
  { name: "All POS", logo: allpos },
  { name: "Amepos", logo: amepos },
  { name: "App4", logo: app4 },
  { name: "BestPOS/FnB 360", logo: bestpos },
  { name: "Billberry", logo: billberry },
  { name: "BIMPOS", logo: bimpos },
  { name: "Bitsila", logo: bitsila },
  { name: "Biz1Book", logo: biz1book },
  { name: "Blue Lotus 360", logo: bluelotus },
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
            Leading POS Systems - Part 1
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
              Page 1 of 7
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
