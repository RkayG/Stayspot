import { MapPin, Building, Calendar, Users } from 'lucide-react';
import { Button } from '@/vibes/soul/primitives/button';

export function SearchBar() {
  return (
    <div className="bg-white rounded-xl shadow-xl p-2 md:p-4 flex flex-col md:flex-row items-center justify-between gap-4 w-full border border-contrast-100">
      <div className="grid grid-cols-1 md:grid-cols-4 w-full divide-y md:divide-y-0 md:divide-x divide-contrast-100">
        
        {/* Location */}
        <div className="px-4 py-3 flex items-center gap-3">
          <MapPin className="w-5 h-5 text-contrast-300" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">Where are you going?</span>
            <input 
              type="text" 
              placeholder="Search city, area or place" 
              className="text-sm text-contrast-400 focus:outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Category */}
        <div className="px-4 py-3 flex items-center gap-3">
          <Building className="w-5 h-5 text-contrast-300" />
          <div className="flex flex-col w-full">
            <span className="text-sm font-semibold text-foreground">What are you looking for?</span>
            <select className="text-sm text-contrast-400 focus:outline-none bg-transparent appearance-none w-full">
              <option>Hotels, lounges, bars...</option>
              <option>Hotels</option>
              <option>Lounges</option>
              <option>Bars</option>
            </select>
          </div>
        </div>

        {/* Dates */}
        <div className="px-4 py-3 flex items-center gap-3">
          <Calendar className="w-5 h-5 text-contrast-300" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">Check-in - Check-out</span>
            <span className="text-sm text-contrast-400">Add dates</span>
          </div>
        </div>

        {/* Guests */}
        <div className="px-4 py-3 flex items-center gap-3">
          <Users className="w-5 h-5 text-contrast-300" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">Guests</span>
            <span className="text-sm text-contrast-400">2 Adults • 0 Children</span>
          </div>
        </div>
      </div>

      <div className="w-full md:w-auto px-4 md:px-0">
        <Button className="w-full md:w-auto h-12 px-8 text-base font-bold text-black bg-primary hover:bg-primary/90">
          Search
        </Button>
      </div>
    </div>
  );
}
