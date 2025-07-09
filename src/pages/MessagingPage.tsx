import Navigation from "@/components/Navigation";
import PrivateMessaging from "@/components/PrivateMessaging";
import Footer from "@/components/Footer";

const MessagingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PrivateMessaging />
      <Footer />
    </div>
  );
};

export default MessagingPage;