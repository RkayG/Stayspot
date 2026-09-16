import { ShieldCheck, Camera, Tags, MapPin, Play } from 'lucide-react';
import { Button } from '@/vibes/soul/primitives/button';

export function WhyBook() {
  const reasons = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Trusted & Verified",
      description: "Every business is physically verified by our team."
    },
    {
      icon: <Camera className="w-6 h-6 text-primary" />,
      title: "Real Visuals",
      description: "High-quality photos & videos so you know what to expect."
    },
    {
      icon: <Tags className="w-6 h-6 text-primary" />,
      title: "Best Prices",
      description: "Find the best deals and exclusive offers."
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Easy Navigation",
      description: "Accurate locations with directions that get you there."
    }
  ];

  return (
    <section className="bg-foreground py-16 px-6 md:px-12 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12">Why book with StaySpot NG?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-full border border-contrast-500/50 flex items-center justify-center bg-contrast-500/20">
                {reason.icon}
              </div>
              <h4 className="font-bold text-lg">{reason.title}</h4>
              <p className="text-sm text-contrast-300">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Video Card */}
          <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-contrast-500/30 flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-full md:w-1/2 h-32 rounded-xl overflow-hidden shrink-0">
              {/* Background Image/Thumbnail */}
              <img 
                src="https://loremflickr.com/800/600/hotel,room?random=10" 
                alt="Video thumbnail" 
                className="absolute inset-0 w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-12 h-12 bg-black/50 backdrop-blur rounded-full flex items-center justify-center hover:bg-black/70 transition-colors">
                  <Play className="w-5 h-5 text-white fill-white ml-1" />
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">See it before you book</h3>
              <p className="text-sm text-contrast-300 mb-4">
                Watch highlight videos of hotels, lounges and bars before you decide.
              </p>
              <Button className="bg-primary text-black hover:bg-primary/90 font-bold border-0">
                Explore Videos
              </Button>
            </div>
          </div>

          {/* Subscribe Card */}
          <div className="bg-[#1A1A1A] rounded-2xl p-6 md:p-8 border border-contrast-500/30 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-2">Get the best deals delivered to you</h3>
            <p className="text-sm text-contrast-300 mb-6">
              Subscribe to get updates on new places, deals and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg bg-white text-black outline-none"
              />
              <Button className="bg-primary text-black hover:bg-primary/90 font-bold whitespace-nowrap border-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
