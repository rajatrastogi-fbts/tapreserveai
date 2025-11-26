import SlideLayout from "./SlideLayout";
import { Play, QrCode, Smartphone, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockScreens = [
  {
    icon: QrCode,
    title: "Table QR Code",
    description: "Elegant table tent with TapReserve.AI QR code",
  },
  {
    icon: Smartphone,
    title: "Digital Menu",
    description: "Beautiful, photo-rich menu interface",
  },
  {
    icon: Monitor,
    title: "Kitchen Display",
    description: "Real-time order management system",
  },
];

export default function DemoSlide() {
  return (
    <SlideLayout>
      <div className="space-y-12 text-center">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            See TapReserve.AI in Action
          </h2>
          <p className="text-2xl text-muted-foreground">
            A Glimpse into the Future
          </p>
        </div>

        {/* Demo Video Placeholder */}
        <div className="relative max-w-5xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl border-2 border-dashed border-primary/50 flex items-center justify-center shadow-elegant">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-hero shadow-elegant">
                <Play className="w-12 h-12 text-white ml-2" />
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-foreground">
                  60-Second Demo Video
                </p>
                <p className="text-lg text-muted-foreground">
                  [Video showcasing customer journey and kitchen integration]
                </p>
              </div>
              <Button size="lg" className="bg-gradient-hero text-white hover:opacity-90 shadow-lg">
                <Play className="w-5 h-5 mr-2" />
                Play Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Feature Screenshots */}
        <div className="grid md:grid-cols-3 gap-8 pt-8">
          {mockScreens.map((screen, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mx-auto mb-4 shadow-lg">
                <screen.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {screen.title}
              </h3>
              <p className="text-muted-foreground">
                {screen.description}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Let's take a quick look at how it works from both the customer's and the restaurant's perspective.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
