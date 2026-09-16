import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const bookings = [
  {
    id: 1,
    title: "The George Hotel",
    location: "Maitama, Abuja",
    image: "https://loremflickr.com/600/400/hotel,luxury?random=41",
    status: "Upcoming",
    statusColor: "bg-green-100 text-green-700",
    checkIn: "Jun 20, 2024",
    checkOut: "Jun 22, 2024",
    details: "2 Nights, 2 Guests",
    total: "₦240,000"
  },
  {
    id: 2,
    title: "Coconut Grove Resort",
    location: "Lekki, Lagos",
    image: "https://loremflickr.com/600/400/resort,beach?random=42",
    status: "Completed",
    statusColor: "bg-green-100 text-green-700",
    checkIn: "May 10, 2024",
    checkOut: "May 15, 2024",
    details: "5 Nights, 2 Guests",
    total: "₦900,000"
  }
];

export default function BookingsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white md:pt-8 md:pb-20">
      <div className="max-w-3xl mx-auto bg-[#0A0A0A] md:bg-[#111] md:rounded-2xl md:border md:border-contrast-500/20 md:overflow-hidden md:shadow-2xl h-screen md:h-auto flex flex-col">
        
        {/* Header */}
        <div className="p-5 flex items-center relative shrink-0">
          <Link href="/" className="absolute left-4 p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </Link>
          <h1 className="text-lg font-bold mx-auto">My Bookings</h1>
        </div>

        {/* Tabs */}
        <div className="flex px-4 border-b border-contrast-500/20 shrink-0">
          <button className="flex-1 pb-3 text-sm font-bold text-primary border-b-2 border-primary text-center">
            Upcoming
          </button>
          <button className="flex-1 pb-3 text-sm font-bold text-contrast-400 text-center hover:text-contrast-200 transition-colors">
            Past
          </button>
          <button className="flex-1 pb-3 text-sm font-bold text-contrast-400 text-center hover:text-contrast-200 transition-colors">
            Cancelled
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-5 no-scrollbar pb-32">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-[20px] p-4 flex flex-col shadow-sm">
              
              {/* Top Row: Image, Title, Status */}
              <div className="flex gap-3 mb-4">
                <img 
                  src={booking.image} 
                  alt={booking.title} 
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-black font-bold text-[15px] leading-tight mb-1">{booking.title}</h3>
                  <p className="text-contrast-500 text-xs">{booking.location}</p>
                </div>
                <div className="shrink-0 flex items-start">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${booking.statusColor}`}>
                    {booking.status}
                  </span>
                </div>
              </div>

              {/* Middle Row: Dates */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-contrast-400 text-xs mb-1">Check-in</p>
                  <p className="text-black font-bold text-sm">{booking.checkIn}</p>
                </div>
                <div>
                  <p className="text-contrast-400 text-xs mb-1">Check-out</p>
                  <p className="text-black font-bold text-sm">{booking.checkOut}</p>
                </div>
              </div>

              {/* Bottom Row: Details & Total */}
              <div className="flex justify-between items-end mb-4">
                <p className="text-contrast-500 text-xs font-medium">{booking.details}</p>
                <div className="text-right">
                  <p className="text-contrast-400 text-xs mb-0.5">Total</p>
                  <p className="text-black font-extrabold text-lg leading-none">{booking.total}</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="border-t border-contrast-100 pt-3">
                <Link 
                  href="/details" 
                  className="block w-full text-center py-2 text-sm font-bold text-black hover:text-primary transition-colors"
                >
                  View Details
                </Link>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
