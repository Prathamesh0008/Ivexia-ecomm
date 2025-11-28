// src/pages/OrderDetails.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function OrderDetails() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("orders") || "[]");
    const found = stored.find((o) => o.id === orderId);
    setOrder(found || null);
  }, [orderId]);

  if (!order) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4">
        <div className="bg-white/5 border border-[#233554] backdrop-blur-xl rounded-2xl p-6 max-w-sm text-center shadow-[0_0_35px_rgba(236,72,153,0.4)]">
          <h2 className="text-xl font-bold mb-2 text-pink-400">Order Not Found</h2>
          <p className="text-slate-300 mb-4">
            We couldn’t locate this order in your history.
          </p>
          <Link
            to="/orders"
            className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-500 transition shadow-[0_0_20px_rgba(236,72,153,0.4)]"
          >
            Back to Orders
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8 bg-[#020617]">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-cyan-300 font-semibold mb-6 hover:text-pink-400 transition"
      >
        <span className="text-xl">←</span> Back
      </button>

      {/* MAIN CARD */}
      <div className="max-w-4xl mx-auto bg-white/5 rounded-3xl border border-[#233554] 
        backdrop-blur-xl p-6 md:p-8 shadow-[0_0_45px_rgba(15,23,42,0.9)] space-y-6">

        {/* HEADER */}
        <div className="flex justify-between items-start border-b border-[#1e293b] pb-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Order Details</h1>

            <p className="text-slate-300 text-sm mt-1">
              <span className="font-semibold text-slate-200">Order ID:</span>{" "}
              {order.id}
            </p>

            <p className="text-slate-400 text-sm">
              Order Date: {new Date(order.date).toLocaleString()}
            </p>
          </div>

          <span
            className={`px-4 py-1.5 rounded-full text-sm font-semibold shadow-md
              ${
                order.status === "Delivered"
                  ? "bg-emerald-600/30 text-emerald-300 border border-emerald-500/40"
                  : order.status === "Shipped"
                  ? "bg-cyan-600/30 text-cyan-300 border border-cyan-500/40"
                  : "bg-yellow-600/30 text-yellow-300 border border-yellow-500/40"
              }`}
          >
            {order.status}
          </span>
        </div>

        {/* ITEMS LIST */}
        <div className="space-y-4">
          {order.items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 p-4 bg-white/5 border border-[#1e293b]
              rounded-2xl shadow-[0_0_25px_rgba(15,23,42,0.6)] hover:shadow-[0_0_35px_rgba(236,72,153,0.5)] transition"
            >
              {/* PRODUCT IMAGE */}
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title || item.name}
                  className="w-20 h-20 rounded-xl object-cover border border-[#233554]"
                />
              ) : (
                <div className="w-20 h-20 rounded-xl bg-slate-800 flex items-center justify-center text-slate-500 text-xs">
                  No Image
                </div>
              )}

              {/* PRODUCT INFO */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-white">
                  {item.title || item.name}
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  Qty: {item.qty || 1}
                </p>

                {item.price != null && (
                  <p className="font-bold text-pink-400 mt-2">
                    ₹{Number(item.price).toFixed(2)}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* PRICE SUMMARY */}
        <div className="p-5 rounded-2xl bg-white/5 border border-[#233554] 
          shadow-inner shadow-[inset_0_0_25px_rgba(15,23,42,0.7)]">

          <h2 className="font-semibold text-lg text-white mb-3">
            Price Summary
          </h2>

          <div className="flex justify-between text-slate-300 text-sm mb-2">
            <span>Subtotal</span>
            <span>₹{order.subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-slate-300 text-sm mb-2">
            <span>Shipping</span>
            <span>₹{order.shipping.toFixed(2)}</span>
          </div>

          <hr className="my-2 border-[#1e293b]" />

          <div className="flex justify-between text-lg font-bold text-pink-400">
            <span>Total</span>
            <span>₹{order.total.toFixed(2)}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
