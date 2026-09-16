import Link from 'next/link';
import { ArrowLeft, Play } from 'lucide-react';
import { Button } from '@/vibes/soul/primitives/button';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white md:pt-8 md:pb-20 font-body">
      <div className="max-w-3xl mx-auto bg-[#0A0A0A] md:bg-[#111] md:rounded-2xl md:border md:border-contrast-500/20 md:overflow-hidden md:shadow-2xl h-screen md:h-auto flex flex-col relative">
        
        {/* Header */}
        <div className="p-5 flex items-center relative shrink-0">
          <Link href="/details" className="absolute left-4 p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </Link>
          <h1 className="text-lg font-bold mx-auto">Gallery & Videos</h1>
        </div>

        {/* Filter Tabs */}
        <div className="px-4 pb-4 flex gap-2 overflow-x-auto no-scrollbar shrink-0">
          <button className="shrink-0 px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold">
            All
          </button>
          {['Photos', 'Videos', '360° Tour'].map(tab => (
            <button key={tab} className="shrink-0 px-5 py-2.5 rounded-full bg-[#1A1A1A] border border-contrast-500/30 text-white text-sm font-medium hover:bg-white/10 transition-colors">
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="flex-1 overflow-y-auto px-4 pb-32 no-scrollbar">
          <div className="grid grid-cols-3 gap-2">
            
            {/* Featured Video (Full Width) */}
            <div className="col-span-3 relative h-48 md:h-64 rounded-xl overflow-hidden group cursor-pointer mb-2">
              <img 
                src="https://loremflickr.com/800/600/resort,night?random=51" 
                alt="Resort Video" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors group-hover:bg-black/40">
                <div className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-5 h-5 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1.5 text-[10px] font-bold">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                01:24
              </div>
            </div>

            {/* Grid Photos (3 Columns) */}
            {[
              "https://loremflickr.com/400/400/hotel,room?random=52",
              "https://loremflickr.com/400/400/lounge,bar?random=53",
              "https://loremflickr.com/400/400/pool,swimming?random=54",
              "https://loremflickr.com/400/400/hotel,living?random=55",
              "https://loremflickr.com/400/400/food,dish?random=56",
              "https://loremflickr.com/400/400/gym,fitness?random=57",
            ].map((img, i) => (
              <div key={i} className="col-span-1 aspect-square rounded-lg overflow-hidden cursor-pointer group">
                <img 
                  src={img} 
                  alt={`Gallery item ${i + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Sticky Action */}
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent pt-12 md:bg-[#111] md:border-t md:border-contrast-500/20">
          <Button className="w-full bg-primary text-black font-bold h-12 rounded-xl hover:bg-primary/90 shadow-md">
            View 360° Tour
          </Button>
        </div>

      </div>
    </div>
  );
}
