import Navigation from "@/components/Navigation";
import HQForum from "@/components/HQForum";
import Footer from "@/components/Footer";

const HQDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HQForum />
      <Footer />
    </div>
  );
};

export default HQDashboard;