
import { MetricCard } from "@/components/dashboard/MetricCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { UserGrowthChart } from "@/components/dashboard/UserGrowthChart";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { GeographicDistribution } from "@/components/dashboard/GeographicDistribution";
import { TopPerformers } from "@/components/dashboard/TopPerformers";
import { 
  Users, 
  Package, 
  TrendingUp, 
  DollarSign, 
  MessageSquare, 
  ShoppingCart,
  Grid3X3,
  UserCheck
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Monitor your B2B platform's performance and key metrics
        </p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Exporters"
          value="284"
          change="+12% from last month"
          changeType="positive"
          icon={Users}
        />
        <MetricCard
          title="Total Importers"
          value="156"
          change="+8% from last month"
          changeType="positive"
          icon={UserCheck}
        />
        <MetricCard
          title="Active Products"
          value="1,247"
          change="+15% from last month"
          changeType="positive"
          icon={Package}
        />
        <MetricCard
          title="Monthly Revenue"
          value="₹5,67,000"
          change="+23% from last month"
          changeType="positive"
          icon={DollarSign}
        />
      </div>

      {/* Secondary Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Buy Leads"
          value="89"
          change="+6 this week"
          changeType="positive"
          icon={ShoppingCart}
          subtitle="32 active, 57 expired"
        />
        <MetricCard
          title="Messages"
          value="2,341"
          change="156 unread"
          changeType="neutral"
          icon={MessageSquare}
          subtitle="Daily average: 78"
        />
        <MetricCard
          title="Slot Bookings"
          value="47"
          change="8 this month"
          changeType="positive"
          icon={Grid3X3}
          subtitle="₹47,000 revenue"
        />
        <MetricCard
          title="Profile Visits"
          value="12,489"
          change="+18% from last month"
          changeType="positive"
          icon={TrendingUp}
          subtitle="Avg. 416/day"
        />
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        <RevenueChart />
        <UserGrowthChart />
      </div>

      {/* Bottom Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        <ActivityFeed />
        <GeographicDistribution />
        <TopPerformers />
      </div>
    </div>
  );
}
