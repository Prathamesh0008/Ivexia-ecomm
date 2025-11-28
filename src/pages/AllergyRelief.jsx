


import React from 'react';
import { useNavigate } from 'react-router-dom';
import penonCreamImg from '../assets/penon-cream.jpg'; // Replace with your actual product image

const AllergyRelief = () => {
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
              src={penonCreamImg}
              alt="Penon Herbal Massage Cream"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-3">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Penon Herbal Massage Cream - EDpharma
            </h1>
            <p className="text-sm md:text-base text-slate-600">
              Herbal massage cream formulated with Jethimadh, Ashwagandha, Aloevera, and other natural ingredients to enhance male sexual health and performance.
            </p>
            <p className="text-sm md:text-base font-semibold text-brand">
              Tube of 100g &middot; ₹250
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm text-slate-700">
              <li>
                Apply externally as recommended for male enhancement and improved vitality.
              </li>
              <li>
                Use regularly for best effects; avoid contact with eyes and sensitive areas.
              </li>
              <li>
                Not recommended for use by children. Consult a healthcare professional if irritation occurs.
              </li>
            </ul>
            <p className="text-[11px] md:text-xs text-slate-500">
              For external use only. Keep out of reach of children. Read the instructions before use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllergyRelief;
