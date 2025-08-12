import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Constellation from "./pages/Constellation";
import LoveLetter from "./pages/LoveLetter";
import Stars from "./pages/Stars";
import Gallery from "./pages/Gallery";

import Forever from "./pages/Forever";
import NotFound from "./pages/NotFound";
import Nicknames from "./pages/Nicknames";
import Timeline from "./pages/Timeline";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/constellation" element={<Constellation />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/letter" element={<LoveLetter />} />
          <Route path="/stars" element={<Stars />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/forever" element={<Forever />} />
          <Route path="/nicknames" element={<Nicknames />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
