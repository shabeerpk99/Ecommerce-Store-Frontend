// Header, Navbar and Footer are provided by the Layout wrapper
import { CategorySection } from '../components/sections/CategorySection';
import { CountriesSection } from '../components/sections/CountriesSection';
import { DealsSection } from '../components/sections/DealsSection';
import { InquirySection } from '../components/sections/InquirySection';
import { MainSection } from '../components/sections/MainSection';
import { NewsletterSection } from '../components/sections/NewsletterSection';
import { RecommendedSection } from '../components/sections/RecommendedSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import homeoutdoor from '../assets/images/backgrounds/home-outdoor.png';
import electronicshero from '../assets/images/backgrounds/electronics-hero.png';
import {
  electronicsCategories,
  homeOutdoorCategories,
} from '../data/homeData';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <MainSection />
        <DealsSection />
        <CategorySection
          bannerTitle="Home and outdoor"
          bannerImage={homeoutdoor}
          bannerBg="#FFE0B0"
          items={homeOutdoorCategories}
        />
        <CategorySection
          bannerTitle="Consumer electronics and gadgets"
          bannerImage={electronicshero}
          bannerBg="#666666"
          items={electronicsCategories}
        />
        <InquirySection />
        <RecommendedSection />
        <ServicesSection />
        <CountriesSection />
        <NewsletterSection />
      </main>
      
    </div>
  );
}
