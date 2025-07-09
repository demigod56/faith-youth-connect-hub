import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ChurchRegistrationPage from "./pages/ChurchRegistrationPage";
import HQDashboard from "./pages/HQDashboard";
import YouthGroupsPage from "./pages/YouthGroupsPage";
import ForumsPage from "./pages/ForumsPage";
import EventsPage from "./pages/EventsPage";
import PastoralPage from "./pages/PastoralPage";
import LeadershipPage from "./pages/LeadershipPage";
import MessagingPage from "./pages/MessagingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fellowships" element={<YouthGroupsPage />} />
          <Route path="/forums" element={<ForumsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/pastoral" element={<PastoralPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/messaging" element={<MessagingPage />} />
          <Route path="/register-church" element={<ChurchRegistrationPage />} />
          <Route path="/hq-dashboard" element={<HQDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
