import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import SimulationSection from '../components/SimulationSection';
import MembersSeeSection from '../components/MembersSeeSection'; // Import the new section

const Home = () => {
  return (
    <main className="w-full bg-[#0b0b0b] overflow-x-hidden min-h-screen">
      {/* Global Width Constraint */}
      <div className="mx-auto max-w-[1455px] flex flex-col">
        <Navigation />
        <HeroSection />
        {/* Rendered as 1455px width by 1625px height */}
        <SimulationSection />
        {/* Rendered as 1455px width by 973px height */}
        <MembersSeeSection />
      </div>
    </main>
  );
};

export default Home;