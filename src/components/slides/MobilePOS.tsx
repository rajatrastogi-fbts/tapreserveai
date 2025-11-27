import SlideLayout from "./SlideLayout";
import { LayoutGrid, Users, FileText, TrendingUp } from "lucide-react";

const features = [
  {
    icon: LayoutGrid,
    title: "Table Management System",
    items: [
      "Digital floor plan with drag-and-drop",
      "Real-time table status & occupancy",
      "Online reservations & waitlist",
      "Customer preferences & special occasions"
    ]
  },
  {
    icon: Users,
    title: "Waiter Management",
    items: [
      "Automatic section-wise table assignment",
      "Workload balancing & performance tracking",
      "Commission tracking for upselling",
      "Waiter KPIs & customer feedback scores"
    ]
  },
  {
    icon: FileText,
    title: "KOT/BOT Management",
    items: [
      "Instant printing to kitchen & bar",
      "Course-wise order timing control",
      "Real-time order status tracking",
      "Automatic alerts for delayed orders"
    ]
  },
  {
    icon: TrendingUp,
    title: "Advanced Features",
    items: [
      "Menu engineering & profitability analysis",
      "Cooking preferences & allergy alerts",
      "Smart upselling & combo suggestions",
      "Real-time menu updates & pricing"
    ]
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

        <div className="grid md:grid-cols-2 gap-6 pt-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-base leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
