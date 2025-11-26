import SlideLayout from "./SlideLayout";
import qo from "@/assets/pos-logos/qo.png";
import queuebuster from "@/assets/pos-logos/queuebuster.png";
import radyes from "@/assets/pos-logos/radyes.jpg";
import rancelab from "@/assets/pos-logos/rancelab.webp";
import rawnest from "@/assets/pos-logos/rawnest.jpg";
import restosuite from "@/assets/pos-logos/restosuite.jpg";
import revel from "@/assets/pos-logos/revel.webp";
import romio from "@/assets/pos-logos/romio.jpg";
import royalpos from "@/assets/pos-logos/royalpos.png";
import saag from "@/assets/pos-logos/saag.png";
import sahlhub from "@/assets/pos-logos/sahlhub.webp";
import sapaad from "@/assets/pos-logos/sapaad.webp";

const posSystemsUAE = [
  { name: "QO", logo: qo },
  { name: "QueueBuster", logo: queuebuster },
  { name: "Radyes", logo: radyes },
  { name: "RanceLab", logo: rancelab },
  { name: "RAWNEST", logo: rawnest },
  { name: "RestoSuite", logo: restosuite },
  { name: "Revel", logo: revel },
  { name: "Romio Technologies", logo: romio },
  { name: "Royal POS", logo: royalpos },
  { name: "SAAG Systems", logo: saag },
  { name: "Sahlhub", logo: sahlhub },
  { name: "Sapaad", logo: sapaad },
];

export default function POSIntegrations7() {
  return (
    <SlideLayout background="subtle">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Available POS Integrations
          </h2>
          <p className="text-2xl text-muted-foreground">
            Leading POS Systems - Part 7
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
          <div
            className="bg-gradient-subtle border-2 border-primary/30 rounded-lg p-6 shadow-soft flex flex-col items-center justify-center gap-3 animate-fade-in min-h-[120px]"
            style={{ animationDelay: `${posSystemsUAE.length * 0.1}s` }}
          >
            <span className="text-4xl font-bold text-primary">+48</span>
            <h3 className="text-sm font-semibold text-foreground text-center">
              More Systems
            </h3>
          </div>
        </div>

        <div className="text-center pt-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-lg font-semibold text-primary">
              Page 7 of 7
            </span>
            <span className="text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">
              12 POS Systems
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            <strong className="text-foreground">Total: 132+ POS Integrations</strong> Available Worldwide
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
