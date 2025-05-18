
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import VulnerabilityDatabase from "./pages/VulnerabilityDatabase";
import Community from "./pages/Community";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import DrVulner01 from "./pages/MrVulnr0";
import ProjectGuidelines from "./pages/ProjectGuidelines";
import { ThemeProvider } from "./context/ThemeProvider";
import { useEffect } from "react";
import { startScheduleChecker } from "./lib/scheduledFetchService";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <div className={`min-h-screen flex flex-col ${isHomePage ? 'home-page' : ''}`}>
      <Header />
      <PageTransition>
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/vulndb" element={<VulnerabilityDatabase />} />
            <Route path="/community" element={<Community />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/mrvulnr0" element={<DrVulner01 />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/guidelines" element={<ProjectGuidelines />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </PageTransition>
      <Footer />
    </div>
  );
};

const App = () => {
  // Start the schedule checker when the app initializes
  useEffect(() => {
    startScheduleChecker();
  }, []);

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
