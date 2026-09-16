import { Bed, GlassWater, Beer, Utensils, Palmtree, CalendarDays } from 'lucide-react';

const categories = [
  { icon: <Bed className="w-10 h-10 mx-auto mb-3" />, name: "Hotels", count: "3,245+" },
  { icon: <GlassWater className="w-10 h-10 mx-auto mb-3" />, name: "Lounges", count: "1,842+" },
  { icon: <Beer className="w-10 h-10 mx-auto mb-3" />, name: "Bars", count: "2,101+" },
  { icon: <Utensils className="w-10 h-10 mx-auto mb-3" />, name: "Restaurants", count: "2,532+" },
  { icon: <Palmtree className="w-10 h-10 mx-auto mb-3" />, name: "Resorts", count: "1,102+" },
  { icon: <CalendarDays className="w-10 h-10 mx-auto mb-3" />, name: "Event Centers", count: "842+" },
];

export function BrowseByCategory() {
  return (
    <section className="py-8 px-6 md:px-12 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-8">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-contrast-100 p-6 text-center hover:border-primary hover:shadow-md transition-all cursor-pointer group">
              <div className="text-foreground group-hover:text-primary transition-colors">
                {cat.icon}
              </div>
              <h3 className="font-bold text-sm text-foreground mb-1">{cat.name}</h3>
              <p className="text-xs text-contrast-400">{cat.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
