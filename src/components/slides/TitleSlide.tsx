import SlideLayout from "./SlideLayout";
import heroImage from "@/assets/hero-dining.jpg";
import tapreserveLogo from "@/assets/tapreserve-logo.png";

export default function TitleSlide() {
  return (
    <SlideLayout background="image" backgroundImage={heroImage}>
      <div className="text-center text-white space-y-6 animate-slide-up">
        <div className="flex justify-center mb-4">
          <img 
            src={tapreserveLogo} 
            alt="TapReserve.AI" 
            className="h-24 md:h-32 lg:h-40 w-auto brightness-0 invert"
          />
        </div>
        <p className="text-2xl md:text-3xl lg:text-4xl font-light max-w-4xl mx-auto">
          The Future of Dining is Here
        </p>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto pt-4">
          Revolutionizing Restaurant Operations with Seamless Self-Ordering
        </p>
        <div className="pt-8">
          <p className="text-lg md:text-xl text-white/95 font-medium bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-3 inline-block">
            Now exclusively with Network International LLC in UAE
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
