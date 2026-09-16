import { CheckCircle2, Heart, Star, Wifi, Droplets, UtensilsCrossed, Music, GlassWater, Sparkles, Dumbbell, Disc, Car, Umbrella, Map, Users, MapPin } from 'lucide-react';
import { Button } from '@/vibes/soul/primitives/button';

const places = [
  {
    id: 1,
    title: "The George Hotel",
    location: "Maitama, Abuja",
    rating: 4.8,
    reviews: 125,
    image: "https://loremflickr.com/800/600/hotel,luxury?random=11",
    price: "₦120,000",
    features: [
      { icon: <Wifi className="w-3 h-3" />, text: "Wi-Fi" },
      { icon: <Users className="w-3 h-3" />, text: "Pool" },
      { icon: <GlassWater className="w-3 h-3" />, text: "Restaurant" }
    ]
  },
  {
    id: 2,
    title: "Skyline Lounge",
    location: "Victoria Island, Lagos",
    rating: 4.5,
    reviews: 89,
    image: "https://loremflickr.com/800/600/lounge,bar?random=12",
    price: "₦25,000",
    features: [
      { icon: <Music className="w-3 h-3" />, text: "Live Music" },
      { icon: <GlassWater className="w-3 h-3" />, text: "Cocktails" },
      { icon: <Star className="w-3 h-3" />, text: "VIP" }
    ]
  },
  {
    id: 3,
    title: "The Vault Bar",
    location: "Ikeja GRA, Lagos",
    rating: 4.7,
    reviews: 76,
    image: "https://loremflickr.com/800/600/bar,club?random=13",
    price: "₦15,000",
    features: [
      { icon: <Star className="w-3 h-3" />, text: "Sports" },
      { icon: <Music className="w-3 h-3" />, text: "DJ" },
      { icon: <MapPin className="w-3 h-3" />, text: "Parking" }
    ]
  },
  {
    id: 4,
    title: "Coconut Grove Resort",
    location: "Lekki, Lagos",
    rating: 4.9,
    reviews: 54,
    image: "https://loremflickr.com/800/600/resort,beach?random=14",
    price: "₦180,000",
    features: [
      { icon: <Users className="w-3 h-3" />, text: "Pool" },
      { icon: <MapPin className="w-3 h-3" />, text: "Beach Access" },
      { icon: <GlassWater className="w-3 h-3" />, text: "Spa" }
    ]
  }
];

export function FeaturedPlaces() {
  return (
    <section className="py-16 px-6 md:px-12 bg-background">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold text-foreground">Featured Places</h2>
          <a href="#" className="text-sm font-semibold text-contrast-400 hover:text-primary transition-colors">
            View all
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {places.map((place) => (
            <div key={place.id} className="bg-white rounded-2xl overflow-hidden border border-contrast-100 shadow-sm hover:shadow-lg transition-shadow">
              {/* Image */}
              <div className="relative h-48 w-full">
                <img src={place.image} alt={place.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute top-3 left-3">
                  <span className="flex items-center gap-1 font-semibold text-xs bg-[var(--badge-success-background,color-mix(in_oklab,_hsl(var(--success)),_white_75%))] text-[var(--badge-text,hsl(var(--foreground)))] px-2 py-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3" /> Verified
                  </span>
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg text-foreground truncate">{place.title}</h3>
                  <div className="flex items-center gap-1 shrink-0 bg-contrast-100 px-2 py-0.5 rounded text-xs font-semibold">
                    <Star className="w-3 h-3 text-primary fill-primary" />
                    <span>{place.rating}</span>
                    <span className="text-contrast-400 font-normal">({place.reviews})</span>
                  </div>
                </div>
                
                <p className="text-sm text-contrast-400 mb-4">{place.location}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {place.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-1 text-xs text-contrast-500 font-medium">
                      {f.icon}
                      <span>{f.text}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-contrast-100">
                  <div className="text-sm">
                    <span className="text-contrast-400">From</span> <span className="font-bold text-foreground">{place.price}</span>
                  </div>
                  <Button variant="secondary" size="small" className="font-bold bg-foreground text-white hover:bg-foreground/90">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
