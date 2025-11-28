// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./components/cart/CartContext";

import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./components/PageLoader";

import Navbar from "./components/Navbar";
import ProductsPage from "./pages/ProductsPage";
import CartDrawer from "./components/CartDrawer";

import OrdersPage from "./pages/OrdersPage";
import OrderDetails from "./pages/OrderDetails";
import AdminOrders from "./pages/AdminOrders";
import OrderSuccess from "./pages/OrderSuccess";
import IvexiaBlog from "./components/IvexiaBlog";
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import ProductDetails from "./components/ProductDetails";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

// ---------------------------
// PAGE LAYOUT WRAPPER
// ---------------------------
function AppLayout() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const isProductsPage = location.pathname === "/products";

  // Show loader on every page navigation
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 280); // smooth fade
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      className={`min-h-screen w-full ${
        isProductsPage ? "product-page-bg" : "default-bg"
      }`}
    >
      {/* Loader */}
      {loading && <PageLoader />}

      {/* Auto scroll to top */}
      <ScrollToTop />

      {/* Navigation */}
      <Navbar onOpenCart={() => setIsCartOpen(true)} />

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* PAGE CONTENT */}
      <main className="w-full pt-[95px] sm:pt-[95px] md:pt-[95px] lg:pt-[151px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/orders/:orderId" element={<OrderDetails />} />

          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/order-success/:orderId" element={<OrderSuccess />} />

          <Route path="/blog" element={<IvexiaBlog />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/policy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// ---------------------------
// ROOT APP
// ---------------------------
export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </CartProvider>
  );
}
