import SlideLayout from "./SlideLayout";
import prologic from "@/assets/pos-logos/prologic.webp";
import rancelab from "@/assets/pos-logos/rancelab.webp";
import revel from "@/assets/pos-logos/revel.webp";
import sahlhub from "@/assets/pos-logos/sahlhub.webp";
import sapaad from "@/assets/pos-logos/sapaad.webp";
import spotlight from "@/assets/pos-logos/spotlight.webp";
import squirrel from "@/assets/pos-logos/squirrel.webp";
import syrve from "@/assets/pos-logos/syrve.webp";
import thinksoftwares from "@/assets/pos-logos/thinksoftwares.webp";
import tmbill from "@/assets/pos-logos/tmbill.png";

const posSystemsUAE = [
  { name: "Prologic", logo: prologic },
  { name: "Rancelab", logo: rancelab },
  { name: "Revel", logo: revel },
  { name: "Sahlhub", logo: sahlhub },
  { name: "Sapaad", logo: sapaad },
  { name: "Spotlight", logo: spotlight },
  { name: "Squirrel", logo: squirrel },
  { name: "Syrve", logo: syrve },
  { name: "Thinksoftwares", logo: thinksoftwares },
  { name: "TMBill", logo: tmbill },
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
          <div
            className="bg-gradient-subtle border-2 border-primary/30 rounded-lg p-6 shadow-soft flex flex-col items-center justify-center gap-3 animate-fade-in min-h-[120px]"
            style={{ animationDelay: `${posSystemsUAE.length * 0.1}s` }}
          >
            <span className="text-4xl font-bold text-primary">+</span>
            <h3 className="text-sm font-semibold text-foreground text-center">
              & Many More
            </h3>
          </div>
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
