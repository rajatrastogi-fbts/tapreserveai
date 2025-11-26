import SlideLayout from "./SlideLayout";
import { TrendingUp, Settings, CreditCard, Heart } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Upsell & Cross-sell",
    description: '"Would you like fries with that?" Automated, intelligent suggestions increase average order value by 20-30%.',
    highlight: "20-30% AOV increase",
  },
  {
    icon: Settings,
    title: "Customization Heaven",
    description: '"No onions, extra spicy." Customers can modify orders easily, reducing kitchen errors.',
    highlight: "90% fewer errors",
  },
  {
    icon: CreditCard,
    title: "Integrated Payments",
    description: "Secure, PCI-compliant payment processing with multiple options (Apple Pay, Google Pay, Credit Card).",
    highlight: "100% secure",
  },
  {
    icon: Heart,
    title: "Smart Loyalty Program",
    description: "Built-in digital loyalty stamps or points to drive repeat business.",
    highlight: "Drive retention",
  },
];

export default function KeyFeatures() {
  return (
    <SlideLayout>
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            More Than Just Ordering
          </h2>
          <p className="text-2xl md:text-3xl bg-gradient-hero bg-clip-text text-transparent font-semibold">
            It's Your Growth Engine
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 pt-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-hero rounded-full text-white text-sm font-semibold shadow-lg">
                {feature.highlight}
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We're not just a utility. <strong className="text-foreground">We're a profit center.</strong> Our smart system 
            suggests add-ons, handles complex customizations, and turns every customer into a potential loyal advocate.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
