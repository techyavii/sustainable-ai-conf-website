
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CallForPapers from "./pages/CallForPapers";
import PaperSubmission from "./pages/PaperSubmission";
import Registration from "./pages/Registration";
import Publications from "./pages/Publications";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Downloads from "./pages/Downloads";
import Venue from "./pages/Venue";
import Committee from "./pages/Committee";
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
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/paper-submission" element={<PaperSubmission />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/committee" element={<Committee />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
