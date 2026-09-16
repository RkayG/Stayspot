import Link from 'next/link';
import { Heart, MapPin, User } from 'lucide-react';
import { Button } from '@/vibes/soul/primitives/button';

export function Header() {
  return (
    <header className="bg-black text-white py-4 px-6 md:px-12 flex items-center justify-between z-50 relative">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 text-xl font-bold">
        <MapPin className="w-6 h-6 text-primary" />
        <span>StaySpot<span className="text-primary text-xs ml-1 border border-primary px-1 rounded">NG</span></span>
      </Link>

      {/* Navigation */}
      <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
        <Link href="#" className="hover:text-primary transition-colors">Hotels</Link>
        <Link href="#" className="hover:text-primary transition-colors">Lounges</Link>
        <Link href="#" className="hover:text-primary transition-colors">Bars</Link>
        <Link href="#" className="hover:text-primary transition-colors">Restaurants</Link>
        <Link href="#" className="hover:text-primary transition-colors">Resorts</Link>
        <Link href="#" className="hover:text-primary transition-colors">Event Centers</Link>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <Link href="#" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
          <Heart className="w-4 h-4" />
          <span className="hidden sm:inline">Saved</span>
        </Link>
        <Button variant="secondary" className="hidden sm:flex bg-transparent border border-white text-white hover:bg-white hover:text-black">
          List Your Business
        </Button>
        <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
          <User className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
