import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Building2, 
  Users, 
  MessageCircle, 
  TrendingUp, 
  Calendar, 
  FileText,
  Target,
  Crown,
  Shield,
  Globe
} from "lucide-react";

const hqStructure = [
  {
    id: "national-director",
    title: "National Director",
    name: "Bishop Joseph Mwangi",
    role: "National Oversight",
    churches: "97 Churches",
    regions: "8 Regions",
    members: "12,450",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10"
  },
  {
    id: "regional-coordinators",
    title: "Regional Coordinators",
    name: "8 Coordinators",
    role: "Regional Management",
    churches: "12-15 per region",
    regions: "Central, Coastal, etc.",
    members: "1,500+ each",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10"
  },
  {
    id: "church-pastors",
    title: "Church Pastors",
    name: "97 Lead Pastors",
    role: "Local Church Leadership",
    churches: "Individual Churches",
    regions: "Nationwide",
    members: "50-300 each",
    color: "text-emerald-400", 
    bgColor: "bg-emerald-500/10"
  }
];

const nationalPrograms = [
  {
    id: "national-youth-camp",
    title: "National Youth Camp 2024",
    description: "Annual gathering of all WOF youth across Kenya",
    status: "Planning",
    participants: "5,000+ Expected",
    location: "Naivasha",
    date: "July 15-20, 2024",
    coordinator: "Pastor Ndichu"
  },
  {
    id: "church-planting",
    title: "Church Planting Initiative",
    description: "Establish 20 new churches in underserved areas",
    status: "Active",
    participants: "15 Pioneer Teams",
    location: "Northern Kenya",
    date: "2024-2025",
    coordinator: "Bishop Mwangi"
  },
  {
    id: "leadership-training",
    title: "National Leadership Summit",
    description: "Training for church leaders and youth pastors",
    status: "Registration",
    participants: "200 Leaders",
    location: "Nairobi",
    date: "March 10-12, 2024",
    coordinator: "Pastor Sarah Kimani"
  }
];

const regionalStats = [
  { region: "Central", churches: 25, members: 3200, coordinator: "Pastor John Kariuki" },
  { region: "Nairobi", churches: 18, members: 2800, coordinator: "Pastor Grace Wanjiku" },
  { region: "Coastal", churches: 12, members: 1500, coordinator: "Pastor Ali Hassan" },
  { region: "Western", churches: 15, members: 1900, coordinator: "Pastor David Ochieng" },
  { region: "Rift Valley", churches: 14, members: 1800, coordinator: "Pastor Mary Kiplagat" },
  { region: "Eastern", churches: 8, members: 900, coordinator: "Pastor James Mutua" },
  { region: "Nyanza", churches: 3, members: 250, coordinator: "Pastor Peter Otieno" },
  { region: "Northern", churches: 2, members: 100, coordinator: "Pastor Amina Ahmed" }
];

const HQForum = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Building2 className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Word of Faith <span className="text-primary">Headquarters</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            "For where two or three gather in my name, there am I with them" - Matthew 18:20
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            National coordination and oversight of Word of Faith Churches across Kenya. 
            Managing 97 churches with unified vision and purpose.
          </p>
        </div>

        {/* Organizational Structure */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {hqStructure.map((level) => (
            <Card key={level.id} className="border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-divine transition-divine">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${level.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Crown className={`w-8 h-8 ${level.color}`} />
                </div>
                <CardTitle className="text-foreground">{level.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {level.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Role:</span>
                    <span className="text-sm text-foreground">{level.role}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Churches:</span>
                    <span className="text-sm text-foreground">{level.churches}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Coverage:</span>
                    <span className="text-sm text-foreground">{level.regions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Members:</span>
                    <span className="text-sm font-bold text-primary">{level.members}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* National Programs */}
        <Card className="mb-12 border-primary/20 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center">
              <Target className="w-5 h-5 mr-2 text-primary" />
              National Programs & Initiatives
            </CardTitle>
            <CardDescription>
              Kingdom projects coordinated across all Word of Faith Churches
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {nationalPrograms.map((program) => (
                <div key={program.id} className="border border-primary/20 rounded-lg p-4 bg-sanctuary/30">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-foreground">{program.title}</h3>
                    <Badge variant={program.status === 'Active' ? 'default' : 'secondary'}>
                      {program.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{program.description}</p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Participants:</span>
                      <span className="text-foreground">{program.participants}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="text-foreground">{program.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Timeline:</span>
                      <span className="text-foreground">{program.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Coordinator:</span>
                      <span className="text-primary font-medium">{program.coordinator}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Regional Overview */}
        <Card className="mb-8 border-primary/20 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center">
              <Globe className="w-5 h-5 mr-2 text-primary" />
              Regional Overview
            </CardTitle>
            <CardDescription>
              Distribution of Word of Faith Churches across Kenya's regions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {regionalStats.map((region) => (
                <div key={region.region} className="border border-primary/20 rounded-lg p-4 bg-sanctuary/20">
                  <h3 className="font-semibold text-foreground mb-2">{region.region} Region</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Churches:</span>
                      <span className="font-bold text-primary">{region.churches}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Youth:</span>
                      <span className="font-bold text-foreground">{region.members}</span>
                    </div>
                    <div className="mt-3 pt-2 border-t border-primary/20">
                      <p className="text-xs text-muted-foreground">Coordinator:</p>
                      <p className="text-xs font-medium text-primary">{region.coordinator}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">
              <FileText className="w-5 h-5 mr-2" />
              HQ Reports
            </Button>
            <Button variant="outline" size="lg">
              <Calendar className="w-5 h-5 mr-2" />
              National Calendar
            </Button>
            <Button variant="outline" size="lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Leadership Forum
            </Button>
            <Button variant="outline" size="lg">
              <Building2 className="w-5 h-5 mr-2" />
              Register New Church
            </Button>
          </div>
          
          <div className="bg-primary/5 p-4 rounded border-l-4 border-primary max-w-2xl mx-auto">
            <p className="text-sm text-primary/80 italic">
              "And he gave the apostles, the prophets, the evangelists, the shepherds and teachers, 
              to equip the saints for the work of ministry" - Ephesians 4:11-12
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HQForum;