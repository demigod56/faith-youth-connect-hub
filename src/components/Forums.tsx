import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, DollarSign, Calendar, Users, Star, TrendingUp } from "lucide-react";

const forumCategories = [
  {
    id: "projects",
    title: "Kingdom Projects",
    description: "Collaborative ministry projects and community outreach initiatives",
    verse: "For we are God's handiwork, created in Christ Jesus to do good works - Ephesians 2:10",
    posts: 24,
    contributors: 67,
    totalRaised: 15420,
    featured: true
  },
  {
    id: "retreats",
    title: "Spiritual Retreats",
    description: "Upcoming retreats, testimonies, and spiritual renewal gatherings",
    verse: "Come with me by yourselves to a quiet place and get some rest - Mark 6:31",
    posts: 18,
    contributors: 45,
    totalRaised: 8930,
    featured: false
  },
  {
    id: "missions",
    title: "Great Commission",
    description: "Mission trips, evangelism projects, and global outreach",
    verse: "Go and make disciples of all nations - Matthew 28:19",
    posts: 32,
    contributors: 89,
    totalRaised: 22150,
    featured: true
  },
  {
    id: "fellowship",
    title: "Fellowship Events",
    description: "Community building, social events, and relationship strengthening",
    verse: "They devoted themselves to fellowship, to the breaking of bread - Acts 2:42",
    posts: 41,
    contributors: 134,
    totalRaised: 5670,
    featured: false
  }
];

const Forums = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Kingdom <span className="text-primary">Forums</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            "As iron sharpens iron, so one person sharpens another" - Proverbs 27:17
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Join discussions, contribute to projects, and support kingdom initiatives 
            that advance God's work in our communities and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {forumCategories.map((category) => (
            <Card 
              key={category.id} 
              className={`group hover:scale-105 transition-divine border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-divine ${
                category.featured ? 'ring-2 ring-primary/30' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-foreground flex items-center">
                    {category.title}
                    {category.featured && (
                      <Star className="w-4 h-4 text-primary ml-2 animate-divine-glow" />
                    )}
                  </CardTitle>
                  <Badge variant="secondary">
                    {category.posts} posts
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground">
                  {category.description}
                </CardDescription>
                <div className="text-xs italic text-primary/80 bg-primary/5 p-2 rounded border-l-2 border-primary/30">
                  "{category.verse}"
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <MessageCircle className="w-4 h-4 text-primary mr-1" />
                      <span className="text-lg font-bold text-foreground">{category.posts}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Discussions</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="w-4 h-4 text-primary mr-1" />
                      <span className="text-lg font-bold text-foreground">{category.contributors}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Contributors</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <DollarSign className="w-4 h-4 text-primary mr-1" />
                      <span className="text-lg font-bold text-foreground">${category.totalRaised.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Raised</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Join Discussion
                  </Button>
                  <Button variant="default" size="sm">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Contribute
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="mr-4">
            <TrendingUp className="w-5 h-5 mr-2" />
            Start New Project
          </Button>
          <Button variant="outline" size="lg">
            <Calendar className="w-5 h-5 mr-2" />
            Plan Retreat
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Forums;