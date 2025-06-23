
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, CreditCard, DollarSign, Users, CheckCircle, Clock, XCircle } from "lucide-react";

// Mock data based on the sample data structure
const subscriptionsData = [
  {
    id: "7e585563-0102-46c4-816e-dc54e80b5024",
    exporter_user_id: "7a43c1af-cd09-4013-92fc-adf1bbb5e33e",
    exporter_email: "premium@exporter.com",
    exporter_name: "Premium Exports Ltd",
    plan_type: "premium" as const,
    started_at: "2025-06-14 14:24:59.606+00",
    expires_at: "2026-06-14 14:24:59.606+00",
    payment_id: "pay_Qh6l6DpTGAYmIP",
    order_id: "order_Qh6klIAzHmiIsp",
    amount: "1999.00",
    status: "active" as const,
    created_at: "2025-06-14 14:25:00.538692+00",
    updated_at: "2025-06-14 14:25:00.538692+00",
    payment_method: "card"
  },
  {
    id: "8f585563-0102-46c4-816e-dc54e80b5025",
    exporter_user_id: "8b43c1af-cd09-4013-92fc-adf1bbb5e34f",
    exporter_email: "basic@exporter.com",
    exporter_name: "Basic Exports Co",
    plan_type: "free" as const,
    started_at: "2025-05-20 10:15:30.606+00",
    expires_at: "2025-11-20 10:15:30.606+00",
    payment_id: "",
    order_id: "",
    amount: "0.00",
    status: "active" as const,
    created_at: "2025-05-20 10:15:30.538692+00",
    updated_at: "2025-05-20 10:15:30.538692+00",
    payment_method: "free"
  },
  {
    id: "9g585563-0102-46c4-816e-dc54e80b5026",
    exporter_user_id: "9c43c1af-cd09-4013-92fc-adf1bbb5e35g",
    exporter_email: "expired@exporter.com",
    exporter_name: "Expired Exports Inc",
    plan_type: "premium" as const,
    started_at: "2024-06-14 14:24:59.606+00",
    expires_at: "2025-06-14 14:24:59.606+00",
    payment_id: "pay_OldPayment123",
    order_id: "order_OldOrder456",
    amount: "1999.00",
    status: "completed" as const,
    created_at: "2024-06-14 14:25:00.538692+00",
    updated_at: "2025-06-14 14:25:00.538692+00",
    payment_method: "card"
  }
];

export default function Subscriptions() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'completed':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'failed':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'completed':
        return <Badge variant="secondary">Expired</Badge>;
      case 'failed':
        return <Badge variant="destructive">Failed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getPlanBadge = (plan: string) => {
    return plan === 'premium' ? 
      <Badge variant="default">Premium</Badge> : 
      <Badge variant="outline">Free</Badge>;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const isExpiringSoon = (expiryDate: string) => {
    const expiry = new Date(expiryDate);
    const now = new Date();
    const diffInDays = (expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
    return diffInDays <= 30 && diffInDays > 0;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Subscriptions</h1>
          <p className="text-muted-foreground">
            Monitor and manage exporter subscription plans
          </p>
        </div>
        <Button>
          <Users className="w-4 h-4 mr-2" />
          Subscription Analytics
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Subscriptions</p>
                <p className="text-2xl font-bold">2</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500 ml-auto" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Premium Plans</p>
                <p className="text-2xl font-bold">1</p>
              </div>
              <CreditCard className="h-8 w-8 text-blue-500 ml-auto" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Monthly Revenue</p>
                <p className="text-2xl font-bold">₹1,999</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-500 ml-auto" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Free Users</p>
                <p className="text-2xl font-bold">1</p>
              </div>
              <Users className="h-8 w-8 text-gray-500 ml-auto" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6">
        {subscriptionsData.map((subscription) => (
          <Card key={subscription.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="text-lg">
                      {subscription.exporter_name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      {subscription.exporter_name}
                      {getStatusIcon(subscription.status)}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{subscription.exporter_email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusBadge(subscription.status)}
                  {getPlanBadge(subscription.plan_type)}
                  {isExpiringSoon(subscription.expires_at) && (
                    <Badge variant="destructive">Expiring Soon</Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">₹{subscription.amount}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Started: {formatDate(subscription.started_at)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Expires: {formatDate(subscription.expires_at)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{subscription.payment_method}</span>
                </div>
              </div>

              {subscription.payment_id && (
                <div className="p-3 bg-muted/50 rounded-lg mb-4">
                  <h4 className="text-sm font-medium mb-2">Payment Details</h4>
                  <div className="grid md:grid-cols-2 gap-2 text-sm">
                    <div>Payment ID: {subscription.payment_id}</div>
                    <div>Order ID: {subscription.order_id}</div>
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  Contact User
                </Button>
                {subscription.status === 'active' && subscription.plan_type === 'free' && (
                  <Button size="sm">
                    Upgrade to Premium
                  </Button>
                )}
                {subscription.status === 'completed' && (
                  <Button size="sm">
                    Renew Subscription
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
