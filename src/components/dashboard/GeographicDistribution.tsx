
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const geographicData = [
  { country: 'India', exporters: 145, percentage: 68 },
  { country: 'China', exporters: 32, percentage: 15 },
  { country: 'Vietnam', exporters: 18, percentage: 8 },
  { country: 'Thailand', exporters: 12, percentage: 6 },
  { country: 'Others', exporters: 6, percentage: 3 },
];

export function GeographicDistribution() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Geographic Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {geographicData.map((item) => (
            <div key={item.country} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{item.country}</span>
                <span className="text-muted-foreground">{item.exporters} exporters</span>
              </div>
              <Progress value={item.percentage} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
