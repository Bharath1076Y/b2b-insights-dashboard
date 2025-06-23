
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import Index from "./pages/Index";
import Analytics from "./pages/Analytics";
import Exporters from "./pages/Exporters";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/analytics" element={
            <DashboardLayout>
              <Analytics />
            </DashboardLayout>
          } />
          <Route path="/exporters" element={
            <DashboardLayout>
              <Exporters />
            </DashboardLayout>
          } />
          <Route path="/importers" element={
            <DashboardLayout>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Importers Management</h1>
                <p className="text-muted-foreground mt-2">Coming soon...</p>
              </div>
            </DashboardLayout>
          } />
          <Route path="/products" element={
            <DashboardLayout>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Products Management</h1>
                <p className="text-muted-foreground mt-2">Coming soon...</p>
              </div>
            </DashboardLayout>
          } />
          <Route path="/messages" element={
            <DashboardLayout>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Messages</h1>
                <p className="text-muted-foreground mt-2">Coming soon...</p>
              </div>
            </DashboardLayout>
          } />
          <Route path="/subscriptions" element={
            <DashboardLayout>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Subscriptions</h1>
                <p className="text-muted-foreground mt-2">Coming soon...</p>
              </div>
            </DashboardLayout>
          } />
          <Route path="/slots" element={
            <DashboardLayout>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Slot Management</h1>
                <p className="text-muted-foreground mt-2">Coming soon...</p>
              </div>
            </DashboardLayout>
          } />
          <Route path="/payments" element={
            <DashboardLayout>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Payment Orders</h1>
                <p className="text-muted-foreground mt-2">Coming soon...</p>
              </div>
            </DashboardLayout>
          } />
          <Route path="/profile-visits" element={
            <DashboardLayout>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Profile Visits</h1>
                <p className="text-muted-foreground mt-2">Coming soon...</p>
              </div>
            </DashboardLayout>
          } />
          <Route path="/buy-leads" element={
            <DashboardLayout>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Buy Leads</h1>
                <p className="text-muted-foreground mt-2">Coming soon...</p>
              </div>
            </DashboardLayout>
          } />
          <Route path="/notifications" element={
            <DashboardLayout>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Notifications</h1>
                <p className="text-muted-foreground mt-2">Coming soon...</p>
              </div>
            </DashboardLayout>
          } />
          <Route path="/settings" element={
            <DashboardLayout>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Settings</h1>
                <p className="text-muted-foreground mt-2">Coming soon...</p>
              </div>
            </DashboardLayout>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
