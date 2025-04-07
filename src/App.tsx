
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDevelopment from "./pages/ProjectDevelopment";
import ProjectRefurbishment from "./pages/ProjectRefurbishment";
import ProjectPlannedRefurbishment from "./pages/ProjectPlannedRefurbishment";
import ProjectEducationalLocalAuthority from "./pages/ProjectEducationalLocalAuthority";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen pt-16"> {/* Add padding to prevent content from being hidden under navbar */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/development" element={<ProjectDevelopment />} />
            <Route path="/projects/refurbishment" element={<ProjectRefurbishment />} />
            <Route path="/projects/planned-refurbishment" element={<ProjectPlannedRefurbishment />} />
            <Route path="/projects/educational-local-authority" element={<ProjectEducationalLocalAuthority />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
