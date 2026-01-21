import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    /* The outer wrapper handles the full-width background color */
    <div className="w-full bg-[#0b0b0b] min-h-screen">
      
      {/* The inner container constraints the width to your Figma spec (approx 1455px) */}
      <div className="mx-auto max-w-[1455px] w-full relative">
        <Navigation />
        <HeroSection />
      </div>

    </div>
  );
};

export default Home;