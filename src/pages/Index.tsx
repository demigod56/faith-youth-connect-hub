import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DailyFeed from "@/components/DailyFeed";
import YouthGroups from "@/components/YouthGroups";
import Features from "@/components/Features";
import Forums from "@/components/Forums";
import PastoralConnect from "@/components/PastoralConnect";
import ChurchEvents from "@/components/ChurchEvents";
import ChurchPrograms from "@/components/ChurchPrograms";
import LeaderBroadcast from "@/components/LeaderBroadcast";
import FellowshipStructure from "@/components/FellowshipStructure";
import PrivateMessaging from "@/components/PrivateMessaging";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <DailyFeed />
      <YouthGroups />
      <Features />
      <Forums />
      <PastoralConnect />
      <PrivateMessaging />
      <ChurchEvents />
      <ChurchPrograms />
      <LeaderBroadcast />
      <FellowshipStructure />
      <Footer />
    </div>
  );
};

export default Index;
