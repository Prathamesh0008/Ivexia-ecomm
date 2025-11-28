// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./components/cart/CartContext";

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

import ProductDetails from "./components/ProductDetails"
// Wrapper to detect pathname
function AppLayout() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  // Apply background ONLY on /products
  const isProductsPage = location.pathname === "/products";

  return (
    
    <div
      className={`min-h-screen w-full ${
        isProductsPage ? "product-page-bg" : "default-bg"
      }`}
    >
      <Navbar onOpenCart={() => setIsCartOpen(true)} />
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />
      <main className=" w-full pt-[95px] sm:pt-[95px] md:pt-[95px] lg:pt-[153px]  ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetails></ProductDetails>} />
           <Route path="/orders" element={<OrdersPage />} />
           <Route path="/blog" element={<IvexiaBlog></IvexiaBlog>} />
           <Route path="/terms" element={<Terms></Terms>} />
           <Route path="/policy" element={<Privacy></Privacy>} />
           <Route path="/contact" element={<Contact></Contact>} />
           <Route path="/about" element={<About></About>} />
          <Route path="/orders/:orderId" element={<OrderDetails />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/order-success/:orderId" element={<OrderSuccess />} />

        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default function App() {
  
  return (
    <CartProvider>
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
    </CartProvider>
    
  );
}
