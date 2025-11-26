import SlideLayout from "./SlideLayout";
import { Zap, TrendingUp, BarChart3 } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Increased Efficiency",
    description: "Streamlined operations lead to faster service, empowering staff to focus on customer satisfaction.",
    highlight: "Faster operations",
  },
  {
    icon: TrendingUp,
    title: "Higher Revenue",
    description: "Enhanced guest experiences translate into repeat customers, driving overall revenue growth for restaurants.",
    highlight: "More revenue",
  },
  {
    icon: BarChart3,
    title: "Data Driven Insights",
    description: "Comprehensive analytics provide actionable insights enabling strategic decisions that enhance operations and profits.",
    highlight: "Smart decisions",
  },
];

export default function ValueForRestaurants() {
  return (
    <SlideLayout>
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Value for Restaurants
          </h2>
          <p className="text-2xl text-muted-foreground">
            Grow Your Business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-hero rounded-full text-white text-sm font-semibold shadow-lg">
                {value.highlight}
              </div>

              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {value.description}
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
