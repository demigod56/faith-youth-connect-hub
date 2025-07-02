import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle, Shield, Eye, Users, Lock, AlertTriangle, Heart } from "lucide-react";

const messagingFeatures = [
  {
    title: "Private Pastor Chat",
    description: "Confidential one-on-one communication with your assigned pastor",
    verse: "Confess your faults one to another - James 5:16",
    icon: Shield,
    features: ["End-to-end encryption", "Pastoral confidentiality", "Prayer request tracking", "Appointment scheduling"]
  },
  {
    title: "Fellowship Messaging",
    description: "Connect with members in your age group and ministry teams",
    verse: "As iron sharpens iron, so one person sharpens another - Proverbs 27:17",
    icon: Users,
    features: ["Age-appropriate groups", "Monitored for safety", "Community guidelines", "Group discussions"]
  },
  {
    title: "Safe Monitoring",
    description: "Protective oversight ensuring healthy communication",
    verse: "Above all else, guard your heart - Proverbs 4:23",
    icon: Eye,
    features: ["Content filtering", "Bullying prevention", "Inappropriate content alerts", "Pastoral oversight"]
  }
];

const recentChats = [
  {
    id: 1,
    name: "Pastor Michael Johnson",
    type: "Pastor",
    lastMessage: "I'll be praying for your situation. Let's schedule a time to talk more.",
    timestamp: "2 hours ago",
    unread: true,
    avatar: "MJ"
  },
  {
    id: 2,
    name: "Seedlings Fellowship",
    type: "Group",
    lastMessage: "Emily: Don't forget about youth retreat registration!",
    timestamp: "1 day ago",
    unread: false,
    avatar: "SF"
  },
  {
    id: 3,
    name: "Heavenly Voices Team",
    type: "Ministry",
    lastMessage: "Practice moved to Wednesday 6PM instead of 7PM",
    timestamp: "2 days ago",
    unread: true,
    avatar: "HV"
  }
];

const PrivateMessaging = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Sacred <span className="text-primary">Communication</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            "Let your conversation be always full of grace, seasoned with salt" - Colossians 4:6
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Connect safely and meaningfully with pastors and fellow believers through 
            our secure, monitored communication platform.
          </p>
        </div>

        {/* Messaging Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {messagingFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:scale-105 transition-divine border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-divine"
              >
                <CardHeader className="text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-faith-pulse">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                  <div className="text-xs italic text-primary/80 bg-primary/5 p-2 rounded border-l-2 border-primary/30">
                    "{feature.verse}"
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Conversations */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-primary" />
                Recent Conversations
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Your active chats and fellowship communications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentChats.map((chat) => (
                  <div 
                    key={chat.id} 
                    className="flex items-center space-x-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors cursor-pointer"
                  >
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-primary/10 text-primary text-sm">
                        {chat.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-foreground truncate">
                          {chat.name}
                        </p>
                        <div className="flex items-center space-x-2">
                          <Badge variant={chat.type === "Pastor" ? "default" : "secondary"} className="text-xs">
                            {chat.type}
                          </Badge>
                          {chat.unread && (
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground truncate">
                        {chat.lastMessage}
                      </p>
                      <p className="text-xs text-muted-foreground">{chat.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4">
                <MessageCircle className="w-4 h-4 mr-2" />
                View All Conversations
              </Button>
            </CardContent>
          </Card>

          {/* Safety Guidelines */}
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <Shield className="w-5 h-5 mr-2 text-primary" />
                Community Guidelines
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Keeping our communication Christ-centered and safe
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Love and Respect</p>
                    <p className="text-xs text-muted-foreground">Communicate with kindness and Christ-like love</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Lock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Privacy Protection</p>
                    <p className="text-xs text-muted-foreground">Personal information remains confidential</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Eye className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Protective Monitoring</p>
                    <p className="text-xs text-muted-foreground">Content reviewed for safety, not surveillance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-orange-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Report Concerns</p>
                    <p className="text-xs text-muted-foreground">Immediately report inappropriate behavior</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Shield className="w-4 h-4 mr-2" />
                Read Full Guidelines
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PrivateMessaging;