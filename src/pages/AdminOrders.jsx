import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(stored);
  }, []);

  const updateOrders = (updated) => {
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  const handleStatusChange = (orderId, newStatus) => {
    const updated = orders.map((o) =>
      o.id === orderId ? { ...o, status: newStatus } : o
    );
    updateOrders(updated);
  };

  if (!orders.length) {
    return (
      <div className="min-h-screen bg-[#f4f7f6] flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm text-center border border-emerald-100">
          <h2 className="text-xl font-bold text-gray-800">{t("admin.no_orders")}</h2>
          <p className="text-gray-600">{t("admin.no_orders_text")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f7f6] p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">{t("admin.title")}</h1>

        <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-[#eef4f1] text-gray-700">
              <tr>
                <th className="px-4 py-3 text-left">{t("admin.id")}</th>
                <th className="px-4 py-3 text-left">{t("admin.date")}</th>
                <th className="px-4 py-3 text-left">{t("admin.items")}</th>
                <th className="px-4 py-3 text-left">{t("admin.total")}</th>
                <th className="px-4 py-3 text-left">{t("admin.status")}</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t hover:bg-gray-50 transition">
                  <td className="px-4 py-3 font-mono">{order.id}</td>
                  <td className="px-4 py-3">{new Date(order.date).toLocaleString()}</td>
                  <td className="px-4 py-3">{order.items.length}</td>
                  <td className="px-4 py-3 font-semibold text-emerald-700">
                    ₹{order.total.toFixed(2)}
                  </td>

                  <td className="px-4 py-3">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order.id, e.target.value)
                      }
                      className="border rounded px-2 py-1 bg-white text-sm shadow-sm"
                    >
                      <option value="Processing">{t("admin.processing")}</option>
                      <option value="Packed">{t("admin.packed")}</option>
                      <option value="Shipped">{t("admin.shipped")}</option>
                      <option value="Delivered">{t("admin.delivered")}</option>
                      <option value="Cancelled">{t("admin.cancelled")}</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
