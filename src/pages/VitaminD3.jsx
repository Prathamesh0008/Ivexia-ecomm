// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import vitD3Img from '../assets/vitamin-d3.jpg';

// const VitaminD3 = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="px-4 md:px-8 lg:px-10 py-8 md:py-12">
//       <div className="max-w-4xl mx-auto space-y-6">
//         <button
//           type="button"
//           onClick={() => navigate(-1)}
//           className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs md:text-sm text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
//         >
//           ← Back
//         </button>

//         <div className="grid gap-6 md:grid-cols-[1.1fr,1.4fr] items-start rounded-3xl bg-white/90 p-5 md:p-8 shadow-soft">
//           <div className="rounded-2xl overflow-hidden bg-brand-light/40">
//             <img
//               src={vitD3Img}
//               alt="Pack of Vitamin D3 softgel capsules"
//               className="h-full w-full object-cover"
//             />
//           </div>
//           <div className="space-y-3">
//             <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
//               Vitamin D3 Softgels
//             </h1>
//             <p className="text-sm md:text-base text-slate-600">
//               High-absorption vitamin D3 capsules designed to support healthy
//               bones, teeth and immune function in adults with low sun exposure
//               or increased requirements.
//             </p>
//             <p className="text-sm md:text-base font-semibold text-brand">
//               Pack of 60 softgels &middot; ₹349
//             </p>
//             <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm text-slate-700">
//               <li>Each softgel typically contains 1000 IU of vitamin D3.</li>
//               <li>Take once daily with a main meal or as directed by your doctor.</li>
//               <li>
//                 Do not exceed the recommended dose. Long-term high intake may
//                 lead to elevated calcium levels.
//               </li>
//             </ul>
//             <p className="text-[11px] md:text-xs text-slate-500">
//               This product is a dietary supplement and not intended to diagnose,
//               treat, cure, or prevent any disease. People with kidney problems,
//               hypercalcaemia or on other vitamin D products should consult a
//               physician before use.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VitaminD3;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import malegra50Img from '../assets/malegra-50.jpg'; // Replace with your actual product image

const VitaminD3 = () => {
  const navigate = useNavigate();

  return (
    <section className="px-4 md:px-8 lg:px-10 py-8 md:py-12">
      <div className="max-w-4xl mx-auto space-y-6">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs md:text-sm text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
        >
          ← Back
        </button>

        <div className="grid gap-6 md:grid-cols-[1.1fr,1.4fr] items-start rounded-3xl bg-white/90 p-5 md:p-8 shadow-soft">
          <div className="rounded-2xl overflow-hidden bg-brand-light/40">
            <img
              src={malegra50Img}
              alt="Box of Malegra 50 Sildenafil Tablets"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-3">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Malegra 50 Sildenafil Tablets - EDpharma
            </h1>
            <p className="text-sm md:text-base text-slate-600">
              Malegra 50 mg is used to treat erectile dysfunction (ED) in adult men. It works by relaxing muscles and increasing blood flow to particular areas of the body to help achieve and maintain an erection suitable for sexual activity.
            </p>
            <p className="text-sm md:text-base text-slate-600">
              Sildenafil, the active ingredient, is part of a group of medicines known as PDE-5 inhibitors. Malegra 50 provides a reliable and safe option backed by rigorous quality standards.
            </p>
            <p className="text-sm md:text-base font-semibold text-brand">
              Box of 10 tablets &middot; ₹91
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm text-slate-700">
              <li>
                Dosage: Take one tablet about 30-60 minutes before sexual activity. Do not take more than one tablet in 24 hours.
              </li>
              <li>
                Consult your doctor before use if you have cardiovascular issues, low blood pressure, liver or kidney problems, or are taking nitrates or other medications.
              </li>
              <li>
                Side effects may include headache, flushing, nasal congestion, dizziness, or upset stomach. Seek medical attention if you experience severe side effects like chest pain or prolonged erection.
              </li>
              <li>
                Not intended for use by women or children. Avoid alcohol and high-fat meals which can reduce effectiveness.
              </li>
              <li>
                Store in a cool, dry place away from light. Keep out of reach of children.
              </li>
            </ul>
            <p className="text-[11px] md:text-xs text-slate-500">
              Always read the patient information leaflet provided with the medicine. Use only as directed by a healthcare professional. If symptoms persist, seek medical advice promptly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitaminD3;
