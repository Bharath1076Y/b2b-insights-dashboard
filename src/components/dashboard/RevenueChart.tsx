
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const revenueData = [
  { month: 'Jan', subscriptions: 15000, slots: 8000, products: 12000 },
  { month: 'Feb', subscriptions: 18000, slots: 9500, products: 14000 },
  { month: 'Mar', subscriptions: 22000, slots: 11000, products: 16000 },
  { month: 'Apr', subscriptions: 25000, slots: 13000, products: 18000 },
  { month: 'May', subscriptions: 28000, slots: 15000, products: 20000 },
  { month: 'Jun', subscriptions: 32000, slots: 17000, products: 22000 },
];

export function RevenueChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Revenue Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="month" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
            />
            <Area type="monotone" dataKey="subscriptions" stackId="1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Area type="monotone" dataKey="slots" stackId="1" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Area type="monotone" dataKey="products" stackId="1" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
