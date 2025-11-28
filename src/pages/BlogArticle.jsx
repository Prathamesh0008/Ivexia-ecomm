import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logo from "../assets/Ivexia.jpg";

const articles = {
  1: {
    title: "The Future of Modern Healthcare in 2025",
    img: "https://i.pinimg.com/736x/40/d4/b8/40d4b8275872de5a41955fdd9ec714d2.jpg",
    text: `
Healthcare is advancing faster than ever.
AI-driven diagnostics, nanotechnology, robotic surgeries and digital therapeutics are transforming patient care.

— Key Highlights —
• Predictive AI hospitals  
• Smart IoT medical systems  
• Gene editing treatment  
• Robotic precision surgeries  
• Cloud-based patient monitoring  
• Digital twin medical simulations  
• Personalized treatment using bio-data  
`,
  },
  2: {
    title: "Understanding APIs: Backbone of All Medicines",
    img: "https://i.pinimg.com/1200x/6c/ac/f9/6cacf98a7132032d02a21cddb1c20316.jpg",
    text: `
Active Pharmaceutical Ingredients (APIs) define the strength, purity and therapeutic effect of medicines.

— Inside API Manufacturing —
• Analytical purity  
• Impurity profiling  
• Stability testing  
• WHO-GMP & EU-GMP compliance  
• Bulk synthesis and purification  
• Quality management SOPs  
`,
  },
  3: {
    title: "How R&D Labs Build Tomorrow’s Medicines",
    img: "https://i.pinimg.com/1200x/1e/c3/63/1ec363db9598a75130f66966aacbc810.jpg",
    text: `
R&D labs are the backbone of pharmaceutical innovation for future medicines.

— Complete R&D Flow —
1. Molecule discovery  
2. Pre-clinical trials  
3. Formulation development  
4. Bioavailability testing  
5. Stability chamber studies  
6. GMP documentation & regulatory filing  
`,
  },
  4: {
    title: "The Rise of Nutraceuticals in Global Healthcare",
    img: "https://i.pinimg.com/736x/91/47/3f/91473f9b819a0dccbc8e5bd24c315724.jpg",
    text: `
Nutraceuticals are becoming essential in preventive healthcare.

— Why They Are Rising Globally —
• Immunity boosting ingredients  
• Natural disease prevention  
• Better consumer awareness  
• Reduced dependency on synthetic drugs  
• Rapidly evolving global nutraceutical market  
• Ayurvedic & herbal ingredients innovation  
`,
  },
  5: {
    title: "AI in Pharma: How Automation is Reshaping R&D",
    img: "https://i.pinimg.com/736x/93/c7/6d/93c76de072be4f7575687f77a11ee126.jpg",
    text: `
AI and robotics are transforming pharmaceutical research forever.

— Impact of AI in Pharma —
• Faster molecule discovery  
• Accurate clinical predictions  
• Higher trial success rates  
• Reduced R&D costs  
• Robotic automation in drug synthesis  
• AI-powered formulation development  
`,
  },
  6: {
    title: "Global Regulatory Standards: A Complete Overview",
    img: "https://i.pinimg.com/1200x/32/1a/cf/321acf981c481792c277ec991ca7ed4c.jpg",
    text: `
Regulatory standards form the foundation of global drug safety & patient care.

— Major Regulatory Systems —
• WHO  
• US-FDA  
• EU-GMP  
• CDSCO (India)  
• MHRA (UK)  
• PIC/S  
`,
  },
};

export default function BlogArticle() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [page, setPage] = useState(id ? "article" : "home");
  const [menuOpen, setMenuOpen] = useState(false);

  const article = articles[id];

  const Navbar = () => (
    <header className="fixed top-0 w-full z-50 bg-[#2b3a67] shadow-md py-3">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <img
          src={logo}
          alt="Ivexia"
          className="h-12 rounded cursor-pointer"
          onClick={() => { setPage("home"); navigate("/"); }}
        />

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-8 text-white font-medium">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("blog")}>Blog</button>
          <button onClick={() => setPage("contact")}>Contact</button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="sm:hidden bg-[#2b3a67] text-white text-lg flex flex-col gap-5 py-6 px-6 animate-slideDown">
          <button onClick={() => { setPage("home"); setMenuOpen(false); }}>Home</button>
          <button onClick={() => { setPage("blog"); setMenuOpen(false); }}>Blog</button>
          <button onClick={() => { setPage("contact"); setMenuOpen(false); }}>Contact</button>
        </div>
      )}
    </header>
  );

  /* ---------------- HOME PAGE ---------------- */
  if (page === "home") {
    return (
      <div className="min-h-screen bg-[#f4f6fb]">
        <Navbar />
        <div className="pt-24 px-4 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900">
            Welcome to Ivexia Pharmaceuticals
          </h1>
          <p className="text-gray-600 mt-3 text-lg sm:text-xl">
            Your trusted partner in global healthcare innovation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 mt-12 pb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900">
            Latest Blog Articles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {Object.entries(articles).map(([id, item]) => (
              <div
                key={id}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition cursor-pointer overflow-hidden"
                onClick={() => { setPage("article"); navigate(`/blog/${id}`); }}
              >
                <img src={item.img} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-indigo-600 mt-3 font-medium hover:underline">Read More →</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- CONTACT PAGE (GRADIENT) ---------------- */
/* ---------------- CONTACT PAGE (GRADIENT) ---------------- */
if (page === "contact") {
  return (
    <div className="relative min-h-screen pb-10 overflow-hidden">
      
      {/* ---------------- BACKGROUND GRADIENT ---------------- */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0d2d47, #1d4d7c, #0097b8)",
        }}
      ></div>

      {/* ---------------- SHADING OVERLAY ---------------- */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 mix-blend-overlay"></div>

      {/* ---------------- GLOSS / SHINE EFFECT ---------------- */}
      <div className="absolute inset-0 animate-shine bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>

      {/* Animation Class */}
      <style>
        {`
          @keyframes shine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-shine {
            animation: shine 5s linear infinite;
          }
        `}
      </style>

      {/* ---------------- PAGE CONTENT ---------------- */}
      <Navbar />

      <div className="relative max-w-xl mx-auto px-4 pt-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-white drop-shadow-lg">
          Contact Us
        </h1>

        <form className="bg-white/90 p-7 rounded-2xl shadow-xl mt-10 space-y-5 backdrop-blur-sm">
          <input
            type="text"
            placeholder="Full Name"
            className="border p-3 rounded w-full focus:ring-2 focus:ring-[#1d4d7c]"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="border p-3 rounded w-full focus:ring-2 focus:ring-[#1d4d7c]"
          />

          <textarea
            placeholder="Message"
            rows="5"
            className="border p-3 rounded w-full focus:ring-2 focus:ring-[#1d4d7c]"
          />

          <button className="w-full py-3 bg-[#1d4d7c] hover:bg-[#0d2d47] text-white font-semibold text-lg rounded transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

  /* ---------------- BLOG PAGE ---------------- */
  if (page === "blog") {
    return (
      <div className="min-h-screen bg-[#f4f6fb] pb-20">
        <Navbar />
        <div className="pt-24 text-center px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Ivexia Knowledge Hub</h1>
        </div>

        <div className="max-w-6xl mx-auto px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(articles).map(([id, item]) => (
            <div
              key={id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition cursor-pointer overflow-hidden"
              onClick={() => { setPage("article"); navigate(`/blog/${id}`); }}
            >
              <img src={item.img} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p className="text-indigo-600 mt-3 font-medium hover:underline">Read More →</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ---------------- ARTICLE PAGE ---------------- */
  return (
    <div className="min-h-screen bg-[#f4f6fb] pb-20">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 pt-24">
        {/* Image always first - requested change */}
        <img
          src={article.img}
          className="w-full rounded-2xl shadow-md object-cover max-h-80"
        />

        <h1 className="text-2xl sm:text-4xl font-bold mt-8">{article.title}</h1>
        <p className="text-gray-700 mt-5 whitespace-pre-line leading-relaxed text-base sm:text-lg">
          {article.text}
        </p>

        <button
          onClick={() => setPage("blog")}
          className="mt-10 bg-[#2b3a67] text-white px-6 py-3 rounded-lg hover:bg-[#233054]"
        >
          ← Back to Blog
        </button>
      </div>
    </div>
  );
}

/* Extra animation */
const style = document.createElement("style");
style.innerHTML = `
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-slideDown {
  animation: slideDown 0.25s ease-in-out;
}
`;
document.head.appendChild(style);