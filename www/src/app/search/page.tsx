import Link from 'next/link';
import { ArrowLeft, Search as SearchIcon, SlidersHorizontal, Calendar, Users, Heart, Star, CheckCircle2 } from 'lucide-react';

const searchResults = [
  {
    id: 1,
    title: "Skyline Lounge",
    location: "Victoria Island, Lagos",
    rating: 4.5,
    reviews: 89,
    price: "₦25,000",
    image: "https://loremflickr.com/600/400/lounge,bar?random=21",
  },
  {
    id: 2,
    title: "The Vault Bar",
    location: "Ikeja GRA, Lagos",
    rating: 4.7,
    reviews: 76,
    price: "₦15,000",
    image: "https://loremflickr.com/600/400/bar,club?random=22",
  },
  {
    id: 3,
    title: "Coconut Grove Resort",
    location: "Lekki, Lagos",
    rating: 4.9,
    reviews: 54,
    price: "₦180,000",
    image: "https://loremflickr.com/600/400/resort,beach?random=23",
  },
  {
    id: 4,
    title: "The George Hotel",
    location: "Maitama, Abuja",
    rating: 4.8,
    reviews: 125,
    price: "₦120,000",
    image: "https://loremflickr.com/600/400/hotel,luxury?random=24",
  }
];

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white md:pt-8 md:pb-20">
      <div className="max-w-3xl mx-auto bg-[#0A0A0A] md:bg-[#111] md:rounded-2xl md:border md:border-contrast-500/20 md:overflow-hidden md:shadow-2xl">
        
        {/* Top Header Controls */}
        <div className="p-4 flex items-center gap-3">
          <Link href="/" className="shrink-0 p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </Link>
          <div className="flex-1 bg-[#1A1A1A] rounded-full flex items-center px-4 py-2 border border-contrast-500/30 focus-within:border-primary transition-colors">
            <SearchIcon className="w-4 h-4 text-contrast-300 mr-2 shrink-0" />
            <input 
              type="text" 
              defaultValue="Lagos, Nigeria"
              className="bg-transparent border-none outline-none w-full text-sm font-medium text-white placeholder-contrast-400"
            />
          </div>
          <button className="shrink-0 p-2.5 bg-[#1A1A1A] rounded-full border border-contrast-500/30 hover:bg-white/10 transition-colors">
            <SlidersHorizontal className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Secondary Controls (Dates & Guests) */}
        <div className="px-4 pb-4 flex gap-3">
          <button className="flex-1 bg-[#1A1A1A] rounded-xl flex items-center gap-2 px-3 py-2.5 border border-contrast-500/30">
            <Calendar className="w-4 h-4 text-contrast-300 shrink-0" />
            <div className="text-left flex-1 min-w-0">
              <p className="text-[11px] text-contrast-400 font-medium truncate">Check-in - Check-out</p>
            </div>
          </button>
          <button className="flex-1 bg-[#1A1A1A] rounded-xl flex items-center gap-2 px-3 py-2.5 border border-contrast-500/30">
            <Users className="w-4 h-4 text-contrast-300 shrink-0" />
            <div className="text-left flex-1 min-w-0">
              <p className="text-xs text-white font-medium truncate">2 Guests</p>
            </div>
          </button>
        </div>

        {/* Category Tabs */}
        <div className="px-4 pb-4 overflow-x-auto no-scrollbar flex gap-2">
          <button className="shrink-0 px-4 py-1.5 rounded-full bg-white text-black font-bold text-sm border-2 border-primary">
            All (245)
          </button>
          {['Hotels', 'Lounges', 'Bars', 'Resorts'].map(cat => (
            <button key={cat} className="shrink-0 px-4 py-1.5 rounded-full bg-[#1A1A1A] text-white text-sm font-medium border border-contrast-500/30 hover:bg-white/10 transition-colors">
              {cat}
            </button>
          ))}
        </div>

        {/* Results Info */}
        <div className="px-4 pb-3">
          <h2 className="text-sm font-medium text-contrast-200">245 places found</h2>
        </div>

        {/* Results List */}
        <div className="px-4 pb-6 flex flex-col gap-4">
          {searchResults.map((place) => (
            <Link href="#" key={place.id} className="flex bg-white rounded-[20px] overflow-hidden h-36 border border-contrast-200 shadow-sm hover:shadow-md transition-shadow group">
              {/* Image Section */}
              <div className="w-2/5 relative shrink-0">
                <img 
                  src={place.image} 
                  alt={place.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute bottom-2 left-2">
                  <span className="flex items-center gap-1 font-semibold text-[10px] bg-green-700 text-white px-2 py-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3" /> Verified
                  </span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="w-3/5 p-3 flex flex-col justify-between relative">
                <button className="absolute top-3 right-3 text-contrast-400 hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5" strokeWidth={1.5} />
                </button>
                
                <div className="pr-6">
                  <h3 className="font-bold text-black text-sm leading-tight mb-1 truncate">{place.title}</h3>
                  <p className="text-contrast-500 text-xs truncate">{place.location}</p>
                  
                  <div className="flex items-center gap-1 mt-1.5">
                    <Star className="w-3 h-3 text-primary fill-primary" />
                    <span className="text-black font-bold text-xs">{place.rating}</span>
                    <span className="text-contrast-400 text-[10px]">({place.reviews})</span>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-contrast-500">From <span className="text-black font-bold text-sm">{place.price}</span></p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </div>
  );
}
