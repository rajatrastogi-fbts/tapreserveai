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
  Timer, DollarSign, ThumbsUp, Sparkles
} from "lucide-react";
// POS Logos
import accessPos from "@/assets/pos-logos/access-pos.jpg";
import adloggs from "@/assets/pos-logos/adloggs.jpg";
import agilysys from "@/assets/pos-logos/agilysys.jpg";
import allpos from "@/assets/pos-logos/allpos.jpg";
import amepos from "@/assets/pos-logos/amepos.png";
import app4 from "@/assets/pos-logos/app4.jpg";
import bestpos from "@/assets/pos-logos/bestpos.png";
import billberry from "@/assets/pos-logos/billberry.jpg";
import bimpos from "@/assets/pos-logos/bimpos.png";
import bitsila from "@/assets/pos-logos/bitsila.jpg";
import biz1book from "@/assets/pos-logos/biz1book.jpg";
import bluelotus from "@/assets/pos-logos/bluelotus.png";
import bravery from "@/assets/pos-logos/bravery.jpg";
import bridge from "@/assets/pos-logos/bridge.jpg";
import captainpad from "@/assets/pos-logos/captainpad.jpg";
import cibo from "@/assets/pos-logos/cibo.webp";
import ciferon from "@/assets/pos-logos/ciferon.jpg";
import cwsuite from "@/assets/pos-logos/cwsuite.jpg";
import cypheron from "@/assets/pos-logos/cypheron.png";
import datamate from "@/assets/pos-logos/datamate.webp";
import devourin from "@/assets/pos-logos/devourin.jpg";
import dgtera from "@/assets/pos-logos/dgtera.png";
import digirestro from "@/assets/pos-logos/digirestro.png";
import digitory from "@/assets/pos-logos/digitory.jpg";
import dineorder from "@/assets/pos-logos/dineorder.jpg";
import dineplan from "@/assets/pos-logos/dineplan.webp";
import dinnerdaddy from "@/assets/pos-logos/dinnerdaddy.jpg";
import dinopos from "@/assets/pos-logos/dinopos.png";
import eretail from "@/assets/pos-logos/eretail.png";
import ezee from "@/assets/pos-logos/ezee.jpg";
import flipdish from "@/assets/pos-logos/flipdish.jpg";
import flipoffice from "@/assets/pos-logos/flipoffice.jpg";
import foaps from "@/assets/pos-logos/foaps.png";
import fodista from "@/assets/pos-logos/fodista.png";
import foodics from "@/assets/pos-logos/foodics.png";
import forkpos from "@/assets/pos-logos/forkpos.png";
import fusion from "@/assets/pos-logos/fusion.jpg";
import g5pos from "@/assets/pos-logos/g5pos.webp";
import geidea from "@/assets/pos-logos/geidea.jpg";
import gofrugal from "@/assets/pos-logos/gofrugal.png";
import grafterr from "@/assets/pos-logos/grafterr.jpg";
import hungerbox from "@/assets/pos-logos/hungerbox.png";
import idine from "@/assets/pos-logos/idine.png";
import jpos from "@/assets/pos-logos/jpos.jpg";
import kayana from "@/assets/pos-logos/kayana.jpg";
import kuber from "@/assets/pos-logos/kuber.jpg";
import kurve from "@/assets/pos-logos/kurve.jpg";
import lightspeed from "@/assets/pos-logos/lightspeed.png";
import lsretail from "@/assets/pos-logos/lsretail.jpg";
import lucid from "@/assets/pos-logos/lucid.png";
import menew from "@/assets/pos-logos/menew.png";
import microsOracle from "@/assets/pos-logos/micros-oracle.png";
import microsRes3700 from "@/assets/pos-logos/micros-res3700.jpg";
import mygenie from "@/assets/pos-logos/mygenie.jpg";
import mymenu from "@/assets/pos-logos/mymenu.jpg";
import myorderbox from "@/assets/pos-logos/myorderbox.jpg";
import ncrBsl from "@/assets/pos-logos/ncr-bsl.webp";
import nubaSoft from "@/assets/pos-logos/nuba-soft.webp";
import ocim from "@/assets/pos-logos/ocim.webp";
import odoo from "@/assets/pos-logos/odoo.png";
import omakPos from "@/assets/pos-logos/omak-pos.png";
import omegaPos from "@/assets/pos-logos/omega-pos.webp";
import parbrink from "@/assets/pos-logos/parbrink.jpg";
import phenix from "@/assets/pos-logos/phenix.jpg";
import phylo from "@/assets/pos-logos/phylo.jpg";
import polaris from "@/assets/pos-logos/polaris.jpg";
import posbytz from "@/assets/pos-logos/posbytz.png";
import posify from "@/assets/pos-logos/posify.webp";
import positeasy from "@/assets/pos-logos/positeasy.jpg";
import prologic from "@/assets/pos-logos/prologic.webp";
import qo from "@/assets/pos-logos/qo.png";
import qpos from "@/assets/pos-logos/qpos.png";
import qrkey from "@/assets/pos-logos/qrkey.png";
import queuebuster from "@/assets/pos-logos/queuebuster.png";
import radyes from "@/assets/pos-logos/radyes.jpg";
import rancelab from "@/assets/pos-logos/rancelab.webp";
import rawnest from "@/assets/pos-logos/rawnest.jpg";
import restosuite from "@/assets/pos-logos/restosuite.jpg";
import revel from "@/assets/pos-logos/revel.webp";
import romio from "@/assets/pos-logos/romio.jpg";
import royalpos from "@/assets/pos-logos/royalpos.png";
import saag from "@/assets/pos-logos/saag.png";
import sahlhub from "@/assets/pos-logos/sahlhub.webp";
import sapaad from "@/assets/pos-logos/sapaad.webp";
import semnox from "@/assets/pos-logos/semnox.jpg";
import sequential from "@/assets/pos-logos/sequential.jpg";
import sero from "@/assets/pos-logos/sero.jpg";
import sigmoss from "@/assets/pos-logos/sigmoss.png";
import simpletouch from "@/assets/pos-logos/simpletouch.jpg";
import smartpos from "@/assets/pos-logos/smartpos.jpg";
import smartq from "@/assets/pos-logos/smartq.jpg";
import sparktech from "@/assets/pos-logos/sparktech.jpg";
import speque from "@/assets/pos-logos/speque.jpg";
import spotlight from "@/assets/pos-logos/spotlight.webp";
import square from "@/assets/pos-logos/square.jpg";
import squirrel from "@/assets/pos-logos/squirrel.webp";
import stackedin from "@/assets/pos-logos/stackedin.jpg";
import summerpos from "@/assets/pos-logos/summerpos.png";
import sumup from "@/assets/pos-logos/sumup.jpg";
import supy from "@/assets/pos-logos/supy.jpg";
import svika from "@/assets/pos-logos/svika.jpg";
import swiggy from "@/assets/pos-logos/swiggy.jpg";
import synques from "@/assets/pos-logos/synques.jpg";
import syrve from "@/assets/pos-logos/syrve.webp";
import tevalis from "@/assets/pos-logos/tevalis.jpg";
import theondemand from "@/assets/pos-logos/theondemand.jpg";
import thinksoftwares from "@/assets/pos-logos/thinksoftwares.webp";
import tmbill from "@/assets/pos-logos/tmbill.png";
import toast from "@/assets/pos-logos/toast.png";
import touchbistro from "@/assets/pos-logos/touchbistro.png";
import tray from "@/assets/pos-logos/tray.jpg";
import urbandart from "@/assets/pos-logos/urbandart.jpg";
import vada from "@/assets/pos-logos/vada.png";
import vertex from "@/assets/pos-logos/vertex.jpg";
import yotto from "@/assets/pos-logos/yotto.png";
import yourbuddy from "@/assets/pos-logos/yourbuddy.jpg";
import zentrades from "@/assets/pos-logos/zentrades.png";
import threePos from "@/assets/pos-logos/3spos.webp";

const allPOSSystems = [
  { name: "Access POS", logo: accessPos },
  { name: "Adloggs", logo: adloggs },
  { name: "Agilysys", logo: agilysys },
  { name: "All POS", logo: allpos },
  { name: "Amepos", logo: amepos },
  { name: "App4", logo: app4 },
  { name: "BestPOS/FnB 360", logo: bestpos },
  { name: "Billberry", logo: billberry },
  { name: "BIMPOS", logo: bimpos },
  { name: "Bitsila", logo: bitsila },
  { name: "Biz1Book", logo: biz1book },
  { name: "Blue Lotus 360", logo: bluelotus },
  { name: "Bravery", logo: bravery },
  { name: "Bridge POS", logo: bridge },
  { name: "Captain Pad", logo: captainpad },
  { name: "Cibo POS", logo: cibo },
  { name: "Ciferon", logo: ciferon },
  { name: "CW Suite", logo: cwsuite },
  { name: "Cypheron", logo: cypheron },
  { name: "DataMate", logo: datamate },
  { name: "Devourin", logo: devourin },
  { name: "DGtera", logo: dgtera },
  { name: "DigiRestro", logo: digirestro },
  { name: "Digitory", logo: digitory },
  { name: "DineOrder", logo: dineorder },
  { name: "DinePlan", logo: dineplan },
  { name: "Dinner Daddy", logo: dinnerdaddy },
  { name: "Dino POS", logo: dinopos },
  { name: "E-Retail", logo: eretail },
  { name: "Ezee", logo: ezee },
  { name: "Flipdish", logo: flipdish },
  { name: "Flip Office", logo: flipoffice },
  { name: "FOAPS", logo: foaps },
  { name: "Fodista", logo: fodista },
  { name: "Foodics", logo: foodics },
  { name: "Fork POS", logo: forkpos },
  { name: "Fusion", logo: fusion },
  { name: "G5 POS", logo: g5pos },
  { name: "Geidea", logo: geidea },
  { name: "GoFrugal", logo: gofrugal },
  { name: "Grafterr", logo: grafterr },
  { name: "Hungerbox", logo: hungerbox },
  { name: "iDine", logo: idine },
  { name: "JPOS", logo: jpos },
  { name: "Kayana", logo: kayana },
  { name: "Kuber", logo: kuber },
  { name: "Kurve", logo: kurve },
  { name: "Lightspeed", logo: lightspeed },
  { name: "LS Retail", logo: lsretail },
  { name: "Lucid", logo: lucid },
  { name: "Menew", logo: menew },
  { name: "Micros Oracle", logo: microsOracle },
  { name: "Micros RES 3700", logo: microsRes3700 },
  { name: "My Genie", logo: mygenie },
  { name: "MyMenu", logo: mymenu },
  { name: "My Order Box", logo: myorderbox },
  { name: "NCR BSL", logo: ncrBsl },
  { name: "Nuba Soft", logo: nubaSoft },
  { name: "OCIM", logo: ocim },
  { name: "Odoo", logo: odoo },
  { name: "Omak POS", logo: omakPos },
  { name: "Omega POS", logo: omegaPos },
  { name: "Parbrink", logo: parbrink },
  { name: "Phenix", logo: phenix },
  { name: "Phylo", logo: phylo },
  { name: "Polaris", logo: polaris },
  { name: "Posbytz", logo: posbytz },
  { name: "Posify", logo: posify },
  { name: "Posit Easy", logo: positeasy },
  { name: "Prologic", logo: prologic },
  { name: "QO", logo: qo },
  { name: "QPOS", logo: qpos },
  { name: "QR Key", logo: qrkey },
  { name: "Queue Buster", logo: queuebuster },
  { name: "Radyes", logo: radyes },
  { name: "Rancelab", logo: rancelab },
  { name: "Raw Nest", logo: rawnest },
  { name: "Resto Suite", logo: restosuite },
  { name: "Revel", logo: revel },
  { name: "Romio", logo: romio },
  { name: "Royal POS", logo: royalpos },
  { name: "Saag", logo: saag },
  { name: "Sahl Hub", logo: sahlhub },
  { name: "Sapaad", logo: sapaad },
  { name: "Semnox", logo: semnox },
  { name: "Sequential", logo: sequential },
  { name: "Sero", logo: sero },
  { name: "Sigmoss", logo: sigmoss },
  { name: "Simple Touch", logo: simpletouch },
  { name: "Smart POS", logo: smartpos },
  { name: "SmartQ", logo: smartq },
  { name: "Sparktech", logo: sparktech },
  { name: "Speque", logo: speque },
  { name: "Spotlight", logo: spotlight },
  { name: "Square", logo: square },
  { name: "Squirrel", logo: squirrel },
  { name: "Stacked In", logo: stackedin },
  { name: "Summer POS", logo: summerpos },
  { name: "SumUp", logo: sumup },
  { name: "Supy", logo: supy },
  { name: "Svika", logo: svika },
  { name: "Swiggy", logo: swiggy },
  { name: "Synques", logo: synques },
  { name: "Syrve", logo: syrve },
  { name: "Tevalis", logo: tevalis },
  { name: "The On Demand", logo: theondemand },
  { name: "Think Softwares", logo: thinksoftwares },
  { name: "TM Bill", logo: tmbill },
  { name: "Toast", logo: toast },
  { name: "TouchBistro", logo: touchbistro },
  { name: "Tray", logo: tray },
  { name: "Urbandart", logo: urbandart },
  { name: "Vada", logo: vada },
  { name: "Vertex", logo: vertex },
  { name: "Yotto", logo: yotto },
  { name: "Your Buddy", logo: yourbuddy },
  { name: "Zentrades", logo: zentrades },
  { name: "3S POS", logo: threePos },
];

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
      <section id="solution" className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center text-white">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium">Our Solution</span>
              </div>

              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                  One Simple QR Code.
                  <br />A World of Possibilities.
                </h2>
                
                <div className="space-y-4 text-xl text-white/90">
                  <p>
                    <strong>TapReserve.AI</strong> is an end-to-end self-ordering and payment
                    platform accessible via any smartphone.
                  </p>
                  <p className="text-2xl font-semibold">
                    Scan. Order. Pay. Enjoy. It's that simple.
                  </p>
                  <p>No app download required. It works directly in the web browser.</p>
                </div>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <QrCode className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70">Scan</div>
                    <div className="text-lg font-semibold">QR Code</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70">Any</div>
                    <div className="text-lg font-semibold">Device</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-elegant animate-fade-in">
              <img
                src={qrImage}
                alt="Scanning QR code with phone to view menu"
                className="w-full h-full object-cover"
              />
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
            <p className="text-xl text-muted-foreground mb-4">
              Seamlessly integrate with 180+ leading POS systems in the UAE and beyond
            </p>
            <p className="text-sm text-muted-foreground">
              Scroll to explore all integrations
            </p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 shadow-elegant">
            <div className="h-[600px] overflow-y-auto pr-4 custom-scrollbar">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {allPOSSystems.map((pos, index) => (
                  <div
                    key={index}
                    className="bg-background border border-border rounded-lg p-4 shadow-soft hover:shadow-elegant transition-all duration-300 flex flex-col items-center justify-center gap-3 min-h-[120px] hover:scale-105"
                  >
                    <img 
                      src={pos.logo} 
                      alt={`${pos.name} logo`}
                      className="h-12 w-auto object-contain"
                    />
                    <h3 className="text-xs font-medium text-muted-foreground text-center">
                      {pos.name}
                    </h3>
                  </div>
                ))}
                <div className="bg-gradient-hero text-white rounded-lg p-4 shadow-soft flex flex-col items-center justify-center gap-3 min-h-[120px]">
                  <div className="text-3xl font-bold">+48</div>
                  <p className="text-xs text-center opacity-90">More Systems</p>
                </div>
              </div>
            </div>
            <div className="text-center pt-6 border-t border-border mt-6">
              <span className="text-lg font-semibold text-primary">
                180+ POS Systems Supported
              </span>
            </div>
          </div>
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
