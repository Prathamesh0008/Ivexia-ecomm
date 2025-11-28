// src/components/ProductCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./cart/CartContext";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addItem } = useCart();

  return (
    <article
      onClick={() => navigate(`/product/${product.id}`)}
      className="
        rounded-2xl p-4 flex flex-col cursor-pointer transition 
        bg-gradient-to-br from-[#0f1220] to-[#1a1f2e]
        border border-white/10 shadow-lg
        hover:shadow-pink-600/40 hover:border-pink-500/40 hover:-translate-y-1
      "
      style={{ minHeight: "270px" }}
    >
      <div className="flex-1">
        <div className="h-40 rounded-xl bg-black/30 flex items-center justify-center overflow-hidden border border-white/10">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition duration-300 hover:scale-105"
          />
        </div>

        <h3 className="text-base font-bold mt-3 text-white">{product.name}</h3>

        <p className="text-sm font-semibold text-pink-400 mt-1">
          {product.price ? `₹${product.price}` : "Ask Price"}
        </p>

        <p className="text-xs text-slate-300 mt-1 line-clamp-3">
          {product.description}
        </p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          addItem({ ...product, price: Number(product.price) || 0 });
        }}
        className="bg-pink-500 text-white text-sm px-5 py-2 rounded-full mt-4 font-semibold shadow-md shadow-pink-600/30 hover:bg-pink-400 hover:shadow-pink-500/50 transition"
      >
        Add to Cart
      </button>
    </article>
  );
}
