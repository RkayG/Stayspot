import { Hero } from '@/components/home/Hero';
import { FeaturesBar } from '@/components/home/FeaturesBar';
import { FeaturedPlaces } from '@/components/home/FeaturedPlaces';
import { BrowseByCategory } from '@/components/home/BrowseByCategory';
import { PopularDestinations } from '@/components/home/PopularDestinations';
import { WhyBook } from '@/components/home/WhyBook';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBar />
      <FeaturedPlaces />
      <BrowseByCategory />
      <PopularDestinations />
      <WhyBook />
    </>
  );
}
