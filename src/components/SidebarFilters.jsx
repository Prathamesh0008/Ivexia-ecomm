// import React from "react";

// export default function SidebarFilters({ categories, onSelect }) {
//   return (
//     <aside
//       className="
//         w-full lg:w-64 p-5 rounded-2xl shadow-xl
//         bg-gradient-to-b from-[#0d1b2a] to-[#1b263b]
//         border border-[#2e4a71]
//         text-white space-y-5
//       "
//     >
//       <h2 className="text-xl font-bold">Filter Products</h2>

//       {/* CATEGORY LIST */}
//       <div className="space-y-3">
//         {categories.map((cat) => (
//           <button
//             key={cat.key}
//             onClick={() => onSelect(cat.key)}
//             className="
//               w-full text-left px-4 py-2 rounded-xl
//               bg-white/5 hover:bg-white/10
//               transition-all duration-300
//               border border-white/10
//             "
//           >
//             {cat.label}
//           </button>
//         ))}
//       </div>

//       {/* ADULT PROMO BANNER */}
//       <div className="
//         mt-8 p-4 rounded-xl
//         bg-gradient-to-r from-pink-700 to-red-600
//         text-white shadow-xl
//       ">
//         <h3 className="font-bold text-lg">🔥 Special Packs</h3>
//         <p className="text-sm mt-1">Premium ED Combos · Stronger · Faster</p>

//         <button className="
//           mt-3 px-4 py-2 bg-black/40 rounded-lg
//           hover:bg-black/60 transition text-sm
//         ">
//           Explore Offers
//         </button>
//       </div>

//     </aside>
//   );
// }
