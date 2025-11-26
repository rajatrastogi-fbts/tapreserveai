import SlideLayout from "./SlideLayout";
import heroImage from "@/assets/hero-dining.jpg";

export default function TitleSlide() {
  return (
    <SlideLayout background="image" backgroundImage={heroImage}>
      <div className="text-center text-white space-y-6 animate-slide-up">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          MenuFlow
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl font-light max-w-4xl mx-auto">
          The Future of Dining is Here
        </p>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto pt-4">
          Revolutionizing Restaurant Operations with Seamless Self-Ordering
        </p>
        <div className="pt-8 text-lg text-white/80">
          [Presenter Name] | [Date]
        </div>
      </div>
    </SlideLayout>
  );
}
