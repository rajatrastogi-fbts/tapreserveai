import SlideLayout from "./SlideLayout";
import { Users, DollarSign, Bell, LayoutDashboard } from "lucide-react";

const advancedFeatures = [
  {
    icon: Users,
    title: "Collaborative Order",
    description: "Multi-user ordering allows multiple people to scan the same code and add items to the shared table order simultaneously. Live tab syncs - the cart stays open until payment is finalized, guests can keep ordering rounds freely.",
  },
  {
    icon: DollarSign,
    title: "Flexible Payment",
    description: "Split bill functionality lets diners split the check by custom value or equal amounts instantly. Table lock finalizes the session, preventing further orders. Smart tipping with option to pay tip as % of total bill or custom value.",
  },
  {
    icon: Bell,
    title: "Order Fulfillment",
    description: "Waiters get instant notifications of new orders and can mark items as served with clear table status updates. Cashiers have live oversight to monitor all active orders, with payment control options to manually settle bills for cash payments.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin & Management",
    description: "Table management system with digital floor plan showing occupied tables, active orders, and payment status in real-time. Real-time menu updates for items, prices, and out-of-stock toggles. Analytics dashboard tracks sales, table turnover rates, and staff performance metrics.",
  },
];

export default function AdvancedFeatures() {
  return (
    <SlideLayout background="subtle">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Advanced Features
          </h2>
          <p className="text-2xl text-muted-foreground">
            Built for Modern Restaurants
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 pt-8">
          {advancedFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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
      </div>
    </SlideLayout>
  );
}
