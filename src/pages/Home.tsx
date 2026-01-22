import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import SimulationSection from '../components/SimulationSection';
import MembersSeeSection from '../components/MembersSeeSection';
import PlaybookSection from '../components/PlaybookSection';
import InfluenceSection from '../components/InfluenceSection';
import ArenaSection from '../components/ArenaSection'; // New Import

const Home = () => {
  return (
    <main className="w-full bg-[#0b0b0b] overflow-x-hidden min-h-screen">
      <div className="mx-auto max-w-[1455px] flex flex-col">
        <Navigation />
        <HeroSection />
        
        <SimulationSection />
        
        <MembersSeeSection />

        <PlaybookSection />

        <InfluenceSection />

        {/* Rendered as 1455px width by 2711px height */}
        <ArenaSection />
      </div>
    </main>
  );
};

export default Home;