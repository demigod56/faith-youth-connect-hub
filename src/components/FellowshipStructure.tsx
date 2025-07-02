import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Crown, FileText, DollarSign, Users, MessageCircle, Calendar, Star } from "lucide-react";

const fellowshipGroups = [
  {
    id: "seedlings",
    name: "Seedlings Fellowship",
    ageRange: "13-17 years",
    chairman: "Emily Thompson",
    secretary: "Marcus Johnson", 
    treasurer: "Sarah Kim",
    members: 145,
    verse: "Don't let anyone look down on you because you are young - 1 Timothy 4:12",
    color: "text-green-400",
    bgColor: "bg-green-500/10"
  },
  {
    id: "firm-stance",
    name: "Firm Stance Fellowship",
    ageRange: "18-22 years",
    chairman: "David Rodriguez",
    secretary: "Grace Liu",
    treasurer: "Jordan Williams",
    members: 89,
    verse: "Be strong and courageous! Do not be afraid - Joshua 1:9",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10"
  },
  {
    id: "ric-family", 
    name: "RIC Family Fellowship",
    ageRange: "23-28 years",
    chairman: "Michael Chen",
    secretary: "Rachel Adams",
    treasurer: "Joshua Brown",
    members: 67,
    verse: "And he is before all things, and by him all things consist - Colossians 1:17",
    color: "text-teal-400",
    bgColor: "bg-teal-500/10"
  },
  {
    id: "pillars-builders",
    name: "Pillars & Builders Fellowship",
    ageRange: "28-35 years", 
    chairman: "Pastor James Wilson",
    secretary: "Michelle Davis",
    treasurer: "Robert Taylor",
    members: 52,
    verse: "Unless the Lord builds the house, the builders labor in vain - Psalm 127:1",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10"
  }
];

const ministryTeams = [
  {
    id: "praise-worship",
    name: "Heavenly Voices",
    description: "Praise and Worship Ministry",
    verse: "Sing to the Lord a new song - Psalm 96:1",
    icon: Star,
    members: 34,
    leader: "Pastor Sarah Williams",
    nextRehearshal: "Every Wednesday 7PM",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10"
  },
  {
    id: "ushering",
    name: "Door Keepers",
    description: "Ushering and Welcome Ministry",
    verse: "I would rather be a doorkeeper in the house of my God - Psalm 84:10",
    icon: Users,
    members: 28,
    leader: "Deacon Mark Johnson",
    nextMeeting: "Every Sunday 8AM",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10"
  }
];

const FellowshipStructure = () => {
  return (
    <section className="py-16 bg-sanctuary">
      <div className="container mx-auto px-4">
        {/* Fellowship Leadership */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Fellowship <span className="text-primary">Leadership</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
              "Let us consider how we may spur one another on toward love and good deeds" - Hebrews 10:24
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Each fellowship is led by dedicated servants who guide spiritual growth and community building.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {fellowshipGroups.map((fellowship) => (
              <Card 
                key={fellowship.id} 
                className="group hover:scale-105 transition-divine border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-divine"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-foreground">{fellowship.name}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {fellowship.ageRange}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{fellowship.members} members</Badge>
                  </div>
                  <div className="text-xs italic text-primary/80 bg-primary/5 p-2 rounded border-l-2 border-primary/30">
                    "{fellowship.verse}"
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Crown className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-xs font-medium text-foreground">Chairman</p>
                      <p className="text-xs text-muted-foreground">{fellowship.chairman}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-xs font-medium text-foreground">Secretary</p>
                      <p className="text-xs text-muted-foreground">{fellowship.secretary}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <DollarSign className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-xs font-medium text-foreground">Treasurer</p>
                      <p className="text-xs text-muted-foreground">{fellowship.treasurer}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Fellowship Chat
                    </Button>
                    <Button variant="default" size="sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      View Events
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ministry Teams */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ministry <span className="text-primary">Teams</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
              "Each of you should use whatever gift you have to serve others" - 1 Peter 4:10
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Join specialized ministry teams and use your God-given talents to serve the church family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {ministryTeams.map((team) => {
              const IconComponent = team.icon;
              return (
                <Card 
                  key={team.id} 
                  className="group hover:scale-105 transition-divine border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-divine"
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 ${team.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-faith-pulse`}>
                      <IconComponent className={`w-8 h-8 ${team.color}`} />
                    </div>
                    <CardTitle className="text-foreground">{team.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {team.description}
                    </CardDescription>
                    <div className="text-xs italic text-primary/80 bg-primary/5 p-2 rounded border-l-2 border-primary/30">
                      "{team.verse}"
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">{team.members}</p>
                        <p className="text-xs text-muted-foreground">Active Members</p>
                      </div>
                      <div className="text-center">
                        <Avatar className="w-8 h-8 mx-auto mb-1">
                          <AvatarFallback className="bg-primary/10 text-primary text-xs">
                            {team.leader.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <p className="text-xs text-muted-foreground">Team Leader</p>
                      </div>
                    </div>
                    
                    <div className="text-center mb-4">
                      <p className="text-sm font-medium text-foreground">{team.leader}</p>
                      <p className="text-xs text-muted-foreground">
                        {team.nextRehearshal || team.nextMeeting}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Team Chat
                      </Button>
                      <Button variant="default" size="sm">
                        <Users className="w-4 h-4 mr-2" />
                        Join Team
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button size="lg" className="mr-4">
              <Star className="w-5 h-5 mr-2" />
              Discover Your Gifts
            </Button>
            <Button variant="outline" size="lg">
              <Users className="w-5 h-5 mr-2" />
              Start New Ministry
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FellowshipStructure;