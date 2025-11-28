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

  /* ================= EMPTY ORDERS ================== */
  if (!orders.length) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4">
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-[0_0_35px_rgba(236,72,153,0.4)] p-6 max-w-sm w-full text-center border border-[#233554]">
          <h2 className="text-xl font-bold text-pink-400 mb-2">
            {t("orders.empty_title")}
          </h2>
          <p className="text-slate-300 mb-4">{t("orders.empty_text")}</p>

          <Link
            to="/"
            className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-500 transition shadow-[0_0_20px_rgba(236,72,153,0.6)] font-semibold"
          >
            {t("orders.back_home")}
          </Link>
        </div>
      </div>
    );
  }

  /* ================= MAIN ORDERS LIST ================== */
  return (
    <div className="min-h-screen bg-[#020617] p-4">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-8 text-white tracking-tight">
          {t("orders.title")}
        </h1>

        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-[#233554]
              shadow-[0_0_25px_rgba(15,23,42,0.7)] hover:shadow-[0_0_35px_rgba(236,72,153,0.5)] 
              transition flex flex-col sm:flex-row justify-between gap-4"
            >
              {/* LEFT SIDE */}
              <div>
                {/* ID TITLE */}
                <div className="text-xs text-slate-400 font-medium">
                  {t("orders.id")}
                </div>

                <div className="font-semibold text-white text-lg break-all">
                  {order.id}
                </div>

                <div className="text-sm text-slate-400 mt-1">
                  {new Date(order.date).toLocaleString()}
                </div>

                <div className="mt-2 text-sm text-slate-300">
                  {order.items.length} {t("orders.items")} •{" "}
                  <span className="font-bold text-pink-400">
                    ₹{order.total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex flex-col items-end justify-between">

                {/* STATUS BADGE */}
                <span
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold shadow-md
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

                {/* VIEW DETAILS BUTTON */}
                <Link
                  to={`/orders/${order.id}`}
                  className="mt-4 sm:mt-0 px-5 py-2 rounded-full text-sm font-semibold
                  bg-pink-600 text-white hover:bg-pink-500 transition shadow-[0_0_20px_rgba(236,72,153,0.6)]"
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
