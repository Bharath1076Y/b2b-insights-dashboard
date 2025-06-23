
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Eye, Mail, MapPin, Building, Calendar } from "lucide-react";

const exportersData = [
  {
    id: "a53d9f58-ef64-4d66-a072-b9efb863d881",
    email: "shilpa@gmail.com",
    nationality: "indian",
    personal_info: {
      gender: "female",
      mobile: "9995558887",
      lastName: "Y",
      firstName: "shilpa"
    },
    business_info: {
      city: "Mysore",
      state: "karnataka",
      companyName: "Shipla Pvt lmt"
    },
    status: "pending",
    exporter_badge: "Non_Verified_Exporter",
    plan: "free",
    created_at: "2025-05-28"
  },
  {
    id: "3ca5d3db-b7f7-408b-ae75-0239087820a6",
    email: "admin@gmail.com",
    nationality: "indian",
    personal_info: {
      gender: "male",
      mobile: "9876543210",
      lastName: "Admin",
      firstName: "Platform"
    },
    business_info: {
      city: "Mumbai",
      state: "maharashtra",
      companyName: "TajFresh Dragon™"
    },
    status: "verified",
    exporter_badge: "Verified_Exporter",
    plan: "premium",
    created_at: "2025-05-15"
  }
];

export default function Exporters() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Exporters Management</h1>
          <p className="text-muted-foreground">
            Manage and monitor all registered exporters on your platform
          </p>
        </div>
        <Button>Add New Exporter</Button>
      </div>

      <div className="grid gap-6">
        {exportersData.map((exporter) => (
          <Card key={exporter.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="text-lg">
                      {exporter.personal_info.firstName[0]}{exporter.personal_info.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl">
                      {exporter.personal_info.firstName} {exporter.personal_info.lastName}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{exporter.business_info.companyName}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={exporter.status === 'verified' ? 'default' : 'secondary'}>
                    {exporter.status}
                  </Badge>
                  <Badge variant={exporter.plan === 'premium' ? 'default' : 'outline'}>
                    {exporter.plan}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{exporter.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{exporter.business_info.city}, {exporter.business_info.state}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{exporter.exporter_badge.replace(/_/g, ' ')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Joined {exporter.created_at}</span>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  View Profile
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                {exporter.status === 'pending' && (
                  <Button size="sm">
                    Verify Account
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
