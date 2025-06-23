
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  MessageSquare, 
  TrendingUp,
  CreditCard,
  UserCheck,
  ShoppingCart,
  Grid3X3,
  Bell,
  BarChart3,
  Calendar,
  Settings
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Overview",
    items: [
      { title: "Dashboard", url: "/", icon: LayoutDashboard },
      { title: "Analytics", url: "/analytics", icon: BarChart3 },
    ]
  },
  {
    title: "User Management",
    items: [
      { title: "Exporters", url: "/exporters", icon: Users },
      { title: "Importers", url: "/importers", icon: UserCheck },
      { title: "Profile Visits", url: "/profile-visits", icon: TrendingUp },
    ]
  },
  {
    title: "Business Operations",
    items: [
      { title: "Products", url: "/products", icon: Package },
      { title: "Buy Leads", url: "/buy-leads", icon: ShoppingCart },
      { title: "Messages", url: "/messages", icon: MessageSquare },
      { title: "Notifications", url: "/notifications", icon: Bell },
    ]
  },
  {
    title: "Revenue & Subscriptions",
    items: [
      { title: "Subscriptions", url: "/subscriptions", icon: CreditCard },
      { title: "Slot Management", url: "/slots", icon: Grid3X3 },
      { title: "Payment Orders", url: "/payments", icon: Calendar },
    ]
  },
  {
    title: "System",
    items: [
      { title: "Settings", url: "/settings", icon: Settings },
    ]
  }
];

export function AppSidebar() {
  const { collapsed } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  const getNavClass = (path: string) => {
    const baseClass = "w-full justify-start transition-colors duration-200";
    return isActive(path) 
      ? `${baseClass} bg-primary text-primary-foreground hover:bg-primary/90` 
      : `${baseClass} hover:bg-accent hover:text-accent-foreground`;
  };

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible>
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <LayoutDashboard className="w-4 h-4 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="font-semibold text-lg">B2B Platform</h2>
              <p className="text-xs text-muted-foreground">Management Dashboard</p>
            </div>
          )}
        </div>
      </div>

      <SidebarContent className="px-2 py-4">
        {navigationItems.map((group, index) => (
          <SidebarGroup key={index}>
            {!collapsed && (
              <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-2">
                {group.title}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink to={item.url} className={getNavClass(item.url)}>
                        <item.icon className={`${collapsed ? 'w-5 h-5' : 'w-4 h-4'} ${collapsed ? 'mx-auto' : 'mr-3'}`} />
                        {!collapsed && <span className="font-medium">{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <div className="mt-auto p-2 border-t">
        <SidebarTrigger className="w-full justify-center hover:bg-accent" />
      </div>
    </Sidebar>
  );
}
