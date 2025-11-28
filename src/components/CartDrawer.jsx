// src/components/CartDrawer.jsx
import React from "react";
import { useCart } from "./cart/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartDrawer({ isOpen, onClose }) {
  const { items, removeItem, updateQty, subtotal, shipping, total, clearCart } =
    useCart();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (items.length === 0) return alert("Cart is empty!");

    const orderId = `ORD-${Date.now()}`;
    const prev = JSON.parse(localStorage.getItem("orders") || "[]");

    const newOrder = {
      id: orderId,
      items,
      subtotal,
      shipping,
      total,
      status: "Processing",
      date: new Date().toISOString(),
    };

    localStorage.setItem("orders", JSON.stringify([newOrder, ...prev]));
    clearCart();
    onClose();
    navigate(`/order-success/${orderId}`);
  };

  return (
    <>
      {/* Blur overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[900] animate-fadeIn"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-96 
        bg-[#020617]/95 backdrop-blur-xl border-l border-[#1e293b] 
        shadow-[0_0_30px_rgba(236,72,153,0.3)] z-[999]
        rounded-l-3xl neon-border
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* Header */}
        <div
          className="px-5 py-4 flex items-center justify-between sticky top-0 z-[1000]
        bg-[#0b1220]/90 backdrop-blur-md border-b border-[#1e293b]"
        >
          <h2 className="text-lg font-bold text-white tracking-wide">
            Your Cart
          </h2>

          <button
            onClick={onClose}
            className="text-xl text-pink-400 hover:text-pink-300 transition hover:scale-110"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-slate-400 text-sm text-center mt-4">
              Your cart is empty.
            </p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-[#1e293b] bg-white/5 backdrop-blur-xl 
                shadow-[0_10px_25px_rgba(15,23,42,0.7)] p-4 hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] 
                transition"
              >
                <div className="flex gap-3">
                  {/* Image */}
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-xl object-cover border border-[#1e293b]"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-xl bg-[#1e293b] flex items-center justify-center text-slate-400 text-xs">
                      No Image
                    </div>
                  )}

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm text-white">
                      {item.name}
                    </h3>

                    <p className="text-xs text-slate-400 mt-1">
                      ₹{item.price.toFixed(2)}
                    </p>

                    {/* Qty Control */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-8 h-8 rounded-full bg-white/5 border border-[#1e293b] 
                        text-slate-200 hover:bg-pink-600/30 hover:border-pink-400 transition"
                      >
                        –
                      </button>

                      <span className="text-sm font-semibold text-white">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-8 h-8 rounded-full bg-white/5 border border-[#1e293b] 
                        text-slate-200 hover:bg-pink-600/30 hover:border-pink-400 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-xs text-pink-400 mt-3 hover:text-pink-300"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Summary */}
        <div className="p-5 border-t border-[#1e293b] bg-[#0b1220]/80 backdrop-blur-xl rounded-b-3xl shadow-inner">
          <div className="flex justify-between text-sm text-slate-300">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-sm text-slate-300 mt-2">
            <span>Shipping</span>
            <span>₹{shipping.toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-bold text-white mt-4 text-lg">
            <span>Total</span>
            <span className="text-pink-400">₹{total.toFixed(2)}</span>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full mt-5 px-5 py-3 rounded-xl 
            bg-gradient-to-r from-pink-600 to-pink-500 text-white font-semibold
            hover:shadow-[0_0_26px_rgba(236,72,153,0.6)] transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}
