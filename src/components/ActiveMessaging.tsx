import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, Phone, Video, MoreVertical, ArrowLeft } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: string;
  isOwn: boolean;
}

interface Chat {
  id: number;
  name: string;
  type: "Pastor" | "Group" | "Ministry";
  lastMessage: string;
  timestamp: string;
  unread: number;
  avatar: string;
  messages: Message[];
}

const initialChats: Chat[] = [
  {
    id: 1,
    name: "Pastor Michael Johnson",
    type: "Pastor",
    lastMessage: "I'll be praying for your situation. Let's schedule a time to talk more.",
    timestamp: "2 hours ago",
    unread: 2,
    avatar: "MJ",
    messages: [
      { id: 1, text: "Hi Pastor, I wanted to talk about something that's been bothering me.", sender: "You", timestamp: "3:20 PM", isOwn: true },
      { id: 2, text: "Of course, I'm here to listen. What's on your heart?", sender: "Pastor Michael", timestamp: "3:22 PM", isOwn: false },
      { id: 3, text: "I've been struggling with doubt lately, especially about my faith journey.", sender: "You", timestamp: "3:25 PM", isOwn: true },
      { id: 4, text: "That's completely normal and shows spiritual maturity. Doubt can actually strengthen faith when we work through it together.", sender: "Pastor Michael", timestamp: "3:27 PM", isOwn: false },
      { id: 5, text: "I'll be praying for your situation. Let's schedule a time to talk more.", sender: "Pastor Michael", timestamp: "3:30 PM", isOwn: false }
    ]
  },
  {
    id: 2,
    name: "Seedlings Fellowship",
    type: "Group",
    lastMessage: "Emily: Don't forget about youth retreat registration!",
    timestamp: "1 day ago",
    unread: 0,
    avatar: "SF",
    messages: [
      { id: 1, text: "Hey everyone! Hope you're all doing well 🙏", sender: "Sarah", timestamp: "Yesterday", isOwn: false },
      { id: 2, text: "Don't forget about youth retreat registration!", sender: "Emily", timestamp: "Yesterday", isOwn: false },
      { id: 3, text: "I'm so excited for the retreat! When is the deadline?", sender: "You", timestamp: "Yesterday", isOwn: true },
      { id: 4, text: "Registration closes this Friday at midnight", sender: "Emily", timestamp: "Yesterday", isOwn: false }
    ]
  },
  {
    id: 3,
    name: "Heavenly Voices Team",
    type: "Ministry",
    lastMessage: "Practice moved to Wednesday 6PM instead of 7PM",
    timestamp: "2 days ago",
    unread: 1,
    avatar: "HV",
    messages: [
      { id: 1, text: "Team meeting update:", sender: "Choir Director", timestamp: "2 days ago", isOwn: false },
      { id: 2, text: "Practice moved to Wednesday 6PM instead of 7PM", sender: "Choir Director", timestamp: "2 days ago", isOwn: false },
      { id: 3, text: "Got it, thanks for the update!", sender: "You", timestamp: "2 days ago", isOwn: true }
    ]
  }
];

const ActiveMessaging = () => {
  const [chats, setChats] = useState<Chat[]>(initialChats);
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;

    const message: Message = {
      id: Date.now(),
      text: newMessage,
      sender: "You",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOwn: true
    };

    setChats(prevChats =>
      prevChats.map(chat =>
        chat.id === selectedChat.id
          ? {
              ...chat,
              messages: [...chat.messages, message],
              lastMessage: newMessage,
              timestamp: "now"
            }
          : chat
      )
    );

    setSelectedChat(prev => 
      prev ? { ...prev, messages: [...prev.messages, message] } : null
    );

    setNewMessage("");

    // Simulate response (in real app, this would come from server)
    if (selectedChat.type === "Pastor") {
      setTimeout(() => {
        const response: Message = {
          id: Date.now() + 1,
          text: "Thank you for sharing. I'm here for you always. Let's continue this in our next meeting.",
          sender: selectedChat.name,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isOwn: false
        };

        setChats(prevChats =>
          prevChats.map(chat =>
            chat.id === selectedChat.id
              ? {
                  ...chat,
                  messages: [...chat.messages, response],
                  lastMessage: response.text,
                  timestamp: "now"
                }
              : chat
          )
        );

        setSelectedChat(prev => 
          prev ? { ...prev, messages: [...prev.messages, response] } : null
        );
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const showChatList = !selectedChat || !isMobile;
  const showChatWindow = selectedChat && (!isMobile || !showChatList);

  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Sacred <span className="text-primary">Messaging</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base px-2">
            Connect with pastors and fellowship members in a safe, monitored environment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {/* Chat List */}
          {showChatList && (
            <Card className="lg:col-span-1 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center text-lg">
                  <MessageCircle className="w-5 h-5 mr-2 text-primary" />
                  Conversations
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[400px] md:h-[500px]">
                  <div className="space-y-2 p-4">
                    {chats.map((chat) => (
                      <div
                        key={chat.id}
                        onClick={() => setSelectedChat(chat)}
                        className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                          selectedChat?.id === chat.id 
                            ? 'bg-primary/10 border border-primary/20' 
                            : 'bg-muted/20 hover:bg-muted/30'
                        }`}
                      >
                        <Avatar className="w-10 h-10 flex-shrink-0">
                          <AvatarFallback className="bg-primary/10 text-primary text-sm">
                            {chat.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-foreground truncate">
                              {chat.name}
                            </p>
                            <div className="flex items-center space-x-2 flex-shrink-0">
                              <Badge 
                                variant={chat.type === "Pastor" ? "default" : "secondary"} 
                                className="text-xs"
                              >
                                {chat.type}
                              </Badge>
                              {chat.unread > 0 && (
                                <Badge variant="destructive" className="text-xs px-1.5">
                                  {chat.unread}
                                </Badge>
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
                </ScrollArea>
              </CardContent>
            </Card>
          )}

          {/* Chat Window */}
          {showChatWindow && (
            <Card className="lg:col-span-2 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader className="border-b border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {isMobile && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedChat(null)}
                        className="mr-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </Button>
                    )}
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-primary/10 text-primary text-sm">
                        {selectedChat?.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-foreground">{selectedChat?.name}</h3>
                      <Badge variant={selectedChat?.type === "Pastor" ? "default" : "secondary"} className="text-xs">
                        {selectedChat?.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Video className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[300px] md:h-[400px] p-4">
                  <div className="space-y-4">
                    {selectedChat?.messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-lg ${
                            message.isOwn
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <p className={`text-xs mt-1 ${
                            message.isOwn ? 'text-primary-foreground/70' : 'text-muted-foreground/70'
                          }`}>
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="border-t border-border p-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    All conversations are monitored for safety and compliance
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Welcome Message when no chat selected */}
          {!selectedChat && !isMobile && (
            <Card className="lg:col-span-2 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="flex items-center justify-center h-[500px]">
                <div className="text-center">
                  <MessageCircle className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Select a conversation
                  </h3>
                  <p className="text-muted-foreground">
                    Choose a chat from the list to start messaging
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Safety Notice */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
            All conversations are encrypted and monitored by pastoral staff to ensure a safe, 
            Christ-centered communication environment. Report any inappropriate behavior immediately.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ActiveMessaging;