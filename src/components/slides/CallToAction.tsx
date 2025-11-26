import SlideLayout from "./SlideLayout";
import { Calendar, Zap, DollarSign, Mail, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import successImage from "@/assets/success-restaurant.jpg";

const nextSteps = [
  {
    icon: Calendar,
    title: "Schedule a Demo",
    description: "See MenuFlow in action with a personalized walkthrough",
  },
  {
    icon: Zap,
    title: "14-Day Free Trial",
    description: "No credit card required. Start serving smarter today",
  },
  {
    icon: DollarSign,
    title: "Custom Quote",
    description: "Get pricing tailored to your restaurant's needs",
  },
];

export default function CallToAction() {
  return (
    <SlideLayout background="image" backgroundImage={successImage}>
      <div className="text-center text-white space-y-12">
        <div className="space-y-6 animate-slide-up">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            The Future is Contactless.
            <br />
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              The Future is MenuFlow.
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto">
            Let's Build the Future of Your Restaurant, Together
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 pt-8 max-w-6xl mx-auto">
          {nextSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 shadow-elegant"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-white/80 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6 pt-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-foreground hover:bg-white/90 shadow-elegant text-lg px-8 py-6 h-auto"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 shadow-elegant text-lg px-8 py-6 h-auto"
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold mb-4">Contact Information</h4>
            <div className="flex flex-wrap justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span>menuflow.ai</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>hello@menuflow.ai</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          <p className="text-lg text-white/80 max-w-4xl mx-auto pt-4">
            The shift to digital, contactless experiences is not a trend; it's the new standard. 
            With MenuFlow, you're not just keeping up; <strong className="text-white">you're leaping ahead</strong>.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
