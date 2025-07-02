import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Droplets, Baby, Heart, Church, Users, Clock, MapPin } from "lucide-react";

const churchEvents = [
  {
    id: "baptism",
    title: "River of Life Baptism",
    description: "Public declaration of faith through water baptism",
    verse: "Whoever believes and is baptized will be saved - Mark 16:16",
    icon: Droplets,
    nextDate: "Every 3rd Sunday",
    requirements: ["Completion of baptism class", "Pastor interview", "Personal testimony"],
    color: "text-blue-400",
    bgColor: "bg-blue-500/10"
  },
  {
    id: "dedication",
    title: "Child Dedication",
    description: "Parents dedicating children to the Lord's service",
    verse: "Train up a child in the way he should go - Proverbs 22:6",
    icon: Baby,
    nextDate: "2nd Sunday Monthly",
    requirements: ["Parent counseling session", "Dedication preparation class", "Family commitment"],
    color: "text-pink-400",
    bgColor: "bg-pink-500/10"
  },
  {
    id: "communion",
    title: "Holy Communion",
    description: "Remembering Christ's sacrifice through bread and wine",
    verse: "Do this in remembrance of me - Luke 22:19",
    icon: Heart,
    nextDate: "1st Sunday Monthly",
    requirements: ["Confirmed membership", "Self-examination", "Right standing with God"],
    color: "text-red-400",
    bgColor: "bg-red-500/10"
  },
  {
    id: "confirmation",
    title: "Faith Confirmation",
    description: "Young adults confirming their faith commitment",
    verse: "Let us hold fast the confession of our hope - Hebrews 10:23",
    icon: Church,
    nextDate: "Easter Sunday",
    requirements: ["Confirmation classes", "Faith statement", "Community service"],
    color: "text-purple-400",
    bgColor: "bg-purple-500/10"
  },
  {
    id: "membership",
    title: "Church Membership",
    description: "Joining the local church family covenant",
    verse: "As we have many members in one body - Romans 12:4",
    icon: Users,
    nextDate: "Monthly",
    requirements: ["Membership class", "Statement of faith", "Ministry commitment"],
    color: "text-green-400",
    bgColor: "bg-green-500/10"
  }
];

const ChurchEvents = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Sacred <span className="text-primary">Ordinances</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            "Let all things be done decently and in order" - 1 Corinthians 14:40
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Participate in the holy ordinances and sacred ceremonies that mark 
            important milestones in your spiritual journey and church life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {churchEvents.map((event) => {
            const IconComponent = event.icon;
            return (
              <Card 
                key={event.id} 
                className="group hover:scale-105 transition-divine border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-divine"
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${event.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-faith-pulse`}>
                    <IconComponent className={`w-8 h-8 ${event.color}`} />
                  </div>
                  <CardTitle className="text-foreground">{event.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {event.description}
                  </CardDescription>
                  <div className="text-xs italic text-primary/80 bg-primary/5 p-2 rounded border-l-2 border-primary/30">
                    "{event.verse}"
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-4 p-2 bg-muted/20 rounded">
                    <Calendar className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm font-medium text-foreground">{event.nextDate}</span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {event.requirements.map((req, index) => (
                        <li key={index} className="text-xs text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      Register
                    </Button>
                    <Button variant="default" size="sm" className="text-xs">
                      <MapPin className="w-3 h-3 mr-1" />
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-primary/30 bg-card/30 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-foreground">Ready to Take Your Next Step?</CardTitle>
            <CardDescription className="text-muted-foreground">
              "Therefore, if anyone is in Christ, the new creation has come" - 2 Corinthians 5:17
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6">
              Our pastoral team is here to guide you through each sacred ordinance and 
              help you understand the spiritual significance of these important steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Heart className="w-4 h-4 mr-2" />
                Schedule Counseling
              </Button>
              <Button variant="outline" size="lg">
                <Users className="w-4 h-4 mr-2" />
                Join Preparation Class
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ChurchEvents;