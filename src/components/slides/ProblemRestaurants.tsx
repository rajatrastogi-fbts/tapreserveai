import SlideLayout from "./SlideLayout";
import { TrendingDown, DollarSign, Clock, Percent } from "lucide-react";
import problemImage from "@/assets/problem-stressed.jpg";

const problems = [
  {
    icon: TrendingDown,
    title: "Crippling Labor Shortages",
    description: "62% of operators can't find enough staff",
    source: "NFIB",
  },
  {
    icon: DollarSign,
    title: "Rising Operational Costs",
    description: "Wages, rent, and food costs at all-time high",
  },
  {
    icon: Clock,
    title: "Slow Table Turnover",
    description: "Payment process is the biggest bottleneck",
  },
  {
    icon: Percent,
    title: "The Aggregator Tax",
    description: "High commission fees eating into profits",
  },
];

export default function ProblemRestaurants() {
  return (
    <SlideLayout>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">
              The Industry is{" "}
              <span className="text-destructive">Struggling</span>
            </h2>
            <p className="text-2xl text-primary font-semibold">
              We Have the Cure.
            </p>
          </div>

          <div className="space-y-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border shadow-soft hover:shadow-elegant transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    {problem.description}
                  </p>
                  {problem.source && (
                    <p className="text-sm text-muted-foreground/60 mt-1">
                      Source: {problem.source}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-elegant">
          <img
            src={problemImage}
            alt="Stressed restaurant staff"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </SlideLayout>
  );
}
