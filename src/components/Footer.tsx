import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Church, Mail, MapPin, Phone, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sanctuary border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-divine rounded-lg flex items-center justify-center">
                <Church className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Word of Faith</h3>
                <p className="text-sm text-muted-foreground">Youth Ministry</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Connecting young believers worldwide in faith, fellowship, and spiritual growth. 
              Walk by faith, not by sight, as we build God's kingdom together.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Subscribe to our newsletter" 
                className="max-w-xs" 
              />
              <Button variant="default">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Age Groups */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Faith Families</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Seedlings (13-17)</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Firm Stance (18-22)</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">RIC Family (23-28)</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pillars & Builders (28-35)</a></li>
            </ul>
          </div>

          {/* Ministry */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Ministry</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Life Lessons</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sermon Library</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Fellowship Chat</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Prayer Requests</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pastor Dashboard</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Word of Faith Youth Ministry. Walking by faith, not by sight.
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary animate-faith-pulse" />
            <span>for the Kingdom</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;