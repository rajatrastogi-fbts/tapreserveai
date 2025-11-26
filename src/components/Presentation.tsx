import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Import all slides
import TitleSlide from "./slides/TitleSlide";
import ProblemRestaurants from "./slides/ProblemRestaurants";
import ProblemDiners from "./slides/ProblemDiners";
import SolutionIntro from "./slides/SolutionIntro";
import HowItWorks from "./slides/HowItWorks";
import KeyFeatures from "./slides/KeyFeatures";
import Benefits from "./slides/Benefits";
import DemoSlide from "./slides/DemoSlide";
import Pricing from "./slides/Pricing";
import Testimonials from "./slides/Testimonials";
import CallToAction from "./slides/CallToAction";
import QASlide from "./slides/QASlide";

const slides = [
  TitleSlide,
  ProblemRestaurants,
  ProblemDiners,
  SolutionIntro,
  HowItWorks,
  KeyFeatures,
  Benefits,
  DemoSlide,
  Pricing,
  Testimonials,
  CallToAction,
  QASlide,
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {/* Slide Container */}
      <div className="w-full h-full">
        <CurrentSlideComponent key={currentSlide} />
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        {/* Slide Indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === currentSlide
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Slide Counter */}
      <div className="fixed top-8 right-8 z-50 text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}
