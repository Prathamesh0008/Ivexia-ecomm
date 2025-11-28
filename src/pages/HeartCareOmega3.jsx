
import React from 'react';
import { useNavigate } from 'react-router-dom';
import malegraProImg from '../assets/malegra-pro.jpg'; // Replace with your actual product image

const HeartCareOmega3 = () => {
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
              src={malegraProImg}
              alt="Box of Malegra Pro Sildenafil Tablets"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-3">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Malegra Pro 50 Sildenafil Tablets - EDpharma
            </h1>
            <p className="text-sm md:text-base text-slate-600">
              Professional grade sildenafil tablets to support male sexual function and confidence. Helps in achieving and maintaining erections effectively for better sexual health.
            </p>
            <p className="text-sm md:text-base font-semibold text-brand">
              Box of 10 tablets &middot; ₹120
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm text-slate-700">
              <li>
                Take one tablet 30-60 minutes before sexual activity, as directed by your physician.
              </li>
              <li>
                Consult a healthcare professional before use if you have heart conditions or are taking nitrates.
              </li>
              <li>
                Not suitable for women and children. Avoid alcohol during usage.
              </li>
            </ul>
            <p className="text-[11px] md:text-xs text-slate-500">
              Read the patient leaflet thoroughly before use. Do not exceed recommended dosage and store in a cool, dry place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeartCareOmega3;
