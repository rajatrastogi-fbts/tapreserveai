export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            TapReserve.AI
          </h1>
        </div>
      </div>
    </header>
  );
}
