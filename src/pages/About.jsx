import React, { useEffect, useState } from "react";
import aboutHero from "../assets/about-hero.jpg";

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const tmo = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(tmo);
  }, []);

  const goToContact = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 antialiased">

      {/* ================= HERO ================= */}
      <section className="relative w-full overflow-hidden">
        <div
          className="w-full h-[340px] sm:h-[420px] md:h-[520px] bg-center bg-cover"
          style={{
            backgroundImage: `linear-gradient(rgba(2,6,23,0.75), rgba(2,6,23,0.75)), url(${aboutHero})`,
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-white font-extrabold leading-tight drop-shadow-2xl"
                style={{ fontSize: "clamp(1.6rem, 6vw, 3.2rem)" }}>
              About Ivexia Pharmaceuticals
            </h1>

            <p className="mt-3 text-slate-200 max-w-2xl mx-auto text-sm sm:text-base">
              Premium ED & performance wellness formulations trusted globally —
              built with science, quality, and modern healthcare standards.
            </p>

            <div className="mt-6 flex justify-center gap-3">
              <a href="#mission"
                 className="rounded-md bg-pink-600 text-white px-5 py-2 shadow hover:scale-[1.02] transition">
                Our Mission
              </a>

              <a href="/contact"
                 onClick={goToContact}
                 className="rounded-md bg-white text-[#020617] px-5 py-2 border">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================ MAIN CONTENT ================ */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">

        {/* ========== WHO WE ARE ========== */}
        <section id="mission"
          className={`bg-[#0b1220]/80 border border-[#233554] rounded-2xl p-6 md:p-10 shadow-xl backdrop-blur-xl ${
            mounted ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* LEFT CONTENT */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-extrabold text-white">
                Who we are
              </h2>

              <p className="mt-3 text-slate-300">
                Ivexia Pharma is a global performance-health company specializing
                in high-potency ED medicines, men’s wellness formulations,
                and internationally compliant pharmaceutical manufacturing.
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                <li className="flex gap-3 items-start">
                  <div className="w-12 h-12 rounded-lg bg-pink-600 flex items-center justify-center text-white text-xl">🏆</div>
                  <div>
                    <div className="font-semibold">20+ Years</div>
                    <div className="text-xs text-slate-400">Industry Expertise</div>
                  </div>
                </li>

                <li className="flex gap-3 items-start">
                  <div className="w-12 h-12 rounded-lg bg-cyan-600 flex items-center justify-center text-white text-xl">🔬</div>
                  <div>
                    <div className="font-semibold">Advanced R&D</div>
                    <div className="text-xs text-slate-400">Potency & quality testing</div>
                  </div>
                </li>

                <li className="flex gap-3 items-start">
                  <div className="w-12 h-12 rounded-lg bg-emerald-600 flex items-center justify-center text-white text-xl">🏭</div>
                  <div>
                    <div className="font-semibold">GMP Manufacturing</div>
                    <div className="text-xs text-slate-400">Global quality systems</div>
                  </div>
                </li>

              </ul>
            </div>

            {/* TRUST BOX */}
            <aside className="bg-white/5 border border-[#233554] p-5 rounded-xl shadow-md text-center">
              <div className="text-sm text-slate-400">Trusted by</div>
              <div className="mt-2 text-3xl font-extrabold text-pink-400">250+</div>
              <div className="text-sm text-slate-400">Global Distributors</div>
            </aside>
          </div>
        </section>

        {/* ========== LEADERSHIP ========== */}
        <section className="mt-10">
          <h3 className="text-xl font-semibold text-white">Leadership</h3>
          <p className="text-sm text-slate-400 mt-2">
            Experienced professionals leading Ivexia’s performance-health innovation.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[aboutHero, aboutHero, aboutHero, aboutHero].map((img, i) => (
              <figure key={i}
                className="bg-white/5 border border-[#233554] rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition">
                <img src={img} alt="" className="w-full h-48 object-cover" />
                <figcaption className="p-4">
                  <div className="font-semibold text-white">Dr. Expert {i + 1}</div>
                  <div className="text-xs text-slate-400">Head of Division</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* OUR JOURNEY */}
        <section className="mt-12 text-slate-100">
          <h3 className="text-2xl font-bold">Our Journey</h3>

          <div className="mt-6 space-y-5">
            {[
              { year: "2006", title: "Foundation", text: "Started as a performance-health research lab." },
              { year: "2014", title: "Global Expansion", text: "Entered EU & Middle-East markets." },
              { year: "2022", title: "ED Excellence", text: "Became a leading exporter for Tadalafil & Sildenafil range." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-[#233554] rounded-xl p-5 backdrop-blur-xl"
              >
                <div className="text-pink-400 font-bold">{item.year}</div>
                <div className="font-semibold text-white">{item.title}</div>
                <p className="text-slate-400 text-sm mt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========== WHY CHOOSE US ========== */}
        <section className="mt-12">
          <h3 className="text-xl font-semibold text-white">Why Choose Ivexia</h3>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "ED Performance Excellence", text: "Potent Sildenafil & Tadalafil range." },
              { title: "Global Export Focus", text: "20+ countries served with reliability." },
              { title: "Strict QC Standards", text: "Potency, assay, uniformity testing." },
              { title: "Private Label Manufacturing", text: "Your brand — our formulations." },
            ].map((v, idx) => (
              <div key={idx}
                className="p-5 rounded-xl bg-gradient-to-br from-[#0b5870] to-[#233554] text-white shadow-lg">
                <div className="font-semibold">{v.title}</div>
                <div className="mt-2 text-sm opacity-90">{v.text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 rounded-xl p-8 bg-gradient-to-r from-pink-600 to-pink-500 text-white shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Partner with Ivexia</h3>
            <p className="mt-2 text-sm">
              Build your ED & performance product portfolio with a trusted pharma manufacturer.
            </p>
            <a href="/contact"
               className="mt-4 inline-block bg-white text-pink-600 px-6 py-2 rounded-md">
              Get in Touch
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/5 p-6 rounded-xl shadow-lg border border-[#233554]">
            <h4 className="font-semibold text-white">FAQs</h4>

            <div className="mt-4 space-y-3 text-sm text-slate-300">
              {[
                { q: "Do you manufacture ED medicines?", a: "Yes, including Sildenafil, Tadalafil, Vardenafil & Dapoxetine." },
                { q: "Do you support private label?", a: "Yes, for global distributors and exporters." },
                { q: "What are your MOQs?", a: "Flexible MOQs depending on formulation." },
              ].map((f, idx) => (
                <details key={idx} className="cursor-pointer">
                  <summary className="text-white">{f.q}</summary>
                  <div className="mt-2 text-slate-400">{f.a}</div>
                </details>
              ))}
            </div>
          </div>

          {/* Ready to talk */}
          <div className="bg-white/5 p-6 rounded-xl shadow-lg border border-[#233554]">
            <h4 className="font-semibold text-white">Ready to talk?</h4>
            <p className="mt-2 text-sm text-slate-300">
              Contact us for quotation, documentation or distributor partnership.
            </p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a className="rounded-md bg-pink-600 text-white px-4 py-2 text-center">
                Request Consultation
              </a>
              <a className="rounded-md border border-[#233554] px-4 py-2 text-center">
                Call Us
              </a>
            </div>
          </div>
        </section>

      </main>

      <div className="h-24" />

      {/* ANIMATION */}
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
