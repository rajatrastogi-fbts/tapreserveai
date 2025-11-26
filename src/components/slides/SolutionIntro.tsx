import SlideLayout from "./SlideLayout";
import { Smartphone, QrCode, Sparkles } from "lucide-react";
import qrImage from "@/assets/qr-scan.jpg";

export default function SolutionIntro() {
  return (
    <SlideLayout background="gradient">
      <div className="grid lg:grid-cols-2 gap-12 items-center text-white">
        <div className="space-y-8">
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

        <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-elegant">
          <img
            src={qrImage}
            alt="Scanning QR code with phone"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </SlideLayout>
  );
}
