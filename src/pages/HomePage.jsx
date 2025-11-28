// src/pages/HomePage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FINISHED_PRODUCTS from "../data/Products.mock";
import bold from "../assets/bold.png";
import banner from "../assets/banner 1.jpg";

// === Black Friday / Promo Slider ===
// === Black Friday / Promo Slider (With Background Images) ===
function BlackFridaySlider({ onShopClick }) {
  const slides = [
    {
      id: 1,
      badge: "Black Friday",
      title: "UP TO 25% OFF · ED PORTFOLIO",
      subtitle:
        "Select strengths & SKUs for bulk B2B orders during the Black Friday window.",
      tag: "Limited time · B2B only",
      image:
        "https://wallpapers.oneindia.com/ph-1024x768/2017/11/mia-khalifa_1510989398160.jpg",
    },
    {
      id: 2,
      badge: "Bundle Offer",
      title: "BUY 2 GET 1 FREE · ORAL JELLIES",
      subtitle:
        "High-rotation jellies & softgels ideal for performance-wellness lines.",
      tag: "Ask team for eligible SKUs",
      image:
        "https://www.potencia.to/images/couple-04.jpg",
    },
    {
      id: 3,
      badge: "New Launch",
      title: "NEW STRENGTHS & PACK DESIGNS",
      subtitle:
        "Refresh your catalog with updated packs, SKUs and export-ready branding.",
      tag: "Ivexia performance range",
      image:
        "https://images.pexels.com/photos/3987227/pexels-photo-3987227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const goTo = (index) => setCurrent(index);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-pink-500/30 bg-[#050816] shadow-[0_0_35px_rgba(236,72,153,0.25)]">
      {/* SLIDES WRAPPER */}
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-40 sm:h-48 lg:h-56 relative"
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#0b1220]/70 to-black/85" />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex items-center justify-between px-4 sm:px-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-black/40 border border-pink-300/60 text-[11px] font-semibold uppercase tracking-wide text-pink-200 mb-1">
                  🖤 {slide.badge}
                </div>

                <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-white">
                  {slide.title}
                </h3>

                <p className="mt-1 text-[12px] sm:text-sm text-slate-200/90 max-w-xl">
                  {slide.subtitle}
                </p>

                <p className="mt-1 text-[11px] text-slate-300/90">
                  {slide.tag}
                </p>
              </div>

              {/* Right side: CTA + Arrows */}
              <div className="hidden sm:flex items-center gap-3">
                {onShopClick && (
                  <button
                    onClick={onShopClick}
                    className="px-4 py-2 rounded-full bg-pink-600 text-white text-xs font-semibold hover:bg-pink-500 hover:shadow-[0_0_22px_rgba(236,72,153,0.7)] transition"
                  >
                    View Deals
                  </button>
                )}

                <button
                  onClick={prev}
                  className="w-8 h-8 rounded-full border border-slate-500/70 bg-black/30 flex items-center justify-center text-slate-200 hover:border-pink-400 hover:text-pink-300 transition text-xs"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  className="w-8 h-8 rounded-full border border-slate-500/70 bg-black/30 flex items-center justify-center text-slate-200 hover:border-pink-400 hover:text-pink-300 transition text-xs"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              current === index
                ? "w-5 bg-pink-400"
                : "w-2 bg-slate-500/70 hover:bg-pink-300/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const navigate = useNavigate();

  // Use your JSON data
  const featuredProducts = (FINISHED_PRODUCTS || []).slice(0, 12);

  const categories = [
    { key: "sildenafil", label: "Sildenafil Range" },
    { key: "tadalafil", label: "Tadalafil Range" },
    { key: "vardenafil", label: "Vardenafil Range" },
    { key: "dapoxetine", label: "Dapoxetine & PE" },
    { key: "softgel", label: "Softgel & Capsules" },
    { key: "oral-jelly", label: "Oral Jelly" },
  ];

  const strengths = ["25 mg", "50 mg", "75 mg", "100 mg", "150 mg", "200 mg"];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100">
      
      {/* <section className="relative w-full overflow-hidden">
        
        <div className="absolute inset-0 ">
          <img
            src="https://wallpapers.oneindia.com/ph-1024x768/2017/11/mia-khalifa_1510989398160.jpg"
            alt="Performance wellness"
            className="w-full h-full object-cover  "
          />
        </div>

        
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#0b1220]/90 to-[#020617]/95" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 pb-16 lg:pt-20 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-pink-500/40 text-[11px] font-semibold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Premium ED & Performance Portfolio
              </span>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Build a{" "}
                <span className="text-pink-400">
                  confident performance
                </span>{" "}
                portfolio.
              </h1>

              <p className="mt-3 text-sm sm:text-base text-slate-200/90 max-w-xl">
                Explore Sildenafil, Tadalafil, Vardenafil and combination
                therapies designed for international distributors, pharmacies
                and performance wellness brands.
              </p>

              
              <div className="mt-6 grid grid-cols-3 gap-3 max-w-md text-[11px] sm:text-xs">
                <div className="rounded-2xl bg-white/5 border border-[#233554] px-3 py-3 backdrop-blur-md">
                  <div className="font-semibold text-pink-300">50+ SKUs</div>
                  <div className="text-slate-200/80 mt-1">
                    ED & performance-focused lines.
                  </div>
                </div>
                <div className="rounded-2xl bg-white/5 border border-[#233554] px-3 py-3 backdrop-blur-md">
                  <div className="font-semibold text-emerald-300">
                    Lab Tested
                  </div>
                  <div className="text-slate-200/80 mt-1">
                    Potency & purity assurance.
                  </div>
                </div>
                <div className="rounded-2xl bg-white/5 border border-[#233554] px-3 py-3 backdrop-blur-md">
                  <div className="font-semibold text-cyan-300">Global B2B</div>
                  <div className="text-slate-200/80 mt-1">
                    Export-minded documentation.
                  </div>
                </div>
              </div>

              
              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("/products")}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-pink-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(236,72,153,0.5)] hover:scale-[1.02] transition"
                >
                  Browse All Products
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="px-6 py-3 rounded-full border border-cyan-400/60 text-sm font-semibold text-cyan-200 hover:bg-cyan-400/10 transition"
                >
                  Become a Distributor
                </button>
              </div>
            </div>

            
            <div className="relative">
              <div className="absolute -top-10 right-0 w-40 h-40 bg-pink-500/30 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 left-4 w-40 h-40 bg-cyan-500/25 blur-3xl rounded-full" />

              <div className="relative bg-white/5 border border-[#233554] rounded-3xl p-5 sm:p-6 lg:p-7 shadow-[0_0_45px_rgba(15,23,42,0.8)] backdrop-blur-2xl ">
                <img
                  src="https://www.potencia.to/images/couple-04.jpg"
                  alt="Ivexia Performance Line"
                  className="w-full h-36 object-cover rounded-2xl  mb-4 border border-[#1e293b]"
                />

                <h2 className="text-lg font-semibold mb-1 text-white">
                  Curated Performance Range
                </h2>
                <p className="text-xs text-slate-200/80 mb-4">
                  Strengths from 25 mg to 200 mg in tablets, softgel capsules,
                  oral jellies and more.
                </p>

                <div className="grid grid-cols-3 gap-3 text-[11px]">
                  <div className="bg-white/5 rounded-2xl p-3 border border-white/10">
                    <div className="font-semibold text-white">Sildenafil</div>
                    <div className="text-slate-200 mt-1">
                      25 · 50 · 100 · 200 mg
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-3 border border-white/10">
                    <div className="font-semibold text-white">Tadalafil</div>
                    <div className="text-slate-200 mt-1">
                      5 · 10 · 20 · 40 mg
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-3 border border-white/10">
                    <div className="font-semibold text-white">Combinations</div>
                    <div className="text-slate-200 mt-1">
                      With Dapoxetine & more
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-200/80">
                  <span>Discreet, export-ready presentation.</span>
                  <span className="inline-flex items-center gap-1 text-pink-300 font-semibold">
                    🔒 B2B Only
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ============ OFFER SLIDER + CATEGORY STRIP ============ */}
  

      {/* ============ BLACK FRIDAY SLIDER + CATEGORY STRIP ============ */}
      <section className="border-y border-[#1e293b] bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 space-y-4">
          {/* Black Friday / Promo Slider */}
          <BlackFridaySlider onShopClick={() => navigate("/products")} />

          {/* Category buttons (unchanged styling) */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs sm:text-sm font-semibold text-slate-300 mr-2">
              Browse by category:
            </span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() =>
                    navigate("/products", { state: { category: cat.key } })
                  }
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-[#233554] text-[11px] sm:text-xs text-slate-100 hover:border-pink-500 hover:text-pink-300 hover:shadow-[0_0_18px_rgba(236,72,153,0.6)] transition"
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

    <section className="border-y border-[#1e293b] bg-[#020617] mb-1">
        {/* ---- OFFER SLIDER ---- */}
        <div className="w-full overflow-hidden border-b border-[#1e293b]">
          <div className="whitespace-nowrap overflow-hidden animate-scroll-offers py-2">
            {/* REPEATED TEXT FOR LOOPING EFFECT */}
            <span className="mx-6 text-[13px] text-pink-300 font-semibold tracking-wide">
              🔥 BLACK FRIDAY SALE — UP TO 25% OFF ON SELECT STRENGTHS
            </span>

            <span className="mx-6 text-[13px] text-cyan-300 font-semibold tracking-wide">
              💊 BUY 2 GET 1 FREE · LIMITED TIME OFFER
            </span>

            <span className="mx-6 text-[13px] text-purple-300 font-semibold tracking-wide">
              🚚 FREE SHIPPING FOR BULK B2B ORDERS
            </span>

            <span className="mx-6 text-[13px] text-emerald-300 font-semibold tracking-wide">
              ⚡ NEW ORAL JELLY RANGE RELEASED
            </span>

            {/* duplicate for infinite scroll */}
            <span className="mx-6 text-[13px] text-pink-300 font-semibold tracking-wide">
              🔥 BLACK FRIDAY SALE — UP TO 25% OFF ON SELECT STRENGTHS
            </span>

            <span className="mx-6 text-[13px] text-cyan-300 font-semibold tracking-wide">
              💊 BUY 2 GET 1 FREE · LIMITED TIME OFFER
            </span>

            <span className="mx-6 text-[13px] text-purple-300 font-semibold tracking-wide">
              🚚 FREE SHIPPING FOR BULK B2B ORDERS
            </span>

            <span className="mx-6 text-[13px] text-emerald-300 font-semibold tracking-wide">
              ⚡ NEW ORAL JELLY RANGE RELEASED
            </span>
          </div>
        </div>
      </section>

      {/* ============ TOP STORE BANNER (POTENCIA STYLE) ============ */}
      <section className="w-full bg-[#0b1220] border-b border-[#1e293b]">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-white">
              Premium ED & Performance Portfolio
            </h1>
            <p className="text-[12px] text-slate-300 mt-1">
              Tablets · Softgels · Jellies · Combinations · Export-ready
            </p>
          </div>

          <button
            onClick={() => navigate("/products")}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-600 to-pink-500 text-white text-sm font-semibold hover:scale-[1.02] hover:shadow-[0_0_18px_rgba(236,72,153,0.6)] transition"
          >
            Browse full catalog
          </button>
        </div>
      </section>

      

      {/* ============ MAIN SHOP: SIDEBAR + PRODUCT GRID (LIKE POTENCIA) ============ */}
      <section className="py-10 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* LEFT SIDEBAR (FILTERS) */}
            <aside className="w-full sm:w-56 lg:w-64 flex-shrink-0">
              <div className="sticky top-24 rounded-2xl bg-gradient-to-b from-[#0b1220] to-[#020617] border border-[#233554] shadow-xl p-5">
                <h3 className="text-lg font-bold mb-4 tracking-wide">
                  Filter Products
                </h3>

                {/* Categories */}
                <div className="mb-6">
                  <p className="text-xs uppercase text-slate-400 mb-2 tracking-wider">
                    Category
                  </p>
                  <div className="space-y-2">
                    {categories.map((c) => (
                      <button
                        key={c.key}
                        onClick={() =>
                          navigate("/products", { state: { category: c.key } })
                        }
                        className="w-full text-left px-3 py-2 rounded-lg bg-white/5 border border-[#1e293b] hover:border-pink-500 hover:text-pink-300 transition text-sm text-slate-200"
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Potency Chips */}
                <div className="mb-6">
                  <p className="text-xs uppercase text-slate-400 mb-2 tracking-wider">
                    Potency snapshot
                  </p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {strengths.map((pot) => (
                      <span
                        key={pot}
                        className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 hover:bg-pink-600/40 hover:border-pink-400 cursor-default text-center transition duration-200"
                      >
                        {pot}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Forms */}
                <div className="mb-6">
                  <p className="text-xs uppercase text-slate-400 mb-2 tracking-wider">
                    Forms available
                  </p>

                  <div className="space-y-2 text-sm">
                    {[
                      "Tablet",
                      "Softgel capsule",
                      "Oral jelly",
                      "Chewable",
                      "Injection",
                    ].map((f) => (
                      <div
                        key={f}
                        className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Promo Card */}
                <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-pink-700 to-red-600 shadow-2xl">
                  <h4 className="font-semibold text-sm">High-demand lines</h4>
                  <p className="text-xs mt-1 text-pink-50">
                    Focus on confidence, intimacy & performance wellness with
                    pharma-grade quality and discreet presentation.
                  </p>
                </div>
              </div>
            </aside>

            {/* RIGHT PRODUCT GRID (JSON-BASED FEATURED PRODUCTS) */}
            <div className="lg:col-span-3">
              {/* Top heading (like category title) */}
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Featured performance medicines
                  </h2>
                  <p className="text-sm text-slate-300 mt-1 max-w-xl">
                    Selected SKUs with consistent repeat demand in ED &
                    performance-care markets.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-white/5 border border-[#233554] text-[11px] sm:text-xs text-slate-100">
                    B2B only
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white/5 border border-[#233554] text-[11px] sm:text-xs text-slate-100">
                    Export ready
                  </span>
                </div>
              </div>

              {/* PRODUCT CARDS */}
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-3 gap-6">
                {featuredProducts.map((p, index) => (
                  <div
                    key={p.id || index}
                    className="relative cursor-pointer group rounded-2xl border border-[#1e293b] bg-white/5 backdrop-blur-xl shadow-[0_10px_25px_rgba(15,23,42,0.7)] hover:shadow-[0_0_25px_rgba(236,72,153,0.7)] hover:-translate-y-1 transition overflow-hidden"
                    onClick={() => navigate(`/product/${p.slug || p.id}`)}
                  >
                    {/* Optional badge like Potencia (top left) */}
                    <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-full bg-pink-600/90 text-[10px] font-semibold text-white uppercase tracking-wide">
                      Top line
                    </div>

                    {/* IMAGE */}
                    <div className="h-32 bg-gradient-to-br from-[#020617] via-[#0b1220] to-[#111827] flex items-center justify-center">
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={p.name}
                          className="max-h-full max-w-full object-contain group-hover:scale-105 transition"
                        />
                      ) : (
                        <div className="text-[11px] text-slate-400 px-3 text-center">
                          Product image placeholder
                        </div>
                      )}
                    </div>

                    {/* BODY */}
                    <div className="p-4">
                      <p className="text-[11px] uppercase tracking-wide text-pink-400 font-semibold line-clamp-1">
                        {p.category}
                      </p>

                      <p className="text-sm font-semibold text-white mt-1 line-clamp-2">
                        {p.name}
                      </p>

                      {p.dosage && (
                        <p className="text-xs text-slate-300 mt-1">
                          Strength: {p.dosage}
                        </p>
                      )}

                      {p.form && (
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Form: {p.form}
                        </p>
                      )}

                      {/* FOOTER TAGS */}
                      <div className="mt-2 flex flex-wrap gap-1">
                        {p.pack_size && (
                          <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-[#233554] text-slate-200">
                            {p.pack_size}
                          </span>
                        )}
                        {p.cas_id && (
                          <span className="text-[10px] px-2 py-1 rounded-full bg-pink-600/20 border border-pink-500/50 text-pink-200">
                            CAS: {p.cas_id}
                          </span>
                        )}
                      </div>

                      {/* CTA ROW (VIEW DETAILS – like product page button) */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/product/${p.slug || p.id}`);
                        }}
                        className="mt-3 inline-flex items-center justify-center w-full px-3 py-1.5 rounded-full bg-pink-600 text-white text-xs sm:text-[13px] font-semibold hover:bg-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.7)] transition"
                      >
                        View details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="py-10 sm:py-12 bg-gradient-to-br from-[#020617] via-[#0b1220] to-[#020617] border-y border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Why distributors choose Ivexia
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Designed for serious B2B buyers, exporters and pharmacy chains who
              need consistent supply, compliance and quality.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="rounded-2xl p-5 bg-white/5 border border-[#233554] backdrop-blur-xl shadow-[0_15px_35px_rgba(15,23,42,0.9)]">
              <div className="w-10 h-10 rounded-xl bg-pink-600/25 flex items-center justify-center mb-3">
                <span className="text-lg">🧪</span>
              </div>
              <h3 className="font-semibold text-white">
                Assured Potency & Purity
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Each batch passes robust analytical testing for assay,
                uniformity and impurities.
              </p>
            </div>

            <div className="rounded-2xl p-5 bg-white/5 border border-[#233554] backdrop-blur-xl shadow-[0_15px_35px_rgba(15,23,42,0.9)]">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/25 flex items-center justify-center mb-3">
                <span className="text-lg">📦</span>
              </div>
              <h3 className="font-semibold text-white">
                Flexible Pack & Branding
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Primary packs ready; private-label and export-ready packaging
                options on discussion.
              </p>
            </div>

            <div className="rounded-2xl p-5 bg-white/5 border border-[#233554] backdrop-blur-xl shadow-[0_15px_35px_rgba(15,23,42,0.9)]">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/25 flex items-center justify-center mb-3">
                <span className="text-lg">🌍</span>
              </div>
              <h3 className="font-semibold text-white">Global Export Focus</h3>
              <p className="mt-2 text-sm text-slate-300">
                Built for regulated and semi-regulated markets with proper
                documentation support.
              </p>
            </div>

            <div className="rounded-2xl p-5 bg-white/5 border border-[#233554] backdrop-blur-xl shadow-[0_15px_35px_rgba(15,23,42,0.9)]">
              <div className="w-10 h-10 rounded-xl bg-purple-500/25 flex items-center justify-center mb-3">
                <span className="text-lg">🤝</span>
              </div>
              <h3 className="font-semibold text-white">
                Long-Term Partnerships
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Dedicated account handling, stable pricing, and predictable
                manufacturing slots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ORDER PROCESS ============ */}
      <section className="py-10 sm:py-12 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:3xl font-bold text-white">
                Simple, export-ready ordering flow
              </h2>
              <p className="mt-2 text-sm text-slate-300 max-w-md">
                From quotation to dispatch, our team keeps the process smooth,
                transparent and documentation-friendly.
              </p>

              <ol className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-pink-600 text-white flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      Share requirements / product list
                    </div>
                    <div className="text-slate-300">
                      Send your target strengths, brands and monthly volume for
                      a structured quote.
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-pink-600 text-white flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      Get pricing & lead time
                    </div>
                    <div className="text-slate-300">
                      We confirm availability, documentation support and
                      dispatch timelines.
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-pink-600 text-white flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      Confirm order & logistics
                    </div>
                    <div className="text-slate-300">
                      We coordinate packing, labels and shipping with your
                      forwarder or our partners.
                    </div>
                  </div>
                </li>
              </ol>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("/contact")}
                  className="px-6 py-3 rounded-full bg-pink-600 text-white text-sm font-semibold hover:bg-pink-500 hover:shadow-[0_0_26px_rgba(236,72,153,0.7)] transition"
                >
                  Talk to sales
                </button>
                <button
                  onClick={() => navigate("/orders")}
                  className="px-6 py-3 rounded-full border border-[#233554] text-sm text-slate-100 hover:bg-white/5 transition"
                >
                  View your orders
                </button>
              </div>
            </div>

            {/* Right illustration box */}
            <div className="rounded-3xl bg-white/5 border border-[#233554] p-5 sm:p-6 lg:p-7 backdrop-blur-xl shadow-[0_20px_45px_rgba(15,23,42,0.9)]">
              <h3 className="font-semibold text-white mb-3">
                Highlights for ED & performance portfolio
              </h3>
              <ul className="space-y-2 text-sm text-slate-200">
                <li>• 25 mg to 200 mg strengths across major APIs.</li>
                <li>
                  • Tablets, softgel capsules, oral jelly and chewable forms.
                </li>
                <li>• Competitive MOQs for new markets & distributors.</li>
                <li>• Stability data and COA available for key lines.</li>
                <li>• Option for multilingual packaging on request.</li>
              </ul>

              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-[11px]">
                <div className="rounded-xl bg-white/5 border border-[#233554] p-3">
                  <div className="font-bold text-pink-400 text-lg">50+</div>
                  <div className="text-slate-300 mt-1">Ready SKUs</div>
                </div>
                <div className="rounded-xl bg-white/5 border border-[#233554] p-3">
                  <div className="font-bold text-cyan-300 text-lg">20+</div>
                  <div className="text-slate-300 mt-1">Countries served</div>
                </div>
                <div className="rounded-xl bg-white/5 border border-[#233554] p-3">
                  <div className="font-bold text-emerald-300 text-lg">
                    24–72h
                  </div>
                  <div className="text-slate-300 mt-1">Quote TAT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA STRIP (NEON) ============ */}
      <section className="py-10 bg-gradient-to-r from-[#020617] via-[#0b1220] to-[#020617] border-t border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Ready to scale your ED & performance portfolio?
            </h2>
            <p className="mt-1 text-sm text-slate-300 max-w-xl">
              Share your requirement sheet and our team will respond with a
              detailed product, pricing and documentation matrix.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/contact")}
              className="px-6 py-3 rounded-full bg-pink-600 text-white text-sm font-semibold hover:bg-pink-500 hover:shadow-[0_0_26px_rgba(236,72,153,0.7)] transition"
            >
              Send enquiry
            </button>
            <button
              onClick={() => navigate("/about")}
              className="px-6 py-3 rounded-full border border-cyan-400/70 text-sm font-semibold text-cyan-200 hover:bg-cyan-500/10 transition"
            >
              Learn about Ivexia
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
