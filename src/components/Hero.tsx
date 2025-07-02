import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Globe, Heart } from "lucide-react";
import heroImage from "@/assets/hero-faith.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Word of Faith Youth Ministry" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/50"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-faith-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-primary-glow/20 rounded-full blur-lg animate-divine-glow"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-md animate-faith-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
          <Globe className="w-4 h-4 mr-2" />
          Global Youth Ministry Platform
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Walk by <span className="text-primary">Faith</span>,
          <br />
          Not by <span className="text-primary-glow">Sight</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Connect with believers worldwide, grow in your faith journey, and build 
          lasting relationships in our global youth ministry community.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="text-lg px-8 py-6 group">
            <Heart className="w-5 h-5 mr-2 group-hover:animate-faith-pulse" />
            Join Your Fellowship
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 group">
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Watch Testimonies
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">350+</div>
            <div className="text-sm text-muted-foreground">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Life Lessons</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Fellowship</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;