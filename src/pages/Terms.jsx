// import React from 'react';
// import heroTerms from '../assets/image2.jpg';
// import heroExtra from '../assets/image3.jpg';

// const Terms = () => {
//   return (
//     <section className="px-4 md:px-8 lg:px-10 py-8 md:py-12">
//       <div className="max-w-6xl mx-auto space-y-10">
//         {/* Hero banner styled like image2 */}
//         <div className="grid gap-6 lg:grid-cols-[1.4fr,1fr] items-center rounded-3xl bg-teal-600 text-white overflow-hidden shadow-soft">
//           <div className="px-6 py-8 md:px-10 md:py-10 space-y-4">
//             <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
//               Terms &amp; Conditions
//             </h1>
//             <p className="text-sm md:text-base text-teal-100">
//               These Terms &amp; Conditions govern your use of the MediCare Pharma
//               website and the purchase of prescription and over-the-counter
//               products supplied through licensed pharmacies.
//             </p>
//             <p className="text-xs md:text-sm text-teal-100/90">
//               By accessing or ordering from this site you confirm that you are
//               at least 18 years old and agree to comply with all applicable
//               healthcare and pharmacy regulations.
//             </p>
//           </div>
//           <div className="h-full w-full">
//             <img
//               src={heroTerms}
//               alt="Doctor offering exceptional medical care in a clinical setting"
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </div>

//         {/* Two-column structure inspired by image2 left tabs + right content */}
//         <div className="grid gap-8 lg:grid-cols-[0.9fr,2fr]">
//           <aside className="space-y-3">
//             <h2 className="text-lg md:text-xl font-semibold text-slate-900">
//               Overview of key sections
//             </h2>
//             <ul className="space-y-2 text-sm md:text-base">
//               <li className="rounded-xl bg-teal-50 px-3 py-2 font-medium text-teal-900">
//                 Scope of service
//               </li>
//               <li className="rounded-xl bg-white px-3 py-2 border border-slate-200 text-slate-700">
//                 Prescription medicines
//               </li>
//               <li className="rounded-xl bg-white px-3 py-2 border border-slate-200 text-slate-700">
//                 OTC &amp; wellness products
//               </li>
//               <li className="rounded-xl bg-white px-3 py-2 border border-slate-200 text-slate-700">
//                 Returns &amp; refunds
//               </li>
//               <li className="rounded-xl bg-white px-3 py-2 border border-slate-200 text-slate-700">
//                 Liability &amp; safety
//               </li>
//               <li className="rounded-xl bg-white px-3 py-2 border border-slate-200 text-slate-700">
//                 Compliance &amp; privacy
//               </li>
//             </ul>
//           </aside>

//           <div className="space-y-8 rounded-3xl bg-white/90 p-6 md:p-8 shadow-soft">
//             <section className="space-y-3">
//               <h2 className="text-xl font-semibold text-slate-900">
//                 1. Scope of service
//               </h2>
//               <p className="text-sm md:text-base leading-relaxed text-slate-700">
//                 MediCare Pharma operates an online platform that enables you to
//                 browse, order and pay for pharmaceutical products that are
//                 dispensed and delivered by licensed pharmacies. The platform
//                 does not replace consultation with a qualified healthcare
//                 professional.
//               </p>
//               <p className="text-sm md:text-base leading-relaxed text-slate-700">
//                 Product information, images and content are provided for
//                 general guidance only and may not be exhaustive. Always read
//                 the label, packaging and patient information leaflet before use.
//               </p>
//             </section>

//             <section className="space-y-3">
//               <h2 className="text-xl font-semibold text-slate-900">
//                 2. Prescription medicines
//               </h2>
//               <ul className="list-disc pl-5 space-y-2 text-sm md:text-base leading-relaxed text-slate-700">
//                 <li>
//                   Prescription‑only medicines are supplied only against a valid
//                   prescription issued by a registered medical practitioner.
//                 </li>
//                 <li>
//                   Prescriptions may be verified by the partner pharmacy, which
//                   can decline or modify an order if the prescription is
//                   incomplete, invalid or clinically inappropriate.
//                 </li>
//                 <li>
//                   You must not share prescription medicines with any other
//                   person or use them for any indication other than the one
//                   prescribed.
//                 </li>
//               </ul>
//             </section>

//             <section className="space-y-3">
//               <h2 className="text-xl font-semibold text-slate-900">
//                 3. OTC &amp; wellness products
//               </h2>
//               <p className="text-sm md:text-base leading-relaxed text-slate-700">
//                 Over‑the‑counter medicines, supplements and wellness products
//                 are provided for self‑care under your responsibility. If you
//                 are pregnant, breastfeeding, have chronic conditions or take
//                 other medicines, seek medical advice before purchase.
//               </p>
//               <p className="text-sm md:text-base leading-relaxed text-slate-700">
//                 Self‑medication has limits. Persistent or worsening symptoms
//                 require prompt clinical evaluation.
//               </p>
//             </section>

//             <section className="space-y-3">
//               <h2 className="text-xl font-semibold text-slate-900">
//                 4. Returns, refunds &amp; shipping
//               </h2>
//               <ul className="list-disc pl-5 space-y-2 text-sm md:text-base leading-relaxed text-slate-700">
//                 <li>
//                   For safety reasons, medicines (especially temperature‑
//                   sensitive and cold‑chain items such as certain vaccines or
//                   insulin) cannot usually be returned once dispensed and
//                   delivered, unless there is a verified dispensing error,
//                   damage or tampering at the time of delivery.
//                 </li>
//                 <li>
//                   You must inspect the package on delivery and report visible
//                   damage, missing items or near‑expiry products within 24 hours
//                   via the support channels listed on the site.
//                 </li>
//                 <li>
//                   Refunds are processed in accordance with applicable
//                   pharmaceutical and consumer‑protection regulations and may be
//                   subject to investigation by the partner pharmacy and courier.
//                 </li>
//               </ul>
//             </section>

//             <section className="space-y-3">
//               <h2 className="text-xl font-semibold text-slate-900">
//                 5. Liability &amp; medical safety
//               </h2>
//               <p className="text-sm md:text-base leading-relaxed text-slate-700">
//                 The information provided on this site is for educational and
//                 transactional purposes only and does not constitute medical
//                 diagnosis or treatment. Always consult a healthcare
//                 professional regarding your specific condition.
//               </p>
//               <p className="text-sm md:text-base leading-relaxed text-slate-700">
//                 To the maximum extent permitted by law, MediCare Pharma is not
//                 liable for indirect, incidental or consequential damages
//                 arising from misuse of products, failure to follow medical
//                 advice or delays caused by factors beyond reasonable control.
//               </p>
//             </section>

//             <section className="space-y-3">
//               <h2 className="text-xl font-semibold text-slate-900">
//                 6. Regulatory compliance &amp; privacy
//               </h2>
//               <p className="text-sm md:text-base leading-relaxed text-slate-700">
//                 The service is operated in compliance with applicable pharmacy,
//                 medicines and consumer‑protection regulations in the
//                 jurisdictions where it is offered. Certain products or services
//                 may not be available in all locations.
//               </p>
//               <p className="text-sm md:text-base leading-relaxed text-slate-700">
//                 Processing of personal data, including any health‑related data
//                 shared during an order, is described in the Privacy &amp;
//                 Policy page. By using this site you also agree to that privacy
//                 notice.
//               </p>
//             </section>
//           </div>
//         </div>

//         {/* Visual bottom section echoing image3 cards */}
//         <div className="grid gap-6 md:grid-cols-3">
//           <div className="rounded-2xl bg-white/90 p-5 shadow-soft">
//             <img
//               src={heroExtra}
//               alt="Medical team in an operating room"
//               className="mb-3 h-32 w-full rounded-xl object-cover"
//             />
//             <h3 className="text-base md:text-lg font-semibold text-slate-900">
//               Safe handling &amp; storage
//             </h3>
//             <p className="mt-1 text-xs md:text-sm text-slate-600">
//               Follow storage instructions on the pack. Many medicines must be
//               kept away from light, moisture or extreme temperatures. Keep all
//               medicines out of reach of children.
//             </p>
//           </div>
//           <div className="rounded-2xl bg-white/90 p-5 shadow-soft">
//             <h3 className="text-base md:text-lg font-semibold text-slate-900">
//               Customer support
//             </h3>
//             <p className="mt-1 text-xs md:text-sm text-slate-600">
//               If you have questions about your order, contact our support team
//               or the dispensing pharmacy using details provided on your invoice
//               and confirmation email.
//             </p>
//           </div>
//           <div className="rounded-2xl bg-white/90 p-5 shadow-soft">
//             <h3 className="text-base md:text-lg font-semibold text-slate-900">
//               Changes to terms
//             </h3>
//             <p className="mt-1 text-xs md:text-sm text-slate-600">
//               These Terms &amp; Conditions may be updated periodically. The
//               version displayed on the website at the time of purchase applies
//               to that transaction. Please review the terms regularly.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Terms;

import React from "react";
import heroTerms from "../assets/image2.jpg";
import heroExtra from "../assets/image3.jpg";

const Terms = () => {
  return (
    <section className="min-h-screen bg-[#020617] text-slate-100 px-4 md:px-8 lg:px-10 py-10">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* ================= HERO BANNER (Ivexia Neon Style) ================= */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr,1fr] items-center 
          rounded-3xl overflow-hidden 
          bg-white/5 border border-[#233554] 
          shadow-[0_0_45px_rgba(15,23,42,0.9)] backdrop-blur-xl">

          {/* Left text */}
          <div className="px-6 py-8 md:px-10 md:py-10 space-y-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Terms & Conditions
            </h1>

            <p className="text-sm md:text-base text-slate-300">
              These Terms & Conditions govern your use of the EDpharma website
              and the purchase of pharmaceutical products supplied through
              licensed pharmacies.
            </p>

            <p className="text-xs md:text-sm text-slate-400">
              By accessing this site, you confirm you are at least 18 years old
              and agree to comply with healthcare regulations.
            </p>
          </div>

          {/* Right side hero image */}
          <div className="h-full w-full">
            <img
              src={heroTerms}
              alt="Medical professional"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* ================= SIDE TABS + CONTENT ================= */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr,2fr]">

          {/* LEFT SIDEBAR */}
          <aside className="space-y-3">
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              Key Sections
            </h2>

            <ul className="space-y-2 text-sm md:text-base">

              <li className="rounded-xl px-3 py-2 font-medium text-pink-300 
                bg-white/10 border border-pink-500/40 shadow-[0_0_15px_rgba(236,72,153,0.4)]">
                Scope of service
              </li>

              {[
                "Prescription medicines",
                "OTC & wellness products",
                "Returns & refunds",
                "Liability & safety",
                "Compliance & privacy",
              ].map((item, i) => (
                <li
                  key={i}
                  className="rounded-xl px-3 py-2 border border-[#233554] bg-white/5 text-slate-300 hover:border-pink-500 hover:text-pink-300 transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>

          {/* ================= RIGHT MAIN CONTENT ================= */}
          <div className="space-y-8 rounded-3xl bg-white/5 border border-[#233554] 
            p-6 md:p-8 backdrop-blur-xl 
            shadow-[0_0_40px_rgba(15,23,42,0.8)]">

            {/* 1 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-white">1. Scope of service</h2>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                EDpharma provides an online platform to browse and order
                pharmaceutical products dispensed by licensed pharmacies.
              </p>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                Product images and descriptions are for reference only. Always read
                packaging and leaflets before use.
              </p>
            </section>

            {/* 2 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-white">2. Prescription medicines</h2>

              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-300 leading-relaxed">
                <li>Supplied only with a valid prescription issued by a registered medical practitioner.</li>
                <li>Partner pharmacy may verify or decline an order if prescription is incomplete or inappropriate.</li>
                <li>You must never share prescription medicines.</li>
              </ul>
            </section>

            {/* 3 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-white">3. OTC & wellness products</h2>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                OTC medicines and supplements are provided under your responsibility.
                Seek medical advice before use if pregnant or having any condition.
              </p>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                Persistent symptoms require a clinical evaluation.
              </p>
            </section>

            {/* 4 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-white">4. Returns, refunds & shipping</h2>

              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-300 leading-relaxed">
                <li>Returned medicines are restricted unless damaged or incorrect.</li>
                <li>Inspect the package upon delivery and report issues within 24 hours.</li>
                <li>Refunds follow pharmacy & consumer-protection laws.</li>
              </ul>
            </section>

            {/* 5 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-white">5. Liability & medical safety</h2>
              <p className="text-sm md:text-base text-slate-300">
                Content is for informational purposes only and not medical advice.
              </p>
              <p className="text-sm md:text-base text-slate-300">
                EDpharma is not liable for misuse, delay, or external factors beyond control.
              </p>
            </section>

            {/* 6 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-white">6. Regulatory compliance & privacy</h2>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                Service complies with pharmaceutical, medicine, and consumer regulations.
              </p>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                All personal data handling follows our Privacy Policy.
              </p>
            </section>

          </div>
        </div>

        {/* ================= BOTTOM INFO CARDS ================= */}
        <div className="grid gap-6 md:grid-cols-3">

          {/* Card 1 */}
          <div className="rounded-2xl bg-white/5 border border-[#233554] 
            p-5 backdrop-blur-xl shadow-[0_0_30px_rgba(15,23,42,0.7)]">
            <img
              src={heroExtra}
              alt="Storage safety"
              className="mb-3 h-32 w-full rounded-xl object-cover"
            />
            <h3 className="text-base md:text-lg font-semibold text-white">
              Safe handling & storage
            </h3>
            <p className="mt-1 text-xs md:text-sm text-slate-300">
              Follow storage instructions carefully—many medicines are
              temperature-sensitive and must be kept away from light and moisture.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-white/5 border border-[#233554] 
            p-5 backdrop-blur-xl shadow-[0_0_30px_rgba(15,23,42,0.7)]">
            <h3 className="text-base md:text-lg font-semibold text-white">
              Customer support
            </h3>
            <p className="mt-1 text-xs md:text-sm text-slate-300">
              For any order-related issues, contact our support team using
              your invoice or confirmation email details.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-white/5 border border-[#233554] 
            p-5 backdrop-blur-xl shadow-[0_0_30px_rgba(15,23,42,0.7)]">
            <h3 className="text-base md:text-lg font-semibold text-white">
              Changes to terms
            </h3>
            <p className="mt-1 text-xs md:text-sm text-slate-300">
              Terms may update periodically. The version shown at the time
              of purchase applies to your transaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
