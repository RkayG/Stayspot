import Link from 'next/link';
import { 
  ChevronLeft, Share, Heart, CheckCircle2, Star, 
  Wifi, Waves, Utensils, Car, Dumbbell, 
  Phone, MessageCircle, MapPin, Globe 
} from 'lucide-react';
import { Button } from '@/vibes/soul/primitives/button';

export default function HotelDetailsPage() {
  return (
    <div className="min-h-screen bg-white pb-24 font-body">
      {/* Hero Image Section */}
      <div className="relative w-full h-[40vh] min-h-[300px]">
        <img 
          src="https://loremflickr.com/800/600/hotel,luxury,room?random=50" 
          alt="The George Hotel Room" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Top Controls */}
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start pt-safe">
          <Link href="/search" className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <div className="flex gap-3">
            <button className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors">
              <Share className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom Image Badges */}
        <div className="absolute bottom-10 left-4 right-4 flex justify-between items-center">
          <div className="bg-green-700 text-white px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-md">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span className="text-xs font-bold">Verified</span>
          </div>
          <div className="bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
            1/25
          </div>
        </div>
      </div>

      {/* Main Content Card (Overlapping Image) */}
      <div className="relative -mt-6 bg-white rounded-t-[24px] px-5 pt-6 flex flex-col gap-8 shadow-[-10px_-10px_30px_rgba(0,0,0,0.1)]">
        
        {/* Header (Title, Rating, Location) */}
        <div>
          <div className="flex justify-between items-start mb-1">
            <h1 className="text-2xl font-extrabold text-black leading-tight">The George Hotel</h1>
            <div className="flex items-center gap-1 pt-1 shrink-0">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="font-bold text-sm text-black">4.8</span>
              <span className="text-contrast-400 text-xs">(128 reviews)</span>
            </div>
          </div>
          <p className="text-contrast-500 text-sm">Maitama, Abuja</p>
        </div>

        {/* Amenities Row */}
        <div className="flex justify-between items-center px-1">
          {[
            { icon: Wifi, label: 'Wi-Fi' },
            { icon: Waves, label: 'Pool' },
            { icon: Utensils, label: 'Restaurant' },
            { icon: Car, label: 'Parking' },
            { icon: Dumbbell, label: 'Gym' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <item.icon className="w-6 h-6 text-black" strokeWidth={1.5} />
              <span className="text-[10px] text-black font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Pricing & Booking CTA */}
        <div className="flex items-center justify-between border-y border-contrast-100 py-5">
          <div className="flex flex-col">
            <span className="text-xs text-contrast-400">From</span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-extrabold text-black">₦120,000</span>
              <span className="text-xs text-contrast-400">/ night</span>
            </div>
          </div>
          <Button className="bg-primary text-black font-bold h-12 px-6 rounded-xl hover:bg-primary/90 shadow-md">
            Check Availability
          </Button>
        </div>

        {/* Quick Actions Row */}
        <div className="flex justify-around items-center">
          {[
            { icon: Phone, label: 'Call' },
            { icon: MessageCircle, label: 'WhatsApp' },
            { icon: MapPin, label: 'Directions' },
            { icon: Globe, label: 'Website' },
          ].map((item, i) => (
            <button key={i} className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full border border-contrast-200 flex items-center justify-center text-black group-hover:border-primary group-hover:text-primary transition-colors">
                <item.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <span className="text-[11px] text-black font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Tabs */}
        <div>
          <div className="flex border-b border-contrast-100">
            {['Overview', 'Rooms', 'Amenities', 'Reviews'].map((tab, i) => (
              <button 
                key={tab} 
                className={`flex-1 pb-3 text-sm font-bold text-center transition-colors ${
                  i === 0 
                    ? 'text-black border-b-2 border-black' 
                    : 'text-contrast-400 hover:text-black'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Tab Content (Overview) */}
          <div className="pt-5 pb-8">
            <p className="text-sm text-contrast-500 leading-relaxed">
              A luxury 5-star hotel in the heart of Abuja with world-class facilities and exceptional hospitality.
            </p>
            <button className="text-primary text-sm font-bold mt-2 hover:underline">
              Read more
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
