import { Button } from "@/components/ui/button";
import { Church, Users, BookOpen, Calendar, MessageCircle, Shield, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="border-b border-border bg-sanctuary backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-divine rounded-lg flex items-center justify-center animate-divine-glow">
              <Church className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Word of Faith</h1>
              <p className="text-sm text-muted-foreground">Youth Ministry</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            <Button asChild variant="ghost" size="sm">
              <Link to="/fellowships">
                <Users className="w-4 h-4 mr-2" />
                Fellowship
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link to="/forums">
                <BookOpen className="w-4 h-4 mr-2" />
                Forums
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link to="/events">
                <Calendar className="w-4 h-4 mr-2" />
                Events
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link to="/pastoral">
                <MessageCircle className="w-4 h-4 mr-2" />
                Pastoral
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link to="/messaging">
                <MessageCircle className="w-4 h-4 mr-2" />
                Messaging
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link to="/leadership">
                <Shield className="w-4 h-4 mr-2" />
                Leadership
              </Link>
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Button asChild variant="outline" size="sm">
              <Link to="/hq-dashboard">HQ Dashboard</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/register-church">Register Church</Link>
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