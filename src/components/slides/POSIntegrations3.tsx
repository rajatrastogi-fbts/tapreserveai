import SlideLayout from "./SlideLayout";
import dineorder from "@/assets/pos-logos/dineorder.jpg";
import dineplan from "@/assets/pos-logos/dineplan.webp";
import dinnerdaddy from "@/assets/pos-logos/dinnerdaddy.jpg";
import dinopos from "@/assets/pos-logos/dinopos.png";
import eretail from "@/assets/pos-logos/eretail.png";
import ezee from "@/assets/pos-logos/ezee.jpg";
import flipoffice from "@/assets/pos-logos/flipoffice.jpg";
import flipdish from "@/assets/pos-logos/flipdish.jpg";
import foaps from "@/assets/pos-logos/foaps.png";
import fodista from "@/assets/pos-logos/fodista.png";
import foodics from "@/assets/pos-logos/foodics.png";
import forkpos from "@/assets/pos-logos/forkpos.png";

const posSystemsUAE = [
  { name: "DineOrder", logo: dineorder },
  { name: "Dineplan", logo: dineplan },
  { name: "Dinner Daddy", logo: dinnerdaddy },
  { name: "Dino POS", logo: dinopos },
  { name: "E-retail", logo: eretail },
  { name: "eZee Optimus", logo: ezee },
  { name: "Flip Office", logo: flipoffice },
  { name: "Flipdish", logo: flipdish },
  { name: "Foaps", logo: foaps },
  { name: "Fodista", logo: fodista },
  { name: "Foodics", logo: foodics },
  { name: "ForkPOS", logo: forkpos },
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
            Leading POS Systems - Part 3
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
              Page 3 of 7
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
