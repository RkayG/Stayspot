import Link from 'next/link';
import { ArrowLeft, Heart } from 'lucide-react';

const savedPlaces = [
  {
    id: 1,
    title: "The George Hotel",
    location: "Maitama, Abuja",
    price: "₦120,000",
    image: "https://loremflickr.com/600/400/hotel,luxury?random=31",
    isSaved: true
  },
  {
    id: 2,
    title: "Skyline Lounge",
    location: "Victoria Island, Lagos",
    price: "₦25,000",
    image: "https://loremflickr.com/600/400/lounge,bar?random=32",
    isSaved: true
  },
  {
    id: 3,
    title: "The Vault Bar",
    location: "Ikeja GRA, Lagos",
    price: "₦15,000",
    image: "https://loremflickr.com/600/400/bar,club?random=33",
    isSaved: false
  },
  {
    id: 4,
    title: "Coconut Grove Resort",
    location: "Lekki, Lagos",
    price: "₦180,000",
    image: "https://loremflickr.com/600/400/resort,beach?random=34",
    isSaved: true
  }
];

export default function SavedPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white md:pt-8 md:pb-20">
      <div className="max-w-3xl mx-auto bg-[#0A0A0A] md:bg-[#111] md:rounded-2xl md:border md:border-contrast-500/20 md:overflow-hidden md:shadow-2xl h-screen md:h-auto flex flex-col">
        
        {/* Header */}
        <div className="p-5 flex items-center relative shrink-0">
          <Link href="/" className="absolute left-4 p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </Link>
          <h1 className="text-lg font-bold mx-auto">Saved</h1>
        </div>

        {/* Tabs */}
        <div className="flex px-4 border-b border-contrast-500/20 shrink-0">
          <button className="flex-1 pb-3 text-sm font-bold text-primary border-b-2 border-primary text-center">
            Places
          </button>
          <button className="flex-1 pb-3 text-sm font-bold text-contrast-400 text-center hover:text-contrast-200 transition-colors">
            Collections
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-4 no-scrollbar pb-32">
          {savedPlaces.map((place) => (
            <Link href="/details" key={place.id} className="bg-white rounded-[20px] p-2 flex h-[120px] gap-4 items-center group shadow-sm hover:shadow-md transition-shadow">
              {/* Image */}
              <div className="w-[120px] h-full shrink-0">
                <img 
                  src={place.image} 
                  alt={place.title} 
                  className="w-full h-full object-cover rounded-[16px] group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 flex flex-col justify-center relative py-1 pr-2">
                <button className="absolute top-0 right-0 p-1 hover:scale-110 transition-transform">
                  <Heart 
                    className={`w-5 h-5 ${place.isSaved ? 'text-primary fill-primary' : 'text-contrast-400'}`} 
                    strokeWidth={place.isSaved ? 0 : 2}
                  />
                </button>
                
                <h3 className="text-black font-bold text-[15px] leading-tight mb-1.5 pr-8 truncate">{place.title}</h3>
                <p className="text-contrast-500 text-[13px] truncate">{place.location}</p>
                
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-black font-extrabold text-sm">{place.price}</span>
                  <span className="text-contrast-400 text-[11px] font-medium">/ night</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </div>
  );
}
