import React, { useEffect, useState } from "react";

export default function AdPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000); // 2 seconds popup delay

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
      onClick={() => setOpen(false)}
    >
      {/* POPUP CARD */}
      <div
        className="
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          bg-[#0b0d12] 
          border border-pink-500/40 
          shadow-xl shadow-pink-600/20 
          rounded-2xl 
          overflow-hidden
          max-w-sm w-[90%]
          animate-popup
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          className="
            absolute right-3 top-3
            text-pink-300 hover:text-white
            text-xl font-bold
          "
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        {/* IMAGE */}
        <img
          src="https://www.kamagraoriginal.to/images/SIDE-bitcoin-ES.png"
          alt="Ad"
          className="w-full object-cover"
        />

        {/* TEXT */}
        <div className="p-5 text-center">
          <h2 className="text-lg font-bold text-pink-400">
            Special Offer Available
          </h2>
          <p className="text-slate-300 text-sm mt-2">
            Trusted performance products. Export-ready & pharma-grade quality.
          </p>

          <button
            className="
              mt-4 px-6 py-2 rounded-full 
              bg-pink-500 hover:bg-pink-400 
              text-white font-semibold text-sm 
              shadow-md shadow-pink-600/30
            "
            onClick={() => setOpen(false)}
          >
            Explore Products
          </button>
        </div>
      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes popup-scale {
            0% { transform: scale(0.7); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-popup {
            animation: popup-scale 0.25s ease-out;
          }
        `}
      </style>
    </div>
  );
}
