import React, { useState } from "react";

const articles = [
  {
    id: 1,
    key: "kamagra50",
    img: "https://i.pinimg.com/1200x/da/50/29/da50291b15eab3c4d1755fe218e39d91.jpg",
    title: "Kamagra 50 mg",
    description:
      "Kamagra 50 mg contains the active ingredient sildenafil citrate, used to treat erectile dysfunction and pulmonary hypertension. (4 tablets/box).",
  },
  {
    id: 2,
    key: "kamagra100",
    img: "https://i.pinimg.com/1200x/84/5f/82/845f82755ce8632421486483dfd413be.jpg",
    title: "Kamagra 100 mg",
    description:
      "Kamagra 100 mg, with sildenafil citrate, helps achieve and maintain erections (4 tablets/box).",
  },
  {
    id: 3,
    key: "kamagraoraljelly",
    img: "https://i.pinimg.com/1200x/6f/0d/ac/6f0daccd6a18f2d68845507c4104fb7b.jpg",
    title: "Kamagra 100mg Oral Jelly",
    description:
      "Easily dissolvable, gel-based sildenafil citrate for ED. (7x5gm sachet box).",
  },
  {
    id: 4,
    key: "superkamagrajelly",
    img: "https://i.pinimg.com/736x/c8/57/72/c857722f74cb39a9cd2b847e04c6a484.jpg",
    title: "Super Kamagra Oral Jelly",
    description:
      "Sildenafil 100mg + Dapoxetine 60mg. Treats erectile dysfunction and premature ejaculation. (7x5gm sachet box).",
  },
  {
    id: 5,
    key: "kamagrachewable",
    img: "https://i.pinimg.com/1200x/21/8b/bc/218bbc62fd5d9cbd67e8076fbb61cdfe.jpg",
    title: "Kamagra 100 Chewable Tablets",
    description:
      "Faster-acting, chewable sildenafil tablets for ED, multiple flavors. (4 tablets/box).",
  },
  {
    id: 6,
    key: "superkamagratablet",
    img: "https://i.pinimg.com/1200x/7f/da/b5/7fdab5dd918e9b0dbe8ff0db85dc81b4.jpg",
    title: "Super Kamagra Tablet",
    description:
      "Sildenafil 100mg + Dapoxetine 60mg tablets for ED and early ejaculation. (4 tablets/box).",
  },
];

export default function IvexiaBlog() {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="min-h-screen bg-[#f4f6fb] pb-20">
      <header className="fixed top-0 w-full z-50 bg-[#2b3a67] shadow-md py-3">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold cursor-pointer">
            Ivexia
          </h1>
        </div>
      </header>

      <div className="pt-24 text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-bold">Product Knowledge Base</h1>
        <p className="text-gray-600 mt-2">
          ED/Pharma specials – composition, use, and all you need to know.
        </p>
      </div>

      <section className="max-w-6xl mx-auto px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((a) => (
          <div
            key={a.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition cursor-pointer overflow-hidden"
            onClick={() => setActiveId(a.id)}
          >
            <img
              src={a.img}
              alt={a.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="font-semibold text-lg">{a.title}</h2>
              <p className="text-gray-600 mt-3">{a.description}</p>
              <p className="text-indigo-600 mt-3 font-medium">Details →</p>
            </div>
          </div>
        ))}
      </section>

      {activeId && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          onClick={() => setActiveId(null)}
        >
          <div
            className="bg-white max-w-lg w-full rounded-xl p-6 shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <BlogArticlePreview id={activeId} articles={articles} onBack={() => setActiveId(null)} />
            <button
              className="absolute top-3 right-3 bg-gray-200 p-2 rounded-full text-lg"
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

// Helper to display full article preview in modal, now with working Back to Blog button
function BlogArticlePreview({ id, articles, onBack }) {
  const a = articles.find((a) => a.id === id);
  if (!a) return null;
  return (
    <div>
      <img
        src={a.img}
        alt={a.title}
        className="w-full rounded-lg mb-5 max-h-56 object-cover"
      />
      <h2 className="text-2xl font-bold mb-3">{a.title}</h2>
      <p className="whitespace-pre-line mb-6">{a.description}</p>
      <button
        className="mt-3 bg-[#2b3a67] text-white px-6 py-2 rounded-lg"
        onClick={onBack}
      >
        ← Back to Blog
      </button>
    </div>
  );
}