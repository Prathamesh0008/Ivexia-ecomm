import React from "react";

export default function IvexiaFilterSidebar({ categories, strengths }) {
  return (
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
                className="w-full text-left px-3 py-2 rounded-lg bg-white/5 border border-[#1e293b] hover:border-pink-500 hover:text-pink-300 transition text-sm text-slate-200"
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Strength Chips */}
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
            Focus on ED & performance wellness with pharma-grade quality.
          </p>
        </div>
      </div>
    </aside>
  );
}
