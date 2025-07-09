import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Megaphone, Send, Users, Globe, Heart, Shield } from "lucide-react";
import { useState } from "react";

const recentBroadcasts = [
  {
    id: 1,
    sender: "Pastor Ndichu",
    role: "Senior Pastor - Kiambu",
    message: "Blessed Sunday everyone! Remember our youth revival service this Friday at 6 PM. Let's prepare our hearts for God's mighty move!",
    timestamp: "2 hours ago",
    audience: "All Churches",
    priority: "high",
    verse: "Be strong and courageous! - Joshua 1:9"
  },
  {
    id: 2,
    sender: "Pastor Benja",
    role: "Youth Pastor - Kiambu",
    message: "Youth leaders, please confirm attendance for tomorrow's leadership meeting. We'll be discussing the upcoming retreat plans.",
    timestamp: "5 hours ago",
    audience: "Youth Leaders",
    priority: "medium",
    verse: "Iron sharpens iron - Proverbs 27:17"
  },
  {
    id: 3,
    sender: "HQ Administration",
    role: "National Office",
    message: "Monthly church reports are due by the 25th. Please ensure all fellowship data is updated in the system.",
    timestamp: "1 day ago",
    audience: "Church Leaders",
    priority: "low",
    verse: "Let all things be done decently and in order - 1 Corinthians 14:40"
  }
];

const LeaderBroadcast = () => {
  const [broadcastMessage, setBroadcastMessage] = useState("");
  const [selectedAudience, setSelectedAudience] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-500/10 text-red-400 border-red-500/20";
      case "medium": return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "low": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getAudienceIcon = (audience: string) => {
    switch (audience) {
      case "All Churches": return <Globe className="w-4 h-4" />;
      case "Youth Leaders": return <Users className="w-4 h-4" />;
      case "Church Leaders": return <Shield className="w-4 h-4" />;
      default: return <Users className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-16 bg-sanctuary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Leadership Broadcast Center
          </h2>
          <p className="text-muted-foreground text-lg">
            "How beautiful are the feet of those who bring good news" - Romans 10:15
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Broadcast Composer */}
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Megaphone className="w-5 h-5 text-primary" />
                <CardTitle>Send Broadcast Message</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Audience</label>
                  <Select value={selectedAudience} onValueChange={setSelectedAudience}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select audience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-churches">All Churches</SelectItem>
                      <SelectItem value="youth-leaders">Youth Leaders</SelectItem>
                      <SelectItem value="church-leaders">Church Leaders</SelectItem>
                      <SelectItem value="specific-church">Specific Church</SelectItem>
                      <SelectItem value="fellowship-groups">Fellowship Groups</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Priority</label>
                  <Select value={selectedPriority} onValueChange={setSelectedPriority}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High Priority</SelectItem>
                      <SelectItem value="medium">Medium Priority</SelectItem>
                      <SelectItem value="low">Low Priority</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  placeholder="Write your broadcast message here..."
                  value={broadcastMessage}
                  onChange={(e) => setBroadcastMessage(e.target.value)}
                  rows={4}
                  className="resize-none"
                />
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  {broadcastMessage.length}/500 characters
                </span>
                <Button className="space-x-2" disabled={!broadcastMessage || !selectedAudience}>
                  <Send className="w-4 h-4" />
                  <span>Send Broadcast</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Broadcasts */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-foreground">Recent Broadcasts</h3>
            <div className="space-y-4">
              {recentBroadcasts.map((broadcast) => (
                <Card key={broadcast.id} className="border-primary/20 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                          <Heart className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{broadcast.sender}</h4>
                          <p className="text-sm text-muted-foreground">{broadcast.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getPriorityColor(broadcast.priority)}>
                          {broadcast.priority} priority
                        </Badge>
                        <Badge variant="outline" className="space-x-1">
                          {getAudienceIcon(broadcast.audience)}
                          <span>{broadcast.audience}</span>
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-foreground mb-3">{broadcast.message}</p>
                    
                    <blockquote className="text-sm italic text-primary border-l-2 border-primary pl-3 mb-3">
                      "{broadcast.verse}"
                    </blockquote>
                    
                    <div className="text-sm text-muted-foreground">
                      {broadcast.timestamp}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderBroadcast;