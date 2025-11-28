import React, { useEffect, useState } from "react";

export default function PageLoader() {
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setFade(false), 300); // fade-out duration
    return () => clearTimeout(t1);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-[#020617] flex items-center justify-center transition-opacity duration-300 z-[9999] ${
        fade ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Neon loading dot animation */}
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-150"></div>
        <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
}
