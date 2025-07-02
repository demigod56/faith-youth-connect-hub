import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle, Video, Phone, Calendar, Shield, Heart } from "lucide-react";

const pastoralTeam = [
  {
    id: "main-pastor",
    name: "Pastor Ndichu",
    role: "Lead Youth Pastor",
    specialties: ["Leadership", "Vision Casting", "Spiritual Guidance"],
    availability: "Available",
    groups: ["All Groups"],
    verse: "Be shepherds of God's flock - 1 Peter 5:2",
    church: "Word of Faith Kiambu"
  },
  {
    id: "teens-pastor",
    name: "Pastor Benja",
    role: "Teens Pastor",
    specialties: ["Teen Ministry", "Discipleship", "Youth Counseling"],
    availability: "Available",
    groups: ["Seedlings"],
    verse: "Don't let anyone look down on you because you are young - 1 Timothy 4:12",
    church: "Word of Faith Kiambu"
  },
  {
    id: "assistant-pastor-1",
    name: "Pastor Sarah Williams",
    role: "Assistant Pastor",
    specialties: ["Women's Ministry", "Counseling", "Worship"],
    availability: "Available",
    groups: ["RIC Family"],
    verse: "She speaks with wisdom - Proverbs 31:26",
    church: "Word of Faith Kiambu"
  },
  {
    id: "assistant-pastor-2", 
    name: "Pastor David Chen",
    role: "Assistant Pastor",
    specialties: ["Men's Ministry", "Discipleship", "Missions"],
    availability: "In Session",
    groups: ["Firm Stance", "Pillars & Builders"],
    verse: "Train up a child in the way he should go - Proverbs 22:6",
    church: "Word of Faith Kiambu"
  }
];

const PastoralConnect = () => {
  return (
    <section className="py-16 bg-sanctuary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Pastoral <span className="text-primary">Guidance</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            "The Lord is my shepherd, I lack nothing" - Psalm 23:1
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Connect privately with your assigned pastor for spiritual guidance, 
            prayer, and personalized mentorship in your faith journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {pastoralTeam.map((pastor) => (
            <Card 
              key={pastor.id} 
              className="group hover:scale-105 transition-divine border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-divine"
            >
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4 ring-2 ring-primary/30">
                  <AvatarFallback className="bg-primary/10 text-primary text-lg font-bold">
                    {pastor.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-foreground">{pastor.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {pastor.role}
                </CardDescription>
                <Badge variant="outline" className="text-xs mt-2">
                  {pastor.church}
                </Badge>
                <div className="flex items-center justify-center">
                  <Badge 
                    variant={pastor.availability === "Available" ? "default" : "secondary"} 
                    className="text-xs"
                  >
                    {pastor.availability === "Available" ? (
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    ) : (
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                    )}
                    {pastor.availability}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-xs italic text-primary/80 bg-primary/5 p-2 rounded border-l-2 border-primary/30 mb-4">
                  "{pastor.verse}"
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {pastor.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Assigned Groups:</h4>
                  <div className="flex flex-wrap gap-1">
                    {pastor.groups.map((group, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {group}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" size="sm" className="text-xs">
                    <MessageCircle className="w-3 h-3 mr-1" />
                    Chat
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    <Video className="w-3 h-3 mr-1" />
                    Meet
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    Book
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-primary/30 bg-card/30 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-foreground">Private & Secure Communication</CardTitle>
            <CardDescription className="text-muted-foreground">
              "Confess your faults one to another, and pray one for another" - James 5:16
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-4">
              All pastoral conversations are confidential and secure. Your privacy is protected 
              while enabling meaningful spiritual guidance and prayer support.
            </p>
            <Button variant="default">
              <Heart className="w-4 h-4 mr-2" />
              Request Prayer Support
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PastoralConnect;