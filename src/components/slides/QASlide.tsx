import SlideLayout from "./SlideLayout";
import { MessageCircle } from "lucide-react";

export default function QASlide() {
  return (
    <SlideLayout background="gradient">
      <div className="text-center text-white space-y-12">
        <div className="space-y-6">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm shadow-elegant">
            <MessageCircle className="w-16 h-16" />
          </div>

          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold">
            Questions?
          </h2>

          <p className="text-3xl md:text-4xl text-white/90 max-w-3xl mx-auto">
            We're here to help transform your restaurant experience
          </p>
        </div>

        <div className="pt-12 space-y-8">
          <div className="text-8xl md:text-9xl font-bold text-white/10">
            MenuFlow
          </div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="text-xl">Contact Us</div>
              <div className="text-3xl font-bold">hello@menuflow.ai</div>
              <div className="text-xl">+1 (555) 123-4567</div>
              <div className="text-xl text-white/80 pt-4">
                menuflow.ai
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 text-lg text-white/70">
          Thank you for your time!
        </div>
      </div>
    </SlideLayout>
  );
}
