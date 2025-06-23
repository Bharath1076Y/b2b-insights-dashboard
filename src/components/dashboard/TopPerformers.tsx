
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const topExporters = [
  {
    name: "Shilpa Pvt Ltd",
    email: "shilpa@gmail.com",
    products: 15,
    revenue: "₹2,45,000",
    status: "premium",
    badge: "Top Performer"
  },
  {
    name: "TajFresh Dragon™",
    email: "admin@gmail.com",
    products: 12,
    revenue: "₹1,89,000",
    status: "premium",
    badge: "Rising Star"
  },
  {
    name: "South Indian Fruits Ltd",
    email: "bharath@gmail.com",
    products: 8,
    revenue: "₹1,23,000",
    status: "free",
    badge: "Consistent"
  }
];

export function TopPerformers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Performing Exporters</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topExporters.map((exporter, index) => (
            <div key={exporter.email} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
                #{index + 1}
              </div>
              <Avatar className="w-10 h-10">
                <AvatarFallback className="text-sm">
                  {exporter.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-medium text-sm truncate">{exporter.name}</p>
                  <Badge variant={exporter.status === 'premium' ? 'default' : 'secondary'} className="text-xs">
                    {exporter.status}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{exporter.products} products • {exporter.revenue}</p>
              </div>
              <Badge variant="outline" className="text-xs">
                {exporter.badge}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
