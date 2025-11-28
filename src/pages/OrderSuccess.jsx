import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function OrderSuccess() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl text-emerald-600">✔</span>
        </div>
        <h1 className="text-2xl font-bold mb-2 text-gray-800">
          {t("success.title")}
        </h1>
        <p className="text-gray-600 mb-4">{t("success.text")}</p>

        <div className="font-mono text-sm bg-gray-100 py-2 px-3 rounded mb-6">
          {orderId}
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/")}
            className="w-full px-4 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition"
          >
            {t("success.back_home")}
          </button>
          <Link
            to="/orders"
            className="w-full px-4 py-2 border border-emerald-700 text-emerald-700 rounded-lg hover:bg-emerald-50 transition"
          >
            {t("success.view_orders")}
          </Link>
        </div>
      </div>
    </div>
  );
}
