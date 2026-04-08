import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from '@/client/features/home/pages/IndexPage';
import AuthPage from '@/client/features/auth/pages/AuthPage';
import ComponentsPage from '@/client/features/catalog/pages/ComponentsPage';
import BuilderPage from '@/client/features/builder/pages/BuilderPage';
import AIRecommendPage from '@/client/features/recommend/pages/AIRecommendPage';
import CartPage from '@/client/features/cart/pages/CartPage';
import ChatPage from '@/client/features/chat/pages/ChatPage';
import NotFoundPage from '@/client/features/shared/pages/NotFoundPage';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/builder" element={<BuilderPage />} />
        <Route path="/ai-recommend" element={<AIRecommendPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
