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


import React from 'react';
import heroTerms from '../assets/image2.jpg';
import heroExtra from '../assets/image3.jpg';

const Terms = () => {
  return (
    <section className="px-4 md:px-8 lg:px-10 py-8 md:py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Hero banner styled like image2 */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr,1fr] items-center rounded-3xl bg-teal-600 text-white overflow-hidden shadow-soft">
          <div className="px-6 py-8 md:px-10 md:py-10 space-y-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Terms &amp; Conditions
            </h1>
            <p className="text-sm md:text-base text-teal-100">
              These Terms &amp; Conditions govern your use of the EDpharma
              website and the purchase of prescription and over-the-counter
              products supplied through licensed pharmacies.
            </p>
            <p className="text-xs md:text-sm text-teal-100/90">
              By accessing or ordering from this site you confirm that you are
              at least 18 years old and agree to comply with all applicable
              healthcare and pharmacy regulations.
            </p>
          </div>
          <div className="h-full w-full">
            <img
              src={heroTerms}
              alt="Doctor offering exceptional medical care in a clinical setting"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Two-column structure inspired by image2 left tabs + right content */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr,2fr]">
          <aside className="space-y-3">
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              Overview of key sections
            </h2>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="rounded-xl bg-teal-50 px-3 py-2 font-medium text-teal-900">
                Scope of service
              </li>
              <li className="rounded-xl bg-white px-3 py-2 border border-slate-200 text-slate-700">
                Prescription medicines
              </li>
              <li className="rounded-xl bg-white px-3 py-2 border border-slate-200 text-slate-700">
                OTC &amp; wellness products
              </li>
              <li className="rounded-xl bg-white px-3 py-2 border border-slate-200 text-slate-700">
                Returns &amp; refunds
              </li>
              <li className="rounded-xl bg-white px-3 py-2 border border-slate-200 text-slate-700">
                Liability &amp; safety
              </li>
              <li className="rounded-xl bg-white px-3 py-2 border border-slate-200 text-slate-700">
                Compliance &amp; privacy
              </li>
            </ul>
          </aside>

          <div className="space-y-8 rounded-3xl bg-white/90 p-6 md:p-8 shadow-soft">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                1. Scope of service
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-slate-700">
                EDpharma operates an online platform that enables you to browse, order and pay for pharmaceutical products that are dispensed and delivered by licensed pharmacies. The platform does not replace consultation with a qualified healthcare professional.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-slate-700">
                Product information, images and content are provided for general guidance only and may not be exhaustive. Always read the label, packaging and patient information leaflet before use.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                2. Prescription medicines
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base leading-relaxed text-slate-700">
                <li>
                  Prescription‑only medicines are supplied only against a valid prescription issued by a registered medical practitioner.
                </li>
                <li>
                  Prescriptions may be verified by the partner pharmacy, which can decline or modify an order if the prescription is incomplete, invalid or clinically inappropriate.
                </li>
                <li>
                  You must not share prescription medicines with any other person or use them for any indication other than the one prescribed.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                3. OTC &amp; wellness products
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-slate-700">
                Over‑the‑counter medicines, supplements and wellness products are provided for self‑care under your responsibility. If you are pregnant, breastfeeding, have chronic conditions or take other medicines, seek medical advice before purchase.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-slate-700">
                Self‑medication has limits. Persistent or worsening symptoms require prompt clinical evaluation.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                4. Returns, refunds &amp; shipping
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base leading-relaxed text-slate-700">
                <li>
                  For safety reasons, medicines (especially temperature‑sensitive and cold‑chain items such as certain vaccines or insulin) cannot usually be returned once dispensed and delivered, unless there is a verified dispensing error, damage or tampering at the time of delivery.
                </li>
                <li>
                  You must inspect the package on delivery and report visible damage, missing items or near‑expiry products within 24 hours via the support channels listed on the site.
                </li>
                <li>
                  Refunds are processed in accordance with applicable pharmaceutical and consumer‑protection regulations and may be subject to investigation by the partner pharmacy and courier.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                5. Liability &amp; medical safety
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-slate-700">
                The information provided on this site is for educational and transactional purposes only and does not constitute medical diagnosis or treatment. Always consult a healthcare professional regarding your specific condition.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-slate-700">
                To the maximum extent permitted by law, EDpharma is not liable for indirect, incidental or consequential damages arising from misuse of products, failure to follow medical advice or delays caused by factors beyond reasonable control.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                6. Regulatory compliance &amp; privacy
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-slate-700">
                The service is operated in compliance with applicable pharmacy, medicines and consumer‑protection regulations in the jurisdictions where it is offered. Certain products or services may not be available in all locations.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-slate-700">
                Processing of personal data, including any health‑related data shared during an order, is described in the Privacy &amp; Policy page. By using this site you also agree to that privacy notice.
              </p>
            </section>
          </div>
        </div>

        {/* Visual bottom section echoing image3 cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white/90 p-5 shadow-soft">
            <img
              src={heroExtra}
              alt="Medical team in an operating room"
              className="mb-3 h-32 w-full rounded-xl object-cover"
            />
            <h3 className="text-base md:text-lg font-semibold text-slate-900">
              Safe handling &amp; storage
            </h3>
            <p className="mt-1 text-xs md:text-sm text-slate-600">
              Follow storage instructions on the pack. Many medicines must be kept away from light, moisture or extreme temperatures. Keep all medicines out of reach of children.
            </p>
          </div>
          <div className="rounded-2xl bg-white/90 p-5 shadow-soft">
            <h3 className="text-base md:text-lg font-semibold text-slate-900">
              Customer support
            </h3>
            <p className="mt-1 text-xs md:text-sm text-slate-600">
              If you have questions about your order, contact our support team or the dispensing pharmacy using details provided on your invoice and confirmation email.
            </p>
          </div>
          <div className="rounded-2xl bg-white/90 p-5 shadow-soft">
            <h3 className="text-base md:text-lg font-semibold text-slate-900">
              Changes to terms
            </h3>
            <p className="mt-1 text-xs md:text-sm text-slate-600">
              These Terms &amp; Conditions may be updated periodically. The version displayed on the website at the time of purchase applies to that transaction. Please review the terms regularly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
