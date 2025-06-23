
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Eye, Calendar, Package, TrendingUp, Clock, ShoppingCart, MapPin } from "lucide-react";

// Mock data based on the sample data structure
const buyLeadsData = [
  {
    id: "46b59877-f72a-47e8-9256-ede2bd4647d1",
    user_id: "1701bd49-d56a-4f44-aa14-0b412b717c8b",
    product_title: "Fresh Dragon Fruit",
    product_category: "fruit",
    product_type: "Dragon Fruit",
    min_quantity: "50",
    max_quantity: "100",
    unit: "ton",
    required_for: "Business",
    expiry_date: "2025-06-13 18:30:00+00",
    description: "I need a Dragon Fruit ,from indian exporters. I looking new exporters who can build trust and supply for us in comming days.",
    status: "active" as const,
    view_count: 15,
    created_at: "2025-06-02 14:12:23.33783+00",
    buyer_email: "alphabuyer@gmail.com",
    location: "Germany"
  },
  {
    id: "47b59877-f72a-47e8-9256-ede2bd4647d2",
    user_id: "1801bd49-d56a-4f44-aa14-0b412b717c9c",
    product_title: "Organic Coconut Oil",
    product_category: "oils",
    product_type: "Coconut Oil",
    min_quantity: "200",
    max_quantity: "500",
    unit: "liters",
    required_for: "Business",
    expiry_date: "2025-07-20 18:30:00+00",
    description: "Looking for premium organic coconut oil for our European distribution. Quality certification required.",
    status: "active" as const,
    view_count: 28,
    created_at: "2025-06-10 09:15:30.33783+00",
    buyer_email: "buyer@germany.com",
    location: "Berlin, Germany"
  },
  {
    id: "48b59877-f72a-47e8-9256-ede2bd4647d3",
    user_id: "1901bd49-d56a-4f44-aa14-0b412b717c8d",
    product_title: "Fresh Mangoes",
    product_category: "fruit",
    product_type: "Mango",
    min_quantity: "25",
    max_quantity: "75",
    unit: "ton",
    required_for: "Retail",
    expiry_date: "2025-06-05 18:30:00+00",
    description: "Need fresh mangoes for retail chain. Regular supply needed during season.",
    status: "expired" as const,
    view_count: 42,
    created_at: "2025-05-20 16:45:15.33783+00",
    buyer_email: "retail@italy.com",
    location: "Rome, Italy"
  }
];

export default function BuyLeads() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'expired':
        return <Badge variant="secondary">Expired</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const isExpiringSoon = (expiryDate: string) => {
    const expiry = new Date(expiryDate);
    const now = new Date();
    const diffInDays = (expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
    return diffInDays <= 3 && diffInDays > 0;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Buy Leads</h1>
          <p className="text-muted-foreground">
            Monitor and manage buyer requirements and leads
          </p>
        </div>
        <Button>
          <ShoppingCart className="w-4 h-4 mr-2" />
          Create Lead
        </Button>
      </div>

      <div className="grid gap-6">
        {buyLeadsData.map((lead) => (
          <Card key={lead.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="text-lg bg-blue-100">
                      <ShoppingCart className="w-6 h-6 text-blue-600" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl">{lead.product_title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {lead.product_category} • {lead.product_type}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusBadge(lead.status)}
                  {isExpiringSoon(lead.expiry_date) && (
                    <Badge variant="destructive">Expiring Soon</Badge>
                  )}
                  <Badge variant="outline">{lead.required_for}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{lead.min_quantity} - {lead.max_quantity} {lead.unit}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{lead.view_count} views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Expires: {formatDate(lead.expiry_date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{lead.location}</span>
                </div>
              </div>

              <div className="p-3 bg-muted/50 rounded-lg mb-4">
                <h4 className="text-sm font-medium mb-1">Requirements</h4>
                <p className="text-sm text-muted-foreground">
                  {lead.description}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  Created on {formatDate(lead.created_at)} by {lead.buyer_email}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View Applications
                  </Button>
                  <Button variant="outline" size="sm">
                    Contact Buyer
                  </Button>
                  {lead.status === 'active' && (
                    <Button size="sm">
                      Promote Lead
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
