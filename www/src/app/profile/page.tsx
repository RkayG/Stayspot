import Link from 'next/link';
import { User, Star, CalendarDays, Heart, Settings, HelpCircle, LogOut, ChevronRight } from 'lucide-react';

export default function ProfilePage() {
  const menuItems = [
    { icon: User, label: "My Profile", href: "#" },
    { icon: Star, label: "My Reviews", href: "#" },
    { icon: CalendarDays, label: "My Bookings", href: "/bookings" },
    { icon: Heart, label: "Saved Places", href: "/saved" },
    { icon: Settings, label: "Settings", href: "#" },
    { icon: HelpCircle, label: "Help & Support", href: "#" },
    { icon: LogOut, label: "Log Out", href: "#", textClass: "text-red-500", iconClass: "text-red-500" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white md:pt-8 md:pb-20">
      <div className="max-w-3xl mx-auto bg-[#0A0A0A] md:bg-[#111] md:rounded-2xl md:border md:border-contrast-500/20 md:overflow-hidden md:shadow-2xl h-screen md:h-auto flex flex-col">
        
        {/* Header Profile Area */}
        <div className="p-6 flex items-center justify-between mt-2 shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-contrast-200 rounded-full flex items-center justify-center overflow-hidden shrink-0">
              <User className="w-8 h-8 text-contrast-400" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-0.5">Emmanuel Victor</h2>
              <p className="text-sm text-contrast-400">victor@example.com</p>
            </div>
          </div>
          <button className="p-2 bg-transparent rounded-full hover:bg-white/10 transition-colors">
            <Heart className="w-6 h-6 text-contrast-300" strokeWidth={1.5} />
          </button>
        </div>

        {/* Menu List */}
        <div className="flex-1 overflow-y-auto px-4 mt-4 pb-32 no-scrollbar">
          <div className="flex flex-col gap-1">
            {menuItems.map((item, i) => (
              <Link 
                href={item.href} 
                key={i} 
                className="flex items-center justify-between p-4 rounded-xl hover:bg-[#1A1A1A] transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <item.icon 
                    className={`w-5 h-5 ${item.iconClass || 'text-contrast-200 group-hover:text-white transition-colors'}`} 
                    strokeWidth={1.5} 
                  />
                  <span className={`font-semibold text-sm ${item.textClass || 'text-white'}`}>
                    {item.label}
                  </span>
                </div>
                <ChevronRight className={`w-5 h-5 ${item.iconClass || 'text-contrast-500 group-hover:text-contrast-300'}`} />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
