import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import aboutHero from "../assets/about-hero.jpg";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const tmo = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(tmo);
  }, []);

  const goToContact = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    navigate("/contact", { state: { scroll: true } });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">
      {/* HERO */}
      <section className="relative w-full overflow-hidden">
        <div
          className="w-full h-[340px] sm:h-[420px] md:h-[520px] bg-center bg-cover"
          style={{
            backgroundImage: `linear-gradient(rgba(3,37,55,0.45), rgba(3,37,55,0.25)), url(${aboutHero})`,
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1
              className="text-white font-extrabold leading-tight drop-shadow-2xl"
              style={{ fontSize: "clamp(1.6rem, 6vw, 3.2rem)" }}
            >
              {t("about.heroTitle")}
            </h1>

            <p className="mt-3 text-white/90 max-w-2xl mx-auto text-sm sm:text-base">
              {t("about.heroSubtitle")}
            </p>

            <div className="mt-6 flex justify-center gap-3">
              <a className="rounded-md bg-peacock-600 text-white px-5 py-2 shadow hover:scale-[1.02] transition" href="#mission">
                {t("about.missionBtn")}
              </a>

              <a
                href="/contact"
                onClick={goToContact}
                className="rounded-md bg-white text-peacock-700 px-5 py-2 border"
              >
                {t("about.contactBtn")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">

        {/* WHO WE ARE */}
        <section
          className={`bg-gradient-to-br from-white to-[#f2fbff] rounded-2xl p-6 md:p-10 shadow-lg ${
            mounted ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-extrabold text-slate-800">
                {t("about.whoWeAreTitle")}
              </h2>

              <p className="mt-3 text-gray-600">{t("about.whoWeAreText")}</p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">

                <li className="flex gap-3 items-start">
                  <div className="w-12 h-12 rounded-lg bg-peacock-700 text-white flex items-center justify-center">🏆</div>
                  <div>
                    <div className="font-semibold">{t("about.yearsExperience")}</div>
                    <div className="text-xs text-gray-500">{t("about.yearsExperienceSub")}</div>
                  </div>
                </li>

                <li className="flex gap-3 items-start">
                  <div className="w-12 h-12 rounded-lg bg-peacock-600 text-white flex items-center justify-center">🔬</div>
                  <div>
                    <div className="font-semibold">{t("about.strongRD")}</div>
                    <div className="text-xs text-gray-500">{t("about.strongRDSub")}</div>
                  </div>
                </li>

                <li className="flex gap-3 items-start">
                  <div className="w-12 h-12 rounded-lg bg-[#3386BC] text-white flex items-center justify-center">🏭</div>
                  <div>
                    <div className="font-semibold">{t("about.gmpUnits")}</div>
                    <div className="text-xs text-gray-500">{t("about.gmpUnitsSub")}</div>
                  </div>
                </li>

              </ul>
            </div>

            <aside className="bg-gradient-to-br from-[#ffffff] to-[#e9f7ff] p-5 rounded-xl shadow-md text-center">
              <div className="text-sm text-gray-500">{t("about.trustedBy")}</div>
              <div className="mt-2 text-3xl font-extrabold text-peacock-700">{t("about.trustedNumber")}</div>
              <div className="text-sm text-gray-500">{t("about.partnersClients")}</div>
            </aside>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="mt-10">
          <h3 className="text-xl font-semibold">{t("about.leadershipTitle")}</h3>
          <p className="text-sm text-gray-600 mt-2">{t("about.leadershipSubtitle")}</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["/mnt/data/img1.png", "/mnt/data/img1.png", "/mnt/data/img1.png", "/mnt/data/img1.png"].map(
              (img, i) => (
                <figure
                  key={i}
                  className="bg-gradient-to-br from-white to-[#f2fbff] rounded-xl overflow-hidden shadow-lg transform transition hover:-translate-y-2"
                >
                  <img src={img} alt={`team-${i + 1}`} className="w-full h-48 object-cover" />
                  <figcaption className="p-4">
                    <div className="font-semibold">Dr. Name {i + 1}</div>
                    <div className="text-xs text-gray-500 mt-1">Role / Head</div>
                  </figcaption>
                </figure>
              )
            )}
          </div>
        </section>

        {/* JOURNEY */}
        <section className="mt-12">
          <h3 className="text-xl font-semibold">{t("about.journeyTitle")}</h3>
          <p className="text-sm text-gray-600 mt-2">{t("about.journeySubtitle")}</p>

          <div className="mt-6 space-y-6">
            {t("about.journeyItems", { returnObjects: true }).map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-3 text-peacock-700 font-semibold text-lg">{item.year}</div>

                <div className="md:col-span-9 bg-gradient-to-br from-white to-[#fbfeff] p-4 rounded-xl shadow-md transform transition hover:scale-[1.01]">
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-sm text-gray-600 mt-1">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="mt-12">
          <h3 className="text-xl font-semibold">{t("about.whyChooseTitle")}</h3>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t("about.whyChoose", { returnObjects: true }).map((v, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-gradient-to-br from-[#0b5870] to-[#3386BC] text-white shadow-lg transform transition hover:-translate-y-2"
              >
                <div className="font-semibold">{v.title}</div>
                <div className="mt-2 text-sm opacity-90">{v.text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="mt-12 rounded-xl p-8 bg-gradient-to-r from-[#043646] via-[#0b5870] to-[#3386BC] text-white shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold">{t("about.partnerTitle")}</h3>
            <p className="mt-2 text-sm">{t("about.partnerSubtitle")}</p>

            <div className="mt-4">
              <a
                href="/contact"
                onClick={goToContact}
                className="rounded-md bg-white text-peacock-700 px-6 py-2"
              >
                {t("about.getInTouchBtn")}
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-white to-[#f2fbff] p-6 rounded-xl shadow-lg">
            <h4 className="font-semibold">{t("about.faqTitle")}</h4>

            <div className="mt-4 space-y-3 text-sm text-gray-600">
              {t("about.faq", { returnObjects: true }).map((f, idx) => (
                <details key={idx}>
                  <summary className="cursor-pointer">{f.q}</summary>
                  <div className="mt-2 text-gray-500">{f.a}</div>
                </details>
              ))}
            </div>
          </div>

          {/* READY TO TALK */}
          <div className="bg-gradient-to-br from-white to-[#f2fbff] p-6 rounded-xl shadow-lg">
            <h4 className="font-semibold">{t("about.readyTalkTitle")}</h4>
            <p className="mt-2 text-sm text-gray-600">{t("about.readyTalkSubtitle")}</p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a className="rounded-md bg-peacock-600 text-white px-4 py-2 text-center">
                {t("about.requestConsultationBtn")}
              </a>
              <a className="rounded-md border px-4 py-2 text-center">
                {t("about.callUsText")}
              </a>
            </div>
          </div>
        </section>

      </main>

      <div className="h-24" />

      {/* ANIMATIONS */}
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(8px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slideUp 650ms cubic-bezier(.2,.9,.2,1) both;
        }
      `}</style>
    </div>
  );
}
