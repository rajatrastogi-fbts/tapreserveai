import SlideLayout from "./SlideLayout";
import { Gift, Heart, Award } from "lucide-react";

export default function CustomerLoyalty() {
  return (
    <SlideLayout>
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Customer Loyalty Program
          </h2>
          <p className="text-2xl text-muted-foreground">
            Drive Repeat Business
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-12 shadow-elegant">
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-lg">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <div className="w-20 h-20 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-lg">
                <Gift className="w-10 h-10 text-white" />
              </div>
              <div className="w-20 h-20 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
            </div>

            <div className="text-center space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Fully configurable to each merchant's setup, enabling tailored rewards and earning rules.
              </p>
              <p className="text-2xl text-foreground font-semibold">
                Customers automatically earn points whenever they make payments through the platform.
              </p>
              <div className="pt-6">
                <div className="inline-block px-8 py-4 bg-gradient-hero rounded-full text-white text-lg font-semibold shadow-lg">
                  Build lasting customer relationships
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-8">
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Turn first-time visitors into <strong className="text-foreground">loyal advocates</strong>. 
            Our smart loyalty system rewards customers automatically, driving repeat visits and increasing lifetime value.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
