import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Share2, MessageCircle, BookOpen, Clock, Bell } from "lucide-react";
import { useState, useEffect } from "react";

const dailyVerses = [
  {
    id: 1,
    verse: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, to give you hope and a future.",
    reference: "Jeremiah 29:11",
    theme: "Hope & Future",
    likes: 47,
    comments: 12,
    time: "6:00 AM"
  },
  {
    id: 2,
    verse: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    reference: "Proverbs 3:5-6",
    theme: "Trust & Guidance",
    likes: 63,
    comments: 18,
    time: "12:00 PM"
  },
  {
    id: 3,
    verse: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    reference: "Romans 8:28",
    theme: "God's Purpose",
    likes: 89,
    comments: 24,
    time: "6:00 PM"
  }
];

const prayerReminders = [
  { time: "6:00 AM", title: "Morning Prayer", icon: "🌅" },
  { time: "12:00 PM", title: "Midday Reflection", icon: "☀️" },
  { time: "6:00 PM", title: "Evening Devotion", icon: "🌙" },
  { time: "9:00 PM", title: "Night Prayers", icon: "⭐" }
];

const DailyFeed = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [likedVerses, setLikedVerses] = useState(new Set());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const handleLike = (verseId: number) => {
    setLikedVerses(prev => {
      const newSet = new Set(prev);
      if (newSet.has(verseId)) {
        newSet.delete(verseId);
      } else {
        newSet.add(verseId);
      }
      return newSet;
    });
  };

  const isCurrentPrayerTime = (time: string) => {
    const now = currentTime.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
    return now === time;
  };

  return (
    <section className="py-16 bg-gradient-sanctuary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Daily Word & Fellowship Feed
          </h2>
          <p className="text-muted-foreground text-lg">
            "Let the message of Christ dwell among you richly" - Colossians 3:16
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {/* Prayer Reminders */}
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Bell className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Prayer Reminders Today</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {prayerReminders.map((reminder, index) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-lg text-center transition-divine ${
                      isCurrentPrayerTime(reminder.time) 
                        ? 'bg-primary text-primary-foreground animate-faith-pulse' 
                        : 'bg-secondary'
                    }`}
                  >
                    <div className="text-2xl mb-1">{reminder.icon}</div>
                    <div className="text-sm font-medium">{reminder.time}</div>
                    <div className="text-xs">{reminder.title}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Daily Bible Verses Feed */}
          {dailyVerses.map((verseData) => (
            <Card key={verseData.id} className="border-primary/20 bg-card/80 backdrop-blur-sm hover:shadow-divine transition-divine">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <Badge variant="secondary">{verseData.theme}</Badge>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{verseData.time}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-foreground leading-relaxed border-l-4 border-primary pl-4">
                  "{verseData.verse}"
                </blockquote>
                <div className="text-right">
                  <cite className="text-primary font-semibold">- {verseData.reference}</cite>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-4">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleLike(verseData.id)}
                      className={`space-x-2 ${likedVerses.has(verseData.id) ? 'text-red-500' : ''}`}
                    >
                      <Heart className={`w-4 h-4 ${likedVerses.has(verseData.id) ? 'fill-current' : ''}`} />
                      <span>{verseData.likes + (likedVerses.has(verseData.id) ? 1 : 0)}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="space-x-2">
                      <MessageCircle className="w-4 h-4" />
                      <span>{verseData.comments}</span>
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
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

export default DailyFeed;