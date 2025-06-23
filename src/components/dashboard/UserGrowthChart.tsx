
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const growthData = [
  { month: 'Jan', exporters: 45, importers: 32 },
  { month: 'Feb', exporters: 52, importers: 38 },
  { month: 'Mar', exporters: 61, importers: 45 },
  { month: 'Apr', exporters: 68, importers: 52 },
  { month: 'May', exporters: 75, importers: 59 },
  { month: 'Jun', exporters: 84, importers: 67 },
];

export function UserGrowthChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Growth</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={growthData}>
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
            <Bar dataKey="exporters" fill="#3b82f6" radius={[2, 2, 0, 0]} />
            <Bar dataKey="importers" fill="#10b981" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
