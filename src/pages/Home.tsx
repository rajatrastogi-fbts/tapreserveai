import Header from "@/components/Header";
import heroImage from "@/assets/hero-dining.jpg";
import customerImage from "@/assets/customer-wait.jpg";
import problemImage from "@/assets/problem-stressed.jpg";
import qrImage from "@/assets/qr-scan.jpg";
import successImage from "@/assets/success-restaurant.jpg";
import { Button } from "@/components/ui/button";
import { 
  Clock, Users, TrendingUp, Zap, Shield, CheckCircle2,
  Smartphone, QrCode, Utensils, CreditCard, Star, BarChart,
  LayoutGrid, FileText, Wifi, TrendingDown, AlertCircle,
  Timer, DollarSign, ThumbsUp
} from "lucide-react";
import POSIntegrations from "@/components/slides/POSIntegrations";
import POSIntegrations2 from "@/components/slides/POSIntegrations2";
import POSIntegrations3 from "@/components/slides/POSIntegrations3";
import POSIntegrations4 from "@/components/slides/POSIntegrations4";
import POSIntegrations5 from "@/components/slides/POSIntegrations5";
import POSIntegrations6 from "@/components/slides/POSIntegrations6";
import POSIntegrations7 from "@/components/slides/POSIntegrations7";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            TapReserve.AI
          </h1>
          <p className="text-2xl md:text-4xl font-light mb-4">
            The Future of Dining is Here
          </p>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Revolutionizing Restaurant Operations with Seamless Self-Ordering
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-3">
            <p className="text-lg md:text-xl font-medium">
              Now exclusively with Network International LLC in UAE
            </p>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Industry is Struggling</h2>
            <p className="text-2xl text-primary font-semibold">We Have the Cure.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-3xl font-bold mb-8">Restaurant Challenges</h3>
              {[
                { icon: Users, title: "Labor Shortages", desc: "69% of restaurants facing staffing challenges", source: "National Restaurant Association, 2023" },
                { icon: TrendingDown, title: "Rising Costs", desc: "Food costs up 25%, labor costs rising faster than revenue" },
                { icon: Timer, title: "Slow Table Turnover", desc: "Average table turnover: 45-90 minutes, limiting revenue potential" },
                { icon: AlertCircle, title: "Order Errors", desc: "Manual order taking leads to mistakes, waste, and unhappy customers" },
              ].map((problem, i) => (
                <div key={i} className="flex gap-4 bg-card border border-border rounded-xl p-6 shadow-soft hover:shadow-elegant transition-all">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center">
                      <problem.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{problem.title}</h4>
                    <p className="text-muted-foreground mb-1">{problem.desc}</p>
                    {problem.source && (
                      <p className="text-xs text-muted-foreground italic">{problem.source}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="animate-fade-in">
              <img src={problemImage} alt="Restaurant challenges" className="rounded-2xl shadow-elegant w-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in order-2 md:order-1">
              <img src={customerImage} alt="Waiting customers" className="rounded-2xl shadow-elegant w-full" />
            </div>
            <div className="space-y-6 animate-fade-in order-1 md:order-2">
              <h3 className="text-3xl font-bold mb-8">Diners Are Impatient</h3>
              {[
                { icon: Clock, title: "Long Wait Times", desc: "60% of diners will leave if wait exceeds 15 minutes", source: "OpenTable, 2023" },
                { icon: AlertCircle, title: "Service Delays", desc: "Average wait to order: 10-15 minutes during peak hours" },
                { icon: CreditCard, title: "Payment Friction", desc: "Waiting for the bill is the #1 dining frustration", source: "Toast Restaurant Survey, 2023" },
                { icon: TrendingDown, title: "Poor Experience", desc: "73% won't return after a bad service experience" },
              ].map((problem, i) => (
                <div key={i} className="flex gap-4 bg-card border border-border rounded-xl p-6 shadow-soft hover:shadow-elegant transition-all">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center">
                      <problem.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{problem.title}</h4>
                    <p className="text-muted-foreground mb-1">{problem.desc}</p>
                    {problem.source && (
                      <p className="text-xs text-muted-foreground italic">{problem.source}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Introducing TapReserve.AI</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The intelligent self-ordering platform that transforms restaurant operations while delighting guests
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img src={qrImage} alt="QR code scanning" className="rounded-2xl shadow-elegant w-full" />
            </div>
            <div className="space-y-6 animate-fade-in">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-soft">
                <h3 className="text-2xl font-bold mb-4">For Restaurants</h3>
                <ul className="space-y-3">
                  {[
                    "Reduce labor costs by 30%",
                    "Increase table turnover by 25%",
                    "Eliminate order errors",
                    "Boost average order value by 20%",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 shadow-soft">
                <h3 className="text-2xl font-bold mb-4">For Diners</h3>
                <ul className="space-y-3">
                  {[
                    "Order instantly at your table",
                    "No waiting for service",
                    "Complete control over your experience",
                    "Pay when you're ready to leave",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-muted-foreground">Simple, fast, and seamless</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: QrCode, title: "Scan QR Code", desc: "Guest scans the QR code at their table" },
              { icon: Smartphone, title: "Browse & Order", desc: "View menu, customize items, and place order" },
              { icon: Utensils, title: "Kitchen Receives", desc: "Order goes directly to kitchen/bar" },
              { icon: CreditCard, title: "Pay & Go", desc: "Pay securely when ready to leave" },
            ].map((step, i) => (
              <div key={i} className="relative animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features</h2>
            <p className="text-xl text-muted-foreground">Everything you need to run a modern restaurant</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              { icon: LayoutGrid, title: "Table Management", desc: "Digital floor plans with real-time status and reservations" },
              { icon: Users, title: "Waiter Management", desc: "Smart assignment, performance tracking, and workload balancing" },
              { icon: FileText, title: "KOT/BOT Management", desc: "Instant printing to kitchen/bar with real-time order tracking" },
              { icon: Smartphone, title: "Mobile POS", desc: "Turn any device into a powerful point of sale system" },
              { icon: BarChart, title: "Analytics Dashboard", desc: "Real-time insights into sales, performance, and trends" },
              { icon: Shield, title: "Secure Payments", desc: "Bank-grade encryption and PCI-DSS compliance" },
            ].map((feature, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 shadow-lg">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile POS Details */}
          <div className="bg-gradient-subtle rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Mobile POS Solution</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: LayoutGrid,
                  title: "Table Management System",
                  items: [
                    "Digital floor plan with drag-and-drop",
                    "Real-time table status & occupancy",
                    "Online reservations & waitlist",
                    "Customer preferences & special occasions"
                  ]
                },
                {
                  icon: Users,
                  title: "Waiter Management",
                  items: [
                    "Automatic section-wise table assignment",
                    "Workload balancing & performance tracking",
                    "Commission tracking for upselling",
                    "Waiter KPIs & customer feedback scores"
                  ]
                },
                {
                  icon: FileText,
                  title: "KOT/BOT Management",
                  items: [
                    "Instant printing to kitchen & bar",
                    "Course-wise order timing control",
                    "Real-time order status tracking",
                    "Automatic alerts for delayed orders"
                  ]
                },
                {
                  icon: TrendingUp,
                  title: "Advanced Features",
                  items: [
                    "Menu engineering & profitability analysis",
                    "Cooking preferences & allergy alerts",
                    "Smart upselling & combo suggestions",
                    "Real-time menu updates & pricing"
                  ]
                },
              ].map((feature, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center shadow-lg">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <h4 className="text-2xl font-bold">{feature.title}</h4>
                      <ul className="space-y-2">
                        {feature.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POS Integrations Section */}
      <section id="pos-integrations" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">POS System Integrations</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Seamlessly integrate with 180+ leading POS systems in the UAE and beyond
            </p>
          </div>

          <Tabs defaultValue="page1" className="w-full">
            <TabsList className="grid w-full grid-cols-7 mb-8">
              <TabsTrigger value="page1">Page 1</TabsTrigger>
              <TabsTrigger value="page2">Page 2</TabsTrigger>
              <TabsTrigger value="page3">Page 3</TabsTrigger>
              <TabsTrigger value="page4">Page 4</TabsTrigger>
              <TabsTrigger value="page5">Page 5</TabsTrigger>
              <TabsTrigger value="page6">Page 6</TabsTrigger>
              <TabsTrigger value="page7">Page 7</TabsTrigger>
            </TabsList>
            
            <TabsContent value="page1" className="space-y-8">
              <POSIntegrations />
            </TabsContent>
            <TabsContent value="page2">
              <POSIntegrations2 />
            </TabsContent>
            <TabsContent value="page3">
              <POSIntegrations3 />
            </TabsContent>
            <TabsContent value="page4">
              <POSIntegrations4 />
            </TabsContent>
            <TabsContent value="page5">
              <POSIntegrations5 />
            </TabsContent>
            <TabsContent value="page6">
              <POSIntegrations6 />
            </TabsContent>
            <TabsContent value="page7">
              <POSIntegrations7 />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Proven Results</h2>
            <p className="text-xl text-muted-foreground">Real impact on your bottom line</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: DollarSign, value: "30%", label: "Labor Cost Reduction" },
              { icon: TrendingUp, value: "25%", label: "Increased Table Turnover" },
              { icon: Star, value: "20%", label: "Higher Order Values" },
              { icon: ThumbsUp, value: "95%", label: "Customer Satisfaction" },
            ].map((stat, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-8 text-center shadow-soft hover:shadow-elegant transition-all animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2 text-primary">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img src={successImage} alt="Successful restaurant" className="rounded-2xl shadow-elegant w-full" />
            </div>
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-3xl font-bold mb-6">Why Restaurants Love Us</h3>
              {[
                { icon: Zap, title: "Faster Service", desc: "Orders reach the kitchen instantly, reducing wait times dramatically" },
                { icon: Users, title: "Better Staff Utilization", desc: "Free your team from order-taking to focus on hospitality" },
                { icon: TrendingUp, title: "Increased Revenue", desc: "Smart upselling and faster table turns boost profitability" },
                { icon: Shield, title: "Error-Free Orders", desc: "No more miscommunication between servers and kitchen" },
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4 bg-card border border-border rounded-xl p-6 shadow-soft hover:shadow-elegant transition-all">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Restaurant?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join the future of dining with TapReserve.AI. Get started today with our exclusive Network International partnership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Schedule a Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TapReserve.AI</h3>
              <p className="text-muted-foreground">
                Revolutionizing restaurant operations with intelligent self-ordering technology.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-foreground">Features</button></li>
                <li><button onClick={() => document.getElementById('pos-integrations')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-foreground">POS Integrations</button></li>
                <li><button onClick={() => window.location.href = '/presentation'} className="text-muted-foreground hover:text-foreground">View Presentation</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-muted-foreground">
                Exclusively with Network International LLC in UAE
              </p>
            </div>
          </div>
          <div className="text-center text-muted-foreground border-t border-border pt-8">
            <p>&copy; 2024 TapReserve.AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
