import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import Layout from './components/Layout';
import { ErrorBoundary } from './components/ErrorBoundary';
import { HomePage } from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import FindStorePage from './pages/FindStorePage';
import BlogsPage from './pages/BlogsPage';
import HelpCenterPage from './pages/HelpCenterPage';
import MoneyRefundPage from './pages/MoneyRefundPage';
import ShippingPage from './pages/ShippingPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SettingsPage from './pages/SettingsPage';
import OrdersPage from './pages/OrdersPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <CartProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/category" element={<CategoryPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/find-store" element={<FindStorePage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/help-center" element={<HelpCenterPage />} />
              <Route path="/money-refund" element={<MoneyRefundPage />} />
              <Route path="/shipping" element={<ShippingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </CartProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
