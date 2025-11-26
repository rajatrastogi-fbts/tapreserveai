import SlideLayout from "./SlideLayout";
import { TrendingUp, DollarSign, Star, Users, ArrowUp, ArrowDown } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    title: "Boost Revenue",
    metrics: [
      { label: "Table turnover", value: "+25%", trend: "up" },
      { label: "Average order value", value: "+20%", trend: "up" },
    ],
  },
  {
    icon: DollarSign,
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    title: "Reduce Costs",
    metrics: [
      { label: "Ordering errors", value: "-90%", trend: "down" },
      { label: "Menu printing costs", value: "-100%", trend: "down" },
    ],
  },
  {
    icon: Star,
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    title: "Enhance Experience",
    metrics: [
      { label: "Customer satisfaction", value: "+35%", trend: "up" },
      { label: "Staff efficiency", value: "+40%", trend: "up" },
    ],
  },
  {
    icon: Users,
    iconBg: "bg-muted",
    iconColor: "text-foreground",
    title: "Own Your Customers",
    metrics: [
      { label: "Direct marketing list", value: "100%", trend: "up" },
      { label: "Aggregator dependence", value: "-80%", trend: "down" },
    ],
  },
];

export default function Benefits() {
  return (
    <SlideLayout background="gradient">
      <div className="space-y-12 text-white">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">
            Transform Your Business
          </h2>
          <p className="text-2xl text-white/90">
            One Table at a Time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 pt-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6 mb-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${benefit.iconBg} flex items-center justify-center`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.iconColor}`} />
                </div>
                <h3 className="text-3xl font-bold flex-1 pt-3">
                  {benefit.title}
                </h3>
              </div>

              <div className="space-y-4">
                {benefit.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10"
                  >
                    <span className="text-lg text-white/90">{metric.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold">{metric.value}</span>
                      {metric.trend === "up" ? (
                        <ArrowUp className="w-5 h-5 text-green-400" />
                      ) : (
                        <ArrowDown className="w-5 h-5 text-green-400" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <p className="text-xl md:text-2xl leading-relaxed">
            The result? A <strong>direct impact</strong> on your most important metrics. 
            More revenue per table, lower operational costs, and happier customers and staff.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
