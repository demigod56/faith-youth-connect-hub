import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, Edit3, Plus } from "lucide-react";

const upcomingPrograms = [
  {
    id: 1,
    title: "Youth Revival Service",
    date: "2024-07-15",
    time: "6:00 PM",
    location: "Main Sanctuary",
    description: "A powerful night of worship and breakthrough",
    attendees: 250,
    status: "upcoming",
    verse: "Come, let us worship and bow down - Psalm 95:6"
  },
  {
    id: 2,
    title: "Marriage Seminar",
    date: "2024-07-20",
    time: "2:00 PM",
    location: "Fellowship Hall",
    description: "Building strong Christian marriages",
    attendees: 85,
    status: "registration",
    verse: "Two are better than one - Ecclesiastes 4:9"
  },
  {
    id: 3,
    title: "Youth Leadership Training",
    date: "2024-07-25",
    time: "9:00 AM",
    location: "Conference Room",
    description: "Equipping the next generation of leaders",
    attendees: 45,
    status: "upcoming",
    verse: "Train up a child in the way he should go - Proverbs 22:6"
  },
  {
    id: 4,
    title: "Community Outreach",
    date: "2024-07-30",
    time: "8:00 AM",
    location: "Kiambu Town Center",
    description: "Serving our community with love",
    attendees: 120,
    status: "volunteers_needed",
    verse: "Serve one another humbly in love - Galatians 5:13"
  }
];

const ChurchPrograms = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming": return "bg-blue-500/10 text-blue-400";
      case "registration": return "bg-green-500/10 text-green-400";
      case "volunteers_needed": return "bg-orange-500/10 text-orange-400";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "upcoming": return "Upcoming";
      case "registration": return "Registration Open";
      case "volunteers_needed": return "Volunteers Needed";
      default: return status;
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Church Programs & Events
          </h2>
          <p className="text-muted-foreground text-lg">
            "Let us consider how we may spur one another on toward love and good deeds" - Hebrews 10:24
          </p>
        </div>

        <div className="flex justify-end mb-6">
          <Button className="space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add New Program</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingPrograms.map((program) => (
            <Card key={program.id} className="group hover:shadow-divine transition-divine border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg text-foreground group-hover:text-primary transition-divine">
                      {program.title}
                    </CardTitle>
                    <Badge className={`mt-2 ${getStatusColor(program.status)}`}>
                      {getStatusText(program.status)}
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-divine">
                    <Edit3 className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{program.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{new Date(program.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{program.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{program.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{program.attendees} attendees</span>
                  </div>
                </div>

                <blockquote className="text-sm italic text-primary border-l-2 border-primary pl-3">
                  "{program.verse}"
                </blockquote>

                <div className="flex space-x-2">
                  {program.status === "registration" && (
                    <Button size="sm" className="flex-1">Register Now</Button>
                  )}
                  {program.status === "volunteers_needed" && (
                    <Button size="sm" variant="outline" className="flex-1">Volunteer</Button>
                  )}
                  <Button size="sm" variant="outline" className="flex-1">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChurchPrograms;