import SlideLayout from "./SlideLayout";
import { Check, Zap, TrendingUp, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "2.5%",
    subtitle: "per transaction",
    description: "Perfect for small cafes and food trucks",
    features: [
      "QR code ordering & payment",
      "Digital menu management",
      "Basic analytics",
      "Email support",
      "No monthly fee",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    icon: TrendingUp,
    price: "1.9%",
    subtitle: "per transaction + $99/mo",
    description: "Adds advanced analytics and loyalty features",
    features: [
      "Everything in Starter",
      "Advanced analytics dashboard",
      "Loyalty program integration",
      "Customization options",
      "Priority support",
      "Multi-location support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: "Custom",
    subtitle: "tailored pricing",
    description: "For multi-location chains with full integration",
    features: [
      "Everything in Growth",
      "Full API access",
      "White-label options",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <SlideLayout background="subtle">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Technology That Pays for Itself
          </h2>
          <p className="text-2xl text-muted-foreground">
            Flexible Pricing Plans
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 pt-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 ${
                plan.popular ? "border-2 border-primary ring-4 ring-primary/10" : "border border-border"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-hero rounded-full text-white text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="space-y-6">
                <div className={`w-14 h-14 rounded-2xl ${plan.popular ? 'bg-gradient-hero' : 'bg-muted'} flex items-center justify-center`}>
                  <plan.icon className={`w-7 h-7 ${plan.popular ? 'text-white' : 'text-foreground'}`} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">
                      {plan.subtitle}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-hero text-white hover:opacity-90 shadow-lg"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We believe in a pricing model that <strong className="text-foreground">aligns with your success</strong>. 
            There are no heavy upfront costs. <strong className="text-foreground">We grow when you grow.</strong>
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
