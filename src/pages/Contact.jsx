// src/pages/ContactPage.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import contactHero from "../assets/contact-hero.jpg";
import { useTranslation } from "react-i18next";

export default function ContactPage() {
  const { t } = useTranslation();
  const HERO = contactHero;

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const tmo = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(tmo);
  }, []);

  const location = useLocation();
  useEffect(() => {
    if (location?.state?.scroll) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 80);
    }
  }, [location]);

  // FORM STATE
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setFormState((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formState.name || !formState.email || !formState.message) {
      setStatus({ type: "error", msg: t("contact.formError") });
      return;
    }

    setStatus({ type: "pending", msg: t("contact.formSending") });

    setTimeout(() => {
      setStatus({ type: "success", msg: t("contact.formSuccess") });
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 900);
  }

  return (
    <div
      className="min-h-screen text-white antialiased"
      style={{
        background:
          "linear-gradient(160deg, #0b0d12 0%, #0b1220 45%, #020617 100%)",
      }}
    >
      {/* ================= HERO ================= */}
      <section className="relative w-full overflow-hidden">

        {/* HERO BG IMAGE WITH DARK GRADIENT */}
        <div
          className="w-full h-[380px] md:h-[520px] lg:h-[620px] bg-center bg-cover"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.85)), url('${HERO}')`,
          }}
        />
{/* HERO TITLE */}
<h1
  className="
    absolute inset-0 
    flex items-center justify-center 
    text-center font-extrabold px-4 
    text-white tracking-wide z-[60]
  "
  style={{
    fontSize: "clamp(2rem, 7vw, 4.2rem)",
    lineHeight: 1.1,
    pointerEvents: "none",
    transform: "translateY(-35%)", // More visible on mobile
    textShadow: `
      0 0 12px rgba(255,30,117,0.8),
      0 0 22px rgba(255,30,117,0.5),
      0 0 30px rgba(56,189,248,0.4)
    `,
  }}
>
  {t("contact.heroTitle")}
</h1>

{/* STRONGER GRADIENTS (Keeps text readable on mobile) */}
<div className="absolute inset-0 pointer-events-none">
  <div className="absolute inset-0 bg-gradient-to-b from-[#000]/40 via-[#000]/55 to-[#000]/85" />

  <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#000]/70 to-transparent" />

  {/* Cyan + Pink glows */}
  <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full blur-[120px] bg-[#ff1e75]/30" />
  <div className="absolute top-10 right-6 w-72 h-72 rounded-full blur-[120px] bg-[#38bdf8]/30" />
</div>


        {/* GLASS CARD FLOATING */}
        <div className="relative -mt-48 md:-mt-60">
          <div className="max-w-7xl mx-auto px-4">
            <div
              className={`backdrop-blur-xl rounded-3xl p-6 md:p-10 neon-glass shadow-neon-xl transform transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid #233554",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                {/* LEFT TEXT SECTION */}
                <div className="lg:col-span-2">
                  <p className="text-cyan-300 uppercase tracking-wider text-sm font-semibold">
                    {t("contact.heroTag")}
                  </p>

                  <h2 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-extrabold drop-shadow-sm">
                    {t("contact.heroHeading")}
                  </h2>

                  <p className="mt-4 text-slate-300">
                    {t("contact.heroSubtitle")}
                  </p>

                  {/* BUTTONS */}
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a
                      href="#contact-form"
                      className="px-6 py-3 rounded-lg bg-[#ff1e75] hover:bg-[#db2777] text-white shadow-pink hover:scale-[1.03] transition-all"
                    >
                      {t("contact.requestQuoteBtn")}
                    </a>

                    <a
                      href="mailto:support@ivexia.com"
                      className="text-sm text-cyan-300 hover:underline"
                    >
                      {t("contact.emailLabel")}
                    </a>
                  </div>

                  {/* FEATURES */}
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      {
                        icon: "🧪",
                        title: t("contact.chipRDTitle"),
                        text: t("contact.chipRDText"),
                      },
                      {
                        icon: "🩺",
                        title: t("contact.chipClinicalTitle"),
                        text: t("contact.chipClinicalText"),
                      },
                      {
                        icon: "🏭",
                        title: t("contact.chipMfgTitle"),
                        text: t("contact.chipMfgText"),
                      },
                    ].map((box, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-xl neon-card text-white"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-lg">
                            {box.icon}
                          </div>
                          <div>
                            <div className="font-semibold">{box.title}</div>
                            <div className="text-xs text-slate-300 mt-1">{box.text}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT QUICK CONTACT CARD */}
                <aside className="hidden lg:block">
                  <div
                    className={`rounded-xl overflow-hidden neon-card border border-[#233554] shadow-neon transform transition-all duration-500 ${
                      mounted ? "animate-slide-fade" : "opacity-0"
                    }`}
                  >
                    <img
                      src={HERO}
                      alt="office"
                      className="w-full h-40 object-cover opacity-80"
                    />

                    <div className="p-4">
                      <div className="font-semibold text-cyan-300">
                        {t("contact.quickContact")}
                      </div>

                      <div className="mt-2 text-sm text-slate-300">
                        {t("contact.quickContactSubtitle")}
                      </div>

                      <div className="mt-4 space-y-4 text-slate-300">
                        <div className="flex items-center gap-3">
                          <div className="neon-icon">📞</div>
                          <div>
                            <div className="font-medium">{t("contact.phone")}</div>
                            <div className="text-xs">+91 1234 567 890</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="neon-icon">✉️</div>
                          <div>
                            <div className="font-medium">{t("contact.email")}</div>
                            <div className="text-xs">{t("contact.emailLabel")}</div>
                          </div>
                        </div>

                        <a
                          href="#contact-form"
                          className="block py-2 text-center rounded-lg bg-[#ff1e75] hover:bg-[#db2777] shadow-pink"
                        >
                          {t("contact.messageUsBtn")}
                        </a>
                      </div>
                    </div>
                  </div>
                </aside>

              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ================= FORM SECTION ================= */}
      <main className="max-w-7xl mx-auto px-4 mt-16">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* FORM CARD */}
          <section
            id="contact-form"
            className={`lg:col-span-2 p-8 rounded-2xl backdrop-blur-xl neon-glass border border-[#233554] shadow-neon-xl transition-all ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-bold text-cyan-300">
              {t("contact.formRequestTitle")}
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              {t("contact.formRequestSubtitle")}
            </p>

            {/* FORM FIELDS */}
            <form
              onSubmit={handleSubmit}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {/* FULL NAME */}
              <div>
                <label className="text-slate-300 text-sm">
                  {t("contact.fullName")} *
                </label>
                <input
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder={t("contact.fullNamePlaceholder")}
                  className="contact-input"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-slate-300 text-sm">
                  {t("contact.emailField")} *
                </label>
                <input
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder={t("contact.emailPlaceholder")}
                  className="contact-input"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="text-slate-300 text-sm">
                  {t("contact.phoneField")}
                </label>
                <input
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder={t("contact.phonePlaceholder")}
                  className="contact-input"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label className="text-slate-300 text-sm">
                  {t("contact.subjectField")}
                </label>
                <input
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder={t("contact.subjectPlaceholder")}
                  className="contact-input"
                />
              </div>

              {/* MESSAGE */}
              <div className="sm:col-span-2">
                <label className="text-slate-300 text-sm">
                  {t("contact.messageField")} *
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder={t("contact.messagePlaceholder")}
                  className="contact-input h-40 resize-none"
                ></textarea>
              </div>

              {/* BUTTONS */}
              <div className="sm:col-span-2 flex justify-between items-center">
                <span className="text-xs text-slate-400">
                  {t("contact.weReply")}
                </span>

                <div className="flex gap-4">
                  <button className="px-6 py-3 rounded-lg bg-[#ff1e75] hover:bg-[#db2777] shadow-pink transition-all">
                    {t("contact.sendMessageBtn")}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setFormState({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      });
                      setStatus(null);
                    }}
                    className="px-6 py-3 rounded-lg bg-[#1e293b] border border-[#233554] text-slate-300 hover:bg-[#233554]"
                  >
                    {t("contact.resetBtn")}
                  </button>
                </div>
              </div>

              {/* STATUS MESSAGE */}
              {status && (
                <p
                  className={`sm:col-span-2 text-sm mt-1 ${
                    status.type === "error"
                      ? "text-red-400"
                      : status.type === "success"
                      ? "text-green-400"
                      : "text-slate-300"
                  }`}
                >
                  {status.msg}
                </p>
              )}
            </form>

            {/* MAP */}
            <div className="mt-10 border-t border-[#233554] pt-6">
              <h4 className="font-semibold text-cyan-300">
                {t("contact.officeTitle")}
              </h4>

              <div className="w-full h-64 rounded-xl overflow-hidden border border-[#233554] mt-3">
                <iframe
                  title="office-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11601966493!2d72.74109916389645!3d19.08219783906078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63f0f6b6b99%3A0x7c4e5b9db6d8!2sMumbai!5e0!3m2!1sen!2sin!4v1600000000000"
                  className="w-full h-full"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </section>

          {/* RIGHT SIDEBAR */}
          <aside
            className={`flex flex-col gap-6 transition-all ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* CONTACT OPTIONS */}
            <div className="p-6 rounded-xl neon-glass border border-[#233554]">
              <h5 className="font-semibold text-cyan-300">
                {t("contact.contactOptionsTitle")}
              </h5>

              <ul className="mt-4 space-y-4 text-sm">
                {[
                  {
                    icon: "📞",
                    title: t("contact.phone"),
                    text: "+91 1234 567 890",
                  },
                  {
                    icon: "✉️",
                    title: t("contact.email"),
                    text: t("contact.emailLabel"),
                  },
                  {
                    icon: "📍",
                    title: t("contact.office"),
                    text: t("contact.officeLocation"),
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-300">
                    <div className="neon-icon">{item.icon}</div>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-xs opacity-70">{item.text}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ CARD */}
            <div className="p-6 rounded-xl neon-glass border border-[#233554]">
              <h5 className="font-semibold text-cyan-300">{t("contact.faqTitle")}</h5>

              <div className="mt-3 space-y-3 text-sm">
                <details className="group">
                  <summary className="cursor-pointer text-slate-300 group-hover:text-cyan-300 transition">
                    {t("contact.faq1Q")}
                  </summary>
                  <p className="mt-2 text-xs text-slate-400">{t("contact.faq1A")}</p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer text-slate-300 group-hover:text-cyan-300 transition">
                    {t("contact.faq2Q")}
                  </summary>
                  <p className="mt-2 text-xs text-slate-400">{t("contact.faq2A")}</p>
                </details>
              </div>
            </div>

            <p className="text-xs text-center text-slate-500">
              {t("contact.urgentNotice")}
            </p>
          </aside>
        </div>

        {/* CTA */}
        <section className="mt-16 rounded-xl p-8 text-center neon-card">
          <h3 className="text-xl font-bold text-cyan-300">
            {t("contact.ctaTitle")}
          </h3>

          <p className="mt-2 text-sm text-slate-300">
            {t("contact.ctaSubtitle")}
          </p>

          <a
            href="#contact-form"
            className="mt-6 inline-block px-6 py-3 rounded-lg bg-[#ff1e75] hover:bg-[#db2777] shadow-pink text-white transition"
          >
            {t("contact.ctaBtn")}
          </a>
        </section>
      </main>

      {/* ANIMATIONS & STYLES */}
      <style>{`
        .neon-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid #233554;
          backdrop-filter: blur(20px);
          box-shadow: 0 0 18px rgba(255,30,117,0.15);
        }
        .neon-glass {
          background: rgba(255,255,255,0.04);
          border: 1px solid #233554;
          backdrop-filter: blur(25px);
          box-shadow: 0 0 18px rgba(56,189,248,0.15);
        }
        .shadow-neon {
          box-shadow: 0 0 20px rgba(255,30,117,0.25);
        }
        .shadow-pink {
          box-shadow: 0 0 20px rgba(255,30,117,0.5);
        }
        .neon-icon {
          width: 42px;
          height: 42px;
          background: rgba(255,255,255,0.06);
          border: 1px solid #233554;
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          font-size: 1.2rem;
          color: #ff1e75;
        }
        .contact-input {
          margin-top: 6px;
          width: 100%;
          padding: 14px;
          border-radius: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid #233554;
          color: white;
          outline: none;
        }
        .contact-input:focus {
          border: 1px solid #38bdf8;
          box-shadow: 0 0 8px rgba(56,189,248,0.4);
        }
        @keyframes slide-fade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-fade {
          animation: slide-fade 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}