import Header from "@/components/Header";
import heroImage from "@/assets/hero-dining.jpg";
import tapreserveLogo from "@/assets/tapreserve-logo.png";
import customerImage from "@/assets/customer-wait.jpg";
import problemImage from "@/assets/problem-stressed.jpg";
import qrImage from "@/assets/qr-scan.jpg";
import successImage from "@/assets/success-restaurant.jpg";
import { Button } from "@/components/ui/button";
import { 
  Clock, Users, TrendingUp, Zap, Shield, CheckCircle2,
  Smartphone, QrCode, Utensils, CreditCard, Star, BarChart,
  LayoutGrid, FileText, Wifi, TrendingDown, AlertCircle,
  Timer, DollarSign, ThumbsUp, Sparkles, FileQuestion,
  Wallet, Heart, Gift, Award, Bell, Calendar, Mail, Phone, Globe,
  ArrowUp, ArrowDown, Quote, Check, Building2
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
          <div className="flex justify-center mb-6">
            <div className="h-24 md:h-32 lg:h-40 overflow-hidden flex items-center">
              <img 
                src={tapreserveLogo} 
                alt="TapReserve.AI" 
                className="h-[200%] w-auto object-contain brightness-0 invert"
              />
            </div>
          </div>
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

      {/* Problems Section - Restaurants */}
      <section id="problems" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold">
                  The Industry is <span className="text-destructive">Struggling</span>
                </h2>
                <p className="text-2xl text-primary font-semibold">
                  We Have the Cure.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: TrendingDown, title: "Crippling Labor Shortages", desc: "62% of operators can't find enough staff", source: "NFIB" },
                  { icon: DollarSign, title: "Rising Operational Costs", desc: "Wages, rent, and food costs at all-time high" },
                  { icon: Clock, title: "Slow Table Turnover", desc: "Payment process is the biggest bottleneck" },
                ].map((problem, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border shadow-soft hover:shadow-elegant transition-all duration-300" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                      <problem.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{problem.title}</h3>
                      <p className="text-muted-foreground mt-1">{problem.desc}</p>
                      {problem.source && (
                        <p className="text-sm text-muted-foreground/60 mt-1">Source: {problem.source}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-elegant animate-fade-in">
              <img src={problemImage} alt="Stressed restaurant staff" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Problems Section - Diners */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-elegant animate-fade-in order-2 lg:order-1">
              <img src={customerImage} alt="Impatient customers waiting" className="w-full h-full object-cover" />
            </div>

            <div className="space-y-8 animate-fade-in order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold">
                  The Modern Diner is <span className="text-secondary">Impatient</span>
                </h2>
                <p className="text-2xl text-muted-foreground">
                  And We Don't Blame Them.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Clock, title: '"Where\'s our server?"', desc: "The anxiety of waiting to order or get the bill" },
                  { icon: CreditCard, title: '"Can we split the bill?"', desc: "The awkward and time-consuming payment process" },
                  { icon: FileQuestion, title: '"I can\'t read the menu."', desc: "The desire for clarity, photos, and customization" },
                  { icon: Zap, title: "The Demand for Control", desc: "73% prefer brands offering self-service options", source: "Touchscreen Research" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border shadow-soft hover:shadow-elegant transition-all duration-300" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground mt-1">{item.desc}</p>
                      {item.source && (
                        <p className="text-sm text-muted-foreground/60 mt-1">Source: {item.source}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
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
              <div key={i} className="relative animate-fade-in h-full" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all text-center h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground flex-grow">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Guest Experience Section */}
      <section id="guest-experience" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold">Enhanced Guest Experience</h2>
            <p className="text-2xl text-muted-foreground">Delight Every Diner</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { icon: QrCode, title: "Contactless Convenience", desc: "Simply scan the QR code at your table to access the full menu instantly. No app download required.", highlight: "No app needed" },
              { icon: Clock, title: "Quick Turnaround", desc: "Guests enjoy meals promptly, significantly reducing wait times and enhancing satisfaction.", highlight: "Faster service" },
              { icon: Wallet, title: "Easy Payments", desc: "Seamless payments through QR Scanning make the checkouts quick and hassle free for diners.", highlight: "Hassle free" },
              { icon: Sparkles, title: "Personalized Experience", desc: "Customized menus and offers enhance the dining experience, making it unique for every guest.", highlight: "Tailored dining" },
            ].map((experience, i) => (
              <div key={i} className="group relative bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-hero rounded-full text-white text-sm font-semibold shadow-lg">
                  {experience.highlight}
                </div>
                <div className="flex flex-col items-center text-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <experience.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">{experience.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{experience.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value for Restaurants Section */}
      <section id="value" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold">Value for Restaurants</h2>
            <p className="text-2xl text-muted-foreground">Grow Your Business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Increased Efficiency", desc: "Streamlined operations lead to faster service, empowering staff to focus on customer satisfaction.", highlight: "Faster operations" },
              { icon: TrendingUp, title: "Higher Revenue", desc: "Enhanced guest experiences translate into repeat customers, driving overall revenue growth for restaurants.", highlight: "More revenue" },
              { icon: BarChart, title: "Data Driven Insights", desc: "Comprehensive analytics provide actionable insights enabling strategic decisions that enhance operations and profits.", highlight: "Smart decisions" },
            ].map((value, i) => (
              <div key={i} className="group relative bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-hero rounded-full text-white text-sm font-semibold shadow-lg">
                  {value.highlight}
                </div>
                <div className="flex flex-col items-center text-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">{value.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transform Your Business Section */}
      <section id="transform" className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold">Transform Your Business</h2>
            <p className="text-2xl text-white/90">One Table at a Time</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                icon: TrendingUp,
                iconBg: "bg-primary/10",
                iconColor: "text-primary",
                title: "Boost Revenue",
                metrics: [
                  { label: "Table turnover", value: "+25%", trend: "up" },
                  { label: "Average order value", value: "+20%", trend: "up" },
                ],
              },
              {
                icon: DollarSign,
                iconBg: "bg-secondary/10",
                iconColor: "text-secondary",
                title: "Reduce Costs",
                metrics: [
                  { label: "Ordering errors", value: "-90%", trend: "down" },
                  { label: "Menu printing costs", value: "-100%", trend: "down" },
                ],
              },
              {
                icon: Star,
                iconBg: "bg-accent/10",
                iconColor: "text-accent",
                title: "Enhance Experience",
                metrics: [
                  { label: "Customer satisfaction", value: "+35%", trend: "up" },
                  { label: "Staff efficiency", value: "+40%", trend: "up" },
                ],
              },
              {
                icon: Users,
                iconBg: "bg-muted",
                iconColor: "text-foreground",
                title: "Own Your Customers",
                metrics: [
                  { label: "Direct marketing list", value: "100%", trend: "up" },
                  { label: "Aggregator dependence", value: "-80%", trend: "down" },
                ],
              },
            ].map((benefit, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-start gap-6 mb-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${benefit.iconBg} flex items-center justify-center`}>
                    <benefit.icon className={`w-8 h-8 ${benefit.iconColor}`} />
                  </div>
                  <h3 className="text-3xl font-bold flex-1 pt-3">{benefit.title}</h3>
                </div>
                <div className="space-y-4">
                  {benefit.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                      <span className="text-lg text-white/90">{metric.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">{metric.value}</span>
                        {metric.trend === "up" ? (
                          <ArrowUp className="w-5 h-5 text-green-400" />
                        ) : (
                          <ArrowDown className="w-5 h-5 text-green-400" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8 mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 animate-fade-in">
            <p className="text-xl md:text-2xl leading-relaxed">
              The result? A <strong>direct impact</strong> on your most important metrics. 
              More revenue per table, lower operational costs, and happier customers and staff.
            </p>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section id="features" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold">Advanced Features</h2>
            <p className="text-2xl text-muted-foreground">Built for Modern Restaurants</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: "Collaborative Order",
                desc: "Multi-user ordering allows multiple people to scan the same code and add items to the shared table order simultaneously. Live tab syncs - the cart stays open until payment is finalized, guests can keep ordering rounds freely.",
              },
              {
                icon: DollarSign,
                title: "Flexible Payment",
                desc: "Split bill functionality lets diners split the check by custom value or equal amounts instantly. Table lock finalizes the session, preventing further orders. Smart tipping with option to pay tip as % of total bill or custom value.",
              },
              {
                icon: Bell,
                title: "Order Fulfillment",
                desc: "Waiters get instant notifications of new orders and can mark items as served with clear table status updates. Cashiers have live oversight to monitor all active orders, with payment control options to manually settle bills for cash payments.",
              },
              {
                icon: LayoutGrid,
                title: "Table & Menu Management",
                desc: "Table management system with digital floor plan showing occupied tables, active orders, and payment status in real-time. Real-time menu updates for items, prices, and out-of-stock toggles. Analytics dashboard tracks sales, table turnover rates, and staff performance metrics.",
              },
            ].map((feature, i) => (
              <div key={i} className="group relative bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Loyalty Section */}
      <section id="loyalty" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold">Customer Loyalty Program</h2>
            <p className="text-2xl text-muted-foreground">Drive Repeat Business</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-12 shadow-elegant animate-fade-in">
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
                <p className="text-2xl font-semibold">
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

          <div className="text-center pt-8 animate-fade-in">
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Turn first-time visitors into <strong className="text-foreground">loyal advocates</strong>. 
              Our smart loyalty system rewards customers automatically, driving repeat visits and increasing lifetime value.
            </p>
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold">Technology That Pays for Itself</h2>
            <p className="text-2xl text-muted-foreground">Flexible Pricing Plans</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "Starter",
                icon: Zap,
                price: "2.5%",
                subtitle: "per transaction",
                description: "Perfect for small cafes and food trucks",
                features: [
                  "QR code ordering & payment",
                  "Digital menu management",
                  "Basic analytics",
                  "Email support",
                  "No monthly fee",
                ],
                cta: "Get Started",
                popular: false,
              },
              {
                name: "Growth",
                icon: TrendingUp,
                price: "1.9%",
                subtitle: "per transaction + $99/mo",
                description: "Adds advanced analytics and loyalty features",
                features: [
                  "Everything in Starter",
                  "Advanced analytics dashboard",
                  "Loyalty program integration",
                  "Customization options",
                  "Priority support",
                  "Multi-location support",
                ],
                cta: "Start Free Trial",
                popular: true,
              },
              {
                name: "Enterprise",
                icon: Building2,
                price: "Custom",
                subtitle: "tailored pricing",
                description: "For multi-location chains with full integration",
                features: [
                  "Everything in Growth",
                  "Full API access",
                  "White-label options",
                  "Dedicated account manager",
                  "Custom integrations",
                  "SLA guarantee",
                ],
                cta: "Contact Sales",
                popular: false,
              },
            ].map((plan, i) => (
              <div key={i} className={`relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in ${
                plan.popular ? "border-2 border-primary ring-4 ring-primary/10" : "border border-border"
              }`} style={{ animationDelay: `${i * 0.1}s` }}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-hero rounded-full text-white text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="space-y-6">
                  <div className={`w-14 h-14 rounded-2xl ${plan.popular ? 'bg-gradient-hero' : 'bg-muted'} flex items-center justify-center`}>
                    <plan.icon className={`w-7 h-7 ${plan.popular ? 'text-white' : 'text-foreground'}`} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.subtitle}</span>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-hero text-white hover:opacity-90 shadow-lg"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8 animate-fade-in">
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We believe in a pricing model that <strong className="text-foreground">aligns with your success</strong>. 
              There are no heavy upfront costs. <strong className="text-foreground">We grow when you grow.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold">What Our Partners Say</h2>
              <p className="text-2xl text-muted-foreground">Success Stories</p>
            </div>

            <div className="relative bg-gradient-hero rounded-3xl p-12 md:p-16 shadow-elegant text-white animate-fade-in">
              <Quote className="absolute top-8 left-8 w-16 h-16 text-white/20" />
              
              <div className="relative z-10 space-y-8">
                <div className="flex gap-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>

                <blockquote className="text-2xl md:text-3xl leading-relaxed text-center font-light">
                  TapReserve.AI helped us increase our Friday night turnover by{" "}
                  <strong className="font-bold">30%</strong>. Our servers are less stressed 
                  and can now focus on providing exceptional service. It's a{" "}
                  <strong className="font-bold">game-changer</strong>.
                </blockquote>

                <div className="flex items-center justify-center gap-6 pt-6">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl font-bold">
                    MG
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-bold">Maria Gonzalez</div>
                    <div className="text-white/80">Owner of "Bella Cucina"</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-4">
              {[
                { stat: "30%", label: "Increase in turnover" },
                { stat: "95%", label: "Server satisfaction" },
                { stat: "4.8/5", label: "Customer rating" },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 text-center shadow-soft animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                    {item.stat}
                  </div>
                  <div className="text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="cta" 
        className="py-20 relative min-h-[600px] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${successImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center text-white animate-fade-in">
          <div className="space-y-6 mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              The Future is Contactless.
              <br />
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                The Future is TapReserve.AI.
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto">
              Let's Build the Future of Your Restaurant, Together
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-12 shadow-elegant">
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Schedule a Demo</h3>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                See TapReserve.AI in action with a personalized walkthrough
              </p>
              <Button
                size="lg"
                className="bg-white text-foreground hover:bg-white/90 shadow-elegant text-lg px-10 py-6 h-auto font-semibold"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo Now
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4">Contact Information</h4>
              <div className="flex flex-col gap-4 text-white/90">
                <div className="flex items-center justify-center gap-2">
                  <Globe className="w-5 h-5 flex-shrink-0" />
                  <a href="https://tapreserve.storecomm.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    https://tapreserve.storecomm.ai
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <div className="flex flex-wrap gap-2 justify-center">
                    <a href="mailto:rajat@fbts.in" className="hover:text-white transition-colors">rajat@fbts.in</a>
                    <span>||</span>
                    <a href="mailto:rajat@storecomm.ai" className="hover:text-white transition-colors">rajat@storecomm.ai</a>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <a href="tel:+971545367475" className="hover:text-white transition-colors">+971 545367475</a>
                </div>
              </div>
            </div>

            <p className="text-lg text-white/80 max-w-4xl mx-auto pt-4">
              The shift to digital, contactless experiences is not a trend; it's the new standard. 
              With TapReserve.AI, you're not just keeping up; <strong className="text-white">you're leaping ahead</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="h-16 overflow-hidden flex items-center mb-4">
                <img 
                  src={tapreserveLogo} 
                  alt="TapReserve.AI" 
                  className="h-[200%] w-auto object-contain"
                />
              </div>
              <p className="text-muted-foreground">
                Revolutionizing restaurant operations with intelligent self-ordering technology.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => document.getElementById('guest-experience')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-foreground">Guest Experience</button></li>
                <li><button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-foreground">Features</button></li>
                <li><button onClick={() => document.getElementById('pos-integrations')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-foreground">POS Integrations</button></li>
                <li><button onClick={() => window.location.href = '/presentation'} className="text-muted-foreground hover:text-foreground">View Presentation</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Exclusively with Network International LLC in UAE</p>
                <p><a href="https://tapreserve.storecomm.ai" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">tapreserve.storecomm.ai</a></p>
                <p><a href="mailto:rajat@storecomm.ai" className="hover:text-foreground">rajat@storecomm.ai</a></p>
                <p><a href="tel:+971545367475" className="hover:text-foreground">+971 545367475</a></p>
              </div>
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
