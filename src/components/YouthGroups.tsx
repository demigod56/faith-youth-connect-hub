import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Star, Shield, Crown } from "lucide-react";

const youthGroups = [
  {
    id: "teenagers",
    name: "Seedlings",
    description: "Growing in faith and fellowship",
    ageRange: "13-17 years",
    icon: Users,
    members: 145,
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    features: ["Life Lessons", "Peer Mentorship", "Creative Worship"]
  },
  {
    id: "firm-stance", 
    name: "Firm Stance",
    description: "Standing strong in God's truth",
    ageRange: "18-22 years",
    icon: Shield,
    members: 89,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    features: ["Leadership Training", "Mission Trips", "Career Guidance"]
  },
  {
    id: "ric-family",
    name: "RIC Family",
    description: "Rooted in Christ, building legacy",
    ageRange: "23-28 years", 
    icon: Star,
    members: 67,
    color: "text-teal-400",
    bgColor: "bg-teal-500/10",
    features: ["Marriage Prep", "Financial Wisdom", "Community Service"]
  },
  {
    id: "pillars-builders",
    name: "Pillars & Builders", 
    description: "Foundations of the church family",
    ageRange: "28-35 years",
    icon: Crown,
    members: 52,
    color: "text-cyan-400", 
    bgColor: "bg-cyan-500/10",
    features: ["Ministry Leadership", "Family Guidance", "Mentorship Programs"]
  }
];

const YouthGroups = () => {
  return (
    <section className="py-16 bg-sanctuary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Our Faith Families
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join your age-appropriate fellowship group where you'll grow in faith, 
            build lasting friendships, and discover your purpose in God's kingdom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {youthGroups.map((group) => {
            const IconComponent = group.icon;
            return (
              <Card key={group.id} className="group hover:scale-105 transition-divine cursor-pointer border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${group.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-faith-pulse`}>
                    <IconComponent className={`w-8 h-8 ${group.color}`} />
                  </div>
                  <CardTitle className="text-foreground">{group.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {group.description}
                  </CardDescription>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {group.ageRange}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <p className="text-2xl font-bold text-primary">{group.members}</p>
                    <p className="text-sm text-muted-foreground">Active Members</p>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {group.features.map((feature, index) => (
                      <div key={index} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button className="w-full" variant="outline">
                    Join Fellowship
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default YouthGroups;