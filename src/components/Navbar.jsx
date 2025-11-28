// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCart } from "./cart/CartContext";

const LOGO = "/src/assets/logo/ivexiaa-logoo.png";
const USER = "/src/assets/logo/user.png";

export default function Navbar({ onOpenCart }) {
  const { items } = useCart();
  const cartItemCount = items.reduce((sum, item) => sum + (item.qty || 1), 0);

  const [topVisible, setTopVisible] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const lastScroll = useRef(typeof window !== "undefined" ? window.scrollY : 0);

  const { t, i18n } = useTranslation();

  const languages = [
    { code: "en", label: "English" },
    { code: "de", label: "German" },
    { code: "ar", label: "Arabic" },
    { code: "es", label: "Spanish" },
    { code: "fr", label: "French" },
    { code: "ja", label: "Japanese" },
    { code: "nl", label: "Dutch" },
    { code: "pt", label: "Portuguese" },
    { code: "zh", label: "Chinese" },
  ];

  const changeLang = (code) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
    setMobileMenu(false);
  };

  /* Hide / show top strip */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const diff = y - lastScroll.current;

      if (diff > 5 && y > 70) setTopVisible(false);
      if (diff < 0) setTopVisible(true);
      if (y < 15) setTopVisible(true);

      lastScroll.current = y;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* STYLES */
  const NEON_BG = "linear-gradient(135deg, #0a0c14, #120a1d, #250b2d)";
  const NEON_BORDER = "rgba(255,0,90,0.35)";
  const DARK = "#f2f4ff";

  const navLinkClass = ({ isActive }) =>
    `px-3 py-1.5 rounded-md text-[13px] font-semibold tracking-wide transition 
    ${isActive
      ? "text-pink-400 border-b-2 border-pink-500"
      : "text-slate-200 hover:text-pink-300"}`;

  return (
    <>
      {/* ================= TOP STRIP ================= */}
      <div
        className="fixed left-0 right-0 z-[70] flex items-center justify-between px-4 md:px-10 text-[12px] font-semibold"
        style={{
          height: topVisible ? 32 : 0,
          overflow: "hidden",
          transition: "height .25s ease",
          background: "#150c20",
          color: "#ffb5cc",
          borderBottom: "1px solid rgba(255,0,90,0.25)",
        }}
      >
        <span>💗 Premium Wellness · Fast Delivery · B2B</span>
        <span>📞 +91 12345 67890</span>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <header
        className="fixed w-full z-[60] shadow-xl"
        style={{
          top: topVisible ? 32 : 0,
          transition: "top 240ms ease",
          background: NEON_BG,
          borderBottom: `1px solid ${NEON_BORDER}`,
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="flex items-center justify-between px-4 md:px-10 h-[70px]">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img src={LOGO} className="h-12 object-contain" />
          </Link>

          {/* DESKTOP SEARCH */}
          <div className="hidden lg:flex flex-1 justify-center px-6">
            <div
              className="w-full max-w-lg flex items-center rounded-full px-4 py-1.5"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: `1px solid ${NEON_BORDER}`,
                backdropFilter: "blur(6px)",
              }}
            >
              <input
                className="flex-1 bg-transparent outline-none text-[13px] text-pink-200"
                placeholder="Search performance medicines…"
              />
              <button className="px-4 py-1.5 rounded-full text-[12px] font-semibold bg-pink-600 text-white">
                Search
              </button>
            </div>
          </div>

          {/* RIGHT SIDE ICONS */}
          <div className="flex items-center gap-3">

            {/* Mobile search */}
            <button
              onClick={() => setSearchOpen(true)}
              className="lg:hidden text-xl text-pink-300"
            >
              🔍
            </button>

            {/* LANGUAGE SELECT */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setLangOpen((s) => !s)}
                className="px-2.5 py-1.5 text-sm rounded-lg border border-pink-500/40 
                text-pink-200 flex items-center gap-2 hover:bg-pink-600/20"
              >
                🌐 {languages.find((l) => l.code === i18n.language)?.label}
                ▾
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-xl bg-[#120a1d] border border-pink-500/40 shadow-xl z-[999]">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => changeLang(l.code)}
                      className="w-full text-left px-4 py-2 text-sm text-pink-100 hover:bg-pink-600/20"
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CART */}
            <button onClick={onOpenCart} className="relative text-pink-200">
              <svg className="w-7 h-7" stroke="currentColor" fill="none" strokeWidth="2">
                <path d="M3 3h2l.4 2M7 13h14l1-5H8.4M7 13l-1.5 7h15m-16.5-7h17" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* LOGIN */}
            <Link
              to="/login"
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-sm border border-pink-600/40 rounded-full text-pink-200 hover:bg-pink-600/20"
            >
              <img src={USER} className="h-5 w-5" />
              Login
            </Link>

            {/* MOBILE MENU */}
            <button
              className="lg:hidden text-2xl text-pink-300"
              onClick={() => setMobileMenu((s) => !s)}
            >
              {mobileMenu ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* ================= NAV LINKS ================= */}
        <nav className="hidden lg:flex justify-center gap-6 py-2 bg-[#0b0d12] border-t border-pink-500/20">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/products" className={navLinkClass}>Products</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          <NavLink to="/orders" className={navLinkClass}>Orders</NavLink>
          <NavLink to="/admin/orders" className={navLinkClass}>Admin</NavLink>
        </nav>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenu && (
        <div className="fixed inset-0 bg-black/50 z-[80]" onClick={() => setMobileMenu(false)}>
          <aside
            className="absolute bg-[#0b0d12] top-0 bottom-0 w-72 p-6 border-r border-pink-600/30"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={LOGO} className="h-12 mb-6" />

            <div className="flex flex-col gap-4 text-pink-200 text-[16px] font-semibold">
              <Link to="/" onClick={() => setMobileMenu(false)}>Home</Link>
              <Link to="/products" onClick={() => setMobileMenu(false)}>Products</Link>
              <Link to="/about" onClick={() => setMobileMenu(false)}>About</Link>
              <Link to="/blog" onClick={() => setMobileMenu(false)}>Blog</Link>
              <Link to="/contact" onClick={() => setMobileMenu(false)}>Contact</Link>
            </div>

            <div className="mt-6 border-t border-pink-500/30 pt-4">
              <p className="text-xs text-pink-300 mb-2">Language</p>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => changeLang(l.code)}
                    className="px-3 py-2 rounded-lg bg-pink-600/20 text-sm text-pink-100 border border-pink-500/30"
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* ================= MOBILE SEARCH OVERLAY ================= */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/40 z-[80]" onClick={() => setSearchOpen(false)}>
          <div className="bg-[#120a1d] mt-24 mx-5 p-5 rounded-xl border border-pink-500/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}>
            <input
              className="w-full bg-transparent text-pink-200 text-sm px-4 py-3 border border-pink-500/40 rounded-lg outline-none"
              placeholder="Search products…"
            />
          </div>
        </div>
      )}
    </>
  );
}
