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
      {/* Overlay (glass blur) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[900] animate-fadeIn"
          onClick={onClose}
        ></div>
      )}

      {/* Drawer Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white/95 backdrop-blur-xl shadow-2xl z-[999]
        rounded-l-3xl border-l border-[#d7e9ff]
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div
          className="px-5 py-4 flex items-center justify-between sticky top-0 z-[1000]
        bg-gradient-to-r from-[#eaf3ff] to-[#f7faff]
        border-b border-[#d7e9ff]"
        >
          <h2 className="text-lg font-bold text-[#0d2d47]">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-xl text-[#1d4d7c] hover:text-[#0d2d47] transition transform hover:scale-110"
          >
            ✕
          </button>
        </div>

        {/* CART ITEMS */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-gray-500 text-sm text-center mt-4">
              Your cart is empty.
            </p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-[#e1edff] p-4 shadow-sm bg-white hover:shadow-md transition"
              >
                <div className="flex gap-3">
                  {/* Thumbnail */}
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover border border-[#d7e9ff]"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-lg bg-gray-200 flex items-center justify-center text-gray-500 text-xs">
                      No Image
                    </div>
                  )}

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm text-[#0d2d47]">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      ₹{item.price.toFixed(2)}
                    </p>

                    {/* Qty Control */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-7 h-7 rounded-full bg-[#eaf3ff] text-[#0d2d47] border border-[#cfe6ff]
                      hover:bg-[#d9eaff] transition"
                      >
                        –
                      </button>

                      <span className="text-sm font-semibold w-5 text-center">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-7 h-7 rounded-full bg-[#eaf3ff] text-[#0d2d47] border border-[#cfe6ff]
                      hover:bg-[#d9eaff] transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-xs text-red-500 mt-3 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* BOTTOM SECTION */}
        <div className="p-5 border-t border-[#d7e9ff] bg-white/90 backdrop-blur-md rounded-b-3xl shadow-inner sticky bottom-0">
          <div className="flex justify-between text-sm text-gray-700">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-sm text-gray-700 mt-2">
            <span>Shipping</span>
            <span>₹{shipping.toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-bold text-[#0d2d47] mt-3 text-lg">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full mt-5 px-5 py-3 rounded-xl bg-[#1d4d7c] text-white font-semibold
          hover:bg-[#123a61] transition shadow-md"
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}
