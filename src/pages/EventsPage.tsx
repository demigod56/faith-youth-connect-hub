import Navigation from "@/components/Navigation";
import ChurchEvents from "@/components/ChurchEvents";
import ChurchPrograms from "@/components/ChurchPrograms";
import Footer from "@/components/Footer";

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ChurchEvents />
      <ChurchPrograms />
      <Footer />
    </div>
  );
};

export default EventsPage;