
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Bell, UserPlus, Package, MessageSquare, CreditCard } from "lucide-react";

const activities = [
  {
    id: 1,
    type: 'new_user',
    message: 'New exporter registered: Shilpa Pvt Ltd',
    time: '2 minutes ago',
    icon: UserPlus,
    badge: 'New User'
  },
  {
    id: 2,
    type: 'product',
    message: 'New product listed: Indian Fresh Dragon Fruit',
    time: '5 minutes ago',
    icon: Package,
    badge: 'Product'
  },
  {
    id: 3,
    type: 'message',
    message: 'New message from alphabuyer@gmail.com',
    time: '10 minutes ago',
    icon: MessageSquare,
    badge: 'Message'
  },
  {
    id: 4,
    type: 'payment',
    message: 'Premium subscription payment received',
    time: '15 minutes ago',
    icon: CreditCard,
    badge: 'Payment'
  },
  {
    id: 5,
    type: 'notification',
    message: 'Certificate verification completed',
    time: '20 minutes ago',
    icon: Bell,
    badge: 'System'
  }
];

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-80">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <activity.icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium leading-none mb-1">
                    {activity.message}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                    <Badge variant="secondary" className="text-xs">
                      {activity.badge}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
