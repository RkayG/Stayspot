const destinations = [
  { name: "Lagos", count: "2,450+ Places", image: "https://loremflickr.com/600/400/lagos,city?random=1" },
  { name: "Abuja", count: "1,320+ Places", image: "https://loremflickr.com/600/400/abuja,city?random=2" },
  { name: "Ibadan", count: "980+ Places", image: "https://loremflickr.com/600/400/ibadan,city?random=3" },
  { name: "Port Harcourt", count: "860+ Places", image: "https://loremflickr.com/600/400/city,downtown?random=4" },
  { name: "Benin City", count: "620+ Places", image: "https://loremflickr.com/600/400/city,street?random=5" },
  { name: "Akure", count: "450+ Places", image: "https://loremflickr.com/600/400/city,building?random=6" },
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
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
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
