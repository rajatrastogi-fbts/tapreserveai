import tapreserveLogo from "@/assets/tapreserve-logo.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-center">
          <div className="h-12 md:h-14 overflow-hidden flex items-center">
            <img 
              src={tapreserveLogo} 
              alt="TapReserve.AI" 
              className="h-[250%] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
