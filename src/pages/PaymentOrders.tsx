import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download, Eye, CreditCard, Calendar, DollarSign, TrendingUp } from "lucide-react";
import { PayPerProductOrder, SlotPayment, ExporterSubscription } from "@/types/database";

// Mock data for payment orders
const mockPayPerProductOrders: PayPerProductOrder[] = [
  {
    id: "591ca8f2-6af5-40c6-a3c0-33786c32571f",
    user_id: "7a43c1af-cd09-4013-92fc-adf1bbb5e33e",
    plan_id: "single",
    amount: "149",
    status: "completed",
    products_count: 1,
    created_at: "2025-06-13 05:20:23.465821+00",
    updated_at: "2025-06-13 05:20:23.465821+00",
    payment_id: "pay_QgYxv7CLi1gybF",
    payment_signature: "ebc8f2a682aaba091cc96bd4b9b41817ff205b7c1a36f5873a7492fcf2d435a0",
    order_id: "order_QgYx4nHOe3wrv0",
    payment_method: "card"
  }
];

const mockSlotPayments: SlotPayment[] = [
  {
    id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    user_id: "3b501531-28b9-466c-a8a6-a48842cb89d6",
    slot_id: "premium_fruits",
    slot_name: "Premium Slot",
    slot_description: "First View with wide range Card",
    amount: "999.00",
    currency: "INR",
    status: "completed",
    payment_id: "pay_Slot123456789",
    order_id: "order_Slot987654321",
    payment_signature: "slot_signature_hash_here",
    payment_method: "card",
    razorpay_order_id: "order_Slot987654321",
    created_at: "2025-06-18 10:30:00.000+00",
    updated_at: "2025-06-18 10:35:00.000+00"
  }
];

const mockSubscriptionPayments: ExporterSubscription[] = [
  {
    id: "7e585563-0102-46c4-816e-dc54e80b5024",
    exporter_user_id: "7a43c1af-cd09-4013-92fc-adf1bbb5e33e",
    plan_type: "premium",
    started_at: "2025-06-14 14:24:59.606+00",
    expires_at: "2026-06-14 14:24:59.606+00",
    payment_id: "pay_Qh6l6DpTGAYmIP",
    order_id: "order_Qh6klIAzHmiIsp",
    amount: "1999.00",
    status: "active",
    created_at: "2025-06-14 14:25:00.538692+00",
    updated_at: "2025-06-14 14:25:00.538692+00",
    payment_method: "card"
  }
];

export default function PaymentOrders() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'failed':
        return <Badge className="bg-red-100 text-red-800">Failed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatAmount = (amount: string, currency: string = 'INR') => {
    return `${currency} ${parseFloat(amount).toLocaleString()}`;
  };

  const totalRevenue = [...mockPayPerProductOrders, ...mockSlotPayments, ...mockSubscriptionPayments]
    .reduce((sum, payment) => sum + parseFloat(payment.amount), 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Payment Orders</h1>
          <p className="text-muted-foreground">
            Monitor all payment transactions and revenue streams
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Revenue Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +12.5% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Product Listings</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{mockPayPerProductOrders.reduce((sum, p) => sum + parseFloat(p.amount), 0).toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {mockPayPerProductOrders.length} transactions
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Slot Payments</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{mockSlotPayments.reduce((sum, p) => sum + parseFloat(p.amount), 0).toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {mockSlotPayments.length} slot purchases
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{mockSubscriptionPayments.reduce((sum, p) => sum + parseFloat(p.amount), 0).toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {mockSubscriptionPayments.length} active plans
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search by payment ID, user ID..." className="pl-10" />
        </div>
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Payment Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="product">Product Listings</SelectItem>
            <SelectItem value="slot">Slot Payments</SelectItem>
            <SelectItem value="subscription">Subscriptions</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Payment Orders List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Transactions</h2>
        
        {/* Product Listing Payments */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-muted-foreground">Product Listing Payments</h3>
          {mockPayPerProductOrders.map((payment) => (
            <Card key={payment.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">Product Listing Payment</p>
                      {getStatusBadge(payment.status)}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Payment ID: {payment.payment_id}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Products: {payment.products_count} | Method: {payment.payment_method}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">₹{parseFloat(payment.amount).toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">
                      {formatDate(payment.created_at)}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Slot Payments */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-muted-foreground">Slot Payments</h3>
          {mockSlotPayments.map((payment) => (
            <Card key={payment.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{payment.slot_name} - {payment.slot_description}</p>
                      {getStatusBadge(payment.status)}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Payment ID: {payment.payment_id}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Slot ID: {payment.slot_id} | Method: {payment.payment_method}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">{formatAmount(payment.amount, payment.currency)}</p>
                    <p className="text-sm text-muted-foreground">
                      {formatDate(payment.created_at)}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subscription Payments */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-muted-foreground">Subscription Payments</h3>
          {mockSubscriptionPayments.map((payment) => (
            <Card key={payment.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{payment.plan_type.charAt(0).toUpperCase() + payment.plan_type.slice(1)} Plan</p>
                      {getStatusBadge(payment.status)}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Payment ID: {payment.payment_id}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Valid until: {formatDate(payment.expires_at)} | Method: {payment.payment_method}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">₹{parseFloat(payment.amount).toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">
                      {formatDate(payment.created_at)}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
