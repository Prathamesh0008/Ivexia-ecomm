// import React from "react";
// import { Link } from "react-router-dom";
// import PRODUCTS from "../data/Products.mock";

// export default function ProductSlider({ title = "Trending Products", limit = 12 }) {
//   const items = PRODUCTS.slice(0, limit);

//   return (
//     <section className="my-12">
//       <div className="flex items-center justify-between mb-4 px-2">
//         <h2 className="text-xl font-bold text-slate-800">{title}</h2>

//         <div className="flex gap-2">
//           <button
//             className="px-3 py-1 rounded bg-slate-200 hover:bg-slate-300"
//             onClick={() => {
//               document.getElementById(title).scrollBy({ left: -300, behavior: "smooth" });
//             }}
//           >
//             ◀
//           </button>
//           <button
//             className="px-3 py-1 rounded bg-slate-200 hover:bg-slate-300"
//             onClick={() => {
//               document.getElementById(title).scrollBy({ left: 300, behavior: "smooth" });
//             }}
//           >
//             ▶
//           </button>
//         </div>
//       </div>

//       <div
//         id={title}
//         className="flex gap-4 overflow-x-auto scroll-smooth px-2 no-scrollbar pb-3"
//       >
//         {items.map((p) => (
//           <Link
//             key={p.id}
//             to={`/product/${p.slug}`}
//             className="min-w-[170px] max-w-[170px] rounded-xl shadow hover:shadow-lg bg-white duration-200 border"
//           >
//             <img
//               src={p.image}
//               alt={p.name}
//               className="w-full h-36 object-cover rounded-t-xl bg-gray-100"
//             />

//             <div className="p-3">
//               <h3 className="font-semibold text-sm text-slate-800 line-clamp-2">
//                 {p.name}
//               </h3>

//               <p className="text-xs text-gray-500 mt-1">{p.dosage}</p>

//               <button className="mt-3 w-full bg-peacock-600 text-white text-xs py-2 rounded-lg hover:bg-peacock-700">
//                 View Product
//               </button>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }
