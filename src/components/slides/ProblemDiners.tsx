import SlideLayout from "./SlideLayout";
import { Clock, CreditCard, FileQuestion, Zap } from "lucide-react";
import customerImage from "@/assets/customer-wait.jpg";

const frustrations = [
  {
    icon: Clock,
    title: '"Where\'s our server?"',
    description: "The anxiety of waiting to order or get the bill",
  },
  {
    icon: CreditCard,
    title: '"Can we split the bill?"',
    description: "The awkward and time-consuming payment process",
  },
  {
    icon: FileQuestion,
    title: '"I can\'t read the menu."',
    description: "The desire for clarity, photos, and customization",
  },
  {
    icon: Zap,
    title: "The Demand for Control",
    description: "73% prefer brands offering self-service options",
    source: "Touchscreen Research",
  },
];

export default function ProblemDiners() {
  return (
    <SlideLayout>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-elegant order-2 lg:order-1">
          <img
            src={customerImage}
            alt="Impatient customers waiting"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-8 order-1 lg:order-2">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">
              The Modern Diner is{" "}
              <span className="text-secondary">Impatient</span>
            </h2>
            <p className="text-2xl text-muted-foreground">
              And We Don't Blame Them.
            </p>
          </div>

          <div className="space-y-6">
            {frustrations.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border shadow-soft hover:shadow-elegant transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    {item.description}
                  </p>
                  {item.source && (
                    <p className="text-sm text-muted-foreground/60 mt-1">
                      Source: {item.source}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
