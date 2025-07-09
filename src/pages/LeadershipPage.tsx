import Navigation from "@/components/Navigation";
import LeaderBroadcast from "@/components/LeaderBroadcast";
import FellowshipStructure from "@/components/FellowshipStructure";
import Footer from "@/components/Footer";

const LeadershipPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <LeaderBroadcast />
      <FellowshipStructure />
      <Footer />
    </div>
  );
};

export default LeadershipPage;