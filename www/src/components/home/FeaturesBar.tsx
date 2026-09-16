import { CheckCircle, Camera, Map, Headphones } from 'lucide-react';

export function FeaturesBar() {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Physically Verified",
      description: "We visit every location before it goes live"
    },
    {
      icon: <Camera className="w-8 h-8 text-contrast-300" />,
      title: "Real Photos & Videos",
      description: "See what it truly looks like before you go"
    },
    {
      icon: <Map className="w-8 h-8 text-contrast-300" />,
      title: "Exact Locations",
      description: "Get accurate directions you can trust"
    },
    {
      icon: <Headphones className="w-8 h-8 text-contrast-300" />,
      title: "24/7 Support",
      description: "We're here to help anytime, always"
    }
  ];

  return (
    <section className="bg-foreground pt-56 md:pt-28 pb-16 px-6 md:px-12 text-white">
      <div className="container mx-auto">
        {/* Popular Searches */}
        <div className="flex flex-wrap items-center gap-4 mb-16 pt-4">
          <span className="text-sm font-semibold text-contrast-200">Popular searches:</span>
          {["Hotels in Lagos", "Lounges in Abuja", "Bars in Ibadan", "Resorts in Port Harcourt", "Rooftop Bars"].map(item => (
            <span key={item} className="px-4 py-1.5 rounded-full bg-contrast-500/30 text-contrast-100 text-xs border border-contrast-500/50 cursor-pointer hover:bg-contrast-500/50 transition-colors">
              {item}
            </span>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="shrink-0">{feature.icon}</div>
              <div>
                <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                <p className="text-sm text-contrast-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
