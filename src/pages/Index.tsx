import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DailyFeed from "@/components/DailyFeed";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <DailyFeed />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
