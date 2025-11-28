import React, { useMemo, useState } from "react";
import PRODUCTS from "../data/Products.mock";
import ProductCard from "../components/ProductCard";
import ProductDetails from "../components/ProductDetails";
import heroImg from "../assets/logo/producthero2.png";
import AdPopup from "../components/AdPopup";
/* ---------------------------------------------
   ADULT-THEME BANNERS (SAFE & CLEAN)
----------------------------------------------*/

// Top Slim Romantic Strip
function RomanticStrip() {
  return (
    <section className="w-full bg-gradient-to-r from-[#150c20] via-[#2a0f35] to-[#450e2c] border-b border-pink-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full bg-pink-500/30 flex items-center justify-center">
            <span className="text-lg">❤️</span>
            <div className="absolute -inset-2 bg-pink-400/20 blur-xl" />
          </div>
          <div>
            <p className="text-xs text-white font-semibold">
              Confidence · Intimacy · Wellness
            </p>
            <p className="text-[11px] text-pink-200/80">
              Designed to support modern lifestyle performance.
            </p>
          </div>
        </div>

        <button className="text-[11px] sm:text-xs px-4 py-2 rounded-full bg-white text-[#150c20] font-semibold hover:bg-pink-50 transition">
          Request Full Catalog
        </button>
      </div>
    </section>
  );
}

// Mid Romantic / Couple Vibe Banner
function CoupleBanner() {
  return (
    <section className="mt-8">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#120a1d] via-[#2a103c] to-[#4d0f2e] border border-pink-500/30 shadow-xl">
        {/* Glow shapes */}
        <div className="absolute -left-12 top-0 w-44 h-44 bg-pink-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 w-52 h-52 bg-purple-500/20 blur-3xl" />

        <div className="relative z-10 px-6 sm:px-10 py-10 flex flex-col lg:flex-row items-center gap-10">
          {/* Abstract couple silhouettes */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/50 to-purple-500/50 blur-sm opacity-80" />
            <div className="absolute inset-4 rounded-full border border-white/20 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-pink-300/80 blur-[3px]" />
              <div className="absolute -right-2 top-8 w-10 h-10 rounded-full bg-purple-300/80 blur-[3px]" />
            </div>

            <span className="absolute -top-1 left-3 text-pink-300 text-xl animate-bounce">
              ❤️
            </span>
            <span className="absolute bottom-1 right-3 text-purple-300 text-xl animate-pulse">
              💜
            </span>
          </div>

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-xs uppercase tracking-widest text-pink-200/80 font-medium">
              PERFORMANCE · CONFIDENCE · ENERGY
            </p>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Premium support for intimate confidence & wellness.
            </h2>

            <p className="text-sm text-pink-100/90 mt-3 max-w-xl">
              A modern, focused performance-care portfolio including Sildenafil,
              Tadalafil, Dapoxetine, blends, softgel & jellies — crafted with
              pharma-grade quality.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 justify-center lg:justify-start">
              <button className="px-5 py-2.5 rounded-full bg-pink-500 text-white text-sm font-semibold hover:bg-pink-400 transition shadow-md shadow-pink-600/40">
                View Performance Range
              </button>

              <button className="px-5 py-2.5 rounded-full border border-pink-300/50 text-pink-100 text-sm hover:bg-white/10 transition">
                Talk to Export Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Bottom CTA with neon hearts
function NeonCTA() {
  return (
    <section className="mt-10 mb-10">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#090c15] via-[#150f25] to-[#1c0f17] border border-slate-700">
        <div className="absolute inset-0 border border-pink-500/40 rounded-3xl pointer-events-none" />

        <div className="absolute -inset-20 bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.15),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(96,165,250,0.15),_transparent_60%)] opacity-80" />

        <div className="relative z-10 px-6 sm:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-pink-200/80">
              NIGHT ENERGY · CONTROL · DURABILITY
            </p>
            <h3 className="text-lg sm:text-xl md:text-2xl text-white font-semibold mt-1">
              Build a performance line customers trust.
            </h3>
            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              One portfolio that includes tablets, oral jellies, softgels & more
              — fully export-ready and batch-tested.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3 text-xl mb-2">
              <span className="animate-pulse">❤️</span>
              <span className="text-pink-300 animate-bounce">💊</span>
              <span className="animate-pulse">💜</span>
            </div>

            <button className="px-6 py-2.5 rounded-full bg-pink-500 text-white text-sm font-semibold hover:bg-pink-400 transition shadow-md shadow-pink-600/40">
              Share Requirements
            </button>

            <p className="text-[11px] text-slate-300 mt-2">
              Response within{" "}
              <span className="text-pink-200 font-semibold">24–48 hrs</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PremiumHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Blurred background hero image */}
      <div className="absolute inset-0 opacity-40">
        <img
          src={heroImg}
          alt="Performance wellness"
          className="w-full h-full object-cover blur-[1px] scale-105"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#050816]/90 to-[#0b5870]/80" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-16 lg:pt-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left hero text */}
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Premium ED & Performance Portfolio
            </span>

            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Build a{" "}
              <span className="text-pink-400">confident performance</span>{" "}
              portfolio.
            </h1>

            <p className="mt-3 text-sm sm:text-base text-slate-200/90 max-w-xl">
              Explore sildenafil, tadalafil, vardenafil & combination therapies
              designed for distributors, pharmacies & wellness brands.
            </p>

            {/* Hero highlights */}
            <div className="mt-6 grid grid-cols-3 gap-3 max-w-md text-xs sm:text-sm">
              <div className="rounded-2xl bg-white/5 border border-white/10 px-3 py-3">
                <div className="font-semibold text-pink-300">50+ SKUs</div>
                <div className="text-slate-200/80 text-[11px] mt-1">
                  ED & performance-focused lines.
                </div>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 px-3 py-3">
                <div className="font-semibold text-emerald-300">Lab Tested</div>
                <div className="text-slate-200/80 text-[11px] mt-1">
                  Potency & purity assurance.
                </div>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 px-3 py-3">
                <div className="font-semibold text-cyan-300">Global B2B</div>
                <div className="text-slate-200/80 text-[11px] mt-1">
                  Export-minded documentation.
                </div>
              </div>
            </div>
          </div>

          {/* Right hero stats / floating card */}
          <div className="relative">
            <div className="absolute -top-10 right-0 w-40 h-40 bg-pink-500/30 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 left-4 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full" />

            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-6 lg:p-7 shadow-2xl backdrop-blur-xl">
              <h2 className="text-lg font-semibold mb-1 text-white">
                Curated Performance Range
              </h2>
              <p className="text-xs text-slate-200/80 mb-4">
                Strengths from 25 mg to 200 mg in tablets, softgels, jellies &
                more.
              </p>

              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-white/5 rounded-2xl p-3 border border-white/10">
                  <div className="font-semibold text-white">Sildenafil</div>
                  <div className="text-[11px] text-slate-200 mt-1">
                    25 · 50 · 100 · 200 mg
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-3 border border-white/10">
                  <div className="font-semibold text-white">Tadalafil</div>
                  <div className="text-[11px] text-slate-200 mt-1">
                    5 · 10 · 20 · 40 mg
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-3 border border-white/10">
                  <div className="font-semibold text-white">Combinations</div>
                  <div className="text-[11px] text-slate-200 mt-1">
                    With Dapoxetine
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
    </section>
  );
}

/* ---------------------------------------------
   MAIN PRODUCTS PAGE
----------------------------------------------*/

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);

  const PAGE_SIZE = 12;

  const categories = useMemo(() => {
    const cats = Array.from(
      new Set(PRODUCTS.map((p) => p.category).filter(Boolean))
    );
    return ["All", ...cats];
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (p.name.toLowerCase().includes(q) ||
          (p.composition || "").toLowerCase().includes(q) ||
          (p.description || "").toLowerCase().includes(q))
    );
  }, [query, category]);

  const TOTAL = Math.ceil(filtered.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  return (
    <div className="min-h-screen w-full bg-[#0b0d12] text-white overflow-x-hidden  ">
      {/* Romantic Strip */}

      {/* HERO */}
      {/* <PremiumHero /> */}
      <AdPopup />

      <RomanticStrip />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
        {/* Couple Banner */}
        <CoupleBanner />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-8 ">
          {/* Sidebar */}
          <aside className="w-full sm:w-56 lg:w-64 flex-shrink-0 sm:w-full">
            <div className="sticky top-24 rounded-2xl bg-gradient-to-b from-[#0b1220] to-[#020617] border border-[#233554] shadow-xl p-5">
              <h3 className="text-lg font-bold mb-4 tracking-wide">
                Filter Products
              </h3>

              {/* Categories */}
              <div className="mb-6">
                <p className="text-xs uppercase text-slate-400 mb-2 tracking-wider">
                  Category
                </p>
                <select
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setPage(1);
                  }}
                  className="w-full bg-black/30 text-slate-100 px-3 py-2 rounded-lg text-sm border border-slate-600 focus:border-pink-400 focus:ring-pink-400 outline-none transition"
                >
                  {categories.map((c) => (
                    <option key={c} className="text-slate-900">
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Potency Chips */}
              <div className="mb-6">
                <p className="text-xs uppercase text-slate-400 mb-2 tracking-wider">
                  Potency snapshot
                </p>

                <div className="grid grid-cols-3 gap-2 text-xs">
                  {["25 mg", "50 mg", "100 mg", "150 mg", "200 mg"].map(
                    (pot) => (
                      <span
                        key={pot}
                        className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 hover:bg-pink-600/40 hover:border-pink-400 cursor-default text-center transition duration-200"
                      >
                        {pot}
                      </span>
                    )
                  )}
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
                  Focus on confidence, intimacy and performance wellness – with
                  pharma-grade quality and discreet presentation.
                </p>
              </div>
            </div>
          </aside>

          {/* Products */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:ml-5">
              {pageItems.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onClick={() => setSelected(p)}
                />
              ))}
            </div>

            {/* Pagination */}
            {TOTAL > 1 && (
              <div className="mt-8 flex justify-center gap-3">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="px-4 py-2 rounded-lg bg-[#151925] border border-pink-500/30 text-sm hover:bg-[#1a1e2b]"
                  disabled={page === 1}
                >
                  Prev
                </button>

                <span className="text-sm text-pink-200">
                  Page {page} / {TOTAL}
                </span>

                <button
                  onClick={() => setPage((p) => Math.min(TOTAL, p + 1))}
                  className="px-4 py-2 rounded-lg bg-[#151925] border border-pink-500/30 text-sm hover:bg-[#1a1e2b]"
                  disabled={page === TOTAL}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Modal */}
        {selected && (
          <ProductDetails
            product={selected}
            onClose={() => setSelected(null)}
          />
        )}

        {/* Neon CTA */}
        <NeonCTA />
      </div>
    </div>
  );
}
