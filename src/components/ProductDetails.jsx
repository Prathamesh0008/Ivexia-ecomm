// src/pages/ProductPage.jsx
import React ,{ useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PRODUCTS from "../data/Products.mock";
import { useCart } from "../components/cart/CartContext";



export default function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();

    // ⭐ Scroll to top when product changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);


  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Product not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0d12] text-white pt-28 pb-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT – IMAGE */}
        <div>
          {/* ⭐ Breadcrumbs */}
          <nav className="text-sm mb-6 text-slate-400 ">
        <Link to="/" className="hover:text-pink-300">Home</Link> {" > "}
        <Link
          to="/products"
          state={{ category: product.category }}
          className="hover:text-pink-300"
        >
          {product.category}
        </Link> {" > "}
        <span className="text-pink-400">{product.name}</span>
      </nav>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 shadow-xl">
          
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-xl object-contain"
            />
          </div>
        </div>

        {/* RIGHT – DETAILS */}
        <div className="lg:col-span-2 space-y-6">

          {/* TITLE */}
          <h1 className="text-3xl font-bold text-pink-400">
            {product.name} – {product.strength}
          </h1>

          {/* PRICE BOX */}
          <div className="bg-white/5 border border-pink-500/30 rounded-2xl p-5 flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">
                Price:{" "}
                <span className="text-pink-300">
                  {product.price ? `₹${product.price}` : "Request Quote"}
                </span>
              </p>
            </div>

            <button
              onClick={() =>
                addItem({ ...product, price: Number(product.price) || 0 })
              }
              className="px-5 py-3 bg-pink-500 text-white rounded-full font-bold hover:bg-pink-400 shadow-lg shadow-pink-600/40"
            >
              Add to Cart
            </button>
          </div>

          {/* PRODUCT INFO */}
          <div className="bg-[#0f1220] border border-white/10 rounded-2xl p-6 space-y-3 text-sm">
            <p><span className="font-bold">Strength:</span> {product.strength}</p>
            <p><span className="font-bold">Composition:</span> {product.composition}</p>
            <p><span className="font-bold">Packing:</span> {product.packing}</p>
            <p><span className="font-bold">Category:</span> {product.category}</p>
          </div>

          {/* ⭐ Dynamic Tabs */}
          <ProductTabs product={product} />

        </div>
      </div>
    </div>
  );
}

/* ---------------- TABS ---------------- */
function ProductTabs({ product }) {
  const tabs = [
    "Overview",
    "Side Effects",
    "Warnings",
    "Administration",
    "How It Works",
  ];

  const [active, setActive] = React.useState("Overview");

  // Dynamic content format
  const contentMap = {
    Overview: product.description || "No description available.",

    "Side Effects":
      product.side_effects?.length ? (
        <ul className="list-disc pl-4 space-y-1">
          {product.side_effects.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      ) : "Information not available.",

    Warnings:
      product.warnings?.length ? (
        <ul className="list-disc pl-4 space-y-1">
          {product.warnings.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      ) : "Information not available.",

    Administration:
      product.administration?.length ? (
        <ul className="list-disc pl-4 space-y-1">
          {product.administration.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      ) : "Information not available.",

    "How It Works":
      product.how_it_works?.length ? (
        <ul className="list-disc pl-4 space-y-1">
          {product.how_it_works.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      ) : "Information not available.",
  };

  return (
    <div >
      {/* TAB BUTTONS */}
      <div className="flex gap-3 overflow-auto pb-3 border-b border-white/10">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              active === t
                ? "bg-pink-500 text-white shadow-lg shadow-pink-600/40"
                : "bg-white/5 text-slate-300 border border-white/5 hover:bg-white/10"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="mt-6 text-sm text-slate-300 leading-relaxed">
        {contentMap[active]}
      </div>
    </div>
  );
}
