import SlideLayout from "./SlideLayout";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  return (
    <SlideLayout>
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            What Our Partners Say
          </h2>
          <p className="text-2xl text-muted-foreground">
            Success Stories
          </p>
        </div>

        <div className="relative bg-gradient-hero rounded-3xl p-12 md:p-16 shadow-elegant text-white">
          <Quote className="absolute top-8 left-8 w-16 h-16 text-white/20" />
          
          <div className="relative z-10 space-y-8">
            <div className="flex gap-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>

            <blockquote className="text-2xl md:text-3xl leading-relaxed text-center font-light">
              MenuFlow helped us increase our Friday night turnover by{" "}
              <strong className="font-bold">30%</strong>. Our servers are less stressed 
              and can now focus on providing exceptional service. It's a{" "}
              <strong className="font-bold">game-changer</strong>.
            </blockquote>

            <div className="flex items-center justify-center gap-6 pt-6">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl font-bold">
                MG
              </div>
              <div className="text-left">
                <div className="text-xl font-bold">Maria Gonzalez</div>
                <div className="text-white/80">Owner of "Bella Cucina"</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pt-4">
          {[
            { stat: "30%", label: "Increase in turnover" },
            { stat: "95%", label: "Server satisfaction" },
            { stat: "4.8/5", label: "Customer rating" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center shadow-soft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                {item.stat}
              </div>
              <div className="text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
