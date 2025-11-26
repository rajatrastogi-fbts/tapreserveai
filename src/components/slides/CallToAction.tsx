import SlideLayout from "./SlideLayout";
import { Calendar, Mail, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import successImage from "@/assets/success-restaurant.jpg";

export default function CallToAction() {
  return (
    <SlideLayout background="image" backgroundImage={successImage}>
      <div className="text-center text-white space-y-12">
        <div className="space-y-6 animate-slide-up">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            The Future is Contactless.
            <br />
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              The Future is TapReserve.AI.
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto">
            Let's Build the Future of Your Restaurant, Together
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8 pt-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-12 shadow-elegant">
            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Schedule a Demo</h3>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              See TapReserve.AI in action with a personalized walkthrough
            </p>
            <Button
              size="lg"
              className="bg-white text-foreground hover:bg-white/90 shadow-elegant text-lg px-10 py-6 h-auto font-semibold"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo Now
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <h4 className="text-xl font-bold mb-4">Contact Information</h4>
            <div className="flex flex-col gap-4 text-white/90">
              <div className="flex items-center justify-center gap-2">
                <Globe className="w-5 h-5 flex-shrink-0" />
                <a href="https://tapreserve.storecomm.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  https://tapreserve.storecomm.ai
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <div className="flex flex-wrap gap-2 justify-center">
                  <a href="mailto:rajat@fbts.in" className="hover:text-white transition-colors">rajat@fbts.in</a>
                  <span>||</span>
                  <a href="mailto:rajat@storecomm.ai" className="hover:text-white transition-colors">rajat@storecomm.ai</a>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+971545367475" className="hover:text-white transition-colors">+971 545367475</a>
              </div>
            </div>
          </div>

          <p className="text-lg text-white/80 max-w-4xl mx-auto pt-4">
            The shift to digital, contactless experiences is not a trend; it's the new standard. 
            With TapReserve.AI, you're not just keeping up; <strong className="text-white">you're leaping ahead</strong>.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
