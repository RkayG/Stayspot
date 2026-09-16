import { ChevronLeft, BedDouble, Wine, Palmtree, Utensils, GlassWater } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FilterSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FilterSheet({ isOpen, onClose }: FilterSheetProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <div 
        className={`fixed bottom-0 left-0 right-0 bg-white z-[101] rounded-t-3xl max-h-[90vh] flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-contrast-100">
          <button onClick={onClose} className="p-2 -ml-2 rounded-full hover:bg-contrast-100 transition-colors">
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
          <h2 className="text-lg font-bold text-black">Filters</h2>
          <button className="text-sm font-semibold text-black hover:opacity-70 transition-opacity">
            Clear all
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 pb-24">
          
          {/* Price Range */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-sm text-black">Price Range (per night)</h3>
              <span className="text-xs font-bold text-black">₦10,000 - ₦500,000+</span>
            </div>
            <div className="px-2">
              <div className="relative h-1.5 bg-contrast-100 rounded-full w-full">
                {/* Active Track */}
                <div className="absolute left-[10%] right-[30%] h-full bg-primary rounded-full"></div>
                {/* Thumbs */}
                <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-5 h-5 bg-primary rounded-full border-2 border-white shadow-md"></div>
                <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-5 h-5 bg-primary rounded-full border-2 border-white shadow-md"></div>
              </div>
            </div>
          </div>

          {/* Property Type */}
          <div className="mb-8">
            <h3 className="font-bold text-sm text-black mb-4">Property Type</h3>
            <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar -mx-5 px-5">
              {[
                { icon: BedDouble, label: 'Hotels', active: true },
                { icon: GlassWater, label: 'Lounges', active: false },
                { icon: Wine, label: 'Bars', active: false },
                { icon: Palmtree, label: 'Resorts', active: false },
                { icon: Utensils, label: 'Restaurants', active: false },
              ].map((item, i) => (
                <button 
                  key={i} 
                  className={`flex flex-col items-center justify-center min-w-[72px] p-3 rounded-xl border transition-colors ${
                    item.active 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-contrast-100 text-contrast-400 hover:border-contrast-300'
                  }`}
                >
                  <item.icon className="w-6 h-6 mb-2" strokeWidth={item.active ? 2 : 1.5} />
                  <span className={`text-[10px] font-medium ${item.active ? 'text-primary' : 'text-black'}`}>
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div className="mb-8">
            <h3 className="font-bold text-sm text-black mb-4">Amenities</h3>
            <div className="flex flex-wrap gap-2">
              {['Wi-Fi', 'Pool', 'Parking', 'Restaurant', 'Gym', '24/7 Power', 'Bar', 'Live Music', '+ More'].map((amenity, i) => (
                <button 
                  key={i}
                  className="px-4 py-2 rounded-lg border border-contrast-100 text-xs font-medium text-black hover:border-contrast-300 transition-colors"
                >
                  {amenity}
                </button>
              ))}
            </div>
          </div>

          {/* Guest Rating */}
          <div className="mb-4">
            <h3 className="font-bold text-sm text-black mb-4">Guest Rating</h3>
            <div className="grid grid-cols-3 gap-3">
              {['3+', '4+', '4.5+'].map((rating) => (
                <button 
                  key={rating}
                  className={`py-2.5 rounded-lg border text-sm font-bold transition-colors ${
                    rating === '4+' 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-contrast-100 text-black hover:border-contrast-300'
                  }`}
                >
                  {rating}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Sticky Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-white border-t border-contrast-100">
          <button 
            onClick={onClose}
            className="w-full bg-primary text-black font-bold h-12 rounded-xl hover:bg-primary/90 shadow-md transition-colors"
          >
            Show 128 Results
          </button>
        </div>
        
      </div>
    </>
  );
}
