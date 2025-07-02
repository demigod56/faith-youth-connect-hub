import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, BookOpen, MessageSquare, Calendar, Users, Brain, Headphones, Crown } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Life Lesson Videos",
    description: "Access inspiring teachings and life lessons uploaded by your moderators and pastors",
    highlight: "Scripture-based content"
  },
  {
    icon: Headphones,
    title: "Sermon Library",
    description: "Listen to recorded sermons with AI-generated summaries for easy study and reflection",
    highlight: "AI-powered summaries"
  },
  {
    icon: Calendar,
    title: "Divine Meetings",
    description: "Join Google Meet sessions with automatic note-taking and prayer request tracking",
    highlight: "Smart note-taking"
  },
  {
    icon: MessageSquare,
    title: "Fellowship Chats",
    description: "Connect with your age group in dedicated chat rooms for encouragement and prayer",
    highlight: "Age-specific groups"
  },
  {
    icon: Crown,
    title: "Pastor Dashboard",
    description: "Comprehensive ministry management tools for pastors to guide and nurture their flock",
    highlight: "Leadership tools"
  },
  {
    icon: Users,
    title: "Mentorship Network",
    description: "Connect with mentors and build meaningful relationships across all age groups",
    highlight: "Cross-generational wisdom"
  },
  {
    icon: BookOpen,
    title: "Scripture Study",
    description: "Interactive Bible study sessions with discussion guides and reflection questions",
    highlight: "Guided learning"
  },
  {
    icon: Brain,
    title: "AI Assistant",
    description: "Get instant answers to faith questions and personalized spiritual guidance",
    highlight: "24/7 support"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Equipped for <span className="text-primary">Spiritual Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform provides everything you need to deepen your faith, 
            connect with fellow believers, and grow in your spiritual journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:scale-105 transition-divine border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-divine"
              >
                <CardHeader className="text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{feature.title}</CardTitle>
                  <div className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full w-fit mx-auto">
                    {feature.highlight}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 text-center">
                    {feature.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            <Users className="w-5 h-5 mr-2" />
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;