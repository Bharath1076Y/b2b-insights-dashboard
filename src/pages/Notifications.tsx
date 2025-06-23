
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Bell, CheckCheck, Trash2, Settings, Filter } from "lucide-react";
import { ExporterNotification } from "@/types/database";

// Mock data for notifications
const mockNotifications: ExporterNotification[] = [
  {
    id: "ecb7c9d4-7c4e-48ac-908f-c009a8ecb167",
    exporter_user_id: "9a8b5cc2-fb43-4bba-8eb6-1b3ec0033bad",
    title: "New Certificate Added",
    message: "You have successfully uploaded a new certificate: FIEO Membership",
    type: "certificate",
    reference_id: "840b5b07-148a-4647-b419-9bbe860336e1",
    is_read: true,
    created_at: "2025-06-16 06:49:53.175922+00",
    updated_at: "2025-06-16 06:50:10.263442+00"
  },
  {
    id: "ecb7c9d4-7c4e-48ac-908f-c009a8ecb168",
    exporter_user_id: "3ca5d3db-b7f7-408b-ae75-0239087820a6",
    title: "New Buy Lead Match",
    message: "A new buy lead for 'Fresh Dragon Fruit' matches your product catalog. Click to view details.",
    type: "buy_lead",
    reference_id: "46b59877-f72a-47e8-9256-ede2bd4647d1",
    is_read: false,
    created_at: "2025-06-17 10:30:00.000+00",
    updated_at: "2025-06-17 10:30:00.000+00"
  },
  {
    id: "ecb7c9d4-7c4e-48ac-908f-c009a8ecb169",
    exporter_user_id: "7a43c1af-cd09-4013-92fc-adf1bbb5e33e",
    title: "Payment Received",
    message: "Your premium subscription payment of ₹1,999 has been successfully processed.",
    type: "payment",
    reference_id: "pay_Qh6l6DpTGAYmIP",
    is_read: false,
    created_at: "2025-06-18 14:25:00.000+00",
    updated_at: "2025-06-18 14:25:00.000+00"
  },
  {
    id: "ecb7c9d4-7c4e-48ac-908f-c009a8ecb170",
    exporter_user_id: "3ca5d3db-b7f7-408b-ae75-0239087820a6",
    title: "Profile Verification Complete",
    message: "Your exporter profile has been successfully verified. You can now access premium features.",
    type: "verification",
    reference_id: "profile_verification_001",
    is_read: true,
    created_at: "2025-06-15 09:15:00.000+00",
    updated_at: "2025-06-15 12:30:00.000+00"
  },
  {
    id: "ecb7c9d4-7c4e-48ac-908f-c009a8ecb171",
    exporter_user_id: "9a8b5cc2-fb43-4bba-8eb6-1b3ec0033bad",
    title: "New Message Received",
    message: "You have received a new message from buyer@germany.com regarding your dragon fruit products.",
    type: "message",
    reference_id: "msg_001",
    is_read: false,
    created_at: "2025-06-19 16:45:00.000+00",
    updated_at: "2025-06-19 16:45:00.000+00"
  }
];

export default function Notifications() {
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'certificate':
        return '📜';
      case 'buy_lead':
        return '🎯';
      case 'payment':
        return '💳';
      case 'verification':
        return '✅';
      case 'message':
        return '💬';
      default:
        return '🔔';
    }
  };

  const getTypeBadge = (type: string) => {
    const typeColors = {
      certificate: 'bg-blue-100 text-blue-800',
      buy_lead: 'bg-green-100 text-green-800',
      payment: 'bg-purple-100 text-purple-800',
      verification: 'bg-emerald-100 text-emerald-800',
      message: 'bg-orange-100 text-orange-800'
    };

    return (
      <Badge className={typeColors[type as keyof typeof typeColors] || 'bg-gray-100 text-gray-800'}>
        {type.replace('_', ' ').toUpperCase()}
      </Badge>
    );
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h ago`;
    } else if (diffInHours < 48) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString();
    }
  };

  const unreadCount = mockNotifications.filter(n => !n.is_read).length;
  const todayCount = mockNotifications.filter(n => {
    const today = new Date();
    const notificationDate = new Date(n.created_at);
    return notificationDate.toDateString() === today.toDateString();
  }).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">
            Manage platform notifications and alerts
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
          <Button variant="outline">
            <CheckCheck className="w-4 h-4 mr-2" />
            Mark All Read
          </Button>
        </div>
      </div>

      {/* Notification Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Notifications</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockNotifications.length}</div>
            <p className="text-xs text-muted-foreground">
              All time notifications
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unread</CardTitle>
            <div className="h-4 w-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">{unreadCount}</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{unreadCount}</div>
            <p className="text-xs text-muted-foreground">
              Require attention
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today</CardTitle>
            <div className="h-4 w-4 bg-blue-500 rounded-full"></div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayCount}</div>
            <p className="text-xs text-muted-foreground">
              Notifications today
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <div className="h-4 w-4 bg-green-500 rounded-full"></div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockNotifications.length}</div>
            <p className="text-xs text-muted-foreground">
              Weekly activity
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search notifications..." className="pl-10" />
        </div>
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="certificate">Certificate</SelectItem>
            <SelectItem value="buy_lead">Buy Lead</SelectItem>
            <SelectItem value="payment">Payment</SelectItem>
            <SelectItem value="verification">Verification</SelectItem>
            <SelectItem value="message">Message</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="unread">Unread</SelectItem>
            <SelectItem value="read">Read</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Notifications List */}
      <div className="grid gap-3">
        {mockNotifications.map((notification) => (
          <Card 
            key={notification.id} 
            className={`hover:shadow-md transition-shadow cursor-pointer ${
              !notification.is_read ? 'border-l-4 border-l-blue-500 bg-blue-50/30' : ''
            }`}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className="text-2xl mt-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-medium ${!notification.is_read ? 'font-semibold' : ''}`}>
                        {notification.title}
                      </h3>
                      {getTypeBadge(notification.type)}
                      {!notification.is_read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {notification.message}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{formatTime(notification.created_at)}</span>
                      <span>Ref: {notification.reference_id}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  {!notification.is_read && (
                    <Button variant="ghost" size="sm">
                      <CheckCheck className="w-4 h-4" />
                    </Button>
                  )}
                  <Button variant="ghost" size="sm">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
