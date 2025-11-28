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
      <div className="min-h-screen bg-[#f5f9ff] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm text-center border border-[#d7e9ff]">
          <h2 className="text-xl font-bold mb-2 text-red-600">Order Not Found</h2>
          <p className="text-gray-500 mb-4">We couldn’t find this order.</p>
          <Link
            to="/orders"
            className="px-4 py-2 bg-[#1d4d7c] text-white rounded-lg hover:bg-[#123a61] transition"
          >
            Back to Orders
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-[#eef5ff] to-[#f6f9ff]">
      
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-[#1d4d7c] font-semibold mb-6 hover:text-[#0d2d47] transition"
      >
        <span className="text-xl">←</span> Back
      </button>

      {/* OUTER CARD */}
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-6 md:p-8 border border-[#d7e9ff] space-y-6">

        {/* HEADER */}
        <div className="flex justify-between items-start border-b pb-4 border-[#e1ecff]">
          <div>
            <h1 className="text-2xl font-bold text-[#0d2d47]">Order Details</h1>
            <p className="text-gray-600 text-sm mt-1">
              <span className="font-semibold">Order ID:</span> {order.id}
            </p>
            <p className="text-gray-600 text-sm">
              Order Date: {new Date(order.date).toLocaleString()}
            </p>
          </div>

          <span
            className={`px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm
            ${
              order.status === "Delivered"
                ? "bg-green-100 text-green-700"
                : order.status === "Shipped"
                ? "bg-blue-100 text-blue-700"
                : "bg-yellow-100 text-yellow-700"
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
              className="flex gap-4 p-4 border border-[#e1edff] rounded-xl bg-white shadow-sm hover:shadow-md transition"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title || item.name}
                  className="w-20 h-20 rounded-xl object-cover border border-[#d7e9ff]"
                />
              ) : (
                <div className="w-20 h-20 rounded-xl bg-gray-200 flex items-center justify-center text-gray-500 text-xs">
                  No Image
                </div>
              )}

              <div className="flex-1">
                <h3 className="font-semibold text-lg text-[#0d2d47]">
                  {item.title || item.name}
                </h3>
                <p className="text-gray-600 text-sm mt-1">Qty: {item.qty || 1}</p>

                {item.price != null && (
                  <p className="font-bold text-[#1d4d7c] mt-2">
                    ₹{Number(item.price).toFixed(2)}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* PRICE SUMMARY */}
        <div className="p-5 rounded-xl border border-[#d7e9ff] bg-[#f9fbff] shadow-inner">
          <h2 className="font-semibold text-lg text-[#0d2d47] mb-3">
            Price Summary
          </h2>

          <div className="flex justify-between text-gray-700 text-sm mb-2">
            <span>Subtotal</span>
            <span>₹{order.subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-gray-700 text-sm mb-2">
            <span>Shipping</span>
            <span>₹{order.shipping.toFixed(2)}</span>
          </div>

          <hr className="my-2 border-[#e1ecff]" />

          <div className="flex justify-between text-lg font-bold text-[#0d2d47]">
            <span>Total</span>
            <span>₹{order.total.toFixed(2)}</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}
