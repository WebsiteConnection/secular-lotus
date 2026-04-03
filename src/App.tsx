import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Japanese from "./pages/Japanese.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const LovableRedirect = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.location.hostname.includes("lovable.app")) {
      if (location.pathname === "/") {
        window.location.replace("https://secular-lotus.vercel.app/");
      } else if (location.pathname === "/ja") {
        window.location.replace("https://sezoku-hokke.vercel.app/");
      }
    }
  }, [location.pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LovableRedirect />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ja" element={<Japanese />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
