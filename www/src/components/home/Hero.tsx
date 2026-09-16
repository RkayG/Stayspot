import { SearchBar } from './SearchBar';

export function Hero() {
  return (
    <section className="relative w-full min-h-[500px] flex flex-col justify-center bg-black z-10">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: 'url("https://loremflickr.com/1600/900/restaurant,dark?random=15")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 py-20 flex flex-col items-start pt-24 pb-48 md:pb-32">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-3xl mb-4">
          Discover verified <br />
          <span className="text-primary">hotels, lounges & bars</span> <br />
          in Nigeria.
        </h1>
        <p className="text-lg md:text-xl text-contrast-200 mb-12">
          Every place is physically verified. Every detail is real.
        </p>
      </div>
      
      {/* Search Bar Container */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20 container mx-auto px-6 md:px-12">
        <SearchBar />
      </div>
    </section>
  );
}
