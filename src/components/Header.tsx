import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Problems", id: "problems" },
    { label: "Solution", id: "solution" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Features", id: "features" },
    { label: "POS Systems", id: "pos-integrations" },
    { label: "Benefits", id: "benefits" },
    { label: "Contact", id: "cta" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            TapReserve.AI
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => window.location.href = '/presentation'}
              variant="outline"
              size="sm"
            >
              View Slides
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-3 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => window.location.href = '/presentation'}
              variant="outline"
              size="sm"
              className="w-full"
            >
              View Slides
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
