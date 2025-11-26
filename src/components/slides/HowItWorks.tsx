import SlideLayout from "./SlideLayout";
import { QrCode, Menu, ShoppingCart, ChefHat } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: QrCode,
    title: "SCAN",
    description: "Customer scans the unique table QR code",
    color: "bg-primary/10 text-primary",
  },
  {
    number: "02",
    icon: Menu,
    title: "BROWSE",
    description: "High-resolution menu with photos and allergen info loads instantly",
    color: "bg-secondary/10 text-secondary",
  },
  {
    number: "03",
    icon: ShoppingCart,
    title: "ORDER & PAY",
    description: "Customer adds items to cart and pays securely in one step",
    color: "bg-accent/10 text-accent",
  },
  {
    number: "04",
    icon: ChefHat,
    title: "POS NOTIFIED",
    description: "Order sent directly to POS system, kitchen printer or KDS",
    color: "bg-muted text-foreground",
  },
];

export default function HowItWorks() {
  return (
    <SlideLayout background="subtle">
      <div className="space-y-12 text-center">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            How It Works in 60 Seconds
          </h2>
          <p className="text-2xl text-muted-foreground">
            The Seamless Dining Journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 h-full flex flex-col">
                <div className="text-7xl font-bold text-muted-foreground/10 mb-4">
                  {step.number}
                </div>
                
                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6`}>
                  <step.icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Arrow - hidden on last item */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                  <div className="absolute -right-1 -top-1 w-2 h-2 bg-secondary rotate-45"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="pt-8">
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The entire process is designed for <strong className="text-foreground">speed and simplicity</strong>. 
            From scan to kitchen, it takes less than a minute, putting the customer in control 
            and freeing up your staff.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
