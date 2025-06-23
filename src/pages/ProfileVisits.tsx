
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Eye, TrendingUp, Users, Calendar, BarChart3 } from "lucide-react";
import { ProfileVisit } from "@/types/database";

// Mock data for profile visits
const mockProfileVisits: ProfileVisit[] = [
  {
    id: "bf27474c-2097-4538-bf0b-915259428806",
    exporter_user_id: "3ca5d3db-b7f7-408b-ae75-0239087820a6",
    visitor_email: "alphabuyer@gmail.com",
    visit_count: 1,
    created_at: "2025-06-07 08:05:00.492689+00",
    updated_at: "2025-06-07 08:05:00.492689+00"
  },
  {
    id: "bf27474c-2097-4538-bf0b-915259428807",
    exporter_user_id: "3ca5d3db-b7f7-408b-ae75-0239087820a6",
    visitor_email: "buyer@germany.com",
    visit_count: 3,
    created_at: "2025-06-05 14:20:00.000+00",
    updated_at: "2025-06-07 10:30:00.000+00"
  },
  {
    id: "bf27474c-2097-4538-bf0b-915259428808",
    exporter_user_id: "7a43c1af-cd09-4013-92fc-adf1bbb5e33e",
    visitor_email: "shilpa@gmail.com",
    visit_count: 5,
    created_at: "2025-06-01 09:15:00.000+00",
    updated_at: "2025-06-06 16:45:00.000+00"
  },
  {
    id: "bf27474c-2097-4538-bf0b-915259428809",
    exporter_user_id: "3ca5d3db-b7f7-408b-ae75-0239087820a6",
    visitor_email: "international.buyer@usa.com",
    visit_count: 2,
    created_at: "2025-06-04 11:30:00.000+00",
    updated_at: "2025-06-06 13:20:00.000+00"
  }
];

// Mock exporter data for display
const mockExporters = {
  "3ca5d3db-b7f7-408b-ae75-0239087820a6": {
    name: "South Indian Fruits Exporters",
    email: "admin@gmail.com",
    company: "TajFresh Dragon™"
  },
  "7a43c1af-cd09-4013-92fc-adf1bbb5e33e": {
    name: "Premium Agro Exports",
    email: "premium@agro.com", 
    company: "Premium Agro Ltd"
  }
};

export default function ProfileVisits() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getVisitBadge = (count: number) => {
    if (count >= 5) {
      return <Badge className="bg-green-100 text-green-800">High Interest</Badge>;
    } else if (count >= 3) {
      return <Badge className="bg-yellow-100 text-yellow-800">Medium Interest</Badge>;
    } else {
      return <Badge variant="outline">New Visitor</Badge>;
    }
  };

  const totalVisits = mockProfileVisits.reduce((sum, visit) => sum + visit.visit_count, 0);
  const uniqueVisitors = new Set(mockProfileVisits.map(visit => visit.visitor_email)).size;
  const activeProfiles = new Set(mockProfileVisits.map(visit => visit.exporter_user_id)).size;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Profile Visits</h1>
          <p className="text-muted-foreground">
            Track profile views and visitor engagement analytics
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <BarChart3 className="w-4 h-4 mr-2" />
            Analytics
          </Button>
        </div>
      </div>

      {/* Analytics Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Visits</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalVisits.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{uniqueVisitors}</div>
            <p className="text-xs text-muted-foreground">
              Different email addresses
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Profiles</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeProfiles}</div>
            <p className="text-xs text-muted-foreground">
              Profiles receiving visits
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Visits/Profile</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{(totalVisits / activeProfiles).toFixed(1)}</div>
            <p className="text-xs text-muted-foreground">
              Per active profile
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search by visitor email or exporter..." className="pl-10" />
        </div>
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Visit Count" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Visits</SelectItem>
            <SelectItem value="high">High Interest (5+)</SelectItem>
            <SelectItem value="medium">Medium Interest (3-4)</SelectItem>
            <SelectItem value="new">New Visitors (1-2)</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Time Period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
            <SelectItem value="all">All time</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Profile Visits List */}
      <div className="grid gap-4">
        {mockProfileVisits.map((visit) => {
          const exporter = mockExporters[visit.exporter_user_id as keyof typeof mockExporters] || {
            name: "Unknown Exporter",
            email: "unknown@email.com",
            company: "Unknown Company"
          };

          return (
            <Card key={visit.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-blue-100 text-blue-600">
                        {visit.visitor_email.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{visit.visitor_email}</p>
                        {getVisitBadge(visit.visit_count)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Visited: <span className="font-medium">{exporter.name}</span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {exporter.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{visit.visit_count}</div>
                    <p className="text-sm text-muted-foreground">Visits</p>
                  </div>
                  
                  <div className="text-right space-y-1">
                    <p className="text-sm font-medium">First Visit</p>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(visit.created_at)}
                    </p>
                    <p className="text-sm font-medium">Last Visit</p>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(visit.updated_at)}
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View Profile
                    </Button>
                  </div>
                </div>
                
                {/* Visit Timeline */}
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Visit Pattern</span>
                    <div className="flex gap-1">
                      {Array.from({ length: Math.min(visit.visit_count, 10) }, (_, i) => (
                        <div key={i} className="w-2 h-2 bg-blue-500 rounded-full" />
                      ))}
                      {visit.visit_count > 10 && (
                        <span className="text-xs text-muted-foreground ml-1">
                          +{visit.visit_count - 10} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
