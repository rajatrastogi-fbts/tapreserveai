import SlideLayout from "./SlideLayout";
import lsretail from "@/assets/pos-logos/lsretail.jpg";
import lucid from "@/assets/pos-logos/lucid.png";
import menew from "@/assets/pos-logos/menew.png";
import microsOracle from "@/assets/pos-logos/micros-oracle.png";
import microsRes from "@/assets/pos-logos/micros-res3700.jpg";
import mygenie from "@/assets/pos-logos/mygenie.jpg";
import mymenu from "@/assets/pos-logos/mymenu.jpg";
import myorderbox from "@/assets/pos-logos/myorderbox.jpg";
import ncrBsl from "@/assets/pos-logos/ncr-bsl.webp";
import nubaSoft from "@/assets/pos-logos/nuba-soft.webp";
import ocim from "@/assets/pos-logos/ocim.webp";
import odoo from "@/assets/pos-logos/odoo.png";

const posSystemsUAE = [
  { name: "LS Retail", logo: lsretail },
  { name: "Lucid", logo: lucid },
  { name: "Menew", logo: menew },
  { name: "Micros Oracle Symphony Gen 2", logo: microsOracle },
  { name: "Micros Oracle RES 3700", logo: microsRes },
  { name: "MyGenie", logo: mygenie },
  { name: "Mymenu", logo: mymenu },
  { name: "MyOrderBox", logo: myorderbox },
  { name: "NCR BSL", logo: ncrBsl },
  { name: "Nuba Soft", logo: nubaSoft },
  { name: "Ocim", logo: ocim },
  { name: "Odoo", logo: odoo },
];

export default function POSIntegrations5() {
  return (
    <SlideLayout background="subtle">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Available POS Integrations
          </h2>
          <p className="text-2xl text-muted-foreground">
            Leading POS Systems - Part 5
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
              Page 5 of 7
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
