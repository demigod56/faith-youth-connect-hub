import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Church, MapPin, Users, Phone, Mail } from "lucide-react";
import { useState } from "react";

const kenyanCounties = [
  "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Kiambu", "Thika", "Machakos", "Meru", "Nyeri",
  "Kakamega", "Kitale", "Garissa", "Malindi", "Lamu", "Isiolo", "Marsabit", "Turkana", "West Pokot", "Samburu",
  "Laikipia", "Nyandarua", "Muranga", "Kirinyaga", "Embu", "Tharaka Nithi", "Kitui", "Makueni", "Taita Taveta",
  "Kwale", "Kilifi", "Tana River", "Baringo", "Elgeyo Marakwet", "Nandi", "Trans Nzoia", "Uasin Gishu", "Bungoma",
  "Busia", "Siaya", "Kisii", "Nyamira", "Narok", "Kajiado", "Kericho", "Bomet", "Migori", "Homa Bay", "Vihiga"
];

const ChurchRegistration = () => {
  const [formData, setFormData] = useState({
    churchName: "",
    county: "",
    city: "",
    address: "",
    pastorName: "",
    pastorPhone: "",
    pastorEmail: "",
    youthPastorName: "",
    youthPastorPhone: "",
    youthPastorEmail: "",
    expectedMembers: "",
    description: ""
  });

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Church className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Register Your <span className="text-primary">Church</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            "And I tell you that you are Peter, and on this rock I will build my church" - Matthew 16:18
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Join the Word of Faith Church network across Kenya. Register your local church 
            to connect with the youth ministry platform and access Kingdom resources.
          </p>
        </div>

        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center">
              <Church className="w-5 h-5 mr-2 text-primary" />
              Church Information
            </CardTitle>
            <CardDescription>
              Provide details about your local Word of Faith Church branch
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="churchName">Church Name *</Label>
                <Input
                  id="churchName"
                  placeholder="Word of Faith Church - [Location]"
                  value={formData.churchName}
                  onChange={(e) => setFormData({...formData, churchName: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="county">County *</Label>
                <Select value={formData.county} onValueChange={(value) => setFormData({...formData, county: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select county" />
                  </SelectTrigger>
                  <SelectContent>
                    {kenyanCounties.map((county) => (
                      <SelectItem key={county} value={county.toLowerCase()}>
                        {county}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">City/Town *</Label>
                <Input
                  id="city"
                  placeholder="Enter city or town"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="expectedMembers">Expected Youth Members</Label>
                <Input
                  id="expectedMembers"
                  type="number"
                  placeholder="Estimated youth membership"
                  value={formData.expectedMembers}
                  onChange={(e) => setFormData({...formData, expectedMembers: e.target.value})}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="address">Physical Address</Label>
              <Textarea
                id="address"
                placeholder="Complete physical address including landmarks"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                rows={3}
              />
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-primary" />
                Pastoral Leadership
              </h3>
              
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="pastorName">Lead Pastor Name *</Label>
                    <Input
                      id="pastorName"
                      placeholder="Pastor's full name"
                      value={formData.pastorName}
                      onChange={(e) => setFormData({...formData, pastorName: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="pastorPhone">Pastor Phone *</Label>
                    <Input
                      id="pastorPhone"
                      placeholder="+254..."
                      value={formData.pastorPhone}
                      onChange={(e) => setFormData({...formData, pastorPhone: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="pastorEmail">Pastor Email</Label>
                    <Input
                      id="pastorEmail"
                      type="email"
                      placeholder="pastor@church.com"
                      value={formData.pastorEmail}
                      onChange={(e) => setFormData({...formData, pastorEmail: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="youthPastorName">Youth Pastor Name</Label>
                    <Input
                      id="youthPastorName"
                      placeholder="Youth pastor's name"
                      value={formData.youthPastorName}
                      onChange={(e) => setFormData({...formData, youthPastorName: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="youthPastorPhone">Youth Pastor Phone</Label>
                    <Input
                      id="youthPastorPhone"
                      placeholder="+254..."
                      value={formData.youthPastorPhone}
                      onChange={(e) => setFormData({...formData, youthPastorPhone: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="youthPastorEmail">Youth Pastor Email</Label>
                    <Input
                      id="youthPastorEmail"
                      type="email"
                      placeholder="youth@church.com"
                      value={formData.youthPastorEmail}
                      onChange={(e) => setFormData({...formData, youthPastorEmail: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="description">Church Description</Label>
              <Textarea
                id="description"
                placeholder="Brief description of your church ministry and vision"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                rows={3}
              />
            </div>

            <div className="bg-primary/5 p-4 rounded border-l-4 border-primary">
              <p className="text-sm text-primary/80 italic">
                "How beautiful on the mountains are the feet of those who bring good news" - Isaiah 52:7
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Your church registration will be reviewed by Word of Faith HQ before activation.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button size="lg" className="flex-1">
                <Church className="w-4 h-4 mr-2" />
                Submit Registration
              </Button>
              <Button variant="outline" size="lg">
                Save Draft
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Need assistance with registration? Contact Word of Faith HQ
          </p>
          <div className="flex justify-center gap-4">
            <Badge variant="outline" className="flex items-center gap-2">
              <Phone className="w-3 h-3" />
              +254 700 000 000
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <Mail className="w-3 h-3" />
              hq@wordoffaith.ke
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChurchRegistration;