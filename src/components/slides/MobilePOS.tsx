import SlideLayout from "./SlideLayout";
import { Smartphone, CreditCard, Wifi, Zap, ShieldCheck, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Mobile POS Solution",
    description: "Transform any smartphone or tablet into a powerful point of sale system for on-the-go transactions.",
  },
  {
    icon: CreditCard,
    title: "EDC Machine Integration",
    description: "Seamlessly integrate with EDC (Electronic Data Capture) machines for secure card payments.",
  },
  {
    icon: Wifi,
    title: "Offline Capability",
    description: "Continue operations even without internet connectivity, syncing data when back online.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process orders and payments in seconds with optimized mobile performance.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Compliant",
    description: "Bank-grade encryption and PCI-DSS compliance for all transactions.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Analytics",
    description: "Track sales, inventory, and performance metrics instantly on any device.",
  },
];

export default function MobilePOS() {
  return (
    <SlideLayout>
      <div className="space-y-12">
        <div className="text-center space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Mobile POS & EDC Integration
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto">
            Accept payments anywhere, anytime with our mobile-first point of sale solution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            <strong className="text-foreground">Empower your staff</strong> to take orders and process payments tableside, 
            at outdoor events, or anywhere in your venue. No fixed terminals needed.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
