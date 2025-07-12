import Navigation from "@/components/Navigation";
import ActiveMessaging from "@/components/ActiveMessaging";
import Footer from "@/components/Footer";

const MessagingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ActiveMessaging />
      <Footer />
    </div>
  );
};

export default MessagingPage;