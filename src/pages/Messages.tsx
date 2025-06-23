
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Mail, Send, Search, Clock, CheckCheck, User, Filter } from "lucide-react";

// Mock data based on the sample data structure
const messagesData = [
  {
    id: "a70f1060-7067-4f3c-87ed-12aa1a01dae6",
    sender_email: "alphabuyer@gmail.com",
    receiver_email: "admin@gmail.com",
    content: "Hi South Indian Fruits and Vegetables Exporters limited",
    is_read: true,
    created_at: "2025-06-07 08:30:38.494+00",
    updated_at: "2025-06-07 08:30:39.309876+00",
    is_deleted: false,
    message_type: "text"
  },
  {
    id: "a3fd1eb6-5939-41e4-b077-b5d511ee5d3d",
    sender_email: "admin@gmail.com",
    receiver_email: "alphabuyer@gmail.com",
    content: "hello alpha buyer",
    is_read: true,
    created_at: "2025-05-29 08:05:09.989+00",
    updated_at: "2025-05-29 15:00:39.194+00",
    is_deleted: false,
    message_type: "text"
  },
  {
    id: "b4fd1eb6-5939-41e4-b077-b5d511ee5d3e",
    sender_email: "shilpa@gmail.com",
    receiver_email: "bharath@gmail.com",
    content: "Congratulations! Your application for \"Fresh Dragon Fruit\" buy lead has been accepted. We look forward to working with you.",
    is_read: false,
    created_at: "2025-06-15 10:30:00.000+00",
    updated_at: "2025-06-15 10:30:00.000+00",
    is_deleted: false,
    message_type: "application_accepted"
  },
  {
    id: "c5fd1eb6-5939-41e4-b077-b5d511ee5d3f",
    sender_email: "buyer@germany.com",
    receiver_email: "admin@gmail.com",
    content: "I'm interested in your dragon fruit products. Can you provide more details about shipping to Europe?",
    is_read: false,
    created_at: "2025-06-16 14:20:00.000+00",
    updated_at: "2025-06-16 14:20:00.000+00",
    is_deleted: false,
    message_type: "inquiry"
  }
];

export default function Messages() {
  const getMessageTypeIcon = (type: string) => {
    switch (type) {
      case 'application_accepted':
        return <CheckCheck className="w-4 h-4 text-green-500" />;
      case 'inquiry':
        return <Mail className="w-4 h-4 text-blue-500" />;
      default:
        return <User className="w-4 h-4 text-gray-500" />;
    }
  };

  const getMessageTypeBadge = (type: string) => {
    switch (type) {
      case 'application_accepted':
        return <Badge className="bg-green-100 text-green-800">Application</Badge>;
      case 'inquiry':
        return <Badge className="bg-blue-100 text-blue-800">Inquiry</Badge>;
      default:
        return <Badge variant="outline">Text</Badge>;
    }
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 24) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
          <p className="text-muted-foreground">
            Manage platform communications and user messages
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button>
            <Send className="w-4 h-4 mr-2" />
            Compose
          </Button>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search messages..." className="pl-10" />
        </div>
      </div>

      <div className="grid gap-4">
        {messagesData.map((message) => (
          <Card key={message.id} className={`hover:shadow-md transition-shadow ${!message.is_read ? 'border-l-4 border-l-blue-500' : ''}`}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback>
                      {message.sender_email.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{message.sender_email}</p>
                      {getMessageTypeIcon(message.message_type)}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      to {message.receiver_email}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getMessageTypeBadge(message.message_type)}
                  {!message.is_read && (
                    <Badge variant="secondary">Unread</Badge>
                  )}
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {formatTime(message.created_at)}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-3 rounded-lg mb-3">
                <p className="text-sm">{message.content}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Reply
                </Button>
                <Button variant="outline" size="sm">
                  Forward
                </Button>
                {!message.is_read && (
                  <Button variant="outline" size="sm">
                    Mark as Read
                  </Button>
                )}
                <Button variant="outline" size="sm">
                  Archive
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
