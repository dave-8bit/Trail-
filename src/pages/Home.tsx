import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import SimulationSection from '../components/SimulationSection';
import MembersSeeSection from '../components/MembersSeeSection';
import PlaybookSection from '../components/PlaybookSection';
import InfluenceSection from '../components/InfluenceSection';
import ArenaSection from '../components/ArenaSection';
import RoadmapSection from '../components/RoadmapSection'; 
import Footer from '../components/Footer';

const Home = () => {
  // Define the accent color here so you can pass it down
  const accentColor = "#B4FF2C";

  return (
    <main className="w-full bg-[#0b0b0b] overflow-x-hidden min-h-screen">
      <div className="mx-auto max-w-[1455px] flex flex-col">
        <Navigation />
        <HeroSection />
        <SimulationSection />
        <MembersSeeSection />
        <PlaybookSection />
        <InfluenceSection />
        
        <ArenaSection />

        <RoadmapSection />

        {/* Pass the accent prop here to resolve the TypeScript error */}
        <Footer accent={accentColor} />
      </div>
    </main>
  );
};

export default Home;