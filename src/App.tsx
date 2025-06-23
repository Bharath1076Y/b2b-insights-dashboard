
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import Index from "./pages/Index";
import Analytics from "./pages/Analytics";
import Exporters from "./pages/Exporters";
import Importers from "./pages/Importers";
import Products from "./pages/Products";
import Messages from "./pages/Messages";
import BuyLeads from "./pages/BuyLeads";
import Subscriptions from "./pages/Subscriptions";
import SlotManagement from "./pages/SlotManagement";
import PaymentOrders from "./pages/PaymentOrders";
import ProfileVisits from "./pages/ProfileVisits";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
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
              <Importers />
            </DashboardLayout>
          } />
          <Route path="/products" element={
            <DashboardLayout>
              <Products />
            </DashboardLayout>
          } />
          <Route path="/messages" element={
            <DashboardLayout>
              <Messages />
            </DashboardLayout>
          } />
          <Route path="/buy-leads" element={
            <DashboardLayout>
              <BuyLeads />
            </DashboardLayout>
          } />
          <Route path="/subscriptions" element={
            <DashboardLayout>
              <Subscriptions />
            </DashboardLayout>
          } />
          <Route path="/slots" element={
            <DashboardLayout>
              <SlotManagement />
            </DashboardLayout>
          } />
          <Route path="/payments" element={
            <DashboardLayout>
              <PaymentOrders />
            </DashboardLayout>
          } />
          <Route path="/profile-visits" element={
            <DashboardLayout>
              <ProfileVisits />
            </DashboardLayout>
          } />
          <Route path="/notifications" element={
            <DashboardLayout>
              <Notifications />
            </DashboardLayout>
          } />
          <Route path="/settings" element={
            <DashboardLayout>
              <Settings />
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
