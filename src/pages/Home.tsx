import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import SimulationSection from '../components/SimulationSection';

const Home = () => {
  return (
    <main className="w-full bg-[#0b0b0b] overflow-x-hidden min-h-screen">
      {/* Global Width Constraint */}
      <div className="mx-auto max-w-[1455px] flex flex-col">
        <Navigation />
        <HeroSection />
        {/* This will now render as 1455px width by 1625px height */}
        <SimulationSection />
      </div>
    </main>
  );
};

export default Home;