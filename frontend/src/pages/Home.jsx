import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/hero/HeroSection";
import FeaturesSection from "../components/features/FeaturesSection";
import RewardsSection from "../components/rewards/RewardsSection";
import CharitySection from "../components/charity/CharitySection";
import WinnersSection from "../components/winners/WinnersSection";
import PricingSection from "../components/pricing/PricingSection";
import CTASection from "../components/cta/CTASection";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div className="bg-[#0F172A] text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <RewardsSection />
      <CharitySection />
      <WinnersSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;