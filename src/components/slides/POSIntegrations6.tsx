import SlideLayout from "./SlideLayout";
import omakPos from "@/assets/pos-logos/omak-pos.png";
import omegaPos from "@/assets/pos-logos/omega-pos.webp";
import parbrink from "@/assets/pos-logos/parbrink.jpg";
import phenix from "@/assets/pos-logos/phenix.jpg";
import phylo from "@/assets/pos-logos/phylo.jpg";
import polaris from "@/assets/pos-logos/polaris.jpg";
import posbytz from "@/assets/pos-logos/posbytz.png";
import posify from "@/assets/pos-logos/posify.webp";
import positeasy from "@/assets/pos-logos/positeasy.jpg";
import prologic from "@/assets/pos-logos/prologic.webp";
import qpos from "@/assets/pos-logos/qpos.png";
import qrkey from "@/assets/pos-logos/qrkey.png";

const posSystemsUAE = [
  { name: "OMAK POS", logo: omakPos },
  { name: "OMEGA POS Technology", logo: omegaPos },
  { name: "PAR Brink", logo: parbrink },
  { name: "Phenix POS", logo: phenix },
  { name: "Phylo POS", logo: phylo },
  { name: "Polaris Technology", logo: polaris },
  { name: "PosBytz", logo: posbytz },
  { name: "Posify", logo: posify },
  { name: "Positeasy", logo: positeasy },
  { name: "Prologic", logo: prologic },
  { name: "QPos", logo: qpos },
  { name: "QRKey Pos", logo: qrkey },
];

export default function POSIntegrations6() {
  return (
    <SlideLayout background="subtle">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Available POS Integrations
          </h2>
          <p className="text-2xl text-muted-foreground">
            Leading POS Systems - Part 6
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
              Page 6 of 7
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
