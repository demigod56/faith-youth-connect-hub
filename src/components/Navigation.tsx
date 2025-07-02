import { Button } from "@/components/ui/button";
import { Church, Users, BookOpen, Video, MessageCircle, Settings } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="border-b border-border bg-sanctuary backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-divine rounded-lg flex items-center justify-center animate-divine-glow">
              <Church className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Word of Faith</h1>
              <p className="text-sm text-muted-foreground">Youth Ministry</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Users className="w-4 h-4 mr-2" />
              Fellowship
            </Button>
            <Button variant="ghost" size="sm">
              <BookOpen className="w-4 h-4 mr-2" />
              Scripture
            </Button>
            <Button variant="ghost" size="sm">
              <Video className="w-4 h-4 mr-2" />
              Teachings
            </Button>
            <Button variant="ghost" size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              Fellowship Chat
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={() => window.location.href = '/hq-dashboard'}>
              HQ Dashboard
            </Button>
            <Button variant="outline" size="sm" onClick={() => window.location.href = '/register-church'}>
              Register Church
            </Button>
            <Button variant="outline" size="sm">Sign In</Button>
            <Button variant="default" size="sm">Join Us</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;