import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "gradient" | "subtle" | "image";
  backgroundImage?: string;
}

export default function SlideLayout({
  children,
  className,
  background = "default",
  backgroundImage,
}: SlideLayoutProps) {
  return (
    <div
      className={cn(
        "relative w-full h-full flex items-center justify-center p-12 md:p-16 lg:p-20",
        background === "gradient" && "bg-gradient-hero",
        background === "subtle" && "bg-gradient-subtle",
        background === "default" && "bg-background",
        className
      )}
      style={
        background === "image" && backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className="w-full max-w-7xl mx-auto animate-fade-in">{children}</div>
    </div>
  );
}
