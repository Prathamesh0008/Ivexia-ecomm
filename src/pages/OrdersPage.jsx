import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(stored);
  }, []);

  if (!orders.length) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#eef5ff] to-[#f7fbff] flex items-center justify-center p-4">
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-6 max-w-sm w-full text-center border border-[#d7e9ff]">
          <h2 className="text-xl font-bold text-[#1d4d7c] mb-2">
            {t("orders.empty_title")}
          </h2>
          <p className="text-gray-600 mb-4">{t("orders.empty_text")}</p>
          <Link
            to="/"
            className="px-4 py-2 bg-[#1d4d7c] text-white rounded-lg hover:bg-[#123a61] transition font-semibold"
          >
            {t("orders.back_home")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef5ff] to-[#f6f9ff] p-4">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-8 text-[#0d2d47] tracking-tight">
          {t("orders.title")}
        </h1>

        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white/90 backdrop-blur-xl rounded-xl p-6 border border-[#d7e9ff]
              shadow-md hover:shadow-lg transition flex flex-col sm:flex-row justify-between gap-4"
            >
              {/* LEFT SIDE */}
              <div>
                <div className="text-xs text-gray-500 font-medium">
                  {t("orders.id")}
                </div>

                <div className="font-semibold text-[#0d2d47] text-lg break-all">
                  {order.id}
                </div>

                <div className="text-sm text-gray-500 mt-1">
                  {new Date(order.date).toLocaleString()}
                </div>

                <div className="mt-2 text-sm text-gray-700">
                  {order.items.length} {t("orders.items")} •{" "}
                  <span className="font-bold text-[#1d4d7c]">
                    ₹{order.total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex flex-col items-end justify-between">

                <span
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm
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

                <Link
                  to={`/orders/${order.id}`}
                  className="mt-4 sm:mt-0 px-5 py-2 rounded-lg text-sm font-semibold
                  bg-[#1d4d7c] text-white hover:bg-[#123a61] transition shadow-md"
                >
                  {t("orders.view_details")}
                </Link>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
