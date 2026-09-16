import Link from 'next/link';
import { ArrowLeft, MapPin, CalendarDays, ShieldCheck } from 'lucide-react';
import { Button } from '@/vibes/soul/primitives/button';

export default function ListBusinessPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white md:pt-8 md:pb-20 font-body">
      <div className="max-w-3xl mx-auto bg-[#0A0A0A] md:bg-[#111] md:rounded-2xl md:border md:border-contrast-500/20 md:overflow-hidden md:shadow-2xl h-screen md:h-auto flex flex-col relative">
        
        {/* Header */}
        <div className="p-5 flex items-center relative shrink-0">
          <Link href="/profile" className="absolute left-4 p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </Link>
          <h1 className="text-lg font-bold mx-auto">List Your Business</h1>
        </div>

        {/* Timeline / Steps */}
        <div className="px-8 py-6 shrink-0">
          <div className="relative flex justify-between">
            {/* Connecting line */}
            <div className="absolute top-4 left-0 right-0 h-[2px] bg-contrast-500/30 -z-10"></div>
            
            {[
              { num: '1', label: 'Basic Info', active: true },
              { num: '2', label: 'Verification', active: false },
              { num: '3', label: 'Connect', active: false },
              { num: '4', label: 'Review', active: false },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  step.active ? 'bg-primary text-black' : 'bg-[#1A1A1A] text-contrast-400'
                }`}>
                  {step.num}
                </div>
                <span className={`text-[10px] font-semibold ${step.active ? 'text-white' : 'text-contrast-400'}`}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center mt-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Get verified. Get discovered.
          </h2>
          <p className="text-contrast-400 text-sm mb-12 max-w-sm">
            We visit your business, verify every detail and showcase you to thousands of potential customers.
          </p>

          <div className="flex justify-between w-full max-w-sm mb-16">
            <div className="flex flex-col items-center gap-3 flex-1">
              <MapPin className="w-6 h-6 text-primary" strokeWidth={1.5} />
              <span className="text-xs font-bold">More Visibility</span>
            </div>
            <div className="flex flex-col items-center gap-3 flex-1 border-x border-contrast-500/20">
              <CalendarDays className="w-6 h-6 text-primary" strokeWidth={1.5} />
              <span className="text-xs font-bold">More Bookings</span>
            </div>
            <div className="flex flex-col items-center gap-3 flex-1">
              <ShieldCheck className="w-6 h-6 text-primary" strokeWidth={1.5} />
              <span className="text-xs font-bold">Build Trust</span>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="p-6 shrink-0 flex flex-col items-center gap-6 mt-auto">
          <Button className="w-full bg-primary text-black font-bold h-12 rounded-xl hover:bg-primary/90 shadow-md">
            Get Started
          </Button>
          <button className="text-primary text-sm font-bold hover:underline mb-4">
            How verification works
          </button>
        </div>

      </div>
    </div>
  );
}
