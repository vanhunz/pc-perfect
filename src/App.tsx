import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { BuildProvider } from "@/contexts/BuildContext";
import Index from "./pages/Index";
import AuthPage from "./pages/AuthPage";
import ComponentsPage from "./pages/ComponentsPage";
import BuilderPage from "./pages/BuilderPage";
import AIRecommendPage from "./pages/AIRecommendPage";
import CartPage from "./pages/CartPage";
import ChatPage from "./pages/ChatPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <BuildProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/components" element={<ComponentsPage />} />
              <Route path="/builder" element={<BuilderPage />} />
              <Route path="/ai-recommend" element={<AIRecommendPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/chat" element={<ChatPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </BuildProvider>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
