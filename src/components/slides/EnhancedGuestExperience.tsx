import SlideLayout from "./SlideLayout";
import { Clock, Wallet, Sparkles } from "lucide-react";

const experiences = [
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Guests enjoy meals promptly, significantly reducing wait times and enhancing satisfaction.",
    highlight: "Faster service",
  },
  {
    icon: Wallet,
    title: "Easy Payments",
    description: "Seamless payments through QR Scanning make the checkouts quick and hassle free for diners.",
    highlight: "Hassle free",
  },
  {
    icon: Sparkles,
    title: "Personalized Experience",
    description: "Customized menus and offers enhance the dining experience, making it unique for every guest.",
    highlight: "Tailored dining",
  },
];

export default function EnhancedGuestExperience() {
  return (
    <SlideLayout>
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Enhanced Guest Experience
          </h2>
          <p className="text-2xl text-muted-foreground">
            Delight Every Diner
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-hero rounded-full text-white text-sm font-semibold shadow-lg">
                {experience.highlight}
              </div>

              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <experience.icon className="w-8 h-8 text-white" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    {experience.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {experience.description}
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
