import Image from 'next/image';

const destinations = [
  { name: "Lagos", count: "2,450+ Places", image: "https://images.unsplash.com/photo-1616866160912-32a22289f6df?auto=format&fit=crop&q=80" },
  { name: "Abuja", count: "1,320+ Places", image: "https://images.unsplash.com/photo-1628189874880-997f74811f26?auto=format&fit=crop&q=80" },
  { name: "Ibadan", count: "980+ Places", image: "https://images.unsplash.com/photo-1549427050-4d4023d6a695?auto=format&fit=crop&q=80" },
  { name: "Port Harcourt", count: "860+ Places", image: "https://images.unsplash.com/photo-1663428989531-90c74eb73605?auto=format&fit=crop&q=80" },
  { name: "Benin City", count: "620+ Places", image: "https://images.unsplash.com/photo-1605646194788-fb36fbe53e5e?auto=format&fit=crop&q=80" },
  { name: "Akure", count: "450+ Places", image: "https://images.unsplash.com/photo-1572978052163-9f893d5f5b5b?auto=format&fit=crop&q=80" },
];

export function PopularDestinations() {
  return (
    <section className="py-16 px-6 md:px-12 bg-background">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold text-foreground">Popular Destinations</h2>
          <a href="#" className="text-sm font-semibold text-contrast-400 hover:text-primary transition-colors">
            View all
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {destinations.map((dest, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative h-32 w-full rounded-xl overflow-hidden mb-3">
                <Image 
                  src={dest.image} 
                  alt={dest.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <h3 className="font-bold text-sm text-foreground">{dest.name}</h3>
              <p className="text-xs text-contrast-400">{dest.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
