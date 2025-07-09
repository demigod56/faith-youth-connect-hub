import Navigation from "@/components/Navigation";
import PastoralConnect from "@/components/PastoralConnect";
import Footer from "@/components/Footer";

const PastoralPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PastoralConnect />
      <Footer />
    </div>
  );
};

export default PastoralPage;